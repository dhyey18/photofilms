import Image from 'next/image'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import { MessageCircle } from 'lucide-react'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918866008868'
const waMessage = encodeURIComponent("Hi! I'd like to inquire about booking Photofilms for my wedding.")

export default function CTABanner() {
  const waHref = `https://wa.me/${number}?text=${waMessage}`

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 560 }}>

      {/* Background photo */}
      <Image
        src="https://photofilms.in/images/slider/09.webp"
        alt=""
        fill
        aria-hidden
        className="object-cover"
        sizes="100vw"
      />
      {/* Cream-warm overlay (matches light theme, not full black) */}
      <div className="absolute inset-0 bg-[#faf8f5]/82" />
      {/* Soft vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, rgba(26,22,20,0.08) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 min-h-[560px]">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-gold/50" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold">
            Limited Dates Available
          </p>
          <span className="w-10 h-px bg-gold/50" />
        </div>

        {/* Script sub-heading */}
        <p className={`${script.className} text-3xl md:text-4xl text-dark/55 mb-3`}>
          Let&apos;s begin your
        </p>

        {/* Main serif heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.6rem] text-dark leading-tight max-w-2xl">
          Love <em className="italic text-gold">Story</em>
        </h2>

        {/* Body */}
        <p className="mt-6 text-dark/50 text-base md:text-lg max-w-md mx-auto leading-relaxed">
          Book a free consultation and let&apos;s talk about your wedding vision.
          We hold your date with a simple deposit.
        </p>

        {/* Thin divider */}
        <div className="w-12 h-px bg-dark/15 my-8" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="bg-dark text-warm-white font-semibold px-9 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Check Availability
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-dark/25 text-dark/65 font-semibold px-9 py-4 text-[11px] tracking-[0.22em] uppercase hover:border-dark hover:text-dark transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(70px, 16vw, 220px)', color: 'rgba(26,22,20,0.025)' }}
        >
          PHOTOFILMS
        </span>
      </div>
    </section>
  )
}
