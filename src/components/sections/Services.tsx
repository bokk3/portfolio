'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Code2, Smartphone, Database, Zap } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function Services() {
  const t = useTranslations('home.services');
  const locale = useLocale();

  const services = [
    {
      icon: Code2,
      title: t('webdev.title'),
      description: t('webdev.description'),
      features: [
        t('webdev.features.0'),
        t('webdev.features.1'),
        t('webdev.features.2'),
      ],
    },
    {
      icon: Smartphone,
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      features: [
        t('ecommerce.features.0'),
        t('ecommerce.features.1'),
        t('ecommerce.features.2'),
      ],
    },
    {
      icon: Database,
      title: t('backend.title'),
      description: t('backend.description'),
      features: [
        t('backend.features.0'),
        t('backend.features.1'),
        t('backend.features.2'),
      ],
    },
    {
      icon: Zap,
      title: t('performance.title'),
      description: t('performance.description'),
      features: [
        t('performance.features.0'),
        t('performance.features.1'),
        t('performance.features.2'),
      ],
    },
  ];

  return (
    <Section id="services" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg dark:hover:shadow-gray-700/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
          >
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 heading-dyslexia-friendly">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-dyslexia-friendly">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Button href={`/${locale}/services`} variant="outline" size="lg">
          {t('cta')}
        </Button>
      </div>
    </Section>
  );
}
