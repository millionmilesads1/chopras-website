import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { RESTAURANT, SITE_URL } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chopras Indian Restaurant Den Haag | Authentic Indian Food',
    template: '%s | Chopras Indian Restaurant Den Haag',
  },
  description:
    'Authentic Indian restaurant in Den Haag serving fresh curries, tandoori, chaat and biryani. Halal certified. Vegetarian and vegan options. Open Tuesday to Sunday.',
  keywords: [
    'Indian restaurant Den Haag',
    'Indiaas restaurant Den Haag',
    'halal restaurant Den Haag',
    'Indian food The Hague',
    'authentic Indian food Den Haag',
    'Indian catering Den Haag',
  ],
  authors: [{ name: RESTAURANT.name }],
  creator: RESTAURANT.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: 'en_GB',
    siteName: RESTAURANT.name,
  },
  twitter: { card: 'summary_large_image' },
  alternates: {
    languages: {
      nl: SITE_URL,
      en: SITE_URL,
      'x-default': SITE_URL,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
