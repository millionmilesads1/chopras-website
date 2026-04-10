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
    en: 'Dal Makhani Den Haag | Chopras Indian Restaurant',
    nl: 'Dal Makhani Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Dal makhani at Chopras Den Haag. Creamy black lentil curry slow-cooked with tomato and spices. Vegetarian comfort food. Order now.',
    nl: 'Dal makhani bij Chopras Den Haag. Romige zwarte linzen curry langzaam gegaard met tomaat en kruiden. Vegetarisch comfort food.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/dal-makhani-den-haag`,
      languages: {
        en: `${SITE_URL}/en/dal-makhani-den-haag`,
        nl: `${SITE_URL}/nl/dal-makhani-den-haag`,
        'x-default': `${SITE_URL}/en/dal-makhani-den-haag`,
      },
    },
  }
}

export default function DalMakhaniPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/dal-makhani-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag', item: `${SITE_URL}/${locale}/dal-makhani-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C7A348] opacity-60" />
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">VEGETARIAN CURRY</span>
            <div className="h-px w-12 bg-[#C7A348] opacity-60" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Dal Makhani in Den Haag - Romige Linzen Curry bij Chopras' : 'Dal Makhani in Den Haag - Creamy Lentil Curry at Chopras'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Zwarte linzen. Romig. Tomatig. Comfort voedsel. Langzaam gegaard op Leyweg 986, Den Haag.' : 'Black lentils. Creamy. Tomatoey. Comfort food. Slow-cooked at Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Dal Makhani het Ultieme Vegetarische Gerecht Is' : 'Why Dal Makhani Is the Ultimate Vegetarian Dish'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Dal makhani in Den Haag is <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarisch</Link> voedsel dat niemand voelt als minder dan vlees. Het is een voedsel dat vleeseters en vegetarianen allebei adoreren. Dit is omdat het niet voelt als voedselvervanging. Het voelt als comfort voedsel dat al duizenden jaren bestaat. Zwarte linzen - urad dal genoemd - werden in Indische voedsel gebruikt lang voordat iemand vegetarische producten uitvond. Het is een oud voedsel. Het is een serieus voedsel. En het smaakt ongeloflijk.</p>
                <p>Indian lentils worden gebruikt in duizenden recepten, maar dal makhani is misschien het meest beroemd. Het is het gerecht dat mensen op Instagram plaatsen. Het is het gerecht dat restaurants adverteren. Dit is omdat het uitziet geweldig - diep rood, bijna paars van kleur, glad en voelt. En het smaakt nog beter dan het uitziet. Dit is een voedsel dat je laat voelen als je in Punjab bent, in het hart van India, waar dit gerecht thuishoort.</p>
                <p>Vegetarische Indian mains in Den Haag zijn moeilijk te vinden. Veel restaurants behandelen vegetarische gerechten alsof ze een voetnoot zijn. Chopras behandelt dal makhani als het hoofdgerecht dat het is. We koken het met dezelfde zorg en aandacht als onze vlees curries. De linzen worden de dag eerder ingeweekt. Ze worden die ochtend gekookt totdat ze volledig zacht zijn. De saus wordt gebouwd in lagen - tomaat, ginger, garlic, cream, butter, spices - elk moment voegt meer smaak.</p>
                <p>Dit is waarom vegetarisch Indiaas voedsel niet hoeft in te leveren. Dit is waarom dal makhani zo populair is geworden. Het is echt voedsel met echte smaak, geen compromis.</p>
              </>
            ) : (
              <>
                <p>Dal makhani in Den Haag is <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarian</Link> food that no one feels as less than meat. It is food that meat-eaters and vegetarians both adore. This is because it does not feel like food substitution. It feels like comfort food that has existed for thousands of years. Black lentils - called urad dal - were used in Indian food long before anyone invented vegetarian products. It is old food. It is serious food. And it tastes incredible.</p>
                <p>Indian lentils are used in thousands of recipes, but dal makhani is perhaps the most famous. It is the dish people post on Instagram. It is the dish restaurants advertise. This is because it looks amazing - deep red, almost purple in colour, smooth and feels luxurious. And it tastes even better than it looks. This is food that makes you feel like you are in Punjab, in the heart of India, where this dish belongs.</p>
                <p>Vegetarian Indian mains in Den Haag are hard to find. Many restaurants treat vegetarian dishes as if they are a footnote. Chopras treats dal makhani as the main dish it is. We cook it with the same care and attention as our meat curries. The lentils are soaked the day before. They are cooked that morning until completely tender. The sauce is built in layers - tomato, ginger, garlic, cream, butter, spices - each moment adds more taste.</p>
                <p>This is why vegetarian Indian food does not have to compromise. This is why dal makhani has become so popular. It is real food with real taste, no compromise.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Dal Makhani Wordt Gemaakt' : 'How Dal Makhani Is Made'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Linzen Voorbereiding</h3>
                <p>Urad dal wordt gekocht heel - niet gepeld. Ze worden gereinigd en geinspecteerd. Vuil wordt verwijderd. Dan worden ze in water geweekt, meestal de hele nacht. Dit zacht het dal en maakt het klaar voor koken. De volgende dag worden ze afgeleid en in vers water gekookt. Dit duurt ongeveer een half uur totdat ze volledig zacht zijn, bijna brij.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Saus Opbouwen</h3>
                <p>De saus begint met uien in boter totdat ze goud en zacht zijn. Dan verse gember en knoflook die die ochtend in een vijzel zijn gestampt. Vers tomaten - niet uit blik - worden lange tijd gesneden totdat ze volledig zijn afgebroken. Dan tandoori masala, garam masala, rode chili poeder. Zout. Dan rijkelijke room en echte boter worden toegevoegd. Dit maakt het voedsel voelen zacht, voelen voelen, voelen luxe.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Het Langzaam Koken</h3>
                <p>De gekookte dal gaat in de saus. Dan kookt het langzaam, minstens dertig minuten, meestal langer. De saus wordt dieper rood. Het dal absorbeert alle smaak. De room verdikt. De boter vermengt zich. Dit is wanneer dal makhani echt dal makhani wordt.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Lentil Preparation</h3>
                <p>Urad dal is bought whole - not split. They are cleaned and inspected. Dirt is removed. Then they are soaked in water, usually overnight. This softens the dal and prepares it for cooking. The next day they are drained and cooked in fresh water. This takes about half an hour until completely tender, almost mushy.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Building the Sauce</h3>
                <p>The sauce starts with onions in butter until golden and soft. Then fresh ginger and garlic that were pounded in a mortar that morning. Fresh tomatoes - not tinned - are cooked down over long time until completely broken down. Then tandoori masala, garam masala, red chilli powder. Salt. Then rich cream and real butter are added. This makes the food feel soft, feel luxurious, feel complete.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Slow Cooking</h3>
                <p>The cooked dal goes into the sauce. Then it cooks slowly, at least thirty minutes, usually longer. The sauce becomes deeper red. The dal absorbs all the taste. The cream thickens. The butter mingles. This is when dal makhani truly becomes dal makhani.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen Over Dal Makhani' : 'Frequently Asked Questions About Dal Makhani'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? "Wat zijn urad dal?" : "What are urad dal?",
                a: isNl
                  ? "Urad dal zijn zwarte linzen. Ze zijn klein, rond, en zwart. Ze worden veel gebruikt in Indiaas voedsel. Dal makhani is gemaakt van urad dal, die wordt gekookt totdat volledig zacht en romig."
                  : "Urad dal are black lentils. They are small, round, and black. They are used widely in Indian food. Dal makhani is made from urad dal, which is cooked until completely tender and creamy.",
              },
              {
                q: isNl ? "Hoe smaakt dal makhani?" : "What does dal makhani taste like?",
                a: isNl
                  ? "Dal makhani smaakt zacht, romig, licht zoet van de room en boter, zuur van de tomaat, pittig van de chili, en voelt voelt voelt van de kruiden. Het is comfort voedsel. Gemak. Thuis."
                  : "Dal makhani tastes soft, creamy, lightly sweet from the cream and butter, sour from the tomato, spicy from the chilli, and feels complete from the spices. It is comfort food. Ease. Home.",
              },
              {
                q: isNl ? "Is dal makhani gezond?" : "Is dal makhani healthy?",
                a: isNl
                  ? "Dal is voedzaam - linzen zijn voorzien van proteïne en fiber. Maar dal makhani bevat room en boter, dus het is niet laag calorie. Het is voedsel dat je geniet in bescheiden porties, niet iets dat je kan elke dag eten. Maar voedsel voelt hoop."
                  : "Dal is nourishing - lentils are full of protein and fibre. But dal makhani contains cream and butter, so it is not low calorie. It is food you enjoy in modest portions, not something you eat every day. But real food is worth it.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="border-l-4 border-[#D4AF37] bg-white/10 rounded-r-xl">
                <summary className="px-6 py-4 cursor-pointer text-white font-bold text-lg list-none">{q}</summary>
                <p className="px-6 pb-5 pt-2 text-white/80 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Dal Makhani Bestellen' : 'Order Dal Makhani'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {isNl ? (
              <>Voeg dal makhani toe aan je bestelling. Eet het met <Link href={`${base}/naan-den-haag`} className="text-[#D4AF37] hover:underline">naan</Link>. Eet het met rijst. Voelde het voelen. Dit is voedsel dat je voelt als thuis. Bezoek Chopras op Leyweg 986, Den Haag. Open dinsdag tot zondag.</>
            ) : (
              <>Add dal makhani to your order. Eat it with <Link href={`${base}/naan-den-haag`} className="text-[#D4AF37] hover:underline">naan</Link>. Eat it with rice. Feel the comfort. This is food that feels like home. Visit Chopras at Leyweg 986, Den Haag. Open Tuesday to Sunday.</>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/soya-chaap-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Meer Vegetarisch Verkennen' : 'Explore More Vegetarian'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Meer Gerechten Ontdekken' : 'Explore More Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze tandoori-specialiteiten in Den Haag' : 'Discover our tandoori specialities in Den Haag'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Boter Kip' : 'Butter Chicken'}</p>
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
