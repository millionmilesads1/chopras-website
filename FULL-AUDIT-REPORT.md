# SEO Full Audit Report — Chopras Indian Restaurant (chopras.nl)

**Audit Date:** 2026-04-03  
**Auditor:** Claude Code SEO Audit System (8 specialist subagents)  
**Business Type:** Brick-and-mortar + Service Area Restaurant (Indian, Den Haag, Netherlands)  
**Framework:** Next.js 14 App Router, TypeScript, Tailwind CSS, bilingual EN/NL

---

## Overall SEO Health Score: 63 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 62 | 13.6 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 52 | 5.2 |
| Performance (CWV) | 10% | 58 | 5.8 |
| AI Search Readiness | 10% | 64 | 6.4 |
| Images | 5% | 30 | 1.5 |
| **Total** | | | **62.5** |

---

## Executive Summary

The site has a well-structured Next.js 14 architecture, clean bilingual routing, and genuinely strong blog content. The foundation is solid. However, it has several critical issues that must be fixed before any ranking progress is possible:

### Top 5 Critical Issues

1. **JobPosting schema expired** — `validThrough: '2025-12-31'` is in the past. Google has already stopped showing the vacancy page in job rich results.
2. **Delivery URLs link to a different brand** — Thuisbezorgd and Uber Eats links on the menu and takeaway pages point to "Red Fort Indian Street Food", not Chopras. This damages entity coherence for AI search and is a conversion failure.
3. **OG image file missing** — `/og/home-og.jpg` is declared in metadata but `public/og/` does not exist. Every social media share of the site produces a blank card.
4. **Google Maps embed broken** — The iframe uses Place ID `0x0:0x0` (a placeholder). The embed does not connect to the real Google Business Profile.
5. **No `llms.txt`** — AI crawlers (ChatGPT, Perplexity, Claude) receive no structured identity signal about the restaurant.

### Top 5 Quick Wins (under 30 min each)

1. Change `redirect('/en')` to `permanentRedirect('/en')` in `src/app/page.tsx`
2. Update `validThrough` from `'2025-12-31'` to `'2026-12-31'` in `src/app/[locale]/vacancy/page.tsx`
3. Add `poster="/images/hero/hero-poster.webp"` to the `<video>` tag in `HeroSection.tsx`
4. Fix `acceptsReservations: 'True'` → `acceptsReservations: true` in homepage schema
5. Add 4 security headers to `next.config.mjs`

---

## Section 1 — Technical SEO (Score: 62/100)

### 1.1 Redirect Chain

| ID | Issue | Severity | File |
|----|-------|----------|------|
| R1 | Root `/` → `/en` uses 307 Temporary redirect, not 308 Permanent. Google treats this as reversible and does not fully consolidate PageRank. | **Critical** | `src/app/page.tsx`, `src/middleware.ts` |

**Fix `src/app/page.tsx`:**
```ts
import { permanentRedirect } from 'next/navigation'
export default function RootPage() { permanentRedirect('/en') }
```

**Fix `src/middleware.ts` (line 28):**
```ts
return NextResponse.redirect(new URL(`/en${pathname === '/' ? '' : pathname}`, request.url), 308)
```

### 1.2 Security Headers

| ID | Issue | Severity | File |
|----|-------|----------|------|
| SH1 | No HTTP security headers configured. Missing: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. | **Critical** | `next.config.mjs` |

**Fix — add to `next.config.mjs`:**
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }]
},
```

### 1.3 Hreflang

| ID | Issue | Severity | File |
|----|-------|----------|------|
| H2 | Blog posts generate hreflang for both EN and NL locales, but posts are language-specific. A Dutch post served at `/en/blog/` is a content/locale mismatch. | **High** | `src/app/[locale]/blog/[slug]/page.tsx` |

### 1.4 Schema URL Values

| ID | Issue | Severity | File |
|----|-------|----------|------|
| CA2 | `url` and `hasMenu` in Restaurant schema hardcoded to `https://chopras.nl` (root, triggers redirect). Should point to locale-prefixed canonical URLs. | **Medium** | `src/app/[locale]/page.tsx` lines 58, 75 |

### 1.5 URL Structure

