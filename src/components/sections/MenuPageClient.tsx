'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Leaf } from 'lucide-react'
import { menuCategories, menuItems } from '@/lib/menu-data'
import type { DietaryTag } from '@/types'
import AddToCartButton from '@/components/cart/AddToCartButton'
import { useInView } from '@/hooks/useInView'

function formatPrice(price: number): string {
  return price % 1 === 0 ? `€${price}` : `€${price.toFixed(2)}`
}

function renderDishTitle(name: string) {
  const match = name.match(/^(.+?)\s*(\([^)]+\))$/)
  if (!match) return name

  const [, mainName, variant] = match
  return (
    <>
      {mainName}{' '}
      <span style={{ fontSize: '0.8em' }}>{variant}</span>
    </>
  )
}

function VegetarianBadge() {
  return (
    <Leaf
      size={24}
      className="text-green-500"
      strokeWidth={2.5}
      fill="currentColor"
    />
  )
}

function VeganBadge() {
  return (
    <div className="relative inline-flex items-center justify-center">
      <Leaf
        size={24}
        className="text-[#2D7A2D]"
        strokeWidth={2.5}
        fill="currentColor"
      />
      <span className="absolute text-white text-xs font-bold inset-0 flex items-center justify-center">
        V
      </span>
    </div>
  )
}

function NonVegBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="#8B0000" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="#8B0000" />
    </svg>
  )
}

function getDietBadge(dietary: DietaryTag[]): 'vegan' | 'vegetarian' | 'nonveg' | null {
  if (dietary.includes('vegan')) {
    return 'vegan'
  }
  if (dietary.includes('veg')) {
    return 'vegetarian'
  }
  return 'nonveg'
}

function DietBadgeComponent({ type }: { type: 'vegan' | 'vegetarian' | 'nonveg' }) {
  switch (type) {
    case 'vegan':
      return <VeganBadge />
    case 'vegetarian':
      return <VegetarianBadge />
    case 'nonveg':
      return <NonVegBadge />
  }
}

function DishGrid({ dishes }: { dishes: typeof menuItems }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {dishes.map((item, index) => {
        const dietBadge = !item.isDrink ? getDietBadge(item.dietary) : null
        return (
          <article
            key={item.id}
            style={{ transitionDelay: `${(index % 8) * 50}ms` }}
            className={`bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ease-out group ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Image */}
            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#1B2B5E]/5 to-[#D4AF37]/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-4xl text-[#1B2B5E]/20">
                  {item.name.charAt(0)}
                </span>
              </div>
              {item.image && (
                <Image
                  src={item.image}
                  alt={`${item.name} at Chopras Indian Restaurant Den Haag`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              )}
              {dietBadge && (
                <div className="absolute top-3 left-3">
                  <DietBadgeComponent type={dietBadge} />
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3 className="font-heading text-xl text-[#1A1A1A] font-semibold leading-tight whitespace-nowrap">
                {renderDishTitle(item.name)}
              </h3>
              <p className="text-[#1A1A1A]/60 text-sm mt-1 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-3">
                <p className="text-[#D4AF37] font-semibold text-lg font-heading">
                  {formatPrice(item.price)}
                </p>
                <AddToCartButton
                  dish={{
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    isHalal: item.dietary.includes('halal'),
                    isVeg: item.dietary.includes('veg') || item.dietary.includes('vegan'),
                  }}
                />
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent this component from triggering scroll restoration
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  useEffect(() => {
    const visibleSections = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })
        for (const cat of menuCategories) {
          if (visibleSections.has(cat.id)) {
            setActiveCategory(cat.id)
            break
          }
        }
      },
      { rootMargin: '-80px 0px -50% 0px' },
    )

    menuCategories.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  function scrollToCategory(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (!navRef.current) return
    const activeBtn = navRef.current.querySelector<HTMLButtonElement>(
      `[data-category="${activeCategory}"]`,
    )
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeCategory])

  return (
    <div className="bg-[#FFFAF5]">
      {/* Sticky category navigation */}
      <nav
        className="sticky top-[100px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
        aria-label="Menu categories"
      >
        <div ref={navRef} className="w-full overflow-x-auto scrollbar-hide py-2">
          <div className="flex gap-2 px-6 md:px-16 min-w-max mx-auto">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                data-category={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`
                  flex-none whitespace-nowrap px-5 py-2.5 rounded-full
                  text-sm font-medium transition-all duration-200
                  ${activeCategory === category.id
                    ? 'bg-[#D4AF37] text-[#1A1A1A] font-semibold shadow-sm'
                    : 'bg-white border border-gray-200 text-[#1A1A1A]/60 hover:border-[#D4AF37]/50 hover:text-[#1A1A1A]'
                  }
                `}
              >
                {category.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {menuCategories.map((category) => {
          const dishes = category.id === 'vegan'
            ? menuItems.filter((item) => item.dietary.includes('vegan'))
            : menuItems.filter((item) => item.category === category.id)

          return (
            <section key={category.id} id={category.id} className="scroll-mt-36">
              {/* Section header */}
              <div className="py-10">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-3">
                  {category.shortLabel}
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#C7A348]">
                  {category.label}
                </h2>
                <div className="border-b-2 border-[#D4AF37] w-16 mt-4" />
              </div>

              {/* Dish grid */}
              <DishGrid dishes={dishes} />
            </section>
          )
        })}
      </div>
    </div>
  )
}
