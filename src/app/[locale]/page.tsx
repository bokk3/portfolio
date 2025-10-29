// src/app/[locale]/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CallToAction } from '@/components/sections/CallToAction';
import { ContactPreview } from '@/components/sections/ContactPreview';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const seoData = {
    nl: {
      title: 'Boris Truyens - Webontwikkelaar | Moderne Digitale Oplossingen',
      description: 'Professionele webontwikkeling in België. Specialist in Next.js, React, e-commerce en digitale transformatie. Gratis consultatie beschikbaar.',
      keywords: 'webontwikkelaar België, Next.js developer, React specialist, e-commerce ontwikkeling, digitale oplossingen Leuven'
    },
    en: {
      title: 'Boris Truyens - Web Developer | Modern Digital Solutions',
      description: 'Professional web development in Belgium. Specialist in Next.js, React, e-commerce and digital transformation. Free consultation available.',
      keywords: 'web developer Belgium, Next.js developer, React specialist, e-commerce development, digital solutions Leuven'
    },
    fr: {
      title: 'Boris Truyens - Développeur Web | Solutions Numériques Modernes',
      description: 'Développement web professionnel en Belgique. Spécialiste en Next.js, React, e-commerce et transformation numérique. Consultation gratuite disponible.',
      keywords: 'développeur web Belgique, développeur Next.js, spécialiste React, développement e-commerce, solutions numériques Louvain'
    }
  };

  const data = seoData[locale as keyof typeof seoData] || seoData.nl;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      locale: locale === 'nl' ? 'nl_BE' : locale === 'fr' ? 'fr_BE' : 'en_US',
    },
    twitter: {
      title: data.title,
      description: data.description,
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <AboutPreview />
      <CallToAction />
      <ContactPreview />
    </main>
  );
}
