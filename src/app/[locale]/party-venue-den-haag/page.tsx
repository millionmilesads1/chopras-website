import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Party Venue Den Haag | Hire Chopras Event Hall  -  Indian Theme and Catering',
    nl: 'Feestlocatie Den Haag | Huur Chopras Evenementenhal  -  Indiase Sfeer en Catering',
  }
  const descriptions = {
    en: 'Looking for a party venue in Den Haag? Hire Chopras private event hall for 25 to 80 guests. Vibrant Indian décor, full catering included, professional staff. Get a quote.',
    nl: 'Op zoek naar een feestlocatie in Den Haag? Huur de privé-evenementenhal van Chopras voor 25 tot 80 gasten. Levendige Indiase inrichting, volledige catering inbegrepen, professioneel personeel.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/party-venue-den-haag`,
      languages: { en: `${SITE_URL}/en/party-venue-den-haag`, nl: `${SITE_URL}/nl/party-venue-den-haag`, 'x-default': `${SITE_URL}/en/party-venue-den-haag` },
    },
  }
}

export default function PartyVenuePage({ params }: Props) {
  const { locale } = params
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const eventVenueSchema = {
    '@context': 'https://schema.org', '@type': 'EventVenue',
    name: isNl ? 'Chopras Privé-Evenementenhal' : 'Chopras Private Event Hall',
    address: { '@type': 'PostalAddress', streetAddress: RESTAURANT.address.street, addressLocality: RESTAURANT.address.city, postalCode: RESTAURANT.address.postcode, addressCountry: 'NL' },
    telephone: RESTAURANT.contact.phone,
    maximumAttendeeCapacity: 80,
    url: 'https://chopras.nl/en/party-venue-den-haag',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Indian Catering Included', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'AV Equipment Welcome', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Photo Shoots Welcome', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' },
    sameAs: [
      'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
      'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
      'https://www.facebook.com/choprasrestaurant',
      'https://www.instagram.com/choprasrestaurant',
      'https://www.youtube.com/@choprasrestaurant',
    ],
  }

  const venueFeatures = isNl ? [
    { title: 'Locatie', desc: 'Leyweg 986, 2545 GW Den Haag  -  goed bereikbaar per tram (lijn 4 en 9), bus en auto. Het winkelgebied Leyweg is een bekend punt.' },
    { title: 'Capaciteit', desc: '25 tot 80 gasten afhankelijk van de opstellingsvorm  -  zittend diner, staande receptie of gecombineerd formaat.' },
    { title: 'Inrichting', desc: 'Levendig Indiaas thema  -  origineel kunstwerk, warm amber licht, rijkgekleurde textiel die een onderscheidende sfeer creëert.' },
    { title: 'AV-Opstelling', desc: 'Breng uw eigen projector, luidsprekers en laptopapparatuur mee. De zaal heeft stroomaansluiting en voldoende ruimte voor een volledige AV-opstelling.' },
    { title: 'Catering', desc: 'Volledige Indiase catering standaard inbegrepen bij elke evenementenboeking  -  buffet of bediening op bord, uw keuze.' },
    { title: 'Professioneel Personeel', desc: 'Een team van bedienden voor de volledige duur van uw evenement  -  van opbouw tot de laatste gast vertrekt.' },
    { title: 'Opbouw en Afbouw', desc: 'Volledig beheerd door Chopras. U arriveert in een zaal die klaar is voor uw gasten. U vertrekt en wij regelen de rest.' },
    { title: 'Gratis Parkeren', desc: 'Het winkelgebied Leyweg biedt gratis parkeren voor gasten die met de auto komen  -  een groot voordeel boven locaties in het centrum van Den Haag.' },
  ] : [
    { title: 'Location', desc: 'Leyweg 986, 2545 GW Den Haag  -  easily reached by tram (line 4 and 9), bus, and car. The Leyweg shopping area is a landmark guests know.' },
    { title: 'Capacity', desc: '25 to 80 guests depending on layout  -  seated dinner, standing reception, or mixed format.' },
    { title: 'Décor', desc: 'Vibrant Indian theme  -  original artwork, warm amber lighting, richly coloured textiles that create a distinctive atmosphere and a beautiful backdrop for event photography.' },
    { title: 'AV Setup', desc: 'Bring your own projector, speakers, and laptop. The hall has power access and enough space for a full AV setup.' },
    { title: 'Catering', desc: 'Full Indian catering included as standard with every event hire  -  buffet or plated service, your choice, built around your event and guest list.' },
    { title: 'Professional Staff', desc: 'A team of servers for the full duration of your event  -  setup through to the last guest leaving.' },
    { title: 'Setup and Breakdown', desc: 'Fully managed by Chopras. You arrive to a room ready for your guests. You leave and we handle everything after.' },
    { title: 'Free Parking', desc: 'The Leyweg shopping area offers free parking for guests arriving by car  -  a significant advantage over central Den Haag venues.' },
  ]

  const eventTypes = isNl ? [
    { title: 'Verjaardagsfeesten', desc: 'Of u nu een 30e, 50e of het eerste verjaardag van een kind viert  -  de zaal creëert een warme, onderscheidende sfeer die verjaardagen werkelijk memorabel maakt.' },
    { title: 'Bruiloftsrecepties', desc: 'Nikah-recepties, diners na de ceremonie, bruiloftsbrunches, Sangeet-avonden. De levendige inrichting past prachtig bij elk onderdeel van Indiase, Pakistaanse en multiculturele bruiloften.' },
    { title: 'Verlovingsfeesten', desc: 'De formele aankondiging verdient een passende omgeving. Een verlovingsfeest bij Chopras heeft het eten, de sfeer en de intimiteit die hotels en generieke locaties niet kunnen bieden.' },
    { title: 'Babyshowers', desc: 'Een groeiende gelegenheid in Den Haag\'s Zuid-Aziatische gemeenschap. Een babyshower in een Indiase omgeving met prachtig eten voelt echt speciaal.' },
    { title: 'Bedrijfsdiners', desc: 'Klantentertainment, teamvieringen, eindejaarsdiners. Indiaas eten creëert gesprekken. Generiek hoteleten niet.' },
    { title: 'Diwali en Festiviteiten', desc: 'Diwali-diners, Holi-feesten, Eid-vieringen, Baisakhi-bijeenkomsten  -  Chopras begrijpt de culturele betekenis van deze gelegenheden.' },
    { title: 'Gemeenschapsbijeenkomsten', desc: 'Diners van religieuze organisaties, goede doelen, culturele verenigingen. De zaal verwelkomt groepen van alle soorten.' },
    { title: 'Productlanceringen en Netwerken', desc: 'Maak uw lancering of netwerkevenement memorabel met een Indiaas canapé-assortiment of een street food station.' },
  ] : [
    { title: 'Birthday Parties', desc: 'Whether you are celebrating a 30th, 50th, or a child\'s first  -  the hall creates a warm, distinctive atmosphere that makes birthdays genuinely memorable.' },
    { title: 'Wedding Receptions', desc: 'Nikah receptions, after-ceremony dinners, wedding brunches, Sangeet nights. The vibrant décor works beautifully for every stage of Indian, Pakistani and multicultural weddings.' },
    { title: 'Engagement Parties', desc: 'The formal announcement deserves a proper setting. An engagement party at Chopras has the food, the atmosphere, and the intimacy that hotels and generic venues cannot offer.' },
    { title: 'Baby Showers', desc: 'A growing occasion in Den Haag\'s South Asian community. A baby shower in an Indian setting with beautiful food feels genuinely special.' },
    { title: 'Corporate Dinners', desc: 'Client entertainment, team celebrations, year-end dinners. Indian food creates conversations. Generic hotel food does not.' },
    { title: 'Diwali and Festival Celebrations', desc: 'Diwali dinners, Holi parties, Eid celebrations, Baisakhi gatherings  -  Chopras understands the cultural significance of these occasions.' },
    { title: 'Community Gatherings', desc: 'Religious organisation dinners, charity fundraisers, cultural association events. The hall accommodates groups of all kinds.' },
    { title: 'Product Launches and Networking', desc: 'Make your launch or networking event memorable with a street food station or a cocktail-style Indian canape spread.' },
  ]

  const faqItems = isNl ? [
    { q: 'Wat is de capaciteit van de feestlocatie bij Chopras?', a: 'De privé-evenementenhal bij Chopras biedt ruimte aan 25 tot 80 gasten afhankelijk van de opstelling. Een zittend diner aan ronde tafels werkt het best voor tot 60 gasten. Een staande receptie of cocktailformaat bereikt comfortabel 80.' },
    { q: 'Is catering inbegrepen bij de zaalhuur?', a: 'Ja. Catering is standaard inbegrepen bij elke evenementenboeking bij Chopras  -  het is geen aparte kostenpost. U kiest het menuformaat (buffet of bediening op bord) en wij stellen het menu samen rondom uw evenement en gastenlijst.' },
    { q: 'Mogen wij onze eigen taart en decoraties meebrengen?', a: 'Ja  -  u bent van harte welkom om uw eigen taart, bloemen, ballonnen en persoonlijke accenten mee te brengen. Laat ons van tevoren weten als u iets meebrengt dat koeling of speciale behandeling vereist.' },
    { q: 'Hoe ver van tevoren moeten wij boeken?', a: 'Wij raden aan minimaal 2 weken van tevoren te boeken voor weekdagevenementen en 3 à 4 weken voor weekenddatums. Zaterdagavonden zijn snel vol. Voor grote evenementen van 60+ gasten is 4 à 6 weken van tevoren raadzaam.' },
    { q: 'Is de feestlocatie rolstoeltoegankelijk?', a: 'Het hoofdrestaurant op Leyweg 986 is volledig rolstoeltoegankelijk. De evenementenhal bevindt zich op de bovenverdieping en is momenteel niet rolstoeltoegankelijk. Als toegankelijkheid essentieel is voor uw evenement, neem dan contact met ons op voordat u boekt.' },
  ] : [
    { q: 'What is the capacity of the party venue at Chopras?', a: 'The private event hall at Chopras accommodates between 25 and 80 guests depending on the layout. A seated dinner at round tables works best for up to 60 guests. A standing reception comfortably reaches 80.' },
    { q: 'Is catering included in the venue hire?', a: 'Yes. Catering is included as standard with every event hire at Chopras  -  it is not a separate cost. You choose the menu format and we build the menu around your event and guest list.' },
    { q: 'Can we bring our own cake and decorations?', a: 'Yes  -  you are welcome to bring your own cake, flowers, balloons, and table decorations. Please let us know in advance if you are bringing anything that requires refrigeration or special handling.' },
    { q: 'How far in advance should we book?', a: 'We recommend booking at least 2 weeks in advance for weekday events and 3 to 4 weeks for weekend dates. Saturday evenings book up quickly. For large events of 60+ guests, 4 to 6 weeks ahead is advisable.' },
    { q: 'Is the party venue wheelchair accessible?', a: 'The main restaurant at Leyweg 986 is fully wheelchair accessible. The private event hall is located upstairs and is not currently wheelchair accessible. If accessibility is essential for your event, please contact us before booking.' },
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
      <JsonLd data={eventVenueSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              PARTY VENUE DEN HAAG
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-6xl text-white leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Feestlocatie in Den Haag  -  Huur een Evenementenruimte met Ziel' : 'Party Venue in Den Haag  -  Hire an Event Space That Actually Has Soul'}
          </h1>
          <p className="text-xl text-white/75 mt-6 leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Privé-evenementenhal voor 25 tot 80 gasten. Levendige Indiase inrichting. Volledige catering vanuit onze eigen keuken. Professioneel personeel. Leyweg 986, Den Haag.' : 'Private event hall for 25 to 80 guests. Vibrant Indian décor. Full catering from our own kitchen. Professional staff. Leyweg 986, Den Haag.'}
          </p>
          <Link href={`${base}/catering#catering-form`} className="inline-block mt-8 bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors">
            {isNl ? 'Offerte Aanvragen' : 'Get a Quote'}
          </Link>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Meer Dan Vier Muren en een Luidspreker' : 'More Than Four Walls and a Speaker'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>De meeste evenementenlocaties in Den Haag zijn uitwisselbaar. Neutrale muren. Generiek wit tafellinnen. Catering van een bedrijf dat gespecialiseerd is in volume boven kwaliteit. De functionele ruimte van een ketenhotel. Deze plaatsen hebben een doel  -  ze zijn beschikbaar, veilig en vergeetbaar. De foto&apos;s van de avond zien er uit als foto&apos;s van elke andere avond in elke andere neutrale ruimte.</p>
                <p>Een locatie moet karakter hebben. De privé-evenementenhal van Chopras is ingericht met levendige Indiase decoraties die elk evenement onderscheidend maken  -  met de hand geselecteerd kunstwerk, warm amber licht dat elk gezicht in de zaal flattert, rijkgekleurde textiel en accessoires die een sfeer creëren die gasten opvalt als ze binnenlopen.</p>
                <p>Het eten is geen bijzaak. Wanneer u Chopras inhuurt als uw feestlocatie, komt de catering uit dezelfde keuken die het restaurant elke week bedient  -  dezelfde chefs, dezelfde kruiden die dagelijks vers worden gemalen, dezelfde recepten. Er is geen cateringpartner of externe leverancier. Wat u proeft als u ons restaurant bezoekt, is wat uw gasten eten op uw evenement.</p>
              </>
            ) : (
              <>
                <p>Most event halls in Den Haag are interchangeable. Neutral walls. Generic cream tablecloths. Catering from a box company that specialises in volume over quality. The function room at a chain hotel. These places serve a purpose  -  they are available, they are safe, and they are forgettable.</p>
                <p>A venue should have character. Chopras&apos; private event hall is set in vibrant Indian décor that makes every event distinctive  -  hand-picked artwork, warm amber lighting that flatters every face in the room, richly coloured textiles that create an atmosphere guests actually notice when they walk in.</p>
                <p>The food is not an afterthought. When you hire Chopras as your party venue, the catering comes from the same kitchen that serves the restaurant every week  -  the same chefs, the same spices ground fresh daily, the same recipes. There is no catering partner or third-party supplier. What you taste when you visit our restaurant is what your guests eat at your event.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'De Chopras Evenementenhal  -  Wat U Krijgt' : 'The Chopras Event Hall  -  What You Get'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {venueFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-bold text-[#1B2B5E]">{feature.title}:</span>{' '}
                  <span className="text-gray-700 leading-relaxed">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Soorten Evenementen die Wij Organiseren' : 'Types of Events We Host'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
                <h3 className="font-heading font-bold text-[#1B2B5E] text-base mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
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

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-6">
            {isNl ? 'Boek Uw Feestlocatie in Den Haag' : 'Book Your Party Venue in Den Haag'}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
            {isNl ? 'Klaar om te boeken? Stuur ons uw datum en het aantal gasten  -  wij bevestigen de beschikbaarheid en hebben binnen 24 uur een volledige offerte voor u.' : 'Ready to book? Send us your date and guest count  -  we will confirm availability and have a full quote back to you within 24 hours.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${base}/catering#catering-form`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors">
              {isNl ? 'Offerte Aanvragen' : 'Get a Quote'}
            </Link>
            <a href={`tel:${RESTAURANT.contact.phone}`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors">
              {isNl ? 'Bel Ons Nu' : 'Call Us Now'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
