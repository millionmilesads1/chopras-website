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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Vegan Menu Den Haag | Chopras Indian Restaurant',
    nl: 'Veganistisch Menu Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Vegan Indian food Den Haag at Chopras Indian Restaurant. Dal makhani, soya chaap and chaat. Authentic plant-based Indian dishes at Leyweg 986. Dine in today.',
    nl: 'Volledig veganistisch menu bij Chopras in Den Haag. Plantaardige curry&apos;s, biryani, tandoori. Geen vlees, zuivel of eieren.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'vegan-menu'),
      languages: { en: getLocalizedUrl('en', 'vegan-menu'), nl: getLocalizedUrl('nl', 'vegan-menu'), 'x-default': getLocalizedUrl('en', 'vegan-menu') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'vegan-menu'),
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
  { question: 'Is the vegan menu truly completely plant-based?', answer: 'Yes. All dishes on the Chopras vegan menu contain no meat, fish, dairy or eggs. This applies to curries, biryani, tandoori, and all side dishes. Completely vegan, always.' },
  { question: 'Which vegan dishes are most popular?', answer: 'Dal makhani, chana masala, aloo gobi, and vegetable biryani are the most ordered dishes. They are rich, flavorful, and satisfying as a complete meal. For more experienced eaters: baingan bharta and okra fry.' },
  { question: 'Can I order the vegan menu online?', answer: 'Yes. Order via Thuisbezorgd or Uber Eats. All food is prepared without dairy, butter or eggs. Full chain integrity from kitchen to door.' },
  { question: 'Are the naan breads also vegan?', answer: 'Yes. We bake vegan naan fresh in the tandoor. This applies to garlic naan, plain naan and all other bread types. No milk or butter, purely plant-based.' },
]

const faqsNl: Array<{ question: string; answer: string }> = [
  { question: 'Is het veganistische menu echt volledig plantaardig?', answer: 'Ja. Alle gerechten op het Chopras veganistische menu bevatten geen vlees, vis, zuivel of eieren. Dit geldt voor curry&apos;s, biryani, tandoori, en alle bijgerechten. Volledig veganistisch, altijd.' },
  { question: 'Welke veganistische gerechten zijn het populairst?', answer: 'Dal makhani, chana masala, aloo gobi, en vegetable biryani zijn de meest bestelde gerechten. Ze zijn rijkgevuld, smaakvol, en voldoend voor een volledige maaltijd. Voor meer ervaren eters: baingan bharta en okra fry.' },
  { question: 'Kan ik het veganistische menu online bestellen?', answer: 'Ja. Bestel via Thuisbezorgd of Uber Eats. Al het eten wordt bereid zonder zuivel, boter of eieren. Volledige ketenduidelijkheid van keuken tot deur.' },
  { question: 'Zijn de naan broodjes ook veganistisch?', answer: 'Ja. We bakken veganistische naan broodjes vers in de tandoor. Dit geldt voor garlic naan, plain naan en alle andere broodsoorten. Geen melk of boter, puur plantaardig.' },
]

export default function VeganMenuPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'vegan-menu'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Veganistisch Menu' : 'Vegan Menu', item: getLocalizedUrl(locale, 'vegan-menu') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • MENU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Veganistisch Menu - Volledig Plantaardig' : 'Vegan Menu - Completely Plant-Based'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Geen vlees, vis, zuivel of eieren. Alle groenten en kruiden. Chopras in Den Haag.' : 'No meat, fish, dairy or eggs. Pure vegetables and spices. Chopras in Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Het Veganistische Menu Uitgelegd' : 'The Vegan Menu Explained'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Het veganistische menu van Chopras is niet een aparte optie met beperkte keuzes. Het is een volledige, smakelijke menukaart bereid volledig plantaardig. Geen verborgen ingrediënten, geen vlees- of zuivelbouillon, geen eieren in sauzen. Dit is hoe deze gerechten in traditionele Indiase vegetarische keukens worden bereid.</p>
                <p>Elke curry, elke biryani, elk brood wordt bereid zonder dierlijke producten. De smaak is niet verminderd of gewijzigd voor veganisten. Dit is authentieke Indiase plantaardige keuken, niet aangepast eten voor niet-veganisten.</p>
                <p>Voor veganen en vegetariërs in Den Haag betekent dit dat ze dezelfde kwaliteit en smaak krijgen als iedereen. Geen aparte menu, geen compromissen. Plantaardig, smaakvol, altijd.</p>
              </>
            ) : (
              <>
                <p>The vegan menu at Chopras is not a limited option with reduced choices. It is a complete, flavorful menu prepared entirely plant-based. No hidden ingredients, no meat or dairy broth, no eggs in sauces. This is how these dishes are prepared in traditional Indian vegetarian kitchens.</p>
                <p>Every curry, every biryani, every bread is prepared without animal products. The flavor is not diminished or modified for vegans. This is authentic Indian plant-based cuisine, not modified food for non-vegans.</p>
                <p>For vegans and vegetarians in Den Haag, this means they get the same quality and taste as everyone else. No separate menu, no compromises. Plant-based, flavorful, always.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Populaire Gerechten op het Veganistische Menu' : 'Popular Dishes on the Vegan Menu'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Dal en Linzen', items: 'Dal makhani, dal tadka, chana masala, rajma, toor dal' },
              { title: 'Groente Curry\'s', items: 'Aloo gobi, baingan bharta, okra fry, cauliflower tikka, mixed vegetable curry' },
              { title: 'Biryani en Rijst', items: 'Vegetable biryani, mushroom biryani, yellow rice, jeera rice' },
              { title: 'Brood en Bijgerechten', items: 'Garlic naan, plain naan, roti, papadum, plantaardige raita' },
            ] : [
              { title: 'Lentils and Beans', items: 'Dal makhani, dal tadka, chana masala, rajma, toor dal' },
              { title: 'Vegetable Curries', items: 'Aloo gobi, baingan bharta, okra fry, cauliflower tikka, mixed vegetable curry' },
              { title: 'Biryani and Rice', items: 'Vegetable biryani, mushroom biryani, yellow rice, jeera rice' },
              { title: 'Breads and Sides', items: 'Garlic naan, plain naan, roti, papadum, vegan raita' },
            ]).map((item) => (
              <div key={item.title} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl ? 'Veganistisch Menu FAQ' : 'Vegan Menu FAQ'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Veganistisch Menu Bestellen' : 'Order Vegan Menu'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/indian-food-delivery-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Bezorging' : 'Delivery'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
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
