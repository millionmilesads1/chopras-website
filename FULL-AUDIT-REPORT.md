# Full SEO Audit Report - Chopras Indian Restaurant
**Site:** https://chopras.nl
**Date:** 2026-04-05
**Previous Audit:** 2026-04-04 (score: 68 / 100)
**Framework:** Next.js 14 App Router, i18n (en/nl), SSG
**Auditors:** 7 specialist subagents (Technical, Content, Schema, Sitemap, Performance, GEO, Local SEO)

---

## Executive Summary

### Overall SEO Health Score: 73 / 100  (+5 from prior audit)

| Category | Weight | Score | Weighted | Prior | Delta |
|---|---|---|---|---|---|
| Technical SEO | 22% | 81 | 17.8 | 71 | +10 |
| Content Quality | 23% | 79 | 18.2 | 74 | +5 |
| On-Page SEO | 20% | 75 | 15.0 | 72 | +3 |
| Schema / Structured Data | 10% | 72 | 7.2 | 65 | +7 |
| Performance (CWV) | 10% | 38 | 3.8 | 35 | +3 |
| AI Search Readiness (GEO) | 10% | 83 | 8.3 | 79 | +4 |
| Local SEO | 5% | 63 | 3.15 | 61 | +2 |
| **Total** | | | **73 / 100** | 68 | **+5** |

### Business Type Detected
Brick-and-mortar restaurant. North Indian / Halal / Street Food. Den Haag, Netherlands. Service-area business for catering (Den Haag, Rijswijk, Delft, Zoetermeer, Voorburg, Leidschendam, Westland).

### Fixes Applied Since Prior Audit (9 confirmed)

| Fix | File | Status |
|---|---|---|
| SearchAction removed from WebSite schema | `src/app/[locale]/layout.tsx` | FIXED |
| Both fonts now `display: 'swap'` | `src/app/[locale]/layout.tsx` | FIXED |
| `adjustFontFallback: false` removed from Cormorant | `src/app/[locale]/layout.tsx` | FIXED |
| HSTS + 4 security headers added | `next.config.mjs` | FIXED |
| Checkout noindex layout added | `src/app/[locale]/checkout/layout.tsx` | FIXED |
| Order-confirmation noindex layout added | `src/app/[locale]/order-confirmation/layout.tsx` | FIXED |
| robots.txt: checkout/order-confirmation disallowed | `public/robots.txt` | FIXED |
| OAI-SearchBot added to robots.txt | `public/robots.txt` | FIXED |
| Ghost sitemap-page entry removed | `src/app/sitemap.ts` | FIXED |
| Em dashes removed from MeetTheFounder | `src/components/home/MeetTheFounder.tsx` | FIXED |
| Blog related posts locale-filtered | `src/app/[locale]/blog/[slug]/page.tsx` | FIXED |
| Blog author attribution (Arun Chopra) | `src/app/[locale]/blog/[slug]/page.tsx` | FIXED |
| Tandoor temperature inconsistency fixed | `src/i18n/en.json`, `nl.json` | FIXED |
| RSL 1.0 license line added | `public/llms.txt` | FIXED |
| `public/logo.png` now exists | `public/logo.png` | FIXED |

### Top 5 Critical Issues
1. **240-frame JPEG canvas hero (14 MB)** - destroys LCP; canvas is not a valid LCP candidate; 14 MB on mount with 300vh scroll lock; unchanged since prior audit
2. **OG image file missing: `/public/og/home-og.jpg` does not exist** - every page and blog post serves a 404 to AI crawlers and social preview scrapers
3. **Restaurant schema `logo` and `image` use WordPress CDN URL** - `constants.ts:31` still points to a WordPress upload path that will 404 in production; `public/logo.png` exists and should replace it
4. **Thuisbezorgd and Uber Eats still under old name "Red Fort Indian Street Food"** - NAP mismatch actively suppresses local pack positions; live conversion leak on menu page
5. **`schema.ts` is an empty placeholder** - violates CLAUDE.md architecture; `aggregateRating` hardcoded in 15+ files with no update mechanism

