'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { MessageSquare, Lightbulb, Code, Rocket, ArrowRight } from 'lucide-react';

export function ServicesProcess() {
  const t = useTranslations('services.process');

  const steps = [
    {
      icon: MessageSquare,
      title: t('consultation.title'),
      description: t('consultation.description'),
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: t('planning.title'),
      description: t('planning.description'),
      color: 'yellow',
    },
    {
      icon: Code,
      title: t('development.title'),
      description: t('development.description'),
      color: 'green',
    },
    {
      icon: Rocket,
      title: t('launch.title'),
      description: t('launch.description'),
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className={`w-20 h-20 ${getColorClasses(step.color)} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-10 h-10" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}