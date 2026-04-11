---

# Chopras Indian Restaurant — Design System Rules
## These rules apply to EVERY page built on this website. No exceptions.

---

## BRAND COLORS

Primary gold: #C7A348
Primary gold hover: rgba(199, 163, 72, 0.3)
Primary gold subtle: rgba(199, 163, 72, 0.1)
Dark navy: #000066
Bright blue: #0000FF
White text primary: #FFFFFF
White text secondary: rgba(255, 255, 255, 0.7)
White text muted: rgba(255, 255, 255, 0.5)
Background light: #FFF8F4
Background cream: #F5F0EA

---

## TYPOGRAPHY

Hero H1:
- Font: Cormorant Garamond or the existing serif heading font
- Size: text-4xl to text-7xl responsive
- Weight: font-bold
- Color: white on dark backgrounds, #1B2B5E on light backgrounds
- Line height: leading-tight

H2 headings on homepage:
- Font: Great Vibes (script)
- Color: #C7A348 on light/cream backgrounds ONLY
- Color: text-white on dark blue or navy backgrounds — NEVER gold on blue
- Letter spacing: tracking-wide
- Line height: 1.4
- Always on ONE line — reduce font size if wrapping
- H2 headings on dark blue or navy backgrounds must be text-white — NEVER gold on blue

H2 headings on landing pages:
- Font: existing serif font (Cormorant Garamond)
- Color: #1B2B5E (dark navy) on light backgrounds
- Color: white on dark backgrounds

H3 subheadings:
- Font: sans-serif (DM Sans or existing)
- Weight: font-semibold
- Color: inherit from section

Body copy:
- Font: DM Sans or existing sans-serif
- Size: text-base (16px)
- Line height: leading-relaxed
- Color: #3A3A4A on light backgrounds, rgba(255,255,255,0.8) on dark

---

## EYEBROW / OVERLINE COMPONENT

Every page hero section MUST have an eyebrow label above the H1.

Design specification:
- Centered dot-separator pill format: "• TEXT •"
- Font: uppercase, tracking-widest, text-xs, font-medium
- Color: #C7A348 (gold)
- Glassmorphism pill container: rounded-full border, subtle gold tint background, backdrop blur
- Margin bottom: 16px (mb-4) before the H1, or 24px (mb-6) for full-screen hero sections
- Example from homepage: "• AUTHENTIC INDIAN RESTAURANT · DEN HAAG · EST. 2023 •"

How to implement on each page:
Use this EXACT component pattern including the full glassmorphism pill container:
<div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
  <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
    • [PAGE CATEGORY TEXT HERE] •
  </span>
</div>

For full-screen hero sections (video/canvas backgrounds), use mb-6 instead of mb-4 on the wrapper div.

NEVER use the lined format (h-px w-12 decorative lines) — that format is retired.
NEVER use Great Vibes script font for eyebrow labels.
NEVER use a plain div or span for an eyebrow without the glassmorphism pill container (rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm). Every eyebrow on every page must have the full pill container wrapper.

Eyebrow text per page type:
- Homepage: "• AUTHENTIC INDIAN RESTAURANT · DEN HAAG · EST. 2023 •"
- Menu page: "• OUR MENU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Dish pages: "• OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Catering pages: "• CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Location pages: "• NEAR YOU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Blog pages: "• BLOG · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Feestzaal / party venue pages: "• FEESTZAAL · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Halal/Vegan/Menu pages: "• MENU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Discover / best / family / netherlands pages: "• DISCOVER · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Vacancy: "• JOIN OUR TEAM · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- Contact: "• VISIT US · CHOPRAS INDIAN RESTAURANT · DEN HAAG •"
- MeetTheFounder component: "• MEET THE FOUNDER •"
- ReviewsSection component: "• WHAT OUR GUESTS SAY •"

---

## CTA BUTTONS — UNIFIED STYLE

There are TWO variants. Choose based on background color.

