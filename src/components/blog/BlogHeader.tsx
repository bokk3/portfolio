'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export function BlogHeader() {
  const t = useTranslations('blog');

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 mt-16 md:mt-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📝</span>
            <span>Latest Articles</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </Container>
    </section>
  );
}