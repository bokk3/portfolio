// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'nl', 'fr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and provide fallback
  const validLocale = locales.includes(locale as Locale) ? locale : 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

