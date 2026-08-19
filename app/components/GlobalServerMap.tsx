'use client';

import { FadeIn } from './AnimatedSection';
import { Cloud, Server, MapPin, Wifi } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';
import { useState, useEffect } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json';

const serverMarkers: {
  name: string;
  coordinates: [number, number];
  servers: number;
}[] = [
  { name: 'USA', coordinates: [-100, 40], servers: 32 },
  { name: 'Canada', coordinates: [-95, 55], servers: 22 },
  { name: 'Brazil', coordinates: [-55, -15], servers: 18 },
  { name: 'United Kingdom', coordinates: [-2, 54], servers: 28 },
  { name: 'Germany', coordinates: [10, 51], servers: 20 },
  { name: 'France', coordinates: [2, 46], servers: 18 },
  { name: 'Spain', coordinates: [-4, 40], servers: 14 },
  { name: 'Italy', coordinates: [12, 43], servers: 14 },
  { name: 'South Africa', coordinates: [24, -30], servers: 12 },
  { name: 'UAE', coordinates: [54, 24], servers: 10 },
  { name: 'India', coordinates: [78, 22], servers: 15 },
  { name: 'Japan', coordinates: [138, 36], servers: 24 },
  { name: 'Singapore', coordinates: [104, 1.5], servers: 16 },
  { name: 'Australia', coordinates: [133, -25], servers: 16 },
];

const hub: [number, number] = [10, 45];

export default function GlobalServerMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-28 border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.12),_transparent_45%)]" />
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              <Wifi className="h-4 w-4" />
              Worldwide IPTV Network
            </div>
            <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Global Coverage In
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                100+ Countries
              </span>
            </h3>
          </div>
          <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-1 shadow-[0_0_80px_rgba(250,204,21,0.08)] backdrop-blur-xl sm:p-1 lg:rounded-[2.5rem] lg:p-3">
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-slate-950/80 sm:h-[470px] lg:h-[560px] flex items-center justify-center">
              <div className="text-white/50 animate-pulse">Loading map...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-28 border-y border-white/10" aria-label="Global server coverage map">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.12),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_black,_rgba(0,0,0,0.82),_black)]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
            <Wifi className="h-4 w-4" />
            Worldwide IPTV Network
          </div>

          <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Global Coverage In
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              100+ Countries
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base md:text-lg">
            Enjoy stable {CONSTANTS.FOCUS_KEYWORD} streaming with premium worldwide servers built for live TV,
            movies, sports, and series without buffering.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-1 shadow-[0_0_80px_rgba(250,204,21,0.08)] backdrop-blur-xl sm:p-1 lg:rounded-[2.5rem] lg:p-3">
          <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-yellow-400/10 blur-[80px]" />
          <div className="absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-yellow-500/10 blur-[80px]" />

          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-slate-950/80 sm:h-[470px] lg:h-[560px]" suppressHydrationWarning>
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 190,
                center: [5, 8],
              }}
              width={1000}
              height={520}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                pointerEvents: 'auto',
              }}
            >
              <defs>
                <filter id="goldGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="lineGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#facc15" stopOpacity="0" />
                  <stop offset="45%" stopColor="#facc15" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#111827"
                      fillOpacity={0.85}
                      stroke="#334155"
                      strokeWidth={0.35}
                      onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{
                        default: { outline: 'none' },
                        hover: {
                          fill: '#facc15',
                          fillOpacity: 0.22,
                          stroke: '#facc15',
                          strokeWidth: 0.7,
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Animated connection lines */}
              {serverMarkers.map((marker, idx) => (
                <Line
                  key={`line-${marker.name}`}
                  from={hub}
                  to={marker.coordinates}
                  stroke="url(#lineGold)"
                  strokeWidth={0.9}
                  strokeLinecap="round"
                  strokeDasharray="5 8"
                  style={{
                    filter: 'url(#goldGlow)',
                    animation: `dashFlow 3s linear infinite`,
                    animationDelay: `${idx * 0.12}s`,
                  }}
                  suppressHydrationWarning
                />
              ))}

              {/* Main hub */}
              <Marker coordinates={hub}>
                <circle r={14} fill="#facc15" fillOpacity={0.12}>
                  <animate attributeName="r" values="8;22;8" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="fillOpacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle r={5} fill="#facc15" stroke="#fff7cc" strokeWidth={1} filter="url(#goldGlow)" />
              </Marker>

              {/* Server points */}
              {serverMarkers.map((marker, idx) => (
                <Marker key={marker.name} coordinates={marker.coordinates}>
                  <g
                    onMouseEnter={() => setHoveredMarker(marker.name)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="cursor-pointer"
                  >
                    <circle
                      r={8}
                      fill="#facc15"
                      fillOpacity={0.14}
                      stroke="#facc15"
                      strokeWidth={0.8}
                    >
                      <animate
                        attributeName="r"
                        values="5;15;5"
                        dur="2.2s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.12}s`}
                      />
                      <animate
                        attributeName="fillOpacity"
                        values="0.25;0;0.25"
                        dur="2.2s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.12}s`}
                      />
                    </circle>

                    <circle
                      r={3.2}
                      fill="#facc15"
                      stroke="#020617"
                      strokeWidth={1}
                      filter="url(#goldGlow)"
                    />

                    {/* Small arrow */}
                    <path
                      d="M 9 -9 L 18 -14 L 14 -5"
                      fill="none"
                      stroke="#facc15"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.2;1;0.2"
                        dur="1.4s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.1}s`}
                      />
                    </path>

                    {hoveredMarker === marker.name && (
                      <g transform="translate(-45 -36)">
                        <rect
                          width="90"
                          height="26"
                          rx="13"
                          fill="#020617"
                          stroke="#facc15"
                          strokeOpacity="0.45"
                        />
                        <text
                          x="45"
                          y="11"
                          textAnchor="middle"
                          fill="#facc15"
                          fontSize="8"
                          fontWeight="700"
                        >
                          {marker.name}
                        </text>
                        <text
                          x="45"
                          y="21"
                          textAnchor="middle"
                          fill="#ffffff"
                          fillOpacity="0.65"
                          fontSize="7"
                        >
                          {marker.servers} servers
                        </text>
                      </g>
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Hover country */}
          <div className="mt-5 flex min-h-[40px] justify-center">
            {(hoveredCountry || hoveredMarker) && (
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-yellow-400 backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                {hoveredMarker || hoveredCountry}
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      <style jsx global>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -26;
          }
        }
      `}</style>
    </section>
  );
}