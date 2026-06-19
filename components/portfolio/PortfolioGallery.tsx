'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Photo = {
  src: string
  alt: string
  couple: string
  venue: string
  city: string
}

const RATIOS = ['3/4', '4/5', '3/4', '1/1', '4/5', '3/4', '2/3', '3/4', '4/5', '3/4', '4/3', '3/4']

export default function PortfolioGallery({
  weddingPhotos,
  prewedPhotos,
}: {
  weddingPhotos: Photo[]
  prewedPhotos: Photo[]
}) {
  const [tab, setTab] = useState<'wedding' | 'prewed'>('wedding')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const photos = tab === 'wedding' ? weddingPhotos : prewedPhotos

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length))
  }, [photos.length])

  /* Keyboard navigation */
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  /* Lock body scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* ── Tab toggle ───────────────────────────────────────── */}
      <div className="bg-[#faf8f5] sticky top-0 z-30 border-b border-dark/[0.07]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 h-16">
          {/* Tabs */}
          <div className="flex items-center gap-1">
            {(['wedding', 'prewed'] as const).map((t) => {
              const label  = t === 'wedding' ? 'Wedding' : 'Pre-Wedding'
              const count  = t === 'wedding' ? weddingPhotos.length : prewedPhotos.length
              const active = tab === t
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    active ? 'text-dark' : 'text-dark/35 hover:text-dark/65'
                  }`}
                >
                  {label}
                  <span className={`ml-2 text-[10px] font-medium ${active ? 'text-gold' : 'text-dark/25'}`}>
                    {count}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
          <p className="text-dark/25 text-[10px] font-semibold uppercase tracking-[0.22em] shrink-0">
            {photos.length} Photos
          </p>
        </div>
      </div>

      {/* ── Masonry grid ─────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.section
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`px-1 pt-1 pb-16 ${tab === 'wedding' ? 'bg-[#faf8f5]' : 'bg-white'}`}
        >
          <div className="columns-2 md:columns-3 lg:columns-4 gap-1">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative block w-full mb-1 overflow-hidden cursor-zoom-in text-left"
                style={{ aspectRatio: RATIOS[i % RATIOS.length] }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 16 ? 'eager' : 'lazy'}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              </button>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-10 p-2 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-white/40">
              {String(lightbox + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center px-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
                  <Image
                    src={photos[lightbox].src}
                    alt={photos[lightbox].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>


            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-warm-white/50 hover:text-warm-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-warm-white/50 hover:text-warm-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
