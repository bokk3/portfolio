// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/legal/CookieBanner';
import { StructuredData } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    nl: 'Boris Truyens - Webontwikkelaar & Digital Consultant',
    en: 'Boris Truyens - Web Developer & Digital Consultant', 
    fr: 'Boris Truyens - Développeur Web & Consultant Digital'
  };
  
  const descriptions = {
    nl: 'Professionele webontwikkeling en digitale oplossingen. Specialist in Next.js, React, en moderne web technologieën. Van concept tot lancering.',
    en: 'Professional web development and digital solutions. Specialist in Next.js, React, and modern web technologies. From concept to launch.',
    fr: 'Développement web professionnel et solutions numériques. Spécialiste en Next.js, React et technologies web modernes. Du concept au lancement.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.nl,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.nl,
  };
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'nl' }
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params in Next.js 15
  const { locale } = await params;
  
  // Providing all messages to the client with the specific locale
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <StructuredData locale={locale} />
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </NextIntlClientProvider>
  );
}