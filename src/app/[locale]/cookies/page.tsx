import { Container } from '@/components/ui/Container';
import { LegalPageHeader } from '@/components/legal/LegalPageHeader';
import { LegalContent } from '@/components/legal/LegalContent';
import { Metadata } from 'next';

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Cookie Policy - WebDev Agency',
    fr: 'Politique des Cookies - WebDev Agency',
    nl: 'Cookiebeleid - WebDev Agency'
  };

  const descriptions = {
    en: 'Learn about how we use cookies and similar technologies to improve your browsing experience on our website.',
    fr: 'Découvrez comment nous utilisons les cookies et technologies similaires pour améliorer votre expérience de navigation sur notre site web.',
    nl: 'Leer hoe we cookies en vergelijkbare technologieën gebruiken om uw browse-ervaring op onze website te verbeteren.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <LegalPageHeader 
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        locale={locale}
      />
      
      <Container className="py-16">
        <LegalContent type="cookies" locale={locale} />
      </Container>
    </main>
  );
}