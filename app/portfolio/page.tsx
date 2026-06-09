import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import PortfolioFilter from '@/components/portfolio/PortfolioFilter'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'
import type { StoryCategory } from '@/types'

export const metadata: Metadata = {
  title: 'Portfolio — Wedding Stories',
  description:
    'Browse Photofilms\'s curated portfolio of wedding stories, pre-wedding shoots, drone aerials, and cinematic films from across India.',
}

interface Props {
  searchParams: Promise<{ category?: string }>
}

export default async function PortfolioPage({ searchParams }: Props) {
  const { category = 'All' } = await searchParams

  const filtered =
    category === 'All'
      ? portfolioStories
      : portfolioStories.filter((s) => s.category === (category as StoryCategory))

  return (
    <>
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Work"
            title="Wedding stories we've had the honour to tell"
            subtitle={`${portfolioStories.length} curated love stories — and counting.`}
            centered
            light
          />
        </ScrollReveal>
      </div>

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <PortfolioFilter active={category} />

          {filtered.length === 0 ? (
            <p className="text-center text-warm-gray py-16">No stories in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((story, i) => (
                <ScrollReveal key={story.slug} delay={i * 0.08}>
                  <Link href={`/portfolio/${story.slug}`} className="group block overflow-hidden bg-warm-white border border-border hover:border-gold/40 transition-colors duration-300">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={story.coverImage}
                        alt={`${story.couple} wedding at ${story.venue}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-gold text-dark text-xs font-semibold px-3 py-1 tracking-wide">
                          {story.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-serif text-xl text-warm-white">{story.couple}</p>
                        <p className="flex items-center gap-1 text-warm-white/70 text-sm mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {story.venue}, {story.city}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">
                        {story.narrative}
                      </p>
                      <span className="inline-block mt-3 text-xs font-semibold text-gold tracking-wide">
                        View Story →
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
