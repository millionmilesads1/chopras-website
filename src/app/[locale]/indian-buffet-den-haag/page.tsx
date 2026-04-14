import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import FaqAccordion from '@/components/sections/FaqAccordion'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Buffet in Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Buffet Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian buffet Den Haag at Chopras Indian Restaurant. Authentic curries, tandoori and biryani for groups. Halal certified. Request a catering quote today at Leyweg 986.',
    nl: 'Boek een Indiaas buffet in Den Haag bij Chopras voor uw evenement. Verse curry, tandoori, biryani en street food voor groepen van 25 tot 200 personen. Halal gecertificeerd.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-buffet-den-haag'),
      languages: { en: getLocalizedUrl('en', 'indian-buffet-den-haag'), nl: getLocalizedUrl('nl', 'indian-buffet-den-haag'), 'x-default': getLocalizedUrl('en', 'indian-buffet-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-buffet-den-haag'),
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

const faqsEn: Array<{ question: string; answer: string }> = [
  { question: 'What is the minimum group size for a Chopras Indian buffet?', answer: 'The minimum group size for buffet catering is 15 people. For smaller groups we recommend booking the restaurant directly. For events at external venues, a minimum of 25 guests applies.' },
  { question: 'Can you do the buffet at our venue?', answer: 'Yes. Chopras provides full off-site catering across Den Haag, Rijswijk, Delft, Zoetermeer and surrounding areas. We bring the kitchen to you.' },
  { question: 'Is the buffet food halal?', answer: 'Yes, completely. All meat dishes served at Chopras buffet events are sourced from halal-certified suppliers. Halal compliance is the standard for every event we cater.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking 1 to 2 weeks in advance for weekend events. For large events of 100+ guests, 3 to 4 weeks ahead is recommended.' },
  { question: 'Can I customise the buffet menu?', answer: 'Yes. Every buffet booking includes a menu consultation call. You can specify dishes, dietary requirements, and any cultural preferences. The standard menu is a representative template.' },
]

const faqsNl: Array<{ question: string; answer: string }> = [
  { question: 'Wat is de minimale groepsgrootte voor een Indiaas buffet bij Chopras?', answer: 'De minimale groepsgrootte voor buffetcatering is 15 personen. Voor kleinere groepen raden wij aan direct het restaurant te boeken. Voor evenementen op externe locaties geldt een minimum van 25 gasten.' },
  { question: 'Kan het buffet ook op onze locatie worden geserveerd?', answer: 'Ja. Chopras verzorgt volledige cateringservice op locatie door heel Den Haag, Rijswijk, Delft, Zoetermeer en Voorburg. Neem contact met ons op met uw locatiegegevens en wij beoordelen de opbouwvereisten.' },
  { question: 'Is het buffeteten halal?', answer: 'Ja, volledig. Alle vleesgerechten bij Chopras-buffetevenementen zijn afkomstig van halal-gecertificeerde leveranciers. Halal-naleving is geen extra optie - het is de standaard voor elk evenement dat wij cateren.' },
  { question: 'Hoe ver van tevoren moet ik boeken?', answer: 'Wij raden aan 1 a 2 weken van tevoren te boeken voor weekevenementen. Weekboekingen zijn vaak met minder opzegtermijn mogelijk. Voor grote evenementen van 100+ gasten is 3 a 4 weken van tevoren aanbevolen.' },
  { question: 'Kan ik het buffetmenu aanpassen?', answer: 'Ja. Elke buffetboeking omvat een menuoverlegesprek met ons team. U kunt de gerechten, dieetvereisten en eventuele culturele wensen opgeven. Het standaardmenu op deze pagina is een representatief sjabloon.' },
]

export default function IndianBuffetPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const restaurantSchema = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: RESTAURANT.name,
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, postalCode: RESTAURANT.address.postcode, addressLocality: RESTAURANT.address.city, addressCountry: RESTAURANT.address.countryCode },
    telephone: RESTAURANT.contact.phone, url: RESTAURANT.contact.website, servesCuisine: ['North Indian', 'Indian Street Food'], priceRange: RESTAURANT.priceRange,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '834', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const cateringSchema = {
    '@context': 'https://schema.org', '@type': 'CateringService',
    name: isNl ? 'Chopras Indiaas Restaurant  -  Buffet Catering' : 'Chopras Indian Restaurant  -  Buffet Catering',
    provider: { '@type': 'Restaurant', name: RESTAURANT.name, telephone: RESTAURANT.contact.phone, address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, postalCode: RESTAURANT.address.postcode, addressLocality: RESTAURANT.address.city, addressCountry: RESTAURANT.address.countryCode } },
    areaServed: RESTAURANT.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
  }

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={cateringSchema as Record<string, unknown>} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Buffet' : 'Indian Buffet', item: getLocalizedUrl(locale, 'indian-buffet-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiaas Buffet in Den Haag  -  Een Spread Die Iedereen Bedient' : 'Indian Buffet in Den Haag  -  A Spread That Feeds Everyone and Forgets Nobody'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Vanaf 15 gasten tot 200. Verse curry, biryani, tandoori en street food. Halal gecertificeerd. Leyweg 986 en locaties door Den Haag.' : 'From 15 guests to 200. Fresh curries, biryani, tandoori and street food. Halal certified. Leyweg 986 and venues across Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Indiase Keuken Perfect Is voor een Buffet' : 'Why Indian Cuisine is Perfect for Buffet'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Indiaas eten is de meest praktische keuze voor een buffet met een grote groep  -  en de redenen zijn structureel, niet alleen een kwestie van smaak. Een standaard Indiaas buffet dekt tegelijkertijd halal-, vegetarische, veganistische en glutenvrije vereisten zonder speciale aanpassing. Dal, chana masala, groente biryani, palak paneer  -  dit zijn geen concessies of alternatieven. Dit is het echte eten dat iedereen aan tafel eet.</p>
                <p>Indiase eetcultuur ontwikkelde zich over millennia in een context van extreme dieetdiversiteit  -  religieuze beperkingen, regionale landbouwverschillen, seizoensgebonden beschikbaarheid. De keuken ontwikkelde zich om enorme aantallen mensen met radicaal verschillende vereisten te voeden vanuit één set gerechten. Een buffet is de natuurlijke uitbreiding van deze traditie.</p>
                <p>Dan is er de visuele dimensie. De kleuren van Indiase keuken op een buffettafel zijn werkelijk prachtig  -  kurkumageel dal, diep baksteenrood butter chicken, levendig groen palak paneer, karamelbruin biryani bezaaid met saffraan. De tafel zelf wordt een middelpunt.</p>
                <p>Indiase gerechten houden ook uitzonderlijk goed bij een buffet. Curry&apos;s gaan niet achteruit onder warmhoudlampen zoals geroosterd vlees of gefrituurd eten. Ze blijven uitstekend gedurende langere serviceperioden.</p>
              </>
            ) : (
              <>
                <p>Indian food is the most practical choice for a large group buffet  -  and the reasons are structural, not just preference. A standard Indian buffet naturally and simultaneously covers halal, vegetarian, vegan and gluten-free requirements without any special accommodation. Dal, chana masala, vegetable biryani, palak paneer  -  these are not concessions or alternatives. They are the actual food that everyone at the table eats.</p>
                <p>Indian food culture evolved over millennia in a context of extreme dietary diversity  -  religious restrictions, regional agricultural differences, seasonal availability. The cuisine developed to feed enormous numbers of people with radically different requirements from a single set of dishes. A buffet is the natural extension of this tradition.</p>
                <p>Then there is the visual dimension. The colours of Indian cuisine on a buffet table are genuinely stunning  -  turmeric-yellow dal, deep brick-red butter chicken, vibrant green palak paneer, caramel-brown biryani flecked with saffron. The table itself becomes a centrepiece.</p>
                <p>Indian food also holds exceptionally well on a buffet. Curries do not degrade under heat lamps the way roasted meats or fried foods do. They remain excellent for extended service periods.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-4">
            {isNl ? 'Wat Is Inbegrepen bij een Chopras Indiaas Buffet' : 'What Is Included in a Chopras Indian Buffet'}
          </h2>
          <p className="text-[#1A1A1A] mb-10 text-lg">
            {isNl ? 'Onderstaande spread is representatief. Elk buffet wordt afgestemd op uw evenement tijdens een menuoverleg.' : 'The following is a representative spread. Every buffet is tailored to your event during a menu consultation.'}
          </p>
          <div className="space-y-6">
            {[
              {
                title: isNl ? 'Chaat en Starters Station' : 'Chaat and Starters Station',
                desc: isNl ? 'Pani puri met zowel muntwater als tamarindwater, samosa met verse groene chutney, papdi chaat, uienbhaji en masalapapad. Het starters station doet het sociale werk van het doorbreken van het ijs bij aanvang van de service.' : 'Pani puri with mint and tamarind water, samosa with fresh green chutney, papdi chaat, onion bhaji, and masala papad. The starters station does the social work of breaking the ice at the start of service.',
              },
              {
                title: isNl ? 'Curryselectie  -  4 tot 6 Curry\'s' : 'Curry Selection  -  4 to 6 Curries',
                desc: isNl ? 'Butter chicken (universele publiekslievelingen), dal makhani (waar vegetariërs en vleesliefhebbers beiden meerdere keren op terugkomen), paneer gerecht, veganistische optie (chana masala of aloo curry) en lamsvlees voor groepen van 50+.' : 'Butter chicken (the universal crowd-pleaser), dal makhani (that vegetarians and meat-eaters both return to multiple times), a paneer dish, a vegan option (chana masala or aloo curry), and a lamb dish for groups of 50+.',
              },
              {
                title: 'Biryani',
                desc: isNl ? 'Zowel groente biryani als kip biryani geserveerd als centrepieces vanuit grote potten, met raita erbij. De geur als de deksels eraf gaan bepaalt de toon voor de hele avond.' : 'Both veg biryani and chicken biryani served as centrepiece dishes from large pots, with raita alongside. The fragrance when the lids come off sets the tone for the entire evening.',
              },
              {
                title: isNl ? 'Brood' : 'Breads',
                desc: isNl ? 'Knoflooknaan, plain naan en roti  -  vers gebakken in batches gedurende de gehele service en continu aangevuld zodat gasten altijd warm brood hebben.' : 'Garlic naan, plain naan, and roti  -  baked fresh in batches throughout service and replenished continuously so guests always have warm bread.',
              },
              {
                title: isNl ? 'Desserts' : 'Desserts',
                desc: isNl ? 'Gulab jamun in warme suikersiroop, moong dal halwa en kulfi  -  Indiaas ijs in individuele porties. Het desserstation biedt een duidelijk en bevredigend afsluiting van de maaltijd.' : 'Gulab jamun in warm sugar syrup, moong dal halwa, and kulfi  -  Indian ice cream in individual portions. A clear and satisfying close to the meal.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-2xl text-[#1B2B5E] mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-6">
            {isNl ? 'Vraag uw Indiase Buffetofferte aan' : 'Get Your Indian Buffet Quote'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8 max-w-2xl">
            {isNl ? 'Elk buffet begint met een gesprek. Vertel ons uw datum, uw gastenlijst en eventuele dieetvereisten  -  wij stellen een voorstel op dat is afgestemd op uw evenement.' : 'Every buffet starts with a conversation. Tell us your date, your guest count, and any dietary requirements  -  we will put together a proposal tailored to your event.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/catering#catering-form`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Offerte Aanvragen' : 'Get a Buffet Quote'}
            </Link>
            <a href={`tel:${RESTAURANT.contact.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {RESTAURANT.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Meer van Onze Gerechten' : 'Explore More of Our Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Slow-cooked butter chicken in Den Haag' : 'Slow-cooked butter chicken in Den Haag'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Gemaakte linzenmix, roomsaus, garlic naan' : 'Slow-cooked lentils in cream sauce'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst-gerecht in Den Haag' : 'Fragrant rice dish in Den Haag'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas buffetcatering voor evenementen' : 'Indian catering for your events'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk ons' : 'View our'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.common.viewMenu}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering voor je buffet' : 'request a buffet quote at Chopras'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
