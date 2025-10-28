'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';

export function ServicesTestimonials() {
  const t = useTranslations('services.testimonials');

  const testimonials = [
    {
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      company: t('testimonial1.company'),
      content: t('testimonial1.content'),
      rating: 5,
    },
    {
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      company: t('testimonial2.company'),
      content: t('testimonial2.content'),
      rating: 5,
    },
    {
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      company: t('testimonial3.company'),
      content: t('testimonial3.content'),
      rating: 5,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative"
            >
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}