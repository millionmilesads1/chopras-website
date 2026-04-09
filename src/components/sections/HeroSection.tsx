'use client'

import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function HeroSection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dllsnz1uz/video/upload/v1775769823/hero-video_e0kxxg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">

            {/* Eyebrow pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-medium mb-8 backdrop-blur-sm">
              <span className="inline-block w-1 h-1 rounded-full bg-[#D4AF37]" />
              {tr.home.heroLabel} &middot; Est. 2023
            </span>

            <h1 className="font-heading font-bold text-[#FFFAF5] leading-tight max-w-5xl mx-auto">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                Den Haag&apos;s Best Indian Restaurant - Chopras Indian Restaurant
              </span>
            </h1>

            <div className="flex items-center gap-3 my-7">
              <div className="w-10 h-px bg-[#D4AF37]/60" />
              <span className="text-[#D4AF37] text-sm">✦</span>
              <div className="w-10 h-px bg-[#D4AF37]/60" />
            </div>

            <p className="font-body font-light text-lg text-white/70 max-w-md text-center leading-relaxed">
              Authentic Indian food in Den Haag  -  fresh from the tandoor,
              spices from India, made with love on Leyweg.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center">
              {/* Primary CTA  -  button-in-button */}
              <Link
                href={`${base}/contact`}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#D4AF37] pl-7 pr-2 py-2 text-[#1A1A1A] text-sm font-semibold uppercase tracking-widest transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#e8c84a] active:scale-[0.98] min-h-[48px]"
              >
                Reserve a Table
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-black/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="1.5" stroke="currentColor">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href={`${base}/menu`}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 pl-7 pr-2 py-2 text-white text-sm uppercase tracking-widest transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/50 hover:bg-white/10 active:scale-[0.98] min-h-[48px] backdrop-blur-sm"
              >
                {tr.common.viewMenu}
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="1.5" stroke="currentColor">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] text-white/35 uppercase tracking-[0.2em]">Scroll</span>
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" strokeWidth="1" stroke="rgba(255,255,255,0.4)" className="animate-bounce">
            <rect x="1" y="1" width="16" height="22" rx="8" />
            <line x1="9" y1="5" x2="9" y2="10" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Mobile floating CTA  -  double-bezel pill */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="rounded-full bg-[#D4AF37]/10 p-1.5 ring-1 ring-[#D4AF37]/20">
          <Link
            href={`${base}/contact`}
            className="group flex items-center justify-between rounded-full bg-[#D4AF37] pl-6 pr-2 py-2 text-[#1A1A1A] text-sm font-semibold uppercase tracking-widest shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            {tr.common.reserve}
            <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-black/10">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="1.5" stroke="currentColor">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
