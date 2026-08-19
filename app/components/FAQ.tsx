'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: "What devices are supported by MARINIOS IPTV?", 
    a: "Our MARINIOS IPTV service is compatible with almost all devices including Smart TVs (Samsung, LG), Android Boxes, Apple TV, Firestick, Mag, Smartphones, and PC/Mac." 
  },
  { 
    q: "Can I use my MARINIOS IPTV subscription on multiple devices?", 
    a: "Yes, you can upgrade your MARINIOS IPTV connection plan to support up to 3 simultaneous devices viewing at the same time. Check our pricing section for details on adding extra connections." 
  },
  { 
    q: "What internet speed is required for MARINIOS IPTV streaming?", 
    a: "For smooth MARINIOS IPTV streaming, we recommend a minimum of 15 Mbps for HD and 30 Mbps for 4K streaming qualities. A wired ethernet connection is always preferred for the best stability." 
  },
  { 
    q: "Is there a contract or cancellation fee with MARINIOS IPTV?", 
    a: "No, our MARINIOS IPTV service is completely prepaid. There are no contracts or hidden cancellation fees. You can cancel anytime without any hassle." 
  },
  { 
    q: "How long does it take to activate my MARINIOS IPTV account?", 
    a: "MARINIOS IPTV activation is typically instant after payment confirmation. You will receive an email with your credentials and setup instructions within minutes." 
  },
  { 
    q: "Do you offer international channels with MARINIOS IPTV?", 
    a: "Absolutely! MARINIOS IPTV provides channels from over 100 countries, including local, regional, and premium international broadcast networks." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 mt-16 relative" aria-label="Frequently Asked Questions about MARINIOS IPTV">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">FAQ</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Everything you need to know about our <strong className="text-yellow-400">{CONSTANTS.FOCUS_KEYWORD}</strong> service.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left bg-slate-900 border ${openIndex === i ? 'border-yellow-400/50' : 'border-white/10'} rounded-2xl p-6 hover:border-yellow-400/30 transition-all duration-300 group`}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400/80'} flex items-center gap-3`}>
                  <span className={`${openIndex === i ? 'text-yellow-400' : 'text-white/30'} font-black text-2xl`}>Q.</span> 
                  {faq.q}
                </h3>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-yellow-400' : 'text-white/30 group-hover:text-yellow-400/50'}`} />
              </div>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <p className="text-white/70 leading-relaxed pl-10 md:pl-12 border-l-2 border-yellow-400/30 ml-2 py-2">
                  {faq.a}
                </p>
              </div>
            </button>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}