import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart, Briefcase, Cake, Star, Users, Sun, Camera, Music,
  CheckCircle, ChefHat, Shield, MapPin,
} from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getCateringServiceSchema, getBreadcrumbSchema } from '@/lib/schema'
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
    en: 'Indian Catering Den Haag | Chopras  -  Weddings, Events & Private Dining',
    nl: 'Indiaas Catering Den Haag | Chopras  -  Bruiloften, Evenementen & Privédining',
  }
  const descriptions = {
    en: 'Authentic Indian catering in Den Haag for weddings, corporate events, birthdays and parties. Halal certified. Serving Den Haag, Rijswijk, Delft and more. Get a quote today.',
    nl: 'Authentieke Indiase catering in Den Haag voor bruiloften, zakelijke evenementen, verjaardagen en feesten. Halal gecertificeerd. Actief in Den Haag, Rijswijk, Delft en omgeving. Vraag vandaag een offerte aan.',
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
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              EVENTS &amp; CATERING
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
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
            className="inline-block bg-[#D4AF37] text-[#1A1A1A] px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#F5D36A] transition-all"
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
                className="inline-block bg-[#D4AF37] text-[#1A1A1A] px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#F5D36A] transition-all"
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
