'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import SocialShareBar from '../components/SocialShareBar';
import { 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  CreditCard, 
  Award, 
  Globe, 
  Server, 
  Trophy, 
  Tv, 
  Film, 
  MonitorPlay, 
  Wifi, 
  Calendar, 
  Lock, 
  ThumbsUp, 
  Headphones, 
  Sparkles, 
  LifeBuoy 
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// FAQ Item Component (Semantic Button + Region)
function FAQItem({ question, answer, id }: { question: string; answer: string; id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`w-full bg-slate-900 border ${isOpen ? 'border-yellow-400/50' : 'border-white/10'} rounded-2xl p-6 transition-all duration-300`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center gap-4 group focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <p className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400/80'} flex items-center gap-3`}>
          <span className={`${isOpen ? 'text-yellow-400' : 'text-white/30'} font-black text-2xl`}>Q.</span> 
          {question}
        </p>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-white/30 group-hover:text-yellow-400/50'}`} />
      </button>

      <div 
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
      >
        <p className="text-white/70 leading-relaxed pl-10 md:pl-12 border-l-2 border-yellow-400/30 ml-2 py-2">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.FOCUS_KEYWORD} premium subscription pricing`}
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Best Value Plans 2026</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-6">
              {CONSTANTS.FOCUS_KEYWORD} Pricing Plans{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                Best Deals
              </span>
            </h1>

            {/* Exact Keyword Matched Intro Paragraph */}
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore our verified <strong>{CONSTANTS.FOCUS_KEYWORD} pricing plans</strong> and get the <strong>best deals</strong> for ultra HD 4K live TV, sports, and movies with fast instant activation.
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
      <div id="pricing-section" className="-mt-16 w-full relative z-20">
        <PricingSection />
      </div>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Everything Included In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Every Plan
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            All {CONSTANTS.FOCUS_KEYWORD} subscriptions come standard with these premium features
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
                <p className="font-bold text-white text-lg mb-2">{feature.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* Comparison Table */}
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
              Find the perfect plan for your personal entertainment needs
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

      {/* Trust Badges */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {CONSTANTS.FOCUS_KEYWORD}
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by over 20,000 satisfied customers worldwide
          </p>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-yellow-400" />
            </div>
            <span className="text-xl font-black text-white mb-2 block">Secure Payments</span>
            <p className="text-white/50 text-sm">Encrypted transactions with top-tier gateways for {CONSTANTS.FOCUS_KEYWORD}.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <span className="text-xl font-black text-white mb-2 block">Instant Setup</span>
            <p className="text-white/50 text-sm">Get {CONSTANTS.FOCUS_KEYWORD} credentials instantly after payment confirmation.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-yellow-400" />
            </div>
            <span className="text-xl font-black text-white mb-2 block">Money Back</span>
            <p className="text-white/50 text-sm">7-day money-back guarantee on all {CONSTANTS.FOCUS_KEYWORD} subscription plans.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-yellow-400" />
            </div>
            <span className="text-xl font-black text-white mb-2 block">24/7 Support</span>
            <p className="text-white/50 text-sm">Dedicated support team always ready to help you with any questions.</p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* Social Sharing Bar */}
      <SocialShareBar />

      {/* Money Back Guarantee Banner */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 rounded-2xl p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30 mb-4">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider">Risk-Free Guarantee</span>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mb-3">7-Day Money-Back Guarantee</p>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Try {CONSTANTS.FOCUS_KEYWORD} risk-free for 7 days. If you are not completely satisfied with our service, receive a full refund with no questions asked.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-lg">Everything you need to know about our packages and billing.</p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            id={1}
            question={`What payment methods does ${CONSTANTS.BRAND_NAME} accept?`} 
            answer={`${CONSTANTS.BRAND_NAME} accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal and cryptocurrencies through secure, encrypted checkout gateways.`}
          />
          <FAQItem 
            id={2}
            question="Can I upgrade or downgrade my plan later?" 
            answer="Yes, you can easily upgrade or downgrade your active plan at any time. Simply contact our support team and we will apply the prorated difference directly to your account."
          />
          <FAQItem 
            id={3}
            question="Is there any contract or cancellation fee?" 
            answer="No, all packages are 100% prepaid. There are no contracts, hidden recurring fees, or cancellation charges."
          />
          <FAQItem 
            id={4}
            question="What happens after my subscription expires?" 
            answer="You will receive renewal reminders before your subscription period ends. You can choose to renew anytime or let the service expire without penalty."
          />
          <FAQItem 
            id={5}
            question="How does the 7-day money-back guarantee work?" 
            answer="If you experience any issues or are not satisfied with streaming performance within your first 7 days, reach out to our 24/7 support team for an immediate full refund."
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
              Join over 20,000 satisfied customers enjoying premium entertainment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing-section"
                aria-label="Select Your Subscription Plan"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                Choose Subscription Plan
              </Link>
              <Link
                href="/setup"
                aria-label="Device Setup Tutorial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all"
              >
                <LifeBuoy className="w-4 h-4" />
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-xs">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/60" /> Instant Activation</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-yellow-400/60" /> Secure Checkout</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-yellow-400/60" /> All Major Cards</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}