| ID | Issue | Severity | File |
|----|-------|----------|------|
| U1 | Several CTAs use raw `<a>` instead of Next.js `<Link>`, causing full page reloads. | **Medium** | `src/app/[locale]/page.tsx:243`, `src/app/[locale]/blog/[slug]/page.tsx:124` |
| U2 | Blog post body links use locale-less paths (`/menu`, `/contact`) — Googlebot follows a redirect on each. | **Medium** | `src/lib/blog-data.ts` |

### 1.6 Internal Linking

| ID | Issue | Severity | File |
|----|-------|----------|------|
| IL1 | Contact page "Reserve a Table" CTA links back to itself (`${base}/contact`). | **Medium** | `src/app/[locale]/contact/page.tsx:192` |

### 1.7 AI Crawler Robots

| ID | Issue | Severity | File |
|----|-------|----------|------|
| C1 | No explicit rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). Currently all allowed via wildcard — a policy decision to make explicit. | **Low** | `public/robots.txt` |

### 1.8 IndexNow

| ID | Issue | Severity | File |
|----|-------|----------|------|
| IN1 | IndexNow not implemented. Bing/Yandex receive no instant notification on new content. | **Low** | New deploy hook needed |

---

## Section 2 — Content Quality (Score: 74/100)

### 2.1 E-E-A-T

| ID | Issue | Severity | File |
|----|-------|----------|------|
| EE1 | No named chef or owner anywhere on the site. Google QRG requires attributable expertise for restaurant content. | **High** | `src/i18n/en.json`, `src/app/[locale]/page.tsx` story section |
| EE2 | Halal certification claimed but certifying body (HIC, ISWA, etc.) never named. | **High** | `src/lib/faq-data.ts:33`, `src/app/[locale]/halal-food-den-haag/page.tsx` |
| EE3 | 3 hardcoded reviews (Priya S., Mark van der Berg, Fatima K.) — not sourced from verified platforms. | **Medium** | `src/i18n/en.json` review keys |
| EE4 | No About page exists. The story section is ~110 words. | **Medium** | New file: `src/app/[locale]/about/page.tsx` |

### 2.2 Thin Content

| ID | Issue | Severity | File |
|----|-------|----------|------|
| TC1 | Location pages (Rijswijk, Delft, Zoetermeer) pass the doorway test but share near-identical body structure. Need one genuinely unique element per city. | **High** | `src/app/[locale]/indian-restaurant-*/page.tsx` |
| TC2 | `indian-takeaway-den-haag` has ~120 words of body content. Minimum for a service page is ~800 words. | **High** | `src/app/[locale]/indian-takeaway-den-haag/page.tsx` |
| TC3 | Delivery links point to "redfort-indian-street-food" / "red-fort-indian-street-food" on Thuisbezorgd and Uber Eats — a different brand name. | **Critical** | `src/app/[locale]/menu/page.tsx:122-133`, `src/app/[locale]/indian-takeaway-den-haag/page.tsx:58,61` |

### 2.3 Duplicate Content / Keyword Cannibalization

| ID | Issue | Severity | File |
|----|-------|----------|------|
| DC1 | Blog posts are served at both `/en/blog/[slug]` and `/nl/blog/[slug]` with identical content regardless of the post's `language` field. | **Critical** | `src/app/[locale]/blog/[slug]/page.tsx:10-14,44` |
| DC2 | `/indian-food-netherlands` exists as both a programmatic page AND a blog post — direct keyword cannibalization. | **Critical** | `src/lib/blog-data.ts` (slug 'indian-food-netherlands'), `src/app/[locale]/indian-food-netherlands/page.tsx` |

### 2.4 Title Tags and Meta Descriptions

| ID | Issue | Severity | File |
|----|-------|----------|------|
| MT1 | Blog post meta titles contain hardcoded "2025" year that will become stale. | **Medium** | `src/lib/blog-data.ts:7,310` |
| MT2 | Vacancy meta description: "fastest growing Indian restaurant in Den Haag" — unverifiable superlative claim. | **Medium** | `src/app/[locale]/vacancy/page.tsx:21-22` |
| MT3 | JobPosting `validThrough: '2025-12-31'` expired. Google suppresses these from Jobs search. | **Critical** | `src/app/[locale]/vacancy/page.tsx:43,50,58` |

