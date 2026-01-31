import Link from 'next/link';
import { PostData } from '@/lib/posts';

interface PostCardProps {
  post: PostData;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 dark:bg-gray-800">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        {post.author && <span className="mr-4">By {post.author}</span>}
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
