import { ShieldCheck, Flame, CalendarDays, ParkingCircle, Star } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function TrustBar({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)

  const items = [
    { icon: ShieldCheck, label: tr.common.halalCertified },
    { icon: Flame, label: tr.common.freshSpices },
    { icon: CalendarDays, label: 'Open Tue\u2013Sun' },
    { icon: ParkingCircle, label: tr.common.freeParking },
    { icon: Star, label: tr.common.privateHall },
  ]

  return (
    <div className="bg-[#1B2B5E] py-4">
      <div className="flex gap-8 md:gap-16 justify-start md:justify-center overflow-x-auto px-6 md:px-0 no-scrollbar">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <Icon size={16} className="text-[#D4AF37]" />
            <span className="font-body text-xs text-white/70 uppercase tracking-wider whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
