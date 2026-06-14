import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, BookOpen, Eye, Heart, MessageCircle, ArrowRight, Sparkles, Award, Zap, ShieldCheck, Headphones } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return generateSEOMetadata('Post Not Found');
  
  return {
    ...generateSEOMetadata(post.title, post.description),
    keywords: post.keywords.join(', '),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  // JSON-LD Schema Structure
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    image: post.image,
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
        url: `https://${CONSTANTS.DOMAIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`,
    },
  };

  return (
    <article className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
        
        {/* Square Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #facc15 1px, transparent 1px),
              linear-gradient(to bottom, #facc15 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            {post.description}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-yellow-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>{readTime} min read</span>
            </div>
          </div>

        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-sm group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to all articles
        </Link>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            [&>h1]:text-4xl [&>h1]:font-black [&>h1]:text-white [&>h1]:mb-6 [&>h1]:tracking-tight
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-5 [&>h2]:mt-12 [&>h2]:tracking-tight
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-8
            [&>h4]:text-xl [&>h4]:font-bold [&>h4]:text-yellow-400 [&>h4]:mb-3 [&>h4]:mt-6
            [&>p]:text-white/70 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-white/70
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-white/70
            [&>li]:mb-2 [&>li]:text-white/70
            [&>a]:text-yellow-400 [&>a]:hover:text-yellow-300 [&>a]:transition-colors
            [&>blockquote]:border-l-4 [&>blockquote]:border-yellow-400 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-6 [&>blockquote]:text-white/60 [&>blockquote]:italic
            [&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded-lg [&>code]:text-yellow-400 [&>code]:text-sm
            [&>pre]:bg-slate-900 [&>pre]:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-white/10
            [&>img]:rounded-2xl [&>img]:my-8 [&>img]:border [&>img]:border-white/10
            [&>hr]:border-white/10 [&>hr]:my-12
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-yellow-400" />
            <h4 className="text-white font-bold text-lg">Topics</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {post.keywords.map(keyword => (
              <span 
                key={keyword} 
                className="px-4 py-2 bg-white/5 text-white/60 text-sm font-medium rounded-full border border-white/10 hover:border-yellow-400/30 hover:text-yellow-400 transition-all cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Section */}
        <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-950 font-black text-3xl uppercase flex-shrink-0 shadow-lg">
              {post.author[0]}
            </div>
            <div>
              <h4 className="text-white font-black text-2xl mb-1">{post.author}</h4>
              <p className="text-yellow-400 text-sm uppercase tracking-widest font-bold mb-3">Content Editor at {CONSTANTS.BRAND_NAME}</p>
              <p className="text-white/60 leading-relaxed">
                Dedicated to bringing you the best insights, tutorials, and updates about IPTV technology, 
                streaming optimization, and entertainment content. Passionate about helping users get the 
                most out of their viewing experience.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts / CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider">Continue Reading</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">Enjoyed this article?</h3>
          <p className="text-white/60 max-w-md mx-auto mb-6">
            Explore more guides and tutorials to enhance your {CONSTANTS.FOCUS_KEYWORD} experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 transition-all"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
            >
              View Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Footer */}
      <div className="border-t border-white/5 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-white/30 text-xs uppercase tracking-wider">
            <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/50" /> 4K Quality</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-yellow-400/50" /> 99.9% Uptime</span>
            <span className="flex items-center gap-2"><Headphones className="w-3.5 h-3.5 text-yellow-400/50" /> 24/7 Support</span>
          </div>
          <p className="text-center text-white/30 text-xs mt-6">
            © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </article>
  );
}