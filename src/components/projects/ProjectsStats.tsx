'use client';

import { projects } from '@/lib/projects';
import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

export function ProjectsStats() {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'ongoing').length;
  const uniqueClients = new Set(projects.map(p => p.client)).size;

  const stats = [
    {
      icon: TrendingUp,
      label: 'Total Projects',
      value: totalProjects,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      icon: CheckCircle,
      label: 'Completed',
      value: completedProjects,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      icon: Clock,
      label: 'Ongoing',
      value: ongoingProjects,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: uniqueClients,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center"
        >
          <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}