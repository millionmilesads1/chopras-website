# SEO Action Plan - Chopras Indian Restaurant
**Generated:** 2026-04-05 | **Overall Score:** 73/100  (prior: 68/100, +5)
**Full findings:** FULL-AUDIT-REPORT.md

---

## Critical - Fix Immediately (blocks rankings or causes active harm)

### C1 - Replace the 240-frame canvas hero
**File:** `src/components/sections/HeroSection.tsx`
**Impact:** LCP, INP, network - the single biggest ranking risk on the site. Unchanged from prior audit.
**What to do:** Replace the scroll-scrubbed canvas animation (240 JPEGs, 14 MB) with either:
- A single `<Image priority sizes="100vw" />` for the hero image, or
- A `<video autoPlay muted loop playsInline poster="/images/hero-poster.jpg">` (2-4 MB equivalent)
If the scroll animation effect must be kept, at minimum: load frames 2-240 only after the `load` event and use a static `<Image priority>` as the visible placeholder during the load window. The canvas element is not a valid LCP candidate and 240 simultaneous network requests saturate bandwidth from byte zero. Also remove the inline `style` prop on the gradient overlay (CLAUDE.md rule violation) and replace with a Tailwind gradient class.

### C2 - Fix `RESTAURANT.logo` URL in constants.ts
**File:** `src/lib/constants.ts:31`
**Impact:** Resolves broken schema logo on all Restaurant entities across the site; single-line change; propagates everywhere
**What to do:** Change:
```typescript
logo: 'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
```
to:
```typescript
logo: 'https://chopras.nl/logo.png',
```
Then update `src/app/[locale]/page.tsx` lines 59 and 99 to use `RESTAURANT.logo` instead of the hardcoded WordPress URL. Once `schema.ts` factory is implemented (C5), all pages will pull from this constant automatically.

### C3 - Create the missing OG image file
**File:** `public/og/home-og.jpg` (does not exist)
**Impact:** Every page and blog post currently serves a 404 to AI crawlers, social scrapers, and Google Rich Results validator
**What to do:**
1. Create the `public/og/` directory
2. Add a 1200x630 px `home-og.jpg` (restaurant photo or branded image)
3. Verify `src/app/[locale]/page.tsx` OG metadata references `/og/home-og.jpg` correctly
4. As a follow-up, add per-post OG images to `blog-data.ts` and update `blog/[slug]/page.tsx:67`

### C4 - Fix Thuisbezorgd and Uber Eats business name (operator action required)
**File:** `src/app/[locale]/indian-takeaway-den-haag/page.tsx:92-95`, `src/app/[locale]/menu/page.tsx:143`
**Impact:** Local pack rankings - NAP mismatch is an active ranking suppressor; live conversion leak
**What to do:**
1. Operator must log into both Thuisbezorgd and Uber Eats dashboards and update business name to "Chopras Indian Restaurant"
2. Obtain the new correct URLs from both platforms
3. Update the hrefs in `indian-takeaway-den-haag/page.tsx:92-95` and `menu/page.tsx:143`

### C5 - Implement schema.ts factory (violates CLAUDE.md architecture)
**File:** `src/lib/schema.ts` (currently `// placeholder`)
**Impact:** Centralises all schema; eliminates 15+ hardcoded `aggregateRating` blocks; enables single-source updates
**What to do:** Implement a central schema factory with at minimum:
- `restaurantSchema(locale, overrides?)` - includes consistent `@id`, `url` using locale, all required fields from `RESTAURANT` constant including `aggregateRating` from a central config value
- `breadcrumbSchema(items)` - BreadcrumbList
- `faqPageSchema(faqs)` - FAQPage
- `blogPostingSchema(post, locale)` - BlogPosting with correct logo URL, per-post OG image
- `websiteSchema(locale)` - WebSite with `@id`, `inLanguage`, no SearchAction
- `personSchema(options)` - Person with `@id: 'https://chopras.nl/#arun-chopra'`
Then replace inline schema objects across all 15+ page files with imports from `schema.ts`. The `aggregateRating` should be a single config value in `constants.ts` updated in one place.

---

## High - Fix Within One Week

