import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart, Briefcase, Cake, Star, Users, Sun, Camera, Music,
  CheckCircle, ChefHat, Shield, MapPin,
} from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getCateringServiceSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import CateringForm from '@/components/catering/CateringForm'
import CateringFaqAccordion from '@/components/sections/CateringFaqAccordion'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Catering Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Catering Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic Indian catering in Den Haag for weddings, corporate events, birthdays and parties. Halal certified. Serving Den Haag, Rijswijk, Delft and more.',
    nl: 'Authentieke Indiase catering in Den Haag voor bruiloften, zakelijke evenementen, verjaardagen en feesten. Halal gecertificeerd. Actief in Den Haag, Rijswijk, Delft.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/catering`,
      languages: {
        en: `${SITE_URL}/en/catering`,
        nl: `${SITE_URL}/nl/catering`,
        'x-default': `${SITE_URL}/en/catering`,
      },
    },
  }
}

export default function LocaleCateringPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const cateringFaqs = locale === 'nl' ? [
    { question: 'Verzorgt Chopras Indian Restaurant catering in Den Haag?', answer: 'Ja. Chopras Indian Restaurant verzorgt volledige Indiase catering in heel Den Haag voor verjaardagen, bruiloften, zakelijke evenementen, Diwali diners en privéfeesten. Neem contact op voor uw vereisten.' },
    { question: 'Voor welke evenementen verzorgt Chopras Indian Restaurant catering?', answer: 'Chopras Indian Restaurant verzorgt catering voor verjaardagen, jubileums, bruiloften, bruiloft, zakelijke diners, Diwali vieringen, Holi evenementen en alle privébijeenkomsten in Den Haag en omgeving.' },
    { question: 'Hoe boek ik Indiase catering in Den Haag?', answer: 'Bezoek de cateringpagina op chopras.nl of bel Chopras Indian Restaurant direct op Leyweg 986, Den Haag. Wij stellen een aangepast menu en offerte samen voor uw evenement.' },
  ] : [
    { question: 'Does Chopras Indian Restaurant cater in Den Haag?', answer: 'Yes. Chopras Indian Restaurant provides full Indian catering across Den Haag for birthdays, weddings, corporate events, Diwali dinners, and private parties. Contact us to discuss your requirements.' },
    { question: 'What events does Chopras Indian Restaurant cater for?', answer: 'Chopras Indian Restaurant caters for birthdays, anniversaries, weddings, bruiloft, corporate dinners, Diwali celebrations, Holi events, and all private gatherings in Den Haag and surrounding areas.' },
    { question: 'How do I book Indian catering in Den Haag?', answer: 'Visit the catering page on chopras.nl or call Chopras Indian Restaurant directly at Leyweg 986, Den Haag. We will create a custom menu and quote for your event.' },
  ]

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
    { name: tr.common.nav.catering, item: `${SITE_URL}/${locale}/catering` },
  ])

  const eventTypes = [
    { Icon: Heart, label: 'Weddings' },
    { Icon: Briefcase, label: 'Corporate Dinners' },
    { Icon: Cake, label: 'Birthday Parties' },
    { Icon: Star, label: 'Diwali Celebrations' },
    { Icon: Users, label: 'Community Events' },
    { Icon: Sun, label: 'Eid Celebrations' },
    { Icon: Camera, label: 'Photo Shoots' },
    { Icon: Music, label: 'Cultural Events' },
  ]

  const whyCards = [
    {
      Icon: ChefHat,
      title: 'Restaurant Quality Food',
      body: 'Same chefs. Same spices. Same kitchen. Just at your venue.',
    },
    {
      Icon: Shield,
      title: 'Halal Certified Throughout',
      body: 'Every meat dish fully halal certified. One less thing to worry about.',
    },
    {
      Icon: MapPin,
      title: 'We Come to You',
      body: 'We cater at your venue across Den Haag, Rijswijk, Delft and Zoetermeer.',
    },
  ]

  const capacityStats = [
    { number: '25–80', label: 'Guests' },
    { number: '2023', label: 'Established' },
    { number: '7', label: 'Days Notice' },
  ]

  const featurePills = [
    { label: 'Halal Certified as Standard' },
    { label: 'Vegetarian and Vegan Options Included' },
    { label: '25 to 200 Guests' },
    { label: `${RESTAURANT.serviceAreas.slice(0, 4).join(' · ')}` },
  ]

  return (
    <>
      <JsonLd data={getCateringServiceSchema(locale)} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={getFaqPageSchema(cateringFaqs)} />

      {/* SECTION 1  -  HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/catering/wedding-celebrations---1.png"
          alt="Indian wedding catering at Chopras Den Haag"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)' }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {tr.catering.heroH1}
          </h1>
          <p
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            Weddings. Corporate dinners. Birthday parties. Diwali celebrations.
          </p>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-[#D4AF37]/70 text-xs uppercase tracking-widest">
              <li>
                <Link href={base} className="hover:text-[#D4AF37] transition-colors">
                  {tr.common.nav.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#D4AF37]/50">{tr.common.nav.catering}</li>
            </ol>
          </nav>
          <a
            href="#catering-form"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
          >
            Get a Catering Quote
          </a>
        </div>
      </section>

      {/* SECTION 2  -  SERVICE OVERVIEW */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
                WHAT WE DO
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-6">
                {tr.catering.serviceH2}
              </h2>
              <div className="space-y-4 text-[#1A1A1A]/70 text-base md:text-lg leading-relaxed">
                <p>{tr.catering.serviceP1}</p>
                <p>{tr.catering.serviceP2}</p>
              </div>
            </div>
            <div className="space-y-4">
              {featurePills.map(({ label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-base font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3  -  EVENT TYPES */}
      <section
        className="py-20 md:py-28 px-6 md:px-16"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
              WHO WE CATER FOR
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              {tr.catering.eventsH2}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map(({ Icon, label }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Icon className="text-[#D4AF37] w-8 h-8 mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4  -  EVENT HALL */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/catering/party-decor.png"
                alt="Private event hall at Chopras Indian Restaurant Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
                OUR EVENT HALL
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-6">
                Private Event Hall in Den Haag
              </h2>
              <div className="space-y-4 text-[#1A1A1A]/70 text-base leading-relaxed">
                <p>{tr.catering.hallP1}</p>
                <p>{tr.catering.hallP2}</p>
                <p>{tr.catering.hallP3}</p>
              </div>
              <div className="flex gap-8 mt-8 mb-8">
                {capacityStats.map(({ number, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-heading text-4xl text-[#D4AF37] font-semibold">{number}</p>
                    <p className="text-[#1A1A1A]/60 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
              >
                Book the Hall
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5  -  WHY CHOPRAS CATERING */}
      <section
        className="py-20 md:py-28 px-6 md:px-16"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              Why Businesses and Families in Den Haag Choose Chopras
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white/10 border border-white/20 rounded-3xl p-8"
              >
                <Icon className="text-[#D4AF37] w-8 h-8 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/70 text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5.5  -  POPULAR DISHES */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12 text-center">
            Popular Dishes for Catering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Chicken Curry</p>
              <p className="text-[#1B2B5E] font-semibold">Butter chicken Den Haag</p>
            </Link>
            <Link href={`${base}/mutton-rogan-josh-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Lamb Curry</p>
              <p className="text-[#1B2B5E] font-semibold">our mutton rogan josh Den Haag</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Biryani</p>
              <p className="text-[#1B2B5E] font-semibold">Authentic biryani Den Haag</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5.6  -  RELATED PAGES */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12 text-center">
            Catering Options for Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Weddings</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Indian wedding catering Den Haag</p>
            </Link>
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Birthdays</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Birthday catering Den Haag</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Corporate</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Corporate events catering Den Haag</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Celebrations</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Diwali dinner catering Den Haag</p>
            </Link>
            <Link href={`${base}/bruiloft-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Bruiloft</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Bruiloft catering Den Haag</p>
            </Link>
            <Link href={`${base}/zaal-huren-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">Venue</p>
              <p className="text-[#1B2B5E] font-semibold text-lg">Zaal huren Den Haag</p>
            </Link>
          </div>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-[#1A1A1A] text-base">
              {locale === 'nl' ? 'Wil je een feestzaal huren in Den Haag met catering inbegrepen?' : 'Do you want to hire a party venue in Den Haag with catering included?'} <Link href={`${base}/feestzaal-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{locale === 'nl' ? 'Bekijk onze feestzaal' : 'View our event space'}</Link> {locale === 'nl' ? 'voor de perfecte setting, of bezoek' : 'for the perfect setting, or visit'} <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant Den Haag</Link> {locale === 'nl' ? 'om ons restaurant te zien.' : 'to see our restaurant.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6  -  FAQ */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E]">
              {tr.catering.faqH2}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <CateringFaqAccordion />
          </div>
        </div>
      </section>

      {/* SECTION 7  -  CATERING FORM */}
      <section
        id="catering-form"
        className="py-20 md:py-28 px-6 md:px-16"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
            GET A QUOTE
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-3">
            {tr.catering.formH2}
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {tr.catering.formSub}
          </p>
          <CateringForm />
        </div>
      </section>
    </>
  )
}
