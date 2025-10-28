import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesPricing } from '@/components/services/ServicesPricing';
import { ServicesTestimonials } from '@/components/services/ServicesTestimonials';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Our Services - Web Development Solutions',
    fr: 'Nos Services - Solutions de Développement Web',
    nl: 'Onze Diensten - Webontwikkelingsoplossingen'
  };

  const descriptions = {
    en: 'Comprehensive web development services including custom websites, e-commerce solutions, backend development, and performance optimization.',
    fr: 'Services complets de développement web incluant sites web personnalisés, solutions e-commerce, développement backend et optimisation des performances.',
    nl: 'Uitgebreide webontwikkelingsdiensten inclusief aangepaste websites, e-commerce oplossingen, backend ontwikkeling en prestatie optimalisatie.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ServicesHero />
      
      <Container className="py-16">
        <ServicesGrid />
      </Container>
      
      <ServicesProcess />
      
      <Container className="py-16">
        <ServicesPricing />
      </Container>
      
      <ServicesTestimonials />
      
      <ServicesCTA />
    </main>
  );
}