'use client';

import { Share2, MessageSquare, Twitter, Facebook, Send, Bookmark } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import { FadeIn } from './AnimatedSection';

export default function SocialShareBar() {
  const shareUrl = `https://${CONSTANTS.DOMAIN}`;
  const shareText = encodeURIComponent(
    `${CONSTANTS.FOCUS_KEYWORD} - Premium 4K Streaming & Live TV 2026`
  );
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      url: `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`,
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40',
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`,
      badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-500/40',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40',
    },
    {
      name: 'Reddit',
      icon: Bookmark,
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${shareText}`,
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40',
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-1/4 h-32 w-48 bg-yellow-400/5 blur-[60px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Info Column */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                <Share2 className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <span className="text-sm md:text-base font-black uppercase tracking-wider text-white block">
                  Share {CONSTANTS.FOCUS_KEYWORD}
                </span>
                <p className="text-xs md:text-sm text-white/50 font-medium mt-0.5">
                  Spread the word with fellow sports fans and cord-cutters.
                </p>
              </div>
            </div>

            {/* Right Buttons Grid */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {shareLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${item.name}`}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${item.badge}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}