'use client'

import { useEffect, useRef } from 'react'

interface StoryVideoProps {
  src: string
  coupleNames: string
}

export default function StoryVideo({ src, coupleNames }: StoryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="bg-dark py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light mb-2">
            The Film
          </p>
          <span className="block h-px w-10 bg-gold/40 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
            {coupleNames}&apos;s story in motion
          </h2>
        </div>

        {/* Autoplay ambient video — no controls */}
        <div className="relative aspect-video bg-black overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-center text-warm-white/25 text-[10px] uppercase tracking-[0.2em] mt-5">
          Photofilms Cinematic Productions
        </p>
      </div>
    </section>
  )
}