### Top 5 Quick Wins (under 30 minutes each)
1. Fix `RESTAURANT.logo` in `constants.ts:31` to `https://chopras.nl/logo.png` (1-line change; propagates to all downstream schema)
2. Add `'Westland'` to `areaServed` array in `src/app/[locale]/page.tsx:83` (1-line change)
3. Fix `hasMenu` to be locale-aware: `hasMenu: \`${SITE_URL}/${locale}/menu\`` in `page.tsx` (move schema inside component)
4. Add Monday-closed `OpeningHoursSpecification` to homepage schema (3-line addition)
5. Add `Content-Security-Policy` header to `next.config.mjs`

---

## 1. Technical SEO - Score: 81 / 100  (prior: 71, +10)

### Confirmed Fixed Since Prior Audit
- `SearchAction` / `potentialAction` removed from WebSite schema - `src/app/[locale]/layout.tsx:55-60`
- `font-display: swap` on Cormorant Garamond - `src/app/[locale]/layout.tsx:18`
- `font-display: swap` on DM Sans - `src/app/[locale]/layout.tsx:25`
- `adjustFontFallback: false` removed from Cormorant - `src/app/[locale]/layout.tsx:13-19`
- HSTS: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` - `next.config.mjs:51`
- X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy - `next.config.mjs:52-55`
- Checkout noindex: `robots: { index: false, follow: false }` - `src/app/[locale]/checkout/layout.tsx:3-7`
- Order-confirmation noindex - `src/app/[locale]/order-confirmation/layout.tsx:3-7`
- robots.txt disallows all checkout and order-confirmation paths - `public/robots.txt:5-8`
- OAI-SearchBot `Allow: /` added - `public/robots.txt:29-30`
- Ghost `sitemap-page` entry removed - `src/app/sitemap.ts`

### Passing
- Canonical tags: every page exports `alternates.canonical` correctly
- Hreflang: every page has `en`, `nl`, and `x-default` (pointing to `en`) - consistent across 19+ pages
- 18 legacy flat-URL redirects in `next.config.mjs` all use `permanent: true` (308), no redirect chains
- Middleware correctly 308s locale-less paths to `/en/...`
- `poweredByHeader: false` suppresses server fingerprinting
- AVIF/WebP image formats correctly configured
- `next/image` used consistently - no raw `<img>` tags found
- GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, OAI-SearchBot all explicitly allowed

### Issues

**CRITICAL - Canvas hero kills LCP**
`src/components/sections/HeroSection.tsx:50-57`
240 JPEG frames (14 MB total) loaded via `new window.Image()` on mount with no lazy loading or priority. The LCP element is a `<canvas>` - not a valid LCP candidate. Googlebot falls back to the largest text block. The `height: '300vh'` scroll container locks 300 viewport-heights of scroll before any other content is reachable. Expected LCP on 4G: 8-15 seconds (Poor band). Completely unchanged from prior audit.

**HIGH - No Content-Security-Policy header**
`next.config.mjs:47-58`
No `Content-Security-Policy` header. XSS protection absent for Google Maps embeds and GoHighLevel forms. Five security headers were added in this session; CSP was not included.

**HIGH - Logo URL in `constants.ts` still points to WordPress CDN**
`src/lib/constants.ts:31`
`logo: 'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png'` - a WordPress media path that will 404 once WordPress is no longer serving at that domain. `public/logo.png` exists and should replace this. All downstream schema references update automatically once `constants.ts` is changed.

**HIGH - `hasMenu` in Restaurant schema is not locale-aware**
`src/app/[locale]/page.tsx:81`
`hasMenu: 'https://chopras.nl/menu'` triggers a 301 redirect for all Google crawlers. The Restaurant schema is declared as a module-level `const` outside the page component and does not have access to `locale`. The object must be moved inside `LocaleHomePage` to use `hasMenu: \`${SITE_URL}/${locale}/menu\``.

**MEDIUM - Blog hreflang incomplete for Dutch-only posts**
`src/app/[locale]/blog/[slug]/page.tsx:26-31`
When `post.language === 'nl'`, the `languages` object sets `x-default` to `/en/blog` (the listing page). For NL-only posts, `x-default` should point to the NL post URL, not the EN blog index.

**LOW - robots.txt disallow paths missing trailing slashes**
`public/robots.txt:5-8`
`Disallow: /en/checkout` (no trailing slash). Some crawlers may not match `/en/checkout/` (with slash) or `?` variants. Defence in depth warrants trailing slashes. Low severity because noindex metadata is also in place.

