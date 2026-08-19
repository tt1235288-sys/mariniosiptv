'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import { ShieldCheck, Zap, ChevronDown, CreditCard, ArrowRight, Award, Globe, Server, Trophy, Tv, Film, MonitorPlay, Wifi, Calendar, Lock, ThumbsUp, Users, LifeBuoy, Sparkles, Headphones } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-slate-900 border ${isOpen ? 'border-yellow-400/50' : 'border-white/10'} rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400/80'} flex items-center gap-3`}>
          <span className={`${isOpen ? 'text-yellow-400' : 'text-white/30'} font-black text-2xl`}>Q.</span> 
          {question}
        </h3>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-white/30 group-hover:text-yellow-400/50'}`} />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-white/70 leading-relaxed pl-10 md:pl-12 border-l-2 border-yellow-400/30 ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      
      {/* Hero Section - Full Screen Only */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* Background Image - FIXED: Using Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.FOCUS_KEYWORD} premium IPTV pricing plans - Best ${CONSTANTS.FOCUS_KEYWORD} Subscription Deals`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>
        
        {/* Square Pattern Overlay - ONLY IN HERO */}
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Best Value Plans 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-6">
              {CONSTANTS.FOCUS_KEYWORD} Pricing Plans{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                Best Deals
              </span>
            </h1>
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Enjoy live TV, movies, and sports from anywhere with a fast, reliable {CONSTANTS.FOCUS_KEYWORD} streaming experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-yellow-400/60" /> Cancel Anytime</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/60" /> Instant Activation</span>
              <span className="flex items-center gap-2"><ThumbsUp className="w-3.5 h-3.5 text-yellow-400/60" /> 7-Day Money-Back</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <div className="-mt-16 w-full relative z-20">
        <PricingSection />
      </div>

      {/* Features Section - Boxed Design like Homepage */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Everything Included In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Every Plan
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            All {CONSTANTS.FOCUS_KEYWORD} subscriptions come with these premium features
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "15,000+ Live Channels", desc: `Sports, news, entertainment, and international channels from 100+ countries with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Film, title: "60,000+ VOD Library", desc: `Movies, TV series, and documentaries updated daily on ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: MonitorPlay, title: "4K Ultra HD Quality", desc: `Crystal clear streaming on compatible channels and devices with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Wifi, title: "Anti-Freeze Technology", desc: `Buffer-free playback with advanced streaming optimization from ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Calendar, title: "Full EPG Guide", desc: `7-day electronic program guide for all channels with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Trophy, title: "PPV Events Included", desc: `All major sports PPV events at no extra cost with ${CONSTANTS.FOCUS_KEYWORD}.` },
            { icon: Globe, title: "Global Coverage", desc: `Servers in 100+ countries for low-latency ${CONSTANTS.FOCUS_KEYWORD} streaming.` },
            { icon: Server, title: "99.9% Uptime", desc: `Enterprise-grade infrastructure with redundant servers for ${CONSTANTS.FOCUS_KEYWORD}.` },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Comparison Table - Boxed Design */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Compare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {CONSTANTS.FOCUS_KEYWORD} Plans
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Find the perfect {CONSTANTS.FOCUS_KEYWORD} plan for your streaming needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white font-bold text-lg">Feature</th>
                  <th className="text-center p-4 text-yellow-400 font-bold text-lg">3 Months</th>
                  <th className="text-center p-4 text-yellow-400 font-bold text-lg bg-gradient-to-br from-yellow-400/10 to-transparent">12 Months</th>
                  <th className="text-center p-4 text-yellow-400 font-bold text-lg">6 Months</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: "Live Channels", basic: "15,000+", pro: "25,000+", premium: "18,000+" },
                  { feature: "VOD Library", basic: "60,000+", pro: "100,000+", premium: "80,000+" },
                  { feature: "4K Streaming", basic: "Yes", pro: "Yes", premium: "Yes" },
                  { feature: "Sports PPV", basic: "Basic", pro: "All Included", premium: "Premium" },
                  { feature: "EPG Guide", basic: "Standard", pro: "Full 7-Day", premium: "Full" },
                  { feature: "Anti-Freeze Tech", basic: "Standard", pro: "VIP Advanced", premium: "Pro" },
                  { feature: "VPN Included", basic: "No", pro: "Yes", premium: "No" },
                  { feature: "Multi-Screen", basic: "1 Device", pro: "3 Devices", premium: "2 Devices" },
                  { feature: "Support", basic: "Standard", pro: "VIP Priority", premium: "Priority" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white/80 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-white/60">{row.basic}</td>
                    <td className="p-4 text-center text-yellow-400 font-medium bg-gradient-to-br from-yellow-400/5 to-transparent">{row.pro}</td>
                    <td className="p-4 text-center text-white/60">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges - Boxed Design */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {CONSTANTS.FOCUS_KEYWORD}
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by over 20,000 satisfied customers worldwide - Read our {CONSTANTS.FOCUS_KEYWORD} Review
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-yellow-400" />
            </div>
            <h4 className="text-xl font-black text-white mb-2">Secure Payments</h4>
            <p className="text-white/50 text-sm">Encrypted transactions with top-tier gateways for {CONSTANTS.FOCUS_KEYWORD}.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h4 className="text-xl font-black text-white mb-2">Instant Setup</h4>
            <p className="text-white/50 text-sm">Get {CONSTANTS.FOCUS_KEYWORD} credentials instantly after payment.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-yellow-400" />
            </div>
            <h4 className="text-xl font-black text-white mb-2">Money Back</h4>
            <p className="text-white/50 text-sm">7-day money-back guarantee on all {CONSTANTS.FOCUS_KEYWORD} plans.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-yellow-400" />
            </div>
            <h4 className="text-xl font-black text-white mb-2">24/7 Support</h4>
            <p className="text-white/50 text-sm">Expert support team always ready for {CONSTANTS.FOCUS_KEYWORD} customers.</p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* Money Back Guarantee Banner - Boxed Design */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 rounded-2xl p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30 mb-4">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider">Risk-Free</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">7-Day Money-Back Guarantee</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Try {CONSTANTS.FOCUS_KEYWORD} risk-free for 7 days. Not satisfied? Get a full refund. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ Section - Using FAQItem component */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-lg">Everything you need to know about {CONSTANTS.FOCUS_KEYWORD} pricing and plans.</p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            question={`What payment methods does ${CONSTANTS.FOCUS_KEYWORD} accept?`} 
            answer={`${CONSTANTS.FOCUS_KEYWORD} accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods. All payments are processed through secure, encrypted gateways with SSL technology.`}
          />
          <FAQItem 
            question={`Can I upgrade or downgrade my ${CONSTANTS.FOCUS_KEYWORD} plan?`} 
            answer={`Yes, you can upgrade or downgrade your ${CONSTANTS.FOCUS_KEYWORD} plan at any time. If you upgrade, you'll only pay the price difference. If you downgrade, the credit will be applied to your next billing cycle. Simply contact our support team and they will assist you with the plan change immediately.`}
          />
          <FAQItem 
            question={`Is there a contract with ${CONSTANTS.FOCUS_KEYWORD}?`} 
            answer={`No, there are no contracts or long-term commitments with ${CONSTANTS.FOCUS_KEYWORD}. All plans are prepaid and you can cancel at any time without penalties or hidden fees. You only pay for the duration you choose.`}
          />
          <FAQItem 
            question={`What happens after my ${CONSTANTS.FOCUS_KEYWORD} subscription expires?`} 
            answer={`Before your ${CONSTANTS.FOCUS_KEYWORD} subscription expires, you'll receive email reminders. You can easily renew through your account dashboard or by contacting support. If you don't renew, your access will be suspended but your account data will be preserved for 30 days.`}
          />
          <FAQItem 
            question={`Does ${CONSTANTS.FOCUS_KEYWORD} offer refunds?`} 
            answer={`Yes, ${CONSTANTS.FOCUS_KEYWORD} offers a 7-day money-back guarantee on all plans. If you're not completely satisfied with our streaming quality, channel selection, or customer service, simply contact our support team within 7 days of your purchase for a full refund. No questions asked.`}
          />
          <FAQItem 
            question={`Can I use ${CONSTANTS.FOCUS_KEYWORD} on multiple devices?`} 
            answer={`Yes, depending on your ${CONSTANTS.FOCUS_KEYWORD} plan. The Starter plan supports 1 device simultaneously, the Value plan supports 2 devices, and the Ultimate plan supports 3 devices simultaneously. You can install the app on unlimited devices but simultaneous streams are limited to your plan's allowance.`}
          />
          <FAQItem 
            question={`Does ${CONSTANTS.FOCUS_KEYWORD} offer yearly discounts?`} 
            answer={`Yes, ${CONSTANTS.FOCUS_KEYWORD}'s 12-month Ultimate plan offers the best value with savings of up to 40% compared to monthly plans. We also run seasonal promotions and special discounts for long-term subscribers. Follow our social media channels for current offers.`}
          />
        </FadeInStagger>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Ready to Start Streaming with {CONSTANTS.FOCUS_KEYWORD}?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join over 20,000 satisfied customers enjoying premium {CONSTANTS.FOCUS_KEYWORD} entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing-section"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                Choose Your {CONSTANTS.FOCUS_KEYWORD} Plan
              </Link>
              <Link
                href="/setup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all"
              >
                <LifeBuoy className="w-4 h-4" />
                {CONSTANTS.FOCUS_KEYWORD} Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-xs">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/60" /> Instant {CONSTANTS.FOCUS_KEYWORD} Activation</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-yellow-400/60" /> Secure Checkout</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-yellow-400/60" /> All Major Cards</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}