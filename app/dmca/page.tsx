import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, FileText, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

export const metadata = generateSEOMetadata('DMCA Policy');

export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Copyright Protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            DMCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {CONSTANTS.BRAND_NAME} respects intellectual property rights and complies with the Digital Millennium Copyright Act.
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
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-400">Important Notice:</strong> {CONSTANTS.BRAND_NAME} does not host, store, upload, or distribute any video content. 
                Our service provides a directory of streams that are publicly available on the internet.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Our Commitment to Copyright Law</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {CONSTANTS.BRAND_NAME} ("{CONSTANTS.FOCUS_KEYWORD}", "we", "us", or "our") is committed to complying with 
            the Digital Millennium Copyright Act (DMCA) and respecting the intellectual property rights of others. 
            We expect our users and service to do the same.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. What We Do Not Host</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            It is important to clarify that <strong className="text-yellow-400">{CONSTANTS.BRAND_NAME}</strong> does not host, 
            store, upload, or distribute any video content, audio content, or media files on our own servers. 
            Our service acts as a search engine and directory that indexes and organizes links to streams that are 
            publicly available across the internet. We do not control, own, or modify any of the content accessed 
            through our platform.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. DMCA Takedown Notice</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            If you are a copyright owner or an authorized agent and believe that any content accessible through 
            our service infringes upon your copyrights, you may submit a DMCA takedown notice. Upon receipt of a 
            valid notice, we will respond promptly to remove or disable access to the allegedly infringing content.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. How to Submit a DMCA Notice</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            To file a DMCA notice with {CONSTANTS.BRAND_NAME}, please send an email to:
          </p>
          
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 my-6 text-center">
            <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <a href="mailto:dmca@mariniosiptv.vip" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors">
              dmca@{CONSTANTS.DOMAIN}
            </a>
          </div>

          <p className="text-white/70 leading-relaxed mb-4">
            Your DMCA notice MUST include the following information:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "A physical or electronic signature of the copyright owner or authorized agent",
              "Identification of the copyrighted work claimed to have been infringed",
              "Identification of the material that is claimed to be infringing with sufficient detail (including URLs)",
              "Your contact information: name, address, telephone number, and email address",
              "A statement that you have a good faith belief that use of the material is not authorized",
              "A statement that the information in the notice is accurate, under penalty of perjury"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
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
                  <strong className="text-red-400">Warning:</strong> Please be aware that under the DMCA, any person who 
                  knowingly materially misrepresents that material is infringing may be liable for damages, including 
                  costs and attorney fees.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. Counter-Notice Procedure</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            If you believe that your content was removed due to a mistake or misidentification, you may file a 
            counter-notice. Your counter-notice must include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Your physical or electronic signature",
              "Identification of the material that was removed and its location before removal",
              "A statement under penalty of perjury that you have a good faith belief the material was removed by mistake",
              "Your name, address, and telephone number",
              "Your consent to the jurisdiction of the Federal District Court in your location"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">6. Repeat Infringers</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {CONSTANTS.BRAND_NAME} reserves the right to terminate, in appropriate circumstances, the accounts of 
            users who are repeat infringers of intellectual property rights.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">7. Contact Information</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            For any questions regarding this DMCA Policy, please contact us at:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>Email: <a href="mailto:dmca@mariniosiptv.vip" className="text-yellow-400 hover:text-yellow-300">dmca@{CONSTANTS.DOMAIN}</a></span>
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