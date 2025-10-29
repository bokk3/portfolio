'use client';

import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail, Clock, MapPin, Users, Award } from 'lucide-react';

export function ContactHero() {
    const t = useTranslations('contact');

    return (
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 mt-16 md:mt-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-blue-100/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageCircle className="w-4 h-4" />
                            <span>{t('hero.badge')}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t('hero.title')}
                        </h1>

                        <p className="text-xl text-blue-100 mb-8">
                            {t('hero.subtitle')}
                        </p>

                        {/* Quick Contact Options */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+32479124428"
                                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span>+32 479 12 44 28</span>
                            </a>
                            <a
                                href="mailto:truyensboris@proton.me"
                                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span>truyensboris@proton.me</span>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Contact Stats & Info */}
                    <div className="hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">{t('hero.whyChoose')}</h3>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="text-2xl font-bold">50+</div>
                                    <div className="text-blue-100 text-sm">{t('hero.happyClients')}</div>
                                </div>

                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div className="text-2xl font-bold">98%</div>
                                    <div className="text-blue-100 text-sm">{t('hero.successRate')}</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Clock className="w-5 h-5 text-blue-200" />
                                    <span className="text-blue-100">{t('hero.responseTime')}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-200" />
                                    <span className="text-blue-100">{t('hero.location')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}