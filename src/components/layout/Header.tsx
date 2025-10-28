// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { MobileNav } from './MobileNav';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params.locale as string) || 'en';

  const navigation = [
    { name: t('home'), href: `/${currentLocale}` },
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
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl text-gray-900">WebDev</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                {languages.map((lang, index) => (
                  <div key={lang.code} className="flex items-center">
                    <Link
                      href={switchLocale(lang.code)}
                      className={`font-medium transition-colors ${
                        currentLocale === lang.code
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {lang.label}
                    </Link>
                    {index < languages.length - 1 && (
                      <span className="mx-2 text-gray-300">|</span>
                    )}
                  </div>
                ))}
              </div>
              
              <Button href={`/${currentLocale}/contact`} size="sm">
                {t('getStarted')}
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
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