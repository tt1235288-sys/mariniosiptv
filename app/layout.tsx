// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} - Best Premium IPTV Subscription Service 2026 | 15,000+ Channels & 4K Streaming`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Experience ${CONSTANTS.FOCUS_KEYWORD}: Stream 15,000+ Live Channels & 60,000+ VODs in Crystal Clear 4K quality. Fast activation, Anti-Freeze Technology, and 24/7 Pro Support. Read our ${CONSTANTS.FOCUS_KEYWORD} Review and find the best ${CONSTANTS.FOCUS_KEYWORD} Service for your needs.`,
  authors: [{ name: `${CONSTANTS.BRAND_NAME} Team` }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Best Premium IPTV Subscription Service 2026 | ${CONSTANTS.FOCUS_KEYWORD} Review & Guide`,
    description: `Stream 15,000+ Live Channels & 60,000+ VODs in 4K quality. Instant activation, anti-freeze technology, 24/7 support. Read our ${CONSTANTS.FOCUS_KEYWORD} Review and ${CONSTANTS.FOCUS_KEYWORD} Guide.`,
    url: `https://${CONSTANTS.DOMAIN}/`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} - Premium IPTV Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Best Premium IPTV Subscription Service 2026`,
    description: `15,000+ channels, 60,000+ VODs, 4K quality. Instant activation. ${CONSTANTS.FOCUS_KEYWORD} Review and Guide.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    'Marinios IPTV',
    'Marinios IPTV service',
    'Marinios IPTV review',
    'Marinios IPTV guide',
    'Marinios Reddit',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
    'streaming service',
    'cord cutting',
    'live channels',
    'movies on demand'
  ],
};

// Organization Schema for Marinios IPTV
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium IPTV subscription service with 15,000+ live channels and 60,000+ VODs in 4K quality. ${CONSTANTS.FOCUS_KEYWORD} is the best IPTV provider for 2026.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://twitter.com/mariniosiptv",
          "https://facebook.com/mariniosiptv",
          "https://instagram.com/mariniosiptv",
          "https://t.me/mariniosiptv",
          "https://reddit.com/r/mariniosiptv"
        ]
      })
    }}
  />
);

// Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `Premium IPTV subscription service with ${CONSTANTS.FOCUS_KEYWORD}. Read our ${CONSTANTS.FOCUS_KEYWORD} Review and ${CONSTANTS.FOCUS_KEYWORD} Guide.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />
);

// Product Schema for Subscription Plans
const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} Premium Subscription`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium IPTV service with 15,000+ live channels, 60,000+ VODs, and 4K streaming quality. ${CONSTANTS.FOCUS_KEYWORD} offers the best value in IPTV entertainment.`,
        "brand": { 
          "@type": "Brand", 
          "name": CONSTANTS.BRAND_NAME 
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          { 
            "@type": "Offer", 
            "name": "Starter Plan - 3 Months", 
            "priceCurrency": "USD", 
            "price": "30.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "Value Plan - 6 Months", 
            "priceCurrency": "USD", 
            "price": "50.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "Ultimate Plan - 12 Months", 
            "priceCurrency": "USD", 
            "price": "80.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`
          }
        ]
      })
    }}
  />
);

// Service Schema
const ServiceSchema = () => (
  <script
    type="application/ld+json"
    id="service-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${CONSTANTS.BRAND_NAME} IPTV Subscription`,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "serviceType": "IPTV Subscription",
        "provider": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME
        },
        "description": `Premium IPTV service with 15,000+ live channels, 60,000+ VODs, and 4K streaming quality. ${CONSTANTS.FOCUS_KEYWORD} Review shows why we're the best IPTV provider.`,
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Subscription Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Starter Plan"
              },
              "price": "30",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Value Plan"
              },
              "price": "50",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ultimate Plan"
              },
              "price": "80",
              "priceCurrency": "USD"
            }
          ]
        }
      })
    }}
  />
);

// FAQ Schema
const FAQSchema = () => (
  <script
    type="application/ld+json"
    id="faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Marinios IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marinios IPTV is a premium IPTV subscription service offering 15,000+ live channels and 60,000+ VODs in 4K quality with anti-freeze technology."
            }
          },
          {
            "@type": "Question",
            "name": "Is Marinios IPTV the best IPTV service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Based on Marinios IPTV Review ratings, it's one of the highest-rated IPTV providers with 4.9/5 stars from 5000+ reviews."
            }
          },
          {
            "@type": "Question",
            "name": "What devices support Marinios IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marinios IPTV works on all major devices including Smart TVs, Android, iOS, Firestick, MAG boxes, and PC/Mac."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find Marinios IPTV reviews on Reddit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can find Marinios IPTV reviews and discussions on Reddit communities dedicated to IPTV streaming services."
            }
          },
          {
            "@type": "Question",
            "name": "Does Marinios IPTV offer a free trial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marinios IPTV offers a 7-day money-back guarantee, allowing you to test the service risk-free."
            }
          }
        ]
      })
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="thumbnail" content={`https://${CONSTANTS.DOMAIN}/img/structer.png`} />
        
        {/* Favicon Links */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/img/favicons/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/img/favicons/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/img/favicons/favicon-256x256.png" />
        <link rel="icon" type="image/x-icon" href="/img/favicons/favicon.ico" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180x180.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicons/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/img/favicons/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/img/favicons/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/img/favicons/android-chrome-256x256.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/img/favicons/android-chrome-384x384.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/img/favicons/android-chrome-512x512.png" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#facc15" />
        
        {/* Manifest */}
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
      </head>
      <body 
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-slate-950 text-white`} 
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <ServiceSchema />
        <FAQSchema />

        <Header />
        {children}
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6NR51QZXKL"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6NR51QZXKL');
            `,
          }}
        />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}