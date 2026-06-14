# Zabir Khan — Photographer Portfolio

A premium, dark-mode, editorial photographer portfolio built with Next.js 14
(App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Home page — assembles all sections
│   └── globals.css      # Tailwind layers + custom utilities
├── components/
│   ├── Navbar.tsx        # Sticky nav, mobile menu, scroll-spy
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── Portfolio.tsx  # Filterable masonry gallery + lightbox
│   │   ├── Lightbox.tsx
│   │   ├── Services.tsx
│   │   ├── Achievements.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx    # Form with client-side validation
│   └── ui/
│       ├── PhotoScene.tsx  # Inline SVG photo placeholders
│       ├── RevealSection.tsx
│       └── icons.ts
├── data/                  # Content — edit these to update copy
│   ├── site.ts
│   ├── about.ts
│   ├── portfolio.ts
│   └── content.ts
└── lib/
    ├── tokens.ts          # Design tokens (keep in sync with tailwind.config.js)
    └── useActiveSection.ts
```

## SEO & Metadata

The following are generated automatically via Next.js metadata file
conventions — no manual `<head>` tags needed:

- `src/app/favicon.ico` + `src/app/apple-icon.png` — browser/iOS icons
- `public/icon-192.png`, `public/icon-512.png` — referenced by `manifest.ts` (PWA icons)
- `src/app/opengraph-image.tsx` / `twitter-image.tsx` — dynamically rendered share-preview images (1200×630)
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- `src/app/manifest.ts` → `/manifest.webmanifest`
- `src/components/StructuredData.tsx` — JSON-LD (`ProfessionalService` + `Person`) injected in the root layout

**Before deploying**, update `SITE.url` in `src/data/site.ts` — it feeds
`metadataBase`, Open Graph URLs, the sitemap, and JSON-LD `sameAs`/`url`
fields.

## Photography

All portfolio images, the achievements visual, and the lightbox now load
real photos from **Unsplash** (`images.unsplash.com`) via `next/image` —
free for commercial use, no attribution required
([Unsplash License](https://unsplash.com/license)). `next.config.js` allow-lists
`images.unsplash.com` under `images.remotePatterns`.

Each portfolio item in `src/data/portfolio.ts` has an `image` URL. If an
image ever fails to load, `PortfolioPhoto` automatically falls back to the
original inline-SVG `PhotoScene` for that item — so the layout never breaks
even without network access.

### Replacing with Zabir's own photography

1. Host the real images (e.g. in `public/images/`, or a remote host such as
   Cloudinary/S3 — add that hostname to `next.config.js` if remote).
2. In `src/data/portfolio.ts`, change each item's `image` field to the new
   path/URL (e.g. `"/images/portrait-01.jpg"`).
3. Do the same for the Achievements visual in
   `src/components/sections/Achievements.tsx`.

No other code changes are needed — `PortfolioPhoto` and `next/image` handle
the rest.

## Editing Content

All copy lives in `src/data/`:

- `site.ts` — name, tagline, contact info, nav links, social links
- `about.ts` — bio facts, skills, career timeline
- `portfolio.ts` — gallery items and categories
- `content.ts` — services, stats, achievements, testimonials

## Contact Form

The form validates required fields and email format client-side. It does
**not** currently send anywhere — wire it up to a real backend (Resend,
EmailJS, or a custom `app/api/contact/route.ts`) before going live. See
`.env.example` for suggested environment variables.

## Scripts

| Command                | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run dev`           | Start development server             |
| `npm run build`          | Production build                     |
| `npm run start`          | Run production build                 |
| `npm run lint`           | Run ESLint                           |
| `npm run format`         | Format with Prettier                 |
| `npm run format:check`   | Check formatting without writing     |

## Accessibility

- All interactive elements have `aria-label`s or visible text labels
- Filter buttons use `aria-pressed`; nav links use `aria-current`
- Lightbox is a labeled dialog, closable via Escape key or click-outside
- Respects `prefers-reduced-motion` (disables grain animation and shortens
  transitions)

## Deployment

This project is ready to deploy on Vercel:

```bash
npm run build
```

Push to a Git repository and import it into Vercel, or run `vercel` via the
CLI. Update `SITE.url` in `src/data/site.ts` with the real production domain
before deploying — it's used for Open Graph / Twitter card metadata.
