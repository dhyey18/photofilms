import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import PortfolioFilter from '@/components/portfolio/PortfolioFilter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'
import type { StoryCategory } from '@/types'

export const metadata: Metadata = {
  title: 'Portfolio — Wedding Stories',
  description:
    "Browse Photofilms's curated portfolio of wedding stories, pre-wedding shoots, drone aerials, and cinematic films from across India.",
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

  const categories = ['Wedding', 'Pre-Wedding', 'Drone', 'Film']
  const locationCount = new Set(portfolioStories.map((s) => s.city)).size

  return (
    <>
      {/* ── Cinematic dark header ──────────────────────────── */}
      <div className="bg-dark pt-36 pb-24 px-6 relative overflow-hidden">
        {/* Giant watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold text-warm-white/[0.025] leading-none"
          style={{ fontSize: 'clamp(70px, 16vw, 220px)' }}
        >
          STORIES
        </span>

        <div className="max-w-5xl mx-auto relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Our Work
              </p>
              <span className="w-10 h-px bg-gold/50" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-warm-white text-center leading-[1.06]">
              Wedding stories we&apos;ve had{' '}
              <em className="not-italic text-gold-light">the honour to tell</em>
            </h1>

            <p className="mt-6 text-warm-white/45 text-lg text-center max-w-lg mx-auto leading-relaxed">
              Every frame is a feeling. Every story is a life chapter.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
              {[
                `${portfolioStories.length} Love Stories`,
                `${locationCount} Locations`,
                `${categories.length} Categories`,
                'Across India',
              ].map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/30" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-white/25">
                    {s}
                  </span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Filter + grid ─────────────────────────────────── */}
      <section className="bg-dark pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <div className="flex items-center justify-between gap-6 border-b border-warm-white/[0.07] pb-6 mb-0 flex-wrap">
            <PortfolioFilter active={category} />
            <p className="text-warm-white/20 text-xs font-semibold uppercase tracking-[0.2em] shrink-0">
              {filtered.length} {filtered.length === 1 ? 'Story' : 'Stories'}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-warm-white/30 text-lg font-serif">No stories in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-white/[0.06]">
              {filtered.map((story, i) => {
                /* First card spans 2 columns and uses landscape ratio — the rest use portrait */
                const isFeatured = i === 0 && filtered.length > 1
                return (
                  <ScrollReveal
                    key={story.slug}
                    delay={Math.min(i * 0.07, 0.35)}
                    className={isFeatured ? 'md:col-span-2' : ''}
                  >
                    <Link
                      href={`/portfolio/${story.slug}`}
                      className="group relative flex overflow-hidden bg-dark block"
                      style={{ aspectRatio: isFeatured ? '16/9' : '3/4' }}
                    >
                      {/* Cover image */}
                      <Image
                        src={story.coverImage}
                        alt={`${story.couple} — ${story.venue}`}
                        fill
                        className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700 ease-out"
                        sizes={
                          isFeatured
                            ? '(max-width: 768px) 100vw, 66vw'
                            : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        }
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
                      {/* Side vignette for featured */}
                      {isFeatured && (
                        <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/30" />
                      )}

                      {/* Story number watermark */}
                      <span
                        aria-hidden
                        className="absolute top-4 left-5 font-serif font-bold leading-none text-warm-white/[0.07] select-none pointer-events-none"
                        style={{ fontSize: isFeatured ? 'clamp(56px, 8vw, 110px)' : 'clamp(48px, 6vw, 80px)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Category tag — top right */}
                      <div className="absolute top-5 right-5">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/35 px-2.5 py-1.5 bg-dark/30 backdrop-blur-sm">
                          {story.category}
                        </span>
                      </div>

                      {/* Bottom text — slides up on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                        <div className="w-8 h-px bg-gold/55 mb-4" />

                        <p
                          className={`font-serif text-warm-white leading-tight ${
                            isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'
                          }`}
                        >
                          {story.couple}
                        </p>

                        <p className="flex items-center gap-1.5 text-warm-white/45 text-sm mt-2">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {story.venue}, {story.city}
                        </p>

                        {isFeatured && (
                          <p className="text-warm-white/35 text-sm leading-relaxed mt-3 line-clamp-2 max-w-lg">
                            {story.narrative}
                          </p>
                        )}

                        <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] mt-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-75">
                          View Story <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>

                      {/* Gold corner accent — appears on hover */}
                      <div className="absolute top-5 left-5 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gold/55" />
                        <div className="absolute top-0 left-0 h-full w-px bg-gold/55" />
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
