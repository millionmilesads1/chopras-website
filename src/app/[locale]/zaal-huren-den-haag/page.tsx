import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Private Dining Venue in Den Haag | Chopras Indian Restaurant',
    nl: 'Zaal Huren Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Zaal huren Den Haag bij Chopras Indian Restaurant. Feesten en vergaderingen met Indiaas catering inbegrepen. Flexibel en betaalbaar. Offerte aanvragen vandaag.',
    nl: 'Zaal huren Den Haag bij Chopras Indian Restaurant. Feesten en vergaderingen met Indiaas catering inbegrepen. Flexibel en betaalbaar. Offerte aanvragen vandaag.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'zaal-huren-den-haag'),
      languages: { en: getLocalizedUrl('en', 'zaal-huren-den-haag'), nl: getLocalizedUrl('nl', 'zaal-huren-den-haag'), 'x-default': getLocalizedUrl('en', 'zaal-huren-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'zaal-huren-den-haag'),
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

const faqsEn = [
  { question: 'How many people can fit in the venue?', answer: '25 to 80 guests comfortably. If you need more, we can make arrangements.' },
  { question: 'Can my guests bring their own drinks?', answer: 'Chopras Indian Restaurant is a fully halal venue. We serve a selection of soft drinks, juices, and water. No alcohol is served or permitted on the premises.' },
  { question: 'What if I want to add decorations?', answer: 'That is fine. You can add your own decorations. We are happy to help with setup. Your celebration, your style.' },
]

const faqsNl = [
  { question: 'Hoeveel mensen kunnen in de zaal?', answer: '25 tot 80 gasten comfortabel. Als je meer nodig hebt, kunnen we arrangementen maken.' },
  { question: 'Kunnen mijn gasten hun eigen drank meebrengen?', answer: 'Chopras Indian Restaurant is een volledig halal locatie. Wij serveren een selectie van frisdranken, sappen en water. Er wordt geen alcohol geserveerd of toegestaan op het terrein.' },
  { question: 'Wat als ik decoraties wil toevoegen?', answer: 'Dat is prima. Je kunt je eigen decoraties toevoegen. We helpen graag met opzet. Je feest, jouw stijl.' },
]

export default function ZaalHurenPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'zaal-huren-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Zaal Huren' : 'Venue Hire', item: getLocalizedUrl(locale, 'zaal-huren-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Zaal Huren in Den Haag' : 'Rent a Venue in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Private ruimte. Indiaas eten. Je gelegenheid. Bij Chopras.' : 'Private space. Indian food. Your occasion. At Chopras.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Zaal Huren bij Chopras' : 'Venue Hire at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Soms wil je niet in een anoniem zalencentrum zitten. Soms wil je ergens zijn waar het warm voelt, waar het eten de ster van het feest is, waar je gasten voelen dat je iets speciaals voor hen hebt gedaan. Dit is waarom mensen naar Chopras komen om zaal te huren.</p>
                <p>We hebben ruimte in ons restaurant in Den Haag die voor private events kan worden gebruikt. Het is geen grote hallen met fluorescent licht. Het is warme ruimte, authentiek gedecoreerd, vol van de geur van Indiaas eten. Je gasten voelen zich welkom, ze voelen zich gehoord, ze voelen zich gewaardeerd.</p>
                <p>We kunnen groepen van twintig tot honderd of meer accommoderen. We combineren venue hire met catering, dus je hebt alles hier. Je hoeft je geen zorgen te maken over voedsel, borden, serveerders. We doen het allemaal. Je concentreert je op wat belangrijk is - je gasten en je moment.</p>
              </>
            ) : (
              <>
                <p>Sometimes you do not want to be in an anonymous event centre. Sometimes you want to be somewhere that feels warm, where the food is the star of the party, where your guests feel that you have done something special for them. This is why people come to Chopras to rent a venue.</p>
                <p>We have space in our restaurant in Den Haag that can be used for private events. It is not large halls with fluorescent lights. It is warm space, authentically decorated, full of the aroma of Indian food. Your guests feel welcome, they feel heard, they feel valued.</p>
                <p>We can accommodate groups of twenty to one hundred or more. We combine venue hire with catering, so you have everything here. You do not have to worry about food, plates, servers. We do it all. You focus on what matters - your guests and your moment.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Inbegrepen is' : 'What is Included'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Ruimte</h3>
                <p>Warme, Authentieke Indiaase eetruimte. Geen fluorescent licht. Geen plastic stoelen. Dit voelt als een plek waar je wil zijn.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Catering</h3>
                <p>Custom menu, vers eten, professionele serveerders. Je kiest wat je wilt, we bereiden het, we serveren het.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Setup</h3>
                <p>Tafels, stoelen, borden, bestek, servetten, tafeldecoraties - alles. We zorgen voor de details.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Faciliteren</h3>
                <p>Parkeren beschikbaar. Toiletten. Muziek kan worden afgespeeld. Je feest voelt compleet.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Space</h3>
                <p>Warm, Authentic Indian dining space. No fluorescent lights. No plastic chairs. This feels like a place you want to be.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Catering</h3>
                <p>Custom menu, fresh food, professional servers. You choose what you want, we prepare it, we serve it.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Setup</h3>
                <p>Tables, chairs, plates, utensils, napkins, table decorations - everything. We look after the details.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Facilities</h3>
                <p>Parking available. Toilets. Music can be played. Your celebration feels complete.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Zaal Huren FAQ' : 'Venue Hire FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoeveel mensen kunnen in de zaal?' : 'How many people can fit in the venue?',
                a: isNl ? '25 tot 80 gasten comfortabel. Als je meer nodig hebt, kunnen we arrangementen maken.' : '25 to 80 guests comfortably. If you need more, we can make arrangements.'
              },
              {
                q: isNl ? 'Kunnen mijn gasten hun eigen drank meebrengen?' : 'Can my guests bring their own drinks?',
                a: isNl ? 'Chopras Indian Restaurant is een volledig halal locatie. Wij serveren een selectie van frisdranken, sappen en water. Er wordt geen alcohol geserveerd of toegestaan op het terrein.' : 'Chopras Indian Restaurant is a fully halal venue. We serve a selection of soft drinks, juices, and water. No alcohol is served or permitted on the premises.'
              },
              {
                q: isNl ? 'Wat als ik decoraties wil toevoegen?' : 'What if I want to add decorations?',
                a: isNl ? 'Dat is prima. Je kunt je eigen decoraties toevoegen. We helpen graag met opzet. Je feest, jouw stijl.' : 'That is fine. You can add your own decorations. We are happy to help with setup. Your celebration, your style.'
              },
            ].map((item, idx) => (
              <details key={idx} className="group border border-[#D4AF37] rounded-lg p-6 cursor-pointer hover:bg-white/50 transition-colors">
                <summary className="font-bold text-[#1B2B5E] flex justify-between items-center">
                  {item.q}
                  <span className="text-[#D4AF37] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-[#1A1A1A] mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Zaal Huren Aanvragen' : 'Request Venue Hire'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Offerte Aanvragen' : 'Request Quote'}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/evenementenruimte-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Evenementenruimte' : 'Event Space'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Andere Cateringmogelijkheden' : 'Other Catering Options'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Nikah-recepties en bruiloftsfestiviteiten' : 'Nikah receptions and wedding festivities'}</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Zakelijk' : 'Corporate'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bedrijfsdiners en teamvieringen' : 'Corporate dinners and team celebrations'}</p>
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Party Venue'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Feestzaal Huren Den Haag bij Chopras Indian Restaurant' : 'Private event hall hire'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali-diners en festiviteiten' : 'Diwali dinners and festival celebrations'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor meer cateringmogelijkheden, zie ons' : 'For more catering options, see our'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.common.viewMenu}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een afspraak' : 'contact us'}</Link> {isNl ? 'om uw zaal huren te bespreken.' : 'to discuss your venue hire.'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
