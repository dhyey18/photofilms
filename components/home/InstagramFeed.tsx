import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

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
    <section className="bg-[#faf8f5] border-t border-dark/[0.06] py-20 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className={`${script.className} text-4xl md:text-5xl text-dark/65 mb-2`}>
                Follow Along
              </h2>
              <p className="font-serif text-2xl md:text-3xl text-dark">
                @photofilms_
              </p>
              <p className="mt-3 text-dark/40 text-sm max-w-xs leading-relaxed">
                Daily stories from our lens — behind-the-scenes and latest work.
              </p>
            </div>
            <a
              href="https://www.instagram.com/photofilms_/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-3 border border-dark/20 text-dark/55 hover:border-dark hover:text-dark font-semibold px-6 py-3 text-[11px] tracking-[0.22em] uppercase transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>

        {/* Photo grid — 9 squares */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-1">
          {igPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.04} className="md:col-span-1 aspect-square">
              <a
                href="https://www.instagram.com/photofilms_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-full overflow-hidden"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-600 ease-out"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
                {/* Gold tint on hover */}
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/15 transition-colors duration-400" />
                {/* Thin gold border on hover */}
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-300" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Tagline */}
        <ScrollReveal delay={0.15}>
          <p className={`${script.className} text-center text-2xl text-dark/30 mt-10`}>
            Moments that matter, shared with love
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
