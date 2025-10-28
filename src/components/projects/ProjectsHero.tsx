'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { Rocket, Star, Users, Award } from 'lucide-react';

export function ProjectsHero() {
  const t = useTranslations('projects');

  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20 mt-16 md:mt-20 relative overflow-hidden">
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
            <Rocket className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-purple-200">{t('hero.stats.delivered')}</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm text-purple-200">{t('hero.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-purple-200">{t('hero.stats.success')}</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Rocket className="w-6 h-6 text-pink-300" />
              </div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-purple-200">{t('hero.stats.experience')}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}