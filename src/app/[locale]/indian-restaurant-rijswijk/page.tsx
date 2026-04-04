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
    en: 'Indian Restaurant Near Rijswijk | Chopras in Den Haag',
    nl: 'Indiaas Restaurant bij Rijswijk | Chopras in Den Haag',
  }
  const descriptions = {
    en: 'Looking for an Indian restaurant near Rijswijk? Chopras is just 5 minutes away in Den Haag. Authentic Indian food, halal certified, open Tue–Sun. Book your table.',
    nl: 'Op zoek naar een Indiaas restaurant bij Rijswijk? Chopras is slechts 5 minuten rijden in Den Haag. Authentiek Indiaas eten, halal gecertificeerd, open di–zo.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-restaurant-rijswijk`,
      languages: { en: `${SITE_URL}/en/indian-restaurant-rijswijk`, nl: `${SITE_URL}/nl/indian-restaurant-rijswijk`, 'x-default': `${SITE_URL}/en/indian-restaurant-rijswijk` },
    },
  }
}

export default function IndianRestaurantRijswijkPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const restaurantSchema = {
    '@context': 'https://schema.org', '@type': ['LocalBusiness', 'Restaurant'], name: RESTAURANT.name,
    url: `${SITE_URL}/${locale}/indian-restaurant-rijswijk`,
    telephone: RESTAURANT.contact.phone, email: RESTAURANT.contact.email,
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, postalCode: RESTAURANT.address.postcode, addressLocality: RESTAURANT.address.city, addressCountry: RESTAURANT.address.countryCode },
    geo: { '@type': 'GeoCoordinates', latitude: RESTAURANT.address.coordinates.lat, longitude: RESTAURANT.address.coordinates.lng },
    servesCuisine: ['North Indian', 'Indian Street Food'], priceRange: RESTAURANT.priceRange,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '16:30', closes: '22:30' },
    ],
    areaServed: ['Rijswijk', 'Den Haag', 'South Holland'],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              NEAR RIJSWIJK
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiaas Restaurant bij Rijswijk  -  Chopras is Vijf Minuten Rijden' : 'Indian Restaurant Near Rijswijk  -  Chopras is Five Minutes Away'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Authentiek Noord-Indiaas eten, volledig halal gecertificeerd, open dinsdag tot en met zondag. Leyweg 986, Den Haag  -  vlak over de grens van Rijswijk.' : 'Authentic North Indian food, fully halal certified, open Tuesday to Sunday. Leyweg 986, Den Haag  -  just across the border from Rijswijk.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Van Rijswijk naar Leyweg' : 'From Rijswijk to Leyweg'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Rijswijk en Den Haag delen een grens zonder zichtbare scheiding  -  de gemeentegrens loopt door woonwijken en winkelgebieden. Chopras op Leyweg 986 is minder dan 5 minuten rijden van centraal Rijswijk. De meeste Rijswijkse bewoners zijn dichter bij ons dan bij het centrum van Den Haag.</p>
                <p>Per openbaar vervoer verbinden tramlijnen en busverbindingen centraal Rijswijk direct met het Leyweg-gebied zonder overstap. De reis duurt doorgaans minder dan 10 minuten vanuit de meeste delen van Rijswijk.</p>
                <p>Parkeren is een relevant voordeel ten opzichte van het centrum van Den Haag. Het winkelgebied Leyweg biedt gratis parkeren  -  een concreet voordeel voor Rijswijkse families die komen eten. Parkeren in het centrum van Den Haag kan duur en beperkt zijn, vooral &apos;s avonds. Leyweg elimineert die hindernis volledig.</p>
                <p>Rijswijk heeft een aanzienlijke Zuid-Aziatische gemeenschap, met name Hindoestaanse families die de oorspronkelijke Indiaas eten-doelgroep in dit deel van Zuid-Holland zijn. Kwaliteitsvol Indiaas eten dat aan hun verwachtingen voldoet is het doel. Chopras is de dichtstbijzijnde authentieke optie.</p>
              </>
            ) : (
              <>
                <p>Rijswijk and Den Haag share a border with no natural separation between them  -  the municipal line runs through residential streets and shopping areas without a visible boundary. Chopras at Leyweg 986 is less than 5 minutes by car from central Rijswijk. Most Rijswijk residents are closer to us than they are to Den Haag Centrum.</p>
                <p>By public transport: tram lines and bus services connect central Rijswijk to the Leyweg area directly with no changes required. The journey is typically under 10 minutes from most parts of Rijswijk.</p>
                <p>Parking is a meaningful advantage over going into central Den Haag. The Leyweg shopping area offers free parking  -  a material benefit for Rijswijk families driving to dinner. Central Den Haag parking can be expensive and limited, particularly in the evening. Leyweg removes that friction entirely.</p>
                <p>Rijswijk has a substantial South Asian community, particularly Hindustani families who are the original Indian food audience in this part of South Holland. Quality Indian food that matches their expectations is the aim. Chopras is the nearest authentic option.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Rijswijkse Bezoekers Chopras Kiezen' : 'Why Rijswijk Residents Choose Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Vaste klanten uit Rijswijk bij Chopras convergereren op specifieke gerechten. De Chicken Tikka Masala en Butter Chicken zijn de meest voorkomende eerste bestellingen van nieuwe bezoekers  -  toegankelijke instappunten die onmiddellijk het kwaliteitsverschil tussen Chopras en generieke Indiase restaurants aantonen.</p>
                <p>De halalcertificering is bijzonder relevant voor de diverse gemeenschap van Rijswijk. De gemeente heeft een aanzienlijke moslimbevolking  -  Pakistaanse, Marokkaanse, Turkse en Hindoestaans-moslimfamilies  -  voor wie een echt gecertificeerd halal Indiaas restaurant op vijf minuten rijden een betekenisvolle lokale optie is.</p>
                <p>Het restaurant is gezinsvriendelijk in de echte zin van het woord  -  niet alleen tolerant voor kinderen, maar aanpasbaar voor hen. De butter chicken is mild genoeg voor kinderen. De porties zijn royaal. De sfeer is warm in plaats van formeel.</p>
              </>
            ) : (
              <>
                <p>Regulars at Chopras from Rijswijk have converged on specific dishes. The Chicken Tikka Masala and Butter Chicken are the most common first orders from new visitors  -  accessible entry points that immediately establish the quality difference between Chopras and generic Indian restaurants.</p>
                <p>The halal certification is especially relevant for Rijswijk&apos;s diverse community. The municipality has a significant Muslim population  -  Pakistani, Moroccan, Turkish, and Hindustani Muslim families  -  for whom a genuinely certified halal Indian restaurant within five minutes is a meaningful local option.</p>
                <p>The restaurant is family-friendly in the genuine sense  -  not just tolerant of children, but adapted for them. The butter chicken is mild enough for children. The portions are generous. The atmosphere is warm rather than formal.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Praktische Informatie voor Bezoekers uit Rijswijk' : 'Practical Information for Rijswijk Visitors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Afstand', desc: 'Minder dan 5 minuten met de auto van centraal Rijswijk. Leyweg 986 ligt vlak over de gemeentegrens.' },
              { title: 'Openbaar Vervoer', desc: 'Directe tram- en busverbindingen vanuit Rijswijk naar Leyweg  -  doorgaans minder dan 10 minuten.' },
              { title: 'Parkeren', desc: 'Gratis parkeren in het winkelgebied Leyweg. Aanzienlijk eenvoudiger dan het centrum van Den Haag.' },
              { title: 'Openingstijden', desc: 'Dinsdag tot en met zondag: 16:30–22:30. Maandag gesloten.' },
            ] : [
              { title: 'Distance', desc: 'Under 5 minutes by car from central Rijswijk. Leyweg 986 is just across the municipal boundary.' },
              { title: 'Public Transport', desc: 'Direct tram and bus connections from Rijswijk to Leyweg  -  typically under 10 minutes.' },
              { title: 'Parking', desc: 'Free parking in the Leyweg shopping area. Significantly easier than central Den Haag.' },
              { title: 'Opening Hours', desc: 'Tuesday to Sunday: 16:30–22:30. Closed Monday.' },
            ]).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-lg text-[#1B2B5E] mb-1">{item.title}</h3>
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

      <section className="bg-[#FFFAF5] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-[#1B2B5E] mb-6">
            {isNl ? 'Ook Nabij Den Haag' : 'Also Serving These Areas Near Den Haag'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/indian-restaurant-delft`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-heading text-[#1B2B5E] font-bold">{isNl ? 'Indiaas Restaurant bij Delft' : 'Indian Restaurant Near Delft'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Delft' : 'Chopras also serves Delft'}</p>
            </Link>
            <Link href={`${base}/indian-restaurant-zoetermeer`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-heading text-[#1B2B5E] font-bold">{isNl ? 'Indiaas Restaurant bij Zoetermeer' : 'Indian Restaurant Near Zoetermeer'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Zoetermeer' : 'Chopras also serves Zoetermeer'}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
