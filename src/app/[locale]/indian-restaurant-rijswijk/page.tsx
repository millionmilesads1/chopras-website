import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

const faqsEn = [
  { question: 'How far is Chopras Indian Restaurant from Rijswijk?', answer: 'Chopras Indian Restaurant is at Leyweg 986, Den Haag, less than 5 minutes by car from central Rijswijk. Tram and bus connections are also available, typically under 10 minutes.' },
  { question: 'Is Chopras Indian Restaurant halal certified?', answer: 'Yes. Chopras Indian Restaurant is fully halal certified. All meat is halal sourced and the full menu is suitable for guests requiring halal food in the Den Haag and Rijswijk area.' },
  { question: 'What are the opening hours at Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open Tuesday to Sunday from 16:30 to 22:30. The restaurant is closed on Mondays.' },
]

const faqsNl = [
  { question: 'Hoe ver is Chopras Indian Restaurant van Rijswijk?', answer: 'Chopras Indian Restaurant is op Leyweg 986, Den Haag, minder dan 5 minuten rijden van centraal Rijswijk. Tram- en busverbindingen zijn ook beschikbaar, doorgaans minder dan 10 minuten.' },
  { question: 'Is Chopras Indian Restaurant halal gecertificeerd?', answer: 'Ja. Chopras Indian Restaurant is volledig halal gecertificeerd. Al het vlees is halal ingekocht en het volledige menu is geschikt voor gasten die halal voedsel vereisen in de regio Den Haag en Rijswijk.' },
  { question: 'Wat zijn de openingstijden van Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open dinsdag tot en met zondag van 16:30 tot 22:30. Het restaurant is op maandag gesloten.' },
]

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Near Rijswijk | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Rijswijk | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant near Rijswijk. Chopras Indian Restaurant Den Haag is 5 minutes away. Authentic halal food and vegetarian options. Book now.',
    nl: 'Indiaas restaurant bij Rijswijk. Chopras Indian Restaurant Den Haag is 5 minuten rijden. Authentiek halal eten en vegetarische opties. Boek nu.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-restaurant-rijswijk'),
      languages: { en: getLocalizedUrl('en', 'indian-restaurant-rijswijk'), nl: getLocalizedUrl('nl', 'indian-restaurant-rijswijk'), 'x-default': getLocalizedUrl('en', 'indian-restaurant-rijswijk') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-restaurant-rijswijk'),
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

export default function IndianRestaurantRijswijkPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = getLocalRestaurantSchema(
    locale,
    ['Rijswijk', 'Den Haag', 'South Holland'],
    getLocalizedUrl(locale, 'indian-restaurant-rijswijk'),
  )

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Restaurant bij Rijswijk' : 'Indian Restaurant Near Rijswijk', item: getLocalizedUrl(locale, 'indian-restaurant-rijswijk') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • NEAR YOU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
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
                <p>Rijswijk and Den Haag share a border with no natural separation between them - the municipal line runs through residential streets and shopping areas without a visible boundary. Chopras at Leyweg 986 is less than 5 minutes by car from central Rijswijk. Most Rijswijk residents are closer to us than they are to Den Haag Centrum.</p>
                <p>By public transport: tram lines and bus services connect central Rijswijk to the Leyweg area directly with no changes required. The journey is typically under 10 minutes from most parts of Rijswijk.</p>
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
                <p>Vaste klanten uit Rijswijk bij Chopras convergereren op specifieke gerechten. De Chicken Tikka Masala en <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> zijn de meest voorkomende eerste bestellingen van nieuwe bezoekers  -  toegankelijke instappunten die onmiddellijk het kwaliteitsverschil tussen Chopras en generieke Indiase restaurants aantonen.</p>
                <p>De halalcertificering is bijzonder relevant voor de diverse gemeenschap van Rijswijk. De gemeente heeft een aanzienlijke moslimbevolking  -  Pakistaanse, Marokkaanse, Turkse en Hindoestaans-moslimfamilies  -  voor wie een echt gecertificeerd halal Indiaas restaurant op vijf minuten rijden een betekenisvolle lokale optie is.</p>
                <p>Het restaurant is gezinsvriendelijk in de echte zin van het woord  -  niet alleen tolerant voor kinderen, maar aanpasbaar voor hen. De butter chicken is mild genoeg voor kinderen. De porties zijn royaal. De sfeer is warm in plaats van formeel.</p>
              </>
            ) : (
              <>
                <p>Regulars at Chopras from Rijswijk have converged on specific dishes. The Chicken Tikka Masala and <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> are the most common first orders from new visitors  -  accessible entry points that immediately establish the quality difference between Chopras and generic Indian restaurants.</p>
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
              { title: 'Public Transport', desc: 'Direct tram and bus connections from Rijswijk to Leyweg - typically under 10 minutes.' },
              { title: 'Opening Hours', desc: 'Tuesday to Sunday: 16:30–22:30. Closed Monday.' },
            ]).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-lg text-[#1B2B5E] mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl text-[#1B2B5E] mb-6">
            {isNl ? 'Ook Nabij Den Haag' : 'Also Serving These Areas Near Den Haag'}
          </h3>
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

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Populaire Gerechten' : 'Explore Popular Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Favoriete eerste keus voor Rijswijk-bezoekers' : 'Favorite first choice for Rijswijk visitors'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil speciality'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Recht uit de kleioven' : 'Straight from the clay oven'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas buffet voor evenementen' : 'Indian catering for events'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering voor rijswijk' : 'book a table from Rijswijk at Chopras Indian Restaurant Den Haag'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
