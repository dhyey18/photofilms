'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { StoryCategory } from '@/types'

const categories: (StoryCategory | 'All')[] = ['All', 'Wedding', 'Pre-Wedding', 'Drone', 'Film']

export default function PortfolioFilter({ active }: { active: string }) {
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
              isActive
                ? 'bg-gold text-dark'
                : 'text-warm-white/40 border border-warm-white/10 hover:text-warm-white/80 hover:border-warm-white/25'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
