import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export default function FounderMessage() {
  return (
    <section className="bg-[#faf8f5] border-y border-dark/[0.06] py-20 md:py-28 px-6 overflow-hidden">

      {/* ── Big headline ─────────────────────────────────── */}
      <ScrollReveal>
        <h2 className="text-center font-serif text-3xl md:text-[2.6rem] lg:text-5xl text-dark/80 leading-snug mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="italic text-dark/40">"</span>{' '}Your{' '}
          <em className="not-italic font-bold text-dark">wedding</em> is a{' '}
          <span
            className={script.className}
            style={{ fontSize: '1.25em', color: 'rgba(26,22,20,0.85)', letterSpacing: '-0.01em' }}
          >
            Story
          </span>
          , we tell it.{' '}
          <span className="italic text-dark/40">"</span>
        </h2>
      </ScrollReveal>

      {/* ── Two-column ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left — quote body */}
        <ScrollReveal direction="left">
          <div className="text-center md:text-left">
            <p className="font-serif text-[1rem] md:text-[1.05rem] text-dark/60 leading-[1.85] mb-10">
              "At{' '}
              <em className="not-italic font-semibold text-dark/80" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
                Photofilms
              </em>
              , we believe that your wedding day is a{' '}
              <em className="italic">once in a lifetime</em> event, and we strive to capture
              every moment in a way that is both{' '}
              <em className="italic">beautiful and authentic.</em>{' '}
              Our approach is to work{' '}
              <em className="italic">discreetly and unobtrusively;</em>{' '}
              allowing us to document the day as it unfolds naturally.
              With a focus on creating timeless and elegant photographs,
              we aim to capture the emotions, love, and joy of your
              special day. Our goal is to create something that will allow
              you to relive those precious moments for years to come."
            </p>

            {/* Attribution */}
            <div className="border-l-2 border-gold/40 pl-5">
              <p className={`${script.className} text-2xl text-dark/75`}>
                – Vicky Ramnani
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-dark/35 mt-1">
                Founder, Photofilms
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — photo */}
        <ScrollReveal direction="right">
          <div className="relative mx-auto md:mx-0" style={{ maxWidth: 420 }}>
            {/* Offset shadow frame */}
            <div
              aria-hidden
              className="absolute inset-0 border border-dark/[0.08]"
              style={{ transform: 'translate(10px, 10px)' }}
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/wedd-20260619T073956Z-3-001/wedd/45.jpg"
                alt="Wedding photography by Photofilms"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
