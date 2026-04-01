'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { menuCategories, menuItems } from '@/lib/menu-data'
import type { DietaryTag } from '@/types'

function formatPrice(price: number): string {
  return price % 1 === 0 ? `€${price}` : `€${price.toFixed(2)}`
}

const dietaryBadgeConfig: Record<DietaryTag, { label: string; className: string }> = {
  veg: { label: 'Veg', className: 'bg-green-100 text-green-800' },
  vegan: { label: 'Vegan', className: 'bg-emerald-100 text-emerald-800' },
  halal: { label: 'Halal', className: 'bg-teal-100 text-teal-800' },
  spicy: { label: 'Spicy', className: 'bg-red-100 text-red-700' },
  mild: { label: 'Mild', className: 'bg-blue-100 text-blue-700' },
  glutenFree: { label: 'Gluten Free', className: 'bg-yellow-100 text-yellow-800' },
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

  // Auto-scroll the active tab into view in the nav bar
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
          className="flex gap-2 px-4 py-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              data-category={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors min-h-[44px] ${
                activeCategory === category.id
                  ? 'bg-[#1B2B5E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#1B2B5E]/10'
              }`}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>
      </nav>

      {/* Category sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {menuCategories.map((category) => {
          const dishes = menuItems.filter((item) => item.category === category.id)
          return (
            <section key={category.id} id={category.id} className="scroll-mt-36">
              {/* Section header */}
              <div className="py-8">
                <h2 className="text-2xl md:text-3xl font-heading text-[#1B2B5E]">
                  {category.label}
                </h2>
                <p className="text-sm text-gray-400 italic">{category.labelNl}</p>
                <div className="border-b-2 border-[#D4AF37] w-16 mt-2" />
              </div>

              {/* Dish grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishes.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Image area */}
                    {item.image ? (
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={`${item.name} at Chopras Indian Restaurant Den Haag`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-[#1B2B5E]/5 to-[#D4AF37]/10 flex items-center justify-center">
                        <span className="font-heading text-[#1B2B5E]/40 text-lg text-center px-4">
                          {item.name}
                        </span>
                      </div>
                    )}

                    {/* Card body */}
                    <div className="p-4">
                      {/* Dietary badges */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${dietaryBadgeConfig[tag].className}`}
                          >
                            {dietaryBadgeConfig[tag].label}
                          </span>
                        ))}
                      </div>

                      {/* Name + price */}
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base font-heading font-semibold text-[#1A1A1A]">
                          {item.name}
                        </h3>
                        <span className="text-[#1B2B5E] font-bold text-base whitespace-nowrap">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* English description */}
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.description}</p>

                      {/* Dutch description */}
                      {item.descriptionNl && (
                        <p className="text-xs text-gray-400 italic leading-relaxed mt-2">
                          {item.descriptionNl}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        })}

        {/* Allergen Notice */}
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-6 mx-4 lg:mx-0 mt-12">
          <h3 className="font-semibold text-amber-900">Allergen Information</h3>
          <p className="text-amber-800 text-sm mt-2">
            Allergen information is available on request. Please inform our staff of any allergies
            or dietary requirements before ordering. This is required under EU Food Information for
            Consumers Regulation No. 1169/2011. Our kitchen handles nuts, dairy, gluten, and other
            common allergens.
          </p>
        </div>
      </div>
    </div>
  )
}
