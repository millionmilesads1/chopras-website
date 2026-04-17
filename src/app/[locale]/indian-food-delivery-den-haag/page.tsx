import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema, getDeliveryServiceSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import FaqAccordion from '@/components/sections/FaqAccordion'

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
    en: 'Indian food delivery Den Haag from Chopras Indian Restaurant. Fresh curries and biryani delivered hot to your door. Halal certified. Order online.',
    nl: 'Vers Indiaas eten bezorgen in Den Haag. Chopras bezorgt authentieke currys, biryani en brood. Bestel online. Vers gemaakt. Snel.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-food-delivery-den-haag'),
      languages: { en: getLocalizedUrl('en', 'indian-food-delivery-den-haag'), nl: getLocalizedUrl('nl', 'indian-food-delivery-den-haag'), 'x-default': getLocalizedUrl('en', 'indian-food-delivery-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'indian-food-delivery-den-haag'),
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

const faqsNl: Array<{ question: string; answer: string }> = [
  {
    question: 'Hoe lang duurt de bezorging?',
    answer: 'Afhankelijk van hoe druk het is en hoe ver je weg bent. Standaard 30 tot 45 minuten. We geven je een geschatte tijd als je bestelt. We gaan ervan uit dat het eten heet aankomt, dus we jagen niet - we rijden snel maar voorzichtig.',
  },
  {
    question: 'Kunnen jullie voor mijn flat of appartement bezorgen?',
    answer: 'Ja, absoluut. We bezorgen overal in Den Haag - appartementen, huizen, kantoren. Je geeft ons je adres en we brengen het naar je deur.',
  },
  {
    question: 'Wat als het eten niet aankomt zoals ik het wil?',
    answer: 'Bel ons meteen. We doen het opnieuw. We willen dat je blij bent met je eten. Dit is niet alleen zakendoen - dit is reputatie.',
  },
]

const faqsEn: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does delivery take?',
    answer: 'It depends on how busy we are and how far away you are. Standard 30 to 45 minutes. We give you an estimated time when you order. We assume the food arrives hot, so we do not rush - we drive fast but carefully.',
  },
  {
    question: 'Can you deliver to my flat or apartment?',
    answer: 'Yes, absolutely. We deliver everywhere in Den Haag - apartments, houses, offices. You give us your address and we bring it to your door.',
  },
  {
    question: 'What if the food does not arrive as I want it?',
    answer: 'Call us right away. We will do it again. We want you to be happy with your food. This is not just business - this is reputation.',
  },
]

export default function IndianFoodDeliveryPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'indian-food-delivery-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Indiaas Eten Bezorgen' : 'Indian Food Delivery', item: getLocalizedUrl(locale, 'indian-food-delivery-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />
      <JsonLd data={getDeliveryServiceSchema(locale)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Eten Bezorgen in Den Haag' : 'Indian Food Delivery in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Vers gemaakt. Heet bezorgd. Authentieke smaken. Bestel online nu.' : 'Made fresh. Delivered hot. Authentic flavours. Order online now.'}
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
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

      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl ? 'Veelgestelde Vragen over Bezorging' : 'Delivery Questions'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Begin nu met Bestellen' : 'Order Now'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Online Bestellen' : 'Order Online'}
            </a>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Biryani' : 'Biryani'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#F7F8FC] py-16">
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
