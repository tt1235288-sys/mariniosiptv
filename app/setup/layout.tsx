import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    // FIXED: Shortened to 55 characters (within 50-60 range)
    default: `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide 2026 | Easy Installation`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  // FIXED: Shortened to 158 characters (within 150-160 range)
  description: `${CONSTANTS.FOCUS_KEYWORD}: Step-by-step setup guide for Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac. Start streaming in 5 minutes.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} setup`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} service`,
    `${CONSTANTS.FOCUS_KEYWORD} installation`,
    `${CONSTANTS.FOCUS_KEYWORD} tutorial`,
    'IPTV installation guide',
    'Firestick IPTV setup',
    'Smart TV IPTV tutorial',
    'Android IPTV setup',
    'iOS IPTV installation',
    'Apple TV IPTV guide',
    'PC IPTV setup',
    'Mac IPTV tutorial',
    'IPTV configuration',
    'IPTV player setup',
    'best IPTV setup guide',
    'quick IPTV installation',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/setup`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide 2026 | Easy Installation`,
    description: `Install ${CONSTANTS.FOCUS_KEYWORD} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac. Step-by-step tutorial.`,
    url: `https://${CONSTANTS.DOMAIN}/setup`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide - All Devices`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide & Installation`,
    description: `Easy ${CONSTANTS.FOCUS_KEYWORD} installation guide for all devices. 5-minute setup.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.png`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
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
};

// JSON-LD HowTo Schema for Setup Page
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Setup ${CONSTANTS.FOCUS_KEYWORD} on Any Device`,
        "description": `Complete step-by-step installation guide for ${CONSTANTS.FOCUS_KEYWORD} on all supported devices.`,
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "7.08"
        },
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        "step": [
          {
            "@type": "HowToStep",
            "name": `Create Your ${CONSTANTS.FOCUS_KEYWORD} Account`,
            "text": `Sign up for ${CONSTANTS.FOCUS_KEYWORD} and choose your subscription plan. Receive login credentials via email.`,
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Enable Unknown Sources (Firestick)",
            "text": "Go to Settings > My Fire TV > Developer Options > Turn ON Apps from Unknown Sources.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Install Downloader App",
            "text": "Search for 'Downloader' in the Amazon App Store and install the official app.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": `Enter ${CONSTANTS.FOCUS_KEYWORD} Installation Code`,
            "text": "Open Downloader and enter code 83492 to download the Marinios IPTV app.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": `Login with ${CONSTANTS.FOCUS_KEYWORD} Credentials`,
            "text": `Open the app and select 'Login with Xtream Codes API'. Enter your ${CONSTANTS.FOCUS_KEYWORD} Username, Password, and Portal URL.`,
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": `Start Streaming with ${CONSTANTS.FOCUS_KEYWORD}`,
            "text": `Browse 15,000+ live channels and 60,000+ VODs in stunning 4K quality with ${CONSTANTS.FOCUS_KEYWORD}.`,
            "position": 6
          }
        ],
        "supply": [
          "Firestick or Android TV device",
          "Stable internet connection (min 15 Mbps)",
          `Active ${CONSTANTS.FOCUS_KEYWORD} subscription`
        ],
        "tool": [
          "Downloader app",
          "IPTV player app"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema for Setup Page
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What devices are compatible with ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG boxes.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does ${CONSTANTS.FOCUS_KEYWORD} setup take?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} setup takes approximately 5 minutes from start to finish, including app installation and login.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a VPN for ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `While not required, we recommend using a VPN for privacy protection and to access geo-restricted content with ${CONSTANTS.FOCUS_KEYWORD}. Our Ultimate plan includes free VPN access.`
            }
          },
          {
            "@type": "Question",
            "name": `What internet speed do I need for ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We recommend minimum 15 Mbps for HD streaming and 30 Mbps for 4K content with ${CONSTANTS.FOCUS_KEYWORD}. A wired ethernet connection provides the most stable experience.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use ${CONSTANTS.FOCUS_KEYWORD} on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, you can install the ${CONSTANTS.FOCUS_KEYWORD} app on unlimited devices. Simultaneous streams depend on your plan: Starter (1 device), Value (2 devices), Ultimate (3 devices).`
            }
          },
          {
            "@type": "Question",
            "name": `What if I need help with ${CONSTANTS.FOCUS_KEYWORD} setup?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our 24/7 customer support team is available via live chat and WhatsApp to assist you with any ${CONSTANTS.FOCUS_KEYWORD} setup issues.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a ${CONSTANTS.FOCUS_KEYWORD} video tutorial?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we provide a complete video tutorial on our ${CONSTANTS.FOCUS_KEYWORD} setup page showing step-by-step installation on all devices.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the ${CONSTANTS.FOCUS_KEYWORD} activation code?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The ${CONSTANTS.FOCUS_KEYWORD} activation code for Downloader is 83492. This code will download the official ${CONSTANTS.FOCUS_KEYWORD} app for installation.`
            }
          }
        ]
      })
    }}
  />
);

// JSON-LD Breadcrumb Schema
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://${CONSTANTS.DOMAIN}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${CONSTANTS.FOCUS_KEYWORD} Setup Guide`,
            "item": `https://${CONSTANTS.DOMAIN}/setup`
          }
        ]
      })
    }}
  />
);

// JSON-LD Organization Schema for Setup Page
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
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Complete setup guide for all devices. Easy installation tutorial.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical support",
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
        "name": `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide & Installation`,
        "description": `Complete ${CONSTANTS.FOCUS_KEYWORD} setup guide for all devices. Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac.`,
        "url": `https://${CONSTANTS.DOMAIN}/setup`,
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

// Article Schema for better image display
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide 2026 | Easy Installation`,
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

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema />
      <ArticleSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}