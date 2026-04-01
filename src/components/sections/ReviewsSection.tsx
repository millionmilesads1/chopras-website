import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Priya S.',
    stars: 5,
    text: 'We came for a birthday dinner and stayed two hours longer than planned. The chilli paneer was extraordinary — bold, crispy, the right amount of heat. Staff treated us like family from the moment we walked in. Best Indian food in Den Haag, full stop.',
  },
  {
    name: 'Mark van der Berg',
    stars: 5,
    text: 'Stopped here on a whim after seeing it on Google and I am genuinely glad I did. The soya chaap is unlike anything I have had before — smoky, marinated, completely addictive. My Dutch friends who had never eaten Indian food before are now regulars. That says everything.',
  },
  {
    name: 'Fatima K.',
    stars: 5,
    text: 'As a Muslim family, finding a restaurant that is genuinely halal-certified and also serves food this good is rare. Chopras ticks every box. The kids loved the butter chicken, my husband ordered the mutton rogan josh and we are already planning our next visit.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="bg-[#1B2B5E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-2">
          What Den Haag Says About Us
        </h2>
        <p className="text-center text-[#D4AF37]/80 mb-10">
          Real guests. Real meals. Real opinions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-semibold text-[#1A1A1A] text-sm">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Chopras+Indian+Restaurant+Den+Haag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] underline underline-offset-4 hover:text-[#D4AF37]/80 transition-colors"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
