import type { Metadata } from 'next'
import Link from 'next/link'
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
    en: 'Biryani in Den Haag | Chopras  -  Chicken, Lamb and Veg Biryani',
    nl: 'Biryani in Den Haag | Chopras  -  Kip, Lam en Groente Biryani',
  }
  const descriptions = {
    en: 'Authentic biryani in Den Haag at Chopras. Fragrant basmati rice slow-cooked with chicken, lamb or vegetables. Halal certified. Open Tue–Sun on Leyweg.',
    nl: 'Authentieke biryani in Den Haag bij Chopras. Geurige basmatirijst langzaam gegaard met kip, lam of groenten. Halal gecertificeerd. Open di–zo op Leyweg.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/biryani-den-haag`,
      languages: { en: `${SITE_URL}/en/biryani-den-haag`, nl: `${SITE_URL}/nl/biryani-den-haag`, 'x-default': `${SITE_URL}/en/biryani-den-haag` },
    },
  }
}

export default function BiryaniPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const restaurantSchema = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: RESTAURANT.name,
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, postalCode: RESTAURANT.address.postcode, addressLocality: RESTAURANT.address.city, addressCountry: RESTAURANT.address.countryCode },
    telephone: RESTAURANT.contact.phone, url: RESTAURANT.contact.website, servesCuisine: 'Indian', priceRange: RESTAURANT.priceRange,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const pageFaqs = [
    { question: isNl ? 'Is de biryani bij Chopras halal?' : 'Is the biryani at Chopras halal?', answer: isNl ? 'Ja. Alle kip en lam bij Chopras zijn afkomstig van halal-gecertificeerde leveranciers. De biryani is volledig halal.' : 'Yes. All chicken and lamb at Chopras are sourced from halal-certified suppliers. The biryani is fully halal.' },
    { question: isNl ? 'Welke soorten biryani serveren jullie?' : 'What types of biryani do you serve?', answer: isNl ? 'Chopras serveert kip biryani (€19.50), lam biryani (€22.50) en groente biryani (€17.50).' : 'Chopras serves chicken biryani (€19.50), lamb biryani (€22.50), and vegetable biryani (€17.50).' },
    { question: isNl ? 'Kan ik biryani laten bezorgen in Den Haag?' : 'Can I get biryani delivered in Den Haag?', answer: isNl ? 'Ja. Chopras is beschikbaar op Thuisbezorgd en Uber Eats voor bezorging door Den Haag.' : 'Yes. Chopras is available on Thuisbezorgd and Uber Eats for delivery across Den Haag.' },
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
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              OUR DISHES
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Biryani in Den Haag bij Chopras  -  Kip, Lam en Groente' : 'Biryani in Den Haag at Chopras  -  Chicken, Lamb and Vegetable'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Langzaam gegaard. Geurige basmatirijst. Halal gecertificeerd. Leyweg 986, Den Haag.' : 'Slow-cooked. Fragrant basmati. Halal certified. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Biryani Bijzonder Maakt' : 'What Makes Biryani Special'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Chopras serveert kip-, lam- en groente-biryani in Den Haag  -  allemaal gemaakt zoals biryani gemaakt hoort te worden. Niet simpelweg rijst met vlees. Een gelaagde bereiding waarbij elke component  -  gemarineerd vlees, geurige basmati, echte saffraan, hele kruiden  -  afzonderlijk wordt bereid voordat het samen wordt afgesloten en langzaam wordt gegaard totdat de rijst elke druppel bouillon heeft opgenomen.</p>
                <p>Bij Chopras maken wij biryani zoals het in India thuishoort: lamsschouder of een nacht gemarineerde kip, gelaagd met saffraan-gedrenkte basmati, afgedekt met deeg en langzaam afgewerkt in de oven. Het deksel gaat aan tafel eraf. Alleen de geur vertelt je al dat dit geen snelkook-versie is.</p>
                <p>De kruiden worden elke ochtend vers gemalen. De kip en het lam zijn halal-gecertificeerd. De saffraan is echt  -  geen kleurstof-vervanger. Dit is het verschil dat je merkt als je het vergelijkt met wat de meeste restaurants in Nederland serveren.</p>
              </>
            ) : (
              <>
                <p>Chopras serves chicken, lamb and vegetable biryani in Den Haag  -  all made the way biryani is supposed to be made. Not simply rice with meat. A layered preparation where each component  -  marinated protein, fragrant basmati, real saffron, whole spices  -  is prepared separately before being sealed together and slow-cooked until the rice has absorbed every drop of the stock.</p>
                <p>At Chopras, we make biryani the way it belongs in India: lamb shoulder or overnight-marinated chicken, layered with saffron-steeped basmati, sealed with dough and finished slowly in the oven. The lid comes off at the table. The smell alone tells you this is not a shortcut version.</p>
                <p>The spices are ground fresh every morning. The chicken and lamb are halal-certified. The saffron is real  -  not a colouring substitute. This is the difference you notice when you compare it to what most Dutch restaurants serve.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Biryani Bestellen bij Chopras' : 'Order Biryani at Chopras'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: isNl ? 'Kip Biryani' : 'Chicken Biryani', price: '€19.50', desc: isNl ? 'Gemarineerde kip met geurige basmatirijst' : 'Marinated chicken with fragrant basmati rice' },
              { name: isNl ? 'Lam Biryani' : 'Lamb Biryani', price: '€22.50', desc: isNl ? 'Mals lam langzaam gegaard met rijst en kruiden' : 'Tender lamb slow-cooked with rice and spices' },
              { name: isNl ? 'Groente Biryani' : 'Vegetable Biryani', price: '€17.50', desc: isNl ? 'Seizoensgroenten met basmatirijst en saffraanrijke masala' : 'Seasonal vegetables with basmati rice and saffron-rich masala' },
            ].map((item) => (
              <div key={item.name} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-1">{item.name}  -  {item.price}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {tr.common.reserve}
            </a>
            <Link href={`${base}/menu`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
