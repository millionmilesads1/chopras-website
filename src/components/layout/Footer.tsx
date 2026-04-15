'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RESTAURANT } from '@/lib/constants'
import type { Locale } from '@/lib/useTranslations'

export default function Footer({ locale }: { locale: Locale }) {
  const base = locale === 'nl' ? '/nl' : ''

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
    { label: 'Indian Catering', href: `${base}/catering` },
    { label: 'Wedding Catering', href: `${base}/indian-wedding-catering-den-haag` },
    { label: 'Birthday Catering', href: `${base}/indian-birthday-catering-den-haag` },
    { label: 'Corporate Events', href: `${base}/corporate-events-den-haag` },
    { label: 'Diwali Dinner', href: `${base}/diwali-dinner-den-haag` },
    { label: 'Bruiloft Catering', href: `${base}/bruiloft-catering-den-haag` },
  ]

  const FEESTZAAL_LINKS = [
    { label: 'Feestzaal Huren Den Haag', href: `${base}/feestzaal-den-haag` },
    { label: 'Zaal Huren Den Haag', href: `${base}/zaal-huren-den-haag` },
    { label: 'Evenementenruimte Den Haag', href: `${base}/evenementenruimte-den-haag` },
    { label: 'Party Venue Den Haag', href: `${base}/feestzaal-den-haag` },
  ]

  const NEAR_YOU_LINKS = [
    { label: 'Indian Restaurant Delft', href: `${base}/indian-restaurant-delft` },
    { label: 'Indian Restaurant Rijswijk', href: `${base}/indian-restaurant-rijswijk` },
    { label: 'Indian Restaurant Zoetermeer', href: `${base}/indian-restaurant-zoetermeer` },
    { label: 'Near Peace Palace', href: `${base}/indian-restaurant-near-peace-palace-den-haag` },
    { label: 'Near Den Haag Centraal', href: `${base}/indian-restaurant-near-den-haag-centraal` },
  ]

  const ORDER_EXPLORE_LINKS = [
    { label: 'Indian Food Delivery', href: `${base}/indian-food-delivery-den-haag` },
    { label: 'Indian Takeaway', href: `${base}/indian-takeaway-den-haag` },
    { label: 'Beste Indiaas Restaurant', href: `${base}/beste-indiaas-restaurant-den-haag` },
    { label: 'Family Restaurant Den Haag', href: `${base}/family-restaurant-den-haag` },
  ]

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #000066 0%, #0000FF 100%)' }}>
      {/* Top border separator */}
      <div className="border-t-[1px] border-solid" style={{ borderColor: 'rgba(199, 163, 72, 0.3)' }} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop and Tablet Layout */}
        <div className="py-16 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {/* SECTION 1 - Brand Column (Desktop: 25%, takes 1 col in 5-col grid) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Logo */}
              <Link href={base} className="inline-block">
                <Image
                  src={RESTAURANT.logo}
                  alt="Chopras Indian Restaurant logo"
                  width={140}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </Link>

              {/* Tagline */}
              <div className="flex flex-col gap-1">
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  Den Haag&apos;s Most Authentic Indian Restaurant
                </p>
              </div>

              {/* Address Block */}
              <address className="not-italic flex flex-col gap-2 text-sm">
                <p className="text-white/60">{RESTAURANT.address.street}</p>
                <p className="text-white/60">{RESTAURANT.address.postcode} {RESTAURANT.address.city}</p>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`tel:${RESTAURANT.contact.phone}`}
                    className="text-white/60 hover:text-[#C7A348] transition-colors duration-200"
                  >
                    {RESTAURANT.contact.phoneDisplay}
                  </a>
                  <a
                    href="https://wa.me/31630645930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#C7A348] transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.967 1.523.505.505 0 00-.223.579l1.514 3.885a.498.498 0 00.596.28 8.88 8.88 0 014.487-1.228h.004c4.896 0 8.876 3.98 8.876 8.877 0 4.897-3.98 8.877-8.877 8.877-4.896 0-8.877-3.98-8.877-8.877v-.004a8.877 8.877 0 011.34-4.585.498.498 0 00-.051-.595l-1.511-3.884a.505.505 0 00-.58-.225 11.88 11.88 0 00-6.024 6.73.503.503 0 00.071.615l3.838 3.16c.142.118.338.104.456 0 2.03-2.049 4.896-3.206 7.82-3.206 6.335 0 11.5 5.165 11.5 11.5S18.84 22.6 12.503 22.6s-11.5-5.165-11.5-11.5c0-3.026 1.159-5.864 3.256-7.982a.502.502 0 00-.039-.636L.84 1.062a.505.505 0 00-.568-.075 11.88 11.88 0 006.024 6.73z" />
                    </svg>
                  </a>
                </div>
              </address>

              {/* Opening Hours */}
              <div className="flex flex-col gap-2 text-xs text-white/60 leading-relaxed">
                <p className="font-medium text-white/70">Opening Hours</p>
                <p>Tuesday to Sunday: 16:30 - 22:30</p>
                <p>Monday: Closed</p>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={RESTAURANT.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#C7A348] hover:text-white transition-colors duration-200"
                >
                  <span>★</span>
                  <span>TripAdvisor Reviewed</span>
                </a>
                <p className="text-xs text-white/50">
                  Rated 4.9 ★ on Google · 800+ reviews
                </p>
              </div>
            </div>

            {/* SECTION 2 - Navigation Columns (Desktop: 75%, takes 4 cols in 5-col grid) */}

            {/* Column 1 - Our Dishes */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4">
                Our Dishes
              </h3>
              <ul className="flex flex-col gap-2">
                {DISHES_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Menu & Catering */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4">
                Menu
              </h3>
              <ul className="flex flex-col gap-2 mb-6">
                {MENU_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4 pt-2 border-t border-white/10">
                Catering
              </h3>
              <ul className="flex flex-col gap-2">
                {CATERING_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Feestzaal */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4">
                Feestzaal
              </h3>
              <ul className="flex flex-col gap-2">
                {FEESTZAAL_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Near You */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4">
                Near You
              </h3>
              <ul className="flex flex-col gap-2">
                {NEAR_YOU_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 - Order & Explore */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-[#C7A348] uppercase tracking-wider text-xs mb-4">
                Order and Explore
              </h3>
              <ul className="flex flex-col gap-2">
                {ORDER_EXPLORE_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/70 hover:text-[#C7A348] transition-colors duration-200 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[1px] border-solid" style={{ borderColor: 'rgba(199, 163, 72, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <p>
              © {new Date().getFullYear()} Chopras Indian Restaurant Den Haag. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
