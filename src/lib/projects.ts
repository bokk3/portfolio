export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: 'ecommerce' | 'saas' | 'portfolio' | 'webapp' | 'mobile';
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  client: string;
  duration: string;
  year: number;
  status: 'completed' | 'ongoing' | 'maintenance';
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description: 'A full-featured e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.',
    longDescription: 'Built from the ground up, this e-commerce platform serves thousands of customers daily. Features include real-time inventory tracking, multi-payment gateway integration, advanced analytics, and a responsive admin dashboard. The platform handles high traffic loads and provides seamless user experience across all devices.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    category: 'ecommerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    features: [
      'Multi-vendor marketplace',
      'Real-time inventory management',
      'Advanced analytics dashboard',
      'Mobile-responsive design',
      'Payment gateway integration',
      'Order tracking system'
    ],
    liveUrl: 'https://demo-ecommerce.example.com',
    client: 'TechStore Inc.',
    duration: '4 months',
    year: 2024,
    status: 'completed',
    testimonial: {
      text: 'The team delivered an exceptional e-commerce platform that exceeded our expectations. Sales increased by 300% in the first quarter.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStore Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'saas-dashboard',
    title: 'Analytics SaaS Dashboard',
    description: 'A comprehensive analytics dashboard for SaaS companies with real-time data visualization and team collaboration features.',
    longDescription: 'This powerful SaaS dashboard provides companies with deep insights into their business metrics. Features include real-time data visualization, customizable widgets, team collaboration tools, and advanced reporting capabilities. The platform scales to handle millions of data points while maintaining fast performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop'
    ],
    category: 'saas',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'Redis'],
    features: [
      'Real-time data visualization',
      'Customizable dashboards',
      'Team collaboration tools',
      'Advanced reporting',
      'API integrations',
      'Role-based permissions'
    ],
    liveUrl: 'https://analytics-saas.example.com',
    githubUrl: 'https://github.com/example/analytics-dashboard',
    client: 'DataFlow Solutions',
    duration: '6 months',
    year: 2024,
    status: 'ongoing',
    testimonial: {
      text: 'The dashboard transformed how we analyze our business data. The real-time insights have been game-changing for our decision making.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Creative Portfolio Website',
    description: 'A stunning portfolio website for a creative agency with smooth animations, case studies, and an integrated CMS.',
    longDescription: 'This creative portfolio showcases the agency\'s work through beautiful animations and interactive elements. Built with performance in mind, it features smooth page transitions, optimized images, and an integrated content management system for easy updates.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545670723-196ed0954986?w=1200&h=800&fit=crop'
    ],
    category: 'portfolio',
    technologies: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    features: [
      'Smooth page animations',
      'Interactive case studies',
      'Content management system',
      'SEO optimized',
      'Mobile-first design',
      'Fast loading times'
    ],
    liveUrl: 'https://creative-agency.example.com',
    client: 'Creative Minds Agency',
    duration: '2 months',
    year: 2024,
    status: 'completed'
  },
  {
    id: 'fintech-app',
    title: 'FinTech Mobile App',
    description: 'A secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
    longDescription: 'This cutting-edge FinTech application provides users with a complete mobile banking experience. Security is paramount with biometric authentication, end-to-end encryption, and fraud detection. Users can manage accounts, make transfers, track investments, and receive real-time notifications.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    features: [
      'Biometric authentication',
      'Real-time transactions',
      'Investment tracking',
      'Push notifications',
      'Fraud detection',
      'Multi-currency support'
    ],
    client: 'SecureBank Ltd.',
    duration: '8 months',
    year: 2023,
    status: 'maintenance',
    testimonial: {
      text: 'The app has revolutionized our customer experience. User engagement increased by 250% and transaction volume doubled.',
      author: 'Emma Rodriguez',
      role: 'Product Manager',
      company: 'SecureBank Ltd.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Management Platform',
    description: 'A comprehensive healthcare platform connecting patients, doctors, and administrators with telemedicine capabilities.',
    longDescription: 'This healthcare platform streamlines medical practice management while providing patients with easy access to care. Features include appointment scheduling, telemedicine consultations, electronic health records, prescription management, and billing integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=800&fit=crop'
    ],
    category: 'webapp',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL', 'Socket.io', 'Docker'],
    features: [
      'Telemedicine consultations',
      'Appointment scheduling',
      'Electronic health records',
      'Prescription management',
      'Billing integration',
      'HIPAA compliance'
    ],
    client: 'MedCare Solutions',
    duration: '10 months',
    year: 2023,
    status: 'completed'
  },
  {
    id: 'learning-platform',
    title: 'Online Learning Platform',
    description: 'An interactive e-learning platform with video courses, quizzes, progress tracking, and certification system.',
    longDescription: 'This comprehensive learning management system enables educators to create and deliver engaging online courses. Students can access video content, take interactive quizzes, track their progress, and earn certificates upon completion.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop'
    ],
    category: 'webapp',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mux', 'Stripe'],
    features: [
      'Video course delivery',
      'Interactive quizzes',
      'Progress tracking',
      'Certification system',
      'Discussion forums',
      'Mobile responsive'
    ],
    liveUrl: 'https://learn-platform.example.com',
    client: 'EduTech Academy',
    duration: '5 months',
    year: 2024,
    status: 'completed'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category?: string): Project[] {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
}

export function getProjectsByTechnology(tech?: string): Project[] {
  if (!tech) return projects;
  return projects.filter(project => 
    project.technologies.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
}

export function getFilteredProjects(category?: string, tech?: string): Project[] {
  let filtered = projects;
  
  if (category) {
    filtered = filtered.filter(project => project.category === category);
  }
  
  if (tech) {
    filtered = filtered.filter(project => 
      project.technologies.some(technology => 
        technology.toLowerCase().includes(tech.toLowerCase())
      )
    );
  }
  
  return filtered;
}

export function getAllTechnologies(): string[] {
  const allTechs = projects.flatMap(project => project.technologies);
  return Array.from(new Set(allTechs)).sort();
}

export function getAllCategories(): Array<{ key: string; label: string }> {
  return [
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'saas', label: 'SaaS' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'webapp', label: 'Web App' },
    { key: 'mobile', label: 'Mobile' }
  ];
}