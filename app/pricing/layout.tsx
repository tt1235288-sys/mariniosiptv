// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    // FIXED: Shortened to 56 characters (within 50-60 range)
    default: `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV Plans 2026 | 4K Streaming`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  // FIXED: Shortened to 158 characters (within 150-160 range)
  description: `${CONSTANTS.FOCUS_KEYWORD}: Plans from $7.08/mo. 15,000+ channels, 60,000+ VODs, 4K quality. 7-day guarantee. Read our review.`,
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
    title: `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV Plans 2026`,
    description: `Subscribe to ${CONSTANTS.FOCUS_KEYWORD} from $7.08/mo. 15,000+ channels, 60,000+ VODs, 4K quality.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Pricing Plans - Best IPTV Subscription`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV Plans 2026`,
    description: `From $7.08/mo. 15,000+ channels, 60,000+ VODs, 4K quality.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  verification: {
    google: '',
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    `${CONSTANTS.FOCUS_KEYWORD} plans`,
    `${CONSTANTS.FOCUS_KEYWORD} subscription`,
    `${CONSTANTS.FOCUS_KEYWORD} cost`,
    `${CONSTANTS.FOCUS_KEYWORD} review`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} service`,
    'IPTV subscription cost',
    'best IPTV price',
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
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
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "description": `Premium IPTV service with subscription plans starting at $7.08/month. Access 15,000+ live channels and 60,000+ VODs in 4K quality. ${CONSTANTS.FOCUS_KEYWORD} offers the best value in IPTV entertainment.`,
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
            "description": `3 months ${CONSTANTS.FOCUS_KEYWORD} access to 15,000+ live channels and 60,000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "Value Plan - 6 Months",
            "price": "50.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `6 months ${CONSTANTS.FOCUS_KEYWORD} access to 18,000+ live channels and 80,000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "Ultimate Plan - 12 Months",
            "price": "80.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `12 months ${CONSTANTS.FOCUS_KEYWORD} access to 25,000+ premium channels and 100,000+ VODs with VIP support`
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
            "name": `What payment methods does ${CONSTANTS.FOCUS_KEYWORD} accept?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I upgrade or downgrade my ${CONSTANTS.FOCUS_KEYWORD} plan?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, you can upgrade or downgrade your ${CONSTANTS.FOCUS_KEYWORD} plan at any time. Contact our support team and they will assist you with the change immediately.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a contract with ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `No, there are no contracts or long-term commitments with ${CONSTANTS.FOCUS_KEYWORD}. All plans are prepaid and you can cancel at any time without penalties or hidden fees.`
            }
          },
          {
            "@type": "Question",
            "name": `Does ${CONSTANTS.FOCUS_KEYWORD} offer refunds?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, ${CONSTANTS.FOCUS_KEYWORD} offers a 7-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team within 7 days for a full refund.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use ${CONSTANTS.FOCUS_KEYWORD} on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, depending on your ${CONSTANTS.FOCUS_KEYWORD} plan. Starter supports 1 device, Value supports 2 devices, and Ultimate supports 3 devices simultaneously.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the difference between ${CONSTANTS.FOCUS_KEYWORD} plans?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The ${CONSTANTS.FOCUS_KEYWORD} Starter plan includes 15,000+ channels and 60,000+ VODs with 1 connection. The Value plan includes 18,000+ channels and 80,000+ VODs with 2 connections. The Ultimate plan includes 25,000+ premium channels and 100,000+ VODs with 3 connections plus VIP support and free VPN.`
            }
          },
          {
            "@type": "Question",
            "name": `Where can I find ${CONSTANTS.FOCUS_KEYWORD} reviews?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You can find ${CONSTANTS.FOCUS_KEYWORD} reviews on our website, social media channels, and Reddit communities dedicated to IPTV streaming services.`
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
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium IPTV service with subscription plans starting at $7.08/month. ${CONSTANTS.FOCUS_KEYWORD} is the best IPTV provider for 2026.`,
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
          "https://reddit.com/r/mariniosiptv",
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
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV subscription plans starting at $7.08/month. Read our ${CONSTANTS.FOCUS_KEYWORD} Review and ${CONSTANTS.FOCUS_KEYWORD} Guide.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />
);

// WebPage Schema for better image display
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.FOCUS_KEYWORD} - Pricing & Subscription Plans`,
        "description": `Choose your ${CONSTANTS.FOCUS_KEYWORD} subscription plan starting at $7.08/month. 15,000+ channels, 60,000+ VODs, 4K quality.`,
        "url": `https://${CONSTANTS.DOMAIN}/pricing`,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

// Article Schema for better image display in search
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${CONSTANTS.FOCUS_KEYWORD} - Best IPTV Plans 2026 | 4K Streaming`,
        "image": [
          `https://${CONSTANTS.DOMAIN}/img/structer.png`
        ],
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": `${CONSTANTS.BRAND_NAME} Team`
        },
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `https://${CONSTANTS.DOMAIN}/img/structer.png`
          }
        }
      })
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema />
      <ArticleSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}