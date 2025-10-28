'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function AboutPreview() {
  const t = useTranslations('home.about');
  const tStats = useTranslations('stats');
  const locale = useLocale();

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('subtitle')}
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{t.raw('benefits')[index]}</span>
              </div>
            ))}
          </div>

          <Button href={`/${locale}/contact`} size="lg">
            {t('cta')}
          </Button>
        </div>

        {/* Right - Visual/Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-blue-100">{tStats('years')}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-purple-100">{tStats('delivered')}</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-green-100">{tStats('rate')}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-orange-100">{tStats('support')}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
