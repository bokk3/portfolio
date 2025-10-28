'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getAllCategories, getAllTechnologies } from '@/lib/projects';
import { Filter, X } from 'lucide-react';

interface ProjectsFilterProps {
  selectedCategory?: string;
  selectedTech?: string;
  locale: string;
}

export function ProjectsFilter({ selectedCategory, selectedTech, locale }: ProjectsFilterProps) {
  const searchParams = useSearchParams();
  const categories = getAllCategories();
  const technologies = getAllTechnologies();

  const createFilterUrl = (category?: string, tech?: string) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (tech) params.set('tech', tech);
    const queryString = params.toString();
    return `/${locale}/projects${queryString ? `?${queryString}` : ''}`;
  };

  const hasActiveFilters = selectedCategory || selectedTech;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filter Projects
          </h3>
        </div>
        
        {hasActiveFilters && (
          <Link
            href={`/${locale}/projects`}
            className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Clear All</span>
          </Link>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Category
          </h4>
          <div className="flex flex-wrap gap-2">
            <Link
              href={createFilterUrl(undefined, selectedTech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.key}
                href={createFilterUrl(category.key, selectedTech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Technology
          </h4>
          <div className="flex flex-wrap gap-2">
            <Link
              href={createFilterUrl(selectedCategory, undefined)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !selectedTech
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All
            </Link>
            {technologies.slice(0, 12).map((tech) => (
              <Link
                key={tech}
                href={createFilterUrl(selectedCategory, tech)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTech === tech
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}