**LOW - IndexNow not implemented**
No `indexnow*.txt` key file in `/public/`. Supported by Bing and Yandex for instant re-crawl on content changes.

---

## 2. Content Quality - Score: 79 / 100  (prior: 74, +5)

### Confirmed Fixed Since Prior Audit
- Em dashes removed from MeetTheFounder.tsx (lines 38, 63, 79 - all replaced with ` - `)
- Blog related posts locale-filtered: `.filter((p) => p.slug !== post.slug && p.language === locale)` - `src/app/[locale]/blog/[slug]/page.tsx:50`
- Blog author attribution: `author: { '@type': 'Person', name: 'Arun Chopra', ... }` - `src/app/[locale]/blog/[slug]/page.tsx:58`
- Tandoor temperature fixed in `en.json:96` (now "around 400 degrees C") and `nl.json:96` (now "ongeveer 400 graden C")

### E-E-A-T Summary

| Dimension | Score |
|---|---|
| Experience | 17 / 20 |
| Expertise | 19 / 25 |
| Authoritativeness | 17 / 25 |
| Trustworthiness | 22 / 30 |

### Strengths
- `MeetTheFounder.tsx` provides genuine first-person founder narrative with specific culinary origins (Delhi, Mumbai, Rajasthan)
- Butter chicken page: overnight yogurt marinade, 45-minute tomato reduction, Moti Mahal historical attribution, actual price (18.50 EUR)
- Tandoor temperature claim (400 degrees C) is now consistent across all pages
- Halal landing page provides unusually precise compliance detail including cross-contamination and alcohol-in-cooking
- Allergen notice cites EU Regulation 1169/2011
- Location pages (Rijswijk, Delft, Zoetermeer) show genuine local knowledge

### Issues

**P0 - Wrong Thuisbezorgd URL (critical conversion leak)**
`src/app/[locale]/menu/page.tsx:143`
`href="https://www.thuisbezorgd.nl/en/menu/redfort-indian-street-food"` sends users to a competitor. Active conversion leak on the highest-traffic transactional page. The correct Chopras Thuisbezorgd URL must be obtained from the operator.

**P1 - Thin content: tandoori-den-haag (~180 words of editorial prose)**
`src/app/[locale]/tandoori-den-haag/page.tsx:106-118`
Three short paragraphs before the dish card grid. No FAQ section rendered despite FAQ data in the file. Well below the 800-word service page minimum.

**P1 - Thin content: biryani-den-haag (~210 words)**
`src/app/[locale]/biryani-den-haag/page.tsx:107-119`
FAQ schema is generated (lines 59-68) but no visible FAQ section rendered in JSX. Inconsistent with all other dish pages.

**P1 - No halal certification body named**
`src/app/[locale]/halal-food-den-haag/page.tsx:55-66`, `src/lib/faq-data.ts:34`
"Certified halal suppliers" stated everywhere but the certifying authority is never named. Required for trust verification under QRG.

**P1 - No privacy policy page**
No privacy policy, cookie policy, or terms route exists under `src/app/[locale]/`. Required under GDPR (Netherlands) and a QRG trust signal. The site collects personal data via multiple GHL forms.

**P1 - No visible author byline on blog posts**
`src/app/[locale]/blog/[slug]/page.tsx`
Author "Arun Chopra" is in the BlogPosting JSON-LD but there is no visible byline in the rendered HTML. QRG Experience signal requires a visible human author, not just machine-readable metadata.

**P2 - FAQ content quality issues**
`src/lib/faq-data.ts:6,14,18-19,86-91`
American English spellings ("flavors", "cozy", "recognized") throughout home FAQ answers. Unverified claims: "Kids Menu with surprise toys" (line 18-19), loyalty/membership programme with "exclusive discounts" (lines 86-91). Neither claim is corroborated anywhere else in the codebase.

**P2 - Gluten-free claim without cross-contamination caveat**
`src/lib/faq-data.ts:38`
Claims dishes are "naturally gluten-free" in a kitchen that produces wheat-based flatbreads.

**P2 - No blog author field in BlogPost data type**
`src/lib/blog-data.ts`
Author is hardcoded in the page component, not a property on the data type. No visible byline rendered for readers.

**P2 - Internal linking gaps**
Halal page mentions Nikah/Walima but does not link to `/indian-wedding-catering-den-haag`. Dish pages do not cross-link to each other or to blog posts.

