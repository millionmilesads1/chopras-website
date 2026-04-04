# SEO Action Plan — Chopras Indian Restaurant (chopras.nl)

**Generated:** 2026-04-03 | **Overall Score:** 63/100  
**Reference:** FULL-AUDIT-REPORT.md for detailed findings and code samples

---

## CRITICAL — Fix Before Launch (blocks indexing or causes penalties)

### C1 — Fix JobPosting schema (expired validThrough + missing description)
**File:** `src/app/[locale]/vacancy/page.tsx` lines 43, 50, 58  
**Why:** Google has already stopped showing the vacancy page in Jobs search. `validThrough: '2025-12-31'` is in the past. `description` is required by Google for rich results.  
**Fix:** Update all three JobPosting blocks:
- `datePosted: '2026-04-03'`
- `validThrough: '2026-12-31'`
- Add `description: "..."` field to each posting (2–3 sentences describing the role)

---

### C2 — Fix delivery platform brand name mismatch
**Files:** `src/app/[locale]/menu/page.tsx:122-133`, `src/app/[locale]/indian-takeaway-den-haag/page.tsx:58,61`  
**Why:** Thuisbezorgd and Uber Eats links point to "Red Fort Indian Street Food" — a different brand. This damages entity coherence for AI search, confuses customers, and is a conversion failure.  
**Fix:** Update the listing name on Thuisbezorgd and Uber Eats to "Chopras Indian Restaurant", then update the URLs in both files to match.

---

### C3 — Fix blog locale duplicate content
**Files:** `src/app/[locale]/blog/[slug]/page.tsx:10-14`, `src/app/sitemap.ts:41-48`  
**Why:** Every blog post is served at both `/en/blog/[slug]` and `/nl/blog/[slug]` with identical content. Dutch posts served at English locale URLs are a content/locale mismatch.  
**Fix — `blog/[slug]/page.tsx` `generateStaticParams`:**
```ts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    locale: post.language,
    slug: post.slug,
  }))
}
```
**Fix — `sitemap.ts` blogPages block:**
```ts
const blogPages = blogPosts.map((post) => ({
  url: `${SITE_URL}/${post.language}/blog/${post.slug}`,
  lastModified: new Date(post.publishedAt),
  changeFrequency: 'monthly' as const,
  priority: post.language === 'en' ? 0.7 : 0.63,
}))
```

---

### C4 — Resolve indian-food-netherlands keyword cannibalization
**Files:** `src/lib/blog-data.ts` (slug `'indian-food-netherlands'`), `src/app/[locale]/indian-food-netherlands/page.tsx`  
**Why:** Two URLs target the same primary keyword. Google must choose which to rank, and both underperform as a result.  
**Fix:** Either (a) delete the blog post and add a redirect from `/[locale]/blog/indian-food-netherlands` → `/[locale]/indian-food-netherlands`, or (b) differentiate by angle — make the blog post a personal guide and the page an evergreen resource with distinct keyword focus.

---

### C5 — Create `public/og/` folder with OG images
**File:** `public/og/home-og.jpg` (and others below)  
**Why:** The OG image is declared in metadata but the file does not exist — every social share produces a blank card.  
**Fix:** Create `public/og/` and add at minimum:
1. `home-og.jpg` (1200×630) — Indian restaurant interior, warm saffron/navy tones
2. `catering-og.jpg` (1200×630) — elegant Indian catering spread for events
3. `menu-og.jpg` (1200×630) — overhead flat-lay of signature dishes

**Prompt for home-og.jpg:** "Warm atmospheric Indian restaurant interior. Deep navy (#1B2B5E) and saffron gold (#D4AF37) colour palette. Candlelit tables, glimpse of tandoor, welcoming. Photorealistic. 1200x630px."

---

### C6 — Fix Google Maps embed Place ID
**File:** `src/components/sections/LocationSection.tsx:27`  
**Why:** The iframe uses `0x0:0x0` as the Place ID — it is not connected to the real Google Business Profile.  
**Fix:** Retrieve the real Place ID from Google Business Profile dashboard → Info tab → "Add profile short name" → copy the Place ID. Replace `0x0%3A0x0` in the iframe URL with the real Place ID.

---

### C7 — Fix `acceptsReservations` type error
**File:** `src/app/[locale]/page.tsx:76`  
**Why:** `acceptsReservations: 'True'` (string) is invalid per schema.org. Should be boolean `true`.  
**Fix:** Change `acceptsReservations: 'True'` → `acceptsReservations: true`

---

## HIGH — Fix Within One Week (significant ranking impact)

