import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostSlugs(locale: string): string[] {
  const localeDir = path.join(postsDirectory, locale);
  
  if (!fs.existsSync(localeDir)) {
    return [];
  }
  
  return fs.readdirSync(localeDir).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string, locale: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, locale, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      image: data.image || '',
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(locale: string): BlogPostMeta[] {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .map(({ content, ...meta }) => meta) // Remove content for list view
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getPostsByTag(tag: string, locale: string): BlogPostMeta[] {
  const allPosts = getAllPosts(locale);
  return allPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getAllTags(locale: string): string[] {
  const allPosts = getAllPosts(locale);
  const tags = allPosts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}