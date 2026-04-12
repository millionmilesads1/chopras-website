import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Bus } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import { getLocalizedUrl } from '@/lib/utils'
import { getRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
import ContactForm from '@/components/contact/ContactForm'
import TrustBar from '@/components/sections/TrustBar'
import ReservationForm from '@/components/contact/ReservationForm'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Contact Chopras Indian Restaurant Den Haag | Reservations and Enquiries',
    nl: 'Contact Chopras Indiaas Restaurant Den Haag | Reserveringen',
  }
  const descriptions = {
    en: 'Get in touch with Chopras Indian Restaurant in Den Haag. Call, email or use our form for table reservations, catering enquiries and event bookings.',
    nl: 'Neem contact op met Chopras Indiaas Restaurant in Den Haag. Bel, mail of gebruik ons formulier voor tafelreserveringen, cateringaanvragen en evenementboekingen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'contact'),
      languages: {
        en: getLocalizedUrl('en', 'contact'),
        nl: getLocalizedUrl('nl', 'contact'),
        'x-default': getLocalizedUrl('en', 'contact'),
      },
    },
  }
}

export default function LocaleContactPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const restaurantSchema = getRestaurantSchema(locale)

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
    { name: tr.common.nav.contact, item: getLocalizedUrl(locale, 'contact') },
  ])

  const quickCards = [
    {
      Icon: Phone,
      title: 'Call Us Directly',
      body: 'For same-day bookings or urgent enquiries',
      cta: `Call ${RESTAURANT.contact.phoneDisplay}`,
      href: `tel:${RESTAURANT.contact.phone}`,
    },
    {
      Icon: Mail,
      title: 'Send a Message',
      body: 'We reply within 24 hours',
      cta: RESTAURANT.contact.email,
      href: `mailto:${RESTAURANT.contact.email}`,
    },
    {
      Icon: MapPin,
      title: 'Get Directions',
      body: 'Leyweg 986, Den Haag',
      cta: 'Open in Maps',
      href: 'https://maps.google.com/?q=Leyweg+986+Den+Haag',
    },
  ]

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* SECTION 1  -  RESERVATION SPLIT */}
      <section
        className="pb-0"
        style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-start gap-0">

            {/* LEFT  -  GHL Form */}
            <div className="bg-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none p-8 md:p-10 shadow-2xl">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
                <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
                  • VISIT US · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] font-semibold mt-2">
                Reserve Your Table at Chopras
              </h2>
              <p className="text-[#1A1A1A]/60 text-sm mt-2 mb-6">
                Open Tuesday to Sunday · 16:30 to 22:30 · Leyweg 986, Den Haag
              </p>
              <ReservationForm />
            </div>

            {/* RIGHT  -  Contact Details */}
            <div className="bg-transparent text-white p-8 md:p-10 flex flex-col justify-start gap-8">

              {/* Restaurant info card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
                  <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
                    • FIND US •
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-white font-semibold mt-2 mb-6">
                  Chopras Indian Restaurant
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#D4AF37] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm leading-relaxed">
                      Leyweg 986, 2545 GW Den Haag<br />Netherlands
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#D4AF37] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${RESTAURANT.contact.phone}`}
                      className="text-white/80 text-sm leading-relaxed hover:text-[#D4AF37] transition-colors"
                    >
                      {RESTAURANT.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#D4AF37] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${RESTAURANT.contact.email}`}
                      className="text-white/80 text-sm leading-relaxed hover:text-[#D4AF37] transition-colors"
                    >
                      {RESTAURANT.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-[#D4AF37] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="text-sm leading-relaxed space-y-1">
                      <p className="text-white/80">Tuesday to Sunday: 16:30 to 22:30</p>
                      <p className="text-white/50">Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Bus className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                  <p className="text-white/70 text-sm">Tram and bus accessible · Leyweg stop nearby</p>
                </div>
              </div>

              {/* Map  -  hidden on mobile */}
              <div className="rounded-3xl overflow-hidden hidden lg:block" style={{ height: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.8!2d4.2742654!3d52.0487367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b12ba9dd450d%3A0xf932c69c8e71a16b!2sChopras%20Indian%20Restaurant%20Den%20Haag!5e0!3m2!1sen!2snl!4v1744000000000!5m2!1sen!2snl"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                  title="Chopras Indian Restaurant Den Haag location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2  -  QUICK ACTION CARDS */}
      <section className="bg-[#FFFAF5] py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {quickCards.map(({ Icon, title, body, cta, href }) => (
            <div
              key={title}
              className="flex flex-col justify-between bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center flex-1 mb-6">
                <Icon className="text-[#D4AF37] w-10 h-10 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-[#1B2B5E] font-semibold mb-2">{title}</h3>
                <p className="text-[#1A1A1A]/60 text-sm mt-2">{body}</p>
              </div>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-full mt-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3  -  CONTACT FORM */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4">
            SEND A MESSAGE
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E]">
            {tr.contact.formH2}
          </h2>
        </div>
        <ContactForm />
      </section>

      {/* TRUST BAR */}
      <TrustBar locale={locale} />
    </>
  )
}
