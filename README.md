# Aqua-Line Bau Kft. — Static Astro Website

Company brochure site for Aqua-Line Bau Kft., a Hungarian civil-engineering firm specializing in large-volume deep construction and water management.

## Stack

- **Astro v6** (static, prerendered)
- **TypeScript** (strict)
- **Plain CSS** with design tokens
- **Web3Forms** for contact forms (no backend)

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the built site
```

## Project structure

```
src/
  layouts/Base.astro        # HTML shell: head, header, footer
  components/               # Reusable .astro components
  content/referenciak/      # One .md file per reference project
  pages/
    index.astro             # Homepage
    rolunk.astro            # About us
    referenciak/
      index.astro           # Reference listing (grouped by kategoria)
      [...slug].astro       # Reference detail (only for entries with body)
    kapcsolat.astro         # Contact page
    404.astro               # Hungarian 404
  styles/global.css         # Design tokens + base styles
  content.config.ts         # Content Layer API collection definitions
public/
  images/                   # Logo, photos, favicon
  _redirects                # Cloudflare Pages redirect map
  robots.txt
src/assets/
  fonts/                    # Self-hosted Rubik + Arimo (OFL / Apache 2.0)
```

## Adding a new reference project

1. Create a `.md` file in `src/content/referenciak/`:
   ```md
   ---
   cim: "Project title"
   datum: 2025-06-15
   helyszin: "Budapest"
   borito: "/images/project-photo.jpg"
   kategoria: "Árvízvédelem"
   kiemelt: false
   ---

   Project description in Markdown.
   ```
2. Commit and push → GitHub Pages deploys automatically.
3. When `datum` is set to a real date, the listing sorts newest-first automatically.
4. Set `kiemelet: true` to feature the project on the homepage.
5. Once you add a real body (description), a detail page at `/referenciak/[slug]` is generated.

## Editing page text

- **Homepage sections**: Edit `src/pages/index.astro` directly.
- **Company info / about text**: Edit `src/pages/rolunk.astro`.
- **Contact details**: Edit `src/pages/kapcsolat.astro` and `src/components/Footer.astro`.
- **Stats numbers**: In `src/pages/index.astro` — `alapitasEve` (founding year) and `projektSzam`.
- **Service categories**: Edit the `szolgaltatasok` array in `src/pages/index.astro`.

## Form submissions

The "Kérjen árajánlatot!" form POSTs to Web3Forms. The access key is in `.env` as `PUBLIC_WEB3FORMS_KEY`. Submissions arrive at `aqualinebau@gmail.com`. No backend server needed.

## Deployment

**Cloudflare Pages**: connected directly to GitHub — auto-deploys on push to `main`.

- Build command: `npm run build`
- Output directory: `dist/`
- Framework preset: auto-detected (Astro)

**Production domain**: `aqualinebau.hu`

> **Note**: The `_redirects` file in `public/` is parsed by Cloudflare Pages for redirects and custom 404 handling. If switching to another host, redirects may need to be moved to host configuration.

## SEO

The site is built with Hungarian B2B SEO from the start:

**Technical:**
- Clean, self-referencing canonicals on every page
- Auto-generated `sitemap-index.xml` + `sitemap-0.xml` (via `@astrojs/sitemap`)
- `robots.txt` allowing all
- `<html lang="hu">`, `og:locale=hu_HU`

**Meta tags** (`src/components/SEO.astro`):
- Title format: `"Page Title — Aqua-Line Bau Kft."`
- Keyword-rich meta descriptions (120–160 chars) tuned for Hungarian B2B phrases
- Full Open Graph + Twitter Card tags with `summary_large_image`
- Social share image (1200×630px) on every page
- `noindex` on 404, `index, follow` on all real pages
- `theme-color`, `apple-touch-icon`
- `article:published_time` on reference detail pages

**Structured data (JSON-LD)** (`src/components/StructuredData.astro`):
- `Organization` schema on every page — name, logo, address, phone, email, founding date, service area
- `WebSite` schema on homepage — name, URL, language
- `BreadcrumbList` on all interior pages
- `Article` schema on reference detail pages (once content is written)

To update SEO text, edit the `description` prop on each page and the `SEO.astro` / `StructuredData.astro` components.

## Font licenses

- **Rubik** — SIL Open Font License 1.1
- **Arimo** — Apache License 2.0

Both are self-hosted in `src/assets/fonts/` — no Google CDN connections.

## TODOs

- [ ] Bence: fill in `cégjegyzékszám` and `adószám` in `src/components/Footer.astro`
- [ ] Bence: verify phone number `+36 (20) 5555-878`
- [ ] Bence: verify "250 sikeres projekt" stats figure
- [ ] Bence: download reference project photos from old WordPress server into `public/images/`
- [ ] Bence: fill in `kategoria`, `datum`, `helyszin`, `borito` fields in each `content/referenciak/*.md`
- [ ] Bence: write real project descriptions (body) in `.md` files to enable detail pages (currently 0/47 have content)
- [ ] Bence: add custom favicon (current: auto-generated from SVG logo)
- [ ] Bence: decide on Google Maps embed for `/kapcsolat` (privacy-friendly, consent-managed)
- [ ] Bence: convert `public/images/og-image.svg` to PNG for broader og:image platform support