### 2.5 Homepage Content Depth

| ID | Issue | Severity | File |
|----|-------|----------|------|
| CD1 | Story section is ~110 words — far below what the layout space offers. Should be 250–300 words with specific founding details. | **Medium** | `src/i18n/en.json`, `src/i18n/nl.json` story keys |
| CD2 | Menu page has no server-rendered editorial text — only the client-side `MenuPageClient` component. Google cannot index menu item details without JS execution. | **Medium** | `src/app/[locale]/menu/page.tsx` |

### 2.6 FAQ Schema Volume

| ID | Issue | Severity | File |
|----|-------|----------|------|
| FQ1 | `homeFaqs` has 28 questions injected into FAQPage schema. Google recommends ≤10 for optimal rich results. Some answers list 30+ dishes. | **Medium** | `src/lib/faq-data.ts`, `src/app/[locale]/page.tsx:86-93` |

### 2.7 Opening Hours Discrepancy

| ID | Issue | Severity | File |
|----|-------|----------|------|
| HR1 | FAQ answer for opening hours states "4:30 PM to 10:30 PM" but schema and `constants.ts` say 15:00–22:00. AI systems will cite conflicting times. | **High** | `src/lib/faq-data.ts` (hours answer) |

---

## Section 3 — Schema / Structured Data (Score: 52/100)

### 3.1 Critical Schema Errors

| ID | Issue | Severity | File |
|----|-------|----------|------|
| SD1 | `acceptsReservations: 'True'` — should be boolean `true`. String "True" is invalid per schema.org. | **Critical** | `src/app/[locale]/page.tsx:76` |
| SD2 | All three JobPosting schemas have `validThrough: '2025-12-31'` (expired) and `datePosted: '2025-01-01'`. Google will not show rich results. | **Critical** | `src/app/[locale]/vacancy/page.tsx:43,50,58` |
| SD3 | JobPosting schemas are missing the `description` property — required by Google for job rich results. | **Critical** | `src/app/[locale]/vacancy/page.tsx` |
| SD4 | Menu `url` property is `https://chopras.nl/menu` — a non-existent locale-less path. Should be `https://chopras.nl/en/menu`. | **Critical** | `src/app/[locale]/menu/page.tsx` |
| SD5 | Location page `url` on Delft page set to the landing page URL instead of the restaurant's primary URL. | **Critical** | `src/app/[locale]/indian-restaurant-delft/page.tsx` |

### 3.2 Missing High-Value Schema

| ID | Issue | Severity | File |
|----|-------|----------|------|
| SM1 | `schema.ts` is an empty placeholder. All schema is duplicated across 20+ page files — violates CLAUDE.md architecture rule. | **High** | `src/lib/schema.ts` |
| SM2 | `aggregateRating` missing from all Restaurant schema blocks. Required for star display in Google search results and AI Overviews. | **High** | `src/app/[locale]/page.tsx`, contact page, location pages |
| SM3 | `sameAs` array missing from all Restaurant schemas — TripAdvisor URL exists in `constants.ts` but is never used in schema. | **High** | `src/app/[locale]/page.tsx:53-78` |
| SM4 | No `WebSite` schema anywhere on the site. Needed for Sitelinks Search Box eligibility. | **High** | `src/app/[locale]/layout.tsx` |
| SM5 | Blog posts use `Article` instead of `BlogPosting`. Missing `image`, `dateModified`, `mainEntityOfPage`, `publisher.logo`. | **High** | `src/app/[locale]/blog/[slug]/page.tsx` |
| SM6 | `logo` property missing from Restaurant schema on homepage (logo URL is in `constants.ts`). | **Medium** | `src/app/[locale]/page.tsx` |
| SM7 | `currenciesAccepted: "EUR"` and `paymentAccepted` missing from Restaurant schema. | **Medium** | `src/app/[locale]/page.tsx` |
| SM8 | FAQPage schema missing from 8+ pages that render FAQ accordions (halal, wedding catering, corporate events, butter chicken, party venue, etc.). | **Medium** | All programmatic pages with FAQ sections |
| SM9 | BreadcrumbList missing from catering, biryani, halal, wedding catering, party venue, and all other programmatic pages. | **Medium** | Multiple page files |
| SM10 | No `@id` property on any Restaurant schema block — needed for Google Knowledge Panel entity disambiguation. | **Medium** | All schema blocks |
| SM11 | `openingHoursSpecification` missing from contact page Restaurant schema block. | **Low** | `src/app/[locale]/contact/page.tsx` |
| SM12 | `EventVenue` schema on party venue page missing `url` and `maximumAttendeeCapacity: 80`. | **Low** | `src/app/[locale]/party-venue-den-haag/page.tsx` |

