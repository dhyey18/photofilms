import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import { MapPin, Phone, Mail } from 'lucide-react'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const LOGO_SRC = '/logo.png'

const quickLinks = [
  { href: '/portfolio',    label: 'Gallery' },
  { href: '/about',        label: 'About Us' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog',         label: 'Journal' },
  { href: '/faq',          label: 'FAQ' },
  { href: '/contact',      label: 'Contact' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  )
}

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
                width={200}
                height={52}
                className="h-36 w-auto brightness-0"
              />
            </Link>
            <p className="text-sm leading-relaxed text-dark/45 max-w-xs mb-6">
              Luxury wedding photography and cinematography based in Vadodara, Gujarat. Capturing love stories across India.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.instagram.com/photofilms_/', Icon: InstagramIcon, label: 'Instagram' },
                { href: 'https://facebook.com/photofilms',        Icon: FacebookIcon,  label: 'Facebook' },
                { href: 'https://youtube.com/@photofilms',        Icon: YouTubeIcon,   label: 'YouTube' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-dark/[0.1] text-dark/35 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <Icon />
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
                { icon: Mail,   text: 'storiesbyphotofilms@gmail.com', href: 'mailto:storiesbyphotofilms@gmail.com' },
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
