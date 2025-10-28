'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPostMeta;
  locale: string;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/${locale}/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
        >
          {locale === 'fr' ? 'Lire la suite' : 
           locale === 'nl' ? 'Lees meer' : 
           'Read more'}
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}