### H1 - Add `'Westland'` to homepage `areaServed` schema
**File:** `src/app/[locale]/page.tsx:83`
**Effort:** 1 minute
Add `'Westland'` to the `areaServed` array. Westland is listed in `constants.ts:44` serviceAreas but absent from the schema array. Once `schema.ts` factory is implemented, this is resolved automatically via `RESTAURANT.serviceAreas.map(...)`.

### H2 - Fix logo URL in homepage schema to use `public/logo.png`
**Files:** `src/app/[locale]/page.tsx:59,99`
**Effort:** 2 minutes
Change both `image` and `logo` references from the WordPress CDN URL to `RESTAURANT.logo` (after C2 is done) or directly to `'https://chopras.nl/logo.png'`. The `public/logo.png` file already exists.

### H3 - Make `hasMenu` URL locale-aware
**File:** `src/app/[locale]/page.tsx`
**Effort:** 5 minutes
The `restaurantSchema` object is declared at module level and cannot access `locale`. Move the schema object inside the `LocaleHomePage` component function and change:
```typescript
hasMenu: 'https://chopras.nl/menu'
```
to:
```typescript
hasMenu: `${SITE_URL}/${locale}/menu`
```
Apply the same fix to `src/app/[locale]/butter-chicken-den-haag/page.tsx:43` and any other landing pages with a `hasMenu` property.

### H4 - Add Monday-closed `OpeningHoursSpecification` to all schemas
**Files:** `src/app/[locale]/page.tsx`, `contact/page.tsx`, `indian-restaurant-rijswijk/page.tsx`, `...delft...`, `...zoetermeer...`
**Effort:** 10 minutes
Add to the `openingHoursSpecification` array in every Restaurant schema:
```typescript
{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday'], opens: '00:00', closes: '00:00' }
```
Note: `contact/page.tsx` currently has no `openingHoursSpecification` at all - add the full spec there too.

### H5 - Add `@id` to contact and catering page Restaurant schemas
**Files:** `src/app/[locale]/contact/page.tsx:40`, `src/app/[locale]/catering/page.tsx:44`
**Effort:** 5 minutes
Add `'@id': 'https://chopras.nl/#restaurant'` to both blocks. This enables Google to treat all three Restaurant schema blocks as the same entity.

### H6 - Change FoodEstablishment to Restaurant on catering page
**File:** `src/app/[locale]/catering/page.tsx:46`
**Effort:** 1 minute
Change `'@type': 'FoodEstablishment'` to `'@type': 'Restaurant'`.

### H7 - Add `@id` and `sameAs` to Arun Chopra Person schema
**File:** `src/app/[locale]/page.tsx:124-132`, `src/app/[locale]/blog/[slug]/page.tsx:58`
**Effort:** 10 minutes
In the standalone Person block on the homepage, add:
```typescript
'@id': 'https://chopras.nl/#arun-chopra',
sameAs: ['https://www.linkedin.com/in/arun-chopra'], // obtain real URL from operator
```
Apply the same `@id` to the author object in the BlogPosting schema. This allows Google to consolidate all Person references into one Knowledge Graph node.

### H8 - Add CSP header to `next.config.mjs`
**File:** `next.config.mjs`
**Effort:** 10 minutes
Start with a report-only policy to identify violations before enforcing:
```javascript
{ key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com https://maps.google.com;" }
```
Once violations are resolved, change to `Content-Security-Policy`.

### H9 - Add visible author byline to blog posts
**File:** `src/app/[locale]/blog/[slug]/page.tsx`
**Effort:** 10 minutes
Add a visible byline in the article header section. Example:
```tsx
<p className="text-white/60 text-sm">By Arun Chopra, Founder</p>
```
Ideally wire this to a `post.author` field once `blog-data.ts` is updated (see H10).

### H10 - Add `author` field to BlogPost type and data
**Files:** `src/lib/blog-data.ts`, `src/types/index.ts` (if exists)
**Effort:** 15 minutes
Add `author: string` to the `BlogPost` type. Populate all 10 posts with `'Arun Chopra'`. Wire to both the visible byline (H9) and the BlogPosting schema `author.name`.

