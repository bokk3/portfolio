import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/blog';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogPostNavigation } from '@/components/blog/BlogPostNavigation';
import { Container } from '@/components/ui/Container';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'nl'];
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      paths.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const allPosts = getAllPosts(locale);
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <article>
        <BlogPostHeader post={post} />
        
        <Container className="py-12">
          <div className="max-w-4xl mx-auto">
            <BlogPostContent 
              content={contentHtml}
              post={post}
            />
            
            <BlogPostNavigation 
              prevPost={prevPost}
              nextPost={nextPost}
              locale={locale}
            />
          </div>
        </Container>
      </article>
    </main>
  );
}