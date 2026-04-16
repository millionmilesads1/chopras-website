import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import FaqAccordion from '@/components/sections/FaqAccordion'
import { getLocalizedUrl } from '@/lib/utils'
import { getBreadcrumbSchema, getFaqPageSchema, getCateringServiceSchema } from '@/lib/schema'
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
    en: 'Feestzaal huren Den Haag bij Chopras Indian Restaurant. Verjaardagen, bruiloften en bedrijfsfeesten. Indiaas catering inbegrepen. Offerte aanvragen.',
    nl: 'Feestzaal huren Den Haag bij Chopras Indian Restaurant. Verjaardagen, bruiloften en bedrijfsfeesten. Indiaas catering inbegrepen. Offerte aanvragen.',
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

const faqsEn: Array<{ question: string; answer: string }> = [
  {
    question: 'Can I hire a party hall at Chopras Indian Restaurant in Den Haag?',
    answer: 'Yes. Chopras Indian Restaurant offers a private event hall for hire in Den Haag, accommodating 25 to 80 guests. It is ideal for birthdays, weddings, nikah receptions, corporate events, Diwali dinners, and all other private occasions. Contact us for a free quote.',
  },
  {
    question: 'Is catering included when hiring the event hall?',
    answer: 'Yes. Full authentic Indian catering is included with your event hall hire at Chopras Indian Restaurant Den Haag. From a lavish buffet to a multi-course plated dinner, everything is freshly prepared by the same kitchen that earns 4.9 stars on Google. The menu is customized to your occasion at no extra charge.',
  },
  {
    question: 'What occasions is the event hall suitable for?',
    answer: 'The private hall at Chopras Indian Restaurant Den Haag is suitable for birthday parties, weddings, nikah receptions, stag parties, corporate events, team dinners, staff parties, Diwali celebrations, Eid gatherings, baby showers, drinks receptions, and meetings with catering.',
  },
  {
    question: 'How many people can the event hall at Chopras Indian Restaurant accommodate?',
    answer: 'The private event hall at Chopras Indian Restaurant Den Haag accommodates between 25 and 80 guests. This range covers intimate family dinners and large corporate or wedding receptions. Contact us with your guest count and we will confirm availability and the best setup for your event.',
  },
  {
    question: 'How do I book the event hall at Chopras Indian Restaurant Den Haag?',
    answer: 'Contact us via the contact page or call us directly on +31 6 30645930. Tell us your date, guest count, and type of event. We discuss menu options and availability and send you a free, no-obligation quote within 24 hours.',
  },
  {
    question: 'Is the catering at Chopras Indian Restaurant fully halal certified?',
    answer: 'Yes. Every dish at Chopras Indian Restaurant is fully halal certified. Every meat supplier is halal certified. There is no non-halal meat anywhere on the premises, so there is no cross-contamination risk. Families planning a nikah reception or any halal event can book with complete confidence.',
  },
]

const faqsNl: Array<{ question: string; answer: string }> = [
  {
    question: 'Kan ik een feestzaal huren bij Chopras Indian Restaurant in Den Haag?',
    answer: 'Ja. Chopras Indian Restaurant biedt een privé feestzaal te huur in Den Haag voor 25 tot 80 gasten. Ideaal voor verjaardagen, bruiloften, nikah-recepties, bedrijfsfeesten, Diwali-diners en alle andere privégelegenheden. Neem contact op voor een vrijblijvende offerte.',
  },
  {
    question: 'Is er catering inbegrepen bij het huren van de feestzaal?',
    answer: 'Ja. Volledige authentieke Indiaas catering is inbegrepen bij uw feestzaal huur bij Chopras Indian Restaurant Den Haag. Van een uitgebreid buffet tot een meergangendiner, alles wordt vers bereid door dezelfde keuken die 4,9 sterren scoort op Google. Het menu wordt op maat gemaakt voor uw gelegenheid, zonder meerkosten.',
  },
  {
    question: 'Voor welke gelegenheden is de feestzaal geschikt?',
    answer: 'De privé feestzaal van Chopras Indian Restaurant Den Haag is geschikt voor verjaardagsfeesten, bruiloften, nikah-recepties, vrijgezellenfeesten, bedrijfsfeesten, teamdiners, personeelsfeesten, Diwali-vieringen, Eid-bijeenkomsten, babyshowers, borrels en vergaderingen met catering.',
  },
  {
    question: 'Hoeveel personen passen er in de feestzaal van Chopras Indian Restaurant?',
    answer: 'De privé feestzaal van Chopras Indian Restaurant Den Haag heeft een capaciteit van 25 tot 80 gasten. Dit bereik dekt zowel intieme familiedinertjes als grote bruiloften of bedrijfsrecepties. Neem contact op met uw aantal gasten en wij bevestigen de beschikbaarheid en de beste zaalopstelling.',
  },
  {
    question: 'Hoe boek ik een feestzaal bij Chopras Indian Restaurant Den Haag?',
    answer: 'Neem contact op via de contactpagina of bel ons op +31 6 30645930. Vertel ons uw datum, aantal gasten en type evenement. Wij bespreken menu-opties en beschikbaarheid en sturen u binnen 24 uur een vrijblijvende offerte.',
  },
  {
    question: 'Is de catering bij Chopras Indian Restaurant volledig halal gecertificeerd?',
    answer: 'Ja. Elk gerecht bij Chopras Indian Restaurant is volledig halal gecertificeerd. Elke vleesleverancier is halal gecertificeerd. Er is geen niet-halal vlees aanwezig in de keuken, dus er is geen risico op kruiscontaminatie. Families die een nikah-receptie of een ander halal evenement plannen kunnen met volledig vertrouwen boeken.',
  },
]

