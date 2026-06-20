'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { useState, useMemo } from 'react';

// Movies from /img/sliders/movies/mariniosiptv-movies-01 to 16
const movies = Array.from({ length: 16 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/mariniosiptv-movies-${number}`,
    altText: `${CONSTANTS.FOCUS_KEYWORD} premium movie ${i + 1} streaming in 4K ultra HD quality`,
    width: 192,
    height: 288,
  };
});

// Series from /img/series/mariniosiptv-series-01 to 16
const series = Array.from({ length: 16 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/mariniosiptv-serie-${number}`,
    altText: `${CONSTANTS.FOCUS_KEYWORD} popular TV series ${i + 1} binge watch in HD`,
    width: 192,
    height: 288,
  };
});

// Sports from /img/sliders/sports/mariniosiptv-sports-01 to 15
const sports = Array.from({ length: 15 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/mariniosiptv-sports-${number}`,
    altText: `${CONSTANTS.FOCUS_KEYWORD} live sports event ${i + 1} watch in 4K quality`,
    width: 192,
    height: 288,
  };
});

// Smooth scroll to pricing section
const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Infinite Slider Component
const InfiniteSlider = ({ items, direction = 'left', speed = 50, category }: { 
  items: any[], 
  direction?: 'left' | 'right', 
  speed?: number,
  category: string 
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  
  // Triple the items for seamless infinite loop
  const infiniteItems = useMemo(() => [...items, ...items, ...items], [items]);
  const duration = (items.length * speed) / 10;
  
  // Handle image error - try jpg fallback
  const handleImageError = (id: string, imagePath: string, e: any) => {
    const img = e.target;
    if (!img.src.includes('.jpg') && !img.src.includes('.jpeg')) {
      img.src = `${imagePath}.jpg`;
    } else {
      setFailedImages(prev => ({ ...prev, [id]: true }));
    }
  };
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex w-max gap-3 md:gap-4"
        animate={{ 
          x: direction === 'left' ? [0, '-33.333%'] : ['-33.333%', 0]
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: duration,
          ease: "linear",
          repeatDelay: 0
        }}
        style={{ willChange: 'transform' }}
      >
        {infiniteItems.map((item, idx) => (
          <button
            key={`${item.id}-${idx}`}
            onClick={scrollToPricing}
            className="flex-shrink-0 w-28 sm:w-32 md:w-44 lg:w-48 block cursor-pointer group focus:outline-none"
            aria-label={`Watch ${item.altText} - click to view pricing plans`}
          >
            <div className="relative aspect-[2/3] rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              {!failedImages[`${item.id}-${idx}`] ? (
                <>
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={item.altText}
                    width={item.width || 192}
                    height={item.height || 288}
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 176px, 192px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => handleImageError(`${item.id}-${idx}`, item.imagePath, e)}
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400/20 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* "Watch Now" text on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-bold text-center">Click to Subscribe</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                  <span className="text-slate-500 text-xs text-center px-2">
                    {category}
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full py-8 md:py-12 bg-slate-950" aria-label={`${CONSTANTS.FOCUS_KEYWORD} content showcase slider`}>
      
      {/* Row 1: Movies - Left Scroll */}
      <div className="mb-10 md:mb-14">
        <div className="w-[80%] mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full"></div>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Latest Movies
            </h5>
          </div>
          <p className="text-white/40 text-sm mt-2 hidden md:block">
            Enjoy thousands of movies from around the world with {CONSTANTS.FOCUS_KEYWORD}, available anytime on any device.
          </p>
        </div>
        <InfiniteSlider items={movies} direction="left" speed={45} category="Movie" />
      </div>

      {/* Row 2: TV Series - Right Scroll */}
      <div className="mb-10 md:mb-14">
        <div className="w-[80%] mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full"></div>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Popular TV Series
            </h5>
          </div>
          <p className="text-white/40 text-sm mt-2 hidden md:block">
            Never miss an episode with complete seasons, new releases, and fan-favorite shows on {CONSTANTS.FOCUS_KEYWORD}.
          </p>
        </div>
        <InfiniteSlider items={series} direction="right" speed={40} category="Series" />
      </div>

      {/* Row 3: Sports - Left Scroll */}
      <div>
        <div className="w-[80%] mx-auto px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full"></div>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Live Sports Events
            </h5>
          </div>
          <p className="text-white/40 text-sm mt-2 hidden md:block">
            Enjoy premium sports channels, live events, and PPV fights from anywhere with {CONSTANTS.FOCUS_KEYWORD}.
          </p>
        </div>
        <InfiniteSlider items={sports} direction="left" speed={50} category="Sports" />
      </div>
    </section>
  );
}