**P3 - Hardcoded English allergen string on menu page**
`src/app/[locale]/menu/page.tsx:110`
"Allergen information available on request" is hardcoded in English regardless of locale.

---

## 3. Schema / Structured Data - Score: 72 / 100  (prior: 65, +7)

### Confirmed Fixed Since Prior Audit
- SearchAction / potentialAction removed from global WebSite schema - `src/app/[locale]/layout.tsx:55-60`
- BlogPosting author "Arun Chopra" added - `src/app/[locale]/blog/[slug]/page.tsx:58`
- BlogPosting publisher logo dimensions corrected to `width: 512, height: 512` - `src/app/[locale]/blog/[slug]/page.tsx:63`
- Homepage Restaurant block now has `@id: 'https://chopras.nl/#restaurant'` - `src/app/[locale]/page.tsx:100`
- Arun Chopra Person schema block added to homepage with `worksFor` linkage

### What IS Implemented
- **Homepage:** Restaurant (full, with `@id`), FAQPage (29 questions), Person (Arun Chopra)
- **Menu page:** Menu / MenuSection / MenuItem, BreadcrumbList
- **Blog posts:** BlogPosting (with author), BreadcrumbList
- **Catering page:** FoodEstablishment (should be Restaurant), BreadcrumbList
- **Contact page:** Restaurant, BreadcrumbList
- **Party venue:** EventVenue, FAQPage
- **Landing pages:** Restaurant, FAQPage on most
- **Global layout:** WebSite (clean, no broken SearchAction)

### Issues

**CRITICAL - schema.ts is still a placeholder**
`src/lib/schema.ts:1`
CLAUDE.md mandates "All schema markup generated through /src/lib/schema.ts". Currently contains only `// placeholder`. All schema scattered as inline literals across 15+ page files. `aggregateRating` (`ratingValue: '4.7'`, `reviewCount: '83'`) is hardcoded in at least 15 places with no update mechanism.

**HIGH - Restaurant `logo` and `image` use WordPress CDN URL (will 404)**
`src/app/[locale]/page.tsx:59,99`
Both point to `https://chopras.nl/wp-content/uploads/2025/11/...`. `public/logo.png` now exists. The BlogPosting publisher logo correctly references `https://chopras.nl/logo.png`. The Restaurant entity is inconsistent.

**HIGH - Restaurant `@id` missing from contact and catering page schemas**
`src/app/[locale]/contact/page.tsx:40`, `src/app/[locale]/catering/page.tsx:44`
Neither carries `'@id': 'https://chopras.nl/#restaurant'`. Without a shared `@id`, Google cannot treat all blocks as the same entity.

**HIGH - FoodEstablishment should be Restaurant on catering page**
`src/app/[locale]/catering/page.tsx:46`
`FoodEstablishment` is a generic supertype. Google's Restaurant rich result requires `@type: 'Restaurant'`.

**HIGH - OpeningHoursSpecification missing Monday-closed entry**
`src/app/[locale]/page.tsx:73-80` and all location pages
Only open days listed. Add: `{ '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '00:00', closes: '00:00' }`.

**HIGH - Person schema has no `@id` or `sameAs`**
`src/app/[locale]/page.tsx:126`
No `@id` (e.g. `https://chopras.nl/#arun-chopra`). No `sameAs` linking to any external identity graph. Google cannot consolidate BlogPosting author, homepage Person block, and founder reference into a single Knowledge Graph entity.

**MEDIUM - BlogPosting `dateModified` always equals `datePublished`**
`src/app/[locale]/blog/[slug]/page.tsx:57`
Both set to `post.publishedAt`. Add optional `updatedAt` field to `BlogPost` type.

**MEDIUM - Menu schema `url` missing locale**
`src/app/[locale]/menu/page.tsx:45`
`url: 'https://chopras.nl/menu'` - should be `https://chopras.nl/${locale}/menu`.

**MEDIUM - WebSite schema missing `@id` and `inLanguage`**
`src/app/[locale]/layout.tsx:55-60`
Both `/en` and `/nl` pages emit identical WebSite schema with no language signal. Add `'@id': 'https://chopras.nl/#website'` and `inLanguage: params.locale`.