### H1 — Fix root redirect: 307 → 308 (Permanent)
**Files:** `src/app/page.tsx`, `src/middleware.ts:28`  
**Why:** Temporary redirect does not consolidate PageRank. One-word change.
```ts
// src/app/page.tsx
import { permanentRedirect } from 'next/navigation'
export default function RootPage() { permanentRedirect('/en') }

// src/middleware.ts line 28
return NextResponse.redirect(new URL(`/en${pathname === '/' ? '' : pathname}`, request.url), 308)
```

---

### H2 — Add security headers
**File:** `next.config.mjs`  
**Why:** No X-Frame-Options, X-Content-Type-Options, Referrer-Policy set. Flagged by security audits.
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

---

### H3 — Fix hero video LCP
**File:** `src/components/sections/HeroSection.tsx`  
**Why:** No `poster` attribute = black frame until video decodes = unpredictable LCP. HIGH CWV risk.
1. Add `poster="/images/hero/hero-poster.webp"` to the `<video>` tag
2. Change `preload="auto"` → `preload="none"` (video still autoplays; avoids competing with LCP)
3. Remove `style={{ willChange: 'transform' }}` (inline style violates CLAUDE.md, provides no benefit)
4. Add a mobile hero `<Image>` with `priority` visible only on small screens (`md:hidden`)

---

### H4 — Fix opening hours discrepancy
**File:** `src/lib/faq-data.ts` (hours FAQ answer)  
**Why:** FAQ answer says "4:30 PM to 10:30 PM" but schema/constants say 15:00–22:00. AI systems will cite conflicting information.  
**Fix:** Determine actual opening time (15:00 or 16:30), update `faq-data.ts` and `constants.ts` to match.

---

### H5 — Add `aggregateRating` and `sameAs` to homepage schema
**File:** `src/app/[locale]/page.tsx:53-78`  
**Why:** `aggregateRating` is required for star display in local pack and AI Overviews. `sameAs` enables entity disambiguation by AI systems.  
**Fix:** Add to `restaurantSchema` object:
```ts
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.7',      // use actual Google rating
  reviewCount: '83',       // use actual review count from GBP
  bestRating: '5',
  worstRating: '1',
},
sameAs: [
  RESTAURANT.social.tripadvisor,
  // add Google Maps URL, Facebook, Instagram when available
],
suitableForDiet: 'https://schema.org/HalalDiet',
logo: RESTAURANT.logo,
'@id': 'https://chopras.nl/#restaurant',
```

---

### H6 — Fix blog locale mismatch in blog index
**File:** `src/app/[locale]/blog/page.tsx`  
**Why:** Blog listing shows all posts regardless of locale — Dutch posts appear at `/en/blog/`.  
**Fix:** Filter `blogPosts` by `post.language === locale` before rendering the post grid.

---

### H7 — Create `public/llms.txt`
**File:** `public/llms.txt` (new file)  
**Why:** No structured identity signal for AI crawlers. This is the single highest-leverage GEO action.  
**Content to write:**
```
# Chopras Indian Restaurant — llms.txt
# https://chopras.nl

## Identity
Chopras Indian Restaurant is an authentic North Indian restaurant at
Leyweg 986, 2545 GW Den Haag, Netherlands. Opened 2023.
Telephone: +31 6 30645930. Email: info@chopras.nl.

## What We Are
Fully halal-certified Indian restaurant specialising in North Indian cuisine,
Indian street food (chaat), tandoori dishes, biryani, and Indo-Chinese food.
Vegetarian and vegan options available. Serves Den Haag, Rijswijk, Delft,
Zoetermeer, Voorburg and Leidschendam.

## Key Facts
- Halal: All meat sourced from certified halal suppliers. Entire kitchen is halal.
- Hours: Tue–Fri 15:00–22:00, Sat–Sun 13:00–22:00. Monday closed.
- Price: EUR 20–30 per person average.
- Parking: Free at Leyweg.
- Delivery: Thuisbezorgd and Uber Eats within 5 km.
- Events: Private hall for 25–80 guests. Weddings, corporate, Diwali, Eid.

## Signature Dishes
Butter Chicken, Chopras Special Paneer, Mutton Rogan Josh, Soya Chaap,
Mixed Chaat Platter, Chicken Tikka, Dal Makhani, Lamb Biryani, Pani Puri.

## Important Pages
- EN: https://chopras.nl/en
- NL: https://chopras.nl/nl
- Menu: https://chopras.nl/en/menu
- Halal info: https://chopras.nl/en/halal-food-den-haag
- Catering: https://chopras.nl/en/catering
- Contact: https://chopras.nl/en/contact

## Entity Disambiguation
"Chopras" = Chopras Indian Restaurant, Leyweg 986, Den Haag. Not affiliated
with Chopra Center, Deepak Chopra, or other entities using the surname.

## Citation Policy
Factual information (address, hours, menu, halal status) may be freely cited.
Blog excerpts may be used with attribution.
```

