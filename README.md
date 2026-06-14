# Zabir Khan — Photographer Portfolio

A premium, editorial photographer portfolio built with Next.js 14
(App Router), TypeScript, Tailwind CSS, and Framer Motion. The site uses
alternating dark and cream/light sections, in the style of the original
design reference.

Live: https://zabir-khan.vercel.app/

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages / Routes

| Route | Description |
| --- | --- |
| `/` | Home — hero + preview sections for About, Portfolio, Experience, Testimonials, Contact |
| `/about` | Full bio, skills, career timeline, and services offered |
| `/portfolio` | Full filterable masonry gallery with lightbox |
| `/experience` | Stats band + achievements/recognition |
| `/blog` | Blog listing (featured post + grid) |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Full contact form + contact details |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD, Speed Insights
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind layers + custom utilities
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   ├── experience/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts # Contact form submission endpoint
├── components/
│   ├── Navbar.tsx            # Fixed dark nav bar, numbered links (01. Home, 02. About, ...)
│   ├── Footer.tsx             # variant="dark" | "light"
│   ├── StructuredData.tsx
│   ├── sections/
│   │   ├── Hero.tsx                # Home hero (split layout, photographer image)
│   │   ├── AboutPreview.tsx        # Home "02. About Me" cream band
│   │   ├── AboutFull.tsx           # /about - bio, skills, timeline (cream)
│   │   ├── PortfolioPreview.tsx    # Home "03. Portfolio Highlights" (dark)
│   │   ├── Portfolio.tsx           # /portfolio - full filterable gallery + lightbox (dark)
│   │   ├── Lightbox.tsx
│   │   ├── ExperiencePreview.tsx   # Home "04. Experience & Achievements" (cream)
│   │   ├── StatsFull.tsx           # /experience - stats band (dark)
│   │   ├── AchievementsFull.tsx    # /experience - recognition + image (dark)
│   │   ├── Services.tsx            # /about - "What I Offer" services grid (dark)
│   │   ├── Testimonials.tsx        # Home "05. Testimonial" carousel (dark)
│   │   ├── ContactCTA.tsx          # Home "06. Let's Connect" (cream)
│   │   └── ContactFull.tsx         # /contact - form + details (cream)
│   └── ui/
│       ├── PhotoScene.tsx     # Inline SVG photo fallback (no network dependency)
│       ├── PortfolioPhoto.tsx # next/image wrapper with PhotoScene fallback
│       ├── RevealSection.tsx  # Framer Motion scroll-reveal wrapper
│       └── icons.ts
├── data/                      # Content - edit these to update copy
│   ├── site.ts                 # identity, nav links, social links
│   ├── about.ts                 # bio facts, skills, career timeline
│   ├── portfolio.ts             # gallery items + image URLs
│   ├── blog.ts                  # blog posts
│   └── content.ts                # services, stats, achievements, testimonials
└── lib/
    ├── tokens.ts               # Design tokens (keep in sync with tailwind.config.js)
    └── formatDate.ts
```

## Design Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `ink` | `#0A0A0A` | Dark section background |
| `ink-alt` | `#111111` | Secondary dark background |
| `ink-border` | `#2A2A2A` | Borders on dark sections |
| `cream` | `#F0EDE8` | Light section background |
| `cream-alt` | `#E8E3DA` | Secondary light background |
| `cream-border` | `#DDD9D2` | Borders on light sections |
| `gold` | `#C9A96E` | Accent color (both themes) |
| `warm` | `#F0EDE8` | Text on dark sections |
| `muted` | `#888888` | Secondary text on dark sections |

Light sections use `text-ink` with opacity modifiers (`text-ink/60`,
`text-ink/40`) for secondary text instead of a separate muted token.

## SEO & Metadata

Generated automatically via Next.js metadata file conventions:

- `src/app/favicon.ico` + `apple-icon.png` - browser/iOS icons
- `public/icon-192.png`, `icon-512.png` - PWA icons (referenced by `manifest.ts`)
- `src/app/opengraph-image.tsx` / `twitter-image.tsx` - dynamic 1200x630 share images
- `src/app/sitemap.ts` -> `/sitemap.xml` (includes all pages + blog posts)
- `src/app/robots.ts` -> `/robots.txt`
- `src/app/manifest.ts` -> `/manifest.webmanifest`
- `src/components/StructuredData.tsx` - JSON-LD (`ProfessionalService` + `Person`)

Each page (`/about`, `/portfolio`, etc.) exports its own `metadata` for a
unique title/description. Blog posts use `generateMetadata` + `generateStaticParams`.

**Before deploying to a new domain**, update `SITE.url` in `src/data/site.ts`
- it feeds `metadataBase`, Open Graph URLs, the sitemap, and JSON-LD.

## Photography

All images load from **Unsplash** (`images.unsplash.com`) via `next/image` -
free for commercial use, no attribution required
([Unsplash License](https://unsplash.com/license)). `next.config.js`
allow-lists `images.unsplash.com`.

`PortfolioPhoto` wraps `next/image`; if a URL ever fails to load, it falls
back to the inline-SVG `PhotoScene` for that item - so the layout never
breaks even without network access.

### Replacing with Zabir's own photography

1. Host the real images (e.g. `public/images/`, or a remote host - add that
   hostname to `next.config.js` if remote).
2. Update the `image` field for each item in `src/data/portfolio.ts` and
   `src/data/blog.ts`.
3. Update the hardcoded image URLs in `Hero.tsx`, `AboutPreview.tsx`, and
   `AchievementsFull.tsx`.

No other code changes are needed.

## Editing Content

All copy lives in `src/data/`:

- `site.ts` - name, tagline, contact info, nav links, social links
- `about.ts` - bio facts, skills, career timeline
- `portfolio.ts` - gallery items, categories, image URLs
- `blog.ts` - blog posts (title, excerpt, date, content paragraphs)
- `content.ts` - services, stats, achievements, testimonials

## Contact Form

The form (`/contact`) validates required fields and email format
client-side, then POSTs to `/api/contact`. That route validates again
server-side and returns `{ ok: true }` - but does **not** send an email yet.
Wire it up to a real provider (Resend, Postmark, SendGrid) before relying on
it. See `.env.example` for suggested environment variables.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting without writing |

## Accessibility

- All interactive elements have `aria-label`s or visible text labels
- Filter buttons use `aria-pressed`; nav links use `aria-current`
- Lightbox is a labeled dialog, closable via Escape key or click-outside
- Respects `prefers-reduced-motion` (disables grain animation and shortens
  transitions)

## Deployment

This project is live on Vercel and auto-deploys on push to `main`:

```bash
npm run build
```

If deploying to a new project/domain, update `SITE.url` in
`src/data/site.ts` first - it's used for Open Graph / Twitter card metadata,
the sitemap, and JSON-LD.

## Speed Insights

`@vercel/speed-insights` is wired up in `src/app/layout.tsx`. Enable it in
the Vercel dashboard under the project's **Speed Insights** tab to start
collecting real-user Core Web Vitals.
