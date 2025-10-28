'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Cookie, Settings, X } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const t = useTranslations('cookies');
  const locale = useLocale();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize analytics and marketing cookies here
    initializeAnalytics();
    initializeMarketing();
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize only accepted cookies
    if (preferences.analytics) initializeAnalytics();
    if (preferences.marketing) initializeMarketing();
  };

  const rejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics cookies enabled');
    }
    // TODO: Add actual analytics initialization here
  };

  const initializeMarketing = () => {
    // Initialize marketing cookies
    if (process.env.NODE_ENV === 'development') {
      console.log('Marketing cookies enabled');
    }
    // TODO: Add actual marketing cookies initialization here
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t('banner.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('banner.description')}{' '}
                  <Link 
                    href={`/${locale}/cookies`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('banner.learnMore')}
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t('banner.customize')}
              </Button>
              <Button
                onClick={rejectAll}
                variant="ghost"
                size="sm"
                className="w-full sm:w-auto"
              >
                {t('banner.reject')}
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="w-full sm:w-auto"
              >
                {t('banner.acceptAll')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('settings.title')}
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('settings.description')}
              </p>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('settings.essential.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('settings.essential.description')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                      <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('settings.analytics.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('settings.analytics.description')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('settings.marketing.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('settings.marketing.description')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  onClick={acceptSelected}
                  className="flex-1"
                >
                  {t('settings.savePreferences')}
                </Button>
                <Button
                  onClick={acceptAll}
                  variant="outline"
                  className="flex-1"
                >
                  {t('settings.acceptAll')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}