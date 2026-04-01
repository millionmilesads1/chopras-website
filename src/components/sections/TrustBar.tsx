import { ShieldCheck, Flame, Leaf, CalendarDays, ParkingCircle } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: '100% Halal Certified' },
  { icon: Flame, label: 'Spices Ground Fresh from India' },
  { icon: Leaf, label: 'Vegetarian and Vegan Options' },
  { icon: CalendarDays, label: 'Private Event Hall' },
  { icon: ParkingCircle, label: 'Free Parking at Leyweg' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#1B2B5E] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-2 text-center ${
                i === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <Icon size={28} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
