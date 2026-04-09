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
    en: 'Private Dining Venue in Den Haag | Chopras Indian Restaurant',
    nl: 'Zaal Huren Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Rent a private dining space in Den Haag at Chopras. Indian restaurant venue hire for celebrations and events.',
    nl: 'Zaal huren in Den Haag bij Chopras. Indiaas restaurant voor private feesten en evenementen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/zaal-huren-den-haag`,
      languages: { en: `${SITE_URL}/en/zaal-huren-den-haag`, nl: `${SITE_URL}/nl/zaal-huren-den-haag`, 'x-default': `${SITE_URL}/en/zaal-huren-den-haag` },
    },
  }
}

export default function ZaalHurenPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/zaal-huren-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Zaal Huren' : 'Venue Hire', item: `${SITE_URL}/${locale}/zaal-huren-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
              EVENTS
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
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
                a: isNl ? 'Dertig tot honderd comfortabel. Als je meer nodig hebt, kunnen we arrangementen maken.' : 'Thirty to one hundred comfortably. If you need more, we can make arrangements.'
              },
              {
                q: isNl ? 'Kunnen mijn gasten hun eigen drank meebrengen?' : 'Can my guests bring their own drinks?',
                a: isNl ? 'We hebben een selectie van dranken hier. Je mag ook je eigen meebrengen - er is geen corkage fee.' : 'We have a selection of drinks here. You can also bring your own - there is no corkage fee.'
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
            <a href={`${base}/contact`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {isNl ? 'Offerte Aanvragen' : 'Request Quote'}
            </a>
            <Link href={`${base}/menu`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/evenementenruimte-den-haag`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {isNl ? 'Evenementenruimte' : 'Event Space'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Populaire Zaal Huren Gerechten' : 'Popular Venue Hire Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst voor grote groepen' : 'Fragrant rice for large groups'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Gegrilde evenement favoriet' : 'Grilled event favourite'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Vegetarische gast optie' : 'Vegetarian guest option'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Altijd een hit op events' : 'Always a hit at events'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - zaal huren met catering in Den Haag' : 'Chopras Indian Restaurant - venue hire with catering in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'vraag een zaal huren offerte aan' : 'request your venue hire quote at Chopras'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
