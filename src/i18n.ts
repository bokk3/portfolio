// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'nl', 'fr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined and valid, fallback to 'en'
  const validLocale: Locale = (locale && locales.includes(locale as Locale)) 
    ? (locale as Locale) 
    : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

