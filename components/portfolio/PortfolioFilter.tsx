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
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-5 py-2 text-sm font-medium tracking-wide border transition-colors duration-200 ${
            active === cat
              ? 'bg-gold border-gold text-dark'
              : 'border-border text-warm-gray hover:border-gold hover:text-gold'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
