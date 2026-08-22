import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: `Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
  description: `Step-by-step setup guide for Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac with ${CONSTANTS.BRAND_NAME}. Start streaming in 5 minutes.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} setup`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} installation`,
    'IPTV installation guide',
    'Firestick IPTV setup',
    'Smart TV IPTV tutorial',
    'Android IPTV setup',
    'iOS IPTV installation',
    'Apple TV IPTV guide',
    'PC IPTV setup',
    'best IPTV setup guide',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/setup`,
  },
  openGraph: {
    title: `Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Install ${CONSTANTS.BRAND_NAME} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac in 5 minutes.`,
    url: `https://${CONSTANTS.DOMAIN}/setup`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Setup Guide`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Easy Setup Guide 2026 | ${CONSTANTS.BRAND_NAME}`,
    description: `Step-by-step installation tutorial for all devices. Quick 5-minute setup.`,
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

// JSON-LD HowTo Schema
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Setup ${CONSTANTS.BRAND_NAME} on Any Device`,
        "description": `Complete step-by-step installation guide for ${CONSTANTS.BRAND_NAME} on all supported devices.`,
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
            "name": `Create Your Account`,
            "text": `Sign up and choose your subscription plan. Receive login credentials via email.`,
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Enable Unknown Sources",
            "text": "Go to Settings > My Fire TV > Developer Options > Turn ON Apps from Unknown Sources.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Install Downloader App",
            "text": "Search for Downloader in your device app store and install it.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": `Download and Install App`,
            "text": "Open Downloader, enter the setup code 83492, and install the streaming app.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": `Login with Credentials`,
            "text": `Open the application and enter your Xtream Codes API username, password, and portal URL.`,
            "position": 5
          }
        ],
        "supply": [
          "Streaming device or Smart TV",
          "Stable internet connection",
          `Active ${CONSTANTS.BRAND_NAME} account`
        ],
        "tool": [
          "Downloader application",
          "Media player app"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema
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
            "name": `What devices are compatible with ${CONSTANTS.BRAND_NAME}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.BRAND_NAME} works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG boxes.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does the setup take?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Setup takes approximately 5 minutes from start to finish, including app installation and login.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a VPN?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `A VPN is optional. Our anti-freeze and optimized routing provide stable streaming directly on standard broadband connections.`
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
            "name": "Setup Guide",
            "item": `https://${CONSTANTS.DOMAIN}/setup`
          }
        ]
      })
    }}
  />
);

// JSON-LD Organization Schema
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
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}