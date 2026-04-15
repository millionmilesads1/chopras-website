import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Tandoori in Den Haag | Chopras Indian Restaurant',
    nl: 'Tandoori in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic tandoori Den Haag at Chopras Indian Restaurant. Chicken tikka and seekh kebab from our clay oven. Halal certified. Order online or dine in.',
    nl: 'Authentieke tandoori gerechten bij Chopras Den Haag. Chicken tikka, seekh kebab en tandoori naan recht uit onze kleioven. Halal gecertificeerd. Leyweg 986, Den Haag.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'tandoori-den-haag'),
      languages: { en: getLocalizedUrl('en', 'tandoori-den-haag'), nl: getLocalizedUrl('nl', 'tandoori-den-haag'), 'x-default': getLocalizedUrl('en', 'tandoori-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'tandoori-den-haag'),
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

export default function TandooriPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'tandoori-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Tandoori Den Haag' : 'Tandoori Den Haag', item: getLocalizedUrl(locale, 'tandoori-den-haag') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Tandoori in Den Haag  -  Recht uit de Kleioven' : 'Tandoori in Den Haag  -  Straight from the Clay Oven'}
          </h1>
          <p
            className="text-white/75 text-lg"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? '400°C. Houtskool. Echte tandoor. Leyweg 986, Den Haag.' : '400°C. Charcoal. Real tandoor. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-[#1B2B5E] mb-8">
            {isNl ? 'De Tandoor bij Chopras' : 'The Tandoor at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>De tandoor is een Indiase <Link href={`${base}/blog/best-indian-restaurant-den-haag`} className="text-[#D4AF37] hover:underline">kleioven</Link> die bij temperaturen van ongeveer 400°C werkt. Het is de reden waarom tandoori kip een karakteristieke verschroeide buitenkant heeft met een sappige, geurige kern  -  die combinatie kan niet worden bereikt in een gewone oven of pan.</p>
                <p>Bij Chopras wordt de tandoor uren voor de service aangestoken. De kip wordt van tevoren gemarineerd met verse kruiden en yoghurt, dan gehangen in de oven om te garen. De hitte is droog en intense  -  het vocht verdampt snel, de kruiden karamelliseren, en het vlees behoudt zijn sappen van binnenuit.</p>
                <p>Onze tandoori gerechten zijn <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link> gecertificeerd. Elke portie wordt vers bereid wanneer u bestelt.</p>
              </>
            ) : (
              <>
                <p>The tandoor is an Indian <Link href={`${base}/blog/best-indian-restaurant-den-haag`} className="text-[#D4AF37] hover:underline">clay oven</Link> that operates at temperatures of around 400°C. It is the reason why tandoori chicken has a characteristic charred exterior with a juicy, fragrant core  -  that combination cannot be achieved in a regular oven or pan.</p>
                <p>At Chopras, the tandoor is fired up hours before service. The chicken is marinated overnight with fresh spices and yogurt, then hung in the oven to cook. The heat is dry and intense  -  moisture evaporates fast, the spices caramelise, and the meat retains its juices from within.</p>
                <p>Our tandoori dishes are <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link> certified. Every portion is freshly prepared when you order.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-[#1B2B5E] mb-8">
            {isNl ? 'Tandoori Gerechten op Ons Menu' : 'Tandoori Dishes on Our Menu'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { name: isNl ? 'Chicken Tikka' : 'Chicken Tikka', price: '€16.50', desc: isNl ? 'Gemarineerde kipdelen, 24 uur in yoghurt en kruiden, direct van de tandoor' : 'Marinated chicken pieces, 24 hours in yogurt and spices, straight from the tandoor', href: '/menu' },
              { name: isNl ? 'Seekh Kebab' : 'Seekh Kebab', price: '€17.50', desc: isNl ? 'Gemalen lam met gember, knoflook en verse kruiden, geroosterd op metalen pennen' : 'Minced lamb with ginger, garlic and fresh spices, grilled on metal skewers', href: '/menu' },
              { name: isNl ? 'Paneer Tikka' : 'Paneer Tikka', price: '€15.50', desc: isNl ? 'Verse paneer gemarineerd in yoghurt en kruiden, geroosterd in de tandoor' : 'Fresh paneer marinated in yogurt and spices, grilled in the tandoor', href: '/blog/vegetarian-indian-food-den-haag' },
              { name: isNl ? 'Tandoori Naan' : 'Tandoori Naan', price: '€3.50', desc: isNl ? 'Platbrood gebakken op de muur van de tandoor' : 'Flatbread baked against the wall of the tandoor', href: '/naan-den-haag' },
            ].map((item) => (
              <div key={item.name} className="bg-[#FFFAF5] rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-lg text-[#1B2B5E] mb-1"><Link href={`${base}${item.href}`} className="text-[#D4AF37] hover:underline">{item.name}</Link>  -  {item.price}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze biryani in Den Haag' : 'Learn about our biryani in Den Haag'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Het verhaal achter onze boter kip' : 'The story behind our butter chicken'}</p>
            </Link>
            <Link href={`${base}/naan-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Naan' : 'Naan'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Tandoori Naan Den Haag' : 'Tandoori Naan Den Haag'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Wilt u dit gerecht voor uw evenement? Indiaas catering Den Haag' : 'Want this dish at your event? Indian catering Den Haag'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? (
                <>Bekijk het volledige menu of <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">maak een reservering</Link>.</>
              ) : (
                <>View the full menu or <Link href={`${base}/contact`} className="text-[#D4AF37] hover:underline">book</Link> a table at Chopras Indian Restaurant Den Haag.</>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
