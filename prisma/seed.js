const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        slug: 'coding',
        title: 'Coding',
        img: '/coding.png',
      },
    }),
    prisma.category.create({
      data: {
        slug: 'style',
        title: 'Style',
        img: '/style.png',
      },
    }),
    prisma.category.create({
      data: {
        slug: 'fashion',
        title: 'Fashion',
        img: '/fashion.png',
      },
    }),
    prisma.category.create({
      data: {
        slug: 'food',
        title: 'Food',
        img: '/food.png',
      },
    }),
    prisma.category.create({
      data: {
        slug: 'travel',
        title: 'Travel',
        img: '/travel.png',
      },
    }),
    prisma.category.create({
      data: {
        slug: 'culture',
        title: 'Culture',
        img: '/culture.png',
      },
    }),
  ]);

  console.log('Categories created:', categories.length);

  // Create a dummy user (you'll need this for posts)
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      image: '/p1.jpeg',
    },
  });

  console.log('User created:', user.email);

  // Create Posts
  const posts = await Promise.all([
    prisma.post.create({
      data: {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js 13',
        desc: 'Learn how to build modern web applications with Next.js 13. This comprehensive guide covers everything from setup to deployment, including the new App Router, Server Components, and more. Perfect for beginners and experienced developers alike.',
        img: '/p1.jpeg',
        catSlug: 'coding',
        userEmail: user.email,
        views: 124,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'react-hooks-explained',
        title: 'React Hooks: A Complete Guide',
        desc: 'Master React Hooks with this in-depth tutorial. We cover useState, useEffect, useContext, and custom hooks. Learn best practices and common pitfalls to avoid. Includes practical examples and real-world use cases.',
        img: '/p1.jpeg',
        catSlug: 'coding',
        userEmail: user.email,
        views: 89,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'minimalist-fashion-trends-2026',
        title: 'Minimalist Fashion Trends for 2026',
        desc: 'Discover the latest minimalist fashion trends taking over 2026. From sustainable fabrics to timeless designs, learn how to build a versatile wardrobe that never goes out of style. Tips on mixing and matching pieces for any occasion.',
        img: '/fashion.png',
        catSlug: 'fashion',
        userEmail: user.email,
        views: 156,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'italian-pasta-recipes',
        title: 'Authentic Italian Pasta Recipes',
        desc: 'Bring the taste of Italy to your kitchen with these authentic pasta recipes. Learn to make traditional dishes like Carbonara, Amatriciana, and Cacio e Pepe from scratch. Includes tips on choosing the right pasta shapes and cooking techniques.',
        img: '/food.png',
        catSlug: 'food',
        userEmail: user.email,
        views: 203,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'exploring-japan-travel-guide',
        title: 'Exploring Japan: A Complete Travel Guide',
        desc: 'Plan your dream trip to Japan with this comprehensive travel guide. From Tokyo\'s bustling streets to Kyoto\'s ancient temples, discover the best places to visit, eat, and experience Japanese culture. Includes budget tips and itinerary suggestions.',
        img: '/travel.png',
        catSlug: 'travel',
        userEmail: user.email,
        views: 178,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'understanding-modern-art',
        title: 'Understanding Modern Art Movements',
        desc: 'Dive into the world of modern art and explore the major movements that shaped contemporary culture. From Abstract Expressionism to Pop Art, learn about the artists, techniques, and ideas that revolutionized the art world.',
        img: '/culture.png',
        catSlug: 'culture',
        userEmail: user.email,
        views: 95,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'typescript-best-practices',
        title: 'TypeScript Best Practices for 2026',
        desc: 'Level up your TypeScript skills with these modern best practices. Learn about advanced types, generics, utility types, and how to write type-safe code. Includes examples from real-world projects and common patterns.',
        img: '/coding.png',
        catSlug: 'coding',
        userEmail: user.email,
        views: 142,
      },
    }),
    prisma.post.create({
      data: {
        slug: 'sustainable-fashion-guide',
        title: 'The Ultimate Guide to Sustainable Fashion',
        desc: 'Make ethical fashion choices with this comprehensive guide to sustainable style. Learn about eco-friendly brands, how to shop secondhand, and tips for extending the life of your clothes. Fashion can be both stylish and sustainable.',
        img: '/style.png',
        catSlug: 'style',
        userEmail: user.email,
        views: 167,
      },
    }),
  ]);

  console.log('Posts created:', posts.length);
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
