'use client';

import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import { Container } from '@/components/ui/Container';
import { Calendar, User, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  // Estimate reading time (average 200 words per minute)
  const wordCount = post.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <header className="relative">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <Container className="pb-12">
            <div className="max-w-4xl">
              {/* Meta */}
              <div className="flex items-center space-x-6 text-white/80 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-white/90 max-w-3xl">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}