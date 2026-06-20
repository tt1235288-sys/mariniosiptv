'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showBubble, setShowBubble] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { sender: 'support', text: 'Hi there! How can we help you today?', time: getCurrentTime() },
  ]);
  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextCycleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const phoneNumber = '447549589503';

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // ✅ Listen for mobile menu toggle events from Header
  useEffect(() => {
    const handleMenuToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      const menuState = customEvent.detail.isOpen;
      setIsMobileMenuOpen(menuState);
      
      if (menuState) {
        setOpen(false);
        setShowBubble(false);
      }
    };

    window.addEventListener('mobileMenuToggle', handleMenuToggle);
    return () => {
      window.removeEventListener('mobileMenuToggle', handleMenuToggle);
    };
  }, []);

  // ✅ Fixed Bubble loop logic to properly respect isMobileMenuOpen
  useEffect(() => {
    // Completely clear hooks if either menu is open
    if (open || isMobileMenuOpen) {
      setShowBubble(false);
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
      if (nextCycleTimeoutRef.current) clearTimeout(nextCycleTimeoutRef.current);
      return;
    }

    const showBubbleCycle = () => {
      if (isMobileMenuOpen || open) return;
      setShowBubble(true);
      
      // Hide after 4 seconds
      bubbleTimeoutRef.current = setTimeout(() => {
        setShowBubble(false);
        
        // Show again after 6 seconds
        nextCycleTimeoutRef.current = setTimeout(() => {
          showBubbleCycle();
        }, 6000);
      }, 4000);
    };

    showBubbleCycle();

    return () => {
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
      if (nextCycleTimeoutRef.current) clearTimeout(nextCycleTimeoutRef.current);
    };
  }, [open, isMobileMenuOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const sendToWhatsapp = () => {
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { sender: 'user', text: message, time: getCurrentTime() }]);

    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');

    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendToWhatsapp();
    }
  };

  const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="white" 
      className="w-7 h-7 md:w-8 md:h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.448 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const GirlProfilePic = () => (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-white/20">
      <Image
        src="/img/profile.webp"
        alt="Support Agent"
        width={40}
        height={40}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );

  // ✅ 100% Fail-safe early exit when mobile menu is open
  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <>
      {/* Auto Help Bubble */}
      {!open && showBubble && (
        <div className="fixed bottom-28 right-6 z-[30] animate-fade-in">
          <div className="bg-gradient-to-r from-green-500 to-green-600 shadow-lg rounded-2xl px-4 py-2.5 text-sm font-medium text-white relative max-w-[200px] whitespace-nowrap">
            Need help? Chat with us!
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rotate-45" />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowBubble(false);
        }}
        className="fixed bottom-6 right-6 z-[35] group"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          )}
          <div className="relative bg-gradient-to-r from-green-500 to-green-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 group-hover:shadow-xl">
            <WhatsAppIcon />
          </div>
        </div>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-4 md:right-6 w-[340px] sm:w-[380px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden shadow-2xl z-[34] bg-white border border-slate-200 flex flex-col max-h-[80vh] md:max-h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between text-white flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <GirlProfilePic />
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base truncate">WhatsApp Support</h3>
                <p className="text-[10px] sm:text-xs opacity-90 truncate">Usually replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition flex-shrink-0"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-50 min-h-[200px] max-h-[300px] md:max-h-[350px]">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
              >
                {msg.sender === 'support' && (
                  <div className="flex-shrink-0 mr-2 self-end">
                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src="/img/profile.webp"
                        alt="Support"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-green-500 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none'
                }`}>
                  <p className="text-sm sm:text-base break-words">{msg.text}</p>
                  <span className={`block text-[10px] sm:text-xs mt-1 text-right ${
                    msg.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                  }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t flex gap-2 items-center flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 rounded-full px-4 py-2.5 sm:py-3 border border-slate-200 outline-none bg-white text-gray-600 text-sm sm:text-base placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 transition min-w-0"
            />
            <button
              onClick={sendToWhatsapp}
              disabled={!message.trim()}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 text-white p-2.5 sm:p-3 rounded-full shadow-md transition-transform hover:scale-105 disabled:hover:scale-100 flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes message-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-message-in { animation: message-in 0.2s ease-out; }
      `}</style>
    </>
  );
}