### H11 - Fix homepage schema `url` field to use locale-specific URL
**File:** `src/app/[locale]/page.tsx:60`
**Effort:** 2 minutes (requires schema to be inside component - see H3)
Change `url: 'https://chopras.nl'` to `url: \`${SITE_URL}/${locale}\`` to match the canonical declared in `generateMetadata`.

### H12 - Increase coordinate precision to 5 decimal places
**File:** `src/lib/constants.ts:11`
**Effort:** 2 minutes (verify coordinates against GBP first)
Change `lat: 52.0583, lng: 4.2932` to 5 decimal places (approximately `lat: 52.05831, lng: 4.29320`). Verify exact values against GBP dashboard coordinates. Propagates to all location page schemas automatically since they import `RESTAURANT.address.coordinates`.

### H13 - Add dedicated location pages for Voorburg, Leidschendam, and Westland
**What to do:** Create three new pages following the pattern at `src/app/[locale]/indian-restaurant-rijswijk/page.tsx`. Each needs unique local content, the practical info cards grid, cross-links to other area pages, and a Google Maps embed. Add each new slug to `sitemap.ts`. Update `Footer.tsx` `NEAR_YOU_LINKS` array to include all three.

### H14 - Add `Cache-Control` header for `/public/images/`
**File:** `next.config.mjs`
**Effort:** 5 minutes
Add a second headers rule:
```javascript
{
  source: '/images/(.*)',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
  ],
}
```
This prevents repeat visitors re-downloading the 14 MB hero frame set on every visit.

---

## Medium - Fix Within One Month

### M1 - Add halal certification body name
**File:** `src/app/[locale]/halal-food-den-haag/page.tsx`, `src/lib/faq-data.ts`
Name the actual Dutch halal certifier (HFC, HQC, ISWA Netherlands, or the body actually used). Add to visible content and as `hasCredential` or `additionalProperty` in schema. This is the single most impactful trust improvement for the halal audience segment.

### M2 - Add `Content-Security-Policy` (enforce after report-only phase)
**File:** `next.config.mjs`
After resolving violations from the report-only header (H8), switch to enforced CSP.

### M3 - Expand biryani and tandoori pages to remove thin content
**Files:** `src/app/[locale]/biryani-den-haag/page.tsx`, `src/app/[locale]/tandoori-den-haag/page.tsx`
Both need 800+ words of editorial content:
- Biryani: add visible FAQ section (FAQ schema already exists at lines 59-68 but is not rendered as HTML)
- Tandoori: add a third editorial section on tandoor history or technique plus a rendered FAQ section

### M4 - Add privacy policy and cookie policy pages
Required under GDPR. Create `src/app/[locale]/privacy/page.tsx`. Link from footer in both `en.json` and `nl.json`. The site collects personal data via multiple GHL forms.

### M5 - Fix blog hreflang `x-default` for Dutch-only posts
**File:** `src/app/[locale]/blog/[slug]/page.tsx:29`
When `post.language === 'nl'`, change `x-default` from `/en/blog` (listing) to the NL post URL.

### M6 - Add `updatedAt` field to BlogPost type and surface in schema
**Files:** `src/lib/blog-data.ts`, `src/app/[locale]/blog/[slug]/page.tsx:57`
Add optional `updatedAt?: string` to BlogPost. Use it as `dateModified` when present. Without this, any content update is invisible to crawlers.

### M7 - Centralise `aggregateRating` in `constants.ts`
**File:** `src/lib/constants.ts`
Add `rating: { value: '4.7', count: 83 }` and import into all schema blocks. Updates propagate from one file. Resolved automatically once schema.ts factory is implemented (C5).

### M8 - Complete contact page schema
**File:** `src/app/[locale]/contact/page.tsx:40-63`
Add `openingHoursSpecification` (both open days and Monday-closed), `areaServed`, `servesCuisine`, and `suitableForDiet`. The contact page is typically the highest-traffic local landing page and deserves complete schema.

### M9 - Fix allergen string localisation on menu page
**File:** `src/app/[locale]/menu/page.tsx:110`
Move the hardcoded "Allergen information available on request" string into `en.json` and `nl.json` and use `tr.menu.allergenRequest` (or equivalent key).

