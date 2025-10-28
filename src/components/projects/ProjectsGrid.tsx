'use client';

import { getFilteredProjects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  category?: string;
  tech?: string;
  locale: string;
}

export function ProjectsGrid({ category, tech, locale }: ProjectsGridProps) {
  const projects = getFilteredProjects(category, tech);

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No projects found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters to see more projects.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          locale={locale}
        />
      ))}
    </div>
  );
}