export default function FeestzaalDenHaagPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getCateringServiceSchema(locale)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Feestzaal Huren' : 'Event Venue', item: getLocalizedUrl(locale, 'feestzaal-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      {/* HERO */}
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
            {isNl
              ? 'Feestzaal Huren in Den Haag bij Chopras Indian Restaurant'
              : 'Event Venue for Hire in Den Haag at Chopras Indian Restaurant'}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {isNl
              ? 'Privé feestzaal voor 25 tot 80 gasten. Authentiek Indiaas catering inbegrepen. Dezelfde keuken die 4,9 sterren scoort op Google.'
              : 'Private event hall for 25 to 80 guests. Authentic Indian catering included. The same kitchen rated 4.9 stars on Google.'}
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]"
          >
            {isNl ? 'Offerte Aanvragen' : 'Request a Quote'}
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Feestzaal Huren Den Haag - Zaal en Catering Onder Een Dak'
              : 'Feestzaal Huren Den Haag - Venue and Catering Under One Roof'}
          </h2>
          <div className="space-y-6 font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                De meeste zaalverhuurders geven u de sleutels en sturen u een lijst van goedgekeurde cateraars. U coördineert twee bedrijven, beheert twee contracten en hoopt dat het eten past bij de ruimte. Bij{' '}
                <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant</Link>{' '}
                zijn de feestzaal en de keuken dezelfde operatie. U maakt één telefoontje. Alles wordt geregeld.
              </p>
            ) : (
              <p>
                Most venues hand you the keys and send you a list of approved caterers. You coordinate two companies, manage two contracts, and hope the food matches the room. At{' '}
                <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant</Link>{' '}
                in Den Haag, the feestzaal and the kitchen are the same operation. You make one call. Everything is handled.
              </p>
            )}
            {isNl ? (
              <p>
                De privé feestzaal op <strong>Leyweg 986</strong> biedt ruimte voor <strong>25 tot 80 gasten</strong>. Dat bereik dekt alles, van een intieme{' '}
                <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">nikah-receptie</Link>{' '}
                tot een volledig bedrijfsdiner. Het eten komt uit dezelfde keuken die 4,9 sterren verdient van 800+ Google-beoordelaars elke week. Uw evenementgasten krijgen exact dezelfde standaard. Geen aparte cateraar. Geen coördinatieproblemen.
              </p>
            ) : (
              <p>
                The private hall at <strong>Leyweg 986</strong> accommodates <strong>25 to 80 guests</strong>. That range covers everything from an intimate{' '}
                <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">nikah reception</Link>{' '}
                to a full corporate dinner for 80. The food comes from the same kitchen that earns 4.9 stars from 800+ Google reviewers every week. Your event guests get the same standard. No separate caterer. No coordination headache.
              </p>
            )}
            {isNl ? (
              <p>
                Of u nu een verjaardagsfeest, een bruiloft, een{' '}
                <Link href={`${base}/diwali-dinner-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Diwali-viering</Link>{' '}
                of een{' '}
                <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">bedrijfsevenement</Link>{' '}
                plant, het proces begint hetzelfde. Vertel ons uw datum, uw aantal gasten en uw gelegenheid. Wij regelen de rest. Van biryani tot tandoori tot een meergangendiner, het menu is gebouwd rondom uw evenement, niet rondom een vast pakket.
              </p>
            ) : (
              <p>
                Whether you are planning a birthday party, a wedding reception, a{' '}
                <Link href={`${base}/diwali-dinner-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Diwali celebration</Link>
                , or a{' '}
                <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">corporate event</Link>
                , the process starts the same way. You tell us your date, your guest count, and your occasion. We handle the rest. From biryani to tandoori to a multi-course dinner, the menu is built around your event.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'De Privé Feestzaal op Leyweg 986 - Wat Is Inbegrepen'
              : 'The Private Hall at Leyweg 986 - What Is Included'}
          </h2>
          <div className="space-y-6 font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                De feestzaal van Chopras Indian Restaurant Den Haag biedt ruimte aan <strong>25 tot 80 gasten</strong>. De ruimte is volledig privé: uw gasten delen de zaal niet met andere diners tijdens uw evenement. Volledige catering is inbegrepen, een op maat gemaakt menu dat in overleg met ons team wordt samengesteld, met buffet- of bordservice en alle bereiding en bediening verzorgd door het Chopras-team.
              </p>
            ) : (
              <p>
                The feestzaal at Chopras Indian Restaurant Den Haag seats between <strong>25 and 80 guests</strong>. The space is fully private. Your guests will not share the room with other diners during your event. Full catering is included: a customized menu designed in consultation with our team, buffet or plated service, and all preparation and serving handled by the Chopras team.
              </p>
            )}
            {isNl ? (
              <p>
                Elk gerecht wordt vers bereid op de dag van uw evenement. De specerijen worden die ochtend gemalen van hele specerijen die rechtstreeks uit India worden geïmporteerd. De tandoor wordt gestookt tot <strong>400 graden Celsius</strong>. Uw gasten bij een privé-evenement krijgen exact dezelfde keukenstandaard die Chopras Indian Restaurant tot het{' '}
                <Link href={`${base}/beste-indiaas-restaurant-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best beoordeelde Indiaas restaurant in Den Haag</Link>{' '}
                heeft gemaakt. Die standaard zakt niet voor evenementen.
              </p>
            ) : (
              <p>
                Every dish is prepared fresh on the day of your event. The spices are ground that morning from whole spices sourced directly from India. The tandoor fires to <strong>400 degrees Celsius</strong>. Your private event guests receive the exact same kitchen standard that has made Chopras Indian Restaurant the{' '}
                <Link href={`${base}/beste-indiaas-restaurant-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">highest-rated Indian restaurant in Den Haag</Link>.
                {' '}That standard does not drop for events.
              </p>
            )}
            {isNl ? (
              <p>
                Halal-certificering geldt voor elk gerecht op het menu. Elke leverancier is gecertificeerd halal. Er is geen aparte halal-sectie en geen risico op kruiscontaminatie omdat er nergens in de keuken niet-halal vlees aanwezig is. Voor Moslim-families die een nikah-receptie of Eid-bijeenkomst plannen, is dit de zekerheid die ze nodig hebben voordat alles begint. Meer over onze{' '}
                <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">halal certificering in Den Haag</Link>.
              </p>
            ) : (
              <p>
                Halal certification covers every dish on the menu. Every supplier is certified. There is no separate halal section and no cross-contamination risk because there is no non-halal meat anywhere in the kitchen. For Muslim families planning a nikah reception or Eid gathering, this is the confirmation they need before everything else. Read more about our{' '}
                <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">halal food in Den Haag</Link>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Verjaardag, Bruiloft, Diwali en Meer - Privé Dineren in Den Haag'
              : 'Birthday, Wedding, Diwali and More - Private Dining in Den Haag'}
          </h2>
          <div className="space-y-6 font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                Een verjaardagsdiner voor 30 personen. Een nikah-receptie voor 80 gasten. Een Diwali-viering voor een gemengde groep families. Een bedrijfsteamdiner na een lang kwartaal. Elke gelegenheid vraagt om een andere energie, een ander menu, een andere zaalopstelling. Het Chopras-team heeft ze allemaal verzorgd op Leyweg 986 in Den Haag.
              </p>
            ) : (
              <p>
                A birthday dinner for 30 people. A nikah reception for 80 guests. A Diwali celebration for a mixed group of families. A corporate team dinner after a long quarter. Each occasion requires a different energy, a different menu, a different room setup. The Chopras team has run all of them at Leyweg 986 in Den Haag.
              </p>
            )}
            {isNl ? (
              <p>
                Voor{' '}
                <Link href={`${base}/bruiloft-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">bruiloft catering in Den Haag</Link>{' '}
                kan het menu worden opgezet als een formeel meergangendiner of als een weelderig buffet met meerdere stations. Voor verjaardagsfeesten kan het eten informeel en overvloedig zijn. Voor Diwali-diners staan traditionele gerechten zoals{' '}
                <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">biryani</Link>
                , dal makhani en paneer tikka centraal, de smaken die uw gasten verbinden met de gelegenheid.
              </p>
            ) : (
              <p>
                For{' '}
                <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian wedding catering in Den Haag</Link>
                , the menu can be structured as a formal multi-course dinner or as a lavish buffet with multiple stations. For birthday parties, the food can be casual and abundant. For Diwali dinners, traditional dishes like{' '}
                <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">biryani</Link>
                , dal makhani, and paneer tikka take center stage, the flavors that connect your guests to the occasion.
              </p>
            )}
            {isNl ? (
              <p>
                Bedrijfsevenementen hebben iets anders nodig. Een teamdiner bij Chopras Indian Restaurant Den Haag is gedenkwaardiger dan een standaard vergaderkamer met cateringboxen. De privézaal laat uw team ontspannen. Het eten, vers gemaakt, diep smaakvol en halal gecertificeerd, geeft mensen iets om over te praten. Meer weten over ons{' '}
                <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">bedrijfsevenementen aanbod in Den Haag</Link>.
              </p>
            ) : (
              <p>
                Corporate events need something different. A team dinner at Chopras Indian Restaurant Den Haag is more memorable than a standard catered meeting room. The private space lets your team relax. The food, freshly made, deeply flavorful, and halal certified, gives people something to talk about. Discover our full{' '}
                <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">corporate events offering in Den Haag</Link>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Authentiek Indiaas Catering uit Dezelfde Keuken'
              : 'Authentic Indian Catering from the Same Kitchen'}
          </h2>
          <div className="space-y-6 font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                Het eten bij uw evenement komt uit dezelfde keuken als het restaurant. Geen externe cateraar. Geen opgewarmde bakken. Alles wordt die dag vers bereid. Het menu voor uw evenement wordt samen met het Chopras-team samengesteld en kan alles van het{' '}
                <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">volledige restaurantmenu</Link>{' '}
                bevatten, van{' '}
                <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">butter chicken</Link>{' '}
                en biryani tot soya chaap en Indo Chinese gerechten.
              </p>
            ) : (
              <p>
                The food at your event comes from the same kitchen as the restaurant. No outside caterer. No reheated trays. Everything is prepared fresh that day. The menu is built together with the Chopras team and can include anything from the{' '}
                <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">full restaurant menu</Link>
                , from{' '}
                <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">butter chicken</Link>{' '}
                and biryani to soya chaap and Indo Chinese dishes.
              </p>
            )}
            {isNl ? (
              <p>
                Elk vleesgerecht is halal gecertificeerd. Vegetarische en veganistische opties zijn uitgebreid beschikbaar:{' '}
                <Link href={`${base}/dal-makhani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">dal makhani</Link>
                ,{' '}
                <Link href={`${base}/chaat-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">chaat</Link>
                ,{' '}
                <Link href={`${base}/pani-puri-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">pani puri</Link>{' '}
                en{' '}
                <Link href={`${base}/soya-chaap-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">soya chaap</Link>.
                {' '}Zo kan elke gast aan uw tafel genieten. Het buffetformaat werkt goed voor grotere groepen; een meergangendiner met bordservice geeft formele gelegenheden meer cachet.
              </p>
            ) : (
              <p>
                Every meat dish is halal certified. Vegetarian and vegan options are extensive:{' '}
                <Link href={`${base}/dal-makhani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">dal makhani</Link>
                ,{' '}
                <Link href={`${base}/chaat-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">chaat</Link>
                ,{' '}
                <Link href={`${base}/pani-puri-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">pani puri</Link>
                , and{' '}
                <Link href={`${base}/soya-chaap-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">soya chaap</Link>.
                {' '}Every guest at your table is covered. The buffet format works well for larger groups; a plated multi-course dinner brings more formality to weddings and corporate dinners.
              </p>
            )}
            {isNl ? (
              <p>
                De specerijen vertellen het verschil. Concurrenten gebruiken kant-en-klare kruidenmengsels van leveranciers. Bij Chopras Indian Restaurant worden hele specerijen rechtstreeks uit India betrokken en elke ochtend vers gemalen voor de service. De vluchtige aromatische stoffen in komijn, kardemom en koriander bereiken hun hoogtepunt binnen uren na het malen. Uw evenementgasten eten voedsel op het absolute hoogtepunt van zijn smaak. Meer over onze{' '}
                <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indiaas catering diensten in Den Haag</Link>.
              </p>
            ) : (
              <p>
                The spices tell the difference. Competitors use pre-mixed blends from suppliers. At Chopras Indian Restaurant, whole spices are sourced directly from India and ground fresh every morning before service. The volatile aromatic compounds in cumin, cardamom, and coriander peak within hours of grinding. Your event guests eat food at the absolute peak of its flavor. Explore our full{' '}
                <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian catering services in Den Haag</Link>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Kan ik een feestzaal huren bij Chopras Indian Restaurant in Den Haag?'
              : 'Can I Rent an Event Hall at Chopras Indian Restaurant in Den Haag?'}
          </h2>
          <div className="font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                Ja. Chopras Indian Restaurant op{' '}
                <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Leyweg 986 in Den Haag</Link>{' '}
                biedt een privé feestzaal te huur voor <strong>25 tot 80 gasten</strong>. De zaal is beschikbaar voor verjaardagen, bruiloften, nikah-recepties, bedrijfsfeesten, Diwali-diners en privéfeesten. Authentiek{' '}
                <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indiaas catering</Link>{' '}
                is inbegrepen, bereid door dezelfde keuken die 4,9 sterren scoort op Google. Open dinsdag tot en met zondag. Neem contact op voor een vrijblijvende offerte.
              </p>
            ) : (
              <p>
                Yes. Chopras Indian Restaurant at{' '}
                <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Leyweg 986, Den Haag</Link>{' '}
                offers a private event hall for hire accommodating <strong>25 to 80 guests</strong>. The hall is available for birthdays, weddings, nikah receptions, corporate events, Diwali dinners, and private parties. Full authentic{' '}
                <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian catering</Link>{' '}
                is included, from the same kitchen rated 4.9 stars on Google. Open Tuesday to Sunday. Contact us to request a free quote for your event.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Hoe Boek Je een Feestzaal bij Chopras Indian Restaurant Den Haag'
              : 'How to Book the Event Hall at Chopras Indian Restaurant Den Haag'}
          </h2>
          <div className="space-y-6 font-body text-[#1A1A1A] text-lg leading-relaxed">
            {isNl ? (
              <p>
                Het boeken van de feestzaal in Den Haag is eenvoudig. Neem contact op via de{' '}
                <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">contactpagina</Link>{' '}
                of bel ons direct op <strong>+31 6 30645930</strong>. Vertel ons uw datum, uw aantal gasten en het type evenement. Wij bespreken menu-opties, beschikbaarheid en prijzen en sturen u binnen 24 uur een vrijblijvende offerte.
              </p>
            ) : (
              <p>
                Booking the event hall in Den Haag is straightforward. Contact us via the{' '}
                <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">contact page</Link>{' '}
                or call us directly on <strong>+31 6 30645930</strong>. Tell us your date, your guest count, and the type of event. We discuss menu options, availability, and pricing, and send you a free quote within 24 hours.
              </p>
            )}
            {isNl ? (
              <p>
                Voor kleine evenementen van 25 tot 40 personen raden we aan om minimaal <strong>2 tot 3 weken van tevoren</strong> contact op te nemen. Voor grotere bruiloften en bedrijfsfeesten van 50 tot 80 gasten, plan dan <strong>6 tot 8 weken vooruit</strong>. Dit geeft ons voldoende tijd om uw menu perfect in te richten en de zaalopstelling af te stemmen op uw gelegenheid.
              </p>
            ) : (
              <p>
                For smaller events of 25 to 40 guests, we recommend contacting us at least <strong>2 to 3 weeks in advance</strong>. For larger weddings and corporate events of 50 to 80 guests, plan <strong>6 to 8 weeks ahead</strong>. This gives us enough time to build your menu and set up the hall exactly as your occasion requires.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#FFFAF5] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-12 leading-[1.4]">
            {isNl
              ? 'Waarom Chopras Indian Restaurant Kiezen voor Uw Evenement'
              : 'Why Choose Chopras Indian Restaurant for Your Event'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: isNl ? 'Restaurant Kwaliteit Eten' : 'Restaurant Quality Food',
                desc: isNl
                  ? 'Dezelfde chefs, recepten en specerijen als in het restaurant. 4,9 sterren op Google van 800+ beoordelaars. Geen aparte evenementenkeuken.'
                  : 'The same chefs, recipes, and spices as in the restaurant. 4.9 stars on Google from 800+ reviewers. No separate event kitchen.',
              },
              {
                title: isNl ? 'Alles Onder Een Dak' : 'Everything Under One Roof',
                desc: isNl
                  ? 'Ruimte, catering en service in één. Geen aparte cateraar. Geen dubbele contracten. Één punt van contact voor het hele evenement.'
                  : 'Venue, catering, and service in one. No separate caterer. No double contracts. One point of contact for the entire event.',
              },
              {
                title: isNl ? 'Volledig Halal Gecertificeerd' : 'Fully Halal Certified',
                desc: isNl
                  ? 'Elk gerecht, elke leverancier, elke bereiding is halal gecertificeerd. Geen uitzonderingen. Geen risico op kruiscontaminatie.'
                  : 'Every dish, every supplier, every preparation is halal certified. No exceptions. No cross-contamination risk.',
              },
              {
                title: isNl ? '25 tot 80 Gasten' : '25 to 80 Guests',
                desc: isNl
                  ? 'De privézaal past zich aan uw groep aan. Intiem diner of grote receptie, de ruimte werkt voor uw gelegenheid zonder vaste pakketten.'
                  : 'The private hall adapts to your group. Intimate dinner or large reception, the space works for your occasion without fixed packages.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-1" />
                  <h3 className="font-heading text-2xl text-[#1B2B5E]">{item.title}</h3>
                </div>
                <p className="font-body text-[#1A1A1A] text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-12 text-center leading-[1.4]">
            {isNl ? 'Meer Over Onze Diensten' : 'Learn More About Our Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Restaurant' : 'Restaurant'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Chopras Indian Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}</p>
            </Link>
            <Link href={`${base}/menu`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Menu' : 'Menu'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bekijk ons volledige menu voor uw evenement' : 'View our full menu for your event'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas catering Den Haag' : 'Indian catering Den Haag'}</p>
            </Link>
            <Link href={`${base}/contact`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Contact' : 'Contact'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Vraag een vrijblijvende offerte aan' : 'Request a no-obligation quote'}</p>
            </Link>
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas bruiloft catering Den Haag' : 'Indian wedding catering Den Haag'}</p>
            </Link>
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Verjaardag' : 'Birthday'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Verjaardag catering Den Haag' : 'Birthday catering Den Haag'}</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bedrijf' : 'Corporate'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bedrijfsfeest Den Haag' : 'Corporate events Den Haag'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali dinner Den Haag' : 'Diwali dinner Den Haag'}</p>
            </Link>
            <Link href={`${base}/bruiloft-catering-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Trouwlocatie' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bruiloft catering Den Haag' : 'Wedding catering Den Haag'}</p>
            </Link>
            <Link href={`${base}/zaal-huren-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Zaal' : 'Venue'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Zaal huren Den Haag' : 'Hall for hire Den Haag'}</p>
            </Link>
            <Link href={`${base}/evenementenruimte-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Evenement' : 'Event'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Evenementenruimte Den Haag' : 'Event venue Den Haag'}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl
              ? 'Veelgestelde Vragen over de Feestzaal in Den Haag'
              : 'Frequently Asked Questions About the Event Hall in Den Haag'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2B5E] py-20 md:py-28 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.4]">
            {isNl
              ? 'Klaar om uw feestzaal te boeken in Den Haag?'
              : 'Ready to Book Your Event Hall in Den Haag?'}
          </h2>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            {isNl
              ? 'Neem vandaag nog contact op en ontvang een vrijblijvende offerte voor uw privé evenement in Den Haag. Open dinsdag tot en met zondag op Leyweg 986.'
              : 'Contact us today and receive a free quote for your private event in Den Haag. Open Tuesday to Sunday at Leyweg 986.'}
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-white/10 px-6 py-3 text-white text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[rgba(199,163,72,0.3)] active:scale-[0.98] min-h-[48px] backdrop-blur-[10px]"
          >
            {isNl ? 'Offerte Aanvragen' : 'Request a Quote'}
          </Link>
        </div>
      </section>
    </>
  )
}
