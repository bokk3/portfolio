// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { MobileNav } from './MobileNav';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params.locale as string) || 'en';

  const navigation = [
    { name: t('home'), href: `/${currentLocale}` },
    { name: t('services'), href: `/${currentLocale}/services` },
    { name: t('projects'), href: `/${currentLocale}/projects` },
    { name: t('blog'), href: `/${currentLocale}/blog` },
    { name: t('contact'), href: `/${currentLocale}/contact` },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'fr', label: 'FR' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    return `/${newLocale}${pathWithoutLocale || ''}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className={`font-bold text-xl transition-colors ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-900 dark:text-white'
              }`}>truyens.pro</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1">
                {languages.map((lang, index) => (
                  <div key={lang.code} className="flex items-center">
                    <Link
                      href={switchLocale(lang.code)}
                      className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                        currentLocale === lang.code
                          ? isScrolled
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : isScrolled
                            ? 'text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                            : 'text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {lang.label}
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* CTA Button */}
              <Button href={`/${currentLocale}/contact`} size="sm">
                {t('getStarted')}
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}