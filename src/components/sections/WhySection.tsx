'use client'

import Link from 'next/link'
import { Flame, Users, Calendar, ShieldCheck, Sparkles, Clock } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function WhySection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()

  return (
    <section className="bg-[#1A1A1A] py-24 px-6 md:px-16">
      {/* Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">
          Why Chopras
        </p>
        <h2 className="font-heading font-semibold text-[#FFFAF5] text-5xl">
          {tr.home.whyH2}
        </h2>
      </div>

      {/* Bento grid */}
      <div
        ref={gridRef}
        className={`grid grid-cols-12 gap-4 max-w-7xl mx-auto transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Card 1 — large, col-span-7, row-span-2 */}
        <div className="col-span-12 md:col-span-7 md:row-span-2 bg-[#1B2B5E] rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[420px]">
          <div>
            <Flame size={36} className="text-[#D4AF37]" />
            <h3 className="font-heading font-semibold text-white text-3xl md:text-4xl mt-6 leading-tight">
              {tr.home.why1H3}
            </h3>
            <p className="font-body text-white/70 text-base mt-4 leading-relaxed">
              {tr.home.why1P}
            </p>
          </div>
        </div>

        {/* Card 2 — gold, col-span-5 */}
        <div className="col-span-12 md:col-span-5 bg-[#D4AF37] rounded-3xl p-8 flex flex-col justify-between min-h-[200px]">
          <Users size={28} className="text-[#1B2B5E]" />
          <div>
            <h3 className="font-heading font-semibold text-[#1B2B5E] text-2xl md:text-3xl mt-4 leading-tight">
              {tr.home.why2H3}
            </h3>
            <p className="font-body text-[#1B2B5E]/80 text-sm mt-2 leading-relaxed line-clamp-3">
              {tr.home.why2P}
            </p>
          </div>
        </div>

        {/* Card 3 — warm white, col-span-5 */}
        <div className="col-span-12 md:col-span-5 bg-[#FFFAF5] rounded-3xl p-8 flex flex-col justify-between min-h-[200px]">
          <Calendar size={28} className="text-[#1B2B5E]" />
          <div>
            <h3 className="font-heading font-semibold text-[#1B2B5E] text-2xl md:text-3xl mt-4 leading-tight">
              {tr.home.why3H3}
            </h3>
            <p className="font-body text-[#1A1A1A]/70 text-sm mt-2 leading-relaxed line-clamp-3">
              {tr.home.why3P}
            </p>
            <Link
              href={`${base}/catering`}
              className="font-body text-[#1B2B5E] text-xs uppercase font-semibold tracking-wider mt-4 block hover:underline underline-offset-4"
            >
              Explore catering &rarr;
            </Link>
          </div>
        </div>

        {/* Card 4 — wide trust bar, col-span-12 */}
        <div className="col-span-12 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-3xl p-6 md:p-8">
          {/* Desktop: horizontal flex */}
          <div className="hidden md:flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-heading text-[#FFFAF5] text-2xl">100% Halal Certified</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Sparkles size={24} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-heading text-[#FFFAF5] text-2xl">
                Freshly Ground Spices Daily
              </span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-heading text-[#FFFAF5] text-2xl">Open Tuesday to Sunday</span>
            </div>
            <Link
              href={`${base}/contact`}
              className="bg-[#D4AF37] text-[#1A1A1A] px-6 py-3 font-body font-semibold text-sm uppercase tracking-widest hover:bg-[#C49B2A] transition-all duration-300 flex-shrink-0"
            >
              Reserve Now &rarr;
            </Link>
          </div>
          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-body text-[#FFFAF5] text-sm">100% Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-body text-[#FFFAF5] text-sm">Fresh Spices Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#D4AF37] flex-shrink-0" />
              <span className="font-body text-[#FFFAF5] text-sm">Tue&ndash;Sun Open</span>
            </div>
            <Link
              href={`${base}/contact`}
              className="bg-[#D4AF37] text-[#1A1A1A] px-4 py-2 font-body font-semibold text-xs uppercase tracking-widest text-center"
            >
              Reserve &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