**MEDIUM - BlogPosting image is a generic OG fallback pointing to a missing file**
`src/app/[locale]/blog/[slug]/page.tsx:67`
`image: '${SITE_URL}/og/home-og.jpg'` - this file does not exist in `public/og/`. Both the broken URL and the lack of per-post images are issues.

**MEDIUM - aggregateRating hardcoded across 15+ files**
`src/app/[locale]/page.tsx:84`, `catering/page.tsx:62`, `contact/page.tsx:55`, and 12+ landing pages
No single source of truth. When the review count changes, every file must be updated manually.

**Note on FAQPage**
FAQPage rich results are restricted by Google post-August 2023 for commercial sites. Keeping the markup is correct for GEO (AI citation) purposes.

---

## 4. Sitemap - Score: 85 / 100  (prior: 80, +5)

### Confirmed Fixed
- Ghost `sitemap-page` entry removed - `src/app/sitemap.ts`. All 19 entries in `staticPages` have verified corresponding `page.tsx` files.

### URL Inventory
- 19 static pages x 2 locales = 38 URLs
- 8 English blog posts + 2 Dutch blog posts = 10 URLs
- **Total: 48 URLs** (well under the 50,000 limit)

### Passing
- URL format correct: `https://chopras.nl/{locale}/{slug}`
- Blog posts correctly language-scoped
- Blog posts use real `publishedAt` dates for `lastModified`
- Checkout and order-confirmation correctly excluded
- No sitemap index needed at current scale

### Still Open

**INFO - Deprecated `changeFrequency` and `priority` fields present**
`src/app/sitemap.ts:8-26`
Google ignores both fields entirely. Recommend removing both from all entries to simplify maintenance.

**LOW - All 19 static pages share one identical `lastmod` date**
`src/app/sitemap.ts:8-26`
Every entry carries `lastMod: '2026-04-03'`. Google recognises synthetic identical timestamps and discounts the signal.

---

## 5. Performance (Core Web Vitals) - Score: 38 / 100  (prior: 35, +3)

### Confirmed Fixed
- `font-display: swap` on DM Sans - `src/app/[locale]/layout.tsx:25`
- `adjustFontFallback: false` removed from Cormorant - restores size-adjusted fallback, reduces CLS
- Image optimisation config: AVIF/WebP, 30-day TTL, correct `deviceSizes` - `next.config.mjs:4-8`
- Five security headers added

### Issues

**CRITICAL - Canvas hero 240-frame LCP killer - completely unresolved**
`src/components/sections/HeroSection.tsx:50-57`
`useEffect` unconditionally calls `FRAMES.forEach` and constructs 240 `new window.Image()` objects on mount. All 240 JPEGs (14 MB) begin fetching in parallel immediately, saturating the browser's connection pool. `<canvas>` is not an LCP candidate. The browser falls back to the `<h1>` text as LCP. The `height: '300vh'` scroll container at line 100 also locks 300 viewport-heights before any other content is reachable.

**HIGH - `public/images/` directory is 361 MB of raw unoptimised assets**
`public/images/` (361 MB on disk)
Files in `/public` bypass Next.js image optimisation entirely - served verbatim at source resolution and file size. Only `<Image>` component renders via `/_next/image` receive AVIF/WebP conversion. Any direct URL reference to `/images/...` delivers raw PNGs.

**HIGH - `blur-sm` filter on scroll animations causes GPU layer thrashing**
`src/components/sections/WhySection.tsx:65,79`, `src/components/sections/StorySection.tsx:21,60`
`filter: blur()` forces the browser to paint the element into its own compositing layer on every animation frame. Nine section components use this pattern. Replace with `opacity` + `translateY` only.

**HIGH - No `Cache-Control` header for `/public/images/` static assets**
`next.config.mjs:47-58`
The headers rule applies only security headers. `/public` files are served with `max-age=0, must-revalidate` by default. `minimumCacheTTL` applies only to `/_next/image`. Repeat visitors re-download the 14 MB frame set on every visit.

**MEDIUM - No `priority` prop on above-fold StorySection image**
`src/components/sections/StorySection.tsx:27-33`
`fill` image with no `priority` attribute - Next.js defaults to `loading="lazy"`, suppressing the preload link and delaying LCP on desktop viewports where this image is above the fold.

