import Image from 'next/image'
import Link from 'next/link'
import { menuItems } from '@/lib/menu-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import type { DietaryTag } from '@/types'

const dietaryBadgeClasses: Record<DietaryTag, string> = {
  veg: 'bg-green-100 text-green-800',
  vegan: 'bg-emerald-100 text-emerald-800',
  halal: 'bg-teal-100 text-teal-800',
  spicy: 'bg-red-100 text-red-800',
  mild: 'bg-blue-100 text-blue-800',
  glutenFree: 'bg-yellow-100 text-yellow-800',
}

const featured = menuItems.filter((item) => item.featured === true)

export default function FeaturedDishes({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-2">
          {tr.home.featuredH2}
        </h2>
        <p className="text-center text-gray-500 mb-10">{tr.home.featuredSub}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => {
            const name = locale === 'nl' && item.nameNl ? item.nameNl : item.name
            const description =
              locale === 'nl' && item.descriptionNl ? item.descriptionNl : item.description

            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden shadow-md border border-[#f0e6d6]"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${name} bij Chopras Indiaas Restaurant Den Haag`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="bg-[#f5ede0] h-48 flex items-center justify-center">
                    <span className="text-[#1B2B5E] font-medium">{name}</span>
                  </div>
                )}

                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${dietaryBadgeClasses[tag]}`}
                      >
                        {tr.menu.dietary[tag] ?? tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#1A1A1A]">{name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>
                  <p className="text-[#1B2B5E] font-bold text-lg mt-2">€{item.price}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`${base}/menu`}
            className="inline-block bg-[#1B2B5E] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#6d0000] transition-colors min-h-[48px] leading-[24px]"
          >
            {tr.home.featuredCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
