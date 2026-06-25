'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LOGO_SRC = 'https://photofilms.in/images/logolight-photofilms.svg'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen || !isHome
          ? 'bg-warm-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo — left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Photofilms"
            width={160}
            height={40}
            className={`h-12 w-auto transition-all duration-300 ${
              scrolled || menuOpen || !isHome ? 'brightness-0' : 'brightness-100'
            }`}
            priority
          />
        </Link>

        {/* Desktop nav — right */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative inline-block text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5
                    after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300
                    ${isActive
                      ? 'text-gold after:w-full after:bg-gold'
                      : scrolled || !isHome
                      ? 'text-dark-muted hover:text-dark after:w-0 after:bg-dark hover:after:w-full'
                      : 'text-warm-white/80 hover:text-warm-white after:w-0 after:bg-warm-white hover:after:w-full'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled || menuOpen || !isHome ? 'text-dark' : 'text-warm-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-warm-white border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg font-medium border-b border-border/40 transition-colors ${
                      pathname === link.href ? 'text-gold' : 'text-dark hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
