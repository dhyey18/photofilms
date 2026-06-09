import Image from 'next/image'
import { Camera } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const igPosts = [
  { src: 'https://photofilms.in/images/slider/01.webp', alt: 'Wedding portrait' },
  { src: 'https://photofilms.in/images/slider/02.webp', alt: 'Wedding ceremony' },
  { src: 'https://photofilms.in/images/slider/03.webp', alt: 'Couple portrait' },
  { src: 'https://photofilms.in/images/slider/04.webp', alt: 'Pre-wedding shoot' },
  { src: 'https://photofilms.in/images/slider/05.webp', alt: 'Bridal portrait' },
  { src: 'https://photofilms.in/images/slider/06.webp', alt: 'Reception' },
  { src: 'https://photofilms.in/images/slider/07.webp', alt: 'Mehendi ceremony' },
  { src: 'https://photofilms.in/images/slider/08.webp', alt: 'Sangeet night' },
  { src: 'https://photofilms.in/images/slider/09.webp', alt: 'Drone aerial shot' },
]

export default function InstagramFeed() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Follow Along"
              title="@photofilms_"
              subtitle="Daily stories from our lens — follow us for behind-the-scenes and latest work."
            />
            <a
              href="https://www.instagram.com/photofilms_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-dark text-dark font-semibold px-5 py-3 text-sm tracking-wide hover:bg-dark hover:text-warm-white transition-colors duration-200 shrink-0"
            >
              <Camera className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
          {igPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.04} className="md:col-span-1 aspect-square">
              <a
                href="https://www.instagram.com/photofilms_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-full overflow-hidden bg-surface"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
