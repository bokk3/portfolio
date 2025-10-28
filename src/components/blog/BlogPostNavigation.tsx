'use client';

import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostNavigationProps {
  prevPost: BlogPostMeta | null;
  nextPost: BlogPostMeta | null;
  locale: string;
}

export function BlogPostNavigation({ prevPost, nextPost, locale }: BlogPostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Post */}
        {prevPost && (
          <Link
            href={`/${locale}/blog/${prevPost.slug}`}
            className="group flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {locale === 'fr' ? 'Article précédent' : 
                 locale === 'nl' ? 'Vorig artikel' : 
                 'Previous post'}
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {prevPost.title}
              </h3>
            </div>
          </Link>
        )}

        {/* Next Post */}
        {nextPost && (
          <Link
            href={`/${locale}/blog/${nextPost.slug}`}
            className="group flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:ml-auto"
          >
            <div className="flex-1 text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {locale === 'fr' ? 'Article suivant' : 
                 locale === 'nl' ? 'Volgend artikel' : 
                 'Next post'}
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {nextPost.title}
              </h3>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </Link>
        )}
      </div>
    </nav>
  );
}