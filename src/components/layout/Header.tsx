'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { RESTAURANT } from '@/lib/constants'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Vacancy', href: '/vacancy' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-brand-bg/95 backdrop-blur-sm',
          scrolled && 'shadow-md'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
              <Image
                src={RESTAURANT.logo}
                alt={`${RESTAURANT.name} logo`}
                width={160}
                height={60}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200 hover:text-brand-primary',
                      isActive
                        ? 'text-brand-primary underline underline-offset-4 decoration-brand-accent decoration-2'
                        : 'text-brand-text'
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1B2B5E', color: '#D4AF37' }}
              >
                Reserve a Table
              </Link>

              <button
                className="md:hidden p-2 rounded-md text-brand-text hover:text-brand-primary transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-brand-bg transition-transform duration-300 ease-in-out',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Offset for sticky header height */}
        <div className="mt-16 flex flex-col flex-1 px-6 pt-10 gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-2xl font-heading font-semibold transition-colors duration-200',
                  isActive ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
                )}
              >
                {label}
              </Link>
            )
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold w-full"
            style={{ backgroundColor: '#1B2B5E', color: '#D4AF37' }}
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </>
  )
}
