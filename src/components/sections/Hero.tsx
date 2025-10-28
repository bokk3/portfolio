'use client';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function Hero() {
  const t = useTranslations('home.hero');
  const tStats = useTranslations('stats');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left pt-20 lg:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t('titleHighlight')}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href={`/${locale}/contact`} size="lg" className="group">
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href={`/${locale}/projects`} variant="outline" size="lg">
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{tStats('projects')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{tStats('satisfaction')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{tStats('experience')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Code Block Visual */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400"> buildAmazing</span>
                    <span className="text-white"> = () =&gt; {'{'}</span>
                  </div>
                  <div className="flex items-start space-x-2 ml-6">
                    <span className="text-gray-500">2</span>
                    <span className="text-pink-400">return</span>
                    <span className="text-green-400"> "Success"</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">3</span>
                    <span className="text-white">{'}'}</span>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
