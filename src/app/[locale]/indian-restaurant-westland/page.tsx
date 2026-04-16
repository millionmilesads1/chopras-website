import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

const faqsEn = [
  { question: 'How far is Chopras Indian Restaurant from Westland?', answer: 'Chopras Indian Restaurant is at Leyweg 986, Den Haag, approximately 20 minutes by car from Westland via the A20. Westland is a car-dependent municipality and most visitors drive to our restaurant.' },
  { question: 'Is Chopras Indian Restaurant halal certified?', answer: 'Yes. Chopras Indian Restaurant is fully halal certified. All meat is halal sourced and the full menu is suitable for guests requiring halal food in the Westland and Den Haag area.' },
  { question: 'What are the opening hours at Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open Tuesday to Sunday from 16:30 to 22:30. The restaurant is closed on Mondays.' },
]

const faqsNl = [
  { question: 'Hoe ver is Chopras Indian Restaurant van Westland?', answer: 'Chopras Indian Restaurant is op Leyweg 986, Den Haag, ongeveer 20 minuten rijden van Westland via de A20. Westland is een autogericht gebied en de meeste bezoekers rijden naar ons restaurant.' },
  { question: 'Is Chopras Indian Restaurant halal gecertificeerd?', answer: 'Ja. Chopras Indian Restaurant is volledig halal gecertificeerd. Al het vlees is halal ingekocht en het volledige menu is geschikt voor gasten die halal voedsel vereisen in de regio Westland en Den Haag.' },
  { question: 'Wat zijn de openingstijden van Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open dinsdag tot en met zondag van 16:30 tot 22:30. Het restaurant is op maandag gesloten.' },
]

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Near Westland | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Westland | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant near Westland. Chopras Indian Restaurant Den Haag is 20 minutes via the A20. Authentic halal food at Leyweg 986. Open Tuesday to Sunday.',
    nl: 'Indiaas restaurant bij Westland. Chopras in Den Haag is 20 minuten rijden via de A20. Authentiek halal Indiaas eten op Leyweg 986. Open di tot zo.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-restaurant-westland'),
      languages: { en: getLocalizedUrl('en', 'indian-restaurant-westland'), nl: getLocalizedUrl('nl', 'indian-restaurant-westland'), 'x-default': getLocalizedUrl('en', 'indian-restaurant-westland') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-restaurant-westland'),
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

export default function IndianRestaurantWestlandPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = getLocalRestaurantSchema(
    locale,
    ['Westland', 'Den Haag', 'South Holland'],
    getLocalizedUrl(locale, 'indian-restaurant-westland'),
  )

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Restaurant bij Westland' : 'Indian Restaurant Near Westland', item: getLocalizedUrl(locale, 'indian-restaurant-westland') },
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
            {isNl ? 'Indiaas Restaurant bij Westland  -  Chopras is Twintig Minuten Rijden' : 'Indian Restaurant Near Westland  -  Chopras is Twenty Minutes Away'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Authentiek Noord-Indiaas eten, volledig halal gecertificeerd, open dinsdag tot en met zondag. Leyweg 986, Den Haag  -  gemakkelijk bereikbaar via de A20 uit Westland.' : 'Authentic North Indian food, fully halal certified, open Tuesday to Sunday. Leyweg 986, Den Haag  -  easily accessible via the A20 from Westland.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Van Westland naar Leyweg' : 'From Westland to Leyweg'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Westland is een gemeente in Zuidwest-Holland, bekend om zijn kassen en tuinbouw. Het gebied is autogericht  -  de meeste inwoners en bezoekers verplaatsen zich per auto. Chopras op Leyweg 986, Den Haag, is ongeveer 20 minuten rijden via de A20, wat het tot een aantrekkelijke optie maakt voor Westlandse families die authentiek Indiaas eten zoeken.</p>
                <p>De route vanaf Westland naar ons restaurant is eenvoudig en rechtstreeks via de A20. Parkeren is gratis in het winkelgebied Leyweg - een concreet voordeel voor Westlandse bezoekers. Dit verwijdert een belangrijke hindernis en maakt een avonduit naar Chopras gemakkelijk en betaalbaar.</p>
                <p>Westland is een voornaam woongebied met veel gezinnen. Chopras is gezinsvriendelijk in de echte betekenis van het woord  -  we verwelkomen kinderen, passen onze gerechten aan voor hen, en de sfeer is warm in plaats van formeel. Families uit Westland kunnen naar ons restaurant gaan en zeker zijn dat iedereen welkom is.</p>
                <p>Voor groepen en speciale evenementen hebben we een private <Link href={`${base}/feestzaal-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">feestzaal</Link> beschikbaar met catering inbegrepen. Dit maakt Chopras een aantrekkelijke keuze voor Westlandse verjaarsdagen, familiereunies en bedrijfsfeesten.</p>
              </>
            ) : (
              <>
                <p>Westland is a municipality in southwestern Holland, known for its greenhouses and horticulture. The area is car-dependent  -  most residents and visitors drive. Chopras at Leyweg 986, Den Haag, is approximately 20 minutes by car via the A20, making it an attractive option for Westland families seeking authentic Indian food.</p>
                <p>The route from Westland to our restaurant is straightforward via the A20. Free parking is available in the Leyweg shopping area  -  a concrete advantage for Westland visitors. This eliminates a significant barrier and makes an evening at Chopras easy and affordable.</p>
                <p>Westland is a substantial residential area with many families. Chopras is family-friendly in the genuine sense  -  we welcome children, adapt our dishes for them, and the atmosphere is warm rather than formal. Families from Westland can visit our restaurant and know that everyone is welcome.</p>
                <p>For groups and special events, we have a private <Link href={`${base}/feestzaal-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">event hall</Link> available with catering included. This makes Chopras an attractive choice for Westland birthdays, family gatherings and corporate celebrations.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Westlandse Bezoekers Chopras Kiezen' : 'Why Westland Residents Choose Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Bezoekers uit Westland bij Chopras kiezen hun eerste gerechten doorgaans zorgvuldig. De <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Butter Chicken</Link> en Chicken Tikka Masala zijn populaire eerste bestellingen  -  toegankelijke gerechten die onmiddellijk het kwaliteitsverschil tussen Chopras en generieke Indiaase restaurants aantonen.</p>
                <p>De halalcertificering is relevant voor Westlandse families die halal eten willen voor religieuze of persoonlijke redenen. Chopras is volledig halal gecertificeerd  -  geen compromissen, geen twijfel. Dit verwijdert een belangrijk selectiecriterium.</p>
                <p>Het restaurant is gegegd op gezinsvriendelijkheid. We hebben geen kindermenu nodig omdat volwassen gerechten eenvoudig kunnen worden aangepast. De porter zijn royaal. De sfeer is welkom en ontspannen. Dit is waarom families uit Westland terugkomen.</p>
              </>
            ) : (
              <>
                <p>Visitors from Westland at Chopras typically choose their first dishes carefully. The <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Butter Chicken</Link> and Chicken Tikka Masala are popular first orders  -  accessible dishes that immediately establish the quality difference between Chopras and generic Indian restaurants.</p>
                <p>The halal certification is relevant for Westland families who want halal food for religious or personal reasons. Chopras is fully halal certified  -  no compromises, no doubt. This removes an important selection criterion.</p>
                <p>The restaurant is built on genuine family-friendliness. We do not need a children menu because adult dishes can be adapted easily. The portions are generous. The atmosphere is welcoming and relaxed. This is why families from Westland return.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Praktische Informatie voor Bezoekers uit Westland' : 'Practical Information for Westland Visitors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Afstand', desc: 'Ongeveer 20 minuten rijden via de A20 vanaf Westland naar Leyweg 986.' },
              { title: 'Vervoer', desc: 'Auto is het meest praktisch. Gratis parkeren beschikbaar in het winkelgebied Leyweg.' },
              { title: 'Bereikbaarheid', desc: 'Eenvoudige route via de A20. Goed aangegeven. Geen ingewikkelde navigatie nodig.' },
              { title: 'Openingstijden', desc: 'Dinsdag tot en met zondag: 16:30–22:30. Maandag gesloten.' },
            ] : [
              { title: 'Distance', desc: 'Approximately 20 minutes by car via the A20 from Westland to Leyweg 986.' },
              { title: 'Transport', desc: 'Car is most practical. Free parking available in the Leyweg shopping area.' },
              { title: 'Accessibility', desc: 'Simple route via the A20. Well signposted. No complicated navigation required.' },
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
            <Link href={`${base}/indian-restaurant-rijswijk`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-heading text-[#1B2B5E] font-bold">{isNl ? 'Indiaas Restaurant bij Rijswijk' : 'Indian Restaurant Near Rijswijk'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Rijswijk' : 'Chopras also serves Rijswijk'}</p>
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
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Favoriete eerste keus voor Westland-bezoekers' : 'Favorite first choice for Westland visitors'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil speciality'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Recht uit de kleioven' : 'Straight from the clay oven'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Authentieke Indische rijstgerecht' : 'Authentic Indian rice dish'}</p>
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Event Hall'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas buffet voor evenementen' : 'Indian catering for events'}</p>
            </Link>
            <Link href={`${base}/halal-menu`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Halal Menu' : 'Halal Menu'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Volledig halal gecertificeerd' : 'Fully halal certified'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering vanuit Westland' : 'book a table from Westland at Chopras Indian Restaurant Den Haag'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
