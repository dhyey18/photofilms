'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[300] h-[2px]"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #C9A84C, #E8D5A3)',
        transition: 'width 60ms linear',
      }}
    />
  )
}