### M10 - Remove `blur-sm` from scroll animations
**Files:** `src/components/sections/WhySection.tsx:65`, `StorySection.tsx:21,60`, `FeaturedDishes.tsx`, and all other animated sections
Replace `opacity-0 translate-y-8 blur-sm` / `opacity-100 translate-y-0 blur-none` with `opacity-0 translate-y-8` / `opacity-100 translate-y-0`. `filter: blur()` forces repaint on every animation frame.

### M11 - Add `priority` prop to StorySection above-fold image
**File:** `src/components/sections/StorySection.tsx:27-33`
Add `priority` to the `<Image>` component to suppress `loading="lazy"` and inject a preload hint.

### M12 - Audit and rewrite homeFaqs content
**File:** `src/lib/faq-data.ts:3-128`
- Fix American English spellings ("flavors" to "flavours", "cozy", "recognized")
- Remove or verify: "Kids Menu with surprise toys" (line 18-19), loyalty programme claims (lines 86-91), Bingo/Tambola claims
- Add gluten-free cross-contamination caveat (line 38)

### M13 - Add `WebSite` schema `@id` and `inLanguage`
**File:** `src/app/[locale]/layout.tsx:55-60`
```typescript
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://chopras.nl/#website',
  name: 'Chopras Indian Restaurant',
  url: 'https://chopras.nl',
  inLanguage: params.locale,
}
```
Move inside the layout component to access `params.locale`.

### M14 - Remove deprecated fields from sitemap
**File:** `src/app/sitemap.ts`
Remove `priority` and `changeFrequency` from all entries. Google ignores both. Simplify the staticPages type.

### M15 - Set individual `lastmod` dates on static sitemap entries
**File:** `src/app/sitemap.ts`
Replace the single hardcoded `'2026-04-03'` with per-page dates reflecting actual last-edit dates.

### M16 - Normalise `servesCuisine` across all schemas
**File:** `src/app/[locale]/indian-buffet-den-haag/page.tsx`
Change `servesCuisine: 'Indian'` (string) to `servesCuisine: ['North Indian', 'Indian Street Food']` (array) to match all other pages.

### M17 - Optimise `/public/images/` raw asset sizes
**Directory:** `public/images/` (361 MB on disk)
Files in `/public` bypass Next.js image optimisation. Run all restaurant PNGs and catering images through ImageMagick or Squoosh to reduce file sizes. Consider moving images used only via `<Image>` component to a separate directory where the optimisation pipeline applies automatically.

### M18 - Use Next.js automatic icon detection
**File:** `src/app/[locale]/layout.tsx:44-48`
Replace the hardcoded `icons: { icon: '/logo.png', apple: '/logo.png', shortcut: '/logo.png' }` with Next.js's automatic detection. Move `src/app/icon.png` (already in repo) and `src/app/apple-icon.png` (already in repo) to `src/app/[locale]/` or `src/app/` and remove the manual `icons` metadata entirely.

---

## Low - Backlog

### L1 - Add `rootMargin` to `useInView` hook
**File:** `src/hooks/useInView.ts:4`
Add `rootMargin: '0px 0px -50px 0px'` to the IntersectionObserver options to pre-trigger animations before elements fully enter the viewport.

### L2 - Create dedicated /about page for Arun Chopra entity
**What to do:** Create `src/app/[locale]/about/page.tsx` with a founder bio, photo, the Person schema with `@id: 'https://chopras.nl/#arun-chopra'`, and links to press coverage. Gives AI systems a stable URL for the entity.

### L3 - Add Wikidata entry for Chopras Indian Restaurant
Create a Wikidata item and add the Wikidata URI to the `sameAs` array in the Restaurant schema. Wikidata is a primary entity resolution source for ChatGPT and Google Knowledge Graph.

