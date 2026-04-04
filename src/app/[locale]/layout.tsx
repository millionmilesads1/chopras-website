import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import ScrollToTop from '@/components/ScrollToTop'
import DisableScrollRestoration from '@/components/DisableScrollRestoration'
import { type Locale } from '@/lib/useTranslations'
import { RESTAURANT, SITE_URL } from '@/lib/constants'
import { getWebSiteSchema } from '@/lib/schema'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chopras Indian Restaurant Den Haag | Authentic Indian Food',
    template: '%s | Chopras Indian Restaurant Den Haag',
  },
  description:
    'Authentic Indian restaurant in Den Haag serving fresh curries, tandoori, chaat and biryani. Halal certified. Vegetarian and vegan options. Open Tuesday to Sunday.',
  authors: [{ name: RESTAURANT.name }],
  creator: RESTAURANT.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: RESTAURANT.name,
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const websiteSchema = getWebSiteSchema(params.locale)

  return (
    <html lang={params.locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <DisableScrollRestoration />
        <ScrollToTop />
        <TopBar />
        <Header locale={params.locale} />
        <CartDrawer locale={params.locale} />
        <main className="pt-[100px]">{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  )
}
