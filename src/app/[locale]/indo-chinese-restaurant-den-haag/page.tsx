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
    en: 'Indo-Chinese Restaurant Den Haag | Chopras Indian Restaurant',
    nl: 'Indo-Chinese Restaurant Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indo-Chinese fusion cuisine at Chopras in Den Haag. Schezwan dishes, noodles, rice, momos. Spicy and bold flavors. Order online.',
    nl: 'Indo-Chinese fusiekeuken bij Chopras in Den Haag. Schezwan gerechten, noedels, rijst, momos. Pikant en aromatisch.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indo-chinese-restaurant-den-haag`,
      languages: { en: `${SITE_URL}/en/indo-chinese-restaurant-den-haag`, nl: `${SITE_URL}/nl/indo-chinese-restaurant-den-haag`, 'x-default': `${SITE_URL}/en/indo-chinese-restaurant-den-haag` },
    },
  }
}

export default function IndoChineseRestaurantPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const faqItems = isNl ? [
    { question: 'Wat is Indo-Chinese voeding?', answer: 'Indo-Chinese is een fusie van Indiase en Chinese keukens. Het combineert Indiase kruiden en bereidingstechnieken met Chinese noodels, rijst en sauzen. Schezwan sauzen, hokkien noedels en Indiase specerijen maken deze keuken uniek pikant en aromatisch.' },
    { question: 'Welke Indo-Chinese gerechten zijn het populairst?', answer: 'Schezwan noedels, manchurian balletjes, fried rice, momos en indo-Chinese curry zijn de bestsellers. Ze zijn pikant, voelvaardig, en volledig anders van traditioneel Indiaas eten. Voor degenen die experimenteren: try de paneer schezwan.' },
    { question: 'Is Indo-Chinese voeding erg pikant?', answer: 'Indo-Chinese gerechten zijn over het algemeen pikanter dan traditionele Indiase curry&apos;s. Schezwan pepersaus en Chinese peppersaus geven de hitte. We kunnen het niveau aanpassen naar voorkeur, van mild tot zeer pikant.' },
    { question: 'Kan ik Indo-Chinese online bestellen?', answer: 'Ja. Bestel via Thuisbezorgd of Uber Eats. Alle Indo-Chinese gerechten blijven pikant en smaakvol bij levering. Volledige ketenintegriteit van keuken tot deur.' },
  ] : [
    { question: 'What is Indo-Chinese food?', answer: 'Indo-Chinese is a fusion of Indian and Chinese cuisines. It combines Indian spices and cooking techniques with Chinese noodles, rice and sauces. Schezwan sauces, hokkien noodles and Indian spices make this cuisine uniquely spicy and aromatic.' },
    { question: 'Which Indo-Chinese dishes are most popular?', answer: 'Schezwan noodles, manchurian balls, fried rice, momos and Indo-Chinese curry are bestsellers. They are spicy, satisfying, and completely different from traditional Indian food. For those wanting to experiment: try the paneer schezwan.' },
    { question: 'Is Indo-Chinese food very spicy?', answer: 'Indo-Chinese dishes are generally spicier than traditional Indian curries. Schezwan pepper sauce and Chinese pepper sauce give the heat. We can adjust the level to your preference, from mild to very spicy.' },
    { question: 'Can I order Indo-Chinese online?', answer: 'Yes. Order via Thuisbezorgd or Uber Eats. All Indo-Chinese dishes remain spicy and flavorful on delivery. Full chain integrity from kitchen to door.' },
  ]

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/indo-chinese-restaurant-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Indo-Chinese Restaurant' : 'Indo-Chinese Restaurant', item: `${SITE_URL}/${locale}/indo-chinese-restaurant-den-haag` },
      ])} />
      <JsonLd data={getFaqPageSchema(faqItems)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indo-Chinese Restaurant - Pikante Fusie' : 'Indo-Chinese Restaurant - Spicy Fusion'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Indiase kruiden ontmoeten Chinese noodels. Schezwan, manchurian, noodles. Pikant en aromatisch.' : 'Indian spices meet Chinese noodles. Schezwan, manchurian, noodles. Spicy and aromatic.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indo-Chinese Voeding Uitgelegd' : 'Indo-Chinese Food Explained'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Indo-Chinese voeding is een bewuste fusie van twee grote keukens. Het is niet toevallig of goedkoop. Indiase koks hebben de technieken van Chinese voeding bestudeerd en hun eigen kruiden en bereidingsmethoden eraan toegevoegd. Het resultaat is iets wat je niet in India of China vindt.</p>
                <p>Schezwan peppers, hokkien noedels, ginger-garlic sauzen - deze worden gecombineerd met Indiase specerijen, cumin, koriander en tandoor-technieken. Pikantheid, geur, en textuur worden bewust gecombineerd. Dit is hoe Indo-Chinese voeding bij Chopras wordt bereid.</p>
                <p>Voor degenen die Indiaas eten al kennen maar iets willen proberen wat anders, voelvaardig en pikanter is - Indo-Chinese voeding is precies wat u zoekt.</p>
              </>
            ) : (
              <>
                <p>Indo-Chinese food is a deliberate fusion of two great cuisines. It is not accidental or cheap. Indian chefs have studied the techniques of Chinese food and added their own spices and preparation methods. The result is something you will not find in India or China.</p>
                <p>Schezwan peppers, hokkien noodles, ginger-garlic sauces - these are combined with Indian spices, cumin, coriander and tandoor techniques. Spiciness, aroma, and texture are deliberately combined. This is how Indo-Chinese food is prepared at Chopras.</p>
                <p>For those who already know Indian food but want to try something different, satisfying and spicier - Indo-Chinese food is exactly what you are looking for.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Populaire Indo-Chinese Gerechten' : 'Popular Indo-Chinese Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Noedels', items: 'Schezwan noedels, garlic noedels, soy noodles, hakka noedels, paneer noedels' },
              { title: 'Manchurian Stijl', items: 'Veg manchurian, chicken manchurian, paneer manchurian, dry manchurian' },
              { title: 'Rijst Gerechten', items: 'Schezwan fried rice, garlic fried rice, vegetable fried rice, paneer fried rice' },
              { title: 'Speciale Bereiding', items: 'Momos, chilli paneer, spring rolls, hakka samosa, Indo-Chinese curry' },
            ] : [
              { title: 'Noodles', items: 'Schezwan noodles, garlic noodles, soy noodles, hakka noodles, paneer noodles' },
              { title: 'Manchurian Style', items: 'Veg manchurian, chicken manchurian, paneer manchurian, dry manchurian' },
              { title: 'Rice Dishes', items: 'Schezwan fried rice, garlic fried rice, vegetable fried rice, paneer fried rice' },
              { title: 'Special Preparations', items: 'Momos, chilli paneer, spring rolls, hakka samosa, Indo-Chinese curry' },
            ]).map((item) => (
              <div key={item.title} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indo-Chinese FAQ' : 'Indo-Chinese FAQ'}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group border border-[#D4AF37] rounded-lg p-6 cursor-pointer hover:bg-white/50 transition-colors">
                <summary className="font-bold text-[#1B2B5E] flex justify-between items-center">
                  {item.question}
                  <span className="text-[#D4AF37] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-[#1A1A1A] mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indo-Chinese Bestellen' : 'Order Indo-Chinese'}
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
