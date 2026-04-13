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

## META DESCRIPTION RULES — MANDATORY FOR ALL PAGES

1. Primary keyword must appear within the first 60 characters
2. Length must be between 140 and 155 characters exactly
3. Must include "Chopras Indian Restaurant" — full brand name, never "Chopras" alone
4. Must include "Den Haag" or "The Hague" or "Leyweg 986"
5. Must end with a call to action
6. No contractions, no em dashes — per existing writing rules
7. Dutch pages must have meta description in Dutch with Dutch primary keyword
8. Every page must have a unique meta description — no duplicates
9. Rewrite any meta description where Google Search Console CTR is under 2%

## APPROVED META DESCRIPTIONS — ALL 43 PAGES

Homepage /
Primary keyword: Best Indian restaurant Den Haag
Meta: Best Indian restaurant Den Haag. Chopras Indian Restaurant. Halal certified, vegetarian and vegan options, private event hall at Leyweg 986. Open Tuesday to Sunday.

Menu /menu
Primary keyword: Indian restaurant menu Den Haag
Meta: Indian restaurant menu Den Haag at Chopras Indian Restaurant. 143 fresh dishes including curries, tandoori and biryani. Halal certified. Order online or dine in.

Catering /catering
Primary keyword: Indian catering Den Haag
Meta: Indian catering Den Haag by Chopras Indian Restaurant. Weddings, birthdays and corporate events. Halal certified, fresh and hot. Request a free catering quote today.

Contact /contact
Primary keyword: Chopras Indian Restaurant Den Haag contact
Meta: Contact Chopras Indian Restaurant Den Haag. Leyweg 986, open Tuesday to Sunday. Reserve a table, call us or send a message. Free parking available on site.

Vacancy /vacancy
Primary keyword: Vacature Indiaas restaurant Den Haag
Meta: Vacature Indiaas restaurant Den Haag. Join Chopras Indian Restaurant as a chef, front-of-house staff or catering assistant. Apply today at Leyweg 986 Den Haag.

Feestzaal /feestzaal-den-haag
Primary keyword: Feestzaal huren Den Haag
Meta: Feestzaal huren Den Haag bij Chopras Indian Restaurant. Verjaardagen, bruiloften en bedrijfsfeesten. Authentiek Indiaas catering inbegrepen. Offerte aanvragen.

Biryani /biryani-den-haag
Primary keyword: Biryani Den Haag
Meta: Authentic biryani Den Haag at Chopras Indian Restaurant. Chicken, lamb and veg biryani with saffron basmati rice. Halal certified. Dine in or order online today.

Butter Chicken /butter-chicken-den-haag
Primary keyword: Butter chicken Den Haag
Meta: Best butter chicken Den Haag at Chopras Indian Restaurant. Halal chicken in a rich tomato and cream sauce. Made fresh daily at Leyweg 986. Dine in or order online.

Tandoori /tandoori-den-haag
Primary keyword: Tandoori Den Haag
Meta: Authentic tandoori Den Haag at Chopras Indian Restaurant. Chicken tikka and seekh kebab from our clay oven. Halal certified. Order online or dine in at Leyweg 986.

Dal Makhani /dal-makhani-den-haag
Primary keyword: Dal makhani Den Haag
Meta: Authentic dal makhani Den Haag at Chopras Indian Restaurant. Black lentils slow cooked with butter and cream. Punjabi classic, served fresh daily at Leyweg 986.

Mutton Rogan Josh /mutton-rogan-josh-den-haag
Primary keyword: Mutton rogan josh Den Haag
Meta: Authentic mutton rogan josh Den Haag at Chopras Indian Restaurant. Halal lamb in a deep Kashmiri spice gravy. A signature North Indian dish at Leyweg 986.

Naan /naan-den-haag
Primary keyword: Naan Den Haag
Meta: Fresh naan Den Haag at Chopras Indian Restaurant. Garlic, butter, cheese and Peshwari naan baked hot in our tandoor clay oven. Best Indian bread in The Hague.

Chaat /chaat-den-haag
Primary keyword: Chaat Den Haag
Meta: Authentic chaat Den Haag at Chopras Indian Restaurant. Papdi chaat, dahi puri and aloo tikki, fresh daily at Leyweg 986. Best Indian street food in The Hague.

