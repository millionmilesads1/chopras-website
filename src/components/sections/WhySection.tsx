'use client'

import Link from 'next/link'
import { Flame, Users, CalendarDays, Shield, Clock } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function WhySection({ locale = 'en' }: { locale?: Locale }) {
  const t = getTranslations(locale)
  const base = `/${locale}`

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">
          Why Chopras
        </p>
        <h2 className="font-heading text-5xl md:text-6xl font-semibold text-[#1B2B5E] mt-3 max-w-3xl mx-auto">
          {t.home.whyH2}
        </h2>
      </div>

      {/* Three feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#1B2B5E]/5 flex items-center justify-center mb-6">
            <Flame className="w-7 h-7 text-[#1B2B5E]" />
          </div>
          <div className="w-10 h-0.5 bg-[#D4AF37] mb-5" />
          <h3 className="font-heading text-2xl font-semibold text-[#1B2B5E] leading-tight">
            {t.home.why1H3}
          </h3>
          <p className="text-[#1A1A1A]/60 text-base leading-relaxed mt-4">
            {t.home.why1P}
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start md:border-l md:border-[#1B2B5E]/10 md:pl-8">
          <div className="w-14 h-14 rounded-2xl bg-[#1B2B5E]/5 flex items-center justify-center mb-6">
            <Users className="w-7 h-7 text-[#1B2B5E]" />
          </div>
          <div className="w-10 h-0.5 bg-[#D4AF37] mb-5" />
          <h3 className="font-heading text-2xl font-semibold text-[#1B2B5E] leading-tight">
            {t.home.why2H3}
          </h3>
          <p className="text-[#1A1A1A]/60 text-base leading-relaxed mt-4">
            {t.home.why2P}
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start md:border-l md:border-[#1B2B5E]/10 md:pl-8">
          <div className="w-14 h-14 rounded-2xl bg-[#1B2B5E]/5 flex items-center justify-center mb-6">
            <CalendarDays className="w-7 h-7 text-[#1B2B5E]" />
          </div>
          <div className="w-10 h-0.5 bg-[#D4AF37] mb-5" />
          <h3 className="font-heading text-2xl font-semibold text-[#1B2B5E] leading-tight">
            {t.home.why3H3}
          </h3>
          <p className="text-[#1A1A1A]/60 text-base leading-relaxed mt-4">
            {t.home.why3P}
          </p>
          <Link
            href={`${base}/catering`}
            className="text-[#1B2B5E] text-sm font-semibold uppercase tracking-wider underline-offset-4 hover:underline mt-4 block"
          >
            Explore Catering →
          </Link>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="max-w-7xl mx-auto mt-20">
        <div
          className="rounded-3xl p-8"
          style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 100%)' }}
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white text-sm font-medium">100% Halal Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Freshly Ground Spices Daily</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white text-sm font-medium">Open Tue to Sun 16:30 to 22:30</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`${base}/contact`}
              className="bg-[#D4AF37] text-[#1A1A1A] px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#F5D36A] transition-all whitespace-nowrap"
            >
              Reserve a Table →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
