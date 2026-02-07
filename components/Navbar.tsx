'use client'

import { useState, useEffect } from 'react'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  productName: string
  ctaText: string
  ctaUrl?: string
  navLinks: NavLink[]
}

export default function Navbar({
  productName,
  ctaText,
  ctaUrl,
  navLinks,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors duration-200">
                {productName}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/70 hover:text-white font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <a
                href={ctaUrl || '#'}
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue shadow-md shadow-accent-purple/20 hover:shadow-lg hover:shadow-accent-purple/30 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                {ctaText}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'w-0 opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-navy-800/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile close */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-xl">🚀</span>
              {productName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile links */}
          <div className="flex-1 flex flex-col gap-2 p-6">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-white/10">
            <a
              href={ctaUrl || '#'}
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/25 hover:shadow-xl hover:shadow-accent-purple/40 transition-all duration-300"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}