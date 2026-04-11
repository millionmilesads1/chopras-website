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
    en: 'Best Indian Restaurant in Den Haag | Chopras Indian Restaurant',
    nl: 'Beste Indiaas Restaurant in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Best Indian restaurant in Den Haag. Chopras serves authentic dishes made fresh daily. Award-winning taste.',
    nl: 'Beste Indiaas restaurant in Den Haag. Chopras serveert authentieke gerechtjes vers bereid. Prijswinnende smaak.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/beste-indiaas-restaurant-den-haag`,
      languages: { en: `${SITE_URL}/en/beste-indiaas-restaurant-den-haag`, nl: `${SITE_URL}/nl/beste-indiaas-restaurant-den-haag`, 'x-default': `${SITE_URL}/en/beste-indiaas-restaurant-den-haag` },
    },
  }
}

export default function BesteIndiaasPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/beste-indiaas-restaurant-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Beste Restaurant' : 'Best Restaurant', item: `${SITE_URL}/${locale}/beste-indiaas-restaurant-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • DISCOVER · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Beste Indiaas Restaurant in Den Haag' : 'Best Indian Restaurant in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Authentiek. Vers. Prijswaardig. Dit is waarom iedereen naar Chopras komt.' : 'Authentic. Fresh. Award-winning. This is why everyone comes to Chopras.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Waarom Chopras de Beste is' : 'Why Chopras is the Best'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Wat maakt een restaurant de beste? Het is niet inrichting. Het is niet naam. Het is voedsel. Is het echt? Is het vers? Is het gemaakt met zorg? Dit is wat Chopras is. We maken het eten beter dan iedereen in Den Haag, en dat is waarom iedereen naar ons komt.</p>
                <p>Onze curry wordt niet gemaakt van curry poeder uit een zak. Onze biryani wordt niet gemaakt met voorgekookte rijst. Onze naan wordt niet gemaakt van vriesdeurogen. Alles wordt gemaakt van scratch, elke dag, met verse ginger, verse garlic, verse kruiden. Dit is het verschil dat je proeft.</p>
                <p>Iedereen die Chopras proeft, weet dat dit het beste Indiaas restaurant in Den Haag is. Je kunt het voelen in je mond. Je kunt het voelen in je buik. Dit is echte eten, echte smaak, echte warmte. Dit is waarom je altijd terugkomt.</p>
              </>
            ) : (
              <>
                <p>What makes a restaurant the best? It is not decor. It is not name. It is food. Is it genuine? Is it fresh? Is it made with care? This is what Chopras is. We make food better than anyone in Den Haag, and that is why everyone comes to us.</p>
                <p>Our curry is not made from curry powder from a bag. Our biryani is not made with pre-cooked rice. Our naan is not made from thawed dough. Everything is made from scratch, every day, with fresh ginger, fresh garlic, fresh spices. This is the difference you taste.</p>
                <p>Everyone who tries Chopras knows that this is the best Indian restaurant in Den Haag. You can feel it in your mouth. You can feel it in your stomach. This is real food, real taste, real warmth. This is why you always come back.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Onze Sterkte Punten' : 'Our Strengths'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Vers Voedsel</h3>
                <p>Alles wordt gemaakt op moment. Je hoeft niet te wachten op voorgekookt voedsel dat heeft gestaan. Je eet wat net uit onze keuken is gekomen.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Authentieke Smaken</h3>
                <p>We maken eten zoals het in India wordt gemaakt. Niet aangepast voor Nederlandse tong. Niet verdund. Niet gewijzigd. Dit is Indiaas eten, echt en vol.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Dagelijks Vers</h3>
                <p>Onze kruiden worden elke ochtend gemalen. Onze ginger en garlic worden elke ochtend gesneden. Dit is hoe je eten smakelijk en geurig houdt.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Halal Gecertificeerd</h3>
                <p>Al ons vlees is halal. We respecteren tradities en voorkeur. Dit is hoe je gasten zich welkom voelen.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Fresh Food</h3>
                <p>Everything is made at the moment. You do not have to wait for pre-cooked food that has been sitting. You eat what just came out of our kitchen.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Authentic Flavours</h3>
                <p>We make food the way it is made in India. Not adapted for Dutch taste. Not watered down. Not changed. This is Indian food, genuine and full.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Daily Fresh</h3>
                <p>Our spices are ground every morning. Our ginger and garlic are cut every morning. This is how you keep food delicious and fragrant.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Halal Certified</h3>
                <p>All our meat is halal. We respect traditions and preferences. This is how your guests feel welcome.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Mensen Zeggen' : 'What People Say'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Waarom kiezen mensen voor Chopras?' : 'Why do people choose Chopras?',
                a: isNl ? 'Omdat het voedsel authentiek is. Omdat het vers is. Omdat het lekker is. Omdat ze zich welkom voelen. Omdat we het goed doen, elke dag.' : 'Because the food is authentic. Because it is fresh. Because it tastes good. Because they feel welcome. Because we do it well, every day.'
              },
              {
                q: isNl ? 'Is Chopras duur?' : 'Is Chopras expensive?',
                a: isNl ? 'Nee. Voor wat je krijgt - echt voedsel, vers voedsel, goed voedsel - zijn we heel redelijk geprijsd.' : 'No. For what you get - real food, fresh food, good food - we are very fairly priced.'
              },
              {
                q: isNl ? 'Hoe vaak komen mensen terug?' : 'How often do people come back?',
                a: isNl ? 'Veel mensen komen elke week. Sommigen twee keer per week. Ze weten dat ze hier het beste Indiaas eten krijgen, dus waarom zouden ze ergens anders heen gaan?' : 'Many people come every week. Some come twice a week. They know they get the best Indian food here, so why would they go anywhere else?'
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
            {isNl ? 'Proef het Zelf' : 'Taste It Yourself'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/family-restaurant-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Familie Restaurant' : 'Family Restaurant'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Onze Specialiteiten' : 'Explore Our Specialities'}
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
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas buffet voor evenementen' : 'Indian catering for events'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
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
