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
  { question: 'Is alle vlees op het halal menu gekeurde halal?', answer: 'Ja. Alle vlees op het Chopras halal menu is van gecertificeerde halal leveranciers. Geen uitzonderingen, geen voorwaarden. Dit geldt voor kip, lam, schapen- en visgerechten.' },
  { question: 'Welke curry&apos;s zijn het populairst op het halal menu?', answer: 'Butter chicken, lamb rogan josh, en chicken tikka masala zijn de meest bestelde gerechten. Ze zijn mild, rijk, en geschikt voor beginners in Indiaas eten. Voor meer ervaren eters: mutton keema en seekh kebab.' },
  { question: 'Kunnen vegetarische gasten samen met halal-eters eten?', answer: 'Volledig. Dal makhani, chana masala, paneer tikka en vegetable biryani zijn beschikbaar zonder compromissen. Ze worden in dezelfde halal keuken bereid.' },
  { question: 'Kan ik het halal menu online bestellen?', answer: 'Ja. Bestel via Thuisbezorgd of Uber Eats. Alle halal certificering blijft gelden voor bezorgbestellingen. Volledige ketenintegriteit van keuken tot deur.' },
]

const faqsEn: Array<{ question: string; answer: string }> = [
  { question: 'Is all meat on the halal menu certified halal?', answer: 'Yes. All meat on the Chopras halal menu is from certified halal suppliers. No exceptions, no conditions. This applies to chicken, lamb, mutton and seafood dishes.' },
  { question: 'Which curries are most popular on the halal menu?', answer: 'Butter chicken, lamb rogan josh, and chicken tikka masala are the most ordered dishes. They are mild, rich, and suitable for beginners in Indian food. For more experienced eaters: mutton keema and seekh kebab.' },
  { question: 'Can vegetarian guests eat alongside halal diners?', answer: 'Completely. Dal makhani, chana masala, paneer tikka and vegetable biryani are available without compromise. They are prepared in the same halal kitchen.' },
  { question: 'Can I order the halal menu online?', answer: 'Yes. Order via Thuisbezorgd or Uber Eats. All halal certification remains in effect for delivery orders. Full chain integrity from kitchen to door.' },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Halal Menu Den Haag | Chopras Indian Restaurant',
    nl: 'Halal Menu Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Halal menu Den Haag at Chopras Indian Restaurant. All meat is halal certified. Biryani, tandoori and curries. Dine with full confidence at Leyweg 986 Den Haag.',
    nl: 'Volledig halal menu bij Chopras in Den Haag. Alle vlees halal gecertificeerd. Kip, lam, biryani, tandoori, vegetarische opties.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'halal-menu'),
      languages: { en: getLocalizedUrl('en', 'halal-menu'), nl: getLocalizedUrl('nl', 'halal-menu'), 'x-default': getLocalizedUrl('en', 'halal-menu') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'halal-menu'),
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

export default function HalalMenuPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'halal-menu'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Halal Menu' : 'Halal Menu', item: getLocalizedUrl(locale, 'halal-menu') },
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
            {isNl ? 'Halal Menu - Volledig Gecertificeerd' : 'Halal Menu - Fully Certified'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Alle vlees van gecertificeerde halal leveranciers. Geen compromissen. Chopras in Den Haag.' : 'All meat from certified halal suppliers. No compromises. Chopras in Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Het Halal Menu Uitgelegd' : 'The Halal Menu Explained'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Het halal menu van Chopras is niet een aparte kaart of &quot;optie op het normale menu&quot;. Het is het volledige Chopras menu, bereid in een halal-gecertificeerde keuken. Dit onderscheid is cruciaal. Een restaurant dat &quot;ook halal&quot; aanbiedt werkt anders dan een restaurant waar halal de standaard is.</p>
                <p>Elke leverancier die Chopras vlees levert is gecertificeerd halal. Het vlees wordt apart opgeslagen, apart verwerkt, apart gekookt. Dit is niet flexibel of situationeel. Dit is hoe Chopras werkt, altijd.</p>
                <p>Voor moslimgemeenschappen in Den Haag en omgeving - Marokkaans, Pakistaans, Turks, Indiaas - betekent dit dat ze elke keer dat ze naar Chopras gaan, dezelfde standaard krijgen. Geen vragen, geen twijfels. Halal, volledig, altijd.</p>
              </>
            ) : (
              <>
                <p>The halal menu at Chopras is not a separate card or an &quot;option on the normal menu&quot;. It is the complete Chopras menu, prepared in a halal-certified kitchen. This distinction is crucial. A restaurant that &quot;also offers halal&quot; operates differently from a restaurant where halal is the standard.</p>
                <p>Every supplier who delivers meat to Chopras is certified halal. The meat is stored separately, processed separately, cooked separately. This is not flexible or situational. This is how Chopras works, always.</p>
                <p>For Muslim communities in Den Haag and surrounding areas - Moroccan, Pakistani, Turkish, Indian - this means that every time they come to Chopras, they get the same standard. No questions, no doubts. Halal, complete, always.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Populaire Gerechten op het Halal Menu' : 'Popular Dishes on the Halal Menu'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { title: 'Kip Gerechten', items: 'Butter chicken, chicken tikka, tandoori chicken, chicken karahi, chicken biryani' },
              { title: 'Lamgerechten', items: 'Rogan josh, seekh kebab, lamb karahi, lamb biryani, keema matar' },
              { title: 'Vegetarisch', items: 'Dal makhani, chana masala, palak paneer, aloo gobi, paneer tikka' },
              { title: 'Specialiteiten', items: 'Tandoori fish, prawn curry, vegetable biryani, special breads' },
            ] : [
              { title: 'Chicken Dishes', items: 'Butter chicken, chicken tikka, tandoori chicken, chicken karahi, chicken biryani' },
              { title: 'Lamb Dishes', items: 'Rogan josh, seekh kebab, lamb karahi, lamb biryani, keema matar' },
              { title: 'Vegetarian', items: 'Dal makhani, chana masala, palak paneer, aloo gobi, paneer tikka' },
              { title: 'Specialties', items: 'Tandoori fish, prawn curry, vegetable biryani, special breads' },
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
            {isNl ? 'Halal Menu FAQ' : 'Halal Menu FAQ'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Halal Menu Bestellen' : 'Order Halal Menu'}
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
