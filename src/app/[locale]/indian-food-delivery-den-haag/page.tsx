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
    en: 'Indian Food Delivery in Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Eten Bezorgen in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Hot Indian food delivery in Den Haag. Chopras delivers authentic curries, biryani, and breads. Order online. Fresh. Made to order. Fast.',
    nl: 'Vers Indiaas eten bezorgen in Den Haag. Chopras bezorgt authentieke currys, biryani en brood. Bestel online. Vers gemaakt. Snel.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-food-delivery-den-haag`,
      languages: { en: `${SITE_URL}/en/indian-food-delivery-den-haag`, nl: `${SITE_URL}/nl/indian-food-delivery-den-haag`, 'x-default': `${SITE_URL}/en/indian-food-delivery-den-haag` },
    },
  }
}

export default function IndianFoodDeliveryPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/indian-food-delivery-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Indiaas Eten Bezorgen' : 'Indian Food Delivery', item: `${SITE_URL}/${locale}/indian-food-delivery-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
              DELIVERY
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Eten Bezorgen in Den Haag' : 'Indian Food Delivery in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Vers gemaakt. Heet bezorgd. Authentieke smaken. Bestel online nu.' : 'Made fresh. Delivered hot. Authentic flavours. Order online now.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Indiaas Eten Bezorgen Werkt bij Chopras' : 'How Indian Food Delivery Works at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Veel restaurants in Nederland serveren &quot;Indiaas eten&quot; dat uren geleden is gemaakt en onder warmtelicht heeft gezeten. Chopras doet het anders. We maken alles vers, op bestelling, en we bezorgen het heet op je tafel. Dit is niet voorgekookt voedsel in een container. Dit is echte Indiase keuken, gemaakt met dezelfde zorg en aandacht als wanneer je hier zou eten.</p>
                <p>Je bestelt online of belt ons. Je geeft ons je adres in Den Haag. We beginnen te koken. Je curry wordt gemaakt, je naan wordt gebakken in onze tandoor, je biryani wordt op je moment geperfectioneerd. Alles gaat in containers met goed sluitende deksels. De coureur brengt het naar je deur. Het eten arriveert heet, vers, en smakelijk. Niet koud. Niet droog. Niet gemaakt van gisteren.</p>
                <p>We bezorgen in heel Den Haag - van het centrum tot Leyenburg, van Voorburg tot Rijswijk. De levertijd hangt af van hoe ver je weg bent, maar onze standaard is: het eten moet heet aankomen. We gebruiken warmtebakken en we rijden snel. Dit is Indiaas eten bezorgen zoals het hoort.</p>
              </>
            ) : (
              <>
                <p>Many restaurants in the Netherlands serve &quot;Indian food&quot; that was made hours ago and has been sitting under heating lights. Chopras does it differently. We make everything fresh, to order, and we deliver it hot to your table. This is not pre-cooked food in a container. This is real Indian cooking, made with the same care and attention as if you were eating here.</p>
                <p>You order online or call us. You give us your address in Den Haag. We start cooking. Your curry is made, your naan is baked in our tandoor, your biryani is perfected at your moment. Everything goes into containers with tight-fitting lids. The courier brings it to your door. The food arrives hot, fresh, and tasty. Not cold. Not dry. Not made from yesterday.</p>
                <p>We deliver across all of Den Haag - from the city centre to Leyenburg, from Voorburg to Rijswijk. Delivery time depends on how far away you are, but our standard is: the food must arrive hot. We use insulated boxes and we drive fast. This is Indian food delivery the way it should be.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Je Kunt Bestellen bij Chopras' : 'What You Can Order at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Currys</h3>
                <p>Kip tikka masala. Dal makhani. Mutton rogan josh. Soya chaap. Aloo gobi. Paneer dishes. Al onze currys worden van scratch gemaakt met verse ginger-garlic paste, hele kruiden, en geen pakjes of bakjes. Ze zijn warm, vol smaak, en ze wachten niet op jou.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Biryani</h3>
                <p>Kip biryani. Lamsvlees biryani. Groente biryani. Dit is gefijnde basmati rijst, langzaam gekookt met gemarineerd vlees en geurige kruiden. Als je nog nooit echte biryani hebt gegeten, of je hebt het alleen uit een restaurant gekend waar het voelt als natte rijst met vlees, je bent niet klaar voor wat wij doen.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Breads</h3>
                <p>Naan. Roti. Paratha. Alles uit onze tandoor. Niets uit een pan met boter. Niet voorgebakken. Ze worden op je bestelling gemaakt en bezorgd terwijl ze nog warm zijn. Dit maakt het verschil.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Curries</h3>
                <p>Chicken tikka masala. Dal makhani. Mutton rogan josh. Soya chaap. Aloo gobi. Paneer dishes. All our curries are made from scratch with fresh ginger - garlic paste, whole spices, and no packets or jars. They are warm, full of flavour, and they do not wait for you.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Biryani</h3>
                <p>Chicken biryani. Lamb biryani. Vegetable biryani. This is refined basmati rice, slowly cooked with marinated meat and fragrant spices. If you have never eaten real biryani, or you have only known it from a restaurant where it feels like wet rice with meat, you are not ready for what we do.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Breads</h3>
                <p>Naan. Roti. Paratha. All from our tandoor. Nothing from a pan with butter. Not pre-baked. They are made on your order and delivered while they are still warm. This makes the difference.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Veelgestelde Vragen over Bezorging' : 'Delivery Questions'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoe lang duurt de bezorging?' : 'How long does delivery take?',
                a: isNl ? 'Afhankelijk van hoe druk het is en hoe ver je weg bent. Standaard 30 tot 45 minuten. We geven je een geschatte tijd als je bestelt. We gaan ervan uit dat het eten heet aankomt, dus we jagen niet - we rijden snel maar voorzichtig.' : 'It depends on how busy we are and how far away you are. Standard 30 to 45 minutes. We give you an estimated time when you order. We assume the food arrives hot, so we do not rush - we drive fast but carefully.'
              },
              {
                q: isNl ? 'Kunnen jullie voor mijn flat of appartement bezorgen?' : 'Can you deliver to my flat or apartment?',
                a: isNl ? 'Ja, absoluut. We bezorgen overal in Den Haag - appartementen, huizen, kantoren. Je geeft ons je adres en we brengen het naar je deur.' : 'Yes, absolutely. We deliver everywhere in Den Haag - apartments, houses, offices. You give us your address and we bring it to your door.'
              },
              {
                q: isNl ? 'Wat als het eten niet aankomt zoals ik het wil?' : 'What if the food does not arrive as I want it?',
                a: isNl ? 'Bel ons meteen. We doen het opnieuw. We willen dat je blij bent met je eten. Dit is niet alleen zakendoen - dit is reputatie.' : 'Call us right away. We will do it again. We want you to be happy with your food. This is not just business - this is reputation.'
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
            {isNl ? 'Begin nu met Bestellen' : 'Order Now'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {isNl ? 'Online Bestellen' : 'Order Online'}
            </a>
            <Link href={`${base}/menu`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {isNl ? 'Biryani' : 'Biryani'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Populaire Bezorggerechten' : 'Popular Delivery Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'De beroemde roomkip van Chopras' : 'Chopras famous butter chicken'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil medley'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Gegrilde specialiteiten' : 'Grilled specialities'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - vers voedsel bezorgd in Den Haag' : 'Chopras Indian Restaurant - fresh food delivery in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bestel online of' : 'Order online or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'bel ons voor directe bestelling' : 'call us for immediate delivery'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
