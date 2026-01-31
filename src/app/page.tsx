import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Stackfied Dev</h1>
          <p className="text-xl mb-8">
            A modern blogging platform built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-lg opacity-90">
            Explore our latest articles on web development, programming, and technology
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Stackfied Dev</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Stackfied Dev is a modern blogging platform designed for developers by developers. 
              Built with the latest web technologies, it provides a fast, accessible, and beautiful 
              reading experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our mission is to share knowledge, best practices, and insights about software development, 
              helping developers grow their skills and build better applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">⚡ Fast</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with Next.js for optimal performance and lightning-fast page loads
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">🎨 Modern</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean, responsive design that works beautifully on all devices
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">🔍 SEO Optimized</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Server-side rendering and proper metadata for excellent search engine visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
