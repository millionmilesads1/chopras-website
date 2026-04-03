import { Star } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function ReviewsSection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)

  const reviews = [
    { name: tr.home.review1Name, stars: 5, text: tr.home.review1Text },
    { name: tr.home.review2Name, stars: 5, text: tr.home.review2Text },
    { name: tr.home.review3Name, stars: 5, text: tr.home.review3Text },
  ]

  return (
    <section className="bg-[#1B2B5E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-2">
          {tr.home.reviewsH2}
        </h2>
        <p className="text-center text-[#D4AF37]/80 mb-10">{tr.home.reviewsSub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-semibold text-[#1A1A1A] text-sm"> -  {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Chopras+Indian+Restaurant/@52.0583,4.2932,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] underline underline-offset-4 hover:text-[#D4AF37]/80 transition-colors"
          >
            {tr.home.reviewsLink}
          </a>
        </div>
      </div>
    </section>
  )
}
