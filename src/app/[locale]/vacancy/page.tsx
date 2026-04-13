import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import VacancyForm from '@/components/sections/VacancyForm'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema } from '@/lib/schema'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Vacancies at Chopras Indian Restaurant Den Haag | Join Our Team',
    nl: 'Vacatures bij Chopras Indiaas Restaurant Den Haag | Word Onderdeel van Ons Team',
  }
  const descriptions = {
    en: 'Vacature Indiaas restaurant Den Haag. Join Chopras Indian Restaurant as a chef, front-of-house staff or catering assistant. Apply today at Leyweg 986 Den Haag.',
    nl: 'Wij zijn op zoek naar mensen in Den Haag. Word onderdeel van het Chopras-team als kok, bediening of evenementenassistent. Maak deel uit van het snelst groeiende Indiase restaurant van Den Haag.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'vacancy'),
      languages: {
        en: getLocalizedUrl('en', 'vacancy'),
        nl: getLocalizedUrl('nl', 'vacancy'),
        'x-default': getLocalizedUrl('en', 'vacancy'),
      },
    },
  }
}

const jobSchemas = [
  {
    '@context': 'https://schema.org', '@type': 'JobPosting',
    title: 'Kitchen Chef  -  Indian Cuisine', datePosted: '2026-04-03', validThrough: '2026-12-31',
    description: 'We are looking for an experienced Indian cuisine chef to join our kitchen team at Chopras Indian Restaurant in Den Haag. You will prepare authentic North Indian dishes using traditional spices and a real tandoor clay oven.',
    employmentType: 'FULL_TIME',
    hiringOrganization: { '@type': 'Organization', name: 'Chopras Indian Restaurant', sameAs: 'https://chopras.nl' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'Leyweg 986', addressLocality: 'Den Haag', postalCode: '2545 GW', addressCountry: 'NL' } },
  },
  {
    '@context': 'https://schema.org', '@type': 'JobPosting',
    title: 'Front-of-House Server', datePosted: '2026-04-03', validThrough: '2026-12-31',
    description: 'We are looking for a warm and guest-focused front-of-house server to join our team at Chopras Indian Restaurant in Den Haag. You will welcome guests, take orders, and ensure every guest has a memorable experience.',
    employmentType: 'PART_TIME',
    hiringOrganization: { '@type': 'Organization', name: 'Chopras Indian Restaurant', sameAs: 'https://chopras.nl' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'Leyweg 986', addressLocality: 'Den Haag', postalCode: '2545 GW', addressCountry: 'NL' } },
  },
  {
    '@context': 'https://schema.org', '@type': 'JobPosting',
    title: 'Event and Catering Assistant', datePosted: '2026-04-03', validThrough: '2026-12-31',
    description: 'We are looking for a reliable and energetic event and catering assistant to support our busy private event hall and catering operation at Chopras Indian Restaurant in Den Haag.',
    employmentType: 'OTHER',
    hiringOrganization: { '@type': 'Organization', name: 'Chopras Indian Restaurant', sameAs: 'https://chopras.nl' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'Leyweg 986', addressLocality: 'Den Haag', postalCode: '2545 GW', addressCountry: 'NL' } },
  },
]

