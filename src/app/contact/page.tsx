import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, CalendarDays, UtensilsCrossed, BookOpen } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Chopras Indian Restaurant Den Haag | Reservations and Enquiries',
  description:
    'Get in touch with Chopras Indian Restaurant in Den Haag. Call, email or use our form for table reservations, catering enquiries and event bookings.',
  alternates: { canonical: 'https://chopras.nl/contact' },
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Chopras Indian Restaurant',
  image:
    'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0583,
    longitude: 4.2932,
  },
  servesCuisine: ['Indian', 'North Indian', 'Street Food', 'Indo-Chinese', 'Halal'],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '13:00',
      closes: '22:00',
    },
  ],
  hasMenu: 'https://chopras.nl/menu',
  acceptsReservations: 'True',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://chopras.nl/contact' },
  ],
}

type HourEntry = {
  day: string
  dayNl: string
  open: boolean
  from?: string
  to?: string
}

export default function ContactPage() {
  const hours = RESTAURANT.hours as unknown as HourEntry[]

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

      {/* Section 1 — Hero */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl text-white font-bold">
            Find Us, Call Us, or Just Drop By
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            We would love to have you. Leyweg 986, Den Haag — open Tuesday to Sunday.
          </p>
        </div>
      </section>

      {/* Section 2 — Contact Details + Map */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — Contact card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={22} className="text-[#1B2B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1B2B5E] mb-0.5">Address</p>
                  <p className="text-gray-600 text-sm">Leyweg 986</p>
                  <p className="text-gray-600 text-sm">2545 GW Den Haag</p>
                  <p className="text-gray-600 text-sm">Netherlands</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <Phone size={22} className="text-[#1B2B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1B2B5E] mb-0.5">Phone</p>
                  <a
                    href="tel:+31630645930"
                    className="text-[#1B2B5E] font-semibold text-lg hover:underline"
                  >
                    +31 6 30645930
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <Mail size={22} className="text-[#1B2B5E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1B2B5E] mb-0.5">Email</p>
                  <a
                    href="mailto:info@chopras.nl"
                    className="text-[#1B2B5E] font-semibold hover:underline"
                  >
                    info@chopras.nl
                  </a>
                </div>
              </div>

              {/* Hours table */}
              <div className="mb-6">
                <p className="font-semibold text-[#1B2B5E] mb-3">Opening Hours</p>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((hour, i) => (
                      <tr
                        key={hour.day}
                        className={i % 2 === 0 ? 'bg-gray-50' : ''}
                      >
                        <td className="px-3 py-2 text-gray-700 font-medium">
                          {hour.dayNl}
                        </td>
                        <td
                          className={`px-3 py-2 text-right ${
                            !hour.open ? 'text-red-500 font-medium' : 'text-gray-600'
                          }`}
                        >
                          {hour.open ? `${hour.from} – ${hour.to}` : 'Closed'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Transport and parking */}
              <p className="text-gray-500 text-sm mb-1">
                Accessible by tram and bus — Leyweg stop nearby
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Free parking available at Leyweg shopping area
              </p>

              {/* Directions link */}
              <a
                href="https://maps.google.com/?q=Leyweg+986+Den+Haag"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1B2B5E] text-white px-6 py-3 rounded-full hover:bg-[#0F1F4B] transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Right — Google Maps iframe */}
            <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.123!2d4.2932!3d52.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzMwLjAiTiA0wrAxNyc1NS41IkU!5e0!3m2!1sen!2snl!4v1234567890"
                width="100%"
                height="450"
                className="border-0 w-full h-full min-h-[400px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chopras Indian Restaurant location in Den Haag on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-[#1B2B5E] font-bold text-center mb-10">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Section 4 — Quick Action Cards */}
      <section className="bg-[#FFFAF5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Reserve a Table */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-3">
                <CalendarDays size={32} className="text-[#1B2B5E]" />
              </div>
              <h3 className="font-heading font-bold text-[#1B2B5E] text-lg mb-2">
                Reserve a Table
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Book directly online for the fastest confirmation
              </p>
              <Link
                href="/reservations"
                className="inline-block bg-[#1B2B5E] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0F1F4B] transition-colors"
              >
                Reserve Now
              </Link>
            </div>

            {/* Card 2 — Get a Catering Quote */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-3">
                <UtensilsCrossed size={32} className="text-[#1B2B5E]" />
              </div>
              <h3 className="font-heading font-bold text-[#1B2B5E] text-lg mb-2">
                Get a Catering Quote
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Planning an event in Den Haag? Let us talk.
              </p>
              <Link
                href="/catering"
                className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1B2B5E]/5 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Card 3 — Browse Our Menu */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="flex justify-center mb-3">
                <BookOpen size={32} className="text-[#1B2B5E]" />
              </div>
              <h3 className="font-heading font-bold text-[#1B2B5E] text-lg mb-2">
                Browse Our Menu
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                89 dishes, 12 categories. See what we do.
              </p>
              <Link
                href="/menu"
                className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1B2B5E]/5 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb nav (visually hidden, for SEO/accessibility) */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ol>
      </nav>
    </>
  )
}
