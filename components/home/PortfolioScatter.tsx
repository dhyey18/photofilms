'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const SLIDES = [
  {
    mainPhoto: '/prewedding-20260619T072911Z-3-001/prewedding/074A1436.jpg',
    accentPhoto: '/prewedding-20260619T072911Z-3-001/prewedding/IshaKush-093.jpg',
    category: 'Pre-Wedding',
    headline: 'Golden',
    headlineAccent: 'Light',
    sub: 'Isha & Kush · Vadodara',
    index: '01',
  },
  {
    mainPhoto: '/wedd-20260619T073956Z-3-001/wedd/21.jpg',
    accentPhoto: '/wedd-20260619T073956Z-3-001/wedd/45.jpg',
    category: 'Wedding',
    headline: 'Stories of',
    headlineAccent: 'Forever',
    sub: 'Aanya & Rajan · Vadodara',
    index: '02',
  },
  {
    mainPhoto: 'https://photofilms.in/images/slider/03.webp',
    accentPhoto: 'https://photofilms.in/images/slider/06.webp',
    category: 'Signature Work',
    headline: 'Written in',
    headlineAccent: 'Gold',
    sub: 'Across India & Beyond',
    index: '03',
  },
]

export default function PortfolioScatter() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(current)
      setCurrent((p) => (p + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(t)
  }, [current])

  const slide = SLIDES[current]

  return (
    <section className="relative bg-[#0c0b09] overflow-hidden" style={{ minHeight: '92vh' }}>

      {/* ── Grain texture overlay ─────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px',
        }}
      />

      <div className="flex flex-col lg:flex-row min-h-[92vh]">

        {/* ── LEFT: Photo diptych ───────────────────────────── */}
        <div className="relative lg:w-[58%] overflow-hidden" style={{ minHeight: '55vw', maxHeight: '92vh' }}>

          {/* Main photo — full left panel */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`main-${current}`}
              initial={{ opacity: 0, scale: 1.04 }}
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
                sizes="(max-width: 1024px) 100vw, 58vw"
                aria-hidden
              />
              {/* Right-edge fade into dark bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0b09]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09]/50 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Accent photo — bottom-right corner inset */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`accent-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-20 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
              style={{
                bottom: '7%',
                right: '6%',
                width: 'clamp(110px, 18%, 200px)',
                aspectRatio: '3/4',
                border: '2px solid rgba(255,255,255,0.08)',
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

          {/* Film-strip left edge */}
          <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        </div>

        {/* ── RIGHT: Editorial text ─────────────────────────── */}
        <div className="relative lg:w-[42%] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-24">

          {/* Giant bg number */}
          <span
            aria-hidden
            className="absolute top-8 right-8 font-serif font-bold leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(90px, 12vw, 160px)', color: 'rgba(255,255,255,0.025)' }}
          >
            {slide.index}
          </span>

          {/* Category pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cat-${current}`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-gold/50" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold">
                  {slide.category}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hl-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="font-serif text-warm-white leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: 'clamp(48px, 6.5vw, 92px)' }}
              >
                {slide.headline}
                <br />
                <em className="italic text-gold-light">{slide.headlineAccent}</em>
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Sub line */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-warm-white/35 mb-10"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* Divider */}
          <div className="w-12 h-px bg-warm-white/10 mb-10" />

          {/* CTA */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 self-start group"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-white/55 group-hover:text-warm-white transition-colors duration-300">
              Browse Portfolio
            </span>
            <span className="w-8 h-8 flex items-center justify-center border border-warm-white/15 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-warm-white/40 group-hover:text-gold transition-colors duration-300" />
            </span>
          </Link>

          {/* Slide counter + dots */}
          <div className="flex items-center gap-5 mt-14">
            <span className="font-serif text-warm-white/20 text-sm tabular-nums">
              {String(current + 1).padStart(2, '0')}
              <span className="mx-1.5 text-warm-white/12">/</span>
              {String(SLIDES.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPrev(current); setCurrent(i) }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-400 ${
                    i === current
                      ? 'w-7 h-[3px] bg-gold'
                      : 'w-[3px] h-[3px] rounded-full bg-warm-white/20 hover:bg-warm-white/45'
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
