'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open & dispatch event
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // ✅ Fire custom event directly linked to isOpen state state
    window.dispatchEvent(
      new CustomEvent('mobileMenuToggle', { 
        detail: { isOpen: isOpen } 
      })
    );

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Setup', href: '/setup' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-2xl shadow-black/50' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.webp"
                    alt={CONSTANTS.BRAND_NAME}
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`font-bold uppercase tracking-widest text-sm transition-colors ${
                        isActive(link.href) 
                          ? 'text-yellow-400' 
                          : 'text-white/80 hover:text-yellow-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex">
              <Link href="/pricing" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-slate-950 font-bold tracking-widest uppercase text-sm transition-all shadow-lg">
                Get Started
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 focus:outline-none z-50 relative"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          <div className="space-y-4 w-full max-w-sm mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-center px-6 py-5 rounded-2xl text-xl font-bold tracking-wider uppercase transition-all ${
                  isActive(link.href) 
                    ? 'text-yellow-400 bg-white/10' 
                    : 'text-white bg-white/5 hover:bg-white/10 hover:text-yellow-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="block mt-8 text-center px-6 py-5 rounded-2xl bg-yellow-400 text-slate-950 font-black text-xl tracking-widest uppercase shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-shadow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}