DARK VARIANT (use on dark/navy/video/image backgrounds):
className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]"

LIGHT VARIANT (use on white/cream/light backgrounds):
className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"

SOLID VARIANT (use for primary CTA / form submit buttons):
className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[#C7A348] px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-transparent hover:text-[#C7A348] active:scale-[0.98] min-h-[48px] cursor-pointer"

RULES:
- All buttons are pill shaped (rounded-full) — no square corners ever
- All buttons have border-2 border-[#C7A348] always
- Minimum height 48px for touch targets
- Font always uppercase tracking-wide text-sm
- Never use plain blue, green, or red buttons anywhere on the site

---

## HERO SECTION STRUCTURE — EVERY PAGE

Every page hero must follow this exact structure in order:

1. Eyebrow label (gold, uppercase, dot-separator pill format)
2. H1 heading (large, bold, serif)
3. Subtext paragraph (1-2 sentences max, describes the page)
4. CTA buttons row (2-4 buttons max)

On dark/image/video hero backgrounds:
- All text white
- Use DARK variant buttons
- Add dark overlay: bg-black/40 or bg-gradient-to-b from-black/50

On light/cream hero backgrounds:
- H1 in #1B2B5E
- Subtext in #3A3A4A
- Use LIGHT variant buttons

---

## INTERNAL LINKS IN BODY COPY

All contextual internal links in body copy:
className="text-[#D4AF37] hover:underline transition-colors duration-200"

Never use plain blue browser default link color anywhere.

---

## SECTION SPACING

Between major sections: py-16 md:py-24
Between heading and body: mb-6
Between body and CTA: mt-8
Card padding: p-6 md:p-8
Section max width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

---

## DIET INDICATORS (MENU PAGE)

Vegetarian: green leaf icon, color #22c55e, no background, no border
Vegan: darker green leaf icon, color #2D7A2D, with small V indicator
Non-vegetarian: filled dark red circle inside square border, color #8B0000

---

## WHAT NEVER TO DO

- Never use "Chopras" alone — always "Chopras Indian Restaurant"
- Never use em dashes (—) in copy
- Never use contractions in copy
- Never use square cornered buttons
- Never use plain blue hyperlink color for internal links
- Never stack two H1 tags on one page
- Never use font sizes smaller than text-xs for any visible text
- Never use pure black (#000000) as a text color — use #1B2B5E or #3A3A4A
- Never remove the eyebrow label from a hero section
- Never render an eyebrow as a plain div or span without the glassmorphism pill container (rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm)
- Never use a different button style than the three variants defined above
- NEVER use gold #C7A348 or #D4AF37 for body text, paragraph text, or descriptive text on dark blue or navy backgrounds. Gold is ONLY for: eyebrow pill text, H2 headings on light backgrounds, button borders, decorative accents, and star ratings. All body text and descriptive text on dark backgrounds must be white or rgba(255,255,255,0.8).
- NEVER use gold for H2 headings on dark blue or navy backgrounds. H2 headings on dark blue or navy must use text-white to override the global h2 { color: #C7A348 } rule.

---

## FOOTER RULES

Background: linear-gradient(135deg, #000066 0%, #0000FF 100%)
Top border: 1px solid rgba(199, 163, 72, 0.3)
Column headings: text-[#C7A348] uppercase tracking-wider text-xs font-semibold
Footer links: text-white/70 hover:text-white hover:text-[#C7A348]
Copyright bar: text-white/50 text-sm

---

## BRAND NAME RULES

Full brand name: "Chopras Indian Restaurant"
Domain: chopras.nl (never change URLs)
Founder: Arun Chopra
Address: Leyweg 986, 2545 GW Den Haag, Netherlands
Phone: +31 6 30645930
Email: info@chopras.nl
Google rating: 4.5 stars, 200+ reviews
TheFork rating: 8.6
Established: 2023

---

This file must be read before making ANY design changes to the Chopras Indian Restaurant website. All new pages, components, and sections must follow these rules exactly.
