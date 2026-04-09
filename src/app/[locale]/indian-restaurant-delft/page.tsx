import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'
import { getLocalRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Near Delft | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Delft | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Looking for an Indian restaurant near Delft? Chopras in Den Haag is just 15 minutes away. Authentic Indian food, halal certified. Students and families welcome.',
    nl: 'Op zoek naar een Indiaas restaurant bij Delft? Chopras in Den Haag is slechts 15 minuten rijden. Authentiek Indiaas eten, halal gecertificeerd. Studenten en families welkom.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-restaurant-delft`,
      languages: { en: `${SITE_URL}/en/indian-restaurant-delft`, nl: `${SITE_URL}/nl/indian-restaurant-delft`, 'x-default': `${SITE_URL}/en/indian-restaurant-delft` },
    },
  }
}

export default function IndianRestaurantDelftPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const restaurantSchema = getLocalRestaurantSchema(
    locale,
    ['Delft', 'Den Haag', 'South Holland'],
    `${SITE_URL}/${locale}/indian-restaurant-delft`,
  )

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Indiaas Restaurant bij Delft' : 'Indian Restaurant Near Delft', item: `${SITE_URL}/${locale}/indian-restaurant-delft` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              NEAR DELFT
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiaas Restaurant bij Delft  -  Chopras in Den Haag, 15 Minuten Rijden' : 'Indian Restaurant Near Delft  -  Chopras in Den Haag, 15 Minutes Away'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Authentiek Noord-Indiaas eten, volledig halal gecertificeerd, open dinsdag tot en met zondag. Leyweg 986, Den Haag  -  direct bereikbaar vanuit Delft per auto of openbaar vervoer.' : 'Authentic North Indian food, fully halal certified, open Tuesday to Sunday. Leyweg 986, Den Haag  -  directly accessible from Delft by car or public transport.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Van Delft naar Leyweg' : 'From Delft to Leyweg'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Delft en Den Haag vormen een aaneengesloten stedelijk gebied  -  de gemeentegrenzen lopen door wat in wezen een continue bebouwde omgeving is. Chopras op Leyweg 986 ligt op circa 15 minuten met de auto van het centrum van Delft, of 20 tot 25 minuten per tram of bus via de directe verbinding.</p>
                <p>De A13-snelweg verbindt Delft direct met de Leyweg-omgeving  -  de meeste routes vermijden het centrum van Den Haag volledig. Parkeren op Leyweg is gratis, wat een aanzienlijk voordeel is ten opzichte van het zoeken naar parkeerplaatsen in Delft of Den Haag Centrum.</p>
                <p>Delft heeft een grote internationale studentenpopulatie via de TU Delft. Indiase en Zuid-Aziatische studenten, internationale studenten die bekend zijn met Indiaas eten, en lokale families die eens per maand een speciaal etentje organiseren  -  Chopras is voor al deze groepen het meest logische uitje vanuit Delft wanneer de keuze valt op Indiaas eten.</p>
              </>
            ) : (
              <>
                <p>Delft and Den Haag form a continuous urban area - the municipal boundaries run through what is essentially uninterrupted built environment. Chopras at Leyweg 986 is approximately 15 minutes by car from central Delft, or 20 to 25 minutes by tram or bus via the direct connection.</p>
                <p>The A13 motorway connects Delft directly to the Leyweg area - most routes avoid central Den Haag entirely.</p>
                <p>Delft has a large international student population through TU Delft. Indian and South Asian students, international students familiar with Indian food, and local families organising a special dinner once a month - Chopras is the most logical outing from Delft for all these groups when the choice is Indian food.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Populaire Gerechten bij Delftse Bezoekers' : 'Popular Dishes with Delft Visitors'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Bezoekers uit Delft bestellen vaker dan gemiddeld biryani  -  het gerecht dat het meest onderscheidend is van de thuisbereidingsversies die de meeste mensen kennen. De qualiteit van de saffraanrijst en de verse kruiden bij Chopras maakt een direct vergelijkbaar verschil zichtbaar.</p>
                <p>De street food-sectie van het menu is bijzonder populair bij internationale TU Delft-studenten en -medewerkers  -  pani puri, chaat en samosa zijn vertrouwde smaken voor bezoekers uit India en Pakistan die elders in Den Haag of Delft moeilijk te vinden authentieke versies van deze gerechten zoeken.</p>
                <p>Het halal-aspect trekt specifiek families uit Delft&apos;s diverse moslimgemeenschap aan  -  Turks, Marokkaans, Pakistaans, Indiaas-moslim  -  voor wie de volledig gecertificeerde haalhalstatus van Chopras een doorslaggevend argument is.</p>
              </>
            ) : (
              <>
                <p>Visitors from Delft order biryani at above-average rates  -  the dish that is most distinctively different from the home-cooked versions most people know. The quality of the saffron rice and fresh spices at Chopras makes an immediately comparable difference.</p>
                <p>The street food section of the menu is particularly popular with international TU Delft students and staff  -  pani puri, chaat and samosa are familiar tastes for visitors from India and Pakistan who find authentic versions of these dishes hard to find elsewhere in Den Haag or Delft.</p>
                <p>The halal aspect specifically draws families from Delft&apos;s diverse Muslim community  -  Turkish, Moroccan, Pakistani, Indian-Muslim  -  for whom Chopras&apos; fully certified halal status is a decisive factor.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Praktische Informatie voor Bezoekers uit Delft' : 'Practical Information for Delft Visitors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Afstand', desc: 'Circa 15 minuten rijden vanuit het centrum van Delft via de A13. Directe route zonder stad in.' },
              { title: 'Openbaar Vervoer', desc: 'Tram- en busverbindingen van Delft via Den Haag Centraal naar Leyweg  -  circa 25 minuten.' },
              { title: 'Parkeren', desc: 'Gratis parkeren in het winkelgebied Leyweg. Veel eenvoudiger dan parkeren in het centrum.' },
              { title: 'Openingstijden', desc: 'Dinsdag tot en met zondag: 16:30–22:30. Maandag gesloten.' },
            ] : [
              { title: 'Distance', desc: 'Approximately 15 minutes by car from central Delft via the A13. Direct route without entering the city centre.' },
              { title: 'Public Transport', desc: 'Tram and bus connections from Delft via Den Haag Centraal to Leyweg - approximately 25 minutes.' },
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
          <h3 className="font-heading text-2xl text-[#1B2B5E] mb-6">
            {isNl ? 'Ook Nabij Den Haag' : 'Also Serving These Areas Near Den Haag'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
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
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Populair gerecht voor Delft-bezoekers' : 'Popular choice for Delft visitors'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil speciality'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
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
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering voor Delft' : 'book a table from Delft at Chopras Indian Restaurant Den Haag'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
