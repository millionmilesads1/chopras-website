import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Takeaway Den Haag | Chopras  -  Order Online or Collect',
    nl: 'Indiaas Afhalen Den Haag | Chopras  -  Online Bestellen of Afhalen',
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
  const isNl = locale === 'nl'

  const pageFaqs = [
    { question: isNl ? 'Hoe kan ik Indiaas eten bestellen bij Chopras in Den Haag?' : 'How can I order Indian takeaway from Chopras in Den Haag?', answer: isNl ? 'U kunt bestellen via Thuisbezorgd of Uber Eats voor bezorging, of bellen op +31 6 30645930 om uw bestelling op te halen bij Leyweg 986.' : 'You can order via Thuisbezorgd or Uber Eats for delivery, or call +31 6 30645930 to collect from Leyweg 986.' },
    { question: isNl ? 'Hoe ver bezorgt Chopras?' : 'How far does Chopras deliver?', answer: isNl ? 'Chopras bezorgt binnen circa 5 km van Leyweg 986 via Thuisbezorgd en Uber Eats.' : 'Chopras delivers within approximately 5km of Leyweg 986 via Thuisbezorgd and Uber Eats.' },
    { question: isNl ? 'Is het afhaaleten halal?' : 'Is the takeaway food halal?', answer: isNl ? 'Ja. Alle vleesgerechten bij Chopras zijn halal gecertificeerd, of u nu ter plekke eet, afhaalt of laat bezorgen.' : 'Yes. All meat dishes at Chopras are halal certified, whether you dine in, collect, or order for delivery.' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Restaurant', name: RESTAURANT.name, address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, postalCode: RESTAURANT.address.postcode, addressLocality: RESTAURANT.address.city, addressCountry: RESTAURANT.address.countryCode }, telephone: RESTAURANT.contact.phone, servesCuisine: 'Indian', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' }, sameAs: ['https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html', 'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/', 'https://www.facebook.com/choprasrestaurant', 'https://www.instagram.com/choprasrestaurant', 'https://www.youtube.com/@choprasrestaurant'] } as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

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
              <a href={`/${locale}/contact`} className="block bg-[#D4AF37] text-[#1B2B5E] px-4 py-2 rounded-full text-sm font-bold hover:bg-[#c9a230] transition-colors">
                {tr.common.reserve}
              </a>
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
    </>
  )
}
