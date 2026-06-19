import type { Metadata } from 'next'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import ContactForm from '@/components/contact/ContactForm'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Contact — Book Your Date',
  description:
    'Get in touch with Photofilms to book your wedding photography date, check availability, or ask about packages. Based in Vadodara, Gujarat.',
}

interface Props {
  searchParams: Promise<{ service?: string }>
}

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918866008868'
const waMessage = encodeURIComponent("Hi! I'd like to inquire about booking Photofilms for my wedding.")
const waHref = `https://wa.me/${number}?text=${waMessage}`

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams

  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', color: 'rgba(26,22,20,0.026)' }}
        >
          CONTACT
        </span>
        <div className="max-w-3xl mx-auto relative text-center">
          <ScrollReveal>
            <p className={`${script.className} text-3xl md:text-4xl text-dark/55 mb-4`}>Let&apos;s Connect</p>
            <h1 className="font-serif text-5xl md:text-6xl text-dark leading-[1.06]">
              Start your love story{' '}
              <em className="italic text-gold">with us</em>
            </h1>
            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              Fill in the form below or reach out directly — we respond to all enquiries within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Sidebar */}
          <div className="space-y-10">
            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold mb-5">
                  Reach Us
                </p>
                <ul className="space-y-6">
                  {[
                    { icon: Phone, label: 'Phone / WhatsApp', value: '+91 88660 08868', href: 'tel:+918866008868' },
                    { icon: Mail,  label: 'Email',            value: 'storiesbyphotofilms@gmail.com', href: 'mailto:storiesbyphotofilms@gmail.com' },
                    { icon: MapPin, label: 'Studio',          value: 'Vadodara, Gujarat, India' },
                    { icon: Clock, label: 'Response Time',    value: 'Within 24 hours' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-9 h-9 border border-gold/30 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/40 mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-dark/75 hover:text-gold transition-colors duration-200">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-dark/75">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-sm tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="w-4.5 h-4.5" />
                Quick WhatsApp Inquiry
              </a>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-dark/[0.07] p-8 md:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold mb-3">
                  Send an Enquiry
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-dark mb-2">
                  Tell us about your big day
                </h2>
                <p className="text-dark/40 text-sm mb-8 leading-relaxed">
                  Share the details — date, venue, functions — and we&apos;ll reply with availability and package options within 24 hours.
                </p>
                <ContactForm defaultService={service} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
