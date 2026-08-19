import { Metadata } from 'next';

const DOMAIN = 'mariniosiptv.vip';
const FOCUS_KEYWORD = 'Marinios IPTV';
const BRAND_NAME = 'MariniosIPTV';

export const generateSEOMetadata = (pageName: string, description?: string): Metadata => {
  return {
    title: `${pageName} | ${FOCUS_KEYWORD} - ${BRAND_NAME}`,
    description: description || `Experience the best streaming with ${BRAND_NAME}. Premium ${FOCUS_KEYWORD} services for Live TV, Movies, and Shows.`,
    metadataBase: new URL(`https://${DOMAIN}`),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${pageName} | ${FOCUS_KEYWORD} - ${BRAND_NAME}`,
      description: description || `Experience the best streaming with ${BRAND_NAME}.`,
      url: `https://${DOMAIN}`,
      siteName: BRAND_NAME,
      locale: 'en_US',
      type: 'website',
    },
  };
};

export const CONSTANTS = {
  DOMAIN,
  FOCUS_KEYWORD,
  BRAND_NAME,
};
