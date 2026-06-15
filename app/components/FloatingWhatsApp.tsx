'use client';

import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'support', text: '👋 Hi there! How can we help you today?', time: getCurrentTime() },
  ]);

  const phoneNumber = '447868196544';

  // Function to get device local time in HH:mm format
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const sendToWhatsapp = () => {
    if (!message.trim()) return;

    // Add user message with current time
    setChatHistory([...chatHistory, { sender: 'user', text: message, time: getCurrentTime() }]);

    // Open WhatsApp link
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');

    setMessage('');
  };

  return (
    <>
      {/* Auto Help Bubble */}
      {!open && (
        <div className="fixed bottom-28 right-6 z-[99] animate-fade-in">
          <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-2xl px-5 py-3 text-sm font-medium text-white relative">
            Need help? Chat with us!
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rotate-45" />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[101]"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          <div className="relative bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
        </div>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden shadow-2xl z-[100] bg-white border border-slate-200 flex flex-col">
          
          {/* Header */}
          <div className="bg-green-500 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-500 font-bold">
                W
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp Support</h3>
                <p className="text-xs opacity-90">Usually replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-50">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] px-4 py-2 rounded-xl shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-green-500 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none'
                }`}>
                  {msg.text}
                  <span className="block text-xs text-gray-300 mt-1 text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t flex gap-2 items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded-full px-4 py-3 border border-slate-200 outline-none bg-white text-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 transition"
            />
            <button
              onClick={sendToWhatsapp}
              disabled={!message.trim()}
              className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white p-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}