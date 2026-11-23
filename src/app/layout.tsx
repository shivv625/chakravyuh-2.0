import type { Metadata, Viewport } from 'next';
import { Cinzel_Decorative, Cinzel, Lato, Cormorant_Garamond } from 'next/font/google';
import '@/styles/globals.css';
import { SITE_CONFIG } from '@/content/site';

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chakravyuh.gita.edu.in'),
  title: `${SITE_CONFIG.EVENT_NAME} — ${SITE_CONFIG.SUBTITLE} | GITA Autonomous College`,
  description: `Official website for ${SITE_CONFIG.EVENT_NAME}, a National Level 36-Hour Hackathon hosted by GITA Autonomous College, Bhubaneswar, in association with BPUT, Odisha. Seven Gates. 36 Hours. ₹1,50,000 Prize Pool.`,
  keywords: [
    'Chakravyuh 2.0',
    'GITA Autonomous College',
    'BPUT Hackathon',
    'National Hackathon Odisha',
    'Engineering Hackathon 2027',
    'Student Hackathon Bhubaneswar',
  ],
  authors: [{ name: 'GITA CSE & Innovation Club' }],
  openGraph: {
    title: `${SITE_CONFIG.EVENT_NAME} — ${SITE_CONFIG.TAGLINE}`,
    description: 'Break the Chakravyuh. 36 Hours National Hackathon at GITA Autonomous College, Bhubaneswar.',
    url: 'https://chakravyuh.gita.edu.in',
    siteName: SITE_CONFIG.EVENT_NAME,
    images: [
      {
        url: '/assets/hero_kurukshetra_chariot.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.EVENT_NAME} Kurukshetra Banner`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.EVENT_NAME} — ${SITE_CONFIG.TAGLINE}`,
    description: 'Break the Chakravyuh. 36 Hours National Hackathon at GITA Autonomous College, Bhubaneswar.',
    images: ['/assets/hero_kurukshetra_chariot.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#3A1D0E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hackathon',
    name: SITE_CONFIG.EVENT_NAME,
    startDate: SITE_CONFIG.EVENT_START,
    endDate: SITE_CONFIG.EVENT_END,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: SITE_CONFIG.VENUE.NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.VENUE.ADDRESS,
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        postalCode: '752054',
        addressCountry: 'IN',
      },
    },
    image: ['https://chakravyuh.gita.edu.in/assets/hero_kurukshetra_chariot.jpg'],
    description: `${SITE_CONFIG.EVENT_NAME} is a National Level 36-Hour Hackathon organized by GITA Autonomous College, Bhubaneswar.`,
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.ORGANIZER,
      url: 'https://gita.edu.in',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: SITE_CONFIG.REGISTRATION_START,
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/assets/chakravyuh_intro.mp4" as="video" type="video/mp4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cinzelDecorative.variable} ${cinzel.variable} ${lato.variable} ${cormorant.variable} bg-cream-parchment text-navy-ink font-body antialiased selection:bg-gold-highlight selection:text-dark-chocolate overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
