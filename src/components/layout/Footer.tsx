import Link from 'next/link'
import Image from 'next/image'
import { RESTAURANT } from '@/lib/constants'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Vacancy', href: '/vacancy' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src={RESTAURANT.logo}
                alt={`${RESTAURANT.name} logo`}
                width={160}
                height={60}
                className="h-14 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {RESTAURANT.tagline}
            </p>
            <p className="text-xs text-gray-400">
              Den Haag&apos;s authentic Indian restaurant since 2023
            </p>
            <a
              href={RESTAURANT.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline mt-1"
            >
              ★ Review us on TripAdvisor
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-gray-300">
              <p>{RESTAURANT.address.street}</p>
              <p>
                {RESTAURANT.address.postcode} {RESTAURANT.address.city}
              </p>
              <p>{RESTAURANT.address.country}</p>
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
            <div className="mt-4 text-xs text-gray-400 leading-relaxed">
              <p>Open Tue–Fri: 15:00–22:00</p>
              <p>Sat–Sun: 13:00–22:00</p>
              <p>Closed Monday</p>
            </div>
          </div>

          {/* Column 4 — Service Areas */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Service Areas
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Serving authentic Indian food and catering across:
            </p>
            <ul className="flex flex-col gap-1">
              {RESTAURANT.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-white">
            © 2025 {RESTAURANT.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
