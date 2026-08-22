'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap,
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Star, UserPlus, ShoppingBag, Download, Mail, Cpu, Search,
  Smartphone as SmartphoneIcon, AlertCircle, X
} from 'lucide-react';
import { FadeIn } from '../components/AnimatedSection';
import Link from 'next/link';
import FAQ from '../components/FAQ';
import SocialShareBar from '../components/SocialShareBar';

// Device data
const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Devices', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Firestick & Android Box',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'The setup journey begins when you create your account with us. Visit our pricing page, select your preferred subscription plan (3, 6, or 12 months), and complete the secure checkout process. After successful payment, you will receive an email within 1-2 minutes containing your unique login credentials including Username, Password, and Portal URL. Make sure to check your spam folder if you do not see it in your inbox.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Use a valid email address that you have access to, as all your account information and credentials will be sent there. Save the email for future reference.' 
      },
      { 
        number: 2, 
        title: 'Enable Unknown Sources', 
        description: 'From the Firestick home screen, navigate to Settings (gear icon) in the top right corner. Scroll to "My Fire TV" or "Device" depending on your version. Select "Developer Options". If you do not see Developer Options, go to "About" and click on the Fire TV Stick name 7 times to unlock it. Then turn ON "Apps from Unknown Sources" and also enable "ADB Debugging" if available.', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'This setting is safe for our service and is required for installing third-party streaming players.' 
      },
      { 
        number: 3, 
        title: 'Install Downloader App', 
        description: 'On your Firestick home screen, click the search icon (magnifying glass) in the top left corner. Type "Downloader" using the on-screen keyboard. Select the Downloader app with the orange and white icon developed by AFTVnews. Click "Download" or "Get" to install the app. Once installed, launch Downloader and click "Allow" to grant required file permissions.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Downloader is the official app used by millions to safely install applications.' 
      },
      { 
        number: 4, 
        title: 'Enter Installation Code', 
        description: `Open the Downloader app. In the URL text field, type the code: 83492. Click "Go". The application will begin downloading automatically. Once the download completes, click "Install", then click "Open".`, 
        duration: '2 min', 
        icon: SmartphoneIcon, 
        tip: 'Make sure you have a stable internet connection before entering the code.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the installed app. Select "Login with Xtream Codes API". Enter your Portal URL, Username, and Password exactly as provided in your welcome email, then click "Login".`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Ensure you are using the Xtream Codes method. Credentials are case-sensitive.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your device is now fully configured. Access 15,000+ live channels and 60,000+ movies in our VOD library with anti-freeze 4K streaming.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Explore all app features including search, favorites, and parental controls.' 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Begin by creating your account on our website. Choose your subscription plan and complete payment. Check your email for login credentials including Username, Password, and Portal URL.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Save your welcome email or take a screenshot of your credentials for future reference.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your Samsung, LG, Sony, or other Smart TV, navigate to the app store (LG Content Store, Samsung Apps, or Google Play Store).', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'Ensure your TV is connected to the internet via WiFi or ethernet cable before proceeding.' 
      },
      { 
        number: 3, 
        title: 'Search for Streaming Player', 
        description: 'In your TV app store, search for "IPTV Smarters Pro" or "IBO Player". Both provide an intuitive interface for live channels and VODs.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'We recommend IPTV Smarters Pro as it is free and regularly updated.' 
      },
      { 
        number: 4, 
        title: 'Install the App', 
        description: 'Click "Install" or "Download" to begin installation. Once completed, open the application.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'If storage is full, delete unused apps from your TV to free up space.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: 'Open the player app, select "Login with Xtream Codes API", and enter the Server URL, Username, and Password from your welcome email.', 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Double-check there are no extra spaces before or after your credentials.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Your Smart TV is ready. Enjoy live sports, premium movies, international broadcasts, and TV series in crisp 4K Ultra HD.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Adjust the buffer size in app settings if your network is on WiFi.' 
      },
    ]
  },
  apple: {
    title: 'Apple Devices',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Sign up for a subscription plan and complete checkout. Your exclusive login credentials will be delivered to your inbox instantly.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Save your credentials securely so you can connect across your Apple devices.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your iPhone, iPad, or Apple TV, open the App Store and ensure you are signed in with your Apple ID.', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'A single account can be configured across mobile and Apple TV devices.' 
      },
      { 
        number: 3, 
        title: 'Search for Streaming App', 
        description: 'Search for "IPTV Smarters Pro" or "Flex IPTV" in the App Store search bar.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'Both apps are fully compatible and support high-definition video playback.' 
      },
      { 
        number: 4, 
        title: 'Download & Install', 
        description: 'Tap "Get" or the download cloud icon to install the application onto your Apple device.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'Authenticate with Face ID or Touch ID when prompted.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: 'Open the app, choose "Login with Xtream Codes API", and enter your Portal URL, Username, and Password.', 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Use iOS copy-paste functionality to input credentials quickly.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Your Apple device is now configured. Enjoy live channels, AirPlay casting, Picture-in-Picture mode, and on-demand entertainment.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Enable Picture-in-Picture to watch streams while using other apps.' 
      },
    ]
  },
  pc: {
    title: 'PC & Mac',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Select your preferred subscription plan from our pricing page and complete payment. Check your inbox for your login credentials and playlist URL.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Save your M3U playlist link for quick loading in desktop media players.' 
      },
      { 
        number: 2, 
        title: 'Download Media Player', 
        description: 'Download VLC Media Player from videolan.org or IPTV Smarters Pro for Windows/macOS.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC is open-source, lightweight, and supports all major streaming codecs.' 
      },
      { 
        number: 3, 
        title: 'Install the Application', 
        description: 'Run the downloaded installer and follow the standard installation wizard.', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'The default installation settings are ideal for video streaming.' 
      },
      { 
        number: 4, 
        title: 'Get Your Playlist Link', 
        description: 'Copy the M3U URL or Xtream Codes login information from your welcome email.', 
        duration: '1 min', 
        icon: Mail, 
        tip: 'Keep your personal playlist URL private.' 
      },
      { 
        number: 5, 
        title: 'Load Your Playlist', 
        description: 'In VLC, navigate to Media > Open Network Stream (Ctrl+N or Cmd+N), paste your playlist URL, and press Play.', 
        duration: '3 min', 
        icon: PlayCircle, 
        tip: 'Save the network playlist locally in VLC so you do not have to re-enter the link.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Your computer is ready. Stream 15,000+ live TV channels, sports events, and movies in high definition.', 
        duration: 'Done!', 
        icon: Zap, 
        tip: 'Press F in VLC for instant fullscreen playback.' 
      },
    ]
  }
};

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView 
                ? 'bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.5)] scale-110' 
                : 'bg-yellow-400/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className={`text-2xl md:text-3xl font-black transition-all duration-300 ${
              isInView ? 'text-slate-950' : 'text-yellow-400'
            }`}>
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <motion.div 
              className="relative w-1 h-28 md:h-36 my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#facc15_1px,_transparent_1px)] bg-[length:4px_8px] bg-repeat-y opacity-20" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="flex-1 pb-16 md:pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-gradient-to-br from-slate-900/80 to-slate-950/80 border rounded-2xl p-6 md:p-8 transition-all duration-500 ${
            isInView 
              ? 'border-yellow-400/50 shadow-[0_0_40px_rgba(250,204,21,0.15)]' 
              : 'border-white/10'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isInView ? 'bg-yellow-400/20' : 'bg-white/5'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isInView ? 'text-yellow-400' : 'text-white/40'
                  }`} />
                </div>
                <p className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isInView ? 'text-yellow-400' : 'text-white'
                }`}>
                  {step.title}
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-white/40 text-xs">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-4 rounded-xl bg-yellow-400/5 border border-yellow-400/20"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-medium text-sm block">Pro Tip</span>
                    <p className="text-white/50 text-sm">{step.tip}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.BRAND_NAME} easy setup guide`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>
        
        {/* Square Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #facc15 1px, transparent 1px),
              linear-gradient(to bottom, #facc15 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Easy Setup Guide 2026</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-6">
              Easy Setup Guide:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                Start Streaming
              </span>
            </h1>

            {/* Keyword Matched Subtitle */}
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Follow our step-by-step <strong>easy setup guide</strong> to install your {CONSTANTS.BRAND_NAME} subscription on Firestick, Smart TV, Android, Apple, and PC to <strong>start streaming</strong> in 5 minutes.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-yellow-400/60" /> Secure Setup</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/60" /> 5-Minute Setup</span>
              <span className="flex items-center gap-2"><Headphones className="w-3.5 h-3.5 text-yellow-400/60" /> 24/7 Support</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Device Selection */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Device
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your platform below for tailored installation instructions
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                type="button"
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-2xl text-center transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-transparent border-2 border-yellow-400/50 shadow-[0_0_30px_rgba(250,204,21,0.15)]' 
                    : 'bg-white/5 border border-white/10 hover:border-yellow-400/30'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-950 font-bold uppercase text-[10px] px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all ${
                  isActive ? 'bg-yellow-400/20' : 'bg-yellow-400/10'
                }`}>
                  <Icon className={`w-8 h-8 ${isActive ? 'text-yellow-400' : 'text-white/60'}`} />
                </div>
                <p className={`text-lg font-bold mb-2 ${isActive ? 'text-yellow-400' : 'text-white'}`}>{device.name}</p>
                <p className="text-white/40 text-xs">{device.steps} easy steps</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step Process Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 mb-4">
            <currentData.icon className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm">{currentData.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              6 Step Installation
            </span>
          </h2>
          <p className="text-white/50 text-sm">
            Follow these setup steps to complete your installation in minutes
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Message */}
        <motion.div 
          className="text-center mt-8 p-8 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-14 h-14 text-yellow-400 mx-auto mb-4" />
          <p className="text-2xl font-bold text-white mb-3">Setup Complete!</p>
          <p className="text-white/60 text-base max-w-md mx-auto mb-6">
            You have successfully completed all steps. Start enjoying premium entertainment with access to 15,000+ live channels and 60,000+ VODs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              aria-label="Return to Main Home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 transition-all"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              aria-label="Check Available Packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Video Tutorial & Support */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors">
              <PlayCircle className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xl font-bold text-white mb-2">Video Tutorial</p>
            <p className="text-white/50 text-sm mb-4">Watch our step-by-step visual installation tutorial</p>
            <button 
              type="button"
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-yellow-400 font-medium text-sm hover:gap-3 transition-all cursor-pointer"
            >
              Watch Video Tutorial <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-xl font-bold text-white mb-2">24/7 Live Support</p>
            <p className="text-white/50 text-sm mb-4">Get instant setup assistance from our technical support team</p>
            <a 
              href="https://wa.me/212600000000?text=Hello%2C%20I%20need%20help%20with%20setup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 font-medium text-sm hover:gap-3 transition-all cursor-pointer"
            >
              Chat on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Sharing Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <SocialShareBar />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              type="button"
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white/60 hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-2 text-sm z-10"
            >
              <X className="w-5 h-5" /> Close Video
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/30 bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`${CONSTANTS.BRAND_NAME} Setup Guide`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-24">
        <FAQ />
      </div>
    </div>
  );
}