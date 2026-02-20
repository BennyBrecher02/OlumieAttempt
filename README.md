# Olumie Capital — Website

Custom marketing website built with [Astro](https://astro.build) for performance, SEO, and a clean, professional presentation.

## Local developments

```bash
npm install
npm run dev
```

Build + preview:

```bash
npm run build
npm run preview
```

## Content editing (no CMS needed)

All primary content is driven by Markdown in `src/content/`:

- **Updates / Blog posts**: `src/content/updates/*.md`
- **Team profiles**: `src/content/team/*.md`
- **Portfolio entries**: `src/content/portfolio/*.md`

## Environment variables

Copy `.env.example` to `.env` and fill in values:

- **PUBLIC_SITE_URL**: Used for canonical URLs + sitemap generation (e.g. `https://olumiecapital.com`)
- **PUBLIC_FORMSPREE_ENDPOINT**: Formspree endpoint URL (e.g. `https://formspree.io/f/xxxxxxx`)
- **PUBLIC_CF_IMAGES_ACCOUNT_HASH** (optional): Cloudflare Images account hash for URL helpers

## Contact form (Formspree)

The contact page posts to Formspree using `PUBLIC_FORMSPREE_ENDPOINT`.
After submission, it redirects to `/contact?sent=1` to show a success message.

## Images (Cloudflare Images)

This site is configured to use **Cloudflare Images delivery URLs** for major imagery.

- **Central mapping**: `src/images.ts`
- **Content-driven images**: `src/content/**` frontmatter (e.g., `heroImage`)
- **Favicons** remain local under `public/` (`favicon.svg`, `favicon.ico`).

- **Do not commit local content images** under `public/` (they should live in Cloudflare and be referenced by URL).
- `cloudflare/` is a local (gitignored) staging folder for drag-and-drop uploads/sources.

See `docs/cloudflare-images.md`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Import Project** → select the repo.
3. Framework preset: **Astro** (auto-detected)
4. Add env vars from your `.env` in Vercel Project Settings.
5. Deploy.
6. Add the domain `olumiecapital.com` in Vercel (Project → Settings → Domains).

## DNS (GoDaddy typical setup)

Vercel will show the exact DNS records to add. Commonly:

- **Apex/root (`@`)**: A record → Vercel-provided IP
- **`www`**: CNAME → Vercel-provided target

After DNS propagates, Vercel will automatically provision **SSL**.