Pani Puri /pani-puri-den-haag
Primary keyword: Pani puri Den Haag
Meta: Authentic pani puri Den Haag at Chopras Indian Restaurant. Crispy shells with spiced potato and tamarind water. Real Indian street food at Leyweg 986 Den Haag.

Soya Chaap /soya-chaap-den-haag
Primary keyword: Soya chaap Den Haag
Meta: Authentic soya chaap Den Haag at Chopras Indian Restaurant. Vegan plant-based mock meat grilled in the tandoor. The best vegan Indian food in The Hague.

Indian Buffet /indian-buffet-den-haag
Primary keyword: Indian buffet Den Haag
Meta: Indian buffet Den Haag at Chopras Indian Restaurant. Authentic curries, tandoori and biryani for groups. Halal certified. Request a catering quote today at Leyweg 986.

Indo Chinese /indo-chinese-restaurant-den-haag
Primary keyword: Indo Chinese restaurant Den Haag
Meta: Indo Chinese food Den Haag at Chopras Indian Restaurant. Chilli chicken, chilli paneer and Hakka noodles. The only Indo Chinese restaurant in The Hague. Visit us now.

Halal Menu /halal-menu
Primary keyword: Halal menu Den Haag
Meta: Halal menu Den Haag at Chopras Indian Restaurant. All meat is halal certified. Biryani, tandoori and curries. Dine with full confidence at Leyweg 986 Den Haag.

Vegan Menu /vegan-menu
Primary keyword: Vegan Indian food Den Haag
Meta: Vegan Indian food Den Haag at Chopras Indian Restaurant. Dal makhani, soya chaap and chaat. Authentic plant-based Indian dishes at Leyweg 986. Dine in today.

Halal Food /halal-food-den-haag
Primary keyword: Halal food Den Haag
Meta: Halal food Den Haag. Chopras Indian Restaurant is fully halal certified. Biryani, tandoori and curries. Open Tuesday to Sunday at Leyweg 986 Den Haag.

Wedding Catering /indian-wedding-catering-den-haag
Primary keyword: Indian wedding catering Den Haag
Meta: Indian wedding catering Den Haag by Chopras Indian Restaurant. Nikah, walima and reception catering. Fully halal certified. Request a free quote today.

Birthday Catering /indian-birthday-catering-den-haag
Primary keyword: Indian birthday catering Den Haag
Meta: Indian birthday catering Den Haag by Chopras Indian Restaurant. Authentic food delivered hot to your party. Halal options available. Book your birthday catering today.

Corporate Events /corporate-events-den-haag
Primary keyword: Corporate events Den Haag
Meta: Corporate events Den Haag. Chopras Indian Restaurant provides Indian catering for team dinners and receptions. Halal certified. Up to 120 guests. Book now.

Diwali Dinner /diwali-dinner-den-haag
Primary keyword: Diwali dinner Den Haag
Meta: Diwali dinner Den Haag at Chopras Indian Restaurant. Dine in or book Indian catering for your Diwali celebration. Biryani, tandoori and dal. Book your table now.

Bruiloft Catering /bruiloft-catering-den-haag
Primary keyword: Bruiloft catering Den Haag
Meta: Bruiloft catering Den Haag bij Chopras Indian Restaurant. Authentiek Indiaas eten voor uw trouwdag. Volledig halal. Bel ons voor een vrijblijvende offerte vandaag.

Zaal Huren /zaal-huren-den-haag
Primary keyword: Zaal huren Den Haag
Meta: Zaal huren Den Haag bij Chopras Indian Restaurant. Feesten en vergaderingen met Indiaas catering inbegrepen. Flexibel en betaalbaar. Offerte aanvragen vandaag.

Evenementenruimte /evenementenruimte-den-haag
Primary keyword: Evenementenruimte Den Haag
Meta: Evenementenruimte Den Haag bij Chopras Indian Restaurant. Bedrijfsfeesten, vergaderingen en teambuilding. Indiaas catering beschikbaar. Offerte aanvragen vandaag.

Food Delivery /indian-food-delivery-den-haag
Primary keyword: Indian food delivery Den Haag
Meta: Indian food delivery Den Haag from Chopras Indian Restaurant. Fresh curries and biryani delivered hot to your door. Halal certified. Order online from Leyweg 986.

