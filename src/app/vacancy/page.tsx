import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import VacancyForm from '@/components/sections/VacancyForm'

export const metadata: Metadata = {
  title: 'Vacancies at Chopras Indian Restaurant Den Haag | Join Our Team',
  description:
    'We are hiring in Den Haag. Join the Chopras team as a chef, front-of-house server or event assistant. Be part of the fastest growing Indian restaurant in Den Haag.',
  alternates: { canonical: 'https://chopras.nl/vacancy' },
}

const jobPostingChef = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Kitchen Chef — Indian Cuisine',
  description:
    'We are looking for an experienced Indian cuisine chef to join our kitchen team at Chopras Indian Restaurant in Den Haag. You will be responsible for preparing authentic North Indian dishes using traditional spices and techniques.',
  datePosted: '2025-01-01',
  validThrough: '2025-12-31',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Chopras Indian Restaurant',
    sameAs: 'https://chopras.nl',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Leyweg 986',
      addressLocality: 'Den Haag',
      postalCode: '2545 GW',
      addressCountry: 'NL',
    },
  },
}

const jobPostingServer = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Front-of-House Server',
  description:
    'We are looking for an experienced Indian cuisine chef to join our kitchen team at Chopras Indian Restaurant in Den Haag. You will be responsible for preparing authentic North Indian dishes using traditional spices and techniques.',
  datePosted: '2025-01-01',
  validThrough: '2025-12-31',
  employmentType: 'PART_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Chopras Indian Restaurant',
    sameAs: 'https://chopras.nl',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Leyweg 986',
      addressLocality: 'Den Haag',
      postalCode: '2545 GW',
      addressCountry: 'NL',
    },
  },
}

const jobPostingEvent = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Event and Catering Assistant',
  description:
    'We are looking for an experienced Indian cuisine chef to join our kitchen team at Chopras Indian Restaurant in Den Haag. You will be responsible for preparing authentic North Indian dishes using traditional spices and techniques.',
  datePosted: '2025-01-01',
  validThrough: '2025-12-31',
  employmentType: 'OTHER',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Chopras Indian Restaurant',
    sameAs: 'https://chopras.nl',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Leyweg 986',
      addressLocality: 'Den Haag',
      postalCode: '2545 GW',
      addressCountry: 'NL',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
    { '@type': 'ListItem', position: 2, name: 'Vacancy', item: 'https://chopras.nl/vacancy' },
  ],
}

export default function VacancyPage() {
  return (
    <>
      <JsonLd data={jobPostingChef as Record<string, unknown>} />
      <JsonLd data={jobPostingServer as Record<string, unknown>} />
      <JsonLd data={jobPostingEvent as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

      {/* Section 1 — Hero */}
      <section className="bg-[#1B2B5E] py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold">
            Work at Chopras — Join Den Haag&apos;s Fastest Growing Indian Restaurant
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            We are building something real here. If you love food, people and a team that
            actually has each other&apos;s backs — read on.
          </p>
        </div>
      </section>

      {/* Section 2 — Culture Intro */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Working at Chopras is not about following a script. It is about being part of
              a kitchen and a team that genuinely cares — about the food, about the guests,
              and about each other.
            </p>
            <p>
              We opened in 2023 and we are growing fast. That means real opportunities for
              people who want to grow with us. Our chefs are learning and teaching every day.
              Our front-of-house staff know regulars by name within a month. Everyone here is
              invested in what we are building.
            </p>
            <p>
              We are looking for people who take pride in their work, show up on time, and
              bring energy to what they do. The rest we can teach.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Vacancies */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-[#1B2B5E] font-bold text-center mb-12">
            Current Vacancies in Den Haag
          </h2>

          <div className="space-y-8">
            {/* Vacancy 1 — Kitchen Chef */}
            <div className="bg-[#FFFAF5] rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                  Full-time or Part-time
                </span>
              </div>
              <h3 className="font-heading text-2xl text-[#1B2B5E] font-bold mb-1">
                Kitchen Chef — Indian Cuisine
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Tuesday to Sunday · Evenings and weekends
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You know your way around a tandoor. You understand that the difference between
                good and great is in the masala — and you care enough to grind it fresh. At
                Chopras, we are looking for a chef who does not just cook Indian food, they
                live it. If you have worked in an Indian kitchen and you are ready to bring
                those skills to one of Den Haag&apos;s most talked-about restaurants, let us
                talk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Experience in North Indian cuisine preferred',
                      'Tandoor knowledge a plus',
                      'Team player, calm under pressure',
                      'Legal right to work in the Netherlands',
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Competitive pay discussed at interview',
                      'Staff meals every shift',
                      'Real advancement as we grow',
                    ].map((ben) => (
                      <li key={ben} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vacancy 2 — Front-of-House Server */}
            <div className="bg-[#FFFAF5] rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                  Part-time · Flexible
                </span>
              </div>
              <h3 className="font-heading text-2xl text-[#1B2B5E] font-bold mb-1">
                Front-of-House Server — Gastvrouw / Gastheer
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Evenings and weekends · Flexible scheduling
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You are a people person. You remember regulars&apos; names. You can explain the
                difference between a samosa and a dahi puri without reading from a card — and
                you do it with genuine warmth. Chopras needs front-of-house staff who match
                the energy of the food. Restaurant experience is a bonus but personality
                matters more.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Guest-focused and naturally warm',
                      'Dutch or English communication',
                      'Reliable and punctual',
                      'Restaurant experience a plus, not required',
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Tips',
                      'Staff meals',
                      'Flexible hours around your schedule',
                    ].map((ben) => (
                      <li key={ben} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vacancy 3 — Event and Catering Assistant */}
            <div className="bg-[#FFFAF5] rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                  Event-based · Flexible
                </span>
              </div>
              <h3 className="font-heading text-2xl text-[#1B2B5E] font-bold mb-1">
                Event and Catering Assistant
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Event-based · Including weekends
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chopras runs a busy private event hall and a catering operation that takes us
                to venues across Den Haag and beyond. We need reliable, energetic people who
                take pride in making events run without a hitch. This is physical work —
                setup, service, breakdown — and it is genuinely satisfying when an event goes
                perfectly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Physically capable of setup and breakdown work',
                      'Punctual and reliable',
                      'Flexible availability including weekends',
                      'Positive attitude',
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                    Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      'Hourly pay',
                      'Variety of events and venues',
                      'Potential to grow into a full-time catering role',
                    ].map((ben) => (
                      <li key={ben} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#D4AF37] mt-0.5">✓</span>
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Application Form */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-white text-center font-bold mb-10">
            Apply for a Position at Chopras Indian Restaurant
          </h2>
          <VacancyForm />
        </div>
      </section>

      {/* Breadcrumb nav (visually hidden, for SEO/accessibility) */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>Vacancy</span>
          </li>
        </ol>
      </nav>
    </>
  )
}
