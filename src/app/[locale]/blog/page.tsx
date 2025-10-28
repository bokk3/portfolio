import { getAllPosts, getAllTags } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { TagFilter } from '@/components/blog/TagFilter';
import { Container } from '@/components/ui/Container';
import { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tag?: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Blog - Latest Web Development Insights',
    fr: 'Blog - Dernières Actualités du Développement Web',
    nl: 'Blog - Laatste Webontwikkeling Inzichten'
  };

  const descriptions = {
    en: 'Stay updated with the latest trends, tutorials, and insights in web development, React, Next.js, and modern frontend technologies.',
    fr: 'Restez à jour avec les dernières tendances, tutoriels et insights en développement web, React, Next.js et technologies frontend modernes.',
    nl: 'Blijf op de hoogte van de laatste trends, tutorials en inzichten in webontwikkeling, React, Next.js en moderne frontend technologieën.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { tag } = await searchParams;
  
  const allPosts = getAllPosts(locale);
  const allTags = getAllTags(locale);
  
  const filteredPosts = tag 
    ? allPosts.filter(post => 
        post.tags.some(postTag => 
          postTag.toLowerCase() === tag.toLowerCase()
        )
      )
    : allPosts;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <Container className="py-12">
        {/* Tags Filter */}
        <TagFilter 
          tags={allTags} 
          selectedTag={tag} 
          locale={locale}
        />

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.slug} 
                post={post} 
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {locale === 'fr' ? 'Aucun article trouvé.' : 
               locale === 'nl' ? 'Geen artikelen gevonden.' : 
               'No posts found.'}
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}