### 3.3 Schema Type Inconsistencies

| ID | Issue | Severity | File |
|----|-------|----------|------|
| ST1 | Catering page uses `FoodEstablishment` instead of `Restaurant` — less specific type. | **Medium** | `src/app/[locale]/catering/page.tsx` |
| ST2 | Location pages use `['LocalBusiness', 'Restaurant']` array; homepage uses `'Restaurant'` alone. Should be consistent. | **Medium** | Location page files |

---

## Section 4 — Sitemap (Score: 75/100)

### 4.1 Sitemap Issues

| ID | Issue | Severity | File |
|----|-------|----------|------|
| SI1 | Blog sitemap generates URLs for both locales for every post regardless of the post's `language` field. Dutch posts get an `/en/blog/` URL. | **Medium** | `src/app/sitemap.ts:41-48` |
| SI2 | Static pages use `lastModified: new Date()` — emits today's date on every build, causing Google to distrust the `lastmod` field entirely. | **Medium** | `src/app/sitemap.ts:34` |
| SI3 | `generateStaticParams` in blog post page generates both locale paths for every post, serving identical content at both URLs. | **Medium** | `src/app/[locale]/blog/[slug]/page.tsx:10-14` |
| SI4 | Location pages are at priority `0.7`, same as blog posts — should be `0.8` given high-intent local search value. | **Low** | `src/app/sitemap.ts` |

---

## Section 5 — Performance / Core Web Vitals (Score: 58/100)

### 5.1 LCP — HIGH RISK

| ID | Issue | Severity | File |
|----|-------|----------|------|
| LCP1 | Hero `<video>` has no `poster` attribute. Without it, the browser renders a black frame until the first video frame decodes — unpredictable LCP timing. | **High** | `src/components/sections/HeroSection.tsx` |
| LCP2 | `preload="auto"` on the hero video competes with render-critical resources during LCP window. | **High** | `src/components/sections/HeroSection.tsx` |
| LCP3 | No mobile hero image — on small screens the above-fold area is a plain dark div; LCP candidate becomes the font-rendered H1. | **High** | `src/components/sections/HeroSection.tsx` |
| LCP4 | `style={{ willChange: 'transform' }}` inline style on video violates CLAUDE.md and provides no performance benefit. | **Low** | `src/components/sections/HeroSection.tsx` |

### 5.2 CLS — MEDIUM RISK

| ID | Issue | Severity | File |
|----|-------|----------|------|
| CLS1 | Both fonts use `display: 'swap'` — font swap on Cormorant Garamond headings causes CLS. Use `adjustFontFallback: 'Georgia'` in `next/font` config, change DM Sans to `display: 'optional'`. | **Medium** | `src/app/[locale]/layout.tsx` |
| CLS2 | Dead `src/app/globals.css` file with conflicting `font-family: Arial` body rule — if accidentally imported, overrides all brand fonts. Delete this file. | **Medium** | `src/app/globals.css` |

### 5.3 Bundle Size

| ID | Issue | Severity | File |
|----|-------|----------|------|
| BS1 | `framer-motion` v12 is in `package.json` but used nowhere in the codebase. May add up to 30 kB gzipped to the shared chunk. | **Medium** | `package.json` |

### 5.4 Image Optimization Config

| ID | Issue | Severity | File |
|----|-------|----------|------|
| IC1 | `images.formats` not set — Next.js won't serve AVIF. `images.minimumCacheTTL` defaults to 60 seconds (too aggressive). | **Low** | `next.config.mjs` |
| IC2 | `FeaturedDishes` images missing `sizes` prop — browser fetches incorrectly sized srcset. | **Low** | `src/components/sections/FeaturedDishes.tsx` |

