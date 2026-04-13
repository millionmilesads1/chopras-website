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
    en: 'Mutton Rogan Josh in Den Haag | Chopras Indian Restaurant',
    nl: 'Lamsvlees Rogan Josh in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic mutton rogan josh Den Haag at Chopras Indian Restaurant. Halal lamb in a deep Kashmiri spice gravy. A signature North Indian dish at Leyweg 986.',
    nl: 'Authentieke lamsvlees rogan josh in Den Haag bij Chopras. Mals lam in geurige Kasjmiri saus. Dagelijks langzaam gegaard. Halal. Bestel online of bezoek Leyweg.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'mutton-rogan-josh-den-haag'),
      languages: { en: getLocalizedUrl('en', 'mutton-rogan-josh-den-haag'), nl: getLocalizedUrl('nl', 'mutton-rogan-josh-den-haag'), 'x-default': getLocalizedUrl('en', 'mutton-rogan-josh-den-haag') },
    },
  }
}

export default function MuttonRoganJoshPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'mutton-rogan-josh-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Rogan Josh Den Haag' : 'Rogan Josh Den Haag', item: getLocalizedUrl(locale, 'mutton-rogan-josh-den-haag') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Lamsvlees Rogan Josh in Den Haag' : 'Mutton Rogan Josh in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Mals lam in Kasjmiri saus. Langzaam gegaard. Geurig. Halal gecertificeerd. Leyweg 986, Den Haag.' : 'Tender lamb in Kashmiri sauce. Slow-cooked daily. Fragrant. Halal certified. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat is Mutton Rogan Josh?' : 'What is Mutton Rogan Josh?'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Rogan josh is een van de meest gereputeerde lamscurrys uit het Indiase subcontinent, met diepgewortelde wortels in Kasjmir. De naam &quot;rogan josh&quot; comes van &quot;rogan&quot; - olie of vet - en &quot;josh&quot; - hitte of passie. Dit is geen toevallige naam. Dit gerecht is hitte, passie en volle Kasjmiri smaak, gelaagd in elke lepel.</p>
                <p>Chopras serveert mutton rogan josh die echt is - niet de versimpelde versie die je in veel restaurants in Nederland vindt. Dit is lamsvlees dat tot goud braadstuk wordt, gesmolten in een saus die de hele dag is opgebouwd, met tomaten, Kasjmiri chilipepers, ginger-garlic paste, yoghurt, en een katern vol hele kruiden: zwarte kardemom, kaneel stok, laurierblad, kruidnagel.</p>
                <p>De troef van echte rogan josh is dat het geen &quot;curry sauce&quot; is - het is een saus die van scratch is gemaakt, elke dag opnieuw. Het lamsvlees wordt eerst gebraad tot het gouden en mals is, dan wordt het langzaam gegaard in deze opgebouwde saus totdat het vlees zo zacht is dat het van je lepel valt.</p>
              </>
            ) : (
              <>
                <p>Rogan josh is one of the most respected lamb curries from the Indian subcontinent, with deep roots in Kashmir. The name comes from &quot;rogan&quot; - oil or fat - and &quot;josh&quot; - heat or passion. This is not an accidental name. This dish is heat, passion and full Kashmiri flavour, layered in every spoonful.</p>
                <p>Chopras serves mutton rogan josh that is genuine - not the simplified version you find in many Dutch restaurants. This is lamb that becomes golden and melts into a sauce that has been building all day, with tomatoes, Kashmiri chillies, ginger - garlic paste, yoghurt, and a full notebook of whole spices: black cardamom, cinnamon stick, bay leaf, clove.</p>
                <p>The secret of true rogan josh is that it is not a &quot;curry sauce&quot; - it is a sauce made from scratch, every single day. The lamb is first seared until golden and tender, then slowly cooked in this developed sauce until the meat falls from your spoon.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Mutton Rogan Josh bij Chopras Wordt Gemaakt' : 'How Mutton Rogan Josh is Made at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">De Selectie van het Lamsvlees</h3>
                <p>We beginnen met <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link>-gecertificeerd lamsvlees van de schouder en benen - de betere sneden voor een langzame bereiding. Dit vlees heeft marmer van vet door het weefsel. Als je dat vlees slechts drie uur zachtjes gaaart, wordt het vlees mals en de vet wordt een zijde in de saus. Dit is een kukengeheim: schlechter vlees geeft je schlechter rogan josh. Alle onze lamsvlees wordt elke ochtend geselecteerd.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Het Branden van het Vlees</h3>
                <p>Het lamsvlees wordt gebraden in een mengsel van ghee en olie in een zware pan. Deze stap is niet voor smaak alleen - het zegelt het oppervlak en helpt de sappen binnenin te houden. We branden tot het vlees aan alle kanten goud is. Dit duurt zeker 20 minuten. Veel restaurants slaan deze stap over. Wij niet.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Het Bouwen van de Saus</h3>
                <p>Terwijl het vlees brandt, wordt de saus ingesteld. Verse tomaten worden in een pan gedaan met yoghurt, ginger-garlic paste, Kasjmiri rode chilipepers (niet voor hitte maar voor smaak en kleur), en een rist hele kruiden. Deze kruiden - zwarte kardemom, kaneel, laurier, kruidnagel, kurkuma - worden elke ochtend gemalen. Ze zijn niet uit een zak van vorig seizoen. Ze zijn vers. Ze geven geur, niet alleen smaak.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">De Langzame Garing</h3>
                <p>Het gebrande lam wordt in de saus gedaan. Alles wordt bedekt en gaat langzaam in de oven. Dit duurt drie uur. De saus wordt dikker, donkerder, ronderder. Het lam wordt teder. Na drie uur, is het vlees mals, is de saus zijde, en is rogan josh rogan josh - warm, volle smaak, met veel lagen van geur.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">The Selection of Lamb</h3>
                <p>We begin with <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link>-certified lamb from the shoulder and legs - the better cuts for slow cooking. This lamb has marbling of fat throughout the tissue. When you cook that lamb for just three hours on low heat, the meat becomes tender and the fat becomes silk in the sauce. This is a kitchen secret: poor lamb gives you poor rogan josh. All our lamb is hand-selected every morning.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">The Searing of the Meat</h3>
                <p>The lamb is seared in a blend of ghee and oil in a heavy pot. This step is not for flavour alone - it seals the surface and helps keep the juices inside. We sear until the lamb is golden on all sides. This takes at least 20 minutes. Many restaurants skip this step. We do not.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Building the Sauce</h3>
                <p>While the lamb sears, the sauce is set. Fresh tomatoes go into a pan with yoghurt, ginger - garlic paste, Kashmiri red chillies (not for heat but for taste and colour), and a full roster of whole spices. These spices - black cardamom, cinnamon, bay leaf, clove, turmeric - are ground every morning. They are not from a bag from last season. They are fresh. They give aroma, not just flavour.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">The Slow Cook</h3>
                <p>The seared lamb goes into the sauce. Everything is covered and goes slowly into the oven. This takes three hours. The sauce thickens, darkens, rounds out. The lamb becomes tender. After three hours, the meat is soft, the sauce is silk, and rogan josh is rogan josh - warm, full flavour, with many layers of aroma.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Veelgestelde Vragen over Rogan Josh' : 'Questions About Rogan Josh'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Wat is het verschil tussen rogan josh en andere lamscurrys?' : 'What is the difference between rogan josh and other lamb curries?',
                a: isNl ? 'Rogan josh is Kasjmiri - de saus is op tomaten en yoghurt gebaseerd met hele geroosterde kruiden, niet op coconut melk of room. Het accent is op geur en warmte, niet op hitte. Het lamsvlees moet mals en zijde zijn, niet stevig.' : 'Rogan josh is Kashmiri - the sauce is tomato and yoghurt-based with whole roasted spices, not on coconut milk or cream. The accent is on aroma and warmth, not on heat. The lamb must be tender and silk, not firm.'
              },
              {
                q: isNl ? 'Is het spicy hot?' : 'Is it spicy hot?',
                a: isNl ? 'Nee. Rogan josh wordt warm van de geroosterde kruiden, niet van chilipepers. Als je warmer wilt, kun je ons vragen het aan te passen. Maar dit is niet het type curry waar je moet zingen.' : 'No. Rogan josh gets warmth from the roasted spices, not from chillies. If you want it warmer, you can ask us to adjust it. But this is not the type of curry where you need to sing.'
              },
              {
                q: isNl ? 'Waarom duurt het zo lang om rogan josh te maken?' : 'Why does rogan josh take so long to make?',
                a: isNl ? 'Het lam moet mals worden. Dat kan niet snel. Als je het sneller doet, zal het vlees vezel zijn en zal de saus vlak zijn. Wij nemen de tijd. Dit is hoe het gemaakt hoort te worden.' : 'The lamb needs to become tender. That cannot be done quickly. If you do it faster, the meat will be stringy and the sauce will be flat. We take the time. This is how it is supposed to be made.'
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
            {isNl ? 'Rogan Josh Bestellen bij Chopras' : 'Order Rogan Josh at Chopras'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: isNl ? 'Lamsvlees Rogan Josh' : 'Mutton Rogan Josh', price: '€22.50', desc: isNl ? 'Mals lamsvlees in diepgeurige Kasjmiri saus' : 'Tender lamb in deep-flavoured Kashmiri sauce', href: null },
              { name: isNl ? 'Met Naan' : 'With Naan', price: '+€4.50', descBefore: isNl ? 'Vers ' : 'Fresh ', descWord: 'naan', descAfter: isNl ? ' om de saus op te schrapen' : ' to soak up every drop of sauce', href: '/naan-den-haag' },
            ].map((item) => (
              <div key={item.name} className="bg-[#FFFAF5] rounded-xl p-6 border-l-4 border-[#D4AF37]">
                <h3 className="font-heading text-xl text-[#1B2B5E] mb-1">{item.name} - {item.price}</h3>
                <p className="text-gray-600 text-sm">
                  {item.href ? (
                    <>{item.descBefore}<Link href={`${base}${item.href}`} className="text-[#D4AF37] hover:underline">{item.descWord}</Link>{item.descAfter}</>
                  ) : (
                    item.desc
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Dal Makhani' : 'Dal Makhani'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Meer Gerechten Ontdekken' : 'Explore More Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Signature Dish' : 'Signature Dish'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Lam Biryani in Den Haag' : 'Lamb Biryani in Den Haag'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze tandoori-specialiteiten in Den Haag' : 'Discover our tandoori specialities in Den Haag'}</p>
            </Link>
            <Link href={`${base}/naan-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Brood' : 'Bread'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Tandoori Naan Den Haag' : 'Tandoori Naan Den Haag'}</p>
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
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras Indian Restaurant Den Haag'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
