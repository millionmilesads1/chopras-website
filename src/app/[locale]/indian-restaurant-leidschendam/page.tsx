import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

const faqsEn = [
  { question: 'How far is Chopras Indian Restaurant from Leidschendam?', answer: 'Chopras Indian Restaurant is at Leyweg 986, Den Haag, approximately 12 minutes by car from central Leidschendam. Bus and tram connections are also available, typically under 20 minutes.' },
  { question: 'Is Chopras Indian Restaurant halal certified?', answer: 'Yes. Chopras Indian Restaurant is fully halal certified. All meat is halal sourced and the full menu is suitable for guests requiring halal food in the Den Haag and Leidschendam area.' },
  { question: 'What are the opening hours at Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open Tuesday to Sunday from 16:30 to 22:30. The restaurant is closed on Mondays.' },
]

const faqsNl = [
  { question: 'Hoe ver is Chopras Indian Restaurant van Leidschendam?', answer: 'Chopras Indian Restaurant is op Leyweg 986, Den Haag, ongeveer 12 minuten rijden van centraal Leidschendam. Tram- en busverbindingen zijn ook beschikbaar, doorgaans minder dan 20 minuten.' },
  { question: 'Is Chopras Indian Restaurant halal gecertificeerd?', answer: 'Ja. Chopras Indian Restaurant is volledig halal gecertificeerd. Al het vlees is halal ingekocht en het volledige menu is geschikt voor gasten die halal voedsel vereisen in de regio Den Haag en Leidschendam.' },
  { question: 'Wat zijn de openingstijden van Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open dinsdag tot en met zondag van 16:30 tot 22:30. Het restaurant is op maandag gesloten.' },
]

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Near Leidschendam | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Leidschendam | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant near Leidschendam. Chopras Indian Restaurant Den Haag is 12 minutes away at Leyweg 986. Authentic halal food. Open Tuesday to Sunday.',
    nl: 'Indiaas restaurant bij Leidschendam. Chopras is 12 minuten rijden in Den Haag op Leyweg 986. Halal gecertificeerd, open dinsdag tot en met zondag.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-restaurant-leidschendam'),
      languages: { en: getLocalizedUrl('en', 'indian-restaurant-leidschendam'), nl: getLocalizedUrl('nl', 'indian-restaurant-leidschendam'), 'x-default': getLocalizedUrl('en', 'indian-restaurant-leidschendam') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-restaurant-leidschendam'),
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

export default function IndianRestaurantLeidschendam({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = getLocalRestaurantSchema(
    locale,
    ['Leidschendam', 'Voorburg', 'Den Haag', 'South Holland'],
    getLocalizedUrl(locale, 'indian-restaurant-leidschendam'),
  )

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Restaurant bij Leidschendam' : 'Indian Restaurant Near Leidschendam', item: getLocalizedUrl(locale, 'indian-restaurant-leidschendam') },
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
            {isNl ? 'Indiaas Restaurant bij Leidschendam  -  Chopras is Twaalf Minuten Rijden' : 'Indian Restaurant Near Leidschendam  -  Chopras is Twelve Minutes Away'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Authentiek Noord-Indiaas eten, volledig halal gecertificeerd, open dinsdag tot en met zondag. Leyweg 986, Den Haag  -  dicht bij Leidschendam en Voorburg.' : 'Authentic North Indian food, fully halal certified, open Tuesday to Sunday. Leyweg 986, Den Haag  -  close to Leidschendam and Voorburg.'}
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-vibes text-3xl md:text-4xl text-[#C7A348] mb-8">
            {isNl ? 'Van Leidschendam naar Leyweg' : 'From Leidschendam to Leyweg'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Leidschendam en Den Haag liggen dicht bij elkaar in de regio Haaglanden. Chopras op Leyweg 986 is ongeveer 12 minuten rijden van centraal Leidschendam. Voor veel Leidschendam-bewoners is dit dichter dan traditionele Haagse restaurants in het historische centrum.</p>
                <p>Leidschendam maakt deel uit van de fusiegemeente Leidschendam-Voorburg, die samen een diverse bevolking met veel Zuid-Aziatische families heeft. Dit is een gemeenschap met echte vraag naar authentiek Indiaas eten dat aan hun culinaire verwachtingen voldoet.</p>
                <p>Parkeren is een praktisch voordeel. Het winkelgebied rond Leyweg biedt gratis parkeren  -  geen ingewikkelde parkeerbestanden of dure tarieven zoals in sommige delen van Den Haag. Gezinnen en groepen kunnen gemakkelijk stoppen zonder parkeerdruk.</p>
                <p>Bus- en tramverbindingen verbinden Leidschendam direct met het Leyweg-gebied. De rit duurt doorgaans minder dan 20 minuten vanuit centraal Leidschendam. Dit maakt Chopras toegankelijk zonder auto, wat belangrijk is voor gezinnen met één voertuig.</p>
              </>
            ) : (
              <>
                <p>Leidschendam and Den Haag are close neighbours in the Haaglanden region. Chopras at Leyweg 986 is approximately 12 minutes by car from central Leidschendam. For many Leidschendam residents, this is closer than traditional Den Haag restaurants in the historic centre.</p>
                <p>Leidschendam is part of the merged municipality Leidschendam-Voorburg, which together has a diverse population with many South Asian families. This is a community with genuine demand for authentic Indian food that meets their culinary expectations.</p>
                <p>Parking is a practical advantage. The shopping area around Leyweg offers free parking - no complicated permit systems or expensive rates like some parts of Den Haag. Families and groups can stop easily without parking stress.</p>
                <p>Bus and tram connections link Leidschendam directly to the Leyweg area. The journey is typically under 20 minutes from central Leidschendam. This makes Chopras accessible without a car, which matters for single-vehicle households.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-vibes text-3xl md:text-4xl text-[#C7A348] mb-8">
            {isNl ? 'Waarom Leidschendam-bezoekers Chopras Kiezen' : 'Why Leidschendam Residents Choose Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Vaste klanten uit Leidschendam convergeren op specifieke handtekeningen. De <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> en Chicken Tikka Masala zijn de meest voorkomende eerste bestellingen van nieuwe bezoekers - toegankelijke entry points die onmiddellijk het kwaliteitsverschil tussen Chopras en generieke Indiase restaurants aantonen.</p>
                <p>De halalcertificering is bijzonder relevant voor de Leidschendam-Voorburg regio. De fusiegemeente heeft een aanzienlijke moslimbevolking - Hindoestaans-moslimfamilies, Pakistaanse families, en andere gemeenschappen - voor wie een echt gecertificeerd halal Indiaas restaurant op 12 minuten afstand een betekenisvolle lokale optie is.</p>
                <p>Gezinnen waarderen de authentieke kid-friendly cultuur. De restaurant is niet alleen tolerant voor kinderen, maar aanpasbaar voor hen. De porties zijn royaal. De sfeer is warm. Dit is geen formeel restaurant waar kinderen zich uit plaats voelen.</p>
              </>
            ) : (
              <>
                <p>Regulars at Chopras from Leidschendam have converged on specific signatures. The <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> and Chicken Tikka Masala are the most common first orders from new visitors - accessible entry points that immediately establish the quality difference between Chopras and generic Indian restaurants.</p>
                <p>Halal certification is especially relevant for the Leidschendam-Voorburg region. The merged municipality has a significant Muslim population - Hindustani Muslim families, Pakistani families, and other communities - for whom a genuinely certified halal Indian restaurant 12 minutes away is a meaningful local option.</p>
                <p>Families appreciate the authentic kid-friendly culture. The restaurant is not just tolerant of children, but adapted for them. The portions are generous. The atmosphere is warm. This is not a formal restaurant where children feel out of place.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-vibes text-3xl md:text-4xl text-[#C7A348] mb-8">
            {isNl ? 'Praktische Informatie voor Bezoekers uit Leidschendam' : 'Practical Information for Leidschendam Visitors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Afstand', desc: 'Ongeveer 12 minuten met de auto van centraal Leidschendam. Leyweg 986 is dicht bij Voorburg.' },
              { title: 'Openbaar Vervoer', desc: 'Bus- en tramverbindingen verbinden Leidschendam direct met Leyweg. Doorgaans minder dan 20 minuten.' },
              { title: 'Parkeren', desc: 'Gratis parkeren in het winkelgebied Leyweg. Veel eenvoudiger dan het centrum van Den Haag.' },
              { title: 'Openingstijden', desc: 'Dinsdag tot en met zondag: 16:30–22:30. Maandag gesloten.' },
            ] : [
              { title: 'Distance', desc: 'Approximately 12 minutes by car from central Leidschendam. Leyweg 986 is close to Voorburg.' },
              { title: 'Public Transport', desc: 'Bus and tram connections link Leidschendam directly to Leyweg. Typically under 20 minutes.' },
              { title: 'Opening Hours', desc: 'Tuesday to Sunday: 16:30–22:30. Closed Monday.' },
            ]).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-vibes text-lg text-[#C7A348] mb-1">{item.title}</h3>
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

      <section className="bg-[#F7F8FC] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-vibes text-3xl text-[#C7A348] mb-6">
            {isNl ? 'Ook Nabij Den Haag' : 'Also Serving These Areas Near Den Haag'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/indian-restaurant-rijswijk`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-vibes text-[#C7A348] font-bold">{isNl ? 'Indiaas Restaurant bij Rijswijk' : 'Indian Restaurant Near Rijswijk'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Rijswijk' : 'Chopras also serves Rijswijk'}</p>
            </Link>
            <Link href={`${base}/indian-restaurant-zoetermeer`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-vibes text-[#C7A348] font-bold">{isNl ? 'Indiaas Restaurant bij Zoetermeer' : 'Indian Restaurant Near Zoetermeer'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Zoetermeer' : 'Chopras also serves Zoetermeer'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-vibes text-3xl md:text-4xl text-[#C7A348] mb-10">
            {isNl ? 'Ontdek Populaire Gerechten' : 'Explore Popular Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Favoriete eerste keus voor Leidschendam-bezoekers' : 'Favorite first choice for Leidschendam visitors'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil speciality'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Recht uit de kleioven' : 'Straight from the clay oven'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
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
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering voor leidschendam' : 'book a table from Leidschendam at Chopras Indian Restaurant Den Haag'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
