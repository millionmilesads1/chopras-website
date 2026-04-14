import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Halal Food Den Haag | Chopras Indian Restaurant',
    nl: 'Halal Eten Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Halal food Den Haag. Chopras Indian Restaurant is fully halal certified. Biryani, tandoori and curries. Open Tuesday to Sunday at Leyweg 986 Den Haag.',
    nl: 'Volledig halal-gecertificeerd Indiaas restaurant in Den Haag. Authentieke curry, biryani, tandoori en street food van Chopras op Leyweg 986. Dagelijks open.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'halal-food-den-haag'),
      languages: { en: getLocalizedUrl('en', 'halal-food-den-haag'), nl: getLocalizedUrl('nl', 'halal-food-den-haag'), 'x-default': getLocalizedUrl('en', 'halal-food-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'halal-food-den-haag'),
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

export default function HalalFoodPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const faqItems = isNl ? [
    { question: 'Is Chopras volledig halal gecertificeerd?', answer: 'Ja. Chopras is een volledig halal-gecertificeerd restaurant. Al het vlees is afkomstig van gecertificeerde halal-leveranciers. De keuken werkt door en door volgens halalstandaarden. Er is geen niet-halal vlees aanwezig in het pand. Dit is geen gedeeltelijke of selectieve certificering  -  het heeft betrekking op de gehele bedrijfsvoering.' },
    { question: 'Welke gerechten zijn halal bij Chopras?', answer: 'Elk vlees- en gevogeltegerecht bij Chopras is halal. Alle kip-, lams-, schapen- en visgerechten worden bereid met vlees van gecertificeerde halal-leveranciers. De vegetarische en veganistische gerechten bevatten per definitie geen vlees. Het volledige menu  -  niet-vegetarisch en vegetarisch  -  is beschikbaar zonder beperking voor halal-nalevers.' },
    { question: 'Doen jullie ook halal catering voor evenementen en bruiloften?', answer: 'Ja. Chopras verzorgt volledige halal-evenementencatering voor bruiloften, Nikah-recepties, Walima-diners, Eid-vieringen, zakelijke evenementen en privéfeesten. Alle catering  -  of het nu in onze eigen evenementenhal of op een externe locatie is  -  wordt uitgevoerd volgens dezelfde halalstandaarden als het restaurant.' },
    { question: 'Is het volledige menu halal?', answer: 'Al het vlees op het menu  -  kip, lam, schapen en zeevruchten  -  is halal. De vegetarische en veganistische gerechten bevatten geen vlees. Er zijn geen niet-halal vleesopties op het Chopras-menu.' },
    { question: 'Hoe weet ik zeker dat het eten echt halal is?', answer: 'Chopras werkt uitsluitend met leveranciers die gecertificeerde halalcertificaten kunnen overleggen. De keukenoperatie  -  van opslag tot bereiding tot service  -  verloopt zonder enige blootstelling aan niet-halalvlees of -producten. Als u specifieke documentatie wilt, neem dan contact met ons op.' },
  ] : [
    { question: 'Is Chopras fully halal certified?', answer: 'Yes. Chopras is a fully halal-certified restaurant. All meat is sourced from certified halal suppliers. The kitchen operates to halal standards throughout. There is no non-halal meat on the premises. This is not a partial or selective certification  -  it covers the entire operation.' },
    { question: 'Which dishes are halal at Chopras?', answer: 'Every meat and poultry dish at Chopras is halal. All chicken, lamb, mutton, and seafood dishes are prepared with meat from certified halal suppliers. The vegetarian and vegan dishes contain no meat by definition. The entire menu  -  non-vegetarian and vegetarian  -  is available without restriction for halal-observant guests.' },
    { question: 'Do you cater halal for events and weddings?', answer: 'Yes. Chopras provides full halal event catering for weddings, Nikah receptions, Walima dinners, Eid celebrations, corporate events, and private parties. All catering  -  whether at our own event hall or at an external venue  -  is carried out to the same halal standards as the restaurant.' },
    { question: 'Is the entire menu halal?', answer: 'All meat on the menu  -  chicken, lamb, mutton and seafood  -  is halal. The vegetarian and vegan dishes contain no meat. There are no non-halal meat options on the Chopras menu.' },
    { question: 'How can I be sure the food is genuinely halal?', answer: 'Chopras works exclusively with suppliers who can provide certified halal documentation. The kitchen operation  -  from storage through preparation to service  -  runs without any exposure to non-halal meat or products. If you want specific documentation, contact us directly.' },
  ]

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'halal-food-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Halal Eten Den Haag' : 'Halal Food Den Haag', item: getLocalizedUrl(locale, 'halal-food-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(faqItems)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • MENU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Halal Eten in Den Haag  -  Volledig Gecertificeerd bij Chopras' : 'Halal Food in Den Haag  -  Fully Certified at Chopras'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Volledig halal-gecertificeerd Indiaas restaurant. Al het vlees van gecertificeerde leveranciers. Elke keer. Leyweg 986, Den Haag.' : 'Fully halal-certified Indian restaurant. All meat from certified suppliers. Every time. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Halal bij Chopras  -  Wat Dit Betekent' : 'Halal at Chopras  -  What This Means'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Chopras is een volledig halal-gecertificeerd Indiaas restaurant in Den Haag  -  niet een restaurant met een halal-optie, maar één waarbij de gehele keuken werkt volgens halalstandaarden. Het woord wordt breed gebruikt in Den Haag. Dit is wat het bij Chopras concreet betekent: elke leverancier levert gecertificeerde documentatie, al het vlees wordt gescheiden behandeld van aankomst tot bereiding, en er is geen niet-halal vlees op het pand aanwezig.</p>
                <p>Alle kip-, lams- en schapengerechten zijn afkomstig van leveranciers met gecertificeerde halaldocumentatie. De keuken verwerkt geen vlees dat niet halal gecertificeerd is. Dit is niet selectief of situationeel  -  het is de standaard voor elk gerecht, elke dienst, elke dag.</p>
                <p>U hoeft niet te vragen of te controleren. Het antwoord is altijd hetzelfde: volledig halal, gecertificeerde leveranciers, de gehele keuken. Als u specifieke leveranciersdocumentatie wilt, kunnen wij dit verstrekken  -  vraag er gewoon naar.</p>
              </>
            ) : (
              <>
                <p>Chopras is a fully halal-certified Indian restaurant in Den Haag  -  not a restaurant with a halal option, but one where the entire kitchen operates to halal standards. The word gets used loosely across Den Haag. Here is what it means at Chopras specifically: every supplier provides certified documentation, all meat is handled separately from arrival through preparation, and there is no non-halal meat on the premises.</p>
                <p>All chicken, lamb and mutton dishes are sourced from suppliers with certified halal documentation. The kitchen does not handle any meat that is not halal certified. This is not selective or situational  -  it is the standard for every dish, every service, every day.</p>
                <p>You do not need to ask or check. The answer is always the same: fully halal, certified suppliers, the entire kitchen. If you want specific supplier documentation, we can provide it  -  just ask.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Halal Eten op het Chopras Menu' : 'Halal Food on the Chopras Menu'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {(isNl ? [
              { cat: 'Kip Gerechten', items: 'Butter chicken, chicken tikka, chicken tikka masala, chicken biryani, chicken korma, tandoori kip, chicken karahi' },
              { cat: 'Lam Gerechten', items: 'Rogan josh, lambiryani, seekh kebab, lamb karahi, keema matar, lamb korma' },
              { cat: 'Seafood', items: 'Garnalencurry, visgerechten  -  uitsluitend bereide vis; geen schelpdieren die niet halalcompatibel zijn' },
              { cat: 'Vegetarisch en Veganistisch', items: 'Dal makhani, chana masala, palak paneer, aloo gobi, vegetable biryani, paneer tikka  -  volledig vrij van vleesproducten' },
            ] : [
              { cat: 'Chicken Dishes', items: 'Butter chicken, chicken tikka, chicken tikka masala, chicken biryani, chicken korma, tandoori chicken, chicken karahi' },
              { cat: 'Lamb Dishes', items: 'Rogan josh, lamb biryani, seekh kebab, lamb karahi, keema matar, lamb korma' },
              { cat: 'Seafood', items: 'Prawn curry, fish dishes  -  prepared fish only; no shellfish that are not halal-compatible' },
              { cat: 'Vegetarian and Vegan', items: 'Dal makhani, chana masala, palak paneer, aloo gobi, vegetable biryani, paneer tikka  -  completely free of meat products' },
            ]).map((item) => (
              <div key={item.cat} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-2">{item.cat}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen over Halal bij Chopras' : 'Frequently Asked Questions About Halal at Chopras'}
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="border-l-4 border-[#D4AF37] bg-white/10 rounded-r-xl">
                <summary className="px-6 py-4 cursor-pointer text-white font-bold text-lg list-none">{question}</summary>
                <p className="px-6 pb-5 pt-2 text-white/80 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Halal Gerechten' : 'Explore Halal Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'De beroemde roomkip van Chopras' : 'Chopras famous butter chicken'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Gegrilde specialiteiten' : 'Grilled specialities'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil medley'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Halal Restaurant Den Haag - volledige halal certificering' : 'Chopras Halal Restaurant Den Haag - fully halal certified'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
