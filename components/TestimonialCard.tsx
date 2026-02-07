import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400' : 'text-white/20'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const { customer_name, role, quote, avatar, rating } = testimonial.metadata

  return (
    <div className="group relative">
      <div className="glass-card p-8 h-full flex flex-col transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
        {/* Stars */}
        {rating && rating > 0 && (
          <div className="mb-5">
            <StarRating rating={rating} />
          </div>
        )}

        {/* Quote */}
        <blockquote className="flex-1 mb-6">
          <p className="text-white/70 leading-relaxed text-base italic">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          {avatar && (
            <img
              src={`${avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress&q=85`}
              alt={customer_name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
            />
          )}
          <div>
            <p className="font-semibold text-white text-sm">{customer_name}</p>
            {role && (
              <p className="text-white/40 text-xs">{role}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}