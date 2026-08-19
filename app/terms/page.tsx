import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, FileText, AlertCircle, CheckCircle, CreditCard, UserCheck, Ban, RefreshCw, Mail, Scale, BookOpen } from 'lucide-react';

export const metadata = generateSEOMetadata('Terms of Service');

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <Scale className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Service</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Please read these terms carefully before using {CONSTANTS.FOCUS_KEYWORD} services.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Acceptance Box */}
        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-400">Acceptance of Terms:</strong> By accessing or subscribing to {CONSTANTS.BRAND_NAME}, 
                you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Description of Service</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {CONSTANTS.BRAND_NAME} ("{CONSTANTS.FOCUS_KEYWORD}", "we", "us", or "our") provides a digital streaming service 
            that allows subscribers to access live television channels, video-on-demand content, and related features 
            (the "Service"). The Service is intended for personal, non-commercial use only.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. Eligibility</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            By using our Service, you represent and warrant that:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "You are at least 18 years of age",
              "You have the legal capacity to enter into a binding agreement",
              "You will provide accurate and complete information when creating your account",
              "You will not share your account credentials with others",
              "You will comply with all applicable laws and regulations"
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
                  <UserCheck className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-yellow-400">Account Responsibility:</strong> You are solely responsible for maintaining 
                  the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Subscription Plans and Payments</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            {CONSTANTS.BRAND_NAME} offers various subscription plans as described on our Pricing page. By subscribing, you agree to:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Pay all fees associated with your chosen subscription plan",
              "Provide accurate and complete payment information",
              "Authorize us to charge your selected payment method for the subscription duration",
              "Be responsible for any taxes applicable to your subscription"
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
                  <CreditCard className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-green-400">Payment Security:</strong> All payments are processed through secure, 
                  PCI-compliant payment gateways. We do not store your full payment card details on our servers.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Acceptable Use Policy</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            You agree NOT to use the Service for any prohibited purpose, including but not limited to:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Redistributing, reselling, or sublicensing the Service",
              "Sharing your account credentials with unauthorized users",
              "Using the Service for any illegal activity",
              "Attempting to bypass, reverse engineer, or disrupt the Service",
              "Recording, rebroadcasting, or publicly displaying content without permission",
              "Using automated tools to access or scrape content"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <Ban className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-red-400">Violation Consequences:</strong> Violation of these terms may result in immediate 
                  termination of your account without refund, and we may pursue legal action if necessary.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Refund Policy</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We offer a 7-day money-back guarantee on all subscription plans. If you are not completely satisfied with our Service, 
            you may request a full refund within 7 days of your purchase date. To request a refund, please contact our support team.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">6. Service Availability and Modifications</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We strive to provide uninterrupted Service, but we do not guarantee that the Service will be available at all times. 
            We reserve the right to:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Modify, suspend, or discontinue any aspect of the Service",
              "Change subscription fees with reasonable notice",
              "Perform scheduled maintenance that may temporarily affect availability"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">7. Intellectual Property</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            The Service, including its code, design, logos, and content (excluding third-party content), is owned by {CONSTANTS.BRAND_NAME} 
            and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or create derivative works 
            of our intellectual property without our express written consent.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, {CONSTANTS.BRAND_NAME} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">10. Termination</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We may terminate or suspend your account immediately, without prior notice, for conduct that violates these Terms 
            or is otherwise harmful to {CONSTANTS.BRAND_NAME}, other users, or third parties. Upon termination, your right to 
            use the Service will cease immediately.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-yellow-400">Survival:</strong> Sections regarding intellectual property, warranty disclaimers, 
                  liability limitations, and governing law shall survive any termination of these Terms.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">11. Governing Law</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            These Terms shall be governed by and construed in accordance with the laws applicable to {CONSTANTS.DOMAIN}, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">12. Changes to Terms</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the new 
            Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such changes 
            constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">13. Contact Information</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>Email: <a href="mailto:legal@mariniosiptv.vip" className="text-yellow-400 hover:text-yellow-300">legal@{CONSTANTS.DOMAIN}</a></span>
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