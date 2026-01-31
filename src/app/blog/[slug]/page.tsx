import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Link from 'next/link';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  return {
    title: `${post.title} | Stackfied Dev`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-8">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          ← Back to Home
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            {post.author && <span className="mr-4">By {post.author}</span>}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:text-blue-600 dark:prose-code:text-blue-400
              prose-pre:bg-gray-800 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>
      </article>
    </div>
  );
}
