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

  const locationCount = new Set(portfolioStories.map((s) => s.city)).size

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        {/* Faint watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{
            fontSize: 'clamp(70px, 16vw, 220px)',
            color: 'rgba(26,22,20,0.028)',
          }}
        >
          STORIES
        </span>

        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                Our Work
              </p>
              <span className="w-10 h-px bg-gold/60" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-dark leading-[1.06]">
              Wedding stories we&apos;ve had{' '}
              <em className="not-italic text-gold">the honour to tell</em>
            </h1>

            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              Every frame is a feeling. Every story is a life chapter.
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
              {[
                `${portfolioStories.length} Love Stories`,
                `${locationCount} Locations`,
                'Across India',
              ].map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-dark/20" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dark/30">
                    {s}
                  </span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Filter bar ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] sticky top-0 z-30 border-b border-dark/[0.07] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <PortfolioFilter active={category} light />
          <p className="text-dark/25 text-[10px] font-semibold uppercase tracking-[0.22em] shrink-0">
            {filtered.length} {filtered.length === 1 ? 'Story' : 'Stories'}
          </p>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] px-6 pt-14 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-dark/25 font-serif text-xl">No stories in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {filtered.map((story, i) => {
                const isFeatured = i === 0 && filtered.length > 1
                return (
                  <ScrollReveal
                    key={story.slug}
                    delay={Math.min(i * 0.07, 0.28)}
                    className={isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}
                  >
                    <Link href={`/portfolio/${story.slug}`} className="group block">
                      {/* Image frame */}
                      <div
                        className="relative overflow-hidden"
                        style={{ aspectRatio: isFeatured ? '16/9' : '3/4' }}
                      >
                        <Image
                          src={story.coverImage}
                          alt={`${story.couple} — ${story.venue}`}
                          fill
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                          sizes={
                            isFeatured
                              ? '(max-width: 768px) 100vw, 66vw'
                              : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          }
                          priority={i === 0}
                        />
                        {/* Subtle dark vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                        {/* Category chip — top right */}
                        <div className="absolute top-4 right-4">
                          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-warm-white border border-warm-white/45 px-2.5 py-1 bg-dark/25 backdrop-blur-sm">
                            {story.category}
                          </span>
                        </div>
                      </div>

                      {/* Nameplate */}
                      <div className="pt-5">
                        {/* Gold separator + story number */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-6 h-px bg-gold/55" />
                          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold/70">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p
                              className={`font-serif text-dark leading-snug group-hover:text-gold transition-colors duration-300 ${
                                isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                              }`}
                            >
                              {story.couple}
                            </p>
                            <p className="flex items-center gap-1.5 text-dark/40 text-xs mt-1.5">
                              <MapPin className="w-3 h-3 shrink-0" />
                              {story.venue}, {story.city}
                            </p>
                          </div>

                          {/* View arrow */}
                          <span className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/25 group-hover:text-gold transition-colors duration-300 shrink-0">
                            View
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          )}

          {/* Bottom rule */}
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-dark/[0.06]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-dark/15">
              Photofilms
            </span>
            <div className="flex-1 h-px bg-dark/[0.06]" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
