# CLAUDE.md - Chopras Indian Restaurant Website

## ABSOLUTE WRITING RULES - NEVER VIOLATE

1. NEVER use em dashes (the — character) anywhere in any file.
   Replace with: hyphen-space-hyphen ( - ) or rewrite the sentence.
   This applies to: TSX files, JSON files, MD files, TXT files,
   component copy, translation strings, blog content, everywhere.

2. NEVER use contractions (don't, can't, won't, it's, we've, they're).
   Always write in full: do not, cannot, will not, it is, we have,
   they are.

3. These rules apply to ALL content generated for this project
   without exception.

## Project
Next.js 14 App Router website for Chopras Indian Restaurant, Den Haag.
Package manager: pnpm. Node: 20.x.

## Key Commands
- Dev server: pnpm dev
- Production build: pnpm build
- Type check: pnpm tsc --noEmit
- Lint: pnpm lint

## Architecture Rules
- App Router only — no Pages Router patterns ever
- All data lives in /src/lib/*.ts files — never hardcode content in components
- Use Next.js Image component for every image — never raw img tags
- Server Components by default — add "use client" only when hooks or interactivity is needed
- TypeScript strict mode is ON — fix all type errors, never use any

## Brand Colors
- Primary: #1B2B5E (deep navy blue)
- Accent: #D4AF37 (saffron gold)
- Background: #FFFAF5 (warm white)
- Text: #1A1A1A
- Secondary: #0F1F4B (darker navy, used for dark sections)

## Fonts
- Headings: Cormorant Garamond
- Body: DM Sans

## Content Rules
- All menu data lives in /src/lib/menu-data.ts only
- All blog content lives in /src/lib/blog-data.ts only
- All schema markup generated through /src/lib/schema.ts
- Images always have descriptive alt text — never empty alt

## Hard Rules
- Never use raw img tag — always Next.js Image
- Never use inline styles — always Tailwind classes
- Never hardcode restaurant data — always import from constants.ts
- Never commit .env.local
