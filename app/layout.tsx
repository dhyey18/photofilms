import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Photofilms — Wedding Photographers Vadodara',
    default: 'Photofilms — Luxury Wedding Photography & Cinematography in Vadodara, Gujarat',
  },
  description:
    'Photofilms is a luxury wedding photography and cinematography studio based in Vadodara, Gujarat. Capturing timeless love stories across India with editorial artistry and cinematic storytelling.',
  keywords: [
    'wedding photographer Vadodara',
    'wedding photography Gujarat',
    'wedding cinematography Vadodara',
    'pre-wedding shoot Gujarat',
    'drone wedding photography India',
    'luxury wedding photographer India',
    'photofilms',
  ],
  metadataBase: new URL('https://photofilms.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://photofilms.in',
    siteName: 'Photofilms',
    title: 'Photofilms — Luxury Wedding Photography in Vadodara, Gujarat',
    description:
      'Award-winning wedding photography and cinematography studio in Vadodara. Capturing your love story across India.',
    images: [
      {
        url: 'https://photofilms.in/images/slider/01.webp',
        width: 1200,
        height: 630,
        alt: 'Photofilms — Wedding Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photofilms — Luxury Wedding Photography in Vadodara, Gujarat',
    description: 'Award-winning wedding photography and cinematography. Capturing your love story.',
    images: ['https://photofilms.in/images/slider/01.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-screen flex flex-col antialiased bg-cream text-dark">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
