'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="font-bold text-xl text-white dark:text-gray-100">truyens.pro</span>
              </Link>
              <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-sm">
                {t('description')}
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'github', icon: Github, href: '#' },
                  { name: 'linkedin', icon: Linkedin, href: '#' },
                  { name: 'twitter', icon: Twitter, href: '#' },
                  { name: 'email', icon: Mail, href: 'mailto:truyensboris@proton.me' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={t.raw('social')[social.name]}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white dark:text-gray-200 mb-4">{t.raw('company').title}</h3>
              <ul className="space-y-3">
                {['about', 'projects', 'blog', 'contact'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${locale}/${link === 'about' ? 'about' : link}`}
                      className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {t.raw('company')[link]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-white dark:text-gray-200 mb-4">{t.raw('services').title}</h3>
              <ul className="space-y-3">
                {['webdev', 'ecommerce', 'custom', 'maintenance'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${locale}/services/${link === 'webdev' ? 'web-development' : link}`}
                      className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {t.raw('services')[link]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white dark:text-gray-200 mb-4">{t.raw('legal').title}</h3>
              <ul className="space-y-3">
                {['privacy', 'terms', 'cookies'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${locale}/${link === 'privacy' ? 'privacy' : link === 'terms' ? 'terms' : 'cookies'}`}
                      className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {t.raw('legal')[link]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t('copyright', { year: currentYear })}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center md:text-right">
              {t('partnership.text')}{' '}
              <a
                href="https://www.edgeforge.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                EdgeForge
              </a>
              {' • '}
              {t('made')}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