---

## Section 6 — AI Search Readiness / GEO (Score: 64/100)

### 6.1 Critical GEO Gaps

| ID | Issue | Severity | File |
|----|-------|----------|------|
| GEO1 | No `llms.txt` file. AI crawlers receive no structured identity signal. | **Critical** | `public/llms.txt` (create new) |
| GEO2 | Delivery URLs link to "Red Fort Indian Street Food" — a different brand. AI entity disambiguation will attribute this outbound link to the wrong entity. | **Critical** | `src/app/[locale]/menu/page.tsx:122-133` |
| GEO3 | Opening hours discrepancy: FAQ says 4:30 PM, schema says 15:00. AI systems cite conflicting times. | **High** | `src/lib/faq-data.ts` |
| GEO4 | No `sameAs` in any Restaurant schema — prevents AI systems from resolving "Chopras Den Haag" to the TripAdvisor/Google Maps entity. | **High** | `src/app/[locale]/page.tsx:53-78` |
| GEO5 | `suitableForDiet: HalalDiet` absent from homepage schema (only on halal page). Most common AI query about this restaurant. | **High** | `src/app/[locale]/page.tsx` |
| GEO6 | No YouTube channel linked (strongest AI citation correlation signal at ~0.737). | **Medium** | `src/lib/constants.ts` social object |
| GEO7 | No Facebook or Instagram social presence linked anywhere. AI brand mention density is weak. | **Medium** | `src/lib/constants.ts` |
| GEO8 | No Dutch-language long-form blog content — Dutch AI queries ("beste Indiase restaurant Den Haag") have no Dutch prose to cite. | **Medium** | `src/lib/blog-data.ts` |

---

## Section 7 — Local SEO (Score: 61/100)

### 7.1 GBP Signals

| ID | Issue | Severity | File |
|----|-------|----------|------|
| LS1 | Google Maps embed uses placeholder Place ID `0x0:0x0` — iframe is not connected to the actual GBP listing. | **Critical** | `src/components/sections/LocationSection.tsx:27` |
| LS2 | No direct link to leave a Google review anywhere on the site. | **High** | `src/components/sections/ReviewsSection.tsx:39` |
| LS3 | Reviews CTA links to a Google search URL, not the direct GBP place page. | **Medium** | `src/components/sections/ReviewsSection.tsx:39` |

### 7.2 Schema Local Signals

| ID | Issue | Severity | File |
|----|-------|----------|------|
| LS4 | `aggregateRating` missing — blocks star display in local pack and AI Overviews. | **High** | `src/app/[locale]/page.tsx` |
| LS5 | No `@id: "https://chopras.nl/#restaurant"` on any schema block — prevents Knowledge Panel association. | **Medium** | All schema blocks |
| LS6 | Location pages schema uses `['LocalBusiness', 'Restaurant']` array inconsistently vs homepage `'Restaurant'`. | **Medium** | Location page files |

### 7.3 Citations and Directories

| ID | Issue | Severity | External |
|----|-------|----------|---------|
| LS7 | Not listed on eet.nu (largest Dutch restaurant directory). | **High** | eet.nu |
| LS8 | No Facebook Business Page linked — major citation gap. | **High** | facebook.com |
| LS9 | Not listed on Zomato Netherlands — strong Indian restaurant vertical. | **Medium** | zomato.com |
| LS10 | No Foursquare listing. | **Low** | foursquare.com |

### 7.4 Location Page Opportunities

| ID | Issue | Severity | File |
|----|-------|----------|------|
| LS11 | No cross-links between Rijswijk, Delft, and Zoetermeer pages. | **Low** | Location page files |
| LS12 | `voorburg` and `leidschendam` are named service areas but have no dedicated pages. | **Low** | New pages if warranted |

---

## Section 8 — Images (Score: 30/100)

### 8.1 Critical Image Gaps

