'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ServicesCTA() {
  const t = useTranslations('services.cta');
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/${locale}/contact`}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('primary')}
            </Button>
            <Button
              href={`/${locale}/projects`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              {t('secondary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{t('stats.response')}</div>
              <div className="text-blue-200">{t('stats.responseLabel')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t('stats.projects')}</div>
              <div className="text-blue-200">{t('stats.projectsLabel')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t('stats.satisfaction')}</div>
              <div className="text-blue-200">{t('stats.satisfactionLabel')}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}