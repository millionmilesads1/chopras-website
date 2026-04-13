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
    en: 'Indian Wedding Catering in Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Bruiloft Catering in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Bruiloft catering Den Haag bij Chopras Indian Restaurant. Authentiek Indiaas eten voor uw trouwdag. Volledig halal. Bel ons voor een vrijblijvende offerte vandaag.',
    nl: 'Bruiloft catering Den Haag bij Chopras Indian Restaurant. Authentiek Indiaas eten voor uw trouwdag. Volledig halal. Bel ons voor een vrijblijvende offerte vandaag.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'bruiloft-catering-den-haag'),
      languages: { en: getLocalizedUrl('en', 'bruiloft-catering-den-haag'), nl: getLocalizedUrl('nl', 'bruiloft-catering-den-haag'), 'x-default': getLocalizedUrl('en', 'bruiloft-catering-den-haag') },
    },
  }
}

export default function BruiloftCateringPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'bruiloft-catering-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Bruiloft Catering' : 'Wedding Catering', item: getLocalizedUrl(locale, 'bruiloft-catering-den-haag') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Bruiloft Catering in Den Haag' : 'Indian Wedding Catering in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Je Grote Dag. Authentiek Indiaas Eten. Familie. Feest. Wij doen het allemaal.' : 'Your Big Day. Authentic Indian Food. Family. Celebration. We do it all.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indiaas Bruiloft Catering bij Chopras' : 'Indian Wedding Catering at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Een Indiaase bruiloft is veel meer dan eten. Het is een viering van twee families die samenkomen, van tradities die teruggaan eeuwen, van liefde die generaties verbindt. En het eten op die dag moet dat alles weerspiegelen. Het moet authentiek zijn, lekker zijn, en duurzaam. Dit is wat we bij Chopras voor je doen.</p>
                <p>We hebben decennia ervaring met het serveren van Indiaase bruiloften. We kennen de tradities. We begrijpen wat je nodig hebt. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link> voor honderd mensen? <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>? Vegetarische gerechtjes naast vleesgerechten? Halal? Gluten-vrij? We doen het allemaal, en we doen het met de eer die het moment verdient.</p>
                <p>Dit is niet alleen eten bezorgen. Dit is een partnering. We werken met jou samen van begin tot einde, we zorgen voor de details, we stellen zeker dat alles perfect is. Je bruiloft verdient echte aandacht, echte vakmanschap, en echte warmte. Dat is wat we geven.</p>
              </>
            ) : (
              <>
                <p>An Indian wedding is much more than food. It is a celebration of two families coming together, of traditions that go back centuries, of love that binds generations. And the food on that day must reflect all of that. It must be authentic, delicious, and lasting. This is what we do at Chopras for you.</p>
                <p>We have decades of experience serving Indian weddings. We know the traditions. We understand what you need. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link> for a hundred people? <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>? Vegetarian dishes alongside meat dishes? Halal? Gluten - free? We do it all, and we do it with the honour the moment deserves.</p>
                <p>This is not just delivering food. This is a partnership. We work with you from start to finish, we look after the details, we ensure that everything is perfect. Your wedding deserves real attention, real skill, and real warmth. That is what we give.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Bruiloft Catering Opties' : 'Wedding Catering Options'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Voorgerechten en Snacks</h3>
                <p>Samosas, pakora, kebabs, tandoori snacks - alles vers. Dit wordt geserveerd terwijl je gasten aankomen, terwijl ze lachen, terwijl ze familieleden zien die ze lang niet hebben gezien.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Hoofd Gangen</h3>
                <p>Biryani. Tandoori kip, vis, lam. Dal. Groente curries. Paneer dishes. Elk gerecht is gemaakt met dezelfde zorg die je zou gebruiken als je thuis aan het koken was. Niets voorgekookt. Niets uit een jar.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Brood</h3>
                <p>Naan, roti, paratha - alles uit onze tandoor. Vers. Heet. Dit is de voet van het eten, en we maken het goed.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Zoet Eindigt</h3>
                <p>Kheer. Gulab jamun. Ras malai. Rasgulla. Traditionele Indiaase zoetigheden die je vertellen dat de maaltijd voorbij is, maar dat het moment niet voorbij is.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Appetizers and Snacks</h3>
                <p>Samosas, pakora, kebabs, tandoori snacks - all fresh. This is served as your guests arrive, as they laugh, as they see family members they have not seen in a long time.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Main Courses</h3>
                <p>Biryani. Tandoori chicken, fish, lamb. Dal. Vegetable curries. Paneer dishes. Each dish is made with the same care you would use if you were cooking at home. Nothing pre-cooked. Nothing from a jar.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Bread</h3>
                <p>Naan, roti, paratha - all from our tandoor. Fresh. Hot. This is the foundation of the meal, and we make it well.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Sweet Endings</h3>
                <p>Kheer. Gulab jamun. Ras malai. Rasgulla. Traditional Indian sweets that tell you the meal is over, but that the moment is not.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Bruiloft FAQ' : 'Wedding FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoe veel tijd van tevoren moet ik boeken?' : 'How much time in advance should I book?',
                a: isNl ? 'Voor een bruiloft van honderd of meer gasten, raden we ten minste drie maanden vooraf aan. Dit geeft ons tijd om met je samen te werken aan het menu en de details.' : 'For a wedding of one hundred or more guests, we recommend at least three months in advance. This gives us time to work with you on the menu and details.'
              },
              {
                q: isNl ? 'Kun je vegetarische en vlees gerechten beide leveren?' : 'Can you provide both vegetarian and meat dishes?',
                a: isNl ? 'Ja, absoluut. De meeste bruiloften hebben beide. We bereiden ze afzonderlijk om contamatie te voorkomen, en alles wordt geserveerd met gelijke liefde.' : 'Yes, absolutely. Most weddings have both. We prepare them separately to prevent contamination, and everything is served with equal care.'
              },
              {
                q: isNl ? 'Wat is inbegrepen in de prijs?' : 'What is included in the price?',
                a: isNl ? 'Menu design, voorbereiding, bezorging, opzet, serveerders, borden, bestek, servetten, alles. De enige kosten die je hebt zijn voor eten en service. Niets verborgen.' : 'Menu design, preparation, delivery, setup, servers, plates, utensils, napkins, everything. The only costs you have are for food and service. Nothing hidden.'
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
            {isNl ? 'Plan je Bruiloft' : 'Plan Your Wedding'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Offerte Aanvragen' : 'Request Quote'}
            </a>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Feestzaal Huren voor Bruiloft Den Haag' : 'Bruiloft Venue Hire Den Haag'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Populaire Catering Gerechten' : 'Popular Catering Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Gegrilde specialiteiten' : 'Grilled specialities'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil medley'}</p>
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'De beroemde roomkip van Chopras' : 'Chopras famous butter chicken'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Catering - voor al uw celebraties' : 'Chopras Catering - for all your celebrations'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor een offerte of meer informatie,' : 'For a quote or more information,'} <a href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'neem contact op met ons team' : 'contact our catering team'}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
