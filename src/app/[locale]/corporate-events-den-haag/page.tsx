import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Corporate Events Den Haag | Chopras Indian Restaurant',
    nl: 'Zakelijke Evenementen Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Corporate events Den Haag. Chopras Indian Restaurant provides Indian catering for team dinners and receptions. Halal certified. Up to 120 guests. Book now.',
    nl: 'Zakelijke evenementencatering en verhuur van privéruimte in Den Haag bij Chopras. Authentieke Indiase catering voor teamdiners, productlanceringen en netwerkevenementen.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'corporate-events-den-haag'),
      languages: { en: getLocalizedUrl('en', 'corporate-events-den-haag'), nl: getLocalizedUrl('nl', 'corporate-events-den-haag'), 'x-default': getLocalizedUrl('en', 'corporate-events-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'corporate-events-den-haag'),
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

export default function CorporateEventsPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: RESTAURANT.name,
    url: RESTAURANT.contact.website, telephone: RESTAURANT.contact.phone, email: RESTAURANT.contact.email,
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, addressLocality: RESTAURANT.address.city, postalCode: RESTAURANT.address.postcode, addressCountry: 'NL' },
    servesCuisine: RESTAURANT.cuisines, priceRange: RESTAURANT.priceRange,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '834', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: isNl ? 'Zakelijke Evenementencatering Den Haag' : 'Corporate Event Catering Den Haag',
    serviceType: isNl ? 'Zakelijke Evenementencatering' : 'Corporate Event Catering',
    provider: { '@type': 'Restaurant', name: RESTAURANT.name, telephone: RESTAURANT.contact.phone, url: RESTAURANT.contact.website },
    areaServed: RESTAURANT.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
  }

  const eventCards = isNl ? [
    { emoji: '🍽️', title: 'Teamdiners en Bedrijfsvieringen', desc: 'Eindejaarsdiners, kwartaalvieringen, teamuitjes. Een Indiaas spread is genereus, gezellig en past bij elk voedingsprofiel in de zaal zonder speciale verzoeken.' },
    { emoji: '🤝', title: 'Klantentertainment en Bedrijfsontwikkeling', desc: 'Een klantendiner bij Chopras, of Chopras-catering op uw locatie, maakt een meer memorabele indruk dan een standaard restaurantboeking.' },
    { emoji: '🚀', title: 'Productlanceringen en Persevents', desc: 'Street food stations, chaat bars, Indiase kleine gerechten op canapé-stijl  -  Indiaas eten creëert visuele en smaakbelevenissen die goed fotograferen.' },
    { emoji: '🏆', title: 'Conferentiediners en Uitreikingen', desc: 'Volledige bediening op bord voor 40 tot 120 gasten. Professioneel, op tijd en uitgevoerd zonder keukendrama aan uw kant.' },
    { emoji: '🌍', title: 'Overheids- en Diplomatieke Recepties', desc: 'Chopras heeft de halal-certificering en de multiculturele menuomvang die vereist is voor internationale diplomatieke catering waar dieetvereisten strikt en gevarieerd kunnen zijn.' },
    { emoji: '💬', title: 'Netwerkevenementen en Meetups', desc: 'Kleinere, staande evenementen waar gasten bewegen en socialiseren. Indiase canapés en street food stations werken perfect voor dit formaat.' },
    { emoji: '📋', title: 'Trainingen en Workshopcatering', desc: 'Avondcatering voor trainingen en meerdaagse workshops. Teams die een volledige dag afsluiten met een goed Indiaas diner, zijn energieker voor de avondsessie of de volgende ochtend.' },
    { emoji: '✈️', title: 'Bezoeken van Internationale Delegaties', desc: 'Bij het ontvangen van delegaties uit India, de Golfregio, Zuid-Azië of Afrika, draagt authentieke Indiase catering een culturele herkenning die generiek Nederlandse eten niet heeft.' },
  ] : [
    { emoji: '🍽️', title: 'Team Dinners and Company Celebrations', desc: 'Year-end dinners, quarterly celebrations, team offsites. An Indian spread is generous, sociable and suits every dietary profile in the room without special requests.' },
    { emoji: '🤝', title: 'Client Entertainment and Business Development', desc: 'A client dinner at Chopras, or Chopras catering at your premises, creates a more memorable impression than a standard restaurant booking.' },
    { emoji: '🚀', title: 'Product Launches and Press Events', desc: 'Street food stations, chaat bars, canape-style Indian small plates  -  Indian food creates visual and flavour moments that photograph well.' },
    { emoji: '🏆', title: 'Conference Dinners and Awards Ceremonies', desc: 'Full plated service for 40 to 120 guests. Professional, timed, and executed without kitchen drama on your side.' },
    { emoji: '🌍', title: 'Government and Diplomatic Receptions', desc: 'Chopras has the halal certification and the multicultural menu breadth required for international diplomatic catering where dietary requirements may be strict and varied.' },
    { emoji: '💬', title: 'Networking Events and Meetups', desc: 'Smaller, standing-format events where guests move and mingle. Indian canapes and street food stations work perfectly for this format.' },
    { emoji: '📋', title: 'Training Days and Workshop Catering', desc: 'Evening catering for training days and full-day workshops. Teams that close out a long day with a proper Indian dinner arrive at the evening session or the next morning in better shape.' },
    { emoji: '✈️', title: 'International Delegation Visits', desc: 'When hosting delegations from India, the Gulf States, South Asia or Africa, authentic Indian catering carries a cultural recognition that generic Dutch food does not.' },
  ]

  const faqItems = isNl ? [
    { q: 'Kunt u ook op ons kantoor of externe locatie cateren?', a: 'Ja. Chopras verzorgt volledige zakelijke catering op locatie door Den Haag en omgeving. Wij brengen de keuken naar uw locatie  -  of dat nu een ministerie, kantoor, congrescentrum of externe evenementenlocatie is.' },
    { q: 'Wat is de minimale groepsgrootte voor zakelijke catering?', a: 'De minimale groepsgrootte voor zakelijke evenementencatering is 15 personen. Voor kleinere executive diners raden wij aan het restaurant direct op Leyweg te boeken.' },
    { q: 'Is de catering halal gecertificeerd?', a: 'Ja, volledig. Al het vlees dat bij Chopras zakelijke evenementen wordt geserveerd, is afkomstig van halal-gecertificeerde leveranciers. Dit geldt ook voor catering op externe locaties.' },
    { q: 'Levert u ook bedienend personeel?', a: 'Ja. Elke zakelijke cateringboeking omvat professioneel bedienend personeel voor de volledige duur van het evenement. Personeel zijn ervaren restaurantprofessionals  -  geen uitzendkrachten.' },
    { q: 'Hoe snel kunt u een offerte verstrekken?', a: 'Wij verstrekken offertes binnen 24 uur na ontvangst van uw evenementgegevens. Voor urgente vereisten  -  boekingen in dezelfde week  -  bel ons direct.' },
  ] : [
    { q: 'Can you cater at our office or external venue?', a: 'Yes. Chopras provides full off-site corporate catering across Den Haag and surrounding areas. We bring the kitchen to your location  -  whether that is a ministry, an office, a conference centre, or an external event venue.' },
    { q: 'What is the minimum group size for corporate catering?', a: 'The minimum group size for corporate event catering is 15 people. For smaller executive dinners, we recommend booking the restaurant directly on Leyweg.' },
    { q: 'Is the catering halal certified?', a: 'Yes, completely. All meat served at Chopras corporate events is sourced from halal-certified suppliers. This applies to off-site catering as well as events in our own hall.' },
    { q: 'Do you provide serving staff?', a: 'Yes. Every corporate catering booking includes professional serving staff for the full duration of the event. Staff are experienced restaurant professionals  -  not agency workers hired for the evening.' },
    { q: 'How quickly can you provide a quote?', a: 'We provide quotes within 24 hours of receiving your event details. For urgent requirements  -  same-week bookings  -  call us directly.' },
  ]

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={serviceSchema as Record<string, unknown>} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Zakelijke Evenementen' : 'Corporate Events', item: getLocalizedUrl(locale, 'corporate-events-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(faqItems.map(({ q, a }) => ({ question: q, answer: a })))} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-6xl text-white leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Zakelijke Evenementen in Den Haag  -  Indiase Catering en Privélocatie bij Chopras' : 'Corporate Events in Den Haag  -  Indian Catering and Private Venue at Chopras'}
          </h1>
          <p className="text-xl text-white/75 mt-6 leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Teamdiners. Klantentertainment. Productlanceringen. Conferentiecatering. Voor 15 tot 120 gasten in Den Haag.' : 'Team dinners. Client entertainment. Product launches. Conference catering. For 15 to 120 guests across Den Haag.'}
          </p>
          <Link href={`${base}/catering#catering-form`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
            {isNl ? 'Zakelijke Offerte Aanvragen' : 'Get a Corporate Quote'}
          </Link>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Den Haag de Zakelijke Evenementenhoofdstad van Nederland Is' : 'Why Den Haag is the Corporate Event Capital of the Netherlands'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Den Haag is niet alleen de zetel van de Nederlandse overheid  -  het is een van de internationaal meest geconcentreerde steden van Europa. Meer dan 150 ambassades. <Link href={`${base}/indian-restaurant-near-peace-palace-den-haag`} className="text-[#D4AF37] hover:underline">Het Internationaal Gerechtshof</Link>. <Link href={`${base}/indian-restaurant-near-peace-palace-den-haag`} className="text-[#D4AF37] hover:underline">Het Vredespaleis</Link>. De hoofdkwartieren van Europol, de OPCW en het ICC. Honderden NGO&apos;s en internationale organisaties met personeel van over de hele wereld aan dezelfde tafel.</p>
                <p>Dit creëert een ongewone dichtheid van zakelijke evenementen waarbij de gastenlijst tegelijkertijd culturen, dieetvereisten en verwachtingen omspant. Ministeriële diners, diplomatieke recepties, eindejaarsfeesten, klantentertainment waarbij de aankomen gast uit India, Indonesië of Saudi-Arabië kan komen. Generiek eten werkt niet voor dat spectrum. Indiaas eten wel.</p>
                <p>Indiase keuken is een van de weinige culinaire tradities die <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal, vegetarisch, veganistisch en glutenvrij</Link> op een natuurlijke manier in één spread dekt  -  niet door aanpassing, maar omdat dat nu eenmaal de structuur van het eten is. Chopras heeft zakelijke evenementen gecaterd voor teams van 15 tot 120 gasten in Den Haag en de wijdere regio.</p>
              </>
            ) : (
              <>
                <p>Den Haag is not just the seat of Dutch government  -  it is one of the most internationally concentrated cities in Europe. More than 150 embassies. <Link href={`${base}/indian-restaurant-near-peace-palace-den-haag`} className="text-[#D4AF37] hover:underline">The International Court of Justice</Link>. <Link href={`${base}/indian-restaurant-near-peace-palace-den-haag`} className="text-[#D4AF37] hover:underline">The Peace Palace</Link>. The headquarters of Europol, the OPCW and the ICC. Hundreds of NGOs and international organisations with staff from every part of the world sitting around the same table.</p>
                <p>This creates an unusual density of corporate events where the guest list spans cultures, dietary requirements and expectations simultaneously. Ministerial dinners, diplomatic receptions, year-end team celebrations, client entertainment where the guest arriving may be from India, Indonesia or Saudi Arabia. Generic food does not work across that range. Indian food does.</p>
                <p>Indian cuisine is one of the few culinary traditions that naturally covers <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal, vegetarian, vegan and gluten-free</Link> in a single spread  -  not through special accommodation, but because that is the structure of the food. Chopras has catered corporate events for teams of 15 to 120 guests across Den Haag and the wider region.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Soorten Zakelijke Evenementen die Wij Cateren' : 'Types of Corporate Events We Cater'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventCards.map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="font-heading font-bold text-[#1B2B5E] text-base mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="border-l-4 border-[#D4AF37] bg-[#1B2B5E]/5 rounded-r-xl">
                <summary className="px-6 py-4 cursor-pointer text-[#1B2B5E] font-bold text-lg list-none">{q}</summary>
                <p className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            {isNl ? 'Zakelijke Cateringofferte Aanvragen' : 'Get a Corporate Catering Quote'}
          </h2>
          <p className="text-white/75 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
            {isNl ? 'Vertel ons over uw evenement  -  datum, locatie, aantal gasten en formaat  -  en wij hebben binnen 24 uur een duidelijke, gespecificeerde offerte voor u.' : 'Tell us about your event  -  date, location, guest count, and format  -  and we will have a clear, itemised quote back to you within 24 hours.'}
          </p>
          <Link href={`${base}/catering#catering-form`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
            {isNl ? 'Offerte Aanvragen' : 'Request a Quote'}
          </Link>
          <div className="mt-6">
            <a href={`tel:${RESTAURANT.contact.phone}`} className="text-white/80 hover:text-white transition-colors text-lg">
              {isNl ? `Bel voor urgente aanvragen: ${RESTAURANT.contact.phoneDisplay}` : `Call for urgent enquiries: ${RESTAURANT.contact.phoneDisplay}`}
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Andere Cateringmogelijkheden' : 'Other Catering Options'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiase bruiloftscatering' : 'Indian wedding catering'}</p>
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Event Space'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Zakelijk evenement feestzaal Den Haag' : 'Business event space Den Haag'}</p>
            </Link>
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Verjaardag' : 'Birthday'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Verjaardagscatering' : 'Birthday catering'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali-diner' : 'Diwali dinner'}</p>
            </Link>
          </div>
          <div className="text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige' : 'View the full'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'cateringsmenu' : 'catering menu'}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak nu een afspraak' : 'book a consultation now'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
