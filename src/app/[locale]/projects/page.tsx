import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ProjectsFilter } from '@/components/projects/ProjectsFilter';
import { ProjectsStats } from '@/components/projects/ProjectsStats';
import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; tech?: string }>;
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Our Projects - Portfolio Showcase',
    fr: 'Nos Projets - Vitrine Portfolio',
    nl: 'Onze Projecten - Portfolio Showcase'
  };

  const descriptions = {
    en: 'Explore our portfolio of successful web development projects. From e-commerce platforms to SaaS applications, see how we bring ideas to life.',
    fr: 'Explorez notre portfolio de projets de développement web réussis. Des plateformes e-commerce aux applications SaaS, voyez comment nous donnons vie aux idées.',
    nl: 'Verken ons portfolio van succesvolle webontwikkelingsprojecten. Van e-commerce platforms tot SaaS applicaties, zie hoe we ideeën tot leven brengen.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const { locale } = await params;
  const { category, tech } = await searchParams;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ProjectsHero />
      
      <Container className="py-16">
        <ProjectsStats />
        
        <div className="mt-16">
          <ProjectsFilter 
            selectedCategory={category}
            selectedTech={tech}
            locale={locale}
          />
        </div>
        
        <div className="mt-12">
          <ProjectsGrid 
            category={category}
            tech={tech}
            locale={locale}
          />
        </div>
      </Container>
    </main>
  );
}