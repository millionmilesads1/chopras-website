import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

const faqsEn = [
  { question: 'How far is Chopras Indian Restaurant from Zoetermeer?', answer: 'Chopras Indian Restaurant is at Leyweg 986, Den Haag, approximately 20 minutes by car from central Zoetermeer via the A12. Randstadrail connects Zoetermeer to central Den Haag, with bus connections to Leyweg, totalling around 30 to 40 minutes.' },
  { question: 'Do you have a private event space for groups from Zoetermeer?', answer: 'Yes. Chopras Indian Restaurant has a private event hall accommodating 25 to 80 guests, suitable for weddings, birthdays, corporate dinners, and cultural celebrations. Groups from Zoetermeer regularly book the hall for special occasions.' },
  { question: 'What are the opening hours at Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open Tuesday to Sunday from 16:30 to 22:30. The restaurant is closed on Mondays.' },
]

const faqsNl = [
  { question: 'Hoe ver is Chopras Indian Restaurant van Zoetermeer?', answer: 'Chopras Indian Restaurant is op Leyweg 986, Den Haag, circa 20 minuten rijden van centraal Zoetermeer via de A12. De Randstadrail verbindt Zoetermeer met Den Haag Centrum, met busverbindingen naar Leyweg, totaal circa 30 tot 40 minuten.' },
  { question: 'Heeft u een privé-evenementenruimte voor groepen uit Zoetermeer?', answer: 'Ja. Chopras Indian Restaurant heeft een privé-evenementenruimte voor 25 tot 80 gasten, geschikt voor bruiloften, verjaardagen, bedrijfsdiners en culturele vieringen. Groepen uit Zoetermeer boeken de zaal regelmatig voor bijzondere gelegenheden.' },
  { question: 'Wat zijn de openingstijden van Chopras Indian Restaurant?', answer: 'Chopras Indian Restaurant is open dinsdag tot en met zondag van 16:30 tot 22:30. Het restaurant is op maandag gesloten.' },
]

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Restaurant Near Zoetermeer | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Zoetermeer | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant near Zoetermeer. Chopras Indian Restaurant is 20 minutes via the A12. Authentic halal food at Leyweg 986. Open Tuesday to Sunday.',
    nl: 'Op zoek naar een Indiaas restaurant bij Zoetermeer? Chopras in Den Haag is 20 minuten rijden. Authentiek Indiaas eten, halal gecertificeerd, open di–zo.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-restaurant-zoetermeer'),
      languages: { en: getLocalizedUrl('en', 'indian-restaurant-zoetermeer'), nl: getLocalizedUrl('nl', 'indian-restaurant-zoetermeer'), 'x-default': getLocalizedUrl('en', 'indian-restaurant-zoetermeer') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-restaurant-zoetermeer'),
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

export default function IndianRestaurantZoetermeerPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = getLocalRestaurantSchema(
    locale,
    ['Zoetermeer', 'Den Haag', 'South Holland'],
    getLocalizedUrl(locale, 'indian-restaurant-zoetermeer'),
  )

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Restaurant bij Zoetermeer' : 'Indian Restaurant Near Zoetermeer', item: getLocalizedUrl(locale, 'indian-restaurant-zoetermeer') },
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
            {isNl ? 'Indiaas Restaurant bij Zoetermeer  -  Chopras in Den Haag, 20 Minuten Rijden' : 'Indian Restaurant Near Zoetermeer  -  Chopras in Den Haag, 20 Minutes Away'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Authentiek Noord-Indiaas eten, volledig halal gecertificeerd, open dinsdag tot en met zondag. Leyweg 986, Den Haag  -  een directe verbinding vanuit Zoetermeer via de A12.' : 'Authentic North Indian food, fully halal certified, open Tuesday to Sunday. Leyweg 986, Den Haag  -  a direct connection from Zoetermeer via the A12.'}
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Van Zoetermeer naar Leyweg' : 'From Zoetermeer to Leyweg'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Zoetermeer ligt direct ten oosten van Den Haag, verbonden via de A12-snelweg en meerdere tramlijnen. Chopras op Leyweg 986 is doorgaans 20 minuten met de auto vanuit het centrum van Zoetermeer  -  rechtstreeks via de A12 richting Den Haag, afslag Leyweg.</p>
                <p>Per openbaar vervoer verbindt de Randstadrail (tram/metro) Zoetermeer rechtstreeks met het centrum van Den Haag, van waaruit busverbindingen naar Leyweg beschikbaar zijn. De totale reistijd is doorgaans 30 tot 40 minuten afhankelijk van de vertrektijd.</p>
                <p>Zoetermeer heeft een van de grootste Zuid-Aziatische gemeenschappen in de regio Den Haag  -  Hindoestaanse families, Pakistaanse en Indiase expats, en een groeiende generatie tweede- en derde-generatie Nederlanders met een Indiase eettraditie thuis. Voor hen is Chopras de dichtst bij gelegen authentieke optie met de gecertificeerde halalstatus die de gemeenschap vereist.</p>
                <p>Parkeren op Leyweg is gratis en royaal beschikbaar  -  een relevant punt voor Zoetermeerse families die met meerdere mensen komen en de parkeerstress van het stadscentrum willen vermijden.</p>
              </>
            ) : (
              <>
                <p>Zoetermeer lies directly east of Den Haag, connected via the A12 motorway and several tram lines. Chopras at Leyweg 986 is typically 20 minutes by car from central Zoetermeer - straight via the A12 towards Den Haag, exit Leyweg.</p>
                <p>By public transport, the Randstadrail connects Zoetermeer directly to central Den Haag, from where bus connections to Leyweg are available. Total travel time is typically 30 to 40 minutes depending on departure time.</p>
                <p>Zoetermeer has one of the largest South Asian communities in the Den Haag region - Hindustani families, Pakistani and Indian expats, and a growing second and third generation of Dutch people with an Indian food tradition at home. For them, Chopras is the nearest authentic option with the certified halal status that the community requires.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Zoetermeerse Bezoekers bij Chopras Bestellen' : 'What Zoetermeer Visitors Order at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>De <Link href={`${base}/dal-makhani-den-haag`} className="text-[#D4AF37] hover:underline">Dal Makhani</Link> en <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> zijn de vaste keuzes voor Hindoestaanse families uit Zoetermeer  -  gerechten die thuis worden bereid maar die bij Chopras een restaurantkwaliteit hebben die de thuisversie moeilijk evenaart. Langzame garing, verse kruiden, de juiste verhouding room en boter.</p>
                <p>Families die voor de eerste keer komen voor een speciale gelegenheid  -  verjaardag, jubileum, Eid-diner  -  kiezen vaak voor <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">biryani</Link> als centrepiece van de tafel. Het is het gerecht dat het meest overtuigt dat de rit de moeite waard was.</p>
                <p>De private evenementenhal wordt regelmatig geboekt door families en gemeenschappen uit Zoetermeer voor grotere bijeenkomsten  -  wanneer de afstand te groot is voor een spontane avond uit maar ruimschoots de moeite waard voor een geplande gelegenheid.</p>
              </>
            ) : (
              <>
                <p><Link href={`${base}/dal-makhani-den-haag`} className="text-[#D4AF37] hover:underline">Dal Makhani</Link> and <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:underline">Butter Chicken</Link> are the consistent choices for Hindustani families from Zoetermeer  -  dishes that are cooked at home but that at Chopras have a restaurant quality that the home version struggles to match. Slow cooking, fresh spices, the right ratio of cream and butter.</p>
                <p>Families visiting for a special occasion for the first time  -  birthday, anniversary, Eid dinner  -  often choose <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">biryani</Link> as the centrepiece of the table. It is the dish that most convincingly makes the journey feel worthwhile.</p>
                <p>The private event hall is regularly booked by families and communities from Zoetermeer for larger gatherings  -  when the distance is too far for a spontaneous evening out but well worth the journey for a planned occasion.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Praktische Informatie voor Bezoekers uit Zoetermeer' : 'Practical Information for Zoetermeer Visitors'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Afstand', desc: 'Circa 20 minuten rijden vanuit centraal Zoetermeer via de A12.' },
              { title: 'Openbaar Vervoer', desc: 'Randstadrail naar Den Haag Centrum, daarna bus naar Leyweg. Circa 30–40 minuten totaal.' },
              { title: 'Parkeren', desc: 'Gratis parkeren in het winkelgebied Leyweg. Geen parkeerstress.' },
              { title: 'Openingstijden', desc: 'Dinsdag tot en met zondag: 16:30–22:30. Maandag gesloten.' },
            ] : [
              { title: 'Distance', desc: 'Approximately 20 minutes by car from central Zoetermeer via the A12.' },
              { title: 'Public Transport', desc: 'Randstadrail to Den Haag Centrum, then bus to Leyweg. Approximately 30–40 minutes total.' },
              { title: 'Opening Hours', desc: 'Tuesday to Sunday: 16:30–22:30. Closed Monday.' },
            ]).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-lg text-[#1B2B5E] mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </a>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl text-[#1B2B5E] mb-6">
            {isNl ? 'Ook Nabij Den Haag' : 'Also Serving These Areas Near Den Haag'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/indian-restaurant-rijswijk`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-heading text-[#1B2B5E] font-bold">{isNl ? 'Indiaas Restaurant bij Rijswijk' : 'Indian Restaurant Near Rijswijk'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Rijswijk' : 'Chopras also serves Rijswijk'}</p>
            </Link>
            <Link href={`${base}/indian-restaurant-delft`} className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors">
              <p className="font-heading text-[#1B2B5E] font-bold">{isNl ? 'Indiaas Restaurant bij Delft' : 'Indian Restaurant Near Delft'}</p>
              <p className="text-gray-600 text-sm mt-1">{isNl ? 'Chopras bedient ook Delft' : 'Chopras also serves Delft'}</p>
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
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Populair gerecht voor Zoetermeer-bezoekers' : 'Popular choice for Zoetermeer visitors'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil speciality'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#F7F8FC] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
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
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering voor Zoetermeer' : 'book a table from Zoetermeer at Chopras Indian Restaurant Den Haag'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
