import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Biryani in Den Haag | Chopras Indian Restaurant',
    nl: 'Biryani in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic biryani in Den Haag at Chopras. Fragrant basmati rice slow-cooked with chicken, lamb or vegetables. Halal certified. Open Tue–Sun on Leyweg.',
    nl: 'Authentieke biryani in Den Haag bij Chopras. Geurige basmatirijst langzaam gegaard met kip, lam of groenten. Halal gecertificeerd. Open di–zo op Leyweg.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/biryani-den-haag`,
      languages: { en: `${SITE_URL}/en/biryani-den-haag`, nl: `${SITE_URL}/nl/biryani-den-haag`, 'x-default': `${SITE_URL}/en/biryani-den-haag` },
    },
  }
}

export default function BiryaniPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const biryanisFaqs = isNl ? [
    {
      question: 'Serveer je biryani bij Chopras Indian Restaurant in Den Haag?',
      answer: 'Ja. Chopras Indian Restaurant serveert kip-biryani, lam-biryani en groente-biryani dagelijks. Alle biryani wordt langzaam bereid vanaf het begin in onze tandoor-stijl oven en gegaard totdat elke graankorrel volledig verzadigd is met de smaken van gemarineerde vlees, vers gemalen kruiden en echte saffraan.'
    },
    {
      question: 'Welke soorten biryani biedt Chopras Indian Restaurant aan?',
      answer: 'Chopras Indian Restaurant biedt drie soorten biryani aan. Kipbiryani gemaakt van een nacht gemarineerde tender tandoor-kip. Lambiryani gemaakt van malse lamschouder. Groentebiryani gemaakt van seizoensgroenten. Alle drie worden op dezelfde manier bereid - gelaagd en langzaam gegaard in onze tandoor-oven tot de rijst alle kruiden heeft opgenomen.'
    },
    {
      question: 'Waar vind ik de beste biryani in Den Haag?',
      answer: 'Chopras Indian Restaurant op Leyweg 986 serveert de beste authentieke biryani in Den Haag. Wij serveren biryani op dezelfde manier als in India - gegaard in een traditionele tandoor-oven van dichtbij, niet in een pan of een snelkookpan. Kom binnen en voel het verschil.'
    }
  ] : [
    {
      question: 'Do you serve biryani at Chopras Indian Restaurant in Den Haag?',
      answer: 'Yes. Chopras Indian Restaurant serves chicken biryani, lamb biryani, and vegetable biryani daily. All biryani is slow-cooked from the start in our tandoor-style oven and finished until every grain of rice is fully saturated with the flavours of marinated meat, freshly ground spices, and real saffron.'
    },
    {
      question: 'What types of biryani does Chopras Indian Restaurant offer?',
      answer: 'Chopras Indian Restaurant offers three types of biryani. Chicken biryani made from overnight-marinated tender tandoor chicken. Lamb biryani made from tender lamb shoulder. Vegetable biryani made from seasonal vegetables. All three are prepared the same way - layered and slow-cooked in our tandoor oven until the rice has absorbed all the spices.'
    },
    {
      question: 'Where can I find the best biryani in Den Haag?',
      answer: 'Chopras Indian Restaurant on Leyweg 986 serves the best authentic biryani in Den Haag. We serve biryani the way it is meant to be served in India - cooked in a traditional tandoor oven up close, not in a pan or pressure cooker. Come in and feel the difference.'
    }
  ]

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/biryani-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Biryani Den Haag' : 'Biryani Den Haag', item: `${SITE_URL}/${locale}/biryani-den-haag` },
      ])} />
      <JsonLd data={getFaqPageSchema(biryanisFaqs)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              OUR DISHES
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Biryani in Den Haag bij Chopras  -  Kip, Lam en Groente' : 'Biryani in Den Haag at Chopras  -  Chicken, Lamb and Vegetable'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Langzaam gegaard. Geurige basmatirijst. Halal gecertificeerd. Leyweg 986, Den Haag.' : 'Slow-cooked. Fragrant basmati. Halal certified. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Biryani Bijzonder Maakt' : 'What Makes Biryani Special'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Chopras serveert kip-, lam- en <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">groente</Link>-biryani in Den Haag  -  allemaal gemaakt zoals biryani gemaakt hoort te worden. Niet simpelweg rijst met vlees. Een gelaagde bereiding waarbij elke component  -  gemarineerd vlees, geurige basmati, echte saffraan, hele kruiden  -  afzonderlijk wordt bereid voordat het samen wordt afgesloten en langzaam wordt gegaard totdat de rijst elke druppel bouillon heeft opgenomen.</p>
                <p>Bij Chopras maken wij biryani zoals het in India thuishoort: lamsschouder of een nacht gemarineerde kip, gelaagd met saffraan-gedrenkte basmati, afgedekt met deeg en langzaam afgewerkt in de oven. Het deksel gaat aan tafel eraf. Alleen de geur vertelt je al dat dit geen snelkook-versie is.</p>
                <p>De kruiden worden elke ochtend vers gemalen. De kip en het lam zijn <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-gecertificeerd</Link>. De saffraan is echt  -  geen kleurstof-vervanger. Dit is het verschil dat je merkt als je het vergelijkt met wat de meeste restaurants in Nederland serveren.</p>
              </>
            ) : (
              <>
                <p>Chopras serves chicken, lamb and <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetable</Link> biryani in Den Haag  -  all made the way biryani is supposed to be made. Not simply rice with meat. A layered preparation where each component  -  marinated protein, fragrant basmati, real saffron, whole spices  -  is prepared separately before being sealed together and <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">slow-cooked</Link> until the rice has absorbed every drop of the stock.</p>
                <p>At Chopras, we make biryani the way it belongs in India: lamb shoulder or overnight-marinated chicken, layered with saffron-steeped basmati, sealed with dough and finished slowly in the oven. The lid comes off at the table. The smell alone tells you this is not a shortcut version.</p>
                <p>The spices are ground fresh every morning. The chicken and lamb are <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-certified</Link>. The saffron is real  -  not a colouring substitute. This is the difference you notice when you compare it to what most Dutch restaurants serve.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Biryani Bestellen bij Chopras' : 'Order Biryani at Chopras'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: isNl ? 'Kip Biryani' : 'Chicken Biryani', price: '€19.50', desc: isNl ? 'Gemarineerde kip met geurige basmatirijst' : 'Marinated chicken with fragrant basmati rice' },
              { name: isNl ? 'Lam Biryani' : 'Lamb Biryani', price: '€22.50', desc: isNl ? 'Mals lam langzaam gegaard met rijst en kruiden' : 'Tender lamb slow-cooked with rice and spices' },
              { name: isNl ? 'Groente Biryani' : 'Vegetable Biryani', price: '€17.50', desc: isNl ? 'Seizoensgroenten met basmatirijst en saffraanrijke masala' : 'Seasonal vegetables with basmati rice and saffron-rich masala' },
            ].map((item) => (
              <div key={item.name} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-1">{item.name}  -  {item.price}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8 text-center">
            {isNl ? 'Meer Gerechten Ontdekken' : 'Explore More Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze tandoori-specialiteiten in Den Haag' : 'Discover our tandoori specialities in Den Haag'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Boter Kip' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Het verhaal achter onze boter kip' : 'The story behind our butter chicken'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/mutton-rogan-josh-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Lam Curry' : 'Lamb Curry'}</p>
              <p className="text-[#1B2B5E] font-semibold">try our lamb rogan josh in Den Haag</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
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
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras Indian Restaurant Den Haag'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
