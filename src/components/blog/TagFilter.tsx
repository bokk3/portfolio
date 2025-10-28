'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
  locale: string;
}

export function TagFilter({ tags, selectedTag, locale }: TagFilterProps) {
  const searchParams = useSearchParams();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {locale === 'fr' ? 'Filtrer par tag' : 
         locale === 'nl' ? 'Filter op tag' : 
         'Filter by tag'}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {/* All posts link */}
        <Link
          href={`/${locale}/blog`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedTag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {locale === 'fr' ? 'Tous' : 
           locale === 'nl' ? 'Alle' : 
           'All'}
        </Link>

        {/* Tag links */}
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/${locale}/blog?tag=${encodeURIComponent(tag)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}