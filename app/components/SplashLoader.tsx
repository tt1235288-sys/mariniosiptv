// components/SplashLoader.tsx
'use client';

import { useState, useEffect } from 'react';

export default function SplashLoader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after initial client mount
    const fadeTimer = setTimeout(() => setFadeOut(true), 400);
    // Remove completely from DOM
    const removeTimer = setTimeout(() => setShow(false), 750);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 pointer-events-none transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,204,21,0.12)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Custom Radial Keyframe Loader */}
        <div className="brand-custom-loader" />

        <p className="text-xs font-bold uppercase tracking-widest text-yellow-400/90">
          Preparing Stream...
        </p>
      </div>

      <style jsx>{`
        .brand-custom-loader {
          width: 48px;
          aspect-ratio: 1.154;
          --_g: no-repeat radial-gradient(farthest-side, #facc15 90%, #0000);
          background: 
            var(--_g) 50% 0,
            var(--_g) 0 100%,
            var(--_g) 100% 100%;
          background-size: 35% calc(35% * 1.154);
          animation: l16 1s infinite;
        }

        @keyframes l16 {
          50%,
          100% {
            background-position: 100% 100%, 50% 0, 0 100%;
          }
        }
      `}</style>
    </div>
  );
}