export default function LocaleVacancyPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const vacancies = [
    {
      badge: tr.vacancy.fulltime,
      badgeColor: 'bg-green-100 text-green-800',
      title: tr.vacancy.vacancy1Title,
      schedule: tr.vacancy.vacancy1Schedule,
      desc: tr.vacancy.vacancy1Desc,
      reqs: locale === 'nl'
        ? ['Ervaring in Noord-Indiase keuken gewenst', 'Kennis van de tandoor is een plus', 'Teamspeler, kalm onder druk', 'Werkvergunning in Nederland']
        : ['Experience in North Indian cuisine preferred', 'Tandoor knowledge a plus', 'Team player, calm under pressure', 'Legal right to work in the Netherlands'],
      bens: locale === 'nl'
        ? ['Competitief salaris te bespreken', 'Personeelsmaaltijden elke dienst', 'Echte doorgroeimogelijkheden']
        : ['Competitive pay discussed at interview', 'Staff meals every shift', 'Real advancement as we grow'],
    },
    {
      badge: tr.vacancy.parttime,
      badgeColor: 'bg-blue-100 text-blue-800',
      title: tr.vacancy.vacancy2Title,
      schedule: tr.vacancy.vacancy2Schedule,
      desc: tr.vacancy.vacancy2Desc,
      reqs: locale === 'nl'
        ? ['Gastgericht en van nature warm', 'Communicatie in Nederlands of Engels', 'Betrouwbaar en punctueel', 'Restaurantervaring een plus, niet vereist']
        : ['Guest-focused and naturally warm', 'Dutch or English communication', 'Reliable and punctual', 'Restaurant experience a plus, not required'],
      bens: locale === 'nl'
        ? ['Fooien', 'Personeelsmaaltijden', 'Flexibele uren']
        : ['Tips', 'Staff meals', 'Flexible hours around your schedule'],
    },
    {
      badge: tr.vacancy.eventBased,
      badgeColor: 'bg-purple-100 text-purple-800',
      title: tr.vacancy.vacancy3Title,
      schedule: tr.vacancy.vacancy3Schedule,
      desc: tr.vacancy.vacancy3Desc,
      reqs: locale === 'nl'
        ? ['Fysiek in staat tot opzet en afbraak', 'Punctueel en betrouwbaar', 'Flexibele beschikbaarheid inclusief weekenden', 'Positieve houding']
        : ['Physically capable of setup and breakdown work', 'Punctual and reliable', 'Flexible availability including weekends', 'Positive attitude'],
      bens: locale === 'nl'
        ? ['Uurloon', 'Verscheidenheid aan evenementen', 'Potentieel voor fulltime cateringrol']
        : ['Hourly pay', 'Variety of events and venues', 'Potential to grow into a full-time catering role'],
    },
  ]

  return (
    <>
      {jobSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema as Record<string, unknown>} />
      ))}
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: tr.common.nav.vacancy, item: getLocalizedUrl(locale, 'vacancy') },
      ])} />

      {/* Hero */}
      <section className="bg-[#1B2B5E] py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • JOIN OUR TEAM · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-6xl text-white font-bold"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {tr.vacancy.heroH1}
          </h1>
          <p
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {tr.vacancy.heroSub}
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>{tr.vacancy.cultureP1}</p>
            <p>{tr.vacancy.cultureP2}</p>
            <p>{tr.vacancy.cultureP3}</p>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-[#1B2B5E] font-bold text-center mb-12">
            {tr.vacancy.vacanciesH2}
          </h2>
          <div className="space-y-8">
            {vacancies.map((v) => (
              <div key={v.title} className="bg-[#FFFAF5] rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span className={`${v.badgeColor} text-xs px-3 py-1 rounded-full font-medium`}>
                    {v.badge}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-[#1B2B5E] font-bold mb-1">{v.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{v.schedule}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{v.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                      {tr.vacancy.requirements}
                    </h4>
                    <ul className="space-y-1.5">
                      {v.reqs.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-[#D4AF37] mt-0.5">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2B5E] mb-2 text-sm uppercase tracking-wide">
                      {tr.vacancy.benefits}
                    </h4>
                    <ul className="space-y-1.5">
                      {v.bens.map((ben) => (
                        <li key={ben} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-[#D4AF37] mt-0.5">✓</span>
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-white text-center font-bold mb-10">
            {tr.vacancy.applyH2}
          </h2>
          <VacancyForm />
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li><Link href={base}>{tr.common.nav.home}</Link></li>
          <li><span>{tr.common.nav.vacancy}</span></li>
        </ol>
      </nav>
    </>
  )
}
