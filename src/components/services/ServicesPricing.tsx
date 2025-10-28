'use client';

import { useTranslations } from 'next-intl';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ServicesPricing() {
  const t = useTranslations('services.pricing');

  const plans = [
    {
      name: t('starter.name'),
      description: t('starter.description'),
      price: t('starter.price'),
      period: t('starter.period'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
        t('starter.features.4'),
      ],
      popular: false,
    },
    {
      name: t('professional.name'),
      description: t('professional.description'),
      price: t('professional.price'),
      period: t('professional.period'),
      features: [
        t('professional.features.0'),
        t('professional.features.1'),
        t('professional.features.2'),
        t('professional.features.3'),
        t('professional.features.4'),
        t('professional.features.5'),
      ],
      popular: true,
    },
    {
      name: t('enterprise.name'),
      description: t('enterprise.description'),
      price: t('enterprise.price'),
      period: t('enterprise.period'),
      features: [
        t('enterprise.features.0'),
        t('enterprise.features.1'),
        t('enterprise.features.2'),
        t('enterprise.features.3'),
        t('enterprise.features.4'),
        t('enterprise.features.5'),
      ],
      popular: false,
    },
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{t('popular')}</span>
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${
                plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${
                plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
              }`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${
                  plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    plan.popular ? 'text-green-300' : 'text-green-600 dark:text-green-400'
                  }`} />
                  <span className={`text-sm ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="/contact"
              className={`w-full ${
                plan.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {t('getStarted')}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}