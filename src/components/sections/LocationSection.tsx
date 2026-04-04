'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { RESTAURANT } from '@/lib/constants'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type HourEntry = {
  day: string
  dayNl: string
  open: boolean
  from?: string
  to?: string
}

export default function LocationSection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const hours = RESTAURANT.hours as unknown as HourEntry[]
  const { ref, inView } = useInView()

  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 60%, #0F1040 100%)' }}
    >
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* LEFT: Info card */}
        <div>
          <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">
            Find Us
          </p>
          <h2 className="font-heading font-semibold text-white text-4xl leading-tight">
            {tr.home.locationH2}
          </h2>

          <div className="mt-8 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[#D4AF37] w-5 h-5 mt-1 flex-shrink-0" />
              <div className="font-body text-white/80 text-base leading-relaxed">
                <p>{RESTAURANT.address.street}</p>
                <p>
                  {RESTAURANT.address.postcode} {RESTAURANT.address.city}
                </p>
                <p>{RESTAURANT.address.country}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
              <a
                href={`tel:${RESTAURANT.contact.phone}`}
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                {RESTAURANT.contact.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
              <a
                href={`mailto:${RESTAURANT.contact.email}`}
                className="font-body text-white/80 hover:text-white transition-colors"
              >
                {RESTAURANT.contact.email}
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock size={20} className="text-[#D4AF37] w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                {hours.map((hour) => (
                  <div key={hour.day} className="flex gap-3 font-body text-sm text-white/70 py-0.5">
                    <span className="w-28 flex-shrink-0">
                      {locale === 'nl' ? hour.dayNl : hour.day}
                    </span>
                    {hour.open ? (
                      <span>
                        {hour.from} &ndash; {hour.to}
                      </span>
                    ) : (
                      <span className="text-white/40">{tr.common.closed}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3">
            <Link
              href={`/${locale}/contact`}
              className="bg-[#D4AF37] text-[#1A1A1A] font-semibold w-full py-4 text-center uppercase tracking-widest text-sm hover:bg-[#C49B2A] transition-all font-body"
            >
              Reserve a Table
            </Link>
            <a
              href="https://maps.google.com/?q=Leyweg+986+Den+Haag"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white w-full py-4 text-center uppercase tracking-widest text-sm hover:bg-white/10 transition-all font-body"
            >
              {tr.common.getDirections}
            </a>
          </div>
        </div>

        {/* RIGHT: Map */}
        <div className="rounded-2xl overflow-hidden min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.2!2d4.2765!3d52.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47890e3caeb27bfd%3A0x8c0b2b2a5c3e4f9a!2sLeyweg%20986%2C%202545%20GW%20Den%20Haag!5e0!3m2!1sen!2snl!4v1680000000000!5m2!1sen!2snl"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chopras Indian Restaurant locatie in Den Haag op Google Maps"
          />
        </div>
      </div>
    </section>
  )
}
