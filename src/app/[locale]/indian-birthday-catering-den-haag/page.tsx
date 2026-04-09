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
    en: 'Indian Birthday Catering in Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Verjaardagseten in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian birthday catering in Den Haag. Authentic food for your celebration. Custom menus, delivery and setup included.',
    nl: 'Indiaas verjaardagseten in Den Haag. Authentiek eten voor je feest. Op maat gemaakte menu, bezorging en opzet inbegrepen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-birthday-catering-den-haag`,
      languages: { en: `${SITE_URL}/en/indian-birthday-catering-den-haag`, nl: `${SITE_URL}/nl/indian-birthday-catering-den-haag`, 'x-default': `${SITE_URL}/en/indian-birthday-catering-den-haag` },
    },
  }
}

export default function IndianBirthdayCateringPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/indian-birthday-catering-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Verjaardags Catering' : 'Birthday Catering', item: `${SITE_URL}/${locale}/indian-birthday-catering-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
              CATERING
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Verjaardagseten in Den Haag' : 'Indian Birthday Catering in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Authentieke smaken. Je feest. Jouw moment. We doen het allemaal.' : 'Authentic flavours. Your celebration. Your moment. We do it all.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Indiaas Verjaardagseten bij Chopras' : 'Indian Birthday Catering at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Een verjaardag is niet zomaar een dag. Dit is het moment waarop je mensen om je heen samenbrengt om je te vieren. En wat je eet op die dag blijft onthouden. Dat is waarom we verjaardags-catering in Den Haag doen op een bepaalde manier: met echte eten, echte geur, en echte warmte.</p>
                <p>Wij brengen Indiaas eten naar je feest. Dit zijn geen voorgemaakte gerechtjes die in warmtelicht hebben gezeten. Dit is vers eten, gemaakt in onze keuken, bezorgd heet, en uit schotels geserveerd. Je gasten zullen voelen dat je iets speciaals voor hen hebt gedaan. Ze zullen voelen dat je ze waardeert.</p>
                <p>We werken met jou samen om het menu perfect te maken. Hoeveel gasten? Welke voorkeur? Vegetarisch? Spicy-voorkeur? We luisteren, we ontwerpen, we leveren. Alles wat je nodig hebt voor een verjaardag waar je eten de ster van het feest is.</p>
              </>
            ) : (
              <>
                <p>A birthday is not just a day. This is the moment when you bring people around you to celebrate you. And what you eat on that day is remembered. This is why we do birthday catering in Den Haag a certain way: with real food, real aroma, and real warmth.</p>
                <p>We bring Indian food to your celebration. These are not pre-made dishes that have been sitting under heating lights. This is fresh food, made in our kitchen, delivered hot, and served from platters. Your guests will feel that you have done something special for them. They will feel that you value them.</p>
                <p>We work with you to make the menu perfect. How many guests? What preference? Vegetarian? Spice preference? We listen, we design, we deliver. Everything you need for a birthday where the food is the star of the party.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Inbegrepen is bij Verjaardags-Catering' : 'What is Included in Birthday Catering'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Menu Ontwerp</h3>
                <p>We werken met jou mee om het juiste menu te kiezen. Biryani? Tandoori? Curry? Vegetarisch? Allemaal? We weten wat werkt voor verschillende groepen en we geven je advies.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Bezorging</h3>
                <p>Alles wordt bezorgd op de exacte tijd die je nodig hebt. Niet eerder, niet later. Heet. Vers. In beschermde containers zodat het niet beschadigd raakt onderweg.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Opzet</h3>
                <p>Voor grotere feesten sturen we iemand om te helpen met opzetten en serveren. Je hoeft niet in je eigen keuken te staan. Je bent samen met je gasten.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Borden, Bestek, Servetten</h3>
                <p>Alles wat je nodig hebt - borden, bekers, bestek, servetten, alles wordt meegebracht. Het enige wat je hoeft te doen is eten genieten.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Menu Design</h3>
                <p>We work with you to choose the right menu. Biryani? Tandoori? Curry? Vegetarian? Everything? We know what works for different groups and we advise you.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Delivery</h3>
                <p>Everything is delivered at the exact time you need it. Not before, not after. Hot. Fresh. In protective containers so it is not damaged on the way.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Setup</h3>
                <p>For larger celebrations we send someone to help with setup and serving. You do not have to be in your own kitchen. You are together with your guests.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Plates, Utensils, Napkins</h3>
                <p>Everything you need - plates, cups, utensils, napkins, everything is brought. All you need to do is enjoy the food.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Wat is het minimum aantal gasten voor catering?' : 'What is the minimum number of guests for catering?',
                a: isNl ? 'Minimaal tien gasten. Alles eronder en het wordt niet voordelig voor je.' : 'Minimum ten guests. Anything less and it does not work well for you.'
              },
              {
                q: isNl ? 'Hoeveel kost catering?' : 'How much does catering cost?',
                a: isNl ? 'Afhankelijk van het menu, het aantal gasten, en de locatie. We geven je een offerte als je contact opneemt. Geen verrassingen - alles duidelijk van tevoren.' : 'It depends on the menu, number of guests, and location. We give you a quote when you contact us. No surprises - everything clear in advance.'
              },
              {
                q: isNl ? 'Kunnen jullie voor elke locatie in Den Haag leveren?' : 'Can you deliver to any location in Den Haag?',
                a: isNl ? 'Ja. Huis, kantoor, feestzaal, buiten - overal. Als het in Den Haag is, we bezorgen het.' : 'Yes. House, office, event hall, outdoors - anywhere. If it is in Den Haag, we deliver it.'
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
            {isNl ? 'Plan je Feest' : 'Plan Your Celebration'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center">
              {isNl ? 'Offerte Aanvragen' : 'Request Quote'}
            </Link>
            <Link href={`${base}/menu`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center">
              {isNl ? 'Bruiloft Catering' : 'Wedding Catering'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Andere Cateringmogelijkheden' : 'Other Catering Options'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Nikah-recepties en bruiloftsfestiviteiten' : 'Nikah receptions and wedding festivities'}</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Zakelijk' : 'Corporate'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bedrijfsdiners en teamvieringen' : 'Corporate dinners and team celebrations'}</p>
            </Link>
            <Link href={`${base}/party-venue-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Party Venue'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Privé-evenementenhal huur' : 'Private event hall hire'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali-diners en festiviteiten' : 'Diwali dinners and festival celebrations'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor meer cateringmogelijkheden, zie ons' : 'For more catering options, see our'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.common.viewMenu}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een afspraak' : 'contact us'}</Link> {isNl ? 'om uw verjaardags catering te bespreken.' : 'to discuss your birthday catering.'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
