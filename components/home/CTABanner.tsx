import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918849323139'
const waMessage = encodeURIComponent("Hi! I'd like to inquire about booking Photofilms for my wedding.")

const BG_VIDEO =
  'https://videos.pexels.com/video-files/35300398/14956176_1920_1080_50fps.mp4'

export default function CTABanner() {
  const waHref = `https://wa.me/${number}?text=${waMessage}`

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Static image — visible while video loads */}
      <Image
        src="https://photofilms.in/images/slider/09.webp"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover"
        sizes="100vw"
      />
      {/* Looping cinematic background video */}
      <video
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          Limited Dates Available
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-warm-white leading-tight">
          Ready to begin your love story?
        </h2>
        <p className="mt-5 text-lg text-warm-white/70 leading-relaxed">
          Book a free consultation and let&apos;s talk about your wedding vision. We hold your date with a simple deposit.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gold text-dark font-semibold px-8 py-4 text-base tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Check Availability
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-warm-white/50 text-warm-white font-semibold px-8 py-4 text-base tracking-wide hover:bg-warm-white/10 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
