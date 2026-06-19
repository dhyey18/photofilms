import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import { Camera, Users, Play, MapPin, Phone, Mail } from 'lucide-react'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const LOGO_SRC = 'https://photofilms.in/images/logolight-photofilms.svg'

const quickLinks = [
  { href: '/portfolio',    label: 'Portfolio' },
  { href: '/about',        label: 'About Us' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog',         label: 'Journal' },
  { href: '/faq',          label: 'FAQ' },
  { href: '/contact',      label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-dark/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-14 border-b border-dark/[0.06]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src={LOGO_SRC}
                alt="Photofilms"
                width={140}
                height={36}
                className="h-9 w-auto brightness-0"
              />
            </Link>
            <p className="text-sm leading-relaxed text-dark/45 max-w-xs mb-6">
              Luxury wedding photography and cinematography based in Vadodara, Gujarat. Capturing love stories across India.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'https://www.instagram.com/photofilms_/', icon: Camera, label: 'Instagram' },
                { href: 'https://facebook.com/photofilms',        icon: Users,  label: 'Facebook' },
                { href: 'https://youtube.com/@photofilms',        icon: Play,   label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-dark/[0.1] text-dark/35 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold mb-6">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark/45 hover:text-dark transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold/50 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold mb-6">Get in Touch</p>
            <ul className="space-y-4 mb-7">
              {[
                { icon: MapPin, text: 'Vadodara, Gujarat, India', href: undefined },
                { icon: Phone,  text: '+91 88660 08868', href: 'tel:+918866008868' },
                { icon: Mail,   text: 'hello@photofilms.in', href: 'mailto:hello@photofilms.in' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-dark/45">
                  <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-gold transition-colors duration-200">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-dark/20 text-dark/55 hover:border-gold hover:text-gold font-semibold px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-200"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`${script.className} text-xl text-dark/30`}>
            Every moment, preserved forever.
          </p>
          <p className="text-xs text-dark/28">
            © {new Date().getFullYear()} Photofilms · Vadodara, Gujarat
          </p>
        </div>
      </div>
    </footer>
  )
}
