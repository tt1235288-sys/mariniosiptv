// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: `Best Subscription Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
  description: `Get premium streaming from $10/mo with ${CONSTANTS.BRAND_NAME}. 15,000+ live 4K channels, movies & sports. Instant setup with 7-day money-back guarantee.`,
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
    title: `Best Subscription Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Subscribe to ${CONSTANTS.BRAND_NAME} from $10/mo. Enjoy 15,000+ live channels, 60,000+ VODs, and live sports in 4K quality.`,
    url: `https://${CONSTANTS.DOMAIN}/pricing`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Subscription Pricing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Best Subscription Plans 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Plans from $10/mo. 15,000+ live channels, 4K sports & movies with instant setup.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    `${CONSTANTS.FOCUS_KEYWORD} subscription`,
    `${CONSTANTS.FOCUS_KEYWORD} plans 2026`,
    `${CONSTANTS.FOCUS_KEYWORD} cost`,
    'best subscription plans',
    'cheap streaming subscription',
    'buy 4K streaming service',
    'reliable sports streaming package',
    'anti freeze live TV provider',
    'premium live TV streaming',
  ],
};

// Pricing Page Product & Offer JSON-LD Schema
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} Subscription Plans`,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "description": `Premium live streaming service with subscription plans starting at $10/month. Access 15,000+ live channels and 60,000+ VODs in 4K quality with anti-freeze technology.`,
        "brand": {
          "@type": "Brand",
          "name": CONSTANTS.BRAND_NAME
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5420",
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
            "description": `3 months access to 15,000+ live channels and 60,000+ VODs in Ultra HD 4K`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "Value Plan - 6 Months",
            "price": "50.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `6 months access to 18,000+ live channels and 80,000+ VODs with multi-device support`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "Ultimate Plan - 12 Months",
            "price": "80.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pricing`,
            "description": `12 months full access to 25,000+ premium channels, 100,000+ VODs, VIP priority support, and free VPN`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          }
        ]
      })
    }}
  />
);

// FAQ Schema
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
            "name": `What payment methods does ${CONSTANTS.BRAND_NAME} accept?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.BRAND_NAME} accepts all major credit cards including Visa, Mastercard, American Express, and Discover, along with PayPal and cryptocurrencies.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a contract or cancellation fee with ${CONSTANTS.BRAND_NAME}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `No, all ${CONSTANTS.BRAND_NAME} packages are 100% prepaid with zero contracts, renewal traps, or cancellation fees.`
            }
          },
          {
            "@type": "Question",
            "name": `Does ${CONSTANTS.BRAND_NAME} provide a money-back guarantee?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we offer an unconditional 7-day money-back guarantee on all subscription packages.`
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
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
      }),
    }}
  />
);

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}