import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import type { BlogPost } from '@/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-warm-white border border-border hover:border-gold/40 transition-colors duration-300 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-serif text-xl text-dark leading-snug group-hover:text-gold-dark transition-colors mb-2">
            {post.title}
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-warm-gray/70">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} min read
            </span>
            <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
