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
    en: 'Pani Puri Den Haag | Chopras Indian Restaurant',
    nl: 'Pani Puri Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Pani puri (golgappa) at Chopras Den Haag. Crispy hollow puri, spiced potato, tangy water. Authentic Indian street food. Order now.',
    nl: 'Pani puri (golgappa) bij Chopras Den Haag. Krokante holle puri, gekruid aardappel, zure water. Authentiek Indiaas straatvoedsel.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/pani-puri-den-haag`,
      languages: {
        en: `${SITE_URL}/en/pani-puri-den-haag`,
        nl: `${SITE_URL}/nl/pani-puri-den-haag`,
        'x-default': `${SITE_URL}/en/pani-puri-den-haag`,
      },
    },
  }
}

export default function PaniPuriPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/pani-puri-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Pani Puri Den Haag' : 'Pani Puri Den Haag', item: `${SITE_URL}/${locale}/pani-puri-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              INDIAN STREET FOOD
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Pani Puri in Den Haag - Authentiek Indiaas Straatvoedsel bij Chopras' : 'Pani Puri in Den Haag - Authentic Indian Street Food at Chopras'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Krokante puri. Gekruid aardappel. Geurige water. Indiaas straatvoedsel recht uit Mumbai op Leyweg 986, Den Haag.' : 'Crispy puri. Spiced potato. Fragrant water. Indian street food straight from Mumbai to Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Is Pani Puri en Waarom Het Zo Speciaal Is' : 'What Is Pani Puri and Why It Is So Special'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Pani puri in Den Haag is niet iets wat je dagelijks in een Nederlands restaurant vindt. Het is een Indiaas straatvoedsel dat in elk straatje van Mumbai wordt verkocht, en het is één van de meest addictieve dingen die je naar je mond kunt brengen. Ook wel golgappa genoemd, pani puri is een kleine, holle, krokante bol gemaakt van meel - puri. Die puri wordt gevuld met gekookte aardappel die is gegarneerd met groene en rode chili, zoet en zuur mengsel, en Indische kruiden. Vervolgens wordt het gedompeld in de pani - een geheim mengsel van water, limoen, munt en kruiden die smaakt zuur, pittig en voelend.</p>
                <p>De ervaring van pani puri eten is niet zoals het eten van normale voedsel. Je pakt één beet, je dompelt hem helemaal onder in die pani, je kauwt, je slikt, je voelt hoe al die smaken tegelijkertijd in je mond exploderen. Het is zuur door de limoen. Het is pittig door de chili. Het is zoet door het mengsel. Het is kruidig door garam masala en chaat masala. En het is krokant totdat je het nat maakt. Die combinatie van texturen, smaken en temperaturen gebeurt in seconden. Het is kortstondig. Het is intens. Het is waarom pani puri erg verslavend is.</p>
                <p>Chopras serveert pani puri in Den Haag op dezelfde manier als het in India wordt geserveerd. De puri wordt die dag gebakken. De aardappel wordt die ochtend gekookt. De pani wordt vers gemaakt. Dit is geen voorgemaakte snack die uit een doos komt. Dit is straatvoedsel dat je straatvoedsel kunt voelen en proeven. Als je ooit in India bent geweest en pani puri hebt gegeten op een straathoek in Delhi of Mumbai, dan weet je wat je van Chopras kunt verwachten. Dezelfde geur. Dezelfde smaak. Dezelfde opwinding.</p>
                <p>Indian snacks in Den Haag kunnen moeilijk zijn om te vinden. Veel restaurants bieden de standaard curries, het brood, de biryani. Pani puri is anders. Het is voedsel dat snel is, voedsel dat je kunt eten terwijl je staat of loopt. Het is voedsel dat betrokken. Het is voedsel dat spreekt. Chopras biedt deze pani puri aan als onderdeel van onze volle chaat selectie. Als je echt authentiek Indiaas straatvoedsel wilt in Den Haag, je hebt het gevonden.</p>
              </>
            ) : (
              <>
                <p>Pani puri in Den Haag is not something you find every day in a Dutch restaurant. It is Indian street food sold on every corner of Mumbai, and it is one of the most addictive things you can put in your mouth. Also called golgappa, pani puri is a small, hollow, crispy ball made of dough - puri. That puri is filled with cooked potato seasoned with green and red chilli, sweet and sour mixture, and Indian spices. Then it is dipped in the pani - a secret mixture of water, lime, mint and spices that tastes sour, spicy and alive.</p>
                <p>The experience of eating pani puri is not like eating normal food. You pick one up, you dip it entirely in that pani, you chew, you swallow, you feel how all those flavours explode in your mouth at the same time. It is sour from the lime. It is spicy from the chilli. It is sweet from the mixture. It is spiced from garam masala and chaat masala. And it is crispy until you make it wet. That combination of textures, flavours and temperatures happens in seconds. It is fleeting. It is intense. It is why pani puri is so addictive.</p>
                <p>Chopras serves pani puri in Den Haag the way it is served in India. The puri is fried that day. The potato is cooked that morning. The pani is made fresh. This is not a pre-made snack from a box. This is street food that tastes like street food. If you have ever been to India and eaten pani puri on a street corner in Delhi or Mumbai, you know what to expect from Chopras. Same smell. Same taste. Same excitement. Indian street food in Den Haag does not have to be complicated. It can be simple, authentic, fast and perfect.</p>
                <p>Indian snacks in Den Haag can be hard to find. Many restaurants offer standard curries, bread, biryani. Pani puri is different. It is food that is quick, food you can eat while standing or walking. It is food that is involved. It is food that speaks. Chopras offers this pani puri as part of our full chaat selection. If you want truly authentic Indian street food in Den Haag, you have found it.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Pani Puri Wordt Gemaakt bij Chopras' : 'How Pani Puri Is Made at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Puri - Het Raamwerk</h3>
                <p>De puri begint met bloem - maida, niet tarwebloem. Het deeg wordt gemengd met water, zout en een klein beetje hing zuurstoffen. Het moet perfect elastisch zijn. Dan wordt het deeg geboekt in kleine ballen. Elke bal moet exact dezelfde grootte zijn. Dit is belangrijk omdat ze allemaal tegelijkertijd moeten bakken. Ze gaan in heel hete olie. De hitte mag niet te laag zijn, want dan worden ze oliehoudend. De hitte mag niet te hoog zijn, want dan branden ze voor ze helemaal opgeblazen zijn.</p>
                <p>Dit is waar veel restaurants hun fout begaan. Ze bakken de puri niet goed. Ze zijn niet krokant. Ze are niet hol. Ze zijn niet licht. Chopras bakt de puri op de juiste temperatuur, op het juiste moment, totdat ze precies puffed zijn, dus hol maar nog niet bruin. Dit gebeurt elke dag, twee, drie keer per dag, omdat we niet willen dat je stale puri eet.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Aardappelvulling</h3>
                <p>De aardappel wordt die ochtend gekookt. Geen voorbereide puree. Geen vorige dag restanten. Verse aardappels, gekookt totdat ze precies zacht zijn, niet mushy. Dan worden ze gesneden in kleine blokjes. Die blokjes worden gemengd met gekookte kikkererwten, fijngehakte groene chili, fijngehakte rode chili, zout, en een mengsel van kruiden - garam masala, chaat masala, kurkuma. Dit is waar de smaak begint. De aardappel is niet zacht en smakeloos. Het is voeld, gekruid, lebendig.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Pani - Het Geheim</h3>
                <p>De pani is waar pani puri echt om draait. Het water wordt gekookt en afgekoeld. Dan wordt het vermengd met fijngehakte munt, fijngehakte cilantro, gembermarkhaar, groene chili, garam masala, zwarte zoutval, limoensap, en een klein beetje water. Geen kunstmatige smaakmakers. Geen conserveermiddelen. Dit is een mengsel dat dezelfde ochtend is gemaakt. Dit is waarom het vers smaakt, waarom het voelt voelen, waarom het addictief is. Het smaakt zuur, pittig, zoet, kruidig. Het is alles tegelijk.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Montage</h3>
                <p>Wanneer iemand pani puri bestelt, gebeurt dit. Je naam roept. Onze chef pakt een puri. Terwijl hij hem vasthoudt, maakt hij een gat in de bovenkant met zijn duim. Dit is handig. Dit vereist jaren oefenen. Hij voelt het moment waarop de puri zal breken. Het gat kan niet te groot zijn. Het gat kan niet te klein zijn. Dan vullen wij hem met een lepel gekruid aardappel. Dan dompelen wij hem in de zoete saus - tamarinde, daten, jaggery. Dan voegen wij hem in de water. Nu heb je je pani puri. Je eet het meteen. Je voelt alles tegelijk.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Puri - The Framework</h3>
                <p>The puri starts with flour - maida, not wheat flour. The dough is mixed with water, salt and a tiny bit of aerating agent. It must be perfectly elastic. Then the dough is formed into small balls. Each ball must be exactly the same size. This matters because they all need to fry at the same time. They go into very hot oil. The heat cannot be too low or they become oily. The heat cannot be too high or they burn before they are fully puffed.</p>
                <p>This is where many restaurants go wrong. They do not fry the puri correctly. They are not crispy. They are not hollow. They are not light. Chopras fries the puri at the right temperature, at the right moment, until they are perfectly puffed - hollow but not brown. This happens every day, two, three times a day, because we do not want you to eat stale puri.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Potato Filling</h3>
                <p>The potato is cooked that morning. No pre-made puree. No leftovers from yesterday. Fresh potatoes, cooked until they are exactly tender, not mushy. Then they are cut into small pieces. Those pieces are mixed with cooked chickpeas, finely chopped green chilli, finely chopped red chilli, salt, and a mixture of spices - garam masala, chaat masala, turmeric. This is where the taste begins. The potato is not soft and flavourless. It is felt, spiced, alive.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Pani - The Secret</h3>
                <p>The pani is what pani puri is really about. The water is boiled and cooled. Then it is mixed with finely chopped mint, finely chopped cilantro, ginger matchsticks, green chilli, garam masala, black salt, lime juice, and a small amount of water. No artificial flavourings. No preservatives. This is a mixture made that same morning. This is why it tastes fresh, why it feels alive, why it is addictive. It tastes sour, spicy, sweet, spiced. It is everything at once.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Assembly</h3>
                <p>When someone orders pani puri, this happens. Your name is called. Our chef picks up a puri. While holding it, he makes a hole in the top with his thumb. This is skill. This requires years of practice. He feels the moment when the puri will crack. The hole cannot be too big. The hole cannot be too small. Then we fill it with a spoon of spiced potato. Then we dip it in the sweet sauce - tamarind, dates, jaggery. Then we drop it in the water. Now you have your pani puri. You eat it immediately. You feel everything at once.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen Over Pani Puri en Indiaas Straatvoedsel' : 'Frequently Asked Questions About Pani Puri and Indian Street Food'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? "Wat is golgappa?" : "What is golgappa?",
                a: isNl
                  ? "Golgappa is een ander woord voor pani puri. In Mumbai wordt het golgappa genoemd, in Delhi pani puri. In andere delen van India heeft het verschillende namen. Het is dezelfde lekkernij - holle puri gevuld met aardappel en ondergedompeld in water."
                  : "Golgappa is another word for pani puri. In Mumbai it is called golgappa, in Delhi pani puri. In other parts of India it has different names. It is the same delicacy - hollow puri filled with potato and dipped in water.",
              },
              {
                q: isNl ? "Kan ik pani puri vooraf bestellen?" : "Can I order pani puri ahead?",
                a: isNl
                  ? "Pani puri smaakt het beste vers. Gewoon vers gebakken puri, vers water, vers aardappel - allemaal tegelijk. Maak je reservering bij Chopras, bel ons, en wij maken je pani puri wanneer je aankomt. Dit is hoe het hoort te zijn."
                  : "Pani puri tastes best fresh. Just freshly fried puri, fresh water, fresh potato - all at the same time. Make your reservation at Chopras, call us, and we will make your pani puri when you arrive. This is how it should be.",
              },
              {
                q: isNl ? "Is pani puri vegetarisch?" : "Is pani puri vegetarian?",
                a: isNl
                  ? "Ja, volledig. Pani puri bestaat uit bloem, aardappel, kikkererwten, water, en kruiden. Er is geen vlees, geen vis, geen dierlijke producten. Het is vegetarisch, veganistisch en halal."
                  : "Yes, completely. Pani puri consists of flour, potato, chickpeas, water, and spices. There is no meat, no fish, no animal products. It is vegetarian, vegan and halal.",
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
            {isNl ? 'Meer Indiaas Straatvoedsel en Chaat-Specialiteiten' : 'More Indian Street Food and Chaat Specialties'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-6">
            {isNl
              ? 'Pani puri is slechts één van onze chaat-opties. Ons volledige menu bevat ook samosa, pakora, chaat, aloo tikki, en veel meer. Elk item wordt handgemaakt. Elk item wordt verse gemaaktmade met ingrediënten die die dag binnenkomen. Dit is echte Indiaas straatvoedsel, niet uit een vries- en verhitingspakket. Als je authentiek Indiaas straatvoedsel in Den Haag wilt, ben je op de juiste plaats.'
              : 'Pani puri is just one of our chaat options. Our full menu also includes samosa, pakora, chaat, aloo tikki, and much more. Each item is handmade. Each item is made fresh with ingredients that come in that day. This is real Indian street food, not from a freeze-and-heat packet. If you want authentic Indian street food in Den Haag, you have come to the right place.'
            }
          </p>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {isNl
              ? 'Laten we pani puri-liefde delen. Bezoek onze restaurant op Leyweg 986, Den Haag. Bestel online. Bel ons. Maak een reservering voor een volle diner ervaring. Wij zijn open dinsdag tot zondag. Wij willen je voelen wat authentiek Indiaas straatvoedsel is.'
              : 'Let us share the pani puri love. Visit our restaurant at Leyweg 986, Den Haag. Order online. Call us. Make a reservation for a full dining experience. We are open Tuesday to Sunday. We want you to feel what authentic Indian street food is.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`${base}/contact`}
              className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center"
            >
              {tr.common.reserve}
            </Link>
            <Link
              href={`${base}/menu`}
              className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center"
            >
              {tr.common.viewMenu}
            </Link>
            <Link
              href={`${base}/chaat-den-haag`}
              className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center"
            >
              {isNl ? 'Meer Chaat Ontdekken' : 'Explore More Chaat'}
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
            <Link href={`${base}/chaat-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Streetfood' : 'Street Food'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas straatvoedsel en chaat Den Haag' : 'Indian street food and chaat Den Haag'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/soya-chaap-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Soya Chaap Den Haag' : 'Soya Chaap Den Haag'}</p>
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
