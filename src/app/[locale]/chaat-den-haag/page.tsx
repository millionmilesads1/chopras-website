import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import FaqAccordion from '@/components/sections/FaqAccordion'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

const faqsNl: Array<{ question: string; answer: string }> = [
  {
    question: 'Is chaat gezond?',
    answer: 'Chaat bevat veel groenten, kikkererwten, en kruiden. Het is voedzaam. Ja, het wordt gebakken, dus het is niet calorie-arm. Maar het is echte voedsel met echte ingrediënten. Het is een snack, niet een maaltijd. Dit is hoe het in India gegeten wordt.',
  },
  {
    question: 'Kan ik chaat mee naar huis nemen?',
    answer: 'Chaat smaakt het beste vers. We raden aan het op te eten wanneer je het krijgt. Als je het mee moet nemen, wil het geen garantie dat het hetzelfde smaak zal zijn. Maar je kunt het altijd proberen.',
  },
  {
    question: 'Is chaat vegetarisch?',
    answer: 'Ja, alle chaat die we serveren zijn vegetarisch. Ze bestaan uit aardappel, kikkererwten, bloem, water en kruiden. Er is geen vlees of vis.',
  },
]

const faqsEn: Array<{ question: string; answer: string }> = [
  {
    question: 'Is chaat healthy?',
    answer: 'Chaat contains many vegetables, chickpeas, and spices. It is nourishing. Yes, it is fried, so it is not low-calorie. But it is real food with real ingredients. It is a snack, not a meal. This is how it is eaten in India.',
  },
  {
    question: 'Can I take chaat home?',
    answer: 'Chaat tastes best fresh. We recommend eating it when you get it. If you must take it home, we cannot guarantee it will taste the same. But you can always try.',
  },
  {
    question: 'Is chaat vegetarian?',
    answer: 'Yes, all chaat we serve are vegetarian. They consist of potato, chickpeas, flour, water and spices. There is no meat or fish.',
  },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Chaat Den Haag | Chopras Indian Restaurant',
    nl: 'Chaat Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic chaat Den Haag at Chopras Indian Restaurant. Papdi chaat, dahi puri and aloo tikki fresh daily at Leyweg 986. Best street food in The Hague.',
    nl: 'Chaat bij Chopras Den Haag. Papdi chaat, aloo tikki, pani puri. Authentiek Mumbai straatvoedsel. Bestel online of bezoek Leyweg 986.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'chaat-den-haag'),
      languages: {
        en: getLocalizedUrl('en', 'chaat-den-haag'),
        nl: getLocalizedUrl('nl', 'chaat-den-haag'),
        'x-default': getLocalizedUrl('en', 'chaat-den-haag'),
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'chaat-den-haag'),
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

export default function ChaatPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'chaat-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Chaat Den Haag' : 'Chaat Den Haag', item: getLocalizedUrl(locale, 'chaat-den-haag') },
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
            {isNl ? 'Chaat in Den Haag - Indiaas Straatvoedsel bij Chopras' : 'Chaat in Den Haag - Indian Street Food at Chopras'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Krokant. Kruidig. Zuur. Zoet. Alles tegelijk. Indiaas snacks gemaakt vers elke dag op Leyweg 986, Den Haag.' : 'Crispy. Spiced. Sour. Sweet. Everything at once. Indian snacks made fresh every day at Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Is Chaat en Waarom Iedereen Het Eet' : 'What Is Chaat and Why Everyone Eats It'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Chaat in Den Haag is niet een enkel gerecht. Het is een hele categorie van Indiaas straatvoedsel. Papdi chaat. Aloo tikki. <Link href={`${base}/pani-puri-den-haag`} className="text-[#D4AF37] hover:underline">Pani puri</Link>. Dahi puri. Dit zijn allemaal chaat. Wat ze gemeen hebben is dat ze allemaal voedsel zijn die je eet met je handen, voedsel dat voelt, voedsel dat je tong wakker maakt. Chaat is zuur, zoet, pittig en kruidig allemaal tegelijk. Het is voedsel dat een show heeft. Het is voedsel dat je ervaart, niet alleen eet.</p>
                <p>Mumbai <Link href={`${base}/blog/indian-street-food-den-haag`} className="text-[#D4AF37] hover:underline">straatvoedsel</Link> draait allemaal om chaat. Bij elke hoek, bij elk station, bij elk tempel, staat een chaat-verkoper. Ze maken dezelfde dingen elke dag - papdi chaat, aloo tikki, pani puri - en miljoenen mensen eten het. Het is goedkoop. Het is voedzaam. Het is heerlijk. En het smaakt hetzelfde of je in Mumbai bent of in Den Haag. Chopras brengt deze authentieke chaat naar je stad.</p>
                <p>In Den Haag kun je niet zomaar chaat ergens vinden. Veel restaurants serveren currys en brood, maar chaat? Dat is anders. Chaat vereist handigheid. Het vereist verse ingrediënten elke dag. Het vereist kennis van hoe je papdi maakt, hoe je aloo tikki bakt, hoe je pani mixt zodat het niet alleen zuur is maar ook voelt voelen. Dit zijn dingen die je alleen leert als je opgroeit in een plaats waar chaat normaal is. Chopras is bereid deze vaardigheden met je te delen.</p>
                <p>Indiaas snacks in Den Haag zijn een snel groeiende trend, en met reden. Chaat is verslavend voedsel. Het is voedsel dat je meer wilt. Het is voedsel dat je vrienden wilt delen. Het is voedsel dat je laat voelen als je in India bent, ook al ben je in Nederland. En het is betaalbaar. Dit is waarom chaat Den Haag belangrijk is voor ons. Dit is waarom we het goed maken.</p>
              </>
            ) : (
              <>
                <p>Chaat in Den Haag is not a single dish. It is a whole category of Indian street food. Papdi chaat. Aloo tikki. <Link href={`${base}/pani-puri-den-haag`} className="text-[#D4AF37] hover:underline">Pani puri</Link>. Dahi puri. These are all chaat. What they have in common is that they are all food you eat with your hands, food that has presence, food that wakes your tongue. Chaat is sour, sweet, spicy and spiced all at once. It is food that has a show to it. It is food you experience, not just eat.</p>
                <p>Mumbai <Link href={`${base}/blog/indian-street-food-den-haag`} className="text-[#D4AF37] hover:underline">street food</Link> revolves entirely around chaat. At every corner, at every station, at every temple, there is a chaat seller. They make the same things every day - papdi chaat, aloo tikki, pani puri - and millions of people eat it. It is cheap. It is nourishing. It is delicious. And it tastes the same whether you are in Mumbai or in Den Haag. Chopras brings this authentic chaat to your city.</p>
                <p>In Den Haag you cannot just find chaat anywhere. Many restaurants serve curries and bread, but chaat? That is different. Chaat requires skill. It requires fresh ingredients every day. It requires knowledge of how you make papdi, how you fry aloo tikki, how you mix pani so it is not just sour but also alive. These are things you only learn if you grow up in a place where chaat is normal. Chopras is willing to share these skills with you.</p>
                <p>Indian snacks in Den Haag are a fast-growing trend, and for good reason. Chaat is addictive food. It is food that makes you want more. It is food you want to share with friends. It is food that makes you feel like you are in India, even though you are in the Netherlands. And it is affordable. This is why chaat Den Haag matters to us. This is why we do it well.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Onze Chaat-Specialiteiten bij Chopras' : 'Our Chaat Specialties at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Papdi Chaat</h3>
                <p>Papdi chaat begint met papdi - dunne, krokante wafers gemaakt van bloem. Dan voegen we gekookte kikkererwten toe, gekookte aardappel, zoete saus, zure saus, groene chutney, rode chutney, poeder van garam masala en zwarte zout. Dit is chaat in al zijn glorie. Het is krokant totdat je het eet. Het is zuur, zoet, pittig, kruidig allemaal tegelijk. Dit is waarom het verslavend is.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Aloo Tikki</h3>
                <p>Aloo tikki is een kleine koekje gemaakt van aardappel, groene chili, ginger, kruiden. Het wordt gebakken totdat het goud en krokant is. Dan wordt het geserveerd op papdi, met tamarinde en cilantro chutney, met dahi er bovenop, en met poeder van garam masala. Het is voedsel dat je met je handen eet. Het is voedsel dat voelt. Aloo tikki is het onderwerp van veel herinnering voor mensen die in India hebben gewoond.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Dahi Puri</h3>
                <p>Dahi puri is holle puri gevuld met aardappel, kikkererwten, tamarinde chutney, en dahi - yoghurt. Het wordt afgewerkt met poeder van garam masala en rode chili poeder. Het smaakt zoet, zuur, kruidig, cool allemaal tegelijk. De yoghurt maakt het voelen glad. Dit is chaat die je meer voelt dan proeft.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Pani Puri</h3>
                <p>Pani puri is holle puri ondergedompeld in pani - het geheim mengsel. Aardappel, kikkererwten, tamarinde saus, garam masala poeder allemaal binnenin. Dit is het voedsel dat je in seconden eet. Dit is het voedsel dat je meer voelt dan denkt. Dit is het voedsel dat je voelt als je in Mumbai bent.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Papdi Chaat</h3>
                <p>Papdi chaat starts with papdi - thin, crispy wafers made of flour. Then we add cooked chickpeas, cooked potato, sweet sauce, sour sauce, green chutney, red chutney, powder of garam masala and black salt. This is chaat in all its glory. It is crispy until you eat it. It is sour, sweet, spicy, spiced all at once. This is why it is addictive.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Aloo Tikki</h3>
                <p>Aloo tikki is a small patty made of potato, green chilli, ginger, spices. It is fried until it is golden and crispy. Then it is served on papdi, with tamarind and cilantro chutney, with dahi on top, and with powder of garam masala. It is food you eat with your hands. It is food that has presence. Aloo tikki is the subject of many memories for people who have lived in India.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Dahi Puri</h3>
                <p>Dahi puri is a hollow puri filled with potato, chickpeas, tamarind chutney, and dahi - yoghurt. It is finished with powder of garam masala and red chilli powder. It tastes sweet, sour, spiced, cool all at once. The yoghurt makes it feel smooth. This is chaat that you feel more than taste.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Pani Puri</h3>
                <p>Pani puri is a hollow puri dipped in pani - the secret mixture. Potato, chickpeas, tamarind sauce, garam masala powder all inside. This is food you eat in seconds. This is food you feel more than think. This is food that makes you feel like you are in Mumbai.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl ? 'Veelgestelde Vragen Over Chaat' : 'Frequently Asked Questions About Chaat'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Chaat Bestellen en Genieten' : 'Order and Enjoy Chaat'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {isNl
              ? 'Chaat is voedsel dat je deelt. Het is voedsel dat je ervaart. Bezoek Chopras op Leyweg 986, Den Haag. Bestel ons volledige assortiment chaat. Voel de smaak van Mumbai straatvoedsel. Open dinsdag tot zondag. Reservering aanbevolen, maar niet verplicht.'
              : 'Chaat is food you share. It is food you experience. Visit Chopras at Leyweg 986, Den Haag. Order our full range of chaat. Taste Mumbai street food. Open Tuesday to Sunday. Reservation recommended, but not required.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {tr.common.reserve}
            </Link>
            <Link
              href={`${base}/menu`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {tr.common.viewMenu}
            </Link>
            <Link
              href={`${base}/pani-puri-den-haag`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {isNl ? 'Pani Puri Proberen' : 'Try Pani Puri'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Meer Gerechten Ontdekken' : 'Explore More Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/naan-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Brood' : 'Bread'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Tandoori Naan Den Haag' : 'Tandoori Naan Den Haag'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/pani-puri-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Chaat' : 'Chaat'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Pani Puri Den Haag' : 'Pani Puri Den Haag'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Wilt u dit gerecht voor uw evenement? Indiaas catering Den Haag' : 'Want this dish at your event? Indian catering Den Haag'}</p>
            </Link>
          </div>
          <div className="text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras Indian Restaurant Den Haag'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
