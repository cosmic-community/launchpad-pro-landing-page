# LaunchPad Pro — High-Converting Landing Page

![LaunchPad Pro Landing Page](https://imgix.cosmicjs.com/a0c63a20-0401-11f1-ac33-41545c854ef6-photo-1519389950473-47ba0277781c-1770454045786.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning, high-converting SaaS product landing page powered by [Cosmic](https://www.cosmicjs.com) CMS and built with Next.js 16. Every section — hero, features, testimonials, and footer — is fully content-managed from the Cosmic dashboard.

## Features

- 🚀 **Next.js 16 App Router** — Server-side rendering for blazing-fast performance
- 📱 **Fully Responsive** — Mobile-first design with animated hamburger navigation
- 🎨 **Dark Gradient Aesthetic** — Bold navy-to-indigo gradients with glassmorphism effects
- ⭐ **Dynamic Content** — Hero, features, testimonials all driven by Cosmic CMS
- 🔄 **Smooth Scroll Navigation** — Click nav links to smoothly scroll between sections
- ✨ **Micro-Interactions** — Hover animations on cards, buttons, and navigation elements
- 🏷️ **Star Ratings** — Dynamic star rendering from Cosmic testimonial data
- 💡 **TypeScript Strict Mode** — Full type safety with comprehensive interfaces

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6986fbcae27f5e466302ac7c&clone_repository=6986fd95e27f5e466302ac99)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: Create a high-converting landing page for a <product>"

### Code Generation Prompt

> "Next.js responsive, mobile nav"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript 5](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))
- [Inter Font](https://rsms.me/inter/) — Modern sans-serif typography

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with the LaunchPad Pro content model

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd launchpad-pro-landing

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Cosmic SDK Examples

### Fetching Landing Page Settings (Singleton)

```typescript
import { cosmic } from '@/lib/cosmic'

const { object } = await cosmic.objects
  .findOne({ type: 'landing-page-settings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Features with Sorting

```typescript
const { objects } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const sorted = objects.sort(
  (a, b) => (a.metadata.display_order || 0) - (b.metadata.display_order || 0)
)
```

### Fetching Testimonials

```typescript
const { objects } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types:

| Object Type | Type | Purpose |
|---|---|---|
| **Landing Page Settings** | Singleton | Hero section, CTA, social proof, footer |
| **Features** | Multiple | Product feature cards with emoji icons |
| **Testimonials** | Multiple | Customer reviews with avatars and star ratings |

All content is fetched server-side in Next.js Server Components for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables and deploy

<!-- README_END -->