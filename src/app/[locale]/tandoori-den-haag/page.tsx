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
    en: 'Tandoori in Den Haag | Chopras  -  Authentic Tandoor-Fired Dishes',
    nl: 'Tandoori in Den Haag | Chopras  -  Authentieke Tandoor-Gerechten',
  }
  const descriptions = {
    en: 'Authentic tandoori dishes at Chopras Den Haag. Chicken tikka, seekh kebab and tandoori naan straight from our clay oven. Halal certified. Leyweg 986, Den Haag.',
    nl: 'Authentieke tandoori gerechten bij Chopras Den Haag. Chicken tikka, seekh kebab en tandoori naan recht uit onze kleioven. Halal gecertificeerd. Leyweg 986, Den Haag.',
  }
  return {
    title: titles[locale], description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/tandoori-den-haag`,
      languages: { en: `${SITE_URL}/en/tandoori-den-haag`, nl: `${SITE_URL}/nl/tandoori-den-haag`, 'x-default': `${SITE_URL}/en/tandoori-den-haag` },
    },
  }
}

export default function TandooriPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/tandoori-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Tandoori Den Haag' : 'Tandoori Den Haag', item: `${SITE_URL}/${locale}/tandoori-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
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
                <p>De tandoor is een Indiase kleioven die bij temperaturen van ongeveer 400°C werkt. Het is de reden waarom tandoori kip een karakteristieke verschroeide buitenkant heeft met een sappige, geurige kern  -  die combinatie kan niet worden bereikt in een gewone oven of pan.</p>
                <p>Bij Chopras wordt de tandoor uren voor de service aangestoken. De kip wordt van tevoren gemarineerd met verse kruiden en yoghurt, dan gehangen in de oven om te garen. De hitte is droog en intense  -  het vocht verdampt snel, de kruiden karamelliseren, en het vlees behoudt zijn sappen van binnenuit.</p>
                <p>Onze tandoori gerechten zijn halal gecertificeerd. Elke portie wordt vers bereid wanneer u bestelt.</p>
              </>
            ) : (
              <>
                <p>The tandoor is an Indian clay oven that operates at temperatures of around 400°C. It is the reason why tandoori chicken has a characteristic charred exterior with a juicy, fragrant core  -  that combination cannot be achieved in a regular oven or pan.</p>
                <p>At Chopras, the tandoor is fired up hours before service. The chicken is marinated overnight with fresh spices and yogurt, then hung in the oven to cook. The heat is dry and intense  -  moisture evaporates fast, the spices caramelise, and the meat retains its juices from within.</p>
                <p>Our tandoori dishes are halal certified. Every portion is freshly prepared when you order.</p>
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
              { name: isNl ? 'Chicken Tikka' : 'Chicken Tikka', price: '€16.50', desc: isNl ? 'Gemarineerde kipdelen, 24 uur in yoghurt en kruiden, direct van de tandoor' : 'Marinated chicken pieces, 24 hours in yogurt and spices, straight from the tandoor' },
              { name: isNl ? 'Seekh Kebab' : 'Seekh Kebab', price: '€17.50', desc: isNl ? 'Gemalen lam met gember, knoflook en verse kruiden, geroosterd op metalen pennen' : 'Minced lamb with ginger, garlic and fresh spices, grilled on metal skewers' },
              { name: isNl ? 'Paneer Tikka' : 'Paneer Tikka', price: '€15.50', desc: isNl ? 'Verse paneer gemarineerd in yoghurt en kruiden, geroosterd in de tandoor' : 'Fresh paneer marinated in yogurt and spices, grilled in the tandoor' },
              { name: isNl ? 'Tandoori Naan' : 'Tandoori Naan', price: '€3.50', desc: isNl ? 'Platbrood gebakken op de muur van de tandoor' : 'Flatbread baked against the wall of the tandoor' },
            ].map((item) => (
              <div key={item.name} className="bg-[#FFFAF5] rounded-xl p-5 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-lg text-[#1B2B5E] mb-1">{item.name}  -  {item.price}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {tr.common.reserve}
            </a>
            <Link href={`${base}/menu`} className="border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
