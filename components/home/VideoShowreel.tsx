'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const cards = [
  // {
  //   number: '01',
  //   title: 'Aerial Love Stories',
  //   subtitle: 'Drone · 4K Cinematic',
  //   poster: 'https://photofilms.in/images/slider/04.webp',
  //   video: '/15083324_4096_2160_25fps.mp4',
  // },
  // {
  //   number: '02',
  //   title: 'Intimate Portraits',
  //   subtitle: 'Portrait · 100fps Slow Motion',
  //   poster: 'https://photofilms.in/images/slider/07.webp',
  //   video: '/14249219_1920_1080_100fps.mp4',
  // },
  {
    number: '03',
    title: 'Cinematic Moments',
    subtitle: 'Wedding Film · 4K Ultra HD',
    poster: 'https://photofilms.in/images/slider/10.webp',
    video: '/8751561-uhd_4096_2160_24fps.mp4',
  },
  {
    number: '04',
    title: 'The Sacred Exchange',
    subtitle: 'Ceremony · Wedding Highlights',
    poster: 'https://photofilms.in/images/slider/02.webp',
    video: '/276161_medium.mp4',
  },
  {
    number: '05',
    title: 'Golden Hour Moments',
    subtitle: 'Reception · Candid Storytelling',
    poster: 'https://photofilms.in/images/slider/05.webp',
    video: '/2339-157269920_medium.mp4',
  },
]

type Card = (typeof cards)[number]

