'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const videos = [
  {
    pexelsId: 3936463,
    title: 'Wedding Highlight Film',
    subtitle: 'Slow-motion cinematic wedding moments',
    poster: 'https://photofilms.in/images/slider/03.webp',
  },
  {
    pexelsId: 35300398,
    title: 'Floral & Décor Stories',
    subtitle: 'Elegant Indian wedding decoration',
    poster: 'https://photofilms.in/images/slider/06.webp',
  },
  {
    pexelsId: 31139763,
    title: 'Sacred Rituals',
    subtitle: 'Traditional ceremony documentation',
    poster: 'https://photofilms.in/images/slider/09.webp',
  },
]

type Video = (typeof videos)[number]

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: 'rgba(28,26,24,0.96)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-warm-white font-serif text-lg">{video.title}</h3>
            <p className="text-warm-white/50 text-xs mt-0.5">{video.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-warm-white/60 hover:text-warm-white text-sm transition-colors ml-4 shrink-0"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            src={`https://www.pexels.com/video/${video.pexelsId}/embed/?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function VideoCard({
  video,
  onPlay,
  featured = false,
}: {
  video: Video
  onPlay: () => void
  featured?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full overflow-hidden group block"
    >
      <Image
        src={video.poster}
        alt={video.title}
        fill
        className={`object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
        sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
      />
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          hovered ? 'bg-dark/60' : 'bg-dark/40'
        }`}
      />

      {/* Play ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full border-2 backdrop-blur-sm transition-all duration-300 ${
            hovered
              ? 'w-20 h-20 border-gold bg-dark/30'
              : 'w-14 h-14 border-warm-white/70 bg-dark/20'
          }`}
        >
          <Play
            className={`ml-0.5 transition-all duration-300 ${
              hovered ? 'w-7 h-7 text-gold-light' : 'w-5 h-5 text-warm-white'
            }`}
            fill="currentColor"
          />
        </div>
      </div>

      {/* Label gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent">
        <p
          className={`text-warm-white font-medium leading-tight ${
            featured ? 'text-base' : 'text-sm'
          }`}
        >
          {video.title}
        </p>
        <p className="text-warm-white/55 text-xs mt-0.5">{video.subtitle}</p>
      </div>
    </button>
  )
}

export default function VideoShowreel() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const close = useCallback(() => setActiveVideo(null), [])

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
              <VideoCard
                video={videos[0]}
                onPlay={() => setActiveVideo(videos[0])}
                featured
              />
            </ScrollReveal>
            {videos.slice(1).map((video, i) => (
              <ScrollReveal
                key={video.pexelsId}
                delay={(i + 1) * 0.12}
                className="h-52 md:h-auto"
              >
                <VideoCard video={video} onPlay={() => setActiveVideo(video)} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.35}>
            <p className="mt-8 text-center text-warm-white/30 text-xs tracking-wide">
              Sample films for illustration · Full Photofilms portfolio available on consultation
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={close} />}
      </AnimatePresence>
    </>
  )
}
