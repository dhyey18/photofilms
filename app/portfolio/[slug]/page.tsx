import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Star } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import type { StorySection } from '@/types'
import StoryGallery from '@/components/portfolio/StoryGallery'
import CTABanner from '@/components/home/CTABanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioStories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = portfolioStories.find((s) => s.slug === slug)
  if (!story) return {}
  return {
    title: `${story.couple} — ${story.venue}, ${story.city}`,
    description: story.narrative,
    openGraph: {
      images: [{ url: story.coverImage, width: 1200, height: 800 }],
    },
  }
}

/* ── Film strip decorative component ──────────────────── */
function FilmStrip({ src }: { src: string }) {
  const sprockets = Array.from({ length: 14 })
  return (
    <div className="overflow-hidden shadow-2xl">
      {/* Top strip */}
      <div className="bg-dark h-11 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 flex items-center px-5 gap-[18px]">
          {sprockets.map((_, i) => (
            <div key={i} className="w-4 h-5 rounded-[3px] border border-warm-white/12 shrink-0" />
          ))}
        </div>
        <span className="relative ml-auto mr-6 text-warm-white/25 text-[9px] font-mono tracking-[0.2em] uppercase">
          12 ▸ IOOA
        </span>
      </div>
      {/* Image */}
      <div className="relative h-[340px] md:h-[480px]">
        <Image
          src={src}
          alt="Behind the scenes"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {/* Bottom strip */}
      <div className="bg-dark h-11 relative flex items-center overflow-hidden">
        <span className="relative ml-6 text-warm-white/25 text-[9px] font-mono tracking-[0.2em] uppercase">
          EU00 ▸ 14MA
        </span>
        <div className="absolute inset-0 flex items-center px-5 gap-[18px]">
          {sprockets.map((_, i) => (
            <div key={i} className="w-4 h-5 rounded-[3px] border border-warm-white/12 shrink-0" />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Single editorial section (quote + image) ────────── */
function EditorialSection({ section, reversed }: { section: StorySection; reversed: boolean }) {
  const quoteCol = (
    <div className="flex items-center justify-center px-8 py-16 md:px-16 md:py-24 bg-cream">
      <div className="max-w-md text-center">
        {/* Decorative open-quote */}
        <span
          aria-hidden="true"
          className="block font-serif text-[80px] leading-none text-gold/20 -mb-4 select-none"
        >
          &ldquo;
        </span>
        <p className="font-serif text-xl md:text-[1.45rem] font-bold text-dark uppercase leading-[1.55] tracking-wide">
          {section.quote}
        </p>
        <div className="w-10 h-px bg-gold/40 mx-auto mt-6 mb-4" />
        <p className="text-[10px] font-semibold tracking-[0.3em] text-dark/45 uppercase">
          {section.quoteAuthor}
        </p>
      </div>
    </div>
  )

  const imageCol = (
    <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
      <div className="absolute inset-3 md:inset-5">
        <Image
          src={section.image}
          alt={section.quoteAuthor}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2" style={{ minHeight: '540px' }}>
      {reversed ? (
        <>
          {imageCol}
          {quoteCol}
        </>
      ) : (
        <>
          {quoteCol}
          {imageCol}
        </>
      )}
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = portfolioStories.find((s) => s.slug === slug)
  if (!story) notFound()

  const storyDate = new Date(story.date)
  const monthYear = storyDate
    .toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
    .toUpperCase()

  return (
    <>
      {/* ── Editorial header ──────────────────────────────── */}
      <div className="bg-cream pt-28 md:pt-36 pb-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Stories
          </Link>

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold mb-8">
            <Star className="w-3 h-3 fill-gold shrink-0" />
            <span>{monthYear}</span>
            <span className="text-gold/35">→</span>
            <span>{story.location ?? story.city}</span>
            <span className="text-gold/35">→</span>
            <span>{story.venue}</span>
          </div>

          {/* Couple name + description — two-column editorial split */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[0.95] tracking-tight">
                {story.couple}
              </h1>

              {/* Tag pills */}
              {story.tags && story.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-dark/20 rounded-full text-dark text-[11px] font-medium px-4 py-1.5 tracking-wide hover:border-gold hover:text-gold transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="md:pt-2">
              <p className="text-base md:text-[1.05rem] text-dark/65 leading-relaxed">
                {story.narrative}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial story sections ───────────────────────── */}
      {story.storySections?.map((section, i) => (
        <EditorialSection key={i} section={section} reversed={i % 2 === 1} />
      ))}

      {/* ── Film strip image ───────────────────────────────── */}
      {story.filmStripImage && (
        <div className="py-14 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <FilmStrip src={story.filmStripImage} />
          </div>
        </div>
      )}

      {/* ── Gallery ────────────────────────────────────────── */}
      {story.photos.length > 0 && (
        <section className="py-20 px-6 bg-cream">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold mb-2">
              The Gallery
            </p>
            <span className="block h-px w-10 bg-gold/50 mb-8" />
            <StoryGallery photos={story.photos} />
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
