import Link from 'next/link'
import Image from 'next/image'
import { RESTAURANT } from '@/lib/constants'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function Footer({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const CATERING_LINKS = [
    { label: tr.common.nav.catering, href: `${base}/catering` },
    { label: tr.common.nav.indianBuffet, href: `${base}/indian-buffet-den-haag` },
    { label: tr.common.nav.weddingCatering, href: `${base}/indian-wedding-catering-den-haag` },
    { label: tr.common.nav.corporateEvents, href: `${base}/corporate-events-den-haag` },
    { label: tr.common.nav.partyVenue, href: `${base}/party-venue-den-haag` },
  ]

  const FOOD_LINKS = [
    { label: tr.common.nav.menu, href: `${base}/menu` },
    { label: tr.common.nav.butterChicken, href: `${base}/butter-chicken-den-haag` },
    { label: tr.common.nav.biryani, href: `${base}/biryani-den-haag` },
    { label: tr.common.nav.tandoori, href: `${base}/tandoori-den-haag` },
    { label: tr.common.nav.takeaway, href: `${base}/indian-takeaway-den-haag` },
  ]

  const NEAR_YOU_LINKS = [
    { label: tr.common.nav.foodNetherlands, href: `${base}/indian-food-netherlands` },
    { label: tr.common.nav.halalFood, href: `${base}/halal-food-den-haag` },
    { label: tr.common.nav.nearRijswijk, href: `${base}/indian-restaurant-rijswijk` },
    { label: tr.common.nav.nearDelft, href: `${base}/indian-restaurant-delft` },
    { label: tr.common.nav.nearZoetermeer, href: `${base}/indian-restaurant-zoetermeer` },
  ]

  const INFO_LINKS = [
    { label: tr.common.nav.home, href: base },
    { label: tr.common.nav.blog, href: `${base}/blog` },
    { label: tr.common.nav.vacancy, href: `${base}/vacancy` },
    { label: tr.common.nav.contact, href: `${base}/contact` },
  ]

  return (
    <footer className="bg-brand-text text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1  -  Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href={base}>
              <Image
                src={RESTAURANT.logo}
                alt={`${RESTAURANT.name} logo`}
                width={160}
                height={60}
                className="h-14 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {tr.common.footer.tagline}
            </p>
            <p className="text-xs text-gray-400">
              {locale === 'nl'
                ? "Den Haag's authentieke Indiase restaurant sinds 2023"
                : "Den Haag's authentic Indian restaurant since 2023"}
            </p>
            <a
              href={RESTAURANT.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline mt-1"
            >
              {tr.common.footer.tripAdvisor}
            </a>
          </div>

          {/* Column 2  -  Catering */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              {tr.common.nav.catering}
            </h3>
            <ul className="flex flex-col gap-2">
              {CATERING_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3  -  Our Food */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              {tr.common.nav.dishes}
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOD_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4  -  Near You */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              {tr.common.nav.nearYou}
            </h3>
            <ul className="flex flex-col gap-2">
              {NEAR_YOU_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5  -  Info + Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              {tr.common.footer.contact}
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              {INFO_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="not-italic flex flex-col gap-1 text-sm text-gray-400">
              <p>{RESTAURANT.address.street}</p>
              <p>
                {RESTAURANT.address.postcode} {RESTAURANT.address.city}
              </p>
              <a
                href={`tel:${RESTAURANT.contact.phone}`}
                className="hover:text-white transition-colors mt-1"
              >
                {RESTAURANT.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${RESTAURANT.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {RESTAURANT.contact.email}
              </a>
            </address>
            <div className="mt-3 text-xs text-gray-500 leading-relaxed">
              <p>{tr.common.footer.openHours}</p>
              <p>{tr.common.footer.openWeekend}</p>
              <p>{tr.common.footer.closedMonday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Chopras Indian Restaurant Den Haag. All rights reserved.
            </p>
            <a
              href="https://milliongloballeads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors duration-200"
            >
              Developed by{' '}
              <span className="font-semibold">MGL</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
