'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export function FeaturedProjects() {
  const t = useTranslations('home.projects');
  const t1 = useTranslations('home.projects.project1');
  const t2 = useTranslations('home.projects.project2');
  const t3 = useTranslations('home.projects.project3');
  const locale = useLocale();

  const projects = [
    {
      title: t1('title'),
      description: t1('description'),
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      tags: [t1('tags.0'), t1('tags.1'), t1('tags.2')],
      link: `/${locale}/projects/ecommerce`,
    },
    {
      title: t2('title'),
      description: t2('description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: [t2('tags.0'), t2('tags.1'), t2('tags.2')],
      link: `/${locale}/projects/saas-dashboard`,
    },
    {
      title: t3('title'),
      description: t3('description'),
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: [t3('tags.0'), t3('tags.1'), t3('tags.2')],
      link: `/${locale}/projects/portfolio`,
    },
  ];

  return (
    <Section id="projects" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <a
                href={project.link}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="w-5 h-5 text-gray-900" />
              </a>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center">
        <Button href={`/${locale}/projects`} variant="outline" size="lg" className="group">
          {t('cta')}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Section>
  );
}
