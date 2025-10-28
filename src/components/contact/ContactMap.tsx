'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { MapPin, Navigation } from 'lucide-react';

export function ContactMap() {
  const t = useTranslations('contact.map');

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
              {/* This would be replaced with an actual map component like Google Maps or Mapbox */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    {t('placeholder')}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Leuven, Belgium
                  </p>
                </div>
              </div>
              
              {/* Map overlay with address */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        truyens.pro
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Leuven, Belgium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('locationInfo.title')}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {t('locationInfo.address')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Leuven, Belgium<br />
                    European Union
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {t('locationInfo.timezone')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Central European Time (CET)<br />
                    UTC+1 / UTC+2 (DST)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('directions.title')}
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Leuven,Belgium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t('directions.google')}</span>
                </a>
                
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="mb-2">{t('directions.publicTransport')}</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Metro: Lines 1, 5, 6</li>
                    <li>• Bus: Multiple lines</li>
                    <li>• Train: Leuven Station</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('visit.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {t('visit.description')}
              </p>
              <a
                href="mailto:contact@truyens.pro?subject=Office Visit"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                {t('visit.schedule')} →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}