**MEDIUM - `logo.png` used as favicon/apple-icon with no size differentiation**
`src/app/[locale]/layout.tsx:45-48`
All three icon slots point to the same `/logo.png`. Separate `src/app/icon.png` and `src/app/apple-icon.png` files exist in the repo but are not referenced - the layout hardcodes `/logo.png` for all three.

**MEDIUM - `useInView` hook lacks `rootMargin` pre-trigger buffer**
`src/hooks/useInView.ts:4`
`threshold: 0.1` with no `rootMargin` means elements only begin animating when 10% has entered the viewport. Adding `rootMargin: '0px 0px -50px 0px'` would fire the observer before the element enters view.

**MEDIUM - Inline `style` prop in HeroSection violates CLAUDE.md**
`src/components/sections/HeroSection.tsx:107-110`
Gradient overlay uses an inline `style` prop. CLAUDE.md rule: "Never use inline styles - always Tailwind classes".

### Positive
- No third-party analytics, chat widgets, or GTM - significant TBT benefit
- `next/image` used consistently with descriptive `alt` on all checked usages
- AVIF/WebP image formats configured
- Font preloading handled automatically by Next.js font system

---

## 6. GEO / AI Search Readiness - Score: 83 / 100  (prior: 79, +4)

### Confirmed Fixed
- RSL 1.0 license line in `public/llms.txt:3` (`> License: RSL 1.0`)
- OAI-SearchBot `Allow: /` in `public/robots.txt:29-30`
- SearchAction removed from global WebSite schema
- BlogPosting author attribution (Arun Chopra, jobTitle, url)
- Entity disambiguation block present in llms.txt (lines 38-40)

### AI Crawler Access Status

| Bot | Status |
|---|---|
| GPTBot | Explicitly allowed |
| OAI-SearchBot | Explicitly allowed (newly added) |
| ClaudeBot | Explicitly allowed |
| anthropic-ai | Explicitly allowed |
| PerplexityBot | Explicitly allowed |
| Google-Extended | Explicitly allowed |
| Googlebot | Explicitly allowed |
| CCBot (training) | Allowed by wildcard (not explicitly blocked) |
| Bingbot | Allowed by wildcard |

### llms.txt Assessment
Well-structured and machine-readable. RSL 1.0 correctly placed. Entity disambiguation section explicitly separates Chopras from Deepak Chopra and the Chopra Center. Dense with citation-ready facts: full address, telephone, email, hours, price range, delivery platforms, event capacity range, named founder.
**Gaps:** No LinkedIn or Wikidata entry in Social section. No `last-modified` field.

### Platform-Specific Scores
| Platform | Score | Primary Gap |
|---|---|---|
| Google AI Overview | 81/100 | Broken OG image, static reviewCount, wp-content logo |
| ChatGPT | 79/100 | No Person sameAs, no Wikidata, broken BlogPosting image |
| Perplexity | 85/100 | Strong llms.txt; weakened by static reviewCount cross-reference risk |
| Bing Copilot | 76/100 | No Person sameAs, no LinkedIn |

### Issues

**HIGH - OG image file missing from disk**
`src/app/[locale]/blog/[slug]/page.tsx:67`, `src/app/[locale]/page.tsx`
`image: 'https://chopras.nl/og/home-og.jpg'` - the `public/og/` directory is empty. Every page and blog post is serving a broken image URL to AI crawlers and social preview scrapers.

**HIGH - Person schema has no `sameAs` array**
`src/app/[locale]/page.tsx:124-132`
The standalone Person block for Arun Chopra has no `sameAs`. Without at minimum a LinkedIn URL, Google and Bing cannot associate this Person node with any external identity graph.

**MEDIUM - Person schema `url` links to homepage, not a dedicated /about page**
`src/app/[locale]/page.tsx:101`, `src/app/[locale]/blog/[slug]/page.tsx:58`
No `/about` or `/en/about` route exists. AI systems resolving this URL land on the homepage, which is not a biographical document.

**MEDIUM - `dateModified` equals `datePublished` on all blog posts**
`src/app/[locale]/blog/[slug]/page.tsx:57`
Freshness scoring and AI citation preference favour recently modified content. Any content update is invisible to crawlers.

**MEDIUM - Restaurant `logo` and `image` use WordPress CDN URL**
`src/app/[locale]/page.tsx:59,99`
Will 404 in production. `public/logo.png` exists and should replace both fields.

