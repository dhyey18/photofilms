'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const cards = [
  {
    title: 'Wedding Highlight Film',
    subtitle: 'Slow-motion cinematic wedding moments',
    poster: 'https://photofilms.in/images/slider/03.webp',
        video: '/136133-764371501_medium.mp4',

  },
  {
    title: 'Floral & Décor Stories',
    subtitle: 'Elegant Indian wedding decoration',
    poster: 'https://photofilms.in/images/slider/06.webp',
    video: '/157657-815175893_medium.mp4',
  },
  {
    title: 'Sacred Rituals',
    subtitle: 'Traditional ceremony documentation',
    poster: 'https://photofilms.in/images/slider/09.webp',
    video: '/14299460-hd_1920_1080_25fps.mp4',

  },
]

type Card = (typeof cards)[number]

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
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(18,16,14,0.92)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 16 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl mx-4 md:mx-10 bg-dark border border-warm-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold accent top bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-white/8">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              Photofilms · Cinematic Stories
            </p>
            <h3 className="font-serif text-warm-white text-xl mt-0.5">{card.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 border border-warm-white/20 text-warm-white/50 hover:text-warm-white hover:border-warm-white/40 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video bg-black">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={card.video}
            controls
            className="w-full h-full"
            poster={card.poster}
          />
        </div>

        {/* Footer hint */}
        <div className="px-6 py-3 border-t border-warm-white/8">
          <p className="text-warm-white/30 text-xs">Press Esc or click outside to close</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function VideoCard({
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

  useEffect(() => { setMounted(true) }, [])

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
    >
      {/* Poster image — fades out when video preview plays */}
      <Image
        src={card.poster}
        alt={card.title}
        fill
        className={`object-cover transition-opacity duration-500 ${previewing ? 'opacity-0' : 'opacity-100'}`}
        sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
      />

      {/* Hover-preview video — client-only to avoid SSR hydration mismatch */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {mounted && (
        <video
          ref={videoRef}
          src={card.video}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            previewing ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          previewing ? 'bg-dark/30' : 'bg-dark/40'
        }`}
      />

      {/* Play ring — hidden while preview plays */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          previewing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-warm-white/70 bg-dark/20 backdrop-blur-sm group-hover:w-20 group-hover:h-20 group-hover:border-gold group-hover:bg-dark/30 transition-all duration-300">
          <Play
            className="ml-0.5 w-5 h-5 text-warm-white group-hover:w-7 group-hover:h-7 group-hover:text-gold-light transition-all duration-300"
            fill="currentColor"
          />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent">
        <p
          className={`text-warm-white font-medium leading-tight ${
            featured ? 'text-base' : 'text-sm'
          }`}
        >
          {card.title}
        </p>
        <p className="text-warm-white/55 text-xs mt-0.5">{card.subtitle}</p>
      </div>
    </button>
  )
}

export default function VideoShowreel() {
  const [activeCard, setActiveCard] = useState<Card | null>(null)
  const close = useCallback(() => setActiveCard(null), [])

  return (
    <>
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Cinematic Stories"
              title="Stories that move you"
              subtitle="Every wedding is a film in waiting. Our cinematic team crafts emotion-driven films you will treasure for a lifetime."
              centered
              light
            />
          </ScrollReveal>

          {/* Editorial asymmetric grid: large left + 2 stacked right */}
          <div className="mt-14 flex flex-col gap-3 md:grid md:grid-cols-3 md:grid-rows-2 md:h-[480px]">
            <ScrollReveal delay={0} className="h-72 md:h-auto md:col-span-2 md:row-span-2">
              <VideoCard card={cards[0]} onPlay={() => setActiveCard(cards[0])} featured />
            </ScrollReveal>
            {cards.slice(1).map((card, i) => (
              <ScrollReveal
                key={card.title}
                delay={(i + 1) * 0.12}
                className="h-52 md:h-auto"
              >
                <VideoCard card={card} onPlay={() => setActiveCard(card)} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.35}>
            <p className="mt-8 text-center text-warm-white/30 text-xs tracking-wide">
              Hover to preview · Click to watch full film
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {activeCard && <VideoModal card={activeCard} onClose={close} />}
      </AnimatePresence>
    </>
  )
}