/* ── Fullscreen modal ──────────────────────────────── */
function VideoModal({ card, onClose }: { card: Card; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 10 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl mx-4 md:mx-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Letterbox top bar */}
        <div className="h-9 bg-black flex items-center justify-between px-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-warm-white/25">
            {card.number} — {card.subtitle}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-warm-white/35 hover:text-warm-white transition-colors"
            aria-label="Close"
          >
            <X className="w-3 h-3" /> Esc
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video bg-black">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={card.video}
            controls
            autoPlay
            className="w-full h-full"
            poster={card.poster}
          />
        </div>

        {/* Letterbox bottom bar */}
        <div className="h-9 bg-black flex items-center px-5">
          <p className="font-serif italic text-warm-white/25 text-sm">{card.title}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

/* ── Cinema card ───────────────────────────────────── */
function CinemaCard({
  card,
  onPlay,
  featured = false,
}: {
  card: Card
  onPlay: () => void
  featured?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [previewing, setPreviewing] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseEnter = () => {
    setPreviewing(true)
    videoRef.current?.play().catch(() => {})
  }
  const handleMouseLeave = () => {
    setPreviewing(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden group block"
      aria-label={`Watch ${card.title}`}
    >
      {/* Poster image */}
      <Image
        src={card.poster}
        alt={card.title}
        fill
        className={`object-cover brightness-[0.78] transition-all duration-700 ease-out ${
          previewing
            ? 'opacity-0 scale-[1.05]'
            : 'opacity-100 scale-100 group-hover:scale-[1.03]'
        }`}
        sizes={featured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
      />

      {/* Hover-preview video — skipped on touch devices to save bandwidth */}
      {mounted && !isTouch && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          ref={videoRef}
          src={card.video}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            previewing ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Cinematic overlay — heavy bottom, light top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

      {/* Top gold line — reveals on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Film number — faint watermark top-right */}
      <span
        aria-hidden
        className="absolute top-4 right-5 font-serif font-bold text-warm-white/[0.07] leading-none select-none pointer-events-none"
        style={{ fontSize: featured ? 'clamp(50px, 8vw, 100px)' : 'clamp(36px, 5vw, 70px)' }}
      >
        {card.number}
      </span>

      {/* Play ring — shown on hover, hidden while video previews */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
          previewing ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className={`relative flex items-center justify-center rounded-full border border-warm-white/45 group-hover:border-gold/70 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
              featured ? 'w-20 h-20' : 'w-16 h-16'
            }`}
          >
            <Play
              className={`text-warm-white fill-current ml-0.5 transition-colors duration-300 group-hover:text-gold-light ${
                featured ? 'w-7 h-7' : 'w-5 h-5'
              }`}
            />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full border border-warm-white/15 scale-150 animate-[ping_2.5s_ease-out_infinite] opacity-0 group-hover:opacity-100" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-warm-white/45">
            Watch Film
          </span>
        </div>
      </div>

      {/* Bottom info */}
      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${
          featured ? 'p-6 md:p-10' : 'p-5 md:p-7'
        }`}
      >
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-gold mb-2">
            {card.subtitle}
          </p>
          <h3
            className={`font-serif text-warm-white leading-tight ${
              featured ? 'text-xl md:text-3xl lg:text-4xl' : 'text-lg md:text-2xl'
            }`}
          >
            {card.title}
          </h3>
        </div>
        {/* Arrow icon — slides in on hover */}
        <div className="shrink-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 hidden md:block">
          <div className="w-10 h-10 flex items-center justify-center border border-warm-white/20 group-hover:border-gold/40 transition-colors duration-300">
            <Play className="w-3.5 h-3.5 text-warm-white/50 fill-current ml-0.5" />
          </div>
        </div>
      </div>
    </button>
  )
}

/* ── Section ───────────────────────────────────────── */
export default function VideoShowreel() {
  const [activeCard, setActiveCard] = useState<Card | null>(null)
  const close = useCallback(() => setActiveCard(null), [])

  return (
    <>
      <section className="bg-[#060504] overflow-hidden">
        {/* Header */}
        <div className="relative px-6 pt-20 pb-12 text-center overflow-hidden">
          {/* Giant bg watermark */}
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none text-warm-white/[0.022]"
            style={{ fontSize: 'clamp(60px, 15vw, 210px)' }}
          >
            CINEMA
          </span>
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-12 h-px bg-gold/40" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                Cinematic Stories
              </p>
              <span className="w-12 h-px bg-gold/40" />
            </div>
            <h2 className="font-serif text-5xl md:text-[4rem] lg:text-[4.8rem] text-warm-white leading-[1.04]">
              Stories that{' '}
              <em className="italic text-gold-light">move you</em>
            </h2>
            <p className="mt-5 text-warm-white/32 text-base max-w-xs mx-auto leading-relaxed">
              Every wedding is a film waiting to be told.
            </p>
          </div>
        </div>

        {/* Cards — gap-px creates film-strip separation lines */}
        <div className="flex flex-col gap-px bg-warm-white/[0.04]">
          {/* Featured — wide cinema ratio */}
          <ScrollReveal direction="none">
            <div className="aspect-video md:aspect-[21/9] w-full">
              <CinemaCard
                card={cards[0]}
                onPlay={() => setActiveCard(cards[0])}
                featured
              />
            </div>
          </ScrollReveal>

          {/* Row 2 — cards 02 & 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-warm-white/[0.04]">
            {cards.slice(1, 3).map((card) => (
              <ScrollReveal key={card.number} direction="none">
                <div className="aspect-video">
                  <CinemaCard card={card} onPlay={() => setActiveCard(card)} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 3 — cards 04 & 05 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-warm-white/[0.04]">
            {cards.slice(3).map((card) => (
              <ScrollReveal key={card.number} direction="none">
                <div className="aspect-video">
                  <CinemaCard card={card} onPlay={() => setActiveCard(card)} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="py-7 text-center">
          <p className="text-warm-white/18 text-[10px] font-semibold uppercase tracking-[0.35em]">
            Hover to preview &nbsp;·&nbsp; Click to watch full film
          </p>
        </div>
      </section>

      <AnimatePresence>
        {activeCard && <VideoModal card={activeCard} onClose={close} />}
      </AnimatePresence>
    </>
  )
}
