# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Beaver Pest Control — single-page marketing website for a local pest control company. Static Next.js 15 export deployed to GitHub Pages via GitHub Actions.

**Live URL:** https://4bkm6xsb8f-byte.github.io/beaver-pest-control/

## Stack

- Next.js 15 (App Router, `output: "export"` for static GitHub Pages hosting)
- Tailwind CSS v3 with custom color tokens (see `tailwind.config.ts`)
- TypeScript
- Google Fonts via `next/font/google`: Lora (display) + Inter (body)

## Commands

```bash
npm run dev     # dev server at localhost:3000
npm run build   # static export to ./out (requires NEXT_PUBLIC_BASE_PATH=/beaver-pest-control for local prod test)
npm run lint    # ESLint
```

## Architecture

Single page: `app/page.tsx` composes all sections in order. Each section is its own component in `components/`.

Page sections (top to bottom):
- `Navbar` — sticky, transparent-to-frosted on scroll; mobile drawer; `"use client"`
- `Hero` — dark full-bleed, signature ghost "GONE." background text, two CTAs
- `TrustBar` — 4 stat chips
- `Services` — 6-card grid (ants, termites, rodents, bed bugs, mosquitoes, wasps)
- `HowItWorks` — dark section, 3 numbered steps
- `WhyUs` — copy + 2×2 reasons grid
- `ContactCTA` — green section, contact info + request-inspection form; `"use client"` (has onSubmit)
- `Footer` — dark, links + hours

## GitHub Pages / static export notes

- `next.config.ts` sets `output: "export"` and reads `NEXT_PUBLIC_BASE_PATH` env var for `basePath`.
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) passes `NEXT_PUBLIC_BASE_PATH=/beaver-pest-control` at build time.
- Next.js automatically prepends `basePath` to all `Link` hrefs and `router` calls — no manual prefix needed in components.
- Images must use `next/image` (unoptimized mode) or plain `<img>` — no server-side image optimization.
- `public/.nojekyll` prevents GitHub Pages from processing the output with Jekyll.
- Any Server Component with event handlers must be marked `"use client"`.

## Custom Tailwind tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `deep` | `#0C2512` | Hero / footer backgrounds |
| `forest` | `#1B5E20` | Contact section background |
| `canopy` | `#2E7D32` | Links, secondary actions |
| `honeycomb` | `#E09000` | Primary CTA, accents |
| `linen` | `#F8F6F1` | Page background |
| `stone` | `#1C1917` | Body text |
| `mist` | `#786E65` | Secondary / muted text |
