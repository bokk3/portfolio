'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { Code2, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';

export function ServicesHero() {
  const t = useTranslations('services');

  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20 mt-16 md:mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-purple-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
            {t('hero.subtitle')}
          </p>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-sm text-purple-200">{t('hero.services.webdev')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-sm text-purple-200">{t('hero.services.ecommerce')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Database className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-sm text-purple-200">{t('hero.services.backend')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-pink-300" />
              </div>
              <div className="text-sm text-purple-200">{t('hero.services.performance')}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}