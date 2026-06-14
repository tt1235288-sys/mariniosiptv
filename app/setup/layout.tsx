import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Setup Guide | ${CONSTANTS.FOCUS_KEYWORD} - Easy Installation Tutorial for All Devices 2025`,
  description: `Follow our complete step-by-step setup guide to install ${CONSTANTS.FOCUS_KEYWORD} on Firestick, Smart TV (Samsung/LG/Sony), Android TV, iOS (iPhone/iPad), Apple TV, Windows PC, and Mac. Start streaming in 5 minutes with our easy tutorial.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} setup`,
    'IPTV installation guide',
    'Firestick IPTV setup',
    'Smart TV IPTV tutorial',
    'Android IPTV setup',
    'iOS IPTV installation',
    'Apple TV IPTV guide',
    'PC IPTV setup',
    'Mac IPTV tutorial',
    'IPTV configuration',
    'Marinios IPTV install',
    'IPTV player setup',
    'best IPTV setup guide',
    'quick IPTV installation',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/setup`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Complete Setup Guide for All Devices`,
    description: `Install ${CONSTANTS.FOCUS_KEYWORD} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac. Step-by-step tutorial with pro tips.`,
    url: `https://${CONSTANTS.DOMAIN}/setup`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Setup Guide - All Devices`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Setup Guide`,
    description: `Easy installation guide for Firestick, Smart TV, Android, iOS, Apple TV, PC, Mac. 5-minute setup.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/logo.webp`],
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
        "description": "Complete step-by-step installation guide for Marinios IPTV on all supported devices.",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "7.08"
        },
        "image": `https://${CONSTANTS.DOMAIN}/img/logo.webp`,
        "step": [
          {
            "@type": "HowToStep",
            "name": "Create Your Account",
            "text": "Sign up for Marinios IPTV and choose your subscription plan. Receive login credentials via email.",
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
            "name": "Enter Installation Code",
            "text": "Open Downloader and enter code 83492 to download the Marinios IPTV app.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": "Login with Credentials",
            "text": "Open the app and select 'Login with Xtream Codes API'. Enter your Username, Password, and Portal URL.",
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": "Start Streaming",
            "text": "Browse 15,000+ live channels and 60,000+ VODs in stunning 4K quality.",
            "position": 6
          }
        ],
        "supply": [
          "Firestick or Android TV device",
          "Stable internet connection (min 15 Mbps)",
          "Active Marinios IPTV subscription"
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
            "name": "What devices are compatible with Marinios IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marinios IPTV works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG boxes."
            }
          },
          {
            "@type": "Question",
            "name": "How long does setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setup takes approximately 5 minutes from start to finish, including app installation and login."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a VPN for Marinios IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not required, we recommend using a VPN for privacy protection and to access geo-restricted content. Our Ultimate plan includes free VPN access."
            }
          },
          {
            "@type": "Question",
            "name": "What internet speed do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend minimum 15 Mbps for HD streaming and 30 Mbps for 4K content. A wired ethernet connection provides the most stable experience."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Marinios IPTV on multiple devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can install the app on unlimited devices. Simultaneous streams depend on your plan: Starter (1 device), Value (2 devices), Ultimate (3 devices)."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need help during setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 24/7 customer support team is available via live chat and WhatsApp to assist you with any setup issues."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a setup video tutorial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide a complete video tutorial on our setup page showing step-by-step installation on all devices."
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

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}