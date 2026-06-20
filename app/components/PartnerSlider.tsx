'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // Generate partner images from 01 to 12
  const partners = Array.from({ length: 12 }, (_, i) => {
    const partnerNumber = i + 1;
    const partnerNumberPad = String(partnerNumber).padStart(2, '0');
    return {
      name: `Partner ${partnerNumber}`,
      imagePath: `/img/partners/mariniosiptv-icons-${partnerNumberPad}`,
      altText: `${CONSTANTS.FOCUS_KEYWORD} - Certified Partner Logo ${partnerNumber} | Premium IPTV Service`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for seamless loop (3x for smoother infinite scroll)
  const sliderItems = useMemo(() => [...partners, ...partners, ...partners], [partners]);

  return (
    <div className="w-full overflow-hidden relative py-12 bg-black/50 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950/50 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-white/40 font-bold uppercase tracking-widest">Supported Ecosystems & Partners</p>
      </div>

      <motion.div 
        className="flex gap-16 items-center w-max"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {sliderItems.map((partner, idx) => (
          <div 
            key={`${partner.name}-${idx}`} 
            className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={`${partner.imagePath}.png`}
                alt={partner.altText}
                title={`${CONSTANTS.FOCUS_KEYWORD} - ${partner.name}`}
                width={partner.width || 128}
                height={partner.height || 128}
                className="object-contain"
                sizes="(max-width: 768px) 96px, 128px"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}