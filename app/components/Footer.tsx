import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white/70 py-16 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group inline-flex"
            >
              {/* Full Logo Image (vertical - icon + text combined) */}
              <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform">
                <Image
                  src="/img/iptv-logo.webp"
                  alt={CONSTANTS.BRAND_NAME}
                  width={180}
                  height={48}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>

            <p className="text-sm text-white/50 max-w-md leading-relaxed mb-6">
              Experience the future of entertainment with{" "}
              {CONSTANTS.FOCUS_KEYWORD}. Delivering premium 4K streaming
              worldwide with 15,000+ channels and 60,000+ VODs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-white/50 group-hover:text-slate-950 transition-colors" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-slate-950 transition-colors" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white/50 group-hover:text-slate-950 transition-colors" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-sm">
              Pages
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/setup"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Setup Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-sm">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  About US
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-policy"
                  className="text-white/50 hover:text-yellow-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. All rights
          reserved.
        </p>

        {/* Payment Methods */}
        <div className="flex items-center gap-3">
          {[
            { src: "/img/payment/1.png", alt: "PayPal" },
            { src: "/img/payment/2.png", alt: "Bitcoin" },
            { src: "/img/payment/3.png", alt: "Visa" },
            { src: "/img/payment/4.png", alt: "Mastercard" },
          ].map((item) => (
            <div
              key={item.alt}
              className="
                h-9 w-14
                rounded-lg
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                flex items-center justify-center
                hover:border-yellow-400/40
                hover:bg-yellow-400/5
                transition-all duration-300
              "
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={45}
                height={30}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}