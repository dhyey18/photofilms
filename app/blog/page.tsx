import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Blog — Wedding Photography Tips & Venue Guides',
  description:
    "Wedding photography tips, venue guides, and behind-the-scenes stories from Photofilms — Vadodara's leading wedding photography studio.",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
  })
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts
  const avgRead = Math.round(
    blogPosts.reduce((s, p) => s + p.readingTime, 0) / blogPosts.length,
  )

  return (
    <>
      {/* ── Cinematic dark header ──────────────────────────── */}
      <div className="bg-dark pt-36 pb-28 px-6 relative overflow-hidden">
        {/* Giant watermark behind everything */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold text-warm-white/[0.028] leading-none"
          style={{ fontSize: 'clamp(80px, 18vw, 240px)' }}
        >
          JOURNAL
        </span>

        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Our Journal
              </p>
              <span className="w-10 h-px bg-gold/50" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-warm-white leading-[1.06]">
              From our lens,{' '}
              <em className="not-italic text-gold-light">to your heart</em>
            </h1>

            <p className="mt-6 text-warm-white/45 text-lg max-w-lg mx-auto leading-relaxed">
              Stories, guides, and behind-the-scenes from the studio.
            </p>

            {/* Stat pills */}
            <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2 mt-10">
              {[
                `${blogPosts.length} Articles`,
                `~${avgRead} min avg read`,
                'Wedding Photography',
                'Venue Guides',
              ].map((s, i) => (
                <span
                  key={s}
                  className="flex items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-white/25"
                >
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/30" />}
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Featured post ──────────────────────────────────── */}
      <div className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-14">
              <span className="w-6 h-px bg-gold/50" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Featured Story
              </p>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-[1fr_1.15fr] gap-12 md:gap-20 items-center"
            >
              {/* ── Left: text ── */}
              <div>
                {/* Watermark issue number */}
                <span
                  aria-hidden
                  className="block font-serif font-bold leading-none text-dark/[0.055] select-none -mb-6"
                  style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
                >
                  01
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/35 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-dark leading-[1.12] group-hover:text-gold-dark transition-colors duration-300">
                  {featured.title}
                </h2>

                <p className="mt-5 text-dark/55 text-base md:text-[1.05rem] leading-[1.85] line-clamp-4">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-7 mt-9 flex-wrap">
                  <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm tracking-[0.12em] uppercase group-hover:gap-3.5 transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="flex items-center gap-1.5 text-dark/30 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readingTime} min read
                  </span>
                  <span className="text-dark/25 text-xs">{formatDate(featured.publishedAt)}</span>
                </div>
              </div>

              {/* ── Right: image ── */}
              <div
                className="relative overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.14)]"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/8 transition-colors duration-500" />
                {/* Gold corner accent lines */}
                <div className="absolute top-5 right-5 w-9 h-9 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-px bg-gold/55" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gold/55" />
                </div>
                <div className="absolute bottom-5 left-5 w-9 h-9 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gold/55" />
                  <div className="absolute bottom-0 left-0 h-full w-px bg-gold/55" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Divider rule ──────────────────────────────────── */}
      <div className="bg-dark h-px" />

      {/* ── More stories grid ─────────────────────────────── */}
      {rest.length > 0 && (
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-gold/50" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                    More Stories
                  </p>
                </div>
                <p className="text-warm-white/20 text-xs font-semibold uppercase tracking-[0.2em]">
                  {rest.length} Articles
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-white/[0.07]">
              {rest.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-dark overflow-hidden hover:bg-warm-white/[0.025] transition-colors duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Issue number overlay */}
                      <span
                        aria-hidden
                        className="absolute top-3 left-4 font-serif font-bold leading-none text-warm-white/10 select-none"
                        style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                      >
                        {String(i + 2).padStart(2, '0')}
                      </span>
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-6 md:p-7">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold/65 border border-gold/18 px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-serif text-[1.25rem] text-warm-white leading-snug group-hover:text-gold-light transition-colors duration-300 flex-1">
                        {post.title}
                      </h3>

                      <p className="text-warm-white/30 text-sm leading-relaxed line-clamp-2 mt-3 mb-6">
                        {post.excerpt}
                      </p>

                      {/* Meta row */}
                      <div className="flex items-center justify-between pt-4 border-t border-warm-white/[0.07]">
                        <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] group-hover:gap-3 transition-all duration-300">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                        <span className="flex items-center gap-1.5 text-warm-white/22 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
