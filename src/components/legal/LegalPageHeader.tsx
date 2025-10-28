'use client';

import { Container } from '@/components/ui/Container';
import { Shield, FileText, Cookie } from 'lucide-react';

interface LegalPageHeaderProps {
  title: string;
  subtitle: string;
  locale: string;
}

export function LegalPageHeader({ title, subtitle, locale }: LegalPageHeaderProps) {

  const getIcon = () => {
    if (title.toLowerCase().includes('privacy')) return Shield;
    if (title.toLowerCase().includes('cookie')) return Cookie;
    return FileText;
  };

  const Icon = getIcon();

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 mt-16 md:mt-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon className="w-4 h-4" />
            <span>Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="text-sm text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'nl' ? 'nl-NL' : 'en-US')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}