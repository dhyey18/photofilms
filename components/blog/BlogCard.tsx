import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white border border-dark/[0.07] hover:border-gold/40 transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-600 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gold tint hover */}
          <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/10 transition-colors duration-400" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-gold/50" />
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="font-serif text-xl text-dark leading-snug group-hover:text-gold transition-colors duration-300 mb-2">
            {post.title}
          </h3>
          <p className="text-dark/42 text-sm leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-dark/[0.06]">
            <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold uppercase tracking-[0.18em] group-hover:gap-3 transition-all duration-300">
              Read <ArrowRight className="w-3 h-3" />
            </span>
            <span className="flex items-center gap-1.5 text-dark/28 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
