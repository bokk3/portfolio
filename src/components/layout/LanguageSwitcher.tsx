'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Get current path without locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '').replace(/^\//, '');
    const newPath = `/${newLocale}/${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {locales.map((loc, index) => (
        <span key={loc}>
          <button
            onClick={() => switchLocale(loc)}
            className={`font-medium transition-colors ${
              locale === loc
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {loc.toUpperCase()}
          </button>
          {index < locales.length - 1 && <span className="text-gray-300">|</span>}
        </span>
      ))}
    </div>
  );
}

