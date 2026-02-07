import { getLandingPageSettings, getFeatures, getTestimonials } from '@/lib/cosmic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FooterSection from '@/components/FooterSection'

export const revalidate = 60

export default async function HomePage() {
  const [settings, features, testimonials] = await Promise.all([
    getLandingPageSettings(),
    getFeatures(),
    getTestimonials(),
  ])

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <p className="text-white/60 text-lg">Landing page settings not found.</p>
      </div>
    )
  }

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <main className="min-h-screen bg-navy-900 overflow-hidden">
      <Navbar
        productName={settings.metadata.product_name}
        ctaText={settings.metadata.cta_button_text}
        ctaUrl={settings.metadata.cta_button_url}
        navLinks={navLinks}
      />
      <HeroSection settings={settings} />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <FooterSection settings={settings} />
    </main>
  )
}