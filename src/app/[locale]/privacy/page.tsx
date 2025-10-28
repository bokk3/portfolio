import { Container } from '@/components/ui/Container';
import { LegalPageHeader } from '@/components/legal/LegalPageHeader';
import { LegalContent } from '@/components/legal/LegalContent';
import { Metadata } from 'next';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Privacy Policy - WebDev Agency',
    fr: 'Politique de Confidentialité - WebDev Agency',
    nl: 'Privacybeleid - WebDev Agency'
  };

  const descriptions = {
    en: 'Learn how we collect, use, and protect your personal information. Our privacy policy explains our data practices in detail.',
    fr: 'Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles. Notre politique de confidentialité explique nos pratiques de données en détail.',
    nl: 'Leer hoe we uw persoonlijke informatie verzamelen, gebruiken en beschermen. Ons privacybeleid legt onze gegevenspraktijken in detail uit.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <LegalPageHeader 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        locale={locale}
      />
      
      <Container className="py-16">
        <LegalContent type="privacy" locale={locale} />
      </Container>
    </main>
  );
}