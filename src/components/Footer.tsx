export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Stackfied Dev. Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