---

### H8 — Implement `schema.ts` factory
**File:** `src/lib/schema.ts`  
**Why:** Empty placeholder violates CLAUDE.md rule "All schema markup generated through /src/lib/schema.ts". All schema is duplicated across 20+ files with inconsistent properties.  
**Fix:** Build a `buildRestaurantSchema(overrides?)` function that returns the complete, correct Restaurant schema from `RESTAURANT` constants. Import into all page files instead of duplicating inline.

---

### H9 — Fix vacant page contact self-link
**File:** `src/app/[locale]/contact/page.tsx:192`  
**Why:** "Reserve a Table" card links back to the current page (`${base}/contact`).  
**Fix:** Change to `${base}/contact#contact-form` or `tel:${RESTAURANT.contact.phone}`.

---

### H10 — Add dish images for top menu items
**Files:** `src/lib/menu-data.ts` (add `image` field), `src/components/sections/FeaturedDishes.tsx`  
**Priority order:** Butter Chicken → Chicken Biryani → Paneer Butter Masala → Mutton Rogan Josh  
**Image prompts:**
- Butter Chicken: "Authentic butter chicken in dark clay bowl, rich orange-red sauce, cream swirl, coriander garnish, warm studio lighting, dark background. 800x600px."
- Chicken Biryani: "Aromatic chicken biryani in brass handi with lid partially open, saffron rice, caramelised onions, fresh mint. 800x600px."

---

## MEDIUM — Fix Within One Month (optimization opportunities)

### M1 — Populate `schema.ts` with consistent Restaurant schema
Move all inline schema creation to the shared factory, fixing these across all pages simultaneously:
- Change `FoodEstablishment` → `Restaurant` on catering page
- Standardize `@type: 'Restaurant'` on all location pages (remove `'LocalBusiness'` from array)
- Add `@id: 'https://chopras.nl/#restaurant'` to all blocks
- Add `hasMap` to homepage and contact page schema

---

