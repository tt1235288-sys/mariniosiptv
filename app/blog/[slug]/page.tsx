import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SocialShareBar from '@/app/components/SocialShareBar';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Headphones,
  CheckCircle2
} from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return generateSEOMetadata('Article Not Found');
  
  // Clean short title (< 42 chars). Next.js layout template will append the brand once.
  const shortTitle = post.title.length > 40 ? post.title.substring(0, 38) + '...' : post.title;
  
  const rawDesc = post.description || post.excerpt || `Read the complete guide about ${post.title}.`;
  const cleanDescription = rawDesc.length > 135 ? rawDesc.substring(0, 132) + '...' : rawDesc;
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`;
  const articleImage = post.image.startsWith('http') ? post.image : `https://${CONSTANTS.DOMAIN}${post.image}`;
  
  return {
    // Only return the article title - DO NOT append brand name here to prevent double brand stacking
    title: shortTitle,
    description: cleanDescription,
    keywords: post.keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME}`,
      description: cleanDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: articleImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME}`,
      description: cleanDescription,
      images: [articleImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));
  const displayCategory = post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'Streaming Guide';
  const articleImage = post.image.startsWith('http') ? post.image : `https://${CONSTANTS.DOMAIN}${post.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords?.join(', '),
    image: articleImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: articleImage,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
    },
  };

  return (
    <article className="flex flex-col min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-fit md:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>
        
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 sm:pt-36 md:pt-40 pb-12 md:pb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-3 py-1.5 bg-yellow-400/20 text-yellow-400 text-xs font-black uppercase tracking-widest rounded-full border border-yellow-400/30">
              {displayCategory}
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
            {post.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-white/50 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-10">
        <Link 
          href="/blog" 
          aria-label="Return to Blog List"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to all articles
        </Link>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Shortened Strong Tags in Takeaways Box */}
        <div className="mb-10 p-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-black text-lg tracking-wide uppercase">Key Takeaways & Summary</span>
          </div>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
            In this guide, our technical team breaks down essential insights regarding <strong>streaming optimization</strong>, exploring how to fix network bottlenecks and maintain stable 4K playback.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Verified 2026 troubleshooting steps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Recommended network & device settings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Anti-freeze streaming compatibility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Expert guidance for Smart TVs & Firestick</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-invert prose-base md:prose-lg max-w-none
            [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:lg:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-4 [&>h2]:md:mb-5 [&>h2]:mt-8 [&>h2]:md:mt-12 [&>h2]:tracking-tight
            [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-3 [&>h3]:md:mb-4 [&>h3]:mt-6 [&>h3]:md:mt-8
            [&>h4]:text-base [&>h4]:md:text-lg [&>h4]:lg:text-xl [&>h4]:font-bold [&>h4]:text-yellow-400 [&>h4]:mb-2 [&>h4]:md:mb-3 [&>h4]:mt-4 [&>h4]:md:mt-6
            [&>p]:text-white/70 [&>p]:text-sm [&>p]:md:text-base [&>p]:lg:text-lg [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:md:mb-6
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:md:pl-6 [&>ul]:mb-4 [&>ul]:md:mb-6 [&>ul]:text-white/70
            [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:md:pl-6 [&>ol]:mb-4 [&>ol]:md:mb-6 [&>ol]:text-white/70
            [&>li]:mb-1.5 [&>li]:md:mb-2 [&>li]:text-white/70
            [&>a]:text-yellow-400 [&>a]:hover:text-yellow-300 [&>a]:transition-colors
            [&>blockquote]:border-l-4 [&>blockquote]:border-yellow-400 [&>blockquote]:pl-4 [&>blockquote]:md:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-4 [&>blockquote]:md:my-6 [&>blockquote]:text-white/60 [&>blockquote]:italic
            [&>img]:rounded-2xl [&>img]:my-6 [&>img]:md:my-8 [&>img]:border [&>img]:border-white/10 [&>img]:w-full [&>img]:h-auto
            [&>hr]:border-white/10 [&>hr]:my-8 [&>hr]:md:my-12
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share Bar */}
        <div className="my-10">
          <SocialShareBar />
        </div>

        {/* Tags Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Tag className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            <span className="text-white font-bold text-base md:text-lg">Related Topics</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {post.keywords?.slice(0, 8).map((keyword) => (
              <span 
                key={keyword} 
                className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 text-white/60 text-xs md:text-sm font-medium rounded-full border border-white/10"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Section */}
        <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-950 font-black text-2xl md:text-3xl uppercase flex-shrink-0 shadow-lg">
              {post.author[0]}
            </div>
            <div>
              <p className="text-white font-black text-xl md:text-2xl mb-1">{post.author}</p>
              <p className="text-yellow-400 text-xs md:text-sm uppercase tracking-widest font-bold mb-2 md:mb-3">
                Streaming Technology Specialist
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Dedicated to bringing you tutorials, setup guides, and optimization tips for high-quality live streaming.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-yellow-400/30 mb-3 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">Premium Entertainment</span>
          </div>
          <p className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">
            Ready for Buffer-Free 4K Streaming?
          </p>
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mb-6">
            Get instant access to over 15,000 live channels and 60,000+ movies on all your devices.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link 
              href="/pricing" 
              aria-label="View Subscription Packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold text-sm md:text-base hover:bg-yellow-300 transition-all"
            >
              <span>Explore Plans</span> 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Footer */}
      <div className="border-t border-white/5 mt-8 md:mt-12 py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/30 text-[10px] md:text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5 md:gap-2"><Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400/50" /> 4K Ultra HD</span>
            <span className="flex items-center gap-1.5 md:gap-2"><ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400/50" /> 99.9% Uptime</span>
            <span className="flex items-center gap-1.5 md:gap-2"><Headphones className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400/50" /> 24/7 Live Support</span>
          </div>
          <p className="text-center text-white/30 text-[10px] md:text-xs mt-4 md:mt-6">
            © 2026 {CONSTANTS.BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </article>
  );
}