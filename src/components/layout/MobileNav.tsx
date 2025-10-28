'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 z-40 md:hidden overflow-y-auto">
        <div className="px-4 py-6 space-y-6">
          {/* Navigation Links */}
          <nav className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Language & Theme</p>
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button href={`/${locale}/contact`} className="w-full" onClick={onClose}>
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
