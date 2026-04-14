import type { Metadata } from 'next'
import Link from 'next/link'
import { Info } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import MenuPageClient from '@/components/sections/MenuPageClient'
import MenuHeroSection from '@/components/sections/MenuHeroSection'
import { menuCategories, menuItems } from '@/lib/menu-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { getLocalizedUrl } from '@/lib/utils'
import { getMenuSchema, getBreadcrumbSchema } from '@/lib/schema'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Menu Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant Menu Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant menu Den Haag at Chopras Indian Restaurant. 143 fresh dishes including curries, tandoori and biryani. Halal certified. Order online or dine in.',
    nl: 'Bekijk het volledige Chopras Indiase menu in Den Haag. Verse curry, tandoori, biryani, chaat en streetfood. Halal gecertificeerd. Vegetarische en veganistische opties duidelijk aangegeven.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'menu'),
      languages: {
        en: getLocalizedUrl('en', 'menu'),
        nl: getLocalizedUrl('nl', 'menu'),
        'x-default': getLocalizedUrl('en', 'menu'),
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'menu'),
      images: [{ url: '/og/home-og.jpg', width: 1200, height: 630, alt: 'Chopras Indian Restaurant Den Haag' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/og/home-og.jpg'],
    },
  }
}

export default function LocaleMenuPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''

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
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: tr.common.nav.menu, item: getLocalizedUrl(locale, 'menu') },
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

      {/* INTERACTIVE MENU */}
      <MenuPageClient />

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-12 text-center">
            Explore Our Specialities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Signature Dish</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Learn about our biryani in Den Haag</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Fan Favorite</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">The story behind our butter chicken</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Tandoori Specials</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Our tandoori specialities Den Haag</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Vegetarian Delight</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Dal makhani Den Haag</p>
            </Link>
            <Link href={`${base}/chaat-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Street Food</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Indian street food and chaat Den Haag</p>
            </Link>
            <Link href={`${base}/halal-food-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Halal Certified</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Our full halal Indian menu Den Haag</p>
            </Link>
            <Link href={`${base}/mutton-rogan-josh-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Lamb Curry</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">mutton rogan josh Den Haag — our Kashmiri lamb curry</p>
            </Link>
          </div>
          <div className="mt-12 pt-12 border-t border-gray-200 space-y-4">
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Looking for <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">vegetarian Indian food Den Haag</Link>? Or interested in <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">need this menu for your event? Book Indian catering in Den Haag</Link>?
            </p>
            <p className="text-[#1A1A1A] text-base leading-relaxed">
              Visit <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant - best Indian restaurant in Den Haag</Link> or <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">make a reservation at Chopras Indian Restaurant</Link>.
            </p>
          </div>
        </div>
      </section>

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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]"
            >
              Reserve a Table
            </Link>
            <a
              href="https://www.thuisbezorgd.nl/menu/chopras-indian-street-food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]"
            >
              Order on Thuisbezorgd
            </a>
          </div>
        </div>
      </section>

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
    </>
  )
}
