'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, ShoppingBag, ShoppingCart } from 'lucide-react'
import { RESTAURANT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { useCartStore } from '@/store/cartStore'

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  function switchLanguage(newLocale: Locale) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center bg-white/[0.08] rounded-full p-0.5">
      <button
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
        className={cn(
          'px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
          locale === 'en'
            ? 'bg-white text-[#1B2B5E] shadow-sm'
            : 'text-white/60 hover:text-white'
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('nl')}
        aria-label="Switch to Nederlands"
        className={cn(
          'px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
          locale === 'nl'
            ? 'bg-white text-[#1B2B5E] shadow-sm'
            : 'text-white/60 hover:text-white'
        )}
      >
        NL
      </button>
    </div>
  )
}

export default function Header({ locale }: { locale: Locale }) {
  const tr = getTranslations(locale)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { getTotalItems, openCart } = useCartStore()
  const totalItems = getTotalItems()

  const base = `/${locale}`

  const NAV_LINKS = [
    { label: tr.common.nav.home, href: base },
    { label: tr.common.nav.menu, href: `${base}/menu` },
    { label: tr.common.nav.blog, href: `${base}/blog` },
    { label: tr.common.nav.vacancy, href: `${base}/vacancy` },
    { label: tr.common.nav.contact, href: `${base}/contact` },
  ]

  const DROPDOWNS = [
    {
      key: 'catering',
      label: tr.common.nav.catering,
      links: [
        { label: 'Indian Catering Den Haag', href: `${base}/catering` },
        { label: tr.common.nav.indianBuffet, href: `${base}/indian-buffet-den-haag` },
        { label: tr.common.nav.weddingCatering, href: `${base}/indian-wedding-catering-den-haag` },
        { label: tr.common.nav.corporateEvents, href: `${base}/corporate-events-den-haag` },
        { label: tr.common.nav.partyVenue, href: `${base}/party-venue-den-haag` },
      ],
    },
    {
      key: 'dishes',
      label: tr.common.nav.dishes,
      links: [
        { label: tr.common.nav.butterChicken, href: `${base}/butter-chicken-den-haag` },
        { label: tr.common.nav.biryani, href: `${base}/biryani-den-haag` },
        { label: tr.common.nav.tandoori, href: `${base}/tandoori-den-haag` },
        { label: tr.common.nav.takeaway, href: `${base}/indian-takeaway-den-haag` },
      ],
    },
    {
      key: 'nearYou',
      label: tr.common.nav.nearYou,
      links: [
        { label: tr.common.nav.foodNetherlands, href: `${base}/indian-food-netherlands` },
        { label: tr.common.nav.halalFood, href: `${base}/halal-food-den-haag` },
        { label: tr.common.nav.nearRijswijk, href: `${base}/indian-restaurant-rijswijk` },
        { label: tr.common.nav.nearDelft, href: `${base}/indian-restaurant-delft` },
        { label: tr.common.nav.nearZoetermeer, href: `${base}/indian-restaurant-zoetermeer` },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    return () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current) }
  }, [])

  function handleMouseEnter(key: string) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(key)
  }

  function handleMouseLeave() {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <>
      {/* ─── Fixed Header Bar ─── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm border-b border-white/[0.08]',
          scrolled ? 'h-14 shadow-lg shadow-black/20' : 'h-16'
        )}
        style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">

          {/* GROUP 1 — Logo */}
          <Link href={base} className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src={RESTAURANT.logo}
              alt={`${RESTAURANT.name} logo`}
              width={176}
              height={66}
              className="h-11 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* GROUP 2 — Nav (lg+) */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap',
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.08]'
                  )}
                >
                  {label}
                </Link>
              )
            })}

            {DROPDOWNS.map(({ key, label, links }) => {
              const isActive = links.some((l) => pathname.startsWith(l.href))
              const isOpen = openDropdown === key
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    aria-expanded={isOpen}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap',
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/[0.08]'
                    )}
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 text-white/50 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Always rendered — visibility controlled by opacity/pointer-events for CSS transitions */}
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-1 bg-[#1B2B5E] border border-white/10 rounded-2xl shadow-2xl shadow-black/30 py-2 min-w-[200px] z-50 transition-all duration-150',
                      isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {links.map(({ label: linkLabel, href: linkHref }) => (
                      <Link
                        key={linkHref}
                        href={linkHref}
                        className="flex items-center px-4 py-2.5 mx-1 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-150 whitespace-nowrap"
                      >
                        {linkLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          {/* GROUP 3 — Right actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* EN/NL — desktop */}
            <div className="hidden lg:block">
              <LanguageSwitcher locale={locale} />
            </div>

            {/* Order Online — desktop */}
            <Link
              href={`${base}/menu`}
              className="hidden lg:flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/15 transition-all duration-200 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 text-white/70" />
              Order Online
            </Link>

            {/* Cart — desktop */}
            <button
              onClick={openCart}
              aria-label={`Open cart, ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
              className="relative p-2 cursor-pointer hidden lg:block"
            >
              <ShoppingCart className="w-5 h-5 text-white/70 hover:text-white transition-colors duration-150" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#D4AF37] text-[#1A1A1A] rounded-full text-[10px] font-bold flex items-center justify-center leading-none">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* Reserve a Table — desktop */}
            <Link
              href={`${base}/contact`}
              className="hidden lg:inline-flex items-center bg-[#D4AF37] text-[#1A1A1A] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#F5D36A] transition-all duration-200 whitespace-nowrap"
            >
              {tr.common.reserve}
            </Link>

            {/* Cart — mobile */}
            <button
              onClick={openCart}
              aria-label={`Open cart, ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
              className="relative p-2 cursor-pointer lg:hidden"
            >
              <ShoppingCart className="w-5 h-5 text-white/70" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#D4AF37] text-[#1A1A1A] rounded-full text-[10px] font-bold flex items-center justify-center leading-none">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile: dark backdrop ─── */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Mobile: side panel ─── */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 flex flex-col bg-[#1B2B5E] transition-transform duration-300 ease-in-out lg:hidden'
          , mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Panel header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <Link href={base} onClick={() => setMobileOpen(false)}>
            <Image
              src={RESTAURANT.logo}
              alt={`${RESTAURANT.name} logo`}
              width={140}
              height={52}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable nav list */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-4 py-3 text-base font-medium rounded-xl transition-all duration-150 border-b border-white/5',
                  isActive ? 'text-[#D4AF37]' : 'text-white hover:bg-white/[0.08]'
                )}
              >
                {label}
              </Link>
            )
          })}

          {DROPDOWNS.map(({ key, label: groupLabel, links }) => (
            <div key={key} className="mt-1">
              <p className="px-4 pt-5 pb-2 text-[#D4AF37] text-xs uppercase tracking-widest font-medium">
                {groupLabel}
              </p>
              {links.map(({ label: linkLabel, href: linkHref }) => (
                <Link
                  key={linkHref}
                  href={linkHref}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] rounded-lg transition-all duration-150"
                >
                  {linkLabel}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Panel footer CTAs */}
        <div className="border-t border-white/10 px-4 py-5 space-y-3 flex-shrink-0">
          <Link
            href={`${base}/menu`}
            onClick={() => setMobileOpen(false)}
            className="block w-full border border-white/20 text-white py-3 rounded-xl text-sm font-medium text-center hover:bg-white/[0.08] transition-all duration-150"
          >
            Order Online
          </Link>
          <Link
            href={`${base}/contact`}
            onClick={() => setMobileOpen(false)}
            className="block w-full bg-[#D4AF37] text-[#1A1A1A] py-3 rounded-xl text-sm font-semibold text-center hover:bg-[#F5D36A] transition-all duration-150"
          >
            {tr.common.reserve}
          </Link>
          <div className="flex justify-center pt-1 pb-2">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </>
  )
}
