'use client';

import { BlogPost } from '@/lib/blog';

interface BlogPostContentProps {
  content: string;
  post: BlogPost;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <style jsx global>{`
        .prose {
          color: rgb(55 65 81);
        }
        .dark .prose {
          color: rgb(209 213 219);
        }
        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4,
        .prose h5,
        .prose h6 {
          color: rgb(17 24 39);
        }
        .dark .prose h1,
        .dark .prose h2,
        .dark .prose h3,
        .dark .prose h4,
        .dark .prose h5,
        .dark .prose h6 {
          color: rgb(243 244 246);
        }
        .prose a {
          color: rgb(37 99 235);
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
        .dark .prose a {
          color: rgb(96 165 250);
        }
        .prose code {
          background-color: rgb(243 244 246);
          color: rgb(17 24 39);
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        .dark .prose code {
          background-color: rgb(55 65 81);
          color: rgb(243 244 246);
        }
        .prose pre {
          background-color: rgb(17 24 39);
          color: rgb(243 244 246);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        .dark .prose pre {
          background-color: rgb(31 41 55);
        }
        .prose pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }
        .prose blockquote {
          border-left: 4px solid rgb(37 99 235);
          background-color: rgb(248 250 252);
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 0.25rem;
        }
        .dark .prose blockquote {
          border-left-color: rgb(96 165 250);
          background-color: rgb(55 65 81);
        }
        .prose img {
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .prose table {
          border-collapse: collapse;
          width: 100%;
        }
        .prose th,
        .prose td {
          border: 1px solid rgb(209 213 219);
          padding: 0.75rem;
          text-align: left;
        }
        .dark .prose th,
        .dark .prose td {
          border-color: rgb(75 85 99);
        }
        .prose th {
          background-color: rgb(249 250 251);
          font-weight: 600;
        }
        .dark .prose th {
          background-color: rgb(55 65 81);
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}