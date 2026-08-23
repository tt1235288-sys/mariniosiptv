import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle, 
  CreditCard, 
  XCircle, 
  Mail, 
  RefreshCw 
} from 'lucide-react';

export const metadata = generateSEOMetadata('Refund Policy');

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <RotateCcw className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Hassle-Free Guarantee</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            At {CONSTANTS.BRAND_NAME}, we want you to be completely satisfied with your service. Learn about our refund rules and eligibility criteria.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Highlight Guarantee Box */}
        <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6 mb-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-400">Money-Back Guarantee:</strong> We offer a 7-day satisfaction guarantee for all new subscription plans. If you encounter technical issues that we cannot resolve, you are eligible for a full refund.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">1. Overview</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            We strive to ensure our customers are entirely satisfied with {CONSTANTS.FOCUS_KEYWORD}. Before requesting a refund, please contact our support team to help resolve any technical or setup difficulties you may be facing.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">2. Eligibility for a Refund</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            You may be eligible for a full or partial refund under the following conditions:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "The refund request is submitted within 7 days of your initial purchase date.",
              "Our support team was unable to resolve severe technical issues preventing you from accessing the service.",
              "You were double-charged due to a payment processing or billing error.",
              "The service remained completely inaccessible for an extended period due to server downtime on our end."
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
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-yellow-400">7-Day Window:</strong> Refund requests made after 7 days from the initial purchase date are non-refundable. Please test your setup thoroughly during the first week.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">3. Non-Refundable Scenarios</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Refunds will <strong>not</strong> be granted under the following circumstances:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "The 7-day money-back guarantee window has expired.",
              "Your internet connection speed, ISP throttling, or local network hardware is causing buffering or streaming delays.",
              "You decided to cancel simply because you changed your mind or no longer wish to use the service.",
              "Violations of our Terms of Service resulted in account suspension or termination.",
              "Third-party app or device incompatibility that was not verified using a trial prior to purchasing."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">4. Subscriptions & Automatic Renewals</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            You can cancel your recurring subscription at any time prior to your next billing cycle to prevent future charges. Renewal charges are non-refundable once processed unless a technical error occurred during billing.
          </p>

          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-amber-400">Note on Chargebacks:</strong> Please contact our support team directly to resolve any dispute. Opening a bank chargeback without contacting us first may result in permanent suspension of your account and blacklisting.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">5. How to Request a Refund</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            To submit a refund request, follow these steps:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Send an email to support or open a customer support ticket.",
              "Include your Order ID or account email address.",
              "Provide a detailed description of the issue you encountered and steps you took to resolve it."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">6. Processing Time</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Once approved, refunds are processed back to the original payment method. Depending on your financial institution, it usually takes <strong>5 to 10 business days</strong> for the funds to reflect in your account.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">7. Contact Support</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            If you have questions about our Refund Policy or need technical support, please get in touch:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span>Email: <a href={`mailto:support@${CONSTANTS.DOMAIN}`} className="text-yellow-400 hover:text-yellow-300">support@{CONSTANTS.DOMAIN}</a></span>
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