| ID | Issue | Severity | Location |
|----|-------|----------|---------|
| IM1 | `public/og/home-og.jpg` declared in metadata but the entire `public/og/` folder does not exist. All social shares produce blank cards. | **Critical** | `src/app/[locale]/page.tsx:47`, `public/og/` (create) |
| IM2 | 18 of 19 routes have no `openGraph.images` set at all. | **Critical** | All page files |
| IM3 | Hero `<video>` has no `poster` image — no static image on hero for social crawlers or mobile users. | **High** | `src/components/sections/HeroSection.tsx` |
| IM4 | 8 of 14 featured dishes have no image (Butter Chicken, Biryani, Paneer Butter Masala, Mutton Rogan Josh, Chopra Special Paneer, Chilli Paneer, Chilli Chicken, Mango Lassi). | **High** | `src/lib/menu-data.ts` |
| IM5 | 4 homepage/catering placeholder divs with text labels instead of real images. | **High** | `src/app/[locale]/page.tsx:136,210`, `src/app/[locale]/catering/page.tsx:131,165` |

### 8.2 Schema and Alt Text

| ID | Issue | Severity | File |
|----|-------|----------|------|
| IM6 | No `ImageObject` type used in any schema block. Blog `Article` schema missing `image` property. | **High** | `src/app/[locale]/blog/[slug]/page.tsx` |
| IM7 | No image sitemap — food photography not exposed to Google Images. | **Medium** | `src/app/sitemap.ts` |

### 8.3 Asset Optimization

| ID | Issue | Severity | File |
|----|-------|----------|------|
| IM8 | Logo served from external WordPress CDN (`chopras.nl/wp-content/uploads/...`). No local fallback. | **Medium** | `src/lib/constants.ts:31` |
| IM9 | `FeaturedDishes` images missing `sizes` prop — incorrect srcset generation. | **Low** | `src/components/sections/FeaturedDishes.tsx` |

### 8.4 Image Generation Plan

These assets need to be created (see ACTION-PLAN.md for prompts):

| Asset | Dimensions | Priority |
|-------|-----------|---------|
| `public/og/home-og.jpg` | 1200×630 | Critical |
| `public/og/catering-og.jpg` | 1200×630 | Critical |
| `public/og/menu-og.jpg` | 1200×630 | Critical |
| `public/images/hero/hero-poster.webp` | 1920×1080 | High |
| `public/images/hero/hero-mobile.webp` | 828×1792 | High |
| `public/images/dishes/butter-chicken.webp` | 800×600 | High |
| `public/images/dishes/chicken-biryani.webp` | 800×600 | High |
| `public/images/dishes/paneer-butter-masala.webp` | 800×600 | High |
| `public/images/dishes/mutton-rogan-josh.webp` | 800×600 | High |
| `public/images/dishes/chopra-special-paneer.webp` | 800×600 | Medium |
| `public/images/dishes/chilli-paneer.webp` | 800×600 | Medium |
| `public/images/dishes/chilli-chicken.webp` | 800×600 | Medium |
| `public/images/dishes/mango-lassi.webp` | 800×600 | Medium |
| `public/images/restaurant/interior.webp` | 1200×900 | High |
| `public/images/catering/event-hall.webp` | 1200×900 | High |
| `public/og/blog-og.jpg` | 1200×630 | Medium |

---

## Appendix A — Build Output Summary

- 67 static pages generated successfully
- 0 TypeScript errors
- First Load JS: homepage 108 kB, menu 115 kB, shared baseline 87.3 kB
- `framer-motion` dependency present but unused — remove for ~30 kB savings

## Appendix B — Files Audited

Core architecture: `src/app/layout.tsx`, `src/app/[locale]/layout.tsx`, `src/app/page.tsx`, `src/middleware.ts`, `next.config.mjs`, `tailwind.config.ts`, `package.json`, `public/robots.txt`, `src/app/sitemap.ts`

Data files: `src/lib/constants.ts`, `src/lib/blog-data.ts`, `src/lib/menu-data.ts`, `src/lib/faq-data.ts`, `src/lib/schema.ts`, `src/lib/useTranslations.ts`, `src/i18n/en.json`, `src/i18n/nl.json`

All 19 page routes in `src/app/[locale]/`

Components: `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`, `FeaturedDishes.tsx`, `ReviewsSection.tsx`, `TrustBar.tsx`, `LocationSection.tsx`, `FaqAccordion.tsx`, `MenuPageClient.tsx`
