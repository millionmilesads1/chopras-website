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
    en: 'Family Restaurant in Den Haag | Chopras Indian Restaurant',
    nl: 'Familie Restaurant in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Family-friendly Indian restaurant in Den Haag. Chopras welcomes families with kids. Authentic food for everyone.',
    nl: 'Familie vriendelijk Indiaas restaurant in Den Haag. Chopras verwelkomt families met kinderen. Authentiek eten voor iedereen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/family-restaurant-den-haag`,
      languages: { en: `${SITE_URL}/en/family-restaurant-den-haag`, nl: `${SITE_URL}/nl/family-restaurant-den-haag`, 'x-default': `${SITE_URL}/en/family-restaurant-den-haag` },
    },
  }
}

export default function FamilyRestaurantPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/family-restaurant-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Familie Restaurant' : 'Family Restaurant', item: `${SITE_URL}/${locale}/family-restaurant-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • DISCOVER · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Familie Restaurant in Den Haag' : 'Family Restaurant in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Voor families. Met kinderen. Warm. Welkom. Indiaas eten voor iedereen.' : 'For families. With children. Warm. Welcome. Indian food for everyone.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Chopras is een Familie Restaurant' : 'Chopras is a Family Restaurant'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Je wilt je kinderen meenemen naar een Indiaas restaurant. Maar je weet niet of het zal werken. Zal het luid zijn? Zal het voedsel te spicy zijn voor hen? Zal je je welkom voelen? Dit is waarom families naar Chopras gaan. We kennen families. We verwelkomen hen. We zorgen ervoor dat iedereen zich happy voelt.</p>
                <p>Onze ruimte is warm en gastvrij. Je kunt je kinderen laten zitten en ze voelen zich veilig. Het voedsel is niet allemaal spicy. We hebben mild opties. We hebben vegetarisch opties. We hebben gewone voedsel voor kinderen - naan, rijst, zachtere curries. Je kinderen zullen het eten.</p>
                <p>We begrijpen dat kinderen soms lawaai maken. Dit is oké. Dit is een familie restaurant. Je hoeft je niet schuldig te voelen. Je bent hier welkom. Je kinderen zijn hier welkom. Dit is wat een familie restaurant is.</p>
              </>
            ) : (
              <>
                <p>You want to take your children to an Indian restaurant. But you do not know if it will work. Will it be loud? Will the food be too spicy for them? Will you feel welcome? This is why families come to Chopras. We know families. We welcome them. We make sure everyone feels happy.</p>
                <p>Our space is warm and hospitable. You can sit your children down and they feel safe. The food is not all spicy. We have mild options. We have vegetarian options. We have regular food for children - naan, rice, softer curries. Your children will eat it.</p>
                <p>We understand that children sometimes make noise. This is okay. This is a family restaurant. You do not have to feel guilty. You are welcome here. Your children are welcome here. This is what a family restaurant is.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Voor Kinderen' : 'For Children'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Mild Opties</h3>
                <p>We hebben veel opties die niet spicy zijn. Zachtere curries. Tandoori kip zonder sterke saus. Vegetarische gerechtjes. Naan met boter. Dit is voedsel dat kinderen graag eten.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Kleine Porties</h3>
                <p>We kunnen kleine porties maken. Je hoeft niet een volledige schotel voor je kind te bestellen. We begrijpen dat kinderen minder eten dan volwassenen.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Desserts</h3>
                <p>Kheer. Gulab jamun. Ras malai. Zoete dingen die kinderen leuk vinden. Dit is hoe je het diner afsluit - met glimlach.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Ruimte</h3>
                <p>We hebben veel ruimte. Je kinderen kunnen een beetje bewegen. Je hoeft ze niet de hele tijd strak vast te houden. Ze kunnen rustig zijn en tegelijk voelen zich niet ingesloten.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Mild Options</h3>
                <p>We have many options that are not spicy. Softer curries. Tandoori chicken without strong sauce. Vegetarian dishes. Naan with butter. This is food that children like to eat.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Small Portions</h3>
                <p>We can make small portions. You do not have to order a full plate for your child. We understand that children eat less than adults.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Desserts</h3>
                <p>Kheer. Gulab jamun. Ras malai. Sweet things that children like. This is how you finish the dinner - with a smile.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Space</h3>
                <p>We have plenty of space. Your children can move around a little. You do not have to keep them rigid the whole time. They can be calm and at the same time do not feel confined.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Familie FAQ' : 'Family FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Zijn kinderen welkom?' : 'Are children welcome?',
                a: isNl ? 'Ja, absoluut. Dit is een familie restaurant. Kinderen zijn welkom. Families zijn ons basis.' : 'Yes, absolutely. This is a family restaurant. Children are welcome. Families are our foundation.'
              },
              {
                q: isNl ? 'Hebben jullie voedsel dat kinderen graag eten?' : 'Do you have food that children like to eat?',
                a: isNl ? 'Ja. Mild curry. Naan. Rijst. Tandoori. Groenten. Veel opties voor kinderen.' : 'Yes. Mild curry. Naan. Rice. Tandoori. Vegetables. Many options for children.'
              },
              {
                q: isNl ? 'Kan ik kleine porties bestellen?' : 'Can I order small portions?',
                a: isNl ? 'Ja. We begrijpen dat kinderen minder eten. Zeg het ons, we doen het voor je.' : 'Yes. We understand that children eat less. Tell us, we do it for you.'
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
            {isNl ? 'Bezoek met je Familie' : 'Visit with Your Family'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/beste-indiaas-restaurant-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Beste Restaurant' : 'Best Restaurant'}
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
                {isNl ? 'Chopras Familie Restaurant - beste plaats voor families in Den Haag' : 'Chopras Family Restaurant - best place for families in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table for your family at Chopras'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
