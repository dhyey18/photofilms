'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Photo = { src: string; alt: string }

const RATIOS = ['3/4', '4/5', '3/4', '1/1', '4/5', '3/4', '2/3', '3/4', '4/5', '3/4', '4/3', '3/4']

export default function PreWeddingGallery({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length))
  }, [photos.length])

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

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* ── Count bar ────────────────────────────────────────── */}
      <div className="bg-[#faf8f5] sticky top-0 z-30 border-b border-dark/[0.07]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 h-16">
          <p className="text-sm font-semibold tracking-wide text-dark">Pre-Wedding</p>
          <p className="text-dark/25 text-[10px] font-semibold uppercase tracking-[0.22em] shrink-0">
            {photos.length} Photos
          </p>
        </div>
      </div>

      {/* ── Masonry grid ─────────────────────────────────────── */}
      <section className="bg-white px-1 pt-1 pb-16">
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </section>

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
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-10 p-2 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-white/40">
              {String(lightbox + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </div>

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
