## Cloudflare Images workflow (Olumie Capital site)

This repo is **Cloudflare-first** for imagery:

- **All marketing images** should be served from Cloudflare Images and referenced as delivery URLs.
- **Favicons** are the exception and remain local in `public/` (`favicon.svg`, `favicon.ico`).
- The `cloudflare/` folder is **gitignored** and exists only as a local staging area for upload sources.

### Where image URLs live

- **Central mapping**: `src/images.ts`
  - Used by pages/components via `IMAGES.*`
- **Content frontmatter**: `src/content/**`
  - Example: updates posts can set `heroImage` to a Cloudflare delivery URL

### Recommended process

1. **Put source images in** `cloudflare/` locally (any structure you want).
2. Upload to Cloudflare Images.
3. Copy the **delivery URL** (format: `https://imagedelivery.net/<account_hash>/<image_id>/<variant>`).
4. Update the repo to use that URL:
   - Update `src/images.ts` for shared images (heroes, section images, tiles)
   - Update `src/content/**` frontmatter for per-post images (e.g. Updates hero images)
5. Confirm the site builds:

```bash
npm run build
```

### Keeping the repo clean

- Avoid adding `.jpg` / `.png` assets under `public/` for page content.
- If you temporarily copy an image into `public/` to test layout, delete it after swapping to Cloudflare.

### QA checklist

- `src/images.ts` contains **Cloudflare URLs** (not `/assets/...` or `/images/...` paths).
- No content frontmatter uses local paths like `heroImage: "/images/..."`.
- `public/` contains only favicons (and other truly-static non-image files, if any).

