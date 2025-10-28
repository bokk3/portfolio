'use client';

import { useTranslations } from 'next-intl';
import { Code2, Smartphone, Database, Zap, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ServicesGrid() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Code2,
      title: t('webdev.title'),
      description: t('webdev.description'),
      features: [
        t('webdev.features.0'),
        t('webdev.features.1'),
        t('webdev.features.2'),
        t('webdev.features.3'),
        t('webdev.features.4'),
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'blue',
    },
    {
      icon: Smartphone,
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      features: [
        t('ecommerce.features.0'),
        t('ecommerce.features.1'),
        t('ecommerce.features.2'),
        t('ecommerce.features.3'),
        t('ecommerce.features.4'),
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      color: 'green',
    },
    {
      icon: Database,
      title: t('backend.title'),
      description: t('backend.description'),
      features: [
        t('backend.features.0'),
        t('backend.features.1'),
        t('backend.features.2'),
        t('backend.features.3'),
        t('backend.features.4'),
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'purple',
    },
    {
      icon: Zap,
      title: t('performance.title'),
      description: t('performance.description'),
      features: [
        t('performance.features.0'),
        t('performance.features.1'),
        t('performance.features.2'),
        t('performance.features.3'),
        t('performance.features.4'),
      ],
      technologies: ['CDN', 'Caching', 'SEO', 'Analytics'],
      color: 'yellow',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        icon: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        icon: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-600',
        button: 'bg-green-600 hover:bg-green-700',
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        icon: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
      },
      yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        icon: 'text-yellow-600 dark:text-yellow-500',
        border: 'border-yellow-200 dark:border-yellow-600',
        button: 'bg-yellow-600 hover:bg-yellow-700',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service, index) => {
        const colorClasses = getColorClasses(service.color);
        
        return (
          <div
            key={index}
            className={`group p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:${colorClasses.border}`}
          >
            <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6`}>
              <service.icon className={`w-8 h-8 ${colorClasses.icon}`} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {t('grid.features')}:
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 ${colorClasses.icon} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {t('grid.technologies')}:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.icon} text-xs font-medium rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Button
              href="/contact"
              className={`w-full ${colorClasses.button} text-white`}
              size="sm"
            >
              {t('grid.getStarted')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}