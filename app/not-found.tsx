'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film, Trophy, Users } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Image with overlay - More visible now */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`${CONSTANTS?.FOCUS_KEYWORD || 'IPTV'} - Page Not Found Background`}
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/60 to-black/80" />
      </div>

      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/15 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        
        <div className="max-w-3xl mx-auto">
          
          {/* 404 Number with Gradient */}
          <div className="mb-8">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                4
              </span>
              <span className="text-white/60">0</span>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                4
              </span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Page Not Found
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
            >
              <Home className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Home</span>
            </Link>
            
            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
            >
              <Tv className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Pricing</span>
            </Link>
            
            <Link
              href="/setup"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
            >
              <Film className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Setup</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
            >
              <Search className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm hover:bg-white/20 hover:border-yellow-400 transition-all"
            >
              View Plans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}