### L4 - Add "Write a Google Review" CTA
**File:** `src/components/sections/ReviewsSection.tsx`
Replace the generic Maps place link with the write-a-review deeplink: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`. Obtain Place ID from GBP dashboard.

### L5 - Add Dutch local directory citations
Create verified listings on Yelp.nl, Nationale Bedrijvengids, ANWB, and Goudengids.nl. Once claimed, add the profile URLs to the `sameAs` array in `constants.ts` (and from there to `schema.ts` once the factory is implemented).

### L6 - Centralise social links in `constants.ts`
**File:** `src/lib/constants.ts`
Add Facebook, Instagram, and YouTube to `RESTAURANT.social`. Currently scattered across `sameAs` arrays in 14+ page files.

### L7 - Implement IndexNow
Create an `indexnow.txt` key file in `/public/` and add an API call to the IndexNow endpoint on content publish events. Supported by Bing and Yandex for near-instant re-crawl.

### L8 - Add LinkedIn URL to Person schema and llms.txt
Obtain Arun Chopra's LinkedIn URL. Add to Person `sameAs` array (H7) and to `public/llms.txt` Social section.

### L9 - Block CCBot (training crawler) in robots.txt
Add `User-agent: CCBot` / `Disallow: /` to `public/robots.txt` if the intent is to permit AI search but restrict training dataset collection.

### L10 - Add trailing slashes to robots.txt disallow paths
**File:** `public/robots.txt:5-8`
Change `/en/checkout` to `/en/checkout/` for all four disallow lines. Defence in depth alongside the existing noindex metadata.

### L11 - Verify geo coordinates to 5 decimal places
**File:** `src/lib/constants.ts:11`
Verify exact coordinates against GBP listing and update to 5 decimal places (see H12).

### L12 - Fix H2/H3 heading hierarchy on location pages
**File:** `src/app/[locale]/indian-restaurant-rijswijk/page.tsx:174` (and equivalent on delft/zoetermeer)
"Also Near Den Haag" section should be H3 not H2.

### L13 - Add `rootMargin` to Maps embed on contact page for mobile
**File:** `src/app/[locale]/contact/page.tsx:196`
Change `hidden lg:block` to a mobile-visible layout (e.g. smaller height on mobile). Google crawls mobile-first.

### L14 - Add per-post OG images to blog posts
**File:** `src/app/[locale]/blog/[slug]/page.tsx:67`, `src/lib/blog-data.ts`
Add an optional `ogImage` field to the `BlogPost` type. Populate per post, or use the `opengraph-image.tsx` dynamic generation pattern.

### L15 - Add internal cross-links between dish pages and blog posts
- Halal page -> wedding catering page (mentions Nikah/Walima in FAQ)
- Wedding catering page -> party venue page (mentions Sangeet nights)
- Blog post `best-indian-restaurant-den-haag` -> `butter-chicken-den-haag` landing page
- Blog post `halal-indian-restaurant-den-haag` -> `halal-food-den-haag` landing page

---

## Already Fixed in This Audit Cycle

| Fix | File | Details |
|---|---|---|
| SearchAction removed | `src/app/[locale]/layout.tsx` | `potentialAction` block fully removed from WebSite schema |
| Both fonts `display: swap` | `src/app/[locale]/layout.tsx` | Cormorant and DM Sans both confirmed `display: 'swap'` |
| `adjustFontFallback` removed | `src/app/[locale]/layout.tsx` | Restores automatic size-adjusted fallback, reduces CLS |
| HSTS + 4 security headers | `next.config.mjs` | HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Checkout noindex | `src/app/[locale]/checkout/layout.tsx` | `robots: { index: false, follow: false }` |
| Order-confirmation noindex | `src/app/[locale]/order-confirmation/layout.tsx` | `robots: { index: false, follow: false }` |
| robots.txt disallow rules | `public/robots.txt` | All 4 checkout/order-confirmation paths disallowed |
| OAI-SearchBot added | `public/robots.txt` | Explicitly allowed |
| Ghost sitemap entry removed | `src/app/sitemap.ts` | `sitemap-page` slug removed |
| Em dash violations | `src/components/home/MeetTheFounder.tsx` | All `&mdash;` removed per CLAUDE.md rule |
| Blog locale filtering | `src/app/[locale]/blog/[slug]/page.tsx` | Related posts now filtered by `p.language === locale` |
| Blog author attribution | `src/app/[locale]/blog/[slug]/page.tsx` | Arun Chopra added to BlogPosting author |
| Tandoor temperature | `src/i18n/en.json`, `nl.json` | storyP4 now says "around 400 degrees C" consistently |
| RSL 1.0 license | `public/llms.txt` | `> License: RSL 1.0` line added |
| Logo file | `public/logo.png` | File now exists; referenced in layout icons |
