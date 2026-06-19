'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Dancing_Script } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const SLIDES = [
  {
    mainPhoto:   '/prewedding-20260619T072911Z-3-001/prewedding/074A1436.jpg',
    accentPhoto: '/prewedding-20260619T072911Z-3-001/prewedding/IshaKush-093.jpg',
    category: 'Pre-Wedding',
    label: 'Love in the',
    headline: 'Golden Light',
    sub: 'Isha & Kush · Vadodara',
    index: '01',
  },
  {
    mainPhoto:   '/wedd-20260619T073956Z-3-001/wedd/21.jpg',
    accentPhoto: '/wedd-20260619T073956Z-3-001/wedd/45.jpg',
    category: 'Wedding',
    label: 'Stories of',
    headline: 'Forever',
    sub: 'Aanya & Rajan · Vadodara',
    index: '02',
  },
  {
    mainPhoto:   'https://photofilms.in/images/slider/03.webp',
    accentPhoto: 'https://photofilms.in/images/slider/06.webp',
    category: 'Signature Work',
    label: 'Written in',
    headline: 'Gold',
    sub: 'Across India & Beyond',
    index: '03',
  },
]

export default function PortfolioScatter() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const slide = SLIDES[current]

  return (
    <section className="bg-[#faf8f5] border-y border-dark/[0.06] overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '88vh' }}>

        {/* ── LEFT: Photos ─────────────────────────────────── */}
        <div className="relative lg:w-[55%] overflow-hidden" style={{ minHeight: '60vw', maxHeight: '88vh' }}>

          {/* Main photo */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`main-${current}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.mainPhoto}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                aria-hidden
              />
              {/* Soft fade right into text panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#faf8f5]/70" />
            </motion.div>
          </AnimatePresence>

          {/* Accent photo — bottom-right inset with thin frame */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`acc-${current}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-20 shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
              style={{
                bottom: '7%',
                right: '8%',
                width: 'clamp(110px, 17%, 200px)',
                aspectRatio: '3/4',
                outline: '4px solid #faf8f5',
                outlineOffset: '-2px',
              }}
            >
              <Image
                src={slide.accentPhoto}
                alt=""
                fill
                className="object-cover"
                sizes="200px"
                aria-hidden
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: Text panel ────────────────────────────── */}
        <div className="relative lg:w-[45%] flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-24 bg-[#faf8f5]">

          {/* Faint bg index number */}
          <span
            aria-hidden
            className="absolute bottom-8 right-10 font-serif font-bold leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(80px, 10vw, 140px)', color: 'rgba(26,22,20,0.028)' }}
          >
            {slide.index}
          </span>

          {/* Category eyebrow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cat-${current}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-7 h-px bg-gold/55" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold">
                  {slide.category}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Script label + Serif headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hl-${current}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={`${script.className} text-dark/45 mb-2`} style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
                {slide.label}
              </p>
              <h2
                className="font-serif text-dark leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: 'clamp(46px, 6vw, 86px)' }}
              >
                <em className="italic text-gold">{slide.headline}</em>
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Couple / location */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-[11px] font-semibold uppercase tracking-[0.26em] text-dark/35 mb-10"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* Divider */}
          <div className="w-10 h-px bg-dark/[0.1] mb-10" />

          {/* CTA */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 self-start group"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-dark/45 group-hover:text-dark transition-colors duration-300">
              Browse Portfolio
            </span>
            <span className="w-8 h-8 flex items-center justify-center border border-dark/15 group-hover:border-gold/60 group-hover:bg-gold/8 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-dark/30 group-hover:text-gold transition-colors duration-300" />
            </span>
          </Link>

          {/* Counter + dots */}
          <div className="flex items-center gap-5 mt-14">
            <span className="font-serif text-dark/20 text-sm tabular-nums">
              {String(current + 1).padStart(2, '0')}
              <span className="mx-1.5 text-dark/10">/</span>
              {String(SLIDES.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2 items-center">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-[2px] bg-gold'
                      : 'w-[3px] h-[3px] rounded-full bg-dark/20 hover:bg-dark/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