### M2 — Upgrade blog post Article schema to BlogPosting
**File:** `src/app/[locale]/blog/[slug]/page.tsx`  
Change `@type: 'Article'` → `@type: 'BlogPosting'`. Add:
- `dateModified` (same as `datePublished` if no update tracking)
- `image` property (use the post's OG image or a placeholder until blog images exist)
- `mainEntityOfPage: { "@type": "WebPage", "@id": "<article-url>" }`
- `publisher.logo` as `ImageObject` using `RESTAURANT.logo`

---

### M3 — Add FAQPage schema to programmatic pages
Pages with FAQ sections that need FAQPage JSON-LD added:
- `butter-chicken-den-haag/page.tsx`
- `halal-food-den-haag/page.tsx`
- `indian-wedding-catering-den-haag/page.tsx`
- `corporate-events-den-haag/page.tsx`
- `party-venue-den-haag/page.tsx`
- `catering/page.tsx`

---

### M4 — Fix sitemap `lastModified` for static pages
**File:** `src/app/sitemap.ts`  
Replace `lastModified: new Date()` with hardcoded ISO strings. Inaccurate `lastmod` causes Google to stop trusting the field.
```ts
const staticSlugs = [
  { slug: '', priority: 1.0, changeFrequency: 'weekly' as const, lastMod: '2026-04-01' },
  { slug: 'menu', priority: 0.9, changeFrequency: 'monthly' as const, lastMod: '2026-03-01' },
  // ...
]
// In the map: lastModified: new Date(slug.lastMod)
```

---

### M5 — Fix blog locale metadata (`<a>` → `<Link>` + body link paths)
**Files:** Multiple  
1. Replace `<a href={...}>` with `<Link href={...}>` for internal CTAs in `page.tsx:243`, `blog/[slug]/page.tsx:124`, `menu/page.tsx:115`
2. Update locale-less links in `src/lib/blog-data.ts` (`/menu` → `https://chopras.nl/en/menu`, etc.)

---

### M6 — Add named chef/owner to homepage
**Files:** `src/i18n/en.json`, `src/i18n/nl.json`  
Expand `storyP1-3` to 250–300 words. Include: founding year, named founder/head chef, culinary background, specific practice that defines the kitchen. Add a `Person` schema node linked from Restaurant schema.

---

### M7 — Expand homepage story section
**File:** `src/i18n/en.json`  
Current ~110 words is below the potential of the layout. Target 250–300 words. Replace the "Restaurant Photo" placeholder div with a real `<Image>` component.

---

### M8 — Add WebSite schema to locale layout
**File:** `src/app/[locale]/layout.tsx`  
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chopras Indian Restaurant",
  "url": "https://chopras.nl",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://chopras.nl/en/menu?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

### M9 — Fix image optimization config
**File:** `next.config.mjs`  
```js
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 2592000,
  remotePatterns: [/* existing */],
},
poweredByHeader: false,
```

---

### M10 — Remove unused `framer-motion` dependency
```sh
pnpm remove framer-motion
```
Potential savings: ~30 kB gzipped from shared JS chunk.

---

### M11 — Add font metric overrides to reduce CLS
**File:** `src/app/[locale]/layout.tsx`, `src/styles/globals.css`  
1. Add `adjustFontFallback: 'Georgia'` to `Cormorant_Garamond` config in layout
2. Change `DM_Sans` to `display: 'optional'`
3. Add `@font-face` override block in `globals.css` for the Georgia fallback

---

### M12 — Claim Dutch restaurant directories
Priority order:
1. **eet.nu** — largest Dutch restaurant directory (highest local SEO impact)
2. **Facebook Business Page** — also links Instagram; creates major citation node
3. **Zomato Netherlands** — strong Indian restaurant vertical
4. **Foursquare**

Ensure NAP on each matches `constants.ts` exactly.

---

### M13 — Add direct Google review link
**File:** `src/components/sections/ReviewsSection.tsx:39`  
Replace the search URL with a direct GBP review link (get from GBP → Get more reviews → copy link).

---

### M14 — Expand `indian-takeaway-den-haag` page content
**File:** `src/app/[locale]/indian-takeaway-den-haag/page.tsx`  
Current ~120 words. Add 600+ words covering: which dishes travel best, packaging approach, delivery times by area, ordering instructions.

---

### M15 — Fix stale blog post titles with hardcoded year
**File:** `src/lib/blog-data.ts:7,310`  
Remove "2025" from `metaTitle` and H1 fields, or implement dynamic current-year injection.

---

### M16 — Delete dead globals.css file
**File:** `src/app/globals.css`  
This file is never imported but contains conflicting `font-family: Arial` — a latent bug if ever accidentally referenced.

---

### M17 — Add `sizes` prop to FeaturedDishes images
**File:** `src/components/sections/FeaturedDishes.tsx`  
Add `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"` to all `<Image>` components in this file.

---

## LOW — Backlog (nice to have)

### L1 — Add `EventVenue` schema enhancements
**File:** `src/app/[locale]/party-venue-den-haag/page.tsx`  
Add `url`, `maximumAttendeeCapacity: 80`, and `amenityFeature` array.

---

### L2 — Add Monday closed to opening hours schema
Make the closed day explicit in schema with `opens: "00:00", closes: "00:00"` for Monday rather than relying on omission.

---

### L3 — Add image sitemap
Create `src/app/image-sitemap.xml/route.ts` returning XML with `<image:image>` entries for all dish photography. Declare in `public/robots.txt` as second `Sitemap:` directive.

---

### L4 — Raise location pages sitemap priority
**File:** `src/app/sitemap.ts`  
Change Rijswijk, Delft, Zoetermeer priority from `0.7` → `0.8` (they target higher-intent queries than blog posts).

---

### L5 — Add cross-links between location pages
Each city page should link to the other two under an "Also near Chopras" section.

---

### L6 — IndexNow implementation
Generate an IndexNow key, place `[key].txt` in `public/`, call the IndexNow API from a post-deploy GitHub Action.

---

### L7 — Add AI crawler explicit rules to robots.txt
Document the policy on GPTBot, Google-Extended, ClaudeBot, PerplexityBot in `public/robots.txt`. Currently all are allowed via wildcard — make it explicit.

---

### L8 — Add NL-language blog posts
At minimum: translate or write a Dutch version of "best Indian restaurant Den Haag" and "halal Indian restaurant Den Haag" posts. Dutch AI assistants need Dutch prose to cite for Dutch queries.

---

### L9 — Create About page
**New file:** `src/app/[locale]/about/page.tsx`  
600+ words covering founding story, named chef/owner, sourcing philosophy, and community connection. Becomes the primary E-E-A-T destination for internal linking.

---

## Summary Dashboard

| Priority | Count | Estimated Impact |
|----------|-------|-----------------|
| Critical | 7 | Blocks indexing / causes active penalties today |
| High | 10 | Significant ranking and visibility improvements |
| Medium | 17 | Measurable optimization within 1–4 weeks |
| Low | 9 | Incremental gains, backlog items |

**Estimated score after Critical + High fixes:** ~75/100  
**Estimated score after all fixes:** ~87/100
