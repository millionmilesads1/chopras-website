import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Wedding Catering Den Haag | Chopras Indian Restaurant',
    nl: 'Indiase Bruiloftscatering Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic Indian wedding catering in Den Haag at Chopras. Full halal wedding menus for 25 to 200 guests. Serving Den Haag, Rijswijk, Delft and surrounding areas.',
    nl: 'Authentieke Indiase bruiloftscatering in Den Haag bij Chopras. Volledige halal bruiloftsmenus voor 25 tot 200 gasten. Actief in Den Haag, Rijswijk, Delft en omgeving.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-wedding-catering-den-haag`,
      languages: { en: `${SITE_URL}/en/indian-wedding-catering-den-haag`, nl: `${SITE_URL}/nl/indian-wedding-catering-den-haag`, 'x-default': `${SITE_URL}/en/indian-wedding-catering-den-haag` },
    },
  }
}

export default function IndianWeddingCateringPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const restaurantSchema = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: RESTAURANT.name,
    url: RESTAURANT.contact.website, telephone: RESTAURANT.contact.phone, email: RESTAURANT.contact.email,
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, addressLocality: RESTAURANT.address.city, postalCode: RESTAURANT.address.postcode, addressCountry: 'NL' },
    servesCuisine: RESTAURANT.cuisines, priceRange: RESTAURANT.priceRange,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const cateringServiceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: isNl ? 'Indiase Bruiloftscatering Den Haag' : 'Indian Wedding Catering Den Haag',
    serviceType: isNl ? 'Indiase Bruiloftscatering' : 'Indian Wedding Catering',
    provider: { '@type': 'Restaurant', name: RESTAURANT.name, telephone: RESTAURANT.contact.phone, url: RESTAURANT.contact.website },
    areaServed: [
      { '@type': 'City', name: 'Den Haag' }, { '@type': 'City', name: 'Rijswijk' },
      { '@type': 'City', name: 'Delft' }, { '@type': 'City', name: 'Zoetermeer' },
      { '@type': 'City', name: 'Voorburg' }, { '@type': 'City', name: 'Leidschendam' },
    ],
  }

  const weddingOccasions = isNl ? [
    { title: 'Nikah-receptie', desc: 'De formele maaltijd na de huwelijksceremonie. Een Indiase spread is de juiste keuze voor deze gelegenheid  -  halal als standaard, breed genoeg om elke gast aan tafel te bedienen.' },
    { title: 'Walima-diner', desc: 'Het traditionele feestmaal na de Nikah. Chopras stelt op maat gemaakte Walima-menu\'s samen die authentiek zijn voor de gelegenheid  -  van biryani tot seekh kebab, van slow-cooked curry tot verse naan.' },
    { title: 'Sangeet-avond', desc: 'Muziek, dans en eten voor de bruiloft. Een street food station of buffet met lichte Indiase hapjes werkt uitstekend voor een Sangeet  -  gasten eten terwijl ze bewegen en socialiseren.' },
    { title: 'Mehndi-feest', desc: 'Lichtere catering voor het mehndi-feest. Indiase chaat, snacks en zoetigheid  -  eten dat gasten kunnen oppakken terwijl de mehndi-artiesten aan het werk zijn.' },
    { title: 'Haldi-ceremony', desc: 'Eenvoudige, vrolijke catering voor de Haldi. Fruit, zoetjes, pakora, samosa  -  een lichte spread die de viering vergezelt zonder de ceremonie in beslag te nemen.' },
    { title: 'Receptie en Bruiloftsdiner', desc: 'Groot formeel diner voor 50 tot 200 gasten. Volledige buffetservice of bediening op bord. Professioneel bedienend personeel. Verse broodjes de hele avond aangevuld.' },
  ] : [
    { title: 'Nikah Reception', desc: 'The formal meal following the marriage ceremony. An Indian spread is the right choice for this occasion  -  halal as standard, broad enough to serve every guest at the table.' },
    { title: 'Walima Dinner', desc: 'The traditional celebratory meal following the Nikah. Chopras composes bespoke Walima menus that are authentic to the occasion  -  from biryani to seekh kebab, from slow-cooked curry to fresh naan.' },
    { title: 'Sangeet Night', desc: 'Music, dance and food before the wedding. A street food station or a light buffet works excellently for a Sangeet  -  guests eat while they move and socialise.' },
    { title: 'Mehndi Party', desc: 'Lighter catering for the mehndi evening. Indian chaat, snacks and sweets  -  food that guests can pick up while the mehndi artists are at work.' },
    { title: 'Haldi Ceremony', desc: 'Simple, joyful catering for the Haldi. Fruit, sweets, pakora, samosa  -  a light spread that accompanies the celebration without taking it over.' },
    { title: 'Reception and Wedding Dinner', desc: 'Large formal dinner for 50 to 200 guests. Full buffet service or plated service. Professional serving staff. Fresh bread replenished throughout the evening.' },
  ]

  const faqItems = isNl ? [
    { q: 'Welke type bruiloften cateren jullie bij Chopras?', a: 'Chopras cater voor Nikah-recepties, Walima-diners, Sangeet-avonden, Mehndi-feesten, Haldi-ceremonies en grote bruiloftsdiners. Wij cateren voor Indiase, Pakistaanse, Surinaamse en multiculturele bruiloften  -  en alles daartussenin.' },
    { q: 'Is de bruiloftscatering volledig halal?', a: 'Ja, volledig. Al het vlees is afkomstig van halal-gecertificeerde leveranciers. De gehele keuken werkt volgens halalstandaarden. Halal-naleving is niet een optie die wij aanbieden  -  het is de standaard voor alle catering bij Chopras.' },
    { q: 'Hoe groot kan de bruiloft zijn?', a: 'Chopras cater voor bruiloften van 25 tot 200 gasten. Voor onze eigen evenementenhal op Leyweg is de maximumcapaciteit 80 gasten. Voor grotere bruiloften van 80 tot 200 gasten verzorgen wij catering op externe locaties door Den Haag en omgeving.' },
    { q: 'Kunnen wij het bruiloftsmenu aanpassen?', a: 'Ja. Elk bruiloftsmenu begint met een gesprek over uw gelegenheden, gastenaantal, culturele voorkeuren en dieetvereisten. Wij stellen nooit twee identieke bruiloftsmenus samen  -  elk menu is op maat gemaakt voor de specifieke gelegenheid en gastenlijst.' },
    { q: 'Hoe ver van tevoren moeten wij boeken voor bruiloftscatering?', a: 'Voor grote bruiloften van 100+ gasten raden wij 6 tot 8 weken van tevoren boeken aan. Voor kleinere bruiloften van 25 tot 60 gasten is 3 tot 4 weken voldoende. Zaterdagdatums zijn het meest gewild en boeken het snelst vol.' },
  ] : [
    { q: 'What types of weddings do you cater at Chopras?', a: 'Chopras caters for Nikah receptions, Walima dinners, Sangeet nights, Mehndi parties, Haldi ceremonies, and full wedding dinners. We cater for Indian, Pakistani, Surinamese and multicultural weddings  -  and everything in between.' },
    { q: 'Is the wedding catering fully halal?', a: 'Yes, completely. All meat is sourced from halal-certified suppliers. The entire kitchen operates to halal standards. Halal compliance is not an option  -  it is the standard for all Chopras catering.' },
    { q: 'How large can the wedding be?', a: 'Chopras caters for weddings of 25 to 200 guests. For our own event hall at Leyweg, the maximum capacity is 80 guests. For larger weddings of 80 to 200 guests, we cater at external venues across Den Haag and surrounding areas.' },
    { q: 'Can we customise the wedding menu?', a: 'Yes. Every wedding menu starts with a conversation about your occasion, guest count, cultural preferences, and dietary requirements. We never compose two identical wedding menus  -  every menu is built for the specific occasion and guest list.' },
    { q: 'How far in advance should we book for wedding catering?', a: 'For large weddings of 100+ guests, we recommend booking 6 to 8 weeks in advance. For smaller weddings of 25 to 60 guests, 3 to 4 weeks is sufficient. Saturday dates are the most popular and book up fastest.' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={cateringServiceSchema as Record<string, unknown>} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Indiaas Bruiloft Catering' : 'Indian Wedding Catering', item: `${SITE_URL}/${locale}/indian-wedding-catering-den-haag` },
      ])} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              WEDDING CATERING
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiase Bruiloftscatering Den Haag  -  Chopras voor Uw Trouwdag' : 'Indian Wedding Catering Den Haag  -  Chopras for Your Wedding'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Halal bruiloftsmenus voor 25 tot 200 gasten. Nikah, Walima, Sangeet, Mehndi en grote diners. Den Haag, Rijswijk, Delft en omgeving.' : 'Halal wedding menus for 25 to 200 guests. Nikah, Walima, Sangeet, Mehndi and full dinners. Den Haag, Rijswijk, Delft and surrounding areas.'}
          </p>
          <Link href={`${base}/catering#catering-form`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
            {isNl ? 'Bruiloftsofferte Aanvragen' : 'Get a Wedding Quote'}
          </Link>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indiase Bruiloftscatering die de Gelegenheid Begrijpt' : 'Indian Wedding Catering That Understands the Occasion'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Een bruiloft is niet zomaar een evenement dat gecaterd moet worden. Het is een van de belangrijkste dagen in het leven van een familie, en het eten moet daartoe recht doen. Chopras cater voor bruiloften met dit als uitgangspunt  -  niet als een generalist cateraar met een Indiaas menu, maar als een Indiaas restaurant dat dit eten kent, deze gelegenheden kent en begrijpt wat ze betekenen.</p>
                <p>Wij kennen het verschil tussen een Nikah-receptie en een Walima-diner  -  en wat elk op tafel vraagt. De biryani bij een Walima heeft een ander karakter dan de biryani bij een informele verjaardag. Het eten bij een Sangeet moet licht genoeg zijn zodat gasten kunnen eten terwijl ze bewegen en dansen. Het Mehndi-feest vraagt om <Link href={`${base}/chaat-den-haag`} className="text-[#D4AF37] hover:underline">chaat</Link> en zoetjes die gasten met één hand kunnen pakken. Wij weten dit allemaal omdat wij dit allemaal hebben gedaan.</p>
                <p>Al het vlees  -  bij elk evenement, bij elk gastenaantal, altijd  -  is afkomstig van <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-gecertificeerde leveranciers</Link>. Dit is geen upgrade of premium optie. Het is gewoon hoe wij werken.</p>
              </>
            ) : (
              <>
                <p>A wedding is not just an event to be catered. It is one of the most important days in a family&apos;s life, and the food has to do justice to that. Chopras caters for weddings with this as the starting point  -  not as a generalist caterer with an Indian menu, but as an Indian restaurant that knows this food, these occasions and what each one means.</p>
                <p>We know the difference between a Nikah reception and a Walima dinner  -  and what each one calls for on the table. The biryani at a Walima has a different character from the biryani at a casual birthday. The food at a Sangeet needs to be light enough that guests can eat while they move and dance. The Mehndi party calls for <Link href={`${base}/chaat-den-haag`} className="text-[#D4AF37] hover:underline">chaat</Link> and sweet things guests can pick up with one hand. We know all of this because we have done all of this.</p>
                <p>All meat  -  at every event, at every guest count, always  -  is sourced from <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-certified suppliers</Link>. This is not an upgrade or a premium add-on. It is simply how we work.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Bruiloftsgelegenheden die Wij Cateren' : 'Wedding Occasions We Cater'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weddingOccasions.map((occasion) => (
              <div key={occasion.title} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{occasion.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{occasion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="border-l-4 border-[#D4AF37] bg-white/10 rounded-r-xl">
                <summary className="px-6 py-4 cursor-pointer text-white font-bold text-lg list-none">{q}</summary>
                <p className="px-6 pb-5 pt-2 text-white/80 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-6">
            {isNl ? 'Begin Uw Bruiloftsplanning bij Chopras' : 'Start Your Wedding Planning with Chopras'}
          </h2>
          <p className="text-[#1A1A1A] text-lg mb-8 max-w-2xl">
            {isNl ? 'Stuur ons uw datum, het aantal gasten en het type gelegenheid. We hebben binnen 24 uur een voorstel voor u  -  vrijblijvend, zonder druk.' : 'Send us your date, guest count, and what type of occasion you are planning. We will have a proposal back to you within 24 hours  -  no obligation, no pressure.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/catering#catering-form`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Bruiloftsofferte Aanvragen' : 'Get a Wedding Quote'}
            </Link>
            <a href={`tel:${RESTAURANT.contact.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {RESTAURANT.contact.phoneDisplay}
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
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Verjaardag' : 'Birthday'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiase verjaardagscatering' : 'Indian birthday catering'}</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bedrijfsgebeurtenis' : 'Corporate Event'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiase catering voor bedrijven' : 'Indian catering for companies'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiase Diwali-diner' : 'Indian Diwali dinner'}</p>
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Event Space'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Feestzaal huren voor bruiloft Den Haag' : 'Event space rental for weddings Den Haag'}</p>
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
