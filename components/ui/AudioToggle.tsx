'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioToggle() {
  const [muted, setMuted] = useState(false)
  const [visible, setVisible] = useState(false)

  // Show the button only after the first video is detected on the page
  useEffect(() => {
    const check = () => {
      if (document.querySelector('video')) setVisible(true)
    }
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  // Sync all videos whenever muted state changes.
  // Browsers block audio autoplay without a prior user gesture — if play() rejects,
  // fall back to muted so the video at least keeps running.
  useEffect(() => {
    document.querySelectorAll('video').forEach((v) => {
      v.muted = muted
      if (v.paused) {
        v.play().catch(() => {
          v.muted = true
          setMuted(true)
        })
      }
    })
  }, [muted])

  if (!visible) return null

  return (
    <button
      onClick={() => setMuted((prev) => !prev)}
      aria-label={muted ? 'Enable ambient sound' : 'Mute ambient sound'}
      title={muted ? 'Enable sound' : 'Mute'}
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2.5 bg-dark/80 border border-gold/25 backdrop-blur-md px-4 py-2.5 transition-all duration-300 hover:border-gold/60 hover:bg-dark/95"
    >
      {muted ? (
        <VolumeX className="w-4 h-4 text-warm-white/50 group-hover:text-gold transition-colors duration-300" />
      ) : (
        <Volume2 className="w-4 h-4 text-gold" />
      )}
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-white/40 group-hover:text-warm-white/70 transition-colors duration-300">
        {muted ? 'Sound off' : 'Sound on'}
      </span>
    </button>
  )
}
