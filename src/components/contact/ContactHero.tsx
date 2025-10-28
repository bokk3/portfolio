'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export function ContactHero() {
    const t = useTranslations('contact');

    return (
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 mt-16 md:mt-20">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-blue-100/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MessageCircle className="w-4 h-4" />
                        <span>{t('hero.badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('hero.title')}
                    </h1>

                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {t('hero.subtitle')}
                    </p>

                    {/* Quick Contact Options */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+32123456789"
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>+32 123 456 789</span>
                        </a>
                        <a
                            href="mailto:contact@webdev.com"
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>contact@webdev.com</span>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}