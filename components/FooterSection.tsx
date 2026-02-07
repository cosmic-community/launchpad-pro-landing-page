import { LandingPageSettings } from '@/types'

interface FooterSectionProps {
  settings: LandingPageSettings
}

export default function FooterSection({ settings }: FooterSectionProps) {
  const { product_name, cta_button_text, cta_button_url, footer_text } =
    settings.metadata

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Final CTA */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to <span className="gradient-text">get started?</span>
        </h2>
        <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
          Join thousands of teams already growing with {product_name}. Start your free trial today.
        </p>
        <a href={cta_button_url || '#'} className="cta-button mb-16 inline-flex">
          {cta_button_text}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        {/* Footer text */}
        {footer_text && (
          <p className="text-sm text-white/30 mt-12 leading-relaxed">
            {footer_text}
          </p>
        )}
      </div>
    </footer>
  )
}