# Stackfied Dev

A modern blogging platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 16 App Router
- 📝 Markdown-based blog posts
- 🎨 Styled with Tailwind CSS
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🔍 SEO optimized with proper metadata
- 💪 Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yogesh1302/stckifieddev.git
cd stckifieddev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
stckifieddev/
├── posts/                  # Markdown blog posts
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── blog/          # Blog routes
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   └── lib/               # Utility functions
│       └── posts.ts       # Blog post utilities
├── package.json
└── tsconfig.json
```

## Adding Blog Posts

Create a new Markdown file in the `posts` directory with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-01-31"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here using Markdown syntax...
```

The blog post will automatically appear on the homepage and be accessible at `/blog/your-file-name`.

## Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Linting

To check for code issues:

```bash
npm run lint
```

## Technologies Used

- **Next.js 16** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **gray-matter** - Parse frontmatter from Markdown
- **remark** - Markdown processor
- **React 19** - UI library

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
