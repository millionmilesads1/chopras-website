import Link from 'next/link'
import Image from 'next/image'
import { RESTAURANT } from '@/lib/constants'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function Footer({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const DISHES_LINKS = [
    { label: 'Biryani Den Haag', href: `${base}/biryani-den-haag` },
    { label: 'Butter Chicken Den Haag', href: `${base}/butter-chicken-den-haag` },
    { label: 'Tandoori Den Haag', href: `${base}/tandoori-den-haag` },
    { label: 'Dal Makhani Den Haag', href: `${base}/dal-makhani-den-haag` },
    { label: 'Mutton Rogan Josh', href: `${base}/mutton-rogan-josh-den-haag` },
    { label: 'Naan Den Haag', href: `${base}/naan-den-haag` },
    { label: 'Chaat Den Haag', href: `${base}/chaat-den-haag` },
    { label: 'Pani Puri Den Haag', href: `${base}/pani-puri-den-haag` },
    { label: 'Soya Chaap Den Haag', href: `${base}/soya-chaap-den-haag` },
    { label: 'Indo Chinese Food', href: `${base}/indo-chinese-restaurant-den-haag` },
    { label: 'Indian Buffet', href: `${base}/indian-buffet-den-haag` },
  ]

  const MENU_LINKS = [
    { label: 'Full Menu', href: `${base}/menu` },
    { label: 'Halal Menu', href: `${base}/halal-menu` },
    { label: 'Vegan Menu', href: `${base}/vegan-menu` },
  ]

  const CATERING_LINKS = [
    { label: 'Indian Catering Den Haag', href: `${base}/catering` },
    { label: 'Wedding Catering', href: `${base}/indian-wedding-catering-den-haag` },
    { label: 'Birthday Catering', href: `${base}/indian-birthday-catering-den-haag` },
    { label: 'Corporate Events', href: `${base}/corporate-events-den-haag` },
    { label: 'Diwali Dinner', href: `${base}/diwali-dinner-den-haag` },
    { label: 'Bruiloft Catering', href: `${base}/bruiloft-catering-den-haag` },
    { label: 'Zaal Huren Den Haag', href: `${base}/zaal-huren-den-haag` },
    { label: 'Evenementenruimte', href: `${base}/evenementenruimte-den-haag` },
    { label: 'Party Venue Den Haag', href: `${base}/party-venue-den-haag` },
  ]

  const NEAR_YOU_LINKS = [
    { label: 'Indian Restaurant Delft', href: `${base}/indian-restaurant-delft` },
    { label: 'Indian Restaurant Rijswijk', href: `${base}/indian-restaurant-rijswijk` },
    { label: 'Indian Restaurant Zoetermeer', href: `${base}/indian-restaurant-zoetermeer` },
    { label: 'Near Peace Palace', href: `${base}/indian-restaurant-near-peace-palace-den-haag` },
    { label: 'Near Den Haag Centraal', href: `${base}/indian-restaurant-near-den-haag-centraal` },
  ]

  const ORDER_LINKS = [
    { label: 'Indian Food Delivery', href: `${base}/indian-food-delivery-den-haag` },
    { label: 'Indian Takeaway', href: `${base}/indian-takeaway-den-haag` },
  ]

  const EXPLORE_LINKS = [
    { label: 'Beste Indiaas Restaurant', href: `${base}/beste-indiaas-restaurant-den-haag` },
    { label: 'Family Restaurant Den Haag', href: `${base}/family-restaurant-den-haag` },
  ]

  const INFO_LINKS = [
    { label: tr.common.nav.home, href: base },
    { label: tr.common.nav.blog, href: `${base}/blog` },
    { label: tr.common.nav.vacancy, href: `${base}/vacancy` },
    { label: tr.common.nav.contact, href: `${base}/contact` },
  ]

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8">
          {/* Column 1  -  Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
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

          {/* Column 2  -  Our Dishes */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Our Dishes
            </h3>
            <ul className="flex flex-col gap-2">
              {DISHES_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3  -  Menu */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Menu
            </h3>
            <ul className="flex flex-col gap-2">
              {MENU_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4  -  Catering */}
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

          {/* Column 5  -  Near You */}
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

          {/* Column 6  -  Order */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Order
            </h3>
            <ul className="flex flex-col gap-2">
              {ORDER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 7  -  Explore */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-brand-accent">
              Explore
            </h3>
            <ul className="flex flex-col gap-2">
              {EXPLORE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 8  -  Info + Contact */}
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
      <div className="border-t border-white/10">
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
