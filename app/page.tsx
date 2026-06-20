'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
// app/page.tsx - Fix the import statement

import { 
  PlayCircle, 
  ShieldCheck, 
  MonitorPlay, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  Star, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Headphones, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Wifi, 
  Database, 
  TrendingUp, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield  // ✅ ADD THIS - it was missing
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Import blog posts directly (since we're in a client component, we need to fetch them)
// We'll use useEffect to load them, or we can import them directly
import { blogPosts } from '@/lib/blog';

// ✅ Lazy load heavy components with loading states - REMOVED ssr: false
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="py-20 text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-slate-800 animate-pulse rounded-xl" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => (
    <div className="flex gap-8 py-8 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-24 h-24 bg-slate-800 animate-pulse rounded-full flex-shrink-0" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-slate-800 animate-pulse rounded-2xl flex items-center justify-center">
      <div className="text-white/50">Loading map...</div>
    </div>
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="py-20 text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  // For client-side only rendering of components that use window/document
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render components that need client-side features after mount
  const showClientComponents = isMounted;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section with Blur Background Image */}
      <section className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`${CONSTANTS.FOCUS_KEYWORD} Premium Streaming Background`}
            width={1920}
            height={1080}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
            className="w-full h-full object-cover"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/15 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">#1 Rated IPTV Service 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white mb-6 drop-shadow-2xl">
            {CONSTANTS.FOCUS_KEYWORD} - BEST <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">IPTV</span> PROVIDER
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mb-6 font-medium drop-shadow-md leading-relaxed">
            Welcome to <strong className="text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</strong> - The most reliable premium IPTV provider with 15,000+ live channels, 60,000+ VODs, and crystal-clear 4K streaming. Experience the best IPTV subscription for sports, movies, and entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 rounded-full bg-yellow-400 text-slate-950 font-black text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)]">
              Get Started Now
            </Link>
            <Link href="#channels" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:border-yellow-400 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" /> View Channels
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-yellow-400 font-bold uppercase tracking-widest backdrop-blur-sm bg-white/5 px-8 py-4 rounded-3xl border border-white/10">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5" /> 4K Quality</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 99.9% Uptime</span>
            <span className="flex items-center gap-2"><Activity className="w-5 h-5" /> Anti-Freeze Tech</span>
            <span className="flex items-center gap-2"><Headphones className="w-5 h-5" /> 24/7 Support</span>
          </div>
        </FadeIn>
      </section>

      {/* Lazy loaded components - will only render on client */}
      {showClientComponents ? (
        <PartnerSlider />
      ) : (
        <div className="py-8">
          <div className="flex gap-8 py-8 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-24 h-24 bg-slate-800 animate-pulse rounded-full flex-shrink-0" />
            ))}
          </div>
        </div>
      )}

      {/* 3-Step Setup - Glassmorphism Style */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
               <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Quick Start Guide</span>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">START STREAMING IN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">3 EASY STEPS</span></h2>
               <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">Getting started with {CONSTANTS.FOCUS_KEYWORD} takes just minutes. Follow our simple three-step process and begin watching immediately.</p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[40%] left-[16%] right-[16%] h-1 border-t-2 border-dashed border-white/20 -translate-y-1/2" />
            
            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white/10 flex items-center justify-center mb-8 group-hover:border-yellow-400/50 group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-lg">1</div>
                <CreditCard className="w-10 h-10 text-white/50 group-hover:text-yellow-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Choose Your Plan</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xs">Select the package that fits your entertainment needs with {CONSTANTS.FOCUS_KEYWORD}. All plans include instant email activation.</p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-[3rem] group-hover:bg-yellow-400/20 transition-all duration-500" />
              <div className="w-28 h-28 rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.2)] flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-lg">2</div>
                <Download className="w-12 h-12 text-yellow-400 relative z-10" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Install on Any Device</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xs">{CONSTANTS.FOCUS_KEYWORD} works on Smart TVs, Firestick, Android, iOS, and more. Follow our simple setup guides.</p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white/10 flex items-center justify-center mb-8 group-hover:border-yellow-400/50 group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-lg">3</div>
                <Tv2 className="w-10 h-10 text-white/50 group-hover:text-yellow-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase">Enjoy Premium Content</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xs">Start watching 15,000+ live channels and 60,000+ VODs instantly with {CONSTANTS.FOCUS_KEYWORD}.</p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* 5. Animated Statistics Trust Section */}
      <section className="py-24 bg-slate-900 rounded-[3rem] mx-4 sm:mx-8 mb-24 border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight"><span className="text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</span> By The Numbers</h3>
            <p className="text-white/60 mt-4">Real statistics that prove why {CONSTANTS.FOCUS_KEYWORD} is the industry leader in IPTV entertainment</p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><AnimatedCounter value={20} suffix="K+" /></span>
              <span className="text-sm text-yellow-400 font-bold uppercase tracking-widest mt-2">Happy Subscribers</span>
              <p className="text-white/40 text-xs mt-1">Trust {CONSTANTS.FOCUS_KEYWORD}</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><AnimatedCounter value={15} suffix="K+" /></span>
              <span className="text-sm text-yellow-400 font-bold uppercase tracking-widest mt-2">Live Channels</span>
              <p className="text-white/40 text-xs mt-1">Global & Local</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><AnimatedCounter value={60} suffix="K+" /></span>
              <span className="text-sm text-yellow-400 font-bold uppercase tracking-widest mt-2">Movies & Series</span>
              <p className="text-white/40 text-xs mt-1">Updated Daily</p>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><AnimatedCounter value={99.9} decimals={1} suffix="%" /></span>
              <span className="text-sm text-yellow-400 font-bold uppercase tracking-widest mt-2">Server Uptime</span>
              <p className="text-white/40 text-xs mt-1">99.9% Guaranteed</p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="py-24 max-w-[100vw] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight"><span className="text-yellow-400">PREMIUM</span> CONTENT LIBRARY</h2>
            <p className="text-white/60 text-lg">Explore thousands of live channels, blockbuster movies, hit series, and exclusive sports events included with your {CONSTANTS.FOCUS_KEYWORD} subscription.</p>
          </div>
        </FadeIn>
        {showClientComponents ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-slate-800 animate-pulse rounded-xl" />
            ))}
          </div>
        )}
      </section>

      {/* Lazy loaded Pricing Section */}
      {showClientComponents ? (
        <PricingSection />
      ) : (
        <div className="py-20 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
        </div>
      )}

      {/* Trust Badges - Glassmorphism */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 md:p-12">
          <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Lock className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-xl">Secure Payments</h4>
                <p className="text-white/50 text-sm">100% encrypted checkout with {CONSTANTS.FOCUS_KEYWORD}</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <ThumbsUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-xl">7-Day Money-Back</h4>
                <p className="text-white/50 text-sm">Risk-free trial period with {CONSTANTS.FOCUS_KEYWORD}</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <LifeBuoy className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-xl">24/7 Support</h4>
                <p className="text-white/50 text-sm">Live chat & email for {CONSTANTS.FOCUS_KEYWORD} customers</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Medal className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-xl">#1 Rated IPTV</h4>
                <p className="text-white/50 text-sm">{CONSTANTS.FOCUS_KEYWORD} trusted by thousands</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Lazy loaded Global Map */}
      {showClientComponents ? (
        <GlobalServerMap />
      ) : (
        <div className="h-[400px] bg-slate-800 animate-pulse rounded-2xl flex items-center justify-center">
          <div className="text-white/50">Loading map...</div>
        </div>
      )}

      {/* Benefits Section - Pattern Background */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0z' fill='none'/%3E%3Ccircle cx='15' cy='15' r='1' fill='%23facc15' fill-opacity='0.3'/%3E%3C/svg%3E")` }} />
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Why <span className="text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</span> Is The Best IPTV Choice</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">Thousands of customers have switched to our IPTV service. Here's why {CONSTANTS.FOCUS_KEYWORD} outperforms traditional cable and other providers.</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: Database, title: "Massive Content Library", desc: `${CONSTANTS.FOCUS_KEYWORD} offers 15,000+ live channels including sports, news, entertainment, kids, and international programming plus 60,000+ movies and series on demand.` },
            { icon: Activity, title: "Anti-Freeze Technology", desc: "Our proprietary streaming technology eliminates buffering and freezing with {CONSTANTS.FOCUS_KEYWORD}. Watch your favorite content without interruptions, even during peak hours." },
            { icon: Server, title: "Global Server Network", desc: `With servers across 100+ countries, ${CONSTANTS.FOCUS_KEYWORD} delivers low-latency streaming no matter where you are.` },
            { icon: Trophy, title: "Premium Sports Coverage", desc: `Get all PPV events, football leagues, UFC, boxing, NBA, NFL, NHL, and more with ${CONSTANTS.FOCUS_KEYWORD}. Never miss a game.` },
            { icon: Calendar, title: "24/7 EPG Guide", desc: `Our Electronic Program Guide keeps you informed about what's playing now and next across all ${CONSTANTS.FOCUS_KEYWORD} channels.` },
            { icon: Users, title: "Multi-Screen Support", desc: `Watch ${CONSTANTS.FOCUS_KEYWORD} on multiple devices simultaneously. Perfect for families with different viewing preferences.` }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-yellow-400/30 hover:bg-white/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Channel Categories - Glassmorphism Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Channel <span className="text-yellow-400">Categories</span></h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">Our comprehensive {CONSTANTS.FOCUS_KEYWORD} channel lineup covers every genre and interest.</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cat: "Sports", channels: "ESPN, Sky Sports, BT Sport, BeIN Sports, DAZN, NFL Network, NBA TV", icon: Trophy },
            { cat: "News", channels: "CNN, BBC News, Fox News, Sky News, Al Jazeera, CNBC, Bloomberg", icon: Globe },
            { cat: "Entertainment", channels: "HBO, Showtime, Starz, AMC, FX, TNT, Comedy Central", icon: Tv },
            { cat: "Kids", channels: "Nickelodeon, Disney Channel, Cartoon Network, BabyFirst, Nick Jr.", icon: Shield },
            { cat: "International", channels: "Arabic, French, German, Spanish, Italian, Turkish, Indian", icon: Globe },
            { cat: "Music", channels: "MTV, VH1, CMT, Stingray Music, Club MTV", icon: Volume2 },
            { cat: "Movies", channels: "TCM, Paramount Network, Syfy, TBS, TNT Movies", icon: Film },
            { cat: "PPV Sports", channels: "All major UFC, Boxing, WWE, and Sports PPV events", icon: Trophy }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-yellow-400/30 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-yellow-400" />
                  <h4 className="font-bold text-yellow-400">{item.cat}</h4>
                </div>
                <p className="text-white/50 text-xs">{item.channels}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Premium Feature Blocks */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8">

          {/* Block 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(250,204,21,0.08)] lg:rounded-[2.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt={`${CONSTANTS.FOCUS_KEYWORD} 4K IPTV streaming quality with movies and live channels`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/35 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-yellow-400/30 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-widest text-yellow-400 backdrop-blur-md">
                  Premium Quality
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-black">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-white">4K Ultra HD</p>
                      <p className="text-xs font-medium text-white/55">
                        Movies, series, and live TV in smooth quality with {CONSTANTS.FOCUS_KEYWORD}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Crystal Clear IPTV Streaming
              </span>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Experience Premium
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  4K Streaming Quality
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
                With <strong>{CONSTANTS.FOCUS_KEYWORD}</strong>, you get a powerful IPTV experience designed for smooth live TV, movies, sports, and series. Watch your favorite entertainment in HD, Full HD, and 4K quality on supported channels and devices.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
                Our optimized streaming technology helps reduce freezing, buffering, and low-quality playback, giving customers a more reliable way to enjoy premium IPTV content from anywhere.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'HD, Full HD & 4K channels',
                  'Smooth anti-freeze streaming',
                  'Movies and series on demand',
                  'Works on Smart TV, Android, iOS & Firestick',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <Link
                href="/pricing"
                className="mt-8 inline-flex rounded-full bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
              >
                Start Your {CONSTANTS.FOCUS_KEYWORD} Trial
              </Link>
            </FadeIn>
          </div>

          {/* Block 2 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Live Sports & PPV Events
              </span>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Never Miss The
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Biggest Live Events
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
                Sports fans can enjoy live football, basketball, boxing, UFC, Formula 1, tennis, and major international tournaments with <strong>{CONSTANTS.FOCUS_KEYWORD}</strong>. Get access to premium sports channels and live event coverage in one IPTV subscription.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
                Whether you watch daily matches or special PPV events, {CONSTANTS.FOCUS_KEYWORD} is built to deliver fast channel loading, stable playback, and high-quality streams for the moments that matter most.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Live football and global leagues',
                  'Boxing, UFC and PPV events',
                  'Premium sports channels',
                  'Low-latency streaming experience',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <Link
                href="/pricing"
                className="mt-8 inline-flex rounded-full border-2 border-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-yellow-400 transition hover:scale-105 hover:bg-yellow-400 hover:text-slate-950"
              >
                Explore Sports Packages
              </Link>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(250,204,21,0.08)] lg:order-2 lg:rounded-[2.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt={`${CONSTANTS.FOCUS_KEYWORD} live sports IPTV streaming and PPV events`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-400 backdrop-blur-md">
                  Live Now
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-white sm:text-2xl">
                        Live VIP Sports
                      </p>
                      <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                        Premium IPTV Sports Channels
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Comparison Table - Redesigned */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-yellow-400/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <BarChart className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{CONSTANTS.FOCUS_KEYWORD} vs Traditional Cable</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">See why thousands are cutting the cord and switching to {CONSTANTS.FOCUS_KEYWORD}, the smarter, more affordable IPTV solution.</p>
          </FadeIn>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                {/* Header */}
                <div className="p-6 border-b border-r border-white/10 bg-white/5">
                  <h3 className="text-xl font-bold text-white">Feature</h3>
                </div>
                <div className="p-6 border-b border-r border-white/10 bg-gradient-to-r from-yellow-400/10 to-transparent">
                  <h3 className="text-xl font-bold text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</h3>
                </div>
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white/40">Traditional Cable</h3>
                </div>
                
                {/* Rows */}
                {[
                  { feature: "Monthly Cost", us: "Starting at $15/month", cable: "$80-$150 per month", highlight: true },
                  { feature: "Contract Required", us: "No contract", cable: "12-24 month commitment", usIcon: true, cableIcon: false },
                  { feature: "Live Channels", us: "15,000+", cable: "100-300", highlight: true },
                  { feature: "VOD Library", us: "60,000+ movies & series", cable: "Limited or pay-per-view" },
                  { feature: "4K Streaming", us: "Yes", cable: "Rarely", usIcon: true, cableIcon: false },
                  { feature: "Multi-device Support", us: "Unlimited devices", cable: "Extra fees per TV", usIcon: true, cableIcon: false },
                  { feature: "Sports PPV Included", us: "All included", cable: "Extra $50-$100 per event", usIcon: true, cableIcon: false },
                  { feature: "Global Channels", us: "100+ countries", cable: "Local only", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      <span className="text-white/80 font-medium">{row.feature}</span>
                    </div>
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400">{row.us}</span>
                        </div>
                      ) : (
                        <span className={`${row.highlight ? 'text-yellow-400 font-bold' : 'text-white/80'}`}>{row.us}</span>
                      )}
                    </div>
                    <div className={`p-6 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      {row.cableIcon === false ? (
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 line-through">{row.cable}</span>
                        </div>
                      ) : (
                        <span className="text-white/40">{row.cable}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Monthly Cost", us: "Starting at $15/month", cable: "$80-$150/month" },
              { feature: "Contract Required", us: "No contract", cable: "12-24 month commitment" },
              { feature: "Live Channels", us: "15,000+", cable: "100-300" },
              { feature: "VOD Library", us: "60,000+ movies & series", cable: "Limited" },
              { feature: "4K Streaming", us: "Yes", cable: "Rarely" },
              { feature: "Multi-device", us: "Unlimited", cable: "Extra fees" },
              { feature: "Sports PPV", us: "All included", cable: "Extra $50-100" },
              { feature: "Global Channels", us: "100+ countries", cable: "Local only" }
            ].map((row, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <div className="text-center mb-4">
                  <span className="text-white/60 text-sm uppercase tracking-wider">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div className="text-yellow-400 font-bold text-lg">{row.us}</div>
                    <div className="text-xs text-yellow-400/60">Marinios IPTV</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 line-through text-lg">{row.cable}</div>
                    <div className="text-xs text-white/40">Cable</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <FadeIn className="text-center mt-8">
            <p className="text-white/50 text-sm">* {CONSTANTS.FOCUS_KEYWORD} offers the best value in IPTV entertainment. No hidden fees, no surprises.</p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials - Glassmorphism */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Trusted by <span className="text-yellow-400">20,000+</span> Customers</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Join thousands of satisfied subscribers who have transformed their TV experience with {CONSTANTS.FOCUS_KEYWORD}.</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Michael Thompson", rating: 5, text: `I've tried several IPTV services, but ${CONSTANTS.FOCUS_KEYWORD} is by far the best. The 4K quality is incredible, and I never experience buffering.`, role: "Sports Fan" },
            { name: "Sarah Johnson", rating: 5, text: `Finally cut the cord with my cable company. ${CONSTANTS.FOCUS_KEYWORD} has all the channels my family watches plus thousands more.`, role: "Mother of 3" },
            { name: "David Chen", rating: 5, text: `The international channel selection is amazing. ${CONSTANTS.FOCUS_KEYWORD} is the best IPTV provider I've found.`, role: "Expat" }
          ].map((testimonial, idx) => (
            <FadeInItem key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-yellow-400 text-sm">{testimonial.role}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Device Support - Pattern Background */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Crect x='18' y='18' width='4' height='4' fill='%23facc15'/%3E%3C/svg%3E")` }} />
        <FadeIn className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Works On All Your Devices</h3>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mb-16">{CONSTANTS.FOCUS_KEYWORD} is compatible with almost every device. Install our recommended apps and start watching instantly.</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { tag: "Smart TVs", icon: Tv2 },
            { tag: "Android TV", icon: Cpu },
            { tag: "iOS & Apple TV", icon: MonitorSmartphone },
            { tag: "Firestick", icon: Zap },
            { tag: "Windows / Mac", icon: MonitorPlay },
            { tag: "MAG Boxes", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <FadeInItem key={device.tag} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-yellow-400/50 hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer group">
                <Icon className="w-12 h-12 text-white/30 group-hover:text-yellow-400 group-hover:scale-110 transition-all" />
                <span className="text-sm font-bold text-white/80 group-hover:text-white text-center">{device.tag}</span>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Lazy loaded FAQ */}
      {showClientComponents ? (
        <FAQ />
      ) : (
        <div className="py-20 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
        </div>
      )}

      {/* Blog Section - Pattern Background */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23facc15' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/svg%3E")` }} />
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Latest <span className="text-yellow-400">News & Guides</span></h3>
            <p className="text-white/60 text-lg">Stay updated with our latest {CONSTANTS.FOCUS_KEYWORD} features, channel updates, and streaming tutorials.</p>
          </div>
          <Link href="/blog" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(0, 3).map((post) => (
             <FadeInItem key={post.id} className="group cursor-pointer">
               <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-900 border border-white/10 shadow-lg">
                 <Image 
                   src={post.image} 
                   alt={`${post.title} - ${CONSTANTS.FOCUS_KEYWORD} Blog Article`} 
                   width={800}
                   height={450}
                   loading="lazy"
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   sizes="(max-width: 768px) 100vw, 33vw"
                   placeholder="blur"
                   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-6 left-6">
                   <span className="px-3 py-1 bg-yellow-400 text-slate-950 text-xs font-black uppercase tracking-widest rounded-lg mb-3 inline-block">
                     {post.author}
                   </span>
                 </div>
               </div>
               <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors uppercase tracking-tight line-clamp-2">{post.title}</h4>
               <p className="text-white/60 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
               <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest flex items-center gap-2">
                 Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </span>
             </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Final CTA Section - Fixed Background Image */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.08),_transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-black shadow-[0_0_80px_rgba(250,204,21,0.08)] lg:rounded-[3rem]">
            
            {/* Background Image */}
            <Image
              src="/img/bg-2.webp"
              alt={`${CONSTANTS.FOCUS_KEYWORD} premium IPTV streaming service`}
              width={1400}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//Z"
            />

            {/* Image Overlays */}
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

            {/* Glow */}
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[110px]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 backdrop-blur-md">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L13 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7 7L10 2Z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                  Premium IPTV Service
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Upgrade Your
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Entertainment Experience
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Stream live TV channels, premium sports, movies, and series in HD and 4K with{' '}
                <strong>{CONSTANTS.FOCUS_KEYWORD}</strong>. Fast activation, smooth playback, and support for all popular devices.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['4K', 'Ultra HD'],
                  ['99.9%', 'Uptime'],
                  ['24/7', 'Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md"
                  >
                    <div className="text-2xl font-black text-yellow-400 sm:text-3xl">
                      {value}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/55">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-10 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.35)] transition-all hover:scale-105 hover:bg-yellow-300 sm:w-auto"
                >
                  View {CONSTANTS.FOCUS_KEYWORD} Plans
                </Link>

                <Link
                  href="/setup"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/15 sm:w-auto"
                >
                  <Settings className="h-5 w-5" />
                  Setup Guide
                </Link>
              </div>

              <p className="mt-8 text-sm font-medium text-white/50">
                Trusted worldwide • Secure payments • Fast activation
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}