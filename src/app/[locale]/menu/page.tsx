import type { Metadata } from 'next'
import Link from 'next/link'
import { Info } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import MenuPageClient from '@/components/sections/MenuPageClient'
import MenuHeroSection from '@/components/sections/MenuHeroSection'
import { menuCategories, menuItems } from '@/lib/menu-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { SITE_URL } from '@/lib/constants'
import { getMenuSchema, getBreadcrumbSchema } from '@/lib/schema'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Menu Den Haag | Chopras  -  Curries, Tandoori & Street Food',
    nl: 'Indiaas Restaurant Menu Den Haag | Chopras  -  Curry, Tandoori & Streetfood',
  }
  const descriptions = {
    en: 'Browse the full Chopras Indian menu in Den Haag. Fresh curries, tandoori, biryani, chaat and street food. Halal certified. Vegetarian and vegan options clearly labelled.',
    nl: 'Bekijk het volledige Chopras Indiase menu in Den Haag. Verse curry, tandoori, biryani, chaat en streetfood. Halal gecertificeerd. Vegetarische en veganistische opties duidelijk aangegeven.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/menu`,
      languages: {
        en: `${SITE_URL}/en/menu`,
        nl: `${SITE_URL}/nl/menu`,
        'x-default': `${SITE_URL}/en/menu`,
      },
    },
  }
}

export default function LocaleMenuPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const menuSections = menuCategories.map((category) => ({
    name: category.label,
    items: menuItems
      .filter((item) => item.category === category.id)
      .map((item) => ({ name: item.name, description: item.description, price: item.price })),
  }))

  const statPills = [`${menuItems.length} Dishes`, `${menuCategories.length} Categories`, '100% Halal', 'Vegetarian Options', 'Fresh Daily']

  return (
    <>
      <JsonLd data={getMenuSchema(locale, menuSections)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: tr.common.nav.menu, item: `${SITE_URL}/${locale}/menu` },
      ])} />

      {/* HERO  -  scroll-scrubbed butter chicken animation */}
      <MenuHeroSection locale={locale} />

      {/* STAT PILLS */}
      <div
        className="py-6 px-6"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-7xl mx-auto">
          {statPills.map((stat) => (
            <span
              key={stat}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-sm"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      {/* ALLERGEN NOTICE */}
      <div className="bg-[#FFFAF5] py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-r-xl p-6 flex gap-4 items-start">
            <Info className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A1A1A] text-sm">{tr.menu.allergenTitle}</p>
              <p className="text-[#1A1A1A]/70 text-sm mt-1 leading-relaxed">{tr.menu.allergenText}</p>
              <p className="text-[#D4AF37] text-xs font-medium mt-3 uppercase tracking-widest">
                {tr.menu.allergenRequest}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE MENU */}
      <MenuPageClient />

      {/* BOTTOM CTA */}
      <section
        className="py-20 md:py-28 text-center px-6 md:px-16"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-6">
            READY TO ORDER?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            Reserve Your Table at Chopras
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
            Open Tuesday to Sunday · 16:30 to 22:30 · Leyweg 986, Den Haag
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`${base}/contact`}
              className="inline-block bg-[#D4AF37] text-[#1A1A1A] px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#F5D36A] transition-all"
            >
              Reserve a Table
            </Link>
            <a
              href="https://www.thuisbezorgd.nl/menu/chopras-indian-street-food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"
            >
              Order on Thuisbezorgd
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
