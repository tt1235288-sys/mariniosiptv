'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap, ThumbsUp, Users, 
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Award, Star, UserPlus, ShoppingBag, Download, Mail, Cpu, Search,
  Settings, Wifi, Smartphone as SmartphoneIcon, TrendingUp, AlertCircle,
  HelpCircle, Globe, Server, Trophy, Film, Calendar, MonitorPlay, X
} from 'lucide-react';
import { FadeIn } from '../components/AnimatedSection';
import Link from 'next/link';
import FAQ from '../components/FAQ';

// Device data
const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Devices', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

// Step data for each device (kept as is - content is fine)
const stepData = {
  firestick: {
    title: 'Firestick & Android Box',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'The setup journey begins when you create your account with us. Visit our pricing page, select your preferred subscription plan (3, 6, or 12 months), and complete the secure checkout process. After successful payment, you will receive an email within 1-2 minutes containing your unique login credentials including Username, Password, and Portal URL. Make sure to check your spam folder if you don\'t see it in your inbox.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Use a valid email address that you have access to, as all your account information and credentials will be sent there. Save the email for future reference.' 
      },
      { 
        number: 2, 
        title: 'Enable Unknown Sources', 
        description: 'From the Firestick home screen, navigate to Settings (gear icon) in the top right corner. Scroll to "My Fire TV" or "Device" depending on your version. Select "Developer Options". If you don\'t see Developer Options, go to "About" and click on the Fire TV Stick name 7 times to unlock it. Then turn ON "Apps from Unknown Sources" and also enable "ADB Debugging" if available. This allows installation of apps not found in the Amazon App Store.', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'This setting is completely safe for our service and is required for installing third-party IPTV players. You can turn it off after setup if desired.' 
      },
      { 
        number: 3, 
        title: 'Install Downloader App', 
        description: 'On your Firestick home screen, click the search icon (magnifying glass) in the top left corner. Type "Downloader" using the on-screen keyboard. Select the Downloader app with the orange and white icon developed by AFTVnews. Click "Download" or "Get" to install the app. Once installed, click "Open" to launch Downloader. You may need to grant permission for Downloader to access files on your device - click "Allow".', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Downloader is the official app used by millions to safely download applications. It is completely free and malware-free.' 
      },
      { 
        number: 4, 
        title: 'Enter Installation Code', 
        description: `Open the Downloader app. You will see a URL text field. Using your remote, carefully type the following code: 83492. Click "Go" or press the select button on your remote. The ${CONSTANTS.FOCUS_KEYWORD} app will begin downloading automatically. Once the download completes (usually 10-20 seconds), a popup will appear asking if you want to install the app. Click "Install". After installation, you can click "Open" or "Done".`, 
        duration: '2 min', 
        icon: SmartphoneIcon, 
        tip: 'Make sure you have a stable internet connection before entering the code. The download speed depends on your connection. If the code doesn\'t work, contact our support for the latest code.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the newly installed ${CONSTANTS.FOCUS_KEYWORD} app from your apps section. On the login screen, select "Login with Xtream Codes API" (not "Login with Playlist"). You will see three fields: Server URL / Portal URL, Username, and Password. Enter the information exactly as provided in your welcome email. The Portal URL usually starts with http:// or https://. After entering all details, click "Login" or "Add User". Wait 5-10 seconds for authentication.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Double-check that you\'re using Xtream Codes login method, not M3U playlist. Copy-paste credentials from your email to avoid typing errors. The login is case-sensitive.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your device is now fully configured. You now have access to 15,000+ live channels including sports, news, entertainment, and international content. Explore 60,000+ movies and TV series in our VOD library. Use the Electronic Program Guide (EPG) to see what\'s playing now and next. You can favorite channels, use catch-up TV, and enjoy buffer-free 4K streaming. For best experience, use a wired ethernet connection or ensure your WiFi is strong (minimum 15 Mbps for HD, 30 Mbps for 4K).', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Explore all app features including search, favorites, parental controls, and external player options. Contact our 24/7 support if you need any assistance.' 
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
        description: 'Begin by creating your account on our website. Choose your subscription plan - we offer flexible options including 3 months, 6 months, and 12 months with significant discounts on longer plans. Complete payment using credit card, PayPal, or cryptocurrency. After successful payment, check your email for login credentials including Username, Password, and Portal URL. This email arrives within minutes and contains everything you need to start streaming.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Save your welcome email or take a screenshot of your credentials. You may need them if you ever reinstall the app or set up on another device.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your Samsung, LG, Sony, or other Smart TV remote, press the Home or Smart Hub button. Navigate to the app store - on Samsung it\'s called "Samsung Apps" or "Smart Hub", on LG it\'s "LG Content Store", on Sony/Android TV it\'s "Google Play Store". Make sure your TV is connected to the internet via WiFi or ethernet cable before proceeding.', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'If you have an Android TV (Sony, Philips, TCL, Hisense), you can also use the Google Play Store on your phone to remotely install apps on your TV.' 
      },
      { 
        number: 3, 
        title: 'Search for IPTV Player', 
        description: 'Using the search function in your TV\'s app store, type "IPTV Smarters Pro" or "IBO Player". Both are excellent, user-friendly IPTV players that work perfectly with our service. IPTV Smarters Pro is free and widely used, while IBO Player offers a premium interface with a small one-time fee. Choose the one that best suits your preferences. Avoid unknown or suspicious apps.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'We officially recommend IPTV Smarters Pro as it is free, regularly updated, and has all the features you need including EPG, catch-up, and multi-screen support.' 
      },
      { 
        number: 4, 
        title: 'Install the App', 
        description: 'Click "Install" or "Download" to begin installation. The download may take 1-3 minutes depending on your internet speed. Once installation is complete, you will see an "Open" button. You may also find the app icon on your TV\'s home screen or apps section. Do not open the app yet - proceed to the next step for login instructions.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'If you encounter "insufficient storage" error, delete unused apps or clear cache in settings to free up space.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the installed IPTV player app. On the first screen, you will see different login options. Select "Login with Xtream Codes API" (this is the recommended method). You will need three pieces of information: Portal URL (sometimes called Server URL), Username, and Password. These were sent to your email after purchase. Enter each carefully - the Portal URL usually starts with http:// or https://. After entering, click "Add User" or "Login". The app will validate your credentials and load the channel list.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'If login fails, check that you selected Xtream Codes method (not M3U). Verify there are no extra spaces before or after your credentials. The Portal URL must be exact.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your Smart TV is now ready to stream premium content. Explore 15,000+ live channels organized by category: Sports (ESPN, Sky Sports, BT Sport, BeIN Sports), News (CNN, BBC, Fox News), Entertainment (HBO, Showtime, AMC), Kids (Disney, Nickelodeon), International (Arabic, French, German, Spanish, Indian channels), and more. Access 60,000+ movies and series in the VOD section. Use the Electronic Program Guide (EPG) to see schedule information. Enjoy 4K, FHD, and HD quality streaming with our anti-freeze technology.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Take time to explore the app settings - you can adjust video player, buffer size, and enable hardware acceleration for smoother playback.' 
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
        description: 'Start by signing up for our service. Visit our pricing page and select your preferred plan - Starter (1 device), Value (2 devices), or Ultimate (3 devices). Complete payment using your credit card, PayPal, or cryptocurrency. Within minutes, you will receive an email containing your exclusive login credentials including Username, Password, and Portal URL. These are required for the next steps.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'The Ultimate plan offers the best value with savings up to 40% compared to monthly plans plus VIP support and free VPN.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your iPhone, iPad, or Apple TV, locate and tap the blue "App Store" icon. Make sure you are signed in with your Apple ID. If not, go to Settings > [Your Name] > Media & Purchases and sign in. A valid Apple ID is required to download apps from the store. Ensure you have a stable internet connection via WiFi or cellular.', 
        duration: '1 min', 
        icon: ShoppingBag, 
        tip: 'Use the same Apple ID across all your Apple devices so you can download purchased apps on iPhone, iPad, and Apple TV without paying again.' 
      },
      { 
        number: 3, 
        title: 'Search for IPTV App', 
        description: 'Tap the Search tab at the bottom of the App Store. Type "IPTV Smarters Pro" or "Flex IPTV" into the search bar. IPTV Smarters Pro is completely free and highly recommended for beginners. Flex IPTV is also excellent with a clean interface and supports multiple playlists. Both apps are safe, regularly updated, and compatible with our service. Select the app you prefer.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'Avoid paid IPTV apps that make unrealistic promises. Free apps like IPTV Smarters Pro offer all the features you need.' 
      },
      { 
        number: 4, 
        title: 'Download & Install', 
        description: 'Tap the "Get" button next to the app name. You may be prompted to authenticate using Face ID, Touch ID, or your Apple ID password. The download will begin automatically. Once complete, the button will change to "Open". You can also find the app on your home screen. Do not open yet - we will configure it in the next step.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'If you see a cloud icon with an arrow instead of "Get", you have downloaded this app before. Tap it to reinstall.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the installed IPTV app. You will see a login screen with multiple options. Select "Login with Xtream Codes API" - this is the most reliable method. You will need three fields: Portal URL (Server URL), Username, and Password. Enter the exact credentials from your welcome email. The Portal URL typically starts with http:// or https://. After entering all three, tap "Login" or "Add User". Wait a few seconds for the channel list to load.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'On Apple devices, you can use the copy-paste feature for credentials. Long-press on the text field to bring up the paste option.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Your Apple device is now fully configured! Enjoy instant access to 15,000+ live channels from around the world including premium sports (NFL, NBA, UFC, Boxing PPV), breaking news (CNN, BBC, Sky News), entertainment (HBO, Showtime, Netflix-style libraries), and international content. Browse 60,000+ movies and TV series sorted by genre, year, and popularity. The app supports AirPlay and Chromecast, so you can stream to your big screen TV. Picture-in-Picture mode lets you watch while using other apps.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Enable external player in app settings to use VLC or other players for better format support and subtitle options.' 
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
        description: 'Begin by signing up for our IPTV service. Visit our pricing page and select your ideal subscription plan - we offer 3-month, 6-month, and 12-month options. The 12-month plan provides the best value with savings up to 40%. Complete payment through our secure checkout using credit card, PayPal, or cryptocurrency. After successful payment, check your email for your login credentials including Username, Password, and Portal URL or M3U URL.', 
        duration: '2-3 min', 
        icon: UserPlus, 
        tip: 'Save your M3U URL if provided - this is a direct link to your playlist that works with many desktop players including VLC.' 
      },
      { 
        number: 2, 
        title: 'Download IPTV Player', 
        description: 'For Windows or Mac, we recommend downloading VLC Media Player (completely free and open-source) or IPTV Smarters Pro for desktop. VLC is lightweight, powerful, and supports M3U playlists directly. To download VLC, visit videolan.org and click the download button for your operating system. IPTV Smarters Pro can be downloaded from their official website. Both players work perfectly with our service.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC Media Player is installed on millions of computers worldwide and is known for playing any video format without additional codecs.' 
      },
      { 
        number: 3, 
        title: 'Install the Application', 
        description: 'Once downloaded, locate the installer file in your Downloads folder. Double-click to run the installer. For VLC, simply follow the installation wizard - click "Next", "Install", and then "Finish". The default installation settings work perfectly. You may be prompted to allow the app to make changes to your device - click "Yes". After installation, you will find VLC in your Start Menu (Windows) or Applications folder (Mac).', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'During VLC installation, you can uncheck "Add VLC to context menu" if you prefer a cleaner right-click menu.' 
      },
      { 
        number: 4, 
        title: 'Get Your M3U Link', 
        description: `Check your welcome email from ${CONSTANTS.FOCUS_KEYWORD}. You will find either an M3U URL (looks like http://your-server.net:8080/get.php?username=xxx&password=xxx&type=m3u&output=ts) or Xtream Codes (Portal URL, Username, Password). For VLC, you will use the M3U URL. Copy the entire M3U URL - you can highlight it and press Ctrl+C (Windows) or Cmd+C (Mac). Keep this URL handy for the next step.`, 
        duration: '1 min', 
        icon: Mail, 
        tip: 'The M3U URL contains your personal credentials - do not share it with anyone. Keep it secure.' 
      },
      { 
        number: 5, 
        title: 'Load Your Playlist', 
        description: 'Open VLC Media Player. In the top menu, click "Media" then "Open Network Stream" (or press Ctrl+N on Windows / Cmd+N on Mac). A dialog box will appear. Paste the M3U URL you copied from your email into the network URL field by pressing Ctrl+V or Cmd+V. Click "Play" at the bottom. VLC will load your playlist which may take 10-30 seconds depending on your internet speed. Once loaded, you will see a playlist on the left side with all your channels organized by category.', 
        duration: '3 min', 
        icon: PlayCircle, 
        tip: 'To save your playlist permanently in VLC, go to View > Playlist, then right-click on the playlist name and select "Save". This way you won\'t need to paste the URL each time.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your computer is now ready to stream premium IPTV content. Browse through thousands of channels organized by category: Live Sports (ESPN, Sky Sports, BT Sport, BeIN Sports, DAZN), Breaking News (CNN, BBC, Fox News, Sky News, Al Jazeera), Entertainment (HBO, Showtime, AMC, FX, Comedy Central), Kids (Disney Channel, Nickelodeon, Cartoon Network), International (channels from 100+ countries including Arabic, French, German, Spanish, Italian, Turkish, Indian). Access 60,000+ movies and series in the VOD section. For the best experience, use a wired ethernet connection or ensure your WiFi is strong (minimum 15 Mbps for HD, 30 Mbps for 4K). You can also connect your computer to your TV via HDMI for the big screen experience.', 
        duration: 'Done!', 
        icon: TrendingUp, 
        tip: 'Use VLC\'s hotkeys: F for fullscreen, Space for play/pause, Ctrl+Up/Down for volume, and Ctrl+Left/Right for seeking.' 
      },
    ]
  }
};

