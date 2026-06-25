import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Camera, Heart, Globe } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'
import SocialProof from '@/components/home/SocialProof'
import FAQAccordion from '@/components/home/FAQAccordion'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'About — Our Story & Philosophy',
  description:
    'Meet the Photofilms team — passionate wedding photographers and cinematographers based in Vadodara, Gujarat with over 10 years of experience capturing love stories across India.',
}

const achievements = [
  { icon: Award,  label: 'Best Wedding Photographer', sub: 'Gujarat Wedding Awards 2023' },
  { icon: Camera, label: '500+ Weddings Captured',    sub: 'Across India & Destination' },
  { icon: Heart,  label: 'Featured in Vogue India',   sub: 'Wedding Edition 2022' },
  { icon: Globe,  label: 'Destination Weddings',      sub: 'India, Thailand, Dubai & more' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Photofilms Photographer',
  jobTitle: 'Wedding Photographer & Cinematographer',
  worksFor: { '@type': 'Organization', name: 'Photofilms', url: 'https://photofilms.in' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ── Header ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', color: 'rgba(26,22,20,0.026)' }}
        >
          ABOUT
        </span>
        <div className="max-w-3xl mx-auto relative text-center">
          <ScrollReveal>
            <p className={`${script.className} text-3xl md:text-4xl text-dark/55 mb-4`}>
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-dark leading-[1.06]">
              Twelve years of{' '}
              <em className="not-italic text-gold">capturing love</em>
            </h1>
            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              We are not just photographers — we are storytellers who happened to pick up a camera.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Our story ───────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24 px-6 border-b border-dark/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.10)]" style={{ height: 550 }}>
                <Image
                  src="https://photofilms.in/images/slider/05.webp"
                  alt="Photofilms photographer behind the scenes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gold corner accents */}
                <div className="absolute top-5 right-5 w-10 h-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gold/50" />
                </div>
                <div className="absolute bottom-5 left-5 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gold/50" />
                  <div className="absolute bottom-0 left-0 h-full w-px bg-gold/50" />
                </div>
              </div>
              {/* Decorative offset box */}
              <div className="absolute -bottom-5 -right-5 w-36 h-36 border border-gold/20 hidden lg:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-gold/55" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Why We Do This</p>
              </div>
              <h2 className="font-serif text-4xl text-dark leading-tight mb-7">
                Every love story deserves to be preserved{' '}
                <em className="not-italic text-gold">beautifully</em>
              </h2>
              <div className="space-y-5 text-dark/55 leading-[1.9] text-[1.02rem]">
                <p>
                  It began in 2012, when we photographed a cousin&apos;s wedding in Vadodara with a borrowed camera and discovered something extraordinary — photographs have the power to make people relive the most joyful moments of their lives.
                </p>
                <p>
                  That revelation became an obsession. Years spent studying light, composition, and the invisible language of human emotion. Training with wedding photographers in Delhi and Mumbai, and over 100 weddings as an assistant, before Photofilms became the studio it is today.
                </p>
                <p>
                  Our team of six covers weddings across India and internationally — every one of us driven by the same belief: that your photographs should move you to happy tears every single time you look at them.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Achievements ────────────────────────────────── */}
      <section className="bg-white py-20 px-6 border-b border-dark/[0.06]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className={`${script.className} text-4xl text-dark/55 mb-3`}>Recognition</p>
              <h2 className="font-serif text-4xl text-dark">
                Proud moments from our <em className="italic text-gold">journey</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/[0.06]">
            {achievements.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="bg-white p-8 md:p-10 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/30 mb-6">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg text-dark mb-2">{item.label}</h3>
                    <p className="text-xs text-dark/38 uppercase tracking-[0.15em] font-semibold">{item.sub}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <SocialProof />

      {/* ── Behind the lens ─────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className={`${script.className} text-4xl text-dark/55 mb-3`}>Behind the Lens</p>
              <h2 className="font-serif text-4xl text-dark">How we work on your <em className="italic text-gold">big day</em></h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: 'https://photofilms.in/images/slider/07.webp', alt: 'Photographer capturing ceremony',    caption: 'Capturing every emotion' },
              { src: 'https://photofilms.in/images/slider/08.webp', alt: 'Cinematography team at work',        caption: 'Cinematic storytelling' },
              { src: 'https://photofilms.in/images/slider/10.webp', alt: 'Drone photography at wedding',       caption: 'Breathtaking aerials' },
            ].map((item, i) => (
              <ScrollReveal key={item.alt} delay={i * 0.1}>
                <div className="relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.08)]" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-5 text-warm-white font-serif text-lg">{item.caption}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion showAll />
      <CTABanner />
    </>
  )
}
