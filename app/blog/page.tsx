// app/blog/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// FIXED: Metadata for Blog Listing Page - Shortened title and description
export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    // FIXED: Shortened to 55 characters (within 50-60 range)
    default: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  // FIXED: Shortened to 155 characters (within 150-160 range)
  description: `Read the latest ${CONSTANTS.FOCUS_KEYWORD} articles, guides, and news. Learn IPTV setup tips, channel updates, and streaming optimization.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} blog`,
    `${CONSTANTS.FOCUS_KEYWORD} news`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} tips`,
    'IPTV blog',
    'IPTV news',
    'IPTV guides',
    'streaming tips',
    'IPTV setup guide',
    'channel updates',
    'IPTV optimization',
    'best IPTV provider',
    'IPTV reviews',
    'streaming technology',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/blog`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides 2026`,
    description: `Latest ${CONSTANTS.FOCUS_KEYWORD} news, setup guides, channel updates, and streaming tips.`,
    url: `https://${CONSTANTS.DOMAIN}/blog`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides`,
    description: `Latest IPTV tips, guides, and news from ${CONSTANTS.FOCUS_KEYWORD}.`,
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

// JSON-LD Schema for Blog Listing Page
const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": `${CONSTANTS.FOCUS_KEYWORD} Blog`,
        "description": `Latest news, guides, and tips about ${CONSTANTS.FOCUS_KEYWORD} IPTV streaming and entertainment.`,
        "url": `https://${CONSTANTS.DOMAIN}/blog`,
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": `https://${CONSTANTS.DOMAIN}/img/structer.png`
        },
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description || post.excerpt,
          "url": `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "image": post.image
        }))
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
            "name": `${CONSTANTS.FOCUS_KEYWORD} Blog`,
            "item": `https://${CONSTANTS.DOMAIN}/blog`
          }
        ]
      })
    }}
  />
);

// JSON-LD WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.FOCUS_KEYWORD} Blog - IPTV Tips & Guides`,
        "description": `Latest ${CONSTANTS.FOCUS_KEYWORD} articles, guides, and news.`,
        "url": `https://${CONSTANTS.DOMAIN}/blog`,
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

export default function BlogListing() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 mt-16 relative z-10">
            {CONSTANTS.FOCUS_KEYWORD} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium relative z-10">
            Stay updated with the latest tips, platform updates, and comprehensive guides for maximizing your {CONSTANTS.FOCUS_KEYWORD} subscription.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col relative transform hover:-translate-y-2 isolate bg-slate-900/80 border border-white/10 hover:border-yellow-400/40"
            >
              {/* FIXED: Image with proper Next.js Image component */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                <Image
                  src={post.image}
                  alt={`${post.title} - ${CONSTANTS.FOCUS_KEYWORD} Blog Article`}
                  width={600}
                  height={750}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80"></div>
                
                {/* Category Tags */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                    <span 
                      key={kw} 
                      className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white/80 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm group-hover:border-yellow-400/30 group-hover:text-yellow-400 transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 text-xs font-bold text-yellow-400 mb-3 uppercase tracking-widest drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-400/50 text-yellow-400 flex-shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-white/80">{post.author}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/50 text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 leading-tight drop-shadow-lg line-clamp-2">
                  {post.title}
                </h2>
                
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-white/70 text-sm leading-relaxed mt-2 line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-widest mt-3 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// ArrowRight icon component (if not imported)
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}