// Step Component with scroll animation
function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        
        {/* Left Side - Number with animated icon */}
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
          
          {/* Animated connecting line between steps */}
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
              {isInView && (
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                  initial={{ top: 0 }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )}
        </div>
        
        {/* Right Side - Content Card */}
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
                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isInView ? 'text-yellow-400' : 'text-white'
                }`}>
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-white/40 text-xs">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {/* Tip Box */}
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
                    <p className="text-yellow-400 font-medium text-sm">Pro Tip</p>
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
  const [isMounted, setIsMounted] = useState(false);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Memoize device data for performance
  const deviceKeys = useMemo(() => Object.keys(stepData), []);

  // Auto-open video popup on page load
  useEffect(() => {
    setIsMounted(true);
    
    // Auto-open video popup after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVideoOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle video close with pause
  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  // Handle video open
  const openVideo = () => {
    setIsVideoOpen(true);
    // Small delay to ensure DOM is ready before setting src
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      
      {/* Hero Section - FULL SCREEN */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.FOCUS_KEYWORD} device setup guide - Easy Installation Tutorial`}
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
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Easy Setup Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-6">
              Quick setup guide to {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                start streaming
              </span>
            </h1>
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Follow the steps below to quickly set up your {CONSTANTS.FOCUS_KEYWORD} account and start streaming without delays.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-yellow-400/60" /> Secure Setup</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400/60" /> 5-Minute Setup</span>
              <span className="flex items-center gap-2"><Headphones className="w-3.5 h-3.5 text-yellow-400/60" /> 24/7 Support</span>
              <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-yellow-400/60" /> 20,000+ Users</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Device Selection - Simple Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Device
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your platform below for step-by-step {CONSTANTS.FOCUS_KEYWORD} setup instructions
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
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
                <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-yellow-400' : 'text-white'}`}>{device.name}</h3>
                <p className="text-white/40 text-xs">{device.steps} easy steps</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step Process Section - Vertical Timeline with Scroll Animation */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 mb-4">
            <currentData.icon className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm">{currentData.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              6 Step Process
            </span>
          </h2>
          <p className="text-white/50 text-sm">
            Follow these {CONSTANTS.FOCUS_KEYWORD} setup steps • Each step comes to life as you scroll
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
          <h3 className="text-2xl font-bold text-white mb-3">{CONSTANTS.FOCUS_KEYWORD} Setup Complete!</h3>
          <p className="text-white/60 text-base max-w-md mx-auto mb-6">
            You've successfully completed all steps. Start enjoying premium entertainment with access to 15,000+ live channels and 60,000+ VODs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 transition-all"
            >
              Go to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
            >
              View Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Support Section with Video Tutorial */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video Tutorial */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors">
              <PlayCircle className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Video Tutorial</h3>
            <p className="text-white/50 text-sm mb-4">Watch our step-by-step {CONSTANTS.FOCUS_KEYWORD} video guide for visual learners</p>
            <button 
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-yellow-400 font-medium text-sm hover:gap-3 transition-all cursor-pointer"
            >
              Watch Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">24/7 WhatsApp Support</h3>
            <p className="text-white/50 text-sm mb-4">Get instant {CONSTANTS.FOCUS_KEYWORD} setup help from our support team</p>
            <a 
              href="https://wa.me/212600000000?text=Hello%20Marinios%20IPTV%2C%20I%20need%20help%20with%20setup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 font-medium text-sm hover:gap-3 transition-all cursor-pointer"
            >
              Chat on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal - Fixed with proper auto-play and close functionality */}
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
            {/* Close button */}
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white/60 hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-2 text-sm z-10"
            >
              <X className="w-5 h-5" /> Close Video
            </button>
            
            {/* Video container */}
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/30 bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`${CONSTANTS.FOCUS_KEYWORD} Setup Guide - Complete Tutorial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            
            {/* Video description */}
            <div className="mt-4 text-center">
              <p className="text-white/50 text-sm">How to setup {CONSTANTS.FOCUS_KEYWORD} on your device - Complete Guide</p>
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