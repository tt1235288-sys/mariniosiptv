// app/blog/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import { Metadata } from 'next';

// Metadata for Blog Listing Page
export const metadata: Metadata = {
  title: `Blog & News | ${CONSTANTS.FOCUS_KEYWORD} - IPTV Tips, Guides & Updates 2025`,
  description: `Read the latest articles, guides, and news about ${CONSTANTS.FOCUS_KEYWORD}. Learn IPTV setup tips, channel updates, streaming optimization, and entertainment news.`,
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} blog`,
    'IPTV news',
    'streaming tips',
    'IPTV guides',
    'channel updates',
    'Marinios IPTV articles',
    'IPTV tutorials',
    '4K streaming guide',
    'sports streaming tips',
    'IPTV troubleshooting',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/blog`,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Blog & News | IPTV Tips and Guides`,
    description: `Stay updated with the latest ${CONSTANTS.FOCUS_KEYWORD} news, setup guides, channel updates, and streaming tips.`,
    url: `https://${CONSTANTS.DOMAIN}/blog`,
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/blog-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Blog & News`,
    description: `Latest IPTV tips, guides, and news from ${CONSTANTS.FOCUS_KEYWORD}.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/blog-og.jpg`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
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
        "description": "Latest news, guides, and tips about IPTV streaming and entertainment.",
        "url": `https://${CONSTANTS.DOMAIN}/blog`,
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": `https://${CONSTANTS.DOMAIN}/img/logo.webp`
        },
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
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
            "name": "Blog",
            "item": `https://${CONSTANTS.DOMAIN}/blog`
          }
        ]
      })
    }}
  />
);

export default function BlogListing() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-slate-950 px-6 py-24">
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 mt-16 relative z-10">
            {CONSTANTS.BRAND_NAME} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">News</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium relative z-10">
            Stay updated with the latest tips, platform updates, and comprehensive guides for maximizing your {CONSTANTS.FOCUS_KEYWORD} subscription.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col relative transform hover:-translate-y-2 isolate">
              {/* Outer glowing border effect via pseudo-element simulation */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 group-hover:from-yellow-400/50 group-hover:to-yellow-600/30 transition-colors duration-500 p-[1px] z-10">
                <div className="absolute inset-0 bg-slate-950/90 rounded-[2rem] h-full w-full backdrop-blur-xl"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none"></div>
              
              <div className="aspect-[4/5] relative overflow-hidden rounded-[2rem] z-10">
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 opacity-40 transition-all duration-700 ease-in-out" />
              </div>
              
              <div className="absolute top-6 left-6 z-30 flex flex-wrap gap-2">
                {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                  <span key={kw} className="px-3 py-1.5 bg-white/5 backdrop-blur-md text-white/80 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm group-hover:border-yellow-400/30 group-hover:text-yellow-400 transition-colors">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-30 p-8 flex flex-col justify-end h-full">
                <div className="flex-grow"></div>
                <div className="flex items-center gap-3 text-xs font-bold text-yellow-400 mb-4 uppercase tracking-widest drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-400/50 text-yellow-400 flex-shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                    {post.author[0]}
                  </div>
                  <span>{post.author}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/60">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 leading-tight drop-shadow-lg">{post.title}</h3>
                <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-white/70 text-sm leading-relaxed mt-2">{post.description || post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}