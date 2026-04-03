import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function HeroSection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Static hero background image */}
        <Image
          src="/images/hero/hero-poster.png"
          alt="Authentic Indian food at Chopras Indian Restaurant Den Haag"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Dark gradient overlay: navy top to charcoal bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B5E]/75 to-[#1A1A1A]/85" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          {/* Gold label */}
          <p className="uppercase tracking-widest text-[#D4AF37] text-xs mb-6">
            {tr.home.heroLabel} &middot; EST. 2023
          </p>

          {/* Main heading */}
          <h1 className="font-heading font-bold text-[#FFFAF5] leading-none">
            <span className="block text-5xl md:text-6xl lg:text-8xl">Chopras</span>
            <span className="block italic font-light text-4xl md:text-5xl lg:text-6xl mt-2">
              Indian Restaurant
            </span>
          </h1>

          {/* Gold divider */}
          <div className="w-16 h-px bg-[#D4AF37] mx-auto my-6" />

          {/* Subtext */}
          <p className="font-body font-light text-lg text-white/80 max-w-md text-center leading-relaxed">
            Fresh from the tandoor. Spices from India.
            <br />
            Made with love in Leyweg.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link
              href={`${base}/contact`}
              className="bg-[#D4AF37] text-[#1A1A1A] font-semibold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#C49B2A] transition-all duration-300 min-h-[48px] flex items-center justify-center"
            >
              Reserve a Table &rarr;
            </Link>
            <Link
              href={`${base}/menu`}
              className="border border-white/40 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm min-h-[48px] flex items-center justify-center"
            >
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-body text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} className="text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Mobile floating CTA */}
      <Link
        href={`${base}/contact`}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden block bg-[#D4AF37] text-[#1A1A1A] text-center font-semibold py-4 shadow-xl text-sm uppercase tracking-widest"
      >
        {tr.common.reserve}
      </Link>
    </>
  )
}
