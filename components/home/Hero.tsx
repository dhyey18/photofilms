'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'

/* Use the local cinematic reel already in /public */
const HERO_VIDEO = '/make_a_indian_weding_cenematic.mp4'

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

/* Split heading into animatable word groups */
const headingParts: { text: string; className?: string }[] = [
  { text: 'Capturing' },
  { text: 'your' },
  { text: 'love' },
  { text: 'story' },
  { text: 'across Gujarat', className: 'italic text-gold-light' },
  { text: '& beyond' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  /* Mount guard: video element is client-only to avoid SSR hydration mismatch */
  useEffect(() => { setMounted(true) }, [])

  /* Cycle image slides (active even when video plays — dots still work) */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* ── Cinematic video background — client-only to avoid SSR hydration mismatch ── */}
      {mounted && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* ── Image slider — fallback while video loads / mobile ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoReady ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Ken Burns: slow zoom while the slide is active */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: 'linear' }}
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
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient overlays ───────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/80" />
      {/* Edge vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 110% 80% at 50% 50%, transparent 38%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* ── Hero content ────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow with flanking gold lines */}
        {/* <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 text-gold text-[11px] font-semibold uppercase tracking-[0.35em] mb-7"
        >
          <span aria-hidden="true" className="w-8 h-px bg-gold/55 flex-shrink-0" />
          Vadodara & Gujarat · Since 2012
          <span aria-hidden="true" className="w-8 h-px bg-gold/55 flex-shrink-0" />
        </motion.p> */}

        {/* Heading — each word slides in with staggered delay */}
        {/* <h1 className="font-serif text-5xl md:text-7xl lg:text-[82px] text-warm-white leading-[1.08] tracking-tight">
          {headingParts.map((part, i) => (
            <motion.span
              key={part.text}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35 + i * 0.1,
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-[0.22em] last:mr-0 ${part.className ?? ''}`}
            >
              {part.text}
            </motion.span>
          ))}
        </h1> */}

        {/* Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-lg md:text-xl text-warm-white/72 max-w-xl mx-auto leading-relaxed"
        >
          Award-winning wedding photography, cinematic films, and drone aerial
          coverage — crafted with artistic vision and heartfelt dedication.
        </motion.p> */}

        {/* CTA row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-gold text-dark font-semibold px-9 py-4 text-sm tracking-[0.12em] uppercase hover:bg-gold-dark hover:shadow-[0_0_32px_rgba(201,168,76,0.4)] transition-all duration-300"
          >
            Book Your Date
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-warm-white/45 text-warm-white font-semibold px-9 py-4 text-sm tracking-[0.12em] uppercase hover:border-warm-white/80 hover:bg-warm-white/8 backdrop-blur-sm transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            WhatsApp Inquiry
          </a>
        </motion.div> */}
      </div>

      {/* ── Slide dots (visible only when image slider is active) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-auto"
        aria-hidden={videoReady}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? 'w-7 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-warm-white/30 hover:bg-warm-white/60'
            }`}
          />
        ))}
      </motion.div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-warm-white/35 text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-warm-white/35" />
        </motion.div>
      </motion.div>
    </section>
  )
}
