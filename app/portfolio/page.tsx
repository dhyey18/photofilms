import type { Metadata } from 'next'
import { portfolioStories } from '@/data/portfolio'
import PortfolioGallery from '@/components/portfolio/PortfolioGallery'
import CTABanner from '@/components/home/CTABanner'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Portfolio — Wedding Stories',
  description:
    "Browse Photofilms's curated portfolio of weddings and pre-wedding shoots from across India.",
}

export default function PortfolioPage() {
  const weddingPhotos = portfolioStories
    .filter((s) => s.category === 'Wedding')
    .flatMap((story) => story.photos.map((p) => ({ src: p.src, alt: p.alt, couple: story.couple, venue: story.venue, city: story.city })))

  const prewedPhotos = portfolioStories
    .filter((s) => s.category === 'Pre-Wedding')
    .flatMap((story) => story.photos.map((p) => ({ src: p.src, alt: p.alt, couple: story.couple, venue: story.venue, city: story.city })))

  const totalPhotos = weddingPhotos.length + prewedPhotos.length

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(70px, 16vw, 220px)', color: 'rgba(26,22,20,0.028)' }}
        >
          STORIES
        </span>
        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Our Work</p>
              <span className="w-10 h-px bg-gold/60" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-dark leading-[1.06]">
              Wedding stories we&apos;ve had{' '}
              <em className="not-italic text-gold">the honour to tell</em>
            </h1>
            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              Every frame is a feeling. Every story is a life chapter.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
              {[`${totalPhotos} Photographs`, 'Across India'].map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-dark/20" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dark/30">{s}</span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Gallery (client component) ───────────────────────── */}
      <PortfolioGallery weddingPhotos={weddingPhotos} prewedPhotos={prewedPhotos} />

      <CTABanner />
    </>
  )
}
