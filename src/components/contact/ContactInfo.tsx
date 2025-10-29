'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

interface ContactInfoProps {
  locale: string;
}

export function ContactInfo({ locale }: ContactInfoProps) {
  const t = useTranslations('contact.info');

  const contactMethods = [
    {
      icon: Mail,
      title: t('email.title'),
      value: 'truyensboris@proton.me',
      description: t('email.description'),
      href: 'mailto:truyensboris@proton.me',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Phone,
      title: t('phone.title'),
      value: '+32 479 12 44 28',
      description: t('phone.description'),
      href: 'tel:+32479124428',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
    {
      icon: MapPin,
      title: t('address.title'),
      value: 'Leuven, Belgium',
      description: t('address.description'),
      href: '#',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
  ];

  const businessHours = [
    { day: t('hours.monday'), hours: '9:00 - 18:00' },
    { day: t('hours.tuesday'), hours: '9:00 - 18:00' },
    { day: t('hours.wednesday'), hours: '9:00 - 18:00' },
    { day: t('hours.thursday'), hours: '9:00 - 18:00' },
    { day: t('hours.friday'), hours: '9:00 - 17:00' },
    { day: t('hours.saturday'), hours: t('hours.closed') },
    { day: t('hours.sunday'), hours: t('hours.closed') },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('title')}
        </h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="group flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.color}`}>
                <method.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-lg text-gray-900 dark:text-white font-medium mb-1">
                  {method.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {method.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('hours.title')}
          </h3>
        </div>
        
        <div className="space-y-2">
          {businessHours.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">{item.day}</span>
              <span className="text-gray-900 dark:text-white font-medium">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t('quickActions.title')}
        </h3>
        
        <div className="space-y-3">
          <a
            href="mailto:truyensboris@proton.me?subject=Quick Question"
            className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('quickActions.quickQuestion')}</span>
          </a>
          
          <a
            href="mailto:truyensboris@proton.me?subject=Schedule Meeting"
            className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span>{t('quickActions.scheduleMeeting')}</span>
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <p className="text-green-800 dark:text-green-200 font-medium">
          {t('responseTime')}
        </p>
      </div>
    </div>
  );
}