import { Container } from '@/components/ui/Container';
import { LegalPageHeader } from '@/components/legal/LegalPageHeader';
import { LegalContent } from '@/components/legal/LegalContent';
import { Metadata } from 'next';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Terms of Service - WebDev Agency',
    fr: 'Conditions de Service - WebDev Agency',
    nl: 'Servicevoorwaarden - WebDev Agency'
  };

  const descriptions = {
    en: 'Read our terms of service to understand the rules and regulations for using our website and services.',
    fr: 'Lisez nos conditions de service pour comprendre les règles et réglementations d\'utilisation de notre site web et de nos services.',
    nl: 'Lees onze servicevoorwaarden om de regels en voorschriften voor het gebruik van onze website en diensten te begrijpen.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <LegalPageHeader 
        title="Terms of Service"
        subtitle="Rules and regulations for using our website and services"
        locale={locale}
      />
      
      <Container className="py-16">
        <LegalContent type="terms" locale={locale} />
      </Container>
    </main>
  );
}