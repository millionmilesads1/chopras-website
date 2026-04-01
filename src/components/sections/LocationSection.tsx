import { MapPin, Phone, Mail } from 'lucide-react'
import { RESTAURANT } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section className="bg-[#FFFAF5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-10">
          Find Us at Leyweg, Den Haag
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.123!2d4.2932!3d52.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzMwLjAiTiA0wrAxNyc1NS41IkU!5e0!3m2!1sen!2snl!4v1234567890"
            width="100%"
            height={400}
            className="rounded-2xl w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chopras Indian Restaurant location in Den Haag on Google Maps"
          />

          {/* Details card */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
            {/* Address */}
            <div className="flex gap-3">
              <MapPin size={20} className="text-[#1B2B5E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#1A1A1A]">{RESTAURANT.address.street}</p>
                <p className="text-gray-600">{RESTAURANT.address.postcode} {RESTAURANT.address.city}</p>
                <p className="text-gray-600">{RESTAURANT.address.country}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center">
              <Phone size={20} className="text-[#1B2B5E] flex-shrink-0" />
              <a
                href={`tel:${RESTAURANT.contact.phone}`}
                className="text-[#1B2B5E] font-semibold hover:underline"
              >
                {RESTAURANT.contact.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center">
              <Mail size={20} className="text-[#1B2B5E] flex-shrink-0" />
              <a
                href={`mailto:${RESTAURANT.contact.email}`}
                className="text-[#1B2B5E] font-semibold hover:underline"
              >
                {RESTAURANT.contact.email}
              </a>
            </div>

            {/* Hours */}
            <div>
              <p className="font-semibold text-[#1A1A1A] mb-2">Opening Hours</p>
              <table className="w-full text-sm">
                <tbody>
                  {RESTAURANT.hours.map((hour) => (
                    <tr key={hour.day} className="border-b border-gray-100 last:border-0">
                      <td className="py-1.5 font-medium text-[#1A1A1A] w-32">
                        {hour.day}
                      </td>
                      <td className="py-1.5">
                        {hour.open && 'from' in hour ? (
                          <span className="text-[#1A1A1A]">{hour.from} – {hour.to}</span>
                        ) : (
                          <span className="text-red-500">Closed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Transport & Parking notes */}
            <p className="text-gray-500 text-sm">
              Accessible by tram and bus — Leyweg stop nearby
            </p>
            <p className="text-gray-500 text-sm">
              Free parking available at Leyweg shopping area
            </p>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=Leyweg+986+Den+Haag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#1B2B5E] font-semibold hover:underline underline-offset-4"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
