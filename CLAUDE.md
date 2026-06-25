# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Beaver Pest Defense — single-page marketing website for a local pest control company. Static Next.js 15 export deployed to GitHub Pages via GitHub Actions.

**Live URL:** https://www.beaverpestdefense.com  
**GitHub repo:** https://github.com/4bkm6xsb8f-byte/beaver-pest-defense  
**Local directory:** `~/Developer/Beaver_Pest_Defense`

## Stack

- Next.js 15 (App Router, `output: "export"` for static GitHub Pages hosting)
- Tailwind CSS v3 with custom brand tokens (see `tailwind.config.ts`)
- TypeScript
- Google Fonts via `next/font/google`: Barlow Condensed (`font-display`) + Barlow (`font-sans`)

## Commands

```bash
npm run dev     # dev server at localhost:3000
npm run build   # static export to ./out
npm run lint    # ESLint
```

## Architecture

Single page: `app/page.tsx` composes all sections in order:

**Navbar → Hero → WhyChooseUs → Services → PropertyTypes → ContactCTA → Footer**

- `Navbar` — sticky; transparent-to-frosted on scroll; mobile drawer; `"use client"`
- `Hero` — split panel: dark text left, `building.jpg` photo right with gradient blend
- `WhyChooseUs` — 5 reason cards with inline SVG icons
- `Services` — pest service cards
- `PropertyTypes` — 6 commercial property categories with inline SVG icons
- `ContactCTA` — contact info + form; `"use client"`
- `Footer` — links, hours, logo

## Images

All `<img>` tags use `src={\`${SITE_BASE}/filename\`}` via `lib/config.ts`:
```ts
export const SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
```
`NEXT_PUBLIC_BASE_PATH` is not set in CI (site serves at domain root), so `SITE_BASE` is always `""`. Do NOT use `next/image` — no server-side image optimization in static export.

## Static export / GitHub Pages notes

- `next.config.ts`: `output: "export"`, no `basePath`
- Custom domain via `public/CNAME` (`www.beaverpestdefense.com`)
- `public/.nojekyll` prevents Jekyll processing
- Any component with event handlers must be `"use client"`

## Custom Tailwind tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-black` | `#0A0A0A` | Primary background |
| `brand-charcoal` | `#111111` | Section backgrounds |
| `brand-dark` | `#1C1C1C` | Card / panel backgrounds |
| `brand-border` | `#2A2A2A` | Subtle borders |
| `brand-lime` | `#6DC02F` | Primary accent, CTAs |
| `brand-lime-light` | `#80D636` | Hover states |
| `brand-lime-dim` | `#4E8B21` | Muted lime |
| `brand-silver` | `#C8C8C8` | Secondary / muted text |

## Global CSS utilities

- `.brand-rule` — thin lime-to-transparent horizontal separator line
- `.text-lime-gradient` — vertical lime gradient for headline text
- `bg-shield-pattern` — subtle SVG shield tile (Tailwind `backgroundImage` token)
