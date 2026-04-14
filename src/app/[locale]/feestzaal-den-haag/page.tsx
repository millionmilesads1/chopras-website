import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Feestzaal Huren Den Haag | Chopras Indian Restaurant',
    nl: 'Feestzaal Huren Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Feestzaal huren Den Haag bij Chopras Indian Restaurant. Verjaardagen, bruiloften en bedrijfsfeesten. Authentiek Indiaas catering inbegrepen. Offerte aanvragen.',
    nl: 'Feestzaal huren Den Haag bij Chopras Indian Restaurant. Verjaardagen, bruiloften en bedrijfsfeesten. Authentiek Indiaas catering inbegrepen. Offerte aanvragen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'feestzaal-den-haag'),
      languages: {
        en: getLocalizedUrl('en', 'feestzaal-den-haag'),
        nl: getLocalizedUrl('nl', 'feestzaal-den-haag'),
        'x-default': getLocalizedUrl('en', 'feestzaal-den-haag'),
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'feestzaal-den-haag'),
      images: [{ url: '/og/home-og.jpg', width: 1200, height: 630, alt: 'Chopras Indian Restaurant Den Haag' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/og/home-og.jpg'],
    },
  }
}

export default function FeestzaalDenHaagPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  const faqItems = isNl ? [
    { q: 'Kan ik een feestzaal huren bij Chopras Indian Restaurant in Den Haag?', a: 'Ja. Chopras Indian Restaurant biedt een privé feestzaal te huur in Den Haag, perfect voor verjaardagen, bruiloften, bedrijfsfeesten, Diwali-diners en alle andere gelegenheden. Neem contact met ons op voor een vrijblijvende offerte.' },
    { q: 'Is er catering inbegrepen bij het huren van de feestzaal?', a: 'Ja. Chopras Indian Restaurant verzorgt volledige authentieke Indiaas catering bij uw feestzaal huur in Den Haag. Van een buffet tot een meergangendiner - alles is mogelijk en volledig op maat.' },
    { q: 'Voor welke gelegenheden is de feestzaal geschikt?', a: 'De feestzaal van Chopras Indian Restaurant in Den Haag is geschikt voor verjaardagsfeesten, bruiloften, vrijgezellenfeesten, bedrijfsfeesten, personeelsfeesten, Diwali-vieringen, kinderfeesten, babyshowers, borrels, vergaderingen en teambuilding evenementen.' },
    { q: 'Hoeveel personen passen er in de feestzaal van Chopras Indian Restaurant?', a: 'De privé evenementenruimte van Chopras Indian Restaurant Den Haag is flexibel inzetbaar voor groepen van verschillende groottes. Neem contact op voor exacte capaciteitsinformatie en beschikbaarheid.' },
    { q: 'Hoe boek ik een feestzaal bij Chopras Indian Restaurant Den Haag?', a: 'Neem contact op via onze contactpagina of bel ons direct. Wij bespreken graag uw wensen, datum en catering en sturen u een vrijblijvende offerte toe.' },
    { q: 'Is er een goedkope feestzaal te huren in Den Haag met catering?', a: 'Chopras Indian Restaurant biedt competitieve tarieven voor feestzaalverhuur in Den Haag inclusief authentiek Indiaas catering. Vraag een vrijblijvende offerte aan via onze contactpagina.' },
  ] : [
    { q: 'Can I hire a party hall at Chopras Indian Restaurant in Den Haag?', a: 'Yes. Chopras Indian Restaurant offers a private event space for hire in Den Haag, perfect for birthdays, weddings, corporate events, Diwali dinners and all other occasions. Contact us for a no-obligation quote.' },
    { q: 'Is catering included when hiring the event space?', a: 'Yes. Chopras Indian Restaurant provides full authentic Indian catering with your event venue hire in Den Haag. From a buffet to a multi-course dinner - everything is possible and fully customized to your needs.' },
    { q: 'What occasions is the event space suitable for?', a: 'The event space at Chopras Indian Restaurant in Den Haag is suitable for birthday parties, weddings, stag parties, corporate events, staff parties, Diwali celebrations, children\'s parties, baby showers, drinks receptions, meetings and team building events.' },
    { q: 'How many people can the event space at Chopras Indian Restaurant accommodate?', a: 'The private event space at Chopras Indian Restaurant Den Haag is flexible for groups of various sizes. Contact us for exact capacity information and availability.' },
    { q: 'How do I book an event space at Chopras Indian Restaurant Den Haag?', a: 'Contact us via our contact page or call us directly. We are happy to discuss your requirements, date and catering options and will send you a no-obligation quote.' },
    { q: 'Is there an affordable party hall for hire in Den Haag with catering?', a: 'Chopras Indian Restaurant offers competitive rates for event space hire in Den Haag including authentic Indian catering. Request a no-obligation quote via our contact page.' },
  ]

  return (
    <>
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Feestzaal Huren' : 'Event Venue', item: getLocalizedUrl(locale, 'feestzaal-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(faqItems.map(({ q, a }) => ({ question: q, answer: a })))} />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1B2B5E]">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/catering/party-decor.png"
            alt="Feestzaal Den Haag at Chopras Indian Restaurant"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(27,43,94,0.85), rgba(27,43,94,0.95))' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • FEESTZAAL · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-6">
            {isNl ? 'Feestzaal Huren in Den Haag — Chopras Indian Restaurant' : 'Event Venue for Hire in Den Haag — Chopras Indian Restaurant'}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {isNl
              ? 'Zaalverhuur met volledige authentieke Indiaas catering. Voor verjaardagen, bruiloften, bedrijfsfeesten, Diwali en meer.'
              : 'Event space rental with full authentic Indian catering. For birthdays, weddings, corporate events, Diwali and more.'}
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
          >
            {isNl ? 'Offerte Aanvragen' : 'Request a Quote'}
          </Link>
        </div>
      </section>

      {/* INTRO SECTION - Body Copy */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-8">
            {isNl ? 'Feestzaal Huren in Den Haag — Wat Chopras Indian Restaurant Biedt' : 'Event Space for Hire in Den Haag — What Chopras Indian Restaurant Offers'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'U zoekt een feestzaal huren in Den Haag. U wilt geen gemiddelde ruimte in een anoniem zaaltje. U wilt een feestlocatie waar het eten zo goed is dat uw gasten het gesprek erover nog maanden hebben. Chopras Indian Restaurant biedt u precies dat: een evenementenruimte in Den Haag met authentiek Indiaas eten dat echt iets bijzonders maakt van uw dag.'
                : 'You are looking for an event venue Den Haag to hire. You do not want an ordinary space in an anonymous function room Den Haag. You want a party venue Den Haag where the food is so good that your guests will still be talking about it months later. Chopras Indian Restaurant offers you exactly that: an event space in Den Haag with authentic Indian food that truly makes your day something special.'}
            </p>

            <p>
              {isNl
                ? 'Onze zaalverhuur is niet zomaar een ruimte te huur. Het is een volledige feestruimte met restaurant kwaliteit eten, van uw eerste contact tot uw laatste gast die vertrekt. We hebben ervaring met verjaardagen, bruiloften, vrijgezellenfeesten, bedrijfsfeesten, personeelsfeesten, Diwali-vieringen en veel meer. We weten wat elke gelegenheid vraagt.'
                : 'Our event space is not just a room for hire. It is a complete party venue with restaurant quality food, from your first contact to your last guest leaving. We have experience with birthday parties, weddings, stag parties, corporate events, staff parties, Diwali celebrations and much more. We know what each occasion requires.'}
            </p>

            <p>
              {isNl
                ? 'Bent u op zoek naar een restaurant met feestzaal Den Haag? Bent u op zoek naar een private dining ruimte Den Haag waar catering inbegrepen is? Dan bent u hier goed. We bieden zaalverhuur in Den Haag voor groepen van verschillende grootte. Neem contact op voor een vrijblijvende offerte en laat ons uw evenement naar uw wensen vormgeven.'
                : 'Are you looking for a restaurant with event space in Den Haag? Are you looking for a private dining room Den Haag where catering is included? Then you are in the right place. We offer event space rental in Den Haag for groups of various sizes. Contact us for a no-obligation quote and let us create your event exactly as you wish.'}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'De Perfecte Feestlocatie Den Haag voor Elk Evenement' : 'The Perfect Party Venue Den Haag for Every Event'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Een evenementenlocatie is meer dan alleen een ruimte. Het is de plek waar herinneringen ontstaan. Bij Chopras Indian Restaurant begrepen we dit. Onze ruimte huren voor een evenement betekent niet zomaar vier muren en tafels. Het betekent authentiek eten, professionele service, flexibiliteit en een team dat zich inzet om uw dag perfect te maken.'
                : 'An event location is more than just a room. It is the place where memories are created. At Chopras Indian Restaurant, we understand this. Hiring our space for an event is not just four walls and tables. It means authentic food, professional service, flexibility and a team committed to making your day perfect.'}
            </p>

            <p>
              {isNl
                ? 'U zoekt een kleine zaal huren Den Haag voor een intiem feest met 20 personen? We kunnen dat. U organiseert een groot bedrijfsfeest met 80 gasten? Ook geen probleem. U plant een bruiloft met drie verschillende momenten - receptie, diner en dessert? We hebben het gedaan. Onze evenementenruimte Den Haag past zich aan uw gelegenheden aan, niet andersom.'
                : 'Are you looking for a small party hall Den Haag to rent for an intimate celebration with 20 people? We can do that. Are you organizing a large corporate party with 80 guests? No problem. Are you planning a wedding with three different moments - reception, dinner and dessert? We have done it. Our private event hall Den Haag adapts to your occasion, not the other way around.'}
            </p>

            <p>
              {isNl
                ? 'Elke gelegenheid verdient eten dat recht doet aan het moment. Een verjaardagsfeest vraagt om warm en feestelijk eten. Een bedrijfsfeest vraagt soms om iets formelers en indrukwekkenders. Een bruiloft vraagt om iets elegants en doordacht. Een Diwali-viering vraagt om traditionele smaken die iedereen kent. Wij weten het verschil. Onze chef en team hebben jarenlange ervaring en passen het menu voor uw feestzaal huur aan.'
                : 'Every occasion deserves food that does justice to the moment. A birthday party calls for warm and festive food. A corporate event sometimes requires something more formal and impressive. A wedding calls for something elegant and thoughtful. A Diwali celebration calls for traditional flavors that everyone knows. We know the difference. Our chef and team have years of experience and tailor the menu to your event space rental.'}
            </p>

            <p>
              {isNl
                ? 'We bieden feestzaalverhuur in Den Haag met volledige catering inbegrepen. Van de planning van het menu tot het serveren van het dessert, wij regelen alles. U kunt zich concentreren op wat echt telt: het vieren van het moment met uw gasten.'
                : 'We offer event space for hire in Den Haag with full catering included. From menu planning to serving dessert, we handle everything. You can focus on what really matters: celebrating the moment with your guests.'}
            </p>
          </div>
        </div>
      </section>

      {/* OCCASIONS SECTION */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Restaurant met Feestzaal Den Haag — Het Beste van Twee Werelden' : 'Restaurant with Event Space Den Haag — The Best of Both Worlds'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Chopras Indian Restaurant is niet zomaar een zaalhuurder. We zijn een volwaardig restaurant met een feestzaal. Dit betekent dat u het voordeel hebt van een echte restaurantervaring - dezelfde koks, dezelfde recepten, dezelfde kwaliteit - maar in een privéruimte voor uw gelegenheid.'
                : 'Chopras Indian Restaurant is not just a space rental company. We are a full restaurant with an event space. This means you get the benefit of a genuine restaurant experience - the same chefs, the same recipes, the same quality - but in a private room for your occasion.'}
            </p>

            <p>
              {isNl
                ? 'We hebben geen "feestzaal menu" dat anders is dan het restaurantmenu. We hebben één menu, één keuken, één team. Dat betekent dat u precies dezelfde authentieke Indiaas eten krijgt dat onze vaste gasten elke week eten. Of u nu komt voor een verjaardagsfeest, bruiloft locatie Den Haag of bedrijfsfeest, u krijgt hetzelfde hoge niveau van eten en service.'
                : 'We do not have a "function room menu" that is different from the restaurant menu. We have one menu, one kitchen, one team. This means you get exactly the same authentic Indian food that our regular guests eat every week. Whether you come for a birthday party, wedding venue Den Haag or corporate event, you get the same high level of food and service.'}
            </p>

            <p>
              {isNl
                ? 'Dit is wat Chopras Indian Restaurant uniek maakt als restaurant met evenementenruimte Den Haag. We zijn geen zaalhuurder met een keuken. We zijn een restaurant met een feestzaal. Het verschil is groter dan u denkt.'
                : 'This is what makes Chopras Indian Restaurant unique as a restaurant with event space Den Haag. We are not a space rental company with a kitchen. We are a restaurant with an event space. The difference is bigger than you think.'}
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Zakelijk Evenement, Vergaderlocatie en Bedrijfsfeest Den Haag' : 'Business Events, Meeting Space and Corporate Gatherings Den Haag'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Bent u op zoek naar een vergaderlocatie Den Haag die ook geschikt is voor een gezellig bedrijfsfeest? Of een zakelijk evenement Den Haag waar uw team zich meer ontspannen kan voelen dan in een anoniem conferentiecentrum? Chopras Indian Restaurant is beide.'
                : 'Are you looking for a meeting space in Den Haag that is also suitable for a relaxed corporate gathering? Or a business event in Den Haag where your team can feel more relaxed than in an anonymous conference center? Chopras Indian Restaurant is both.'}
            </p>

            <p>
              {isNl
                ? 'Onze feestzaal Den Haag kan gebruikt worden voor bedrijfsuitje events, vergaderingen met eten, teambuilding evenementen en personeelsfeesten. U kunt hier zaken bespreken en tegelijk in een warme, gastvrije omgeving genieten van uitstekend eten. Dit maakt onze ruimte huren in Den Haag anders dan een standaard vergaderruimte.'
                : 'Our event space in Den Haag can be used for corporate outings, meetings with catering, team building events and staff parties. You can discuss business here while enjoying excellent food in a warm, welcoming environment. This makes hiring our space in Den Haag different from a standard meeting room.'}
            </p>

            <p>
              {isNl
                ? 'We bieden een evenementenruimte Den Haag die flexibel is voor zakelijke doeleinden. U kunt een formeel diner organiseren of een casual borrel met collega\'s. Uw team kan genieten van authentieke Indiaas eten in een privé ruimte, wat het bedrijfsfeest of teambuilding meer betekenisvol maakt dan een standaard kantoor gathering.'
                : 'We offer venue hire Den Haag that is flexible for business purposes. You can organize a formal dinner or a casual reception with colleagues. Your team can enjoy authentic Indian food in a private space, making the corporate event or team building more meaningful than a standard office gathering.'}
            </p>
          </div>
        </div>
      </section>

      {/* CELEBRATIONS SECTION */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Bruiloft, Verjaardagsfeest en Vrijgezellenfeest Locatie Den Haag' : 'Wedding, Birthday Party and Stag Party Venue Den Haag'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Een bruiloft locatie Den Haag waar catering van hoge kwaliteit inbegrepen is. Een verjaardagsfeest locatie Den Haag met eten dat uw gasten nog lang zullen onthouden. Een vrijgezellenfeest Den Haag in een privéruimte met warm service en goed eten. Dit zijn de gelegenheden waarvoor onze feestzaal huren in Den Haag perfect geschikt is.'
                : 'A wedding venue in Den Haag where high-quality catering is included. A birthday party venue in Den Haag with food that your guests will remember for a long time. A stag party in Den Haag in a private room with warm service and good food. These are the occasions for which our event space hire in Den Haag is perfectly suited.'}
            </p>

            <p>
              {isNl
                ? 'Voor verjaardagen bieden wij zaalverhuur Den Haag met menu\'s die warm en vreugdevol zijn. Voor bruiloften bieden we elegante diners die het moment waar maken. Voor vrijgezellenfeesten bieden we een relaxte, veilige omgeving waar uw groep kan genieten van goed eten en goed gezelschap.'
                : 'For birthdays we offer event space rental in Den Haag with menus that are warm and joyful. For weddings we offer elegant dinners that make the moment real. For stag parties we offer a relaxed, safe environment where your group can enjoy good food and good company.'}
            </p>

            <p>
              {isNl
                ? 'Bent u op zoek naar zaal huren voor verjaardag Den Haag? Of een bruiloft catering Den Haag met inbegrepen ruimte? We hebben alles onder één dak. Dit maakt de planning eenvoudiger, de communicatie beter en het resultaat altijd beter.'
                : 'Are you looking for space to hire for a birthday in Den Haag? Or wedding catering in Den Haag with venue included? We have everything under one roof. This makes planning easier, communication better and the result always better.'}
            </p>
          </div>
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Indiaas Catering Inbegrepen — Feestzaal met Eten Den Haag' : 'Indian Catering Included — Event Space with Food Den Haag'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Onze feestzaal huren Den Haag is altijd met volledige Indiaas catering inbegrepen. Dit is niet iets dat u apart moet regelen of voor extra kosten. Het eten is onderdeel van uw zaalverhuur.'
                : 'Our event space rental in Den Haag always includes full Indian catering. This is not something you need to arrange separately or pay extra for. The food is part of your space rental.'}
            </p>

            <p>
              {isNl
                ? 'Ons menu\'s omvatten traditionele gerechten zoals biryani, tandoori, rogan josh, dal makhani en nog veel meer. Alle recepten zijn authentiek, alle ingrediënten zijn van hoge kwaliteit en alles wordt vers bereid voor uw gelegenheid. We bieden ook vegetarische en veganistische opties, dus iedereen kan genieten.'
                : 'Our menus include traditional dishes like biryani, tandoori, rogan josh, dal makhani and much more. All recipes are authentic, all ingredients are high quality and everything is freshly prepared for your occasion. We also offer vegetarian and vegan options, so everyone can enjoy.'}
            </p>

            <p>
              {isNl
                ? 'U kunt kiezen uit buffetservice, bediening op bord of een mix van beiden. U kunt kiezen voor een eenvoudig menu of een meergangendiner. U werkt samen met onze chef en team om een menu samen te stellen dat perfect past bij uw gelegenheid en uw gasten. Dit is echt feestzaalverhuur in Den Haag met catering op maat.'
                : 'You can choose between buffet service, plated service or a mix of both. You can choose a simple menu or a multi-course dinner. You work together with our chef and team to create a menu that perfectly suits your occasion and your guests. This is truly event space rental in Den Haag with customized catering.'}
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Hoe Boek Je een Feestzaal bij Chopras Indian Restaurant Den Haag' : 'How to Book an Event Space at Chopras Indian Restaurant Den Haag'}
          </h2>

          <div className="space-y-6 text-[#1A1A1A]/80 text-base md:text-lg leading-relaxed">
            <p>
              {isNl
                ? 'Het boeken van onze feestzaal Den Haag is eenvoudig. U neemt contact op, wij bespreken uw gelegenheid, en wij sturen u een vrijblijvende offerte. Er is geen verplichting totdat u klaar bent om door te gaan.'
                : 'Booking our event space in Den Haag is simple. You contact us, we discuss your occasion, and we send you a no-obligation quote. There is no commitment until you are ready to proceed.'}
            </p>

            <p>
              {isNl
                ? 'Hier zijn de stappen: (1) Neem contact op via onze contactpagina of bel ons rechtstreeks. (2) Vertel ons over uw gelegenheid - datum, aantal gasten, type evenement. (3) Wij bespreken menu\'s, prijzen en beschikbaarheid. (4) Wij sturen u een offerte. (5) U bevestigt en wij beginnen met de planning van uw feestzaal huur in Den Haag.'
                : 'Here are the steps: (1) Contact us via our contact page or call us directly. (2) Tell us about your occasion - date, number of guests, type of event. (3) We discuss menus, prices and availability. (4) We send you a quote. (5) You confirm and we start planning your event space rental in Den Haag.'}
            </p>

            <p>
              {isNl
                ? 'We raden aan om minimaal 2-4 weken van tevoren contact op te nemen voor kleine gelegenheden, en 6-8 weken voor grote bruiloften. Dit geeft ons genoeg tijd om alles perfect in te richten voor uw evenement.'
                : 'We recommend contacting us at least 2-4 weeks in advance for small events, and 6-8 weeks for large weddings. This gives us enough time to arrange everything perfectly for your event.'}
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12">
            {isNl ? 'Waarom Chopras Indian Restaurant Kiezen voor Uw Evenement' : 'Why Choose Chopras Indian Restaurant for Your Event'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: isNl ? 'Authentiek Indiaas Eten' : 'Authentic Indian Food',
                desc: isNl
                  ? 'Dezelfde chefs, recepten en kwaliteit als in ons restaurant. Uw gasten eten hetzelfde eten dat onze vaste gasten elke dag eten.'
                  : 'The same chefs, recipes and quality as in our restaurant. Your guests eat the same food that our regular guests eat every day.',
              },
              {
                title: isNl ? 'Alles Inbegrepen' : 'Everything Included',
                desc: isNl
                  ? 'Ruimte, catering, service, alles. Geen verborgen kosten. Geen aparte facturering.'
                  : 'Room, catering, service, everything. No hidden costs. No separate invoicing.',
              },
              {
                title: isNl ? 'Flexibel en Op Maat' : 'Flexible and Customized',
                desc: isNl
                  ? 'Elk menu wordt op maat gemaakt. Elk evenement is uniek. We passen ons aan uw wensen aan.'
                  : 'Every menu is customized. Every event is unique. We adapt to your requirements.',
              },
              {
                title: isNl ? 'Professionele Service' : 'Professional Service',
                desc: isNl
                  ? 'Ons team weet wat ze doen. Jaren ervaring met al types evenementen. Jullie gelegenheid wordt in goede handen gezet.'
                  : 'Our team knows what they are doing. Years of experience with all types of events. Your occasion is in good hands.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-gray-200 rounded-lg bg-[#FFFAF5]">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-1" />
                  <h3 className="font-heading text-lg font-semibold text-[#1B2B5E]">{item.title}</h3>
                </div>
                <p className="text-[#1A1A1A]/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12 text-center">
            {isNl ? 'Meer Over Onze Diensten' : 'Learn More About Our Services'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Restaurant' : 'Restaurant'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Chopras Indian Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}</p>
            </Link>

            <Link href={`${base}/menu`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Menu' : 'Menu'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bekijk ons volledige menu voor uw evenement' : 'View our full menu for your event'}</p>
            </Link>

            <Link href={`${base}/catering`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas catering Den Haag' : 'Indian catering Den Haag'}</p>
            </Link>

            <Link href={`${base}/contact`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Contact' : 'Contact'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Vraag een vrijblijvende offerte aan' : 'Request a no-obligation quote'}</p>
            </Link>

            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas bruiloft catering Den Haag' : 'Indian wedding catering Den Haag'}</p>
            </Link>

            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Verjaardag' : 'Birthday'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Verjaardag catering Den Haag' : 'Birthday catering Den Haag'}</p>
            </Link>

            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bedrijf' : 'Corporate'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bedrijfsfeest Den Haag' : 'Corporate events Den Haag'}</p>
            </Link>

            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali dinner Den Haag' : 'Diwali dinner Den Haag'}</p>
            </Link>

            <Link href={`${base}/bruiloft-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Trouwlocatie' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bruiloft catering Den Haag' : 'Wedding catering Den Haag'}</p>
            </Link>

            <Link href={`${base}/zaal-huren-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Zaal' : 'Venue'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Zaal huren Den Haag' : 'Hall for hire Den Haag'}</p>
            </Link>

            <Link href={`${base}/evenementenruimte-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Evenement' : 'Event'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Evenementenruimte Den Haag' : 'Event venue Den Haag'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#1B2B5E] mb-12 text-center">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="border-l-4 border-[#D4AF37] bg-[#FFFAF5] rounded-r-lg p-6">
                <summary className="cursor-pointer text-[#1B2B5E] font-semibold text-lg mb-3 list-none flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xl flex-shrink-0">+</span>
                  {q}
                </summary>
                <p className="text-[#1A1A1A]/70 leading-relaxed ml-8">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1B2B5E] py-20 md:py-28 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            {isNl ? 'Bent u klaar om uw feestzaal te boeken?' : 'Ready to book your event space?'}
          </h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            {isNl
              ? 'Neem vandaag nog contact op en ontvang een vrijblijvende offerte voor uw evenement in onze feestzaal in Den Haag.'
              : 'Contact us today and receive a no-obligation quote for your event in our venue in Den Haag.'}
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
          >
            {isNl ? 'Offerte Aanvragen' : 'Request a Quote'}
          </Link>
        </div>
      </section>
    </>
  )
}
