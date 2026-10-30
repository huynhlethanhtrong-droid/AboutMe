# Huỳnh Lê Thanh Trọng — Personal Portfolio

A minimalist editorial portfolio for Huỳnh Lê Thanh Trọng, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Responsive editorial homepage
- Vietnamese and English localization with preserved language preference
- Selected work detail pages
- Journal detail pages
- Photography gallery with lightbox and keyboard navigation
- Mobile navigation and accessible interactions
- SEO metadata and Open Graph defaults
- Content stored in editable TypeScript data modules

## Project structure

- `app/` — App Router pages and global styling
- `components/` — navigation, reveal, lightbox, and shared UI blocks
- `src/data/site.ts` — Personal info, project data, journal entries, photography items, and translations

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Customization

Update the sample content in `src/data/site.ts`:

- Personal information and location
- Hero copy and intro text
- Project titles, descriptions, and images
- Photography gallery entries
- Journal entries and metadata
- Social links and email address

Replace the placeholder images in the data file with your own image URLs or local assets inside `public/`.

## Notes

- The current email, Instagram, LinkedIn, and GitHub links are placeholder values and can be replaced with real information.
- The site is intentionally designed as a quiet editorial portfolio rather than a generic template.
