import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Food in the Netherlands | Chopras Indian Restaurant',
    nl: 'Indiaas Eten in Nederland | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Everything you need to know about Indian food in the Netherlands. The best cities, what to order, halal options, vegetarian cuisine. Chopras in Den Haag is your starting point.',
    nl: 'Alles wat u moet weten over Indiaas eten in Nederland. De beste steden, wat te bestellen, halal opties, vegetarische keuken. Chopras in Den Haag is uw startpunt.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-food-netherlands'),
      languages: { en: getLocalizedUrl('en', 'indian-food-netherlands'), nl: getLocalizedUrl('nl', 'indian-food-netherlands'), 'x-default': getLocalizedUrl('en', 'indian-food-netherlands') },
    },
  }
}

export default function IndianFoodNetherlandsPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: isNl ? 'Indiaas Eten in Nederland  -  Een Complete Gids' : 'Indian Food in the Netherlands  -  A Complete Guide',
    author: { '@type': 'Organization', name: RESTAURANT.name, url: RESTAURANT.contact.website },
    publisher: { '@type': 'Organization', name: RESTAURANT.name, url: RESTAURANT.contact.website },
    about: { '@type': 'Thing', name: isNl ? 'Indiaas Eten in Nederland' : 'Indian Food in the Netherlands' },
    url: getLocalizedUrl(locale, 'indian-food-netherlands'),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '834', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const topics = isNl ? [
    {
      h2: 'De Geschiedenis van Indiaas Eten in Nederland',
      body: [
        'De aanwezigheid van Indiaas eten in Nederland heeft een specifieke historische oorsprong: de Hindoestaanse gemeenschap. Hindoestanen zijn nakomelingen van Indiase contractarbeiders die in de 19e eeuw naar Suriname werden gebracht door de Nederlanders na de afschaffing van de slavernij. Na de Surinaamse onafhankelijkheid in 1975 vestigden honderdduizenden Surinamers zich in Nederland, waaronder een grote Hindoestaanse gemeenschap die hun eigen culinaire tradities meebrachten.',
        'Dit is de reden waarom Indiaas eten in Nederland anders smaakt dan in de meeste West-Europese landen  -  het werd niet geïntroduceerd door Britse curry houses of directe immigratie uit India, maar via Suriname. De Hindoestaanse keuken is een unieke fusie van Indiase stijl (met name uit het Bhojpuri-sprekende gebied van Noord-India) en Surinaamse invloeden, met zijn eigen authentieke identiteit.',
        'Den Haag heeft de grootste Hindoestaanse bevolking van Nederland, waardoor het de meest authentieke stadsbasis voor Indiaas eten in het land is. De Indiase restaurants in Den Haag zijn niet bedoeld voor toeristisch publiek of voor mensen die "iets anders" willen  -  ze zijn bedoeld voor gemeenschappen die opgroeiden met het eten en voor wie kwaliteit een persoonlijk belang is.',
      ],
    },
    {
      h2: 'Indiaas Eten in de Verschillende Nederlandse Steden',
      body: [
        'Amsterdam heeft de meeste Indiase restaurants op basis van absoluut aantal, maar de kwaliteit is ongelijkmatig. Het concentratie van toeristen in Amsterdam leidt tot restaurants die de breedte van de markt bedienen  -  meer op toegankelijkheid dan authenticiteit gericht. Er zijn uitzonderingen, maar ze vereisen het weten waar te zoeken.',
        'Rotterdam heeft een substantiële Indiase en Surinaamse-Hindoestaanse gemeenschap en een aantal uitstekende opties, met name in de Kruiskade- en Alexandergebieden. De restaurantscène in Rotterdam is over het algemeen meer gemeenschapsgericht dan die van Amsterdam.',
        'Den Haag is argumenteerbaar de beste stad voor Indiaas eten in Nederland, en dit is niet willekeurig. De stad heeft de grootste Hindoestaanse gemeenschap in het land. De Indiase restaurants in Den Haag moeten voldoen aan de normen van mensen voor wie dit geen exotische uitje is, maar familiaire eetgerechten. Chopras op Leyweg richt zich specifiek op dit publiek.',
      ],
    },
    {
      h2: 'Wat U Moet Bestellen als U Nieuw Bent in Indiaas Eten',
      body: [
        'Voor mensen die voor het eerst Indiaas eten proberen: begin met butter chicken (murgh makhani) en garlic naan. Butter chicken is mild van hitte, rijk en romig, en onmiddellijk begrijpelijk voor iedereen die tomaten-romige sauzen kent. Garlic naan is het perfecte voertuig  -  zacht, aromatisch en in de meeste restaurants vers gebakken in een tandoor.',
        'Dal makhani is het tweede aanbeveelde gerecht voor beginners  -  langzaam gegaard zwart linzenmeal dat rijk en bevredigend is zonder overweldigend pittig te zijn. Het is het gerecht dat vegetariërs het meest verplicht terug doet komen naar een Indiaas restaurant.',
        'Voor meer gevorderde eters: rogan josh (gekruid lamsvlees), seekh kebab (gekruid gemalen lamsvlees op spiesjes van de tandoor) en biryani zijn de gerechten die onderscheid maken tussen restaurants die het goed doen en restaurants die het goed doen. Biryani met name  -  het is een complexe bereiding die goedkope snelkopieën blootlegt.',
      ],
    },
    {
      h2: 'Halal Indiaas Eten in Nederland',
      body: [
        'Halal Indiaas eten in Nederland is beschikbaar, maar de kwaliteit van de halalcertificering varieert aanzienlijk. Sommige restaurants bieden "halal-opties" aan naast niet-halal producten  -  wat voor streng-halal-nalevers onvoldoende is. Anderen hebben een volledig gecertificeerde halal-keuken waarbij alle vlees van gecertificeerde leveranciers afkomstig is.',
        'Chopras in Den Haag behoort tot de tweede categorie. De gehele keuken werkt volgens halalstandaarden. Alle vlees is van gecertificeerde halal-leveranciers. Er is geen niet-halal vlees op de locatie. Dit is de standaard voor elk gerecht dat we bereiden  -  niet een optie die we aanbieden of een speciale toeslag.',
        'Voor de Marokkaanse, Pakistaanse, Turkse en Indiase moslimgemeenschappen in Den Haag en omgeving is dit het onderscheidende kenmerk dat bepaalt waar zij gaan eten. Een restaurant dat "ook halal" aanbiedt is fundamenteel anders dan een restaurant dat volledig halal is.',
      ],
    },
  ] : [
    {
      h2: 'The History of Indian Food in the Netherlands',
      body: [
        'The presence of Indian food in the Netherlands has a specific historical origin: the Hindustani community. Hindustanis are descendants of Indian indentured labourers brought to Suriname in the 19th century by the Dutch following the abolition of slavery. After Surinamese independence in 1975, hundreds of thousands of Surinamese people settled in the Netherlands, including a large Hindustani community who brought their culinary traditions with them.',
        'This is why Indian food in the Netherlands tastes different from most Western European countries  -  it was not introduced through British curry houses or direct immigration from India, but through Suriname. Hindustani cuisine is a unique fusion of Indian style (particularly from the Bhojpuri-speaking area of North India) and Surinamese influences, with its own authentic identity.',
        'Den Haag has the largest Hindustani population in the Netherlands, making it the most authentic urban base for Indian food in the country. The Indian restaurants in Den Haag are not designed for a tourist audience or for people wanting "something different"  -  they are designed for communities who grew up with the food and for whom quality is a personal matter.',
      ],
    },
    {
      h2: 'Indian Food Across the Dutch Cities',
      body: [
        'Amsterdam has the most Indian restaurants by absolute number, but the quality is uneven. The concentration of tourists in Amsterdam leads to restaurants that serve the broadest possible market  -  more accessible than authentic. There are exceptions, but they require knowing where to look.',
        'Rotterdam has a substantial Indian and Surinamese-Hindustani community and several excellent options, particularly in the Kruiskade and Alexander areas. The restaurant scene in Rotterdam is generally more community-oriented than Amsterdam\'s.',
        'Den Haag is arguably the best city for Indian food in the Netherlands, and this is not arbitrary. The city has the largest Hindustani community in the country. The Indian restaurants in Den Haag must meet the standards of people for whom this is not an exotic outing, but familiar home food. Chopras on Leyweg is aimed specifically at this audience.',
      ],
    },
    {
      h2: 'What to Order If You Are New to Indian Food',
      body: [
        'For first-time Indian food eaters: start with butter chicken (murgh makhani) and garlic naan. Butter chicken is mild in heat, rich and creamy, and immediately understandable to anyone familiar with tomato-cream sauces. Garlic naan is the perfect vehicle  -  soft, aromatic, and in most good restaurants baked fresh in a tandoor.',
        'Dal makhani is the second recommended dish for beginners  -  slow-cooked black lentil dal that is rich and satisfying without being overwhelmingly spicy. It is the dish that most reliably converts vegetarians into returning Indian restaurant customers.',
        'For more experienced eaters: rogan josh (spiced lamb), seekh kebab (spiced minced lamb on skewers from the tandoor), and biryani are the dishes that separate restaurants doing it well from restaurants doing it cheaply. Biryani in particular  -  it is a complex preparation that exposes cheap shortcuts immediately.',
      ],
    },
    {
      h2: 'Halal Indian Food in the Netherlands',
      body: [
        'Halal Indian food in the Netherlands is available, but the quality of halal certification varies significantly. Some restaurants offer "halal options" alongside non-halal products  -  which is insufficient for strictly halal-observant guests. Others have a fully certified halal kitchen where all meat is sourced from certified suppliers.',
        'Chopras in Den Haag falls into the second category. The entire kitchen operates to halal standards. All meat is from certified halal suppliers. There is no non-halal meat on the premises. This is the standard for every dish we prepare  -  not an option we offer or a special surcharge.',
        'For the Moroccan, Pakistani, Turkish and Indian Muslim communities in Den Haag and surrounding areas, this is the distinguishing factor that determines where they eat. A restaurant that "also offers halal" is fundamentally different from a restaurant that is fully halal.',
      ],
    },
  ]

  return (
    <>
      <JsonLd data={articleSchema as Record<string, unknown>} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Eten Nederland' : 'Indian Food Netherlands', item: getLocalizedUrl(locale, 'indian-food-netherlands') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • DISCOVER · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Indiaas Eten in Nederland  -  De Complete Gids' : 'Indian Food in the Netherlands  -  The Complete Guide'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Geschiedenis, steden, gerechten, halal opties en waar u de beste Indiase keuken in Nederland vindt. Chopras in Den Haag is uw startpunt.' : 'History, cities, dishes, halal options, and where to find the best Indian cuisine in the Netherlands. Chopras in Den Haag is your starting point.'}
          </p>
        </div>
      </section>

      {topics.map((topic) => (
        <section key={topic.h2} className="bg-[#FFFAF5] odd:bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">{topic.h2}</h2>
            <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
              {topic.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
            {isNl ? 'Chopras in Den Haag  -  Het Startpunt voor Indiaas Eten' : 'Chopras in Den Haag  -  The Starting Point for Indian Food'}
          </h2>
          <div className="prose prose-lg max-w-none text-white/80 space-y-5">
            {isNl ? (
              <>
                <p>Chopras op Leyweg 986 in Den Haag bedient de gemeenschap waarvoor Indiaas eten geen exotische uitje is  -  het is familiaire keuken. De gerechten worden bereid met verse kruiden die dagelijks worden gemalen, vlees van gecertificeerde halal-leveranciers en bereidingstechnieken die generaties lang zijn doorgegeven.</p>
                <p>Het restaurant is open dinsdag tot en met zondag van 16:30 tot 22:30. Maandag is gesloten. Bezorging is beschikbaar via Thuisbezorgd en Uber Eats.</p>
              </>
            ) : (
              <>
                <p>Chopras at Leyweg 986 in Den Haag serves the community for whom Indian food is not an exotic outing  -  it is familiar home cooking. The dishes are prepared with fresh spices ground daily, meat from certified halal suppliers, and preparation techniques passed down through generations.</p>
                <p>The restaurant is open Tuesday to Sunday from 16:30 to 22:30. Closed Monday. Delivery is available via Thuisbezorgd and Uber Eats.</p>
              </>
            )}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor catering en evenementen, zie ons' : 'For catering and events, see our'} <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'cateringmogelijkheden' : 'catering options'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
