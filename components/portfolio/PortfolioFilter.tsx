'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { StoryCategory } from '@/types'

const categories: (StoryCategory | 'All')[] = ['All', 'Wedding', 'Pre-Wedding', 'Drone', 'Film']

export default function PortfolioFilter({
  active,
  light = false,
}: {
  active: string
  light?: boolean
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'All') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    router.push(`/portfolio?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => {
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`shrink-0 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
              light
                ? isActive
                  ? 'bg-dark text-warm-white'
                  : 'border border-dark/20 text-dark/45 hover:text-dark hover:border-dark/45'
                : isActive
                  ? 'bg-gold text-dark'
                  : 'border border-warm-white/12 text-warm-white/40 hover:text-warm-white/80 hover:border-warm-white/30'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