Indian Takeaway /indian-takeaway-den-haag
Primary keyword: Indian takeaway Den Haag
Meta: Indian takeaway Den Haag from Chopras Indian Restaurant. Order curries, biryani and naan for collection at Leyweg 986. Fresh, hot and ready for pickup today.

Near Delft /indian-restaurant-delft
Primary keyword: Indian restaurant Delft
Meta: Indian restaurant near Delft. Chopras Indian Restaurant Den Haag is 15 minutes via the A13. Authentic halal food at Leyweg 986. Open Tuesday to Sunday Den Haag.

Near Rijswijk /indian-restaurant-rijswijk
Primary keyword: Indian restaurant Rijswijk
Meta: Indian restaurant near Rijswijk. Chopras Indian Restaurant Den Haag is 5 minutes away. Authentic halal food, vegetarian options and private event hall. Book now.

Near Zoetermeer /indian-restaurant-zoetermeer
Primary keyword: Indian restaurant Zoetermeer
Meta: Indian restaurant near Zoetermeer. Chopras Indian Restaurant is 20 minutes via the A12. Authentic halal food at Leyweg 986, Den Haag. Open Tuesday to Sunday.

Near Peace Palace /indian-restaurant-near-peace-palace-den-haag
Primary keyword: Indian restaurant near Peace Palace Den Haag
Meta: Indian restaurant near Peace Palace Den Haag. Chopras Indian Restaurant is 10 minutes from Leyweg 986. Authentic food for diplomats and tourists. Book a table now.

Near Den Haag Centraal /indian-restaurant-near-den-haag-centraal
Primary keyword: Indian restaurant near Den Haag Centraal
Meta: Indian restaurant near Den Haag Centraal. Chopras Indian Restaurant is 15 minutes by tram. Halal Indian food at Leyweg 986. Open Tuesday to Sunday Den Haag.

Beste Indiaas Restaurant /beste-indiaas-restaurant-den-haag
Primary keyword: Beste Indiaas restaurant Den Haag
Meta: Beste Indiaas restaurant Den Haag bij Chopras Indian Restaurant. Authentieke Noord-Indiaase keuken, volledig halal. Beoordeeld 4.9 sterren op Google. Bezoek ons.

Family Restaurant /family-restaurant-den-haag
Primary keyword: Family restaurant Den Haag
Meta: Family restaurant Den Haag. Chopras Indian Restaurant has a dedicated kids menu, warm atmosphere and generous portions. Authentic Indian food for all ages at Leyweg 986.

Indian Food Netherlands /indian-food-netherlands
Primary keyword: Authentic Indian food Netherlands
Meta: Authentic Indian food Netherlands at Chopras Indian Restaurant Den Haag. North Indian cuisine, halal and street food. Serving the Netherlands since 2023 at Leyweg 986.

Blog: Best Indian Restaurant /blog/best-indian-restaurant-den-haag
Primary keyword: Best Indian restaurant Den Haag
Meta: Best Indian restaurant Den Haag. Discover what makes Chopras Indian Restaurant stand out. Authentic food, halal certified and rated 4.9 stars on Google. Read more.

Blog: Halal Indian Restaurant /blog/halal-indian-restaurant-den-haag
Primary keyword: Halal Indian restaurant Den Haag
Meta: Halal Indian restaurant Den Haag. Chopras Indian Restaurant is fully halal certified. Biryani, tandoori and curries. Full halal menu available at Leyweg 986.

Blog: Indiaas Catering /blog/indiaas-catering-den-haag
Primary keyword: Indiaas catering Den Haag
Meta: Indiaas catering Den Haag van Chopras Indian Restaurant. Voor verjaardagen, bruiloften en bedrijfsfeesten. Authentiek, halal en vers bereid. Offerte aanvragen.

Blog: Vegetarian Indian Food /blog/vegetarian-indian-food-den-haag
Primary keyword: Vegetarian Indian food Den Haag
Meta: Vegetarian Indian food Den Haag at Chopras Indian Restaurant. Dal makhani, soya chaap and paneer. A complete vegetarian and vegan Indian menu at Leyweg 986.

Blog: Indian Street Food /blog/indian-street-food-den-haag
Primary keyword: Indian street food Den Haag
Meta: Indian street food Den Haag at Chopras Indian Restaurant. Pani puri, chaat and samosa from India. Authentic snacks at Leyweg 986. Open Tuesday to Sunday.
