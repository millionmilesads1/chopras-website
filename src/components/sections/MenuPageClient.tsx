'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { menuCategories, menuItems } from '@/lib/menu-data'
import type { DietaryTag } from '@/types'
import AddToCartButton from '@/components/cart/AddToCartButton'

function formatPrice(price: number): string {
  return price % 1 === 0 ? `€${price}` : `€${price.toFixed(2)}`
}

type BadgeConfig = { label: string; className: string }

const primaryBadgeConfig: Partial<Record<DietaryTag, BadgeConfig>> = {
  veg: { label: 'Veg', className: 'bg-green-500 text-white' },
  vegan: { label: 'Vegan', className: 'bg-emerald-600 text-white' },
  halal: { label: 'Halal', className: 'bg-[#D4AF37] text-[#1A1A1A]' },
}

function getPrimaryBadge(dietary: DietaryTag[]): BadgeConfig | null {
  const priority: DietaryTag[] = ['veg', 'vegan', 'halal']
  const match = priority.find((tag) => dietary.includes(tag))
  return match ? (primaryBadgeConfig[match] ?? null) : null
}

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id)
  const navRef = useRef<HTMLDivElement>(null)

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
        className="sticky top-16 md:top-20 z-40 bg-white shadow-sm border-b border-gray-100"
        aria-label="Menu categories"
      >
        <div
          ref={navRef}
          className="flex gap-2 px-6 py-4 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              data-category={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === category.id
                  ? 'bg-[#D4AF37] text-[#1A1A1A] font-semibold'
                  : 'border border-[#1B2B5E]/20 text-[#1A1A1A]/60 hover:border-[#1B2B5E]/50'
              }`}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>
      </nav>

      {/* Category sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        {menuCategories.map((category) => {
          const dishes = menuItems.filter((item) => item.category === category.id)
          return (
            <section key={category.id} id={category.id} className="scroll-mt-36">
              {/* Section header */}
              <div className="py-10">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-3">
                  {category.labelNl}
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E]">
                  {category.label}
                </h2>
                <div className="border-b-2 border-[#D4AF37] w-16 mt-4" />
              </div>

              {/* Dish grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dishes.map((item) => {
                  const badge = getPrimaryBadge(item.dietary)
                  return (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={`${item.name} at Chopras Indian Restaurant Den Haag`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1B2B5E]/5 to-[#D4AF37]/10 flex items-center justify-center">
                            <span className="font-heading text-[#1B2B5E]/40 text-base text-center px-4">
                              {item.name}
                            </span>
                          </div>
                        )}
                        {badge && (
                          <span
                            className={`absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-semibold uppercase ${badge.className}`}
                          >
                            {badge.label}
                          </span>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <h3 className="font-heading text-xl text-[#1A1A1A] font-semibold leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-[#1A1A1A]/60 text-sm mt-1 leading-relaxed line-clamp-2">
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
            </section>
          )
        })}
      </div>
    </div>
  )
}
