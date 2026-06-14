// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    default: `Pricing & Plans | ${CONSTANTS.FOCUS_KEYWORD} - Best IPTV Subscription 2025 | 15,000+ Channels & 4K Streaming`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Choose your ${CONSTANTS.FOCUS_KEYWORD} subscription plan starting at just $7.08/month. Get 15,000+ live channels, 60,000+ VODs, 4K streaming, PPV events, and 7-day money-back guarantee.`,
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
    canonical: `https://${CONSTANTS.DOMAIN}/pricing`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Pricing & Subscription Plans`,
    description: `Subscribe to ${CONSTANTS.FOCUS_KEYWORD} starting at $7.08/month. Access 15,000+ live channels, 60,000+ VODs, and 4K streaming.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Pricing Plans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Subscription Plans`,
    description: `Starting at $30/3months. 15,000+ channels, 60,000+ VODs, 4K quality.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/logo.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    'IPTV subscription cost',
    'best IPTV price',
    'Marinios IPTV plans',
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
    CONSTANTS.FOCUS_KEYWORD,
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
  ],
};

// Pricing Page JSON-LD Schema
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} IPTV Subscription Plans`,
        "description": `Premium IPTV service with subscription plans starting at $7.08/month. Access 15,000+ live channels and 60,000+ VODs in 4K quality.`,
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
            "price": "30.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "3 months access to 15,000+ live channels and 60,000+ VODs"
          },
          {
            "@type": "Offer",
            "name": "Value Plan - 6 Months",
            "price": "50.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "6 months access to 18,000+ live channels and 80,000+ VODs"
          },
          {
            "@type": "Offer",
            "name": "Ultimate Plan - 12 Months",
            "price": "80.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": "12 months access to 25,000+ premium channels and 100,000+ VODs with VIP support"
          }
        ]
      })
    }}
  />
);

// FAQ JSON-LD Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods."
            }
          },
          {
            "@type": "Question",
            "name": "Can I upgrade or downgrade my plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can upgrade or downgrade your plan at any time. Contact our support team and they will assist you with the change immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a contract or long-term commitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, there are no contracts or long-term commitments. All plans are prepaid and you can cancel at any time without penalties or hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer refunds if I'm not satisfied?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a 7-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team within 7 days for a full refund."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use one subscription on multiple devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, depending on your plan. Starter supports 1 device, Value supports 2 devices, and Ultimate supports 3 devices simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between the plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Starter plan includes 15,000+ channels and 60,000+ VODs with 1 connection. The Value plan includes 18,000+ channels and 80,000+ VODs with 2 connections. The Ultimate plan includes 25,000+ premium channels and 100,000+ VODs with 3 connections plus VIP support and free VPN."
            }
          }
        ]
      })
    }}
  />
);

// Organization Schema
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
        "logo": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "description": `Premium IPTV service with subscription plans starting at $7.08/month.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
        "sameAs": [
          "https://twitter.com/mariniosiptv",
          "https://facebook.com/mariniosiptv",
          "https://instagram.com/mariniosiptv",
          "https://t.me/mariniosiptv",
        ],
      }),
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
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV subscription plans starting at $7.08/month.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
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
        <meta name="thumbnail" content={`https://${CONSTANTS.DOMAIN}/img/logo.webp`} />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
      </head>
      <body 
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-slate-950 text-white`} 
        suppressHydrationWarning
      >
        {/* JSON-LD Schemas */}
        <OrganizationSchema />
        <WebsiteSchema />
        <PricingPageSchema />
        <PricingFAQSchema />

        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}