**LOW - Wikidata / Wikipedia entity missing for Chopras and Arun Chopra**
No `sameAs` Wikidata link in Restaurant or Person schema. Highest-leverage unresolved item for ChatGPT and Google AI Overview citation eligibility. External action required.

**LOW - llms.txt has no LinkedIn or Wikidata entry in Social section**
`public/llms.txt:43-47`
LinkedIn is absent from the social section. Relevant for Arun Chopra Person entity.

**LOW - CCBot (training crawler) not explicitly blocked**
`public/robots.txt`
The wildcard `Allow: /` permits CCBot (Common Crawl training dataset). If the goal is to permit AI search but restrict training scraping, add `User-agent: CCBot` / `Disallow: /`.

---

## 7. Local SEO - Score: 63 / 100  (prior: 61, +2)

### Confirmed Fixed
- `suitableForDiet: https://schema.org/HalalDiet` added to homepage and halal page schemas
- `@id: https://chopras.nl/#restaurant'` added to homepage schema
- Founder Person schema block added to homepage with `worksFor` linkage
- Footer sources all NAP from `constants.ts` with no hardcoded divergence
- Location pages exist for Rijswijk, Delft, and Zoetermeer with `OpeningHoursSpecification`, `geo`, and `areaServed`

### NAP Consistency Check

| Source | Name | Consistent? |
|---|---|---|
| `constants.ts` | Chopras Indian Restaurant | Reference |
| Homepage schema | Chopras Indian Restaurant | YES |
| Contact page schema | Chopras Indian Restaurant | YES |
| Footer HTML | Chopras Indian Restaurant | YES |
| Rijswijk / Delft / Zoetermeer schemas | Chopras Indian Restaurant | YES |
| Thuisbezorgd deeplink | **Red Fort Indian Street Food** | **MISMATCH** |
| Uber Eats deeplink | **Red Fort Indian Street Food** | **MISMATCH** |

### Issues

**CRITICAL - Delivery platform NAP mismatch: old brand name in live deeplinks**
`src/app/[locale]/indian-takeaway-den-haag/page.tsx:92-95`
Both Thuisbezorgd (`/redfort-indian-street-food`) and Uber Eats (`/red-fort-indian-street-food/...`) URLs use the old brand name. A comment acknowledges this as a TODO. Users clicking these links are sent to a competitor-named entity. Operator must rename both platform listings.

**CRITICAL - `areaServed` missing "Westland" in homepage schema**
`src/app/[locale]/page.tsx:83`
Homepage `areaServed` has 6 values; `constants.ts:44` lists 7. "Westland" is absent. One-line fix.

**HIGH - No Monday-closed `OpeningHoursSpecification` in any schema**
`src/app/[locale]/page.tsx:73-80`, all location pages, `src/app/[locale]/contact/page.tsx` (no OHS at all)
Only open days listed. Without an explicit closed-day spec, search engines may infer Monday as having unspecified hours, causing incorrect Knowledge Panel display.

**HIGH - No dedicated location pages for Voorburg, Leidschendam, or Westland**
`src/app/[locale]/` directory
Three of seven declared `serviceAreas` have no `page.tsx`. The footer `NEAR_YOU_LINKS` also does not link to these three areas. Per Whitespark 2026, dedicated service pages are the number 1 local organic ranking factor.

**HIGH - Halal certification body never named**
`src/app/[locale]/halal-food-den-haag/page.tsx:55-66`
"Certified halal suppliers" stated but no certifying body named. No `hasCredential` in schema.

**HIGH - Coordinates at 4 decimal places (11-metre precision)**
`src/lib/constants.ts:11`
`lat: 52.0583, lng: 4.2932` - Google recommends 5+ decimal places (1-metre precision) for restaurant-level accuracy. Fix: verify against GBP and update (approximately `52.05831, 4.29320`).

**HIGH - Schema `url` in homepage block points to root domain, not locale-specific URL**
`src/app/[locale]/page.tsx:60`
`url: 'https://chopras.nl'` is the bare root. The canonical for the EN homepage is `https://chopras.nl/en`. Disconnect between schema `url` and `alternates.canonical`.

**MEDIUM - No "Write a Google Review" deeplink anywhere**
No page contains `https://search.google.com/local/writereview?placeid=PLACE_ID`. Requires operator to supply GBP Place ID.

**MEDIUM - No Dutch Tier 1 citation directory listings in `sameAs`**
`src/app/[locale]/page.tsx:91-97`
`sameAs` contains TripAdvisor, Google Maps, Facebook, Instagram, YouTube. No Yelp.nl, ANWB, Nationale Bedrijvengids, Goudengids.nl, or Thuisafgehaald.

**MEDIUM - Contact page schema missing `openingHoursSpecification` and `areaServed`**
`src/app/[locale]/contact/page.tsx:40-63`
The contact page is typically the highest-traffic local landing page yet its schema omits hours, area served, servesCuisine, and suitableForDiet.

**LOW - Maps embed on contact page hidden on mobile**
`src/app/[locale]/contact/page.tsx:196`
`hidden lg:block` makes the embed invisible on mobile. Google crawls mobile-first. A mobile-visible embed would strengthen the GBP signal.

**LOW - Maps embed URL does not use CID-based place ID**
`src/app/[locale]/contact/page.tsx:198`
Embed targets an address query string, not a verified GBP place ID. Using the `!1s` parameter pins the embed to the verified listing.

---

## 8. On-Page SEO - Score: 75 / 100  (prior: 72, +3)

### What Improved
- Checkout and order-confirmation now have `robots: noindex` (no transactional pages in index)
- SearchAction removed (eliminates Rich Results Test failure signal)
- Blog related posts locale-filtered (no more cross-locale broken links)
- Blog author attribution in schema
- Author visible in JSON-LD (but not as a rendered HTML byline)

### Issues

**HIGH - `hasMenu` URL is not locale-aware**
`src/app/[locale]/page.tsx:81`
See Technical section. Affects every visitor landing on either locale homepage.

**MEDIUM - Blog hreflang `x-default` incorrect for NL-only posts**
`src/app/[locale]/blog/[slug]/page.tsx:29`
`x-default` points to `/en/blog` (listing page) for Dutch posts. Should point to the NL post URL or be omitted.

**MEDIUM - No visible author byline on blog articles**
`src/app/[locale]/blog/[slug]/page.tsx`
Author is in JSON-LD only. QRG Experience dimension requires a visible, human-attributable byline in the rendered HTML.

**MEDIUM - Hardcoded English allergen string on `/nl/menu`**
`src/app/[locale]/menu/page.tsx:110`
Dutch visitors see an English string ("Allergen information available on request") embedded inside a localised page.

**LOW - Heading hierarchy on location pages**
`src/app/[locale]/indian-restaurant-rijswijk/page.tsx:174`
"Also Near Den Haag" section is H2 but is logically a subsection. Change to H3.

---

## CLAUDE.md Compliance

| Rule | Status |
|---|---|
| No em dashes | PASS - violations in MeetTheFounder.tsx fixed |
| No contractions | PASS - no contractions found in audited files |
| App Router only | PASS |
| Data in /src/lib files | FAIL - schema.ts is `// placeholder`; schema inline in 15+ page files |
| Next.js Image always | PASS |
| Server Components by default | PARTIAL FAIL - many sections are `'use client'` for `useInView` only |
| TypeScript strict | PASS - no `any` types found |
| Never hardcode restaurant data | FAIL - `aggregateRating` hardcoded in 15+ files; logo URL hardcoded in constants.ts as broken CDN path |
| Never use inline styles | FAIL - `HeroSection.tsx:107-110` uses inline `style` prop |

---

## What Is Already Working Well

- Clean i18n architecture with hreflang and x-default correctly set on every page
- 18 legacy redirects all 308ing to locale-prefixed URLs, no chains
- HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all now set
- Checkout and order-confirmation correctly noindexed and disallowed in robots.txt
- Halal landing page is genuinely above-average for both GEO and local SEO
- Blog content is high-quality, specific, and non-generic
- Static generation means AI crawlers read all content without JS
- llms.txt present, well-structured, RSL 1.0 licensed, with entity disambiguation
- All major AI crawlers explicitly allowed in robots.txt (including OAI-SearchBot)
- No third-party scripts loading anywhere (significant TBT benefit)
- AVIF/WebP image formats, font subsetting, `next/image` throughout
- BlogPosting schema now has correct author attribution
- Homepage Restaurant entity now has consistent `@id`
