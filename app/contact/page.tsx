'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Award,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy
} from 'lucide-react';
import Link from 'next/link';

// Toast/Notification Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div className={`rounded-2xl p-6 shadow-2xl border backdrop-blur-xl ${
        type === 'success' 
          ? 'bg-green-500/10 border-green-500/30' 
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Popup Modal
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-yellow-400/30 rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl text-center animate-scale-up">
        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
          Message Sent Successfully!
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Thank you for reaching out to {CONSTANTS.FOCUS_KEYWORD}. Our support team will get back to you within 24 hours.
        </p>
        
        <div className="bg-white/5 rounded-xl p-4 mb-6 text-left">
          <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-2">What happens next?</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              We'll review your message
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              You'll receive a confirmation email
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Our team will respond within 24 hours
            </li>
          </ul>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-yellow-400 text-slate-950 font-black text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-16">
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* Hero Section */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-6">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                {CONSTANTS.FOCUS_KEYWORD}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Have questions about our IPTV service? Need help with setup? Our support team is here to help you 24/7.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Send us a Message</h2>
                <p className="text-white/50 text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Full Name <span className="text-yellow-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address <span className="text-yellow-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                      Subject <span className="text-yellow-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none appearance-none"
                      >
                        <option value="" className="bg-slate-900">Select a subject...</option>
                        <option value="general" className="bg-slate-900">General Inquiry</option>
                        <option value="setup" className="bg-slate-900">Setup Assistance</option>
                        <option value="pricing" className="bg-slate-900">Pricing Questions</option>
                        <option value="technical" className="bg-slate-900">Technical Support</option>
                        <option value="billing" className="bg-slate-900">Billing & Payments</option>
                        <option value="feedback" className="bg-slate-900">Feedback & Suggestions</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                      Message <span className="text-yellow-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-4 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                      loading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-yellow-400 hover:to-yellow-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(250,204,21,0.2)]'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
                <h3 className="text-xl font-black text-white mb-6">Contact Information</h3>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Email</p>
                    <a href="mailto:support@mariniosiptv.vip" className="text-white hover:text-yellow-400 transition-colors text-sm">
                      support@mariniosiptv.vip
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-yellow-400 transition-colors text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                {/* Live Chat */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Live Chat</p>
                    <p className="text-white text-sm">Available 24/7</p>
                    <button className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors font-medium mt-1">
                      Start Chat
                    </button>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Response Time</p>
                    <p className="text-white text-sm">Within 24 hours</p>
                  </div>
                </div>
                
                {/* Trust Badges */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-4">Trusted Service</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Headphones className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white/50 text-[10px] uppercase font-bold">24/7 Support</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <ShieldCheck className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white/50 text-[10px] uppercase font-bold">Secure</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white/50 text-[10px] uppercase font-bold">Fast Response</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <Users className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white/50 text-[10px] uppercase font-bold">20K+ Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FadeIn>
          <div className="bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 border border-yellow-400/20 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-sm">24/7 Support</h4>
                <p className="text-white/40 text-xs">Always here to help</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-sm">Fast Response</h4>
                <p className="text-white/40 text-xs">Within 24 hours</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-sm">Secure</h4>
                <p className="text-white/40 text-xs">Encrypted communication</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-sm">Trusted</h4>
                <p className="text-white/40 text-xs">#1 Rated IPTV Service</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-lg">Quick answers to common questions</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "How do I contact support?",
              a: "You can reach us via email at support@mariniosiptv.vip, through our live chat, or by submitting the contact form above."
            },
            {
              q: "How long does it take to get a response?",
              a: "Our support team typically responds within 24 hours. For urgent issues, we recommend using our live chat for immediate assistance."
            },
            {
              q: "Do you offer technical support?",
              a: "Yes, we provide full technical support for all our services. Our team can help with setup, troubleshooting, and any technical questions."
            },
            {
              q: "Is there a phone number I can call?",
              a: "Yes, you can reach us at +1 (234) 567-890 during business hours for urgent inquiries."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all">
              <h4 className="text-white font-bold text-sm mb-2">{faq.q}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}