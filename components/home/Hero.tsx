'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'

const slides = [
  { src: 'https://photofilms.in/images/slider/01.webp', alt: 'Photofilms wedding photography' },
  { src: 'https://photofilms.in/images/slider/02.webp', alt: 'Couple portrait session' },
  { src: 'https://photofilms.in/images/slider/03.webp', alt: 'Wedding ceremony coverage' },
  { src: 'https://photofilms.in/images/slider/04.webp', alt: 'Bridal portrait' },
  { src: 'https://photofilms.in/images/slider/05.webp', alt: 'Golden hour couple shoot' },
  { src: 'https://photofilms.in/images/slider/06.webp', alt: 'Pre-wedding photography' },
  { src: 'https://photofilms.in/images/slider/07.webp', alt: 'Wedding reception moments' },
  { src: 'https://photofilms.in/images/slider/08.webp', alt: 'Candid wedding photography' },
  { src: 'https://photofilms.in/images/slider/09.webp', alt: 'Cinematic wedding film still' },
  { src: 'https://photofilms.in/images/slider/10.webp', alt: 'Heritage venue wedding' },
]

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918866008868'
const waMessage = encodeURIComponent("Hi! I'd like to check availability and book Photofilms for my wedding.")
const waHref = `https://wa.me/${number}?text=${waMessage}`

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4"
        >
          Vadodara & Gujarat · Since 2012
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-serif text-5xl md:text-7xl text-warm-white leading-tight"
        >
          Capturing your love story{' '}
          <span className="italic text-gold-light">across Gujarat</span>{' '}
          & beyond
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 text-lg text-warm-white/80 max-w-xl mx-auto leading-relaxed"
        >
          Award-winning wedding photography, cinematic films, and drone aerial coverage — crafted with artistic vision and heartfelt dedication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-gold text-dark font-semibold px-8 py-4 text-base tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Book Your Date
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-warm-white/60 text-warm-white font-semibold px-8 py-4 text-base tracking-wide hover:bg-warm-white/10 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Quick WhatsApp Inquiry
          </a>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-gold' : 'bg-warm-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-warm-white/50"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
