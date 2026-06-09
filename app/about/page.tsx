import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Camera, Heart, Globe } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'About — Our Story & Philosophy',
  description:
    'Meet the Photofilms team — passionate wedding photographers and cinematographers based in Vadodara, Gujarat with over 12 years of experience capturing love stories across India.',
}

const achievements = [
  { icon: Award, label: 'Best Wedding Photographer', sub: 'Gujarat Wedding Awards 2023' },
  { icon: Camera, label: '500+ Weddings Captured', sub: 'Across India & Destination' },
  { icon: Heart, label: 'Featured in Vogue India', sub: 'Wedding Edition 2022' },
  { icon: Globe, label: 'Destination Weddings', sub: 'India, Thailand, Dubai & more' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Photofilms Photographer',
  jobTitle: 'Wedding Photographer & Cinematographer',
  worksFor: {
    '@type': 'Organization',
    name: 'Photofilms',
    url: 'https://photofilms.in',
  },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Header */}
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Story"
            title="Twelve years of capturing love"
            subtitle="We are not just photographers — we are storytellers who happened to pick up a camera."
            centered
            light
          />
        </ScrollReveal>
      </div>

      {/* Main story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative h-[550px] overflow-hidden">
                <Image
                  src="https://photofilms.in/images/slider/05.webp"
                  alt="Photofilms photographer behind the scenes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gold/10 border border-gold/20 hidden lg:block" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Why We Do This</p>
              <h2 className="font-serif text-4xl text-dark leading-tight mb-6">
                Every love story deserves to be preserved beautifully
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  It began in 2012, when I photographed a cousin&apos;s wedding in Vadodara with a borrowed camera and discovered something extraordinary — photographs have the power to make people relive the most joyful moments of their lives.
                </p>
                <p>
                  That revelation became an obsession. I spent years studying light, composition, and the invisible language of human emotion. I trained with wedding photographers in Delhi and Mumbai, shot over 100 weddings as an assistant, and eventually built Photofilms into a studio that reflects everything I believe great wedding photography should be.
                </p>
                <p>
                  Today, our team of six covers weddings across India and internationally — every one of us driven by the same belief: that your photographs should make you cry happy tears every time you look at them, for the rest of your life.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Recognition"
              title="Proud moments from our journey"
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {achievements.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="bg-warm-white border border-border p-6 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 text-gold mb-4">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-semibold text-dark text-sm">{item.label}</h3>
                    <p className="text-xs text-warm-gray mt-1">{item.sub}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Behind the Lens"
              title="How we work on your big day"
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                src: 'https://photofilms.in/images/slider/07.webp',
                alt: 'Photographer capturing ceremony',
                caption: 'Capturing every emotion',
              },
              {
                src: 'https://photofilms.in/images/slider/08.webp',
                alt: 'Cinematography team at work',
                caption: 'Cinematic storytelling',
              },
              {
                src: 'https://photofilms.in/images/slider/10.webp',
                alt: 'Drone photography at wedding',
                caption: 'Breathtaking aerials',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.alt} delay={i * 0.1}>
                <div className="relative h-72 overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-warm-white font-medium text-sm">{item.caption}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
