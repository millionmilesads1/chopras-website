import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getLocalRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Takeaway Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Afhalen Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Order Indian takeaway in Den Haag from Chopras. Delivery via Thuisbezorgd and Uber Eats, or collect from Leyweg 986. Halal certified. Authentic Indian food.',
    nl: 'Bestel Indiaas eten om af te halen of te laten bezorgen in Den Haag bij Chopras. Bezorging via Thuisbezorgd en Uber Eats, of haal af van Leyweg 986. Halal gecertificeerd.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-takeaway-den-haag`,
      languages: { en: `${SITE_URL}/en/indian-takeaway-den-haag`, nl: `${SITE_URL}/nl/indian-takeaway-den-haag`, 'x-default': `${SITE_URL}/en/indian-takeaway-den-haag` },
    },
  }
}

export default function IndianTakeawayPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag', 'Rijswijk', 'Delft'], `${SITE_URL}/${locale}/indian-takeaway-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Indiaas Afhalen Den Haag' : 'Indian Takeaway Den Haag', item: `${SITE_URL}/${locale}/indian-takeaway-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              INDIAN TAKEAWAY DEN HAAG
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiaas Eten Afhalen of Bestellen in Den Haag' : 'Indian Takeaway and Delivery in Den Haag'}
          </h1>
          <p
            className="text-white/75 text-lg"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Afhalen bij Leyweg 986 of bezorging via Thuisbezorgd en Uber Eats.' : 'Collect from Leyweg 986 or delivery via Thuisbezorgd and Uber Eats.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{isNl ? 'Bezorging' : 'Delivery'}</h3>
              <p className="text-gray-600 text-sm mb-4">{isNl ? 'Via Thuisbezorgd of Uber Eats, binnen 5 km van Leyweg' : 'Via Thuisbezorgd or Uber Eats, within 5km of Leyweg'}</p>
              <a href="https://www.thuisbezorgd.nl/menu/chopras-indian-street-food" target="_blank" rel="noopener noreferrer" className="block bg-[#1B2B5E] text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#0F1F4B] transition-colors mb-2">
                {tr.menu.thuisbezorgd}
              </a>
              <a href="https://www.ubereats.com/nl/store/chopras-indian-restaurant/kFKhBtR-W3OkJyl2f6QmUg" target="_blank" rel="noopener noreferrer" className="block border border-[#1B2B5E] text-[#1B2B5E] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1B2B5E]/5 transition-colors">
                {tr.menu.ubereats}
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{isNl ? 'Afhalen' : 'Collect'}</h3>
              <p className="text-gray-600 text-sm mb-4">{isNl ? 'Bestel telefonisch en haal af bij Leyweg 986' : 'Call ahead and collect from Leyweg 986'}</p>
              <a href={`tel:${RESTAURANT.contact.phone}`} className="block bg-[#1B2B5E] text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#0F1F4B] transition-colors">
                {RESTAURANT.contact.phoneDisplay}
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{isNl ? 'Ter Plekke Eten' : 'Dine In'}</h3>
              <p className="text-gray-600 text-sm mb-4">{isNl ? 'Reserveer een tafel bij ons restaurant' : 'Reserve a table at our restaurant'}</p>
              <Link href={`${base}/contact`} className="block bg-[#D4AF37] text-[#1B2B5E] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#c9a230] transition-colors">
                {tr.common.reserve}
              </Link>
            </div>
          </div>

          <div className="bg-[#1B2B5E]/5 rounded-2xl p-6">
            <h3 className="font-heading text-xl text-[#1B2B5E] mb-3">
              {isNl ? 'Openingstijden voor Afhalen en Bezorging' : 'Takeaway and Delivery Hours'}
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>{isNl ? 'Maandag: Gesloten' : 'Monday: Closed'}</li>
              <li>{isNl ? 'Dinsdag – Zondag: 16:30 – 22:30' : 'Tuesday – Sunday: 16:30 – 22:30'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Populaire Gerechten' : 'Explore Popular Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/menu`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Menu' : 'Menu'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bekijk het volledige menu van Chopras' : 'View our complete menu'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gegaard in roomsaus' : 'Slow-cooked in cream sauce'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst met vlees of groente' : 'Fragrant rice with meat or vegetables'}</p>
            </Link>
            <Link href={`${base}/chaat-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Chaat' : 'Chaat'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaans streetfood voor takeaway' : 'Indian street food perfect for takeaway'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Haal Indiaans eten direct af of laat het bezorgen in Den Haag via' : 'Collect Indian takeaway or delivery in Den Haag via'} <a href="https://www.thuisbezorgd.nl/menu/chopras-indian-street-food" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.menu.thuisbezorgd}</a> {isNl ? 'of' : 'or'} <a href="https://www.ubereats.com/nl/store/chopras-indian-restaurant/kFKhBtR-W3OkJyl2f6QmUg" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.menu.ubereats}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
