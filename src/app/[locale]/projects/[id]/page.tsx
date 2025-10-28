import { getProjectById, projects } from '@/lib/projects';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectDetails } from '@/components/projects/ProjectDetails';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectTestimonial } from '@/components/projects/ProjectTestimonial';
import { RelatedProjects } from '@/components/projects/RelatedProjects';
import { Container } from '@/components/ui/Container';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ProjectHero project={project} />
      
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ProjectDetails project={project} />
            <div className="mt-12">
              <ProjectGallery project={project} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {project.testimonial && (
                <ProjectTestimonial testimonial={project.testimonial} />
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <RelatedProjects 
            currentProject={project} 
            locale={locale}
          />
        </div>
      </Container>
    </main>
  );
}