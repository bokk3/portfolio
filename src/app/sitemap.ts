import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truyens.pro';
  const locales = ['nl', 'en', 'fr'];
  
  // Static pages
  const staticPages = [
    '',
    '/services',
    '/projects', 
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add static pages for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : page === '/blog' ? 'daily' : 'monthly',
        priority: page === '' ? 1 : page === '/services' || page === '/projects' ? 0.8 : 0.6,
        alternates: {
          languages: {
            'nl-BE': `${baseUrl}/nl${page}`,
            'en-US': `${baseUrl}/en${page}`,
            'fr-BE': `${baseUrl}/fr${page}`,
          }
        }
      });
    });
  });

  return sitemap;
}