import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  Globe, 
  Users, 
  Server, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Film, 
  Tv, 
  Clock, 
  Headphones, 
  Sparkles,
  TrendingUp,
  Heart,
  Star
} from 'lucide-react';

export const metadata = generateSEOMetadata('About Us');

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{CONSTANTS.BRAND_NAME}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover the story behind the world's leading premium IPTV service provider.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "20,000+", label: "Happy Subscribers" },
            { icon: Globe, value: "100+", label: "Countries Covered" },
            { icon: Server, value: "150+", label: "Server Locations" },
            { icon: Trophy, value: "4.9/5", label: "Customer Rating" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all">
              <stat.icon className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Introduction Box */}
        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="text-white/80 text-base leading-relaxed">
                Welcome to <strong className="text-yellow-400">{CONSTANTS.BRAND_NAME}</strong>, the world's leading provider of premium <strong className="text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</strong> services. 
                We built our platform with a single goal in mind: to revolutionize the way you experience television.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Our Mission</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            To provide the most stable, high-definition streaming service at a competitive price, backed by exceptional customer support. 
            We constantly update our VOD library and server technology to keep you ahead of the digital entertainment curve.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Who We Are</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {CONSTANTS.BRAND_NAME} was founded by a team of streaming technology enthusiasts who recognized the need for a reliable, 
            high-quality IPTV service. Traditional cable TV was expensive, inflexible, and offered limited content. Streaming services 
            were fragmented, requiring multiple subscriptions. We set out to create a better solution.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {[
              { icon: ShieldCheck, title: "99.9% Uptime", desc: "Enterprise-grade infrastructure ensures your content is always available" },
              { icon: Zap, title: "Anti-Freeze Tech", desc: "Proprietary streaming technology eliminates buffering" },
              { icon: Globe, title: "Global Coverage", desc: "Servers in 100+ countries for optimal performance" },
              { icon: Headphones, title: "24/7 Support", desc: "Expert support team always ready to assist you" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <item.icon className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</h3>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Our Infrastructure</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Our infrastructure is powered by global CDN networks, ensuring that every stream is delivered to your device with 
            minimal latency and absolute reliability. Whether you are invested in live sports, blockbuster movies, or binge-worthy series, 
            <strong className="text-yellow-400"> {CONSTANTS.BRAND_NAME}</strong> has you covered.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-yellow-400">Technical Excellence:</strong> Our servers are strategically located across North America, 
                  Europe, Asia, Australia, and the Middle East. We use intelligent routing to connect you to the fastest available server.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Our Content Library</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            With <strong className="text-yellow-400">15,000+ live channels</strong> and <strong className="text-yellow-400">60,000+ video-on-demand titles</strong>, 
            our content library is one of the largest in the industry. We offer:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Premium sports networks (ESPN, Sky Sports, BT Sport, BeIN Sports, DAZN)",
              "Breaking news channels (CNN, BBC, Fox News, Sky News, Al Jazeera)",
              "Entertainment (HBO, Showtime, AMC, FX, Comedy Central)",
              "International channels from 100+ countries",
              "Kids content (Nickelodeon, Disney Channel, Cartoon Network)",
              "PPV events included at no extra cost"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Our Commitment to You</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We are committed to providing the best possible IPTV experience. This includes:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "7-day money-back guarantee on all plans",
              "Instant activation after payment",
              "24/7 customer support via live chat and WhatsApp",
              "Regular content updates with new channels and VODs",
              "Transparent pricing with no hidden fees"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-green-400">Our Promise:</strong> We are committed to your satisfaction. If you're not happy with our service, 
                  we'll refund your payment within 7 days. No questions asked.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Join Our Community</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Thousands of satisfied customers have already made the switch to <strong className="text-yellow-400">{CONSTANTS.BRAND_NAME}</strong>. 
            Join our growing community and experience television the way it was meant to be - unlimited, affordable, and high-quality.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience the Best IPTV Service?</h3>
            <p className="text-white/60 text-sm mb-6">
              Join over 20,000 satisfied customers enjoying premium entertainment with {CONSTANTS.FOCUS_KEYWORD}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 transition-all"
              >
                View Our Plans
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

// Missing import
import { CheckCircle } from 'lucide-react';