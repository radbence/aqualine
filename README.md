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
  fonts/                    # Self-hosted Rubik + Arimo (OFL / Apache 2.0)
  _redirects                # Cloudflare Pages redirect map
  robots.txt
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
2. Commit and push → Cloudflare Pages deploys automatically.
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

The "Kérjen árajánlatot!" form POSTs to Web3Forms. The access key is in `.env` as `PUBLIC_WEB3FORMS_KEY`. Submissions arrive at `info@aqualinebau.hu`. No backend server needed.

## Deployment

**Cloudflare Pages**: connect the repo, set build command `npm run build`, output directory `dist`. The `_redirects` file in `public/` is picked up automatically.

## Font licenses

- **Rubik** — SIL Open Font License 1.1
- **Arimo** — Apache License 2.0

Both are self-hosted in `public/fonts/` — no Google CDN connections.

## TODOs

- [ ] Bence: verify phone number `+36 (20) 5555-878`
- [ ] Bence: verify "250 sikeres projekt" stats figure
- [ ] Bence: add `cégjegyzékszám` and `adószám` to footer + impressum
- [ ] Bence: download reference project photos from old WordPress server into `public/images/`
- [ ] Bence: fill in `kategoria`, `datum`, `helyszin`, `borito` fields in each `content/referenciak/*.md`
- [ ] Bence: write real project descriptions (body) in `.md` files to enable detail pages
- [ ] Bence: add custom favicon (current: auto-generated from SVG logo)
- [ ] Bence: decide on Google Maps embed for `/kapcsolat` (privacy-friendly, consent-managed)
