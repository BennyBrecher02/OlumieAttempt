# Cloudflare Images workflow

This project is set up to use **Cloudflare Images delivery URLs** for all major site imagery (logo, OG, page banners, section images).
To keep the git repo clean, we use a local staging folder for uploads and keep only favicons in `public/`.

## What stays local (committed)

- `public/favicon.svg`
- `public/favicon.ico`

Favicons should **not** be served from Cloudflare Images.

## Upload staging (not committed)

Use the `cloudflare/` folder as a drag-and-drop staging area for Cloudflare Images uploads.
This folder is gitignored.

## Recommended Cloudflare variants

Create variants that match the site’s roles (names are up to you; these are suggested):

- **hero21x9**: 2400×1029
- **hero16x9**: 2400×1350
- **section4x3**: 1600×1200
- **og1200x630**: 1200×630
- **tile1x1**: 1200×1200 (or 1024×1024)

## Where URLs live in this repo

### A) Central mapping (recommended)

Update `src/images.ts` with Cloudflare delivery URLs (preferred).

### B) Content frontmatter

Some images are content-driven and live in `src/content/**` frontmatter:

Examples:
- Updates posts: `heroImage`
- Team profiles: `headshot`
- Portfolio entries: `logo`

## Optional: env-driven helper

If you prefer not to paste full delivery URLs everywhere, you can store `imageId` values and use `src/lib/cfImages.ts`.
That requires a small schema change (switch `heroImage/headshot/logo` from URL strings to IDs), so the default approach is to keep full URLs.

## QA checklist

- Verify banners render correctly on mobile + desktop.
- Verify `/updates/[slug]` hero images load and crop properly.
- Confirm OpenGraph images are reachable (use 1200×630).
- Run `npm run build` and deploy preview on Vercel before attaching the domain.

