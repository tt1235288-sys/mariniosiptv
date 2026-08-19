import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Database, Mail, FileText, CheckCircle, AlertCircle, Server, Cookie, Users } from 'lucide-react';

export const metadata = generateSEOMetadata('Privacy Policy');

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            At {CONSTANTS.BRAND_NAME}, we take your privacy seriously. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Info Box */}
        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-400">Our Commitment:</strong> We are committed to protecting your personal information and being transparent about how we handle your data.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            When you use {CONSTANTS.FOCUS_KEYWORD}, we may collect the following types of information:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Email address (for account creation and communication)",
              "Payment information (processed securely through third-party payment gateways)",
              "IP address and device information (for security and analytics)",
              "Subscription preferences and plan selection",
              "Communication preferences"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-yellow-400">What We Do NOT Collect:</strong> We do not track your specific viewing habits, 
                  store your payment card details (all payments are processed by trusted third-party providers), 
                  or sell your personal information to third parties.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "To create and manage your account",
              "To process your subscription payments",
              "To send you important service announcements and updates",
              "To respond to your customer support inquiries",
              "To improve our service and user experience",
              "To detect and prevent fraud or unauthorized access"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We implement industry-standard security measures to protect your personal information from unauthorized access, 
            disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "SSL/TLS encryption for all data transmission",
              "Secure servers protected by firewalls",
              "Regular security audits and updates",
              "Restricted access to personal information",
              "Two-factor authentication for administrative access"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-green-400">Our Guarantee:</strong> We never sell your personal information to third parties. 
                  Your trust is our most valuable asset.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
            and remember your preferences. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Third-Party Services</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We may use third-party service providers to assist with payment processing, analytics, and customer support. 
            These providers are contractually obligated to protect your information and only use it for the purposes 
            specified by {CONSTANTS.BRAND_NAME}.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">6. Your Rights</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Access: Request a copy of your personal information",
              "Correction: Request correction of inaccurate information",
              "Deletion: Request deletion of your personal information",
              "Restriction: Request restriction of processing",
              "Portability: Request transfer of your data to another service",
              "Opt-out: Unsubscribe from marketing communications"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">7. Data Retention</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We retain your personal information for as long as your account is active or as needed to provide you with our services. 
            After account termination, we may retain certain information for legal compliance, fraud prevention, and record-keeping purposes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. 
            If you believe a minor has provided us with personal information, please contact us immediately.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy 
            on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">10. Contact Us</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>Email: <a href="mailto:privacy@mariniosiptv.vip" className="text-yellow-400 hover:text-yellow-300">privacy@{CONSTANTS.DOMAIN}</a></span>
            </li>
          </ul>
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