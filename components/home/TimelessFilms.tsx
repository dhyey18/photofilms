'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const films = [
  {
    couple: 'Isha & Kush',
    coupleItalic: '&',
    subtitle: 'Pre-Wedding Film · Vadodara',
    poster: '/prewedding-20260619T072911Z-3-001/prewedding/074A1436.jpg',
    video: '/8751561-uhd_4096_2160_24fps.mp4',
  },
  {
    couple: 'Aanya & Rajan',
    coupleItalic: '&',
    subtitle: 'Wedding Highlight · Vadodara',
    poster: '/wedd-20260619T073956Z-3-001/wedd/21.jpg',
    video: '/276161_medium.mp4',
  },
]

type Film = (typeof films)[number]

function FilmModal({ film, onClose }: { film: Film; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
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
        {/* Letterbox top */}
        <div className="h-9 bg-black flex items-center justify-between px-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-warm-white/25">
            {film.subtitle}
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
            src={film.video}
            controls
            autoPlay
            className="w-full h-full"
            poster={film.poster}
          />
        </div>
        {/* Letterbox bottom */}
        <div className="h-9 bg-black flex items-center px-5">
          <p className={`${script.className} text-warm-white/30 text-base`}>{film.couple}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function FilmCard({ film, onPlay }: { film: Film; onPlay: () => void }) {
  const [hovered, setHovered] = useState(false)

  const nameParts = film.couple.split(' & ')

  return (
    <button
      type="button"
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full overflow-hidden group block text-left"
      style={{ aspectRatio: '16/10' }}
      aria-label={`Watch ${film.couple} film`}
    >
      {/* Poster */}
      <Image
        src={film.poster}
        alt={film.couple}
        fill
        className={`object-cover transition-transform duration-700 ease-out ${hovered ? 'scale-[1.04]' : 'scale-100'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 transition-opacity duration-500" />
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Play button — center */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full border border-warm-white/50 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:border-gold/70 transition-colors duration-300">
            <Play className="w-5 h-5 text-warm-white fill-current ml-0.5 group-hover:text-gold transition-colors duration-300" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-warm-white/55">Watch Film</span>
        </div>
      </div>

      {/* Bottom couple name */}
      <div className="absolute inset-x-0 bottom-0 px-7 pb-7 md:px-10 md:pb-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold mb-2">{film.subtitle}</p>
        <h3 className="font-serif text-warm-white leading-none" style={{ fontSize: 'clamp(28px, 4.5vw, 58px)' }}>
          {nameParts[0]}{' '}
          <em className="italic text-warm-white/80">&</em>{' '}
          {nameParts[1]}
        </h3>
      </div>
    </button>
  )
}

export default function TimelessFilms() {
  const [active, setActive] = useState<Film | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <section className="bg-[#faf8f5] py-20 md:py-24 px-6 overflow-hidden">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-14">
            <h2 className={`${script.className} text-4xl md:text-5xl text-dark/80 mb-4`}>
              Timeless Films
            </h2>
            <p className="text-dark/50 text-base max-w-lg mx-auto leading-relaxed">
              Our films embody the same level of authenticity and artistic flair as our photographs.
              Each film is meticulously crafted to capture your story with absolute sincerity and clarity.
              Here&apos;s a glimpse of some of our featured films.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {films.map((film, i) => (
            <ScrollReveal key={film.couple} delay={i * 0.1} direction={i === 0 ? 'left' : 'right'}>
              <FilmCard film={film} onPlay={() => setActive(film)} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && <FilmModal film={active} onClose={close} />}
      </AnimatePresence>
    </>
  )
}
