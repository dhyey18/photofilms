import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import type { BlogPost } from '@/types'
import CTABanner from '@/components/home/CTABanner'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage, width: 1200, height: 800 }],
    },
  }
}

/* ── Parse simple markdown content into sections ──────── */
function ArticleBody({ content }: { content: string }) {
  const blocks = content.split('\n\n')

  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        const lines = trimmed.split('\n')
        const headingMatch = lines[0].match(/^\*\*(.+)\*\*$/)

        // Section heading + optional body on subsequent lines
        if (headingMatch) {
          const heading = headingMatch[1]
          const body = lines.slice(1).join(' ').trim()
          return (
            <div key={i} className="pt-12">
              {/* Thin gold rule above each section */}
              <div className="flex items-center gap-4 mb-5">
                <span className="w-5 h-px bg-gold/45 shrink-0" />
                <h2 className="font-serif text-[1.55rem] md:text-[1.75rem] font-bold text-dark leading-snug">
                  {heading}
                </h2>
              </div>
              {body && (
                <p className="text-dark/60 text-[1.05rem] leading-[1.95] pl-9">
                  {body}
                </p>
              )}
            </div>
          )
        }

        // First block: lead paragraph — larger and darker
        if (i === 0) {
          return (
            <p
              key={i}
              className="text-dark/75 text-[1.15rem] md:text-[1.2rem] leading-[1.9] font-medium"
            >
              {trimmed}
            </p>
          )
        }

        // Regular paragraph — inline bold support
        const html = trimmed.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-dark font-semibold">$1</strong>',
        )
        return (
          <p
            key={i}
            className="text-dark/58 text-[1.05rem] leading-[1.95] pt-5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      })}
    </div>
  )
}

/* ── Related article card (matches blog listing style) ── */
function RelatedCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-dark overflow-hidden hover:bg-warm-white/[0.025] transition-colors duration-300 h-full"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.05] transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span
          aria-hidden
          className="absolute top-3 left-4 font-serif font-bold leading-none text-warm-white/10 select-none"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
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
        <h3 className="font-serif text-[1.2rem] text-warm-white leading-snug group-hover:text-gold-light transition-colors duration-300 flex-1">
          {post.title}
        </h3>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-warm-white/[0.07]">
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
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const postIndex = blogPosts.findIndex((p) => p.slug === post.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Photofilms', url: 'https://photofilms.in' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ── Cinematic hero ────────────────────────────────── */}
      <div className="relative min-h-[70vh] flex flex-col justify-end bg-dark overflow-hidden">
        {/* Cover image — low opacity */}
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-35 scale-[1.03]"
          sizes="100vw"
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/20" />

        {/* Back link — top left */}
        <div className="absolute top-28 left-6 md:left-10 z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-warm-white/50 hover:text-gold text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            The Journal
          </Link>
        </div>

        {/* Issue number watermark */}
        <span
          aria-hidden
          className="absolute right-8 bottom-8 font-serif font-bold text-warm-white/[0.04] leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}
        >
          {String(postIndex + 1).padStart(2, '0')}
        </span>

        {/* Hero text — bottom */}
        <div className="relative max-w-4xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/40 px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.4rem] text-warm-white leading-[1.1] max-w-3xl">
            {post.title}
          </h1>

          {/* Gold rule */}
          <div className="flex items-center gap-4 my-7">
            <span className="w-10 h-px bg-gold/50" />
            <span className="text-gold/40 text-[9px] font-mono tracking-[0.3em] uppercase">
              Photofilms
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center flex-wrap gap-6 text-warm-white/40 text-xs font-semibold uppercase tracking-[0.15em]">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gold/50" />
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold/50" />
              {post.readingTime} min read
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-white/20" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-[720px] mx-auto">

          {/* Pull-quote excerpt */}
          <ScrollReveal>
            <blockquote className="relative border-l-2 border-gold/50 pl-7 mb-16">
              <span
                aria-hidden
                className="absolute -top-2 -left-1 font-serif text-[5rem] leading-none text-gold/10 select-none"
              >
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl text-dark/70 leading-[1.65] italic">
                {post.excerpt}
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Body content */}
          <ScrollReveal>
            <ArticleBody content={post.content} />
          </ScrollReveal>

          {/* Footer meta + back link */}
          <div className="mt-16 pt-10 border-t border-dark/10 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-warm-gray hover:text-gold text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Journal
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-semibold uppercase tracking-[0.2em] text-dark/35 border border-dark/12 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related articles ──────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-14">
                <span className="w-6 h-px bg-gold/50" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                  Continue Reading
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-white/[0.07]">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <RelatedCard post={p} index={i} />
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
