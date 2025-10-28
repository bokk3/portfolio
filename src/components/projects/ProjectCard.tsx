'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { ExternalLink, Github, Calendar, User } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  locale: string;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    ongoing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    maintenance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
  };

  const categoryColors = {
    ecommerce: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    saas: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    portfolio: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    webapp: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    mobile: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
  };

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[project.category]}`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-900" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5 text-gray-900" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/${locale}/projects/${project.id}`}>
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{project.client}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Project Link */}
        <Link
          href={`/${locale}/projects/${project.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
        >
          View Project
          <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}