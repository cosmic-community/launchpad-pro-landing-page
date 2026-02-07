import { LandingPageSettings } from '@/types'

interface HeroSectionProps {
  settings: LandingPageSettings
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const { headline, subheadline, hero_image, cta_button_text, cta_button_url, social_proof_text } =
    settings.metadata

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Social proof badge */}
        {social_proof_text && (
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/80 glass-card animate-fade-in">
            {social_proof_text}
          </div>
        )}

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up">
          <span className="gradient-text">{headline}</span>
        </h1>

        {/* Subheadline */}
        {subheadline && (
          <p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {subheadline}
          </p>
        )}

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a href={cta_button_url || '#'} className="cta-button">
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
          <a href="#features" className="cta-button-outline">
            See How It Works
          </a>
        </div>

        {/* Hero image */}
        {hero_image && (
          <div
            className="relative max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-cyan/20 rounded-2xl blur-2xl" />
            <div className="relative glass-card p-2 sm:p-3 overflow-hidden group">
              <img
                src={`${hero_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress&q=85`}
                alt={settings.metadata.product_name}
                width={800}
                height={450}
                className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}