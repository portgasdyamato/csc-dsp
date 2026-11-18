import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mic, MicOff, X, Send, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// PROPER SARTHI AI BOT ICON (FRIENDLY, AUTHORITATIVE, CRISP VECTOR AVATAR)
// Custom designed: Rounded friendly head, dual expressive pill eyes,
// sleek side ear-nodes, smiling mouth, and digital beacon antenna!
// ============================================================================
export function SarthiBotIcon({ className = 'w-4 h-4', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Smart Antenna with glowing beacon */}
      <path
        d="M12 2.2V5.2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="2" r="1.3" fill={color} />

      {/* Robot Head Body with smooth rounded corners */}
      <rect
        x="4"
        y="5.2"
        width="16"
        height="13"
        rx="4.2"
        stroke={color}
        strokeWidth="1.75"
        fill={color}
        fillOpacity="0.12"
      />

      {/* Side Headset Ear-Nodes */}
      <rect x="2" y="9.2" width="2" height="5" rx="1" fill={color} />
      <rect x="20" y="9.2" width="2" height="5" rx="1" fill={color} />

      {/* Dual Expressive Pill Eyes */}
      <rect x="7.4" y="9.4" width="2.2" height="3.4" rx="1.1" fill={color} />
      <rect x="14.4" y="9.4" width="2.2" height="3.4" rx="1.1" fill={color} />

      {/* Friendly Smile Arc */}
      <path
        d="M9.6 14.6C10.3 15.3 11.1 15.6 12 15.6C12.9 15.6 13.7 15.3 14.4 14.6"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SUPPORTED_LANGUAGES = [
  { id: 'en', name: 'English', native: 'English', speechCode: 'en-IN' },
  { id: 'hi', name: 'Hindi', native: 'हिन्दी', speechCode: 'hi-IN' },
  { id: 'bn', name: 'Bengali', native: 'বাংলা', speechCode: 'bn-IN' },
  { id: 'mr', name: 'Marathi', native: 'मराठी', speechCode: 'mr-IN' },
  { id: 'ta', name: 'Tamil', native: 'தமிழ்', speechCode: 'ta-IN' },
  { id: 'te', name: 'Telugu', native: 'తెలుగు', speechCode: 'te-IN' },
];

// Simple, friendly, low-cognitive initial greetings
const INITIAL_MESSAGES = {
  en: [
    {
      sender: 'bot',
      text: "Namaste! 🙏 How can I help you today?\n\nYou can ask me how to open a CSC centre, find a centre near you, or check service rates.",
      time: 'Just now',
    },
  ],
  hi: [
    {
      sender: 'bot',
      text: "नमस्ते! 🙏 आज मैं आपकी क्या मदद कर सकता हूँ?\n\nआप सीएससी केंद्र शुरू करने, नजदीकी केंद्र खोजने, या सरकारी फीस के बारे में पूछ सकते हैं।",
      time: 'अभी',
    },
  ],
  bn: [
    {
      sender: 'bot',
      text: "নমস্কার! 🙏 আজ কীভাবে আপনাকে সাহায্য করতে পারি?\n\nআপনি সিএসসি সেন্টার শুরু করা, নিকটস্থ কেন্দ্র বা ফি সম্পর্কে জানতে পারেন।",
      time: 'এখন',
    },
  ],
  mr: [
    {
      sender: 'bot',
      text: "नमस्कार! 🙏 आज मी आपल्याला कशी मदत करू शकतो?\n\nआपण सीएससी केंद्र सुरू करणे किंवा जवळचे केंद्र शोधण्याबद्दल विचारू शकता.",
      time: 'आत्ताच',
    },
  ],
  ta: [
    {
      sender: 'bot',
      text: "வணக்கம்! 🙏 இன்று உங்களுக்கு எவ்வாறு உதவலாம்?\n\nCSC மையம் தொடங்குவது அல்லது அருகிலுள்ள மையம் பற்றி நீங்கள் கேட்கலாம்.",
      time: 'இப்போது',
    },
  ],
  te: [
    {
      sender: 'bot',
      text: "నమస్కారం! 🙏 ఈరోజు మీకు ఎలా సహాయపడగలను?\n\nమీరు CSC కేంద్రాన్ని ప్రారంభించడం లేదా సమీప కేంద్రాన్ని కనుగొనడం గురించి అడగవచ్చు.",
      time: 'ఇప్పుడే',
    },
  ],
};

// Short, clear, low-cognitive suggestion chips
const QUICK_PROMPTS = {
  en: [
    'How to become a VLE?',
    'Find nearest Kendra',
    'Check service fees',
    'Aadhaar update help',
  ],
  hi: [
    'VLE कैसे बनें?',
    'नजदीकी केंद्र खोजें',
    'सरकारी फीस चेक करें',
    'आधार अपडेट सहायता',
  ],
  bn: [
    'VLE কীভাবে হবেন?',
    'নিকটস্থ কেন্দ্র খুঁজুন',
    'সরকারি ফি কত?',
    'আধার কার্ড সেবা',
  ],
  mr: [
    'VLE कसे व्हावे?',
    'जवळचे केंद्र शोधा',
    'अधिकृत शुल्क',
    'आधार कार्ड सेवा',
  ],
  ta: [
    'VLE ஆவது எப்படி?',
    'அருகிலுள்ள மையம்',
    'சேவை கட்டணம்',
    'ஆதார் உதவி',
  ],
  te: [
    'VLE ఎలా అవ్వాలి?',
    'సమీప కేంద్రం',
    'సేవా రుసుము',
    'ఆధార్ సహాయం',
  ],
};

export default function SarthiChatbot({ isOpen, onOpen, onClose }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES.en);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  // Close when clicked outside or on Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    // Delay registration slightly to prevent immediate trigger from opening click
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // When language changes, update greeting if chat is fresh
  const handleLanguageChange = (langId) => {
    setCurrentLang(langId);
    setLangMenuOpen(false);
    if (messages.length <= 1) {
      setMessages(INITIAL_MESSAGES[langId] || INITIAL_MESSAGES.en);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Voice Input Recognition Handling
  const handleToggleVoice = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.id === currentLang);
        recognition.lang = activeLangObj ? activeLangObj.speechCode : 'en-IN';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.start();
      } catch (err) {
        fallbackVoiceSimulation();
      }
    } else {
      fallbackVoiceSimulation();
    }
  };

  // Fallback voice simulation for browsers without Web Speech API
  const fallbackVoiceSimulation = () => {
    setIsListening(true);
    setTimeout(() => {
      const sampleQueries = {
        en: 'How to register as a CSC VLE in my village?',
        hi: 'मेरी ग्राम पंचायत में सीएससी वीएलई कैसे बनें?',
        bn: 'আমার গ্রামে সিএসসি সেন্টার কীভাবে শুরু করব?',
        mr: 'माझ्या गावात सीएससी केंद्र कसे सुरू करावे?',
        ta: 'என் கிராமத்தில் CSC மையம் தொடங்குவது எப்படி?',
        te: 'మా గ్రామంలో CSC కేంద్రాన్ని ఎలా ప్రారంభించాలి?',
      };
      setInputText(sampleQueries[currentLang] || sampleQueries.en);
      setIsListening(false);
    }, 2000);
  };

  // Automated intelligent responder
  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Contextual responses based on keyword match
    setTimeout(() => {
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('vle') || lower.includes('register') || lower.includes('पंजीकरण') || lower.includes('बनें') || lower.includes('शुरू')) {
        botReply = currentLang === 'hi'
          ? "सीएससी वीएलई बनने के 4 आसान चरण:\n\n1. TEC सर्टिफिकेट पूरा करें (cscacademy.org)\n2. एक कंप्यूटर, प्रिंटर और बायोमेट्रिक स्कैनर तैयार रखें\n3. register.csc.gov.in पर आवेदन करें\n4. जिला प्रबंधक द्वारा सत्यापन के बाद आधिकारिक आईडी पाएं"
          : "Starting a CSC Centre takes 4 simple steps:\n\n1. Complete your basic TEC certificate online\n2. Have a laptop/PC, printer & biometric scanner\n3. Apply online at register.csc.gov.in\n4. Your local District Manager verifies & activates your ID";
      } else if (lower.includes('fee') || lower.includes('फीस') || lower.includes('rate') || lower.includes('charge')) {
        botReply = currentLang === 'hi'
          ? "सरकारी सेवा शुल्क:\n\n• आधार डेमोग्राफिक अपडेट: ₹50\n• आधार बायोमेट्रिक अपडेट: ₹100\n• ई-आधार प्रिंट: ₹30\n• सरकारी प्रमाण पत्र: राज्य के तय शुल्क\n\nवीएलई से हमेशा मुद्रित रसीद अवश्य लें।"
          : "Official Government Rates:\n\n• Aadhaar Address / Mobile Update: ₹50\n• Aadhaar Biometric Update: ₹100\n• e-Aadhaar Printed Copy: ₹30\n• Certificates & Schemes: Standard state fee\n\nAlways ask for an official printed receipt.";
      } else if (lower.includes('near') || lower.includes('centre') || lower.includes('केंद्र') || lower.includes('kendra')) {
        botReply = currentLang === 'hi'
          ? "आप मुख्य पेज पर 'Find CSC Centre' बटन पर क्लिक करके अपने पिनकोड या ग्राम पंचायत के सभी एक्टिव केंद्र देख सकते हैं।"
          : "You can find all active centres near you by clicking 'Find CSC Centre' on the homepage. Just enter your 6-digit Pincode.";
      } else {
        botReply = currentLang === 'hi'
          ? "धन्यवाद! आपका प्रश्न नोट कर लिया गया है। आप वीएलई बनने, नजदीकी केंद्र खोजने या किसी भी सरकारी सेवा के बारे में पूछ सकते हैं।"
          : "Thank you! I am here to help. You can ask me how to open a centre, locate a Kendra near you, or learn about government service fees.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const activeLangData = SUPPORTED_LANGUAGES.find((l) => l.id === currentLang);

  return (
    <>
      {/* ====================================================================
          1. SINGLE COMBINED FLOATING BUTTON (FAB) — BOTTOM RIGHT CORNER
          Unified pill button: Icon + text in one button, NO border.
          Hidden when chat modal is open (no duplicate floating close button).
          ==================================================================== */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Ask Sarthi AI Assistant"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a1628] hover:bg-[#071120] text-white text-xs sm:text-[13px] font-semibold shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 shadow-xs">
            <SarthiBotIcon className="w-3.5 h-3.5 text-white" />
          </div>
          <span>Ask Sarthi AI</span>
        </button>
      )}

      {/* ====================================================================
          2. SARTHI CHATBOT WINDOW (NAVY FRAMED, ZERO WHITE BORDER, CLICK OUTSIDE TO CLOSE)
          ==================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[600px] h-[540px] rounded-[24px] bg-white text-slate-800 shadow-[0_24px_70px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden"
          >
            {/* Top Clean Header Bar (Navy Dark Blue, No Duplicate Text or Indicators, No White Border) */}
            <div className="px-5 py-3.5 bg-[#0a1628] text-white flex items-center justify-between z-20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full bg-white/10 text-white grid place-items-center shadow-xs">
                  <SarthiBotIcon className="w-4 h-4 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-2 border-[#0a1628]" />
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white tracking-tight leading-tight">
                    Sarthi AI
                  </h3>
                  <p className="text-[11px] text-white/60 font-normal leading-tight mt-0.5">
                    Always here to help
                  </p>
                </div>
              </div>

              {/* Language Switcher & Clean Close Button */}
              <div className="flex items-center gap-2">
                {/* Language Dropdown Trigger */}
                <div className="relative">
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white transition-colors cursor-pointer"
                    title="Change language"
                  >
                    <Languages className="w-3.5 h-3.5 text-white/70" />
                    <span>{activeLangData?.native || 'English'}</span>
                  </button>

                  {/* Language Popover Menu */}
                  {langMenuOpen && (
                    <div className="absolute right-0 top-8 w-36 py-1.5 rounded-xl bg-[#0a1628] shadow-2xl z-30 divide-y divide-white/10 text-left border border-slate-700/50">
                      {SUPPORTED_LANGUAGES.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => handleLanguageChange(lang.id)}
                          className={`w-full px-3 py-1.5 text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                            currentLang === lang.id
                              ? 'bg-white/15 text-white font-bold'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{lang.native}</span>
                          <span className="text-[10px] opacity-70 uppercase">{lang.id}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close chat"
                  className="w-8 h-8 rounded-full hover:bg-white/10 text-white/70 hover:text-white grid place-items-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body (Soft Slate-50 Canvas, Bot Icon visible with EACH message) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs select-text bg-[#f8fafc]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {/* Proper Sarthi Bot Avatar Icon visible with EACH individual bot message */}
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#0a1628] text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                      <SarthiBotIcon className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-3 sm:p-3.5 leading-relaxed text-[13px] ${
                      msg.sender === 'user'
                        ? 'bg-[#0a1628] text-white rounded-br-xs shadow-xs font-normal'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <span
                      className={`block text-[10px] text-right mt-1.5 ${
                        msg.sender === 'user' ? 'text-white/60' : 'text-slate-400'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2.5 text-slate-500 text-xs">
                  <div className="w-7 h-7 rounded-full bg-[#0a1628] text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                    <SarthiBotIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Container: Quick Suggestion Chips + Unified Input Bar (Navy Dark Blue, No White Border) */}
            <div className="bg-[#0a1628] flex flex-col shrink-0">
              {/* Quick Suggestion Chips */}
              <div className="px-4 pt-2.5 pb-1.5 overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
                {(QUICK_PROMPTS[currentLang] || QUICK_PROMPTS.en).map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleSendMessage(prompt)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11.5px] font-medium text-white/90 transition-colors cursor-pointer shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Active Voice Recording Indicator Bar */}
              {isListening && (
                <div className="px-4 py-1.5 bg-red-950/60 flex items-center justify-between text-xs text-red-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                    <span className="font-semibold text-[11px]">
                      Listening in {activeLangData?.name || 'English'}... Speak now
                    </span>
                  </div>
                  <button
                    onClick={() => setIsListening(false)}
                    className="text-[11px] text-red-300 hover:text-white underline cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Unified Input Bar: Voice & Send Buttons Nested INSIDE the Input Only, Navy Theme, No White Border */}
              <div className="p-3">
                <div className="relative flex items-center w-full rounded-xl bg-white/[0.08] px-3 py-1 focus-within:bg-white/[0.14] transition-all">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={
                      currentLang === 'hi'
                        ? 'प्रश्न पूछें या बोलें...'
                        : 'Ask a question or speak...'
                    }
                    className="flex-1 bg-transparent text-xs sm:text-[13px] text-white placeholder:text-white/40 outline-none border-none py-1.5 pr-2"
                  />

                  {/* Inline Action Buttons Inside Input Only */}
                  <div className="flex items-center gap-1 shrink-0">
                    {/* Voice Mic Button */}
                    <button
                      type="button"
                      onClick={handleToggleVoice}
                      aria-label={isListening ? "Stop listening" : "Start voice input"}
                      title={isListening ? "Listening..." : "Speak in your language"}
                      className={`w-7 h-7 rounded-lg grid place-items-center transition-all cursor-pointer ${
                        isListening
                          ? 'bg-red-500 text-white animate-pulse'
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {isListening ? (
                        <MicOff className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Mic className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Send Button */}
                    <button
                      type="button"
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim()}
                      aria-label="Send message"
                      className={`w-7 h-7 rounded-lg grid place-items-center transition-all ${
                        inputText.trim()
                          ? 'bg-white text-[#0a1628] hover:bg-white/90 cursor-pointer shadow-xs active:scale-95'
                          : 'text-white/30 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
