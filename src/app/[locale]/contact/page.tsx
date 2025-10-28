import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Contact Us - Get In Touch Today',
    fr: 'Contactez-Nous - Prenez Contact Aujourd\'hui',
    nl: 'Contact Ons - Neem Vandaag Contact Op'
  };

  const descriptions = {
    en: 'Ready to start your project? Get in touch with our team for a free consultation and quote. We\'re here to help bring your ideas to life.',
    fr: 'Prêt à démarrer votre projet ? Contactez notre équipe pour une consultation gratuite et un devis. Nous sommes là pour donner vie à vos idées.',
    nl: 'Klaar om uw project te starten? Neem contact op met ons team voor een gratis consultatie en offerte. We zijn er om uw ideeën tot leven te brengen.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ContactHero />
      
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm locale={locale} />
          </div>
          
          {/* Contact Information */}
          <div>
            <ContactInfo locale={locale} />
          </div>
        </div>
      </Container>

      {/* Map Section */}
      <ContactMap />
    </main>
  );
}