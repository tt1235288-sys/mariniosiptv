'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  decimals = 0,
  duration = 2 
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string,
  decimals?: number,
  duration?: number 
}) {
  const [count, setCount] = useState(0); // Start at 0 for animation
  const [mounted, setMounted] = useState(false); // Track client mount
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && mounted) {
      let startTime: number;
      let animationFrame: number;
      const startValue = 0;
      const endValue = value;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / (duration * 1000));
        
        if (progress < 1) {
          const easingProgress = 1 - Math.pow(1 - progress, 3);
          setCount(startValue + (endValue * easingProgress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [value, duration, isInView, mounted]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
  const realNumber = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();

  return (
    <span ref={ref} suppressHydrationWarning>
      {!mounted ? prefix + realNumber + suffix : prefix + formattedCount + suffix}
    </span>
  );
}