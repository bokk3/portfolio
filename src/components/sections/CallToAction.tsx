'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function CallToAction() {
  const t = useTranslations('home.cta');
  const locale = useLocale();

  return (
    <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href={`/${locale}/contact`} 
            variant="secondary"
            size="lg" 
            className="group bg-white text-blue-600 hover:bg-gray-100"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            {t('button1')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            href={`/${locale}/projects`} 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            {t('button2')}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>{t('trust1')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>{t('trust2')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>{t('trust3')}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
