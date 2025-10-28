'use client';

import { Section } from '@/components/ui/Section';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ContactPreview() {
  const t = useTranslations('home.contact');
  const t1 = useTranslations('home.contact');

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: t('emailValue'),
      href: 'mailto:contact@webdev.com',
    },
    {
      icon: Phone,
      label: t('phone'),
      value: t('phoneValue'),
      href: 'tel:+32123456789',
    },
    {
      icon: MapPin,
      label: t('location'),
      value: t('locationValue'),
      href: '#',
    },
  ];

  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.href}
            className="group flex flex-col items-center text-center p-8 bg-white dark:bg-gray-700 rounded-2xl hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <info.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {info.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {info.value}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
