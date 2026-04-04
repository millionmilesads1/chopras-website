import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Bus, Car } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
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
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        en: `${SITE_URL}/en/contact`,
        nl: `${SITE_URL}/nl/contact`,
        'x-default': `${SITE_URL}/en/contact`,
      },
    },
  }
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Chopras Indian Restaurant',
  url: 'https://chopras.nl',
  telephone: '+31630645930',
  email: 'info@chopras.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leyweg 986',
    addressLocality: 'Den Haag',
    postalCode: '2545 GW',
    addressCountry: 'NL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.0583, longitude: 4.2932 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '83', bestRating: '5', worstRating: '1' },
  sameAs: [
    'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
    'https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/',
    'https://www.facebook.com/choprasrestaurant',
    'https://www.instagram.com/choprasrestaurant',
    'https://www.youtube.com/@choprasrestaurant',
  ],
}

export default function LocaleContactPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: tr.common.nav.contact, item: `${SITE_URL}/${locale}/contact` },
    ],
  }

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
      body: 'Free parking at Leyweg',
      cta: 'Open in Maps',
      href: 'https://maps.google.com/?q=Leyweg+986+Den+Haag',
    },
  ]

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

      {/* SECTION 1  -  RESERVATION SPLIT */}
      <section
        className="pb-0"
        style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 60%, #0F1040 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-start gap-0">

            {/* LEFT  -  GHL Form */}
            <div className="bg-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none p-8 md:p-10 shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium">
                  Book Your Table
                </span>
                <div className="h-px w-8 bg-[#D4AF37]" />
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
                <div className="inline-flex items-center gap-2 mb-1">
                  <div className="h-px w-8 bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium">
                    Find Us
                  </span>
                  <div className="h-px w-8 bg-[#D4AF37]" />
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
                <div className="flex items-center gap-3">
                  <Car className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                  <p className="text-white/70 text-sm">Free parking at Leyweg shopping area</p>
                </div>
              </div>

              {/* Map  -  hidden on mobile */}
              <div className="rounded-3xl overflow-hidden hidden lg:block" style={{ height: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.2!2d4.2765!3d52.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47890e3caeb27bfd%3A0x8c0b2b2a5c3e4f9a!2sLeyweg%20986%2C%202545%20GW%20Den%20Haag!5e0!3m2!1sen!2snl!4v1680000000000!5m2!1sen!2snl"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickCards.map(({ Icon, title, body, cta, href }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="text-[#D4AF37] w-10 h-10 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-[#1B2B5E] font-semibold mb-2">{title}</h3>
              <p className="text-[#1A1A1A]/60 text-sm mt-2 mb-6">{body}</p>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block w-full bg-[#D4AF37] text-[#1A1A1A] px-6 py-3 font-semibold uppercase tracking-widest text-sm hover:bg-[#F5D36A] transition-all text-center"
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
