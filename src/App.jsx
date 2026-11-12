import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  X,
  Menu,
  Building2,
  Wallet,
  Award,
  FileText,
  Receipt,
  MapPin,
  Bell,
  ExternalLink,
  Calendar,
  Users,
  CheckCircle2,
  Check,
  Phone,
  Clock,
  Package,
  ShieldAlert,
  Sparkles,
  GraduationCap,
  IndianRupee,
  Mail,
  Send,
} from 'lucide-react';

import ServiceVectorLogo from './components/ServiceVectorLogo';

import {
  VLE_JOURNEY_STAGES,
  CITIZEN_NEEDS,
  PLATFORM_CARDS,
  SERVICE_DIRECTORY,
  WORKFLOW_STEPS,
  VLE_CAROUSEL_ITEMS,
  SUPPORT_ITEMS,
  FAQ_LIST,
} from './data/dspData';

// ============================================================================
// AUTHENTIC HIGH-RESOLUTION INDIAN MANDALA & LOTUS ARTWORK COMPONENTS
// Uses 6 distinct, intricate traditional Indian Mandala & Padma line-art PNGs
// ============================================================================
function LotusBadge({ white = false, gray = false, className = 'w-5 h-5' }) {
  return (
    <img
      src={white ? '/images/mandala-lotus-white.png' : '/images/mandala-lotus-orange.png'}
      alt=""
      aria-hidden="true"
      className={`object-contain pointer-events-none select-none shrink-0 ${gray ? 'grayscale opacity-70' : ''} ${className}`}
    />
  );
}

// ============================================================================
// PURE WHITE INTRICATE INDIAN MANDALA LINE-ART FOR THE 3 FOLDER-TAB CARDS
// Each card features its own distinct 1200x1200 pure-white Mandala illustration
// ============================================================================
function CardVisualStage({ variant, isHovered }) {
  if (variant === 'cobalt') {
    // Card 01: "Unified Digital Seva ledger" — Intricate Multi-Ring Lotus & Arch Mandala (Pure White)
    return (
      <div className="relative w-full h-full bg-[#071120] overflow-hidden flex items-start justify-center">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[350px] h-[250px] rounded-full opacity-95 blur-2xl pointer-events-none transition-transform duration-700"
          style={{
            background:
              'radial-gradient(circle, #1d4ed8 0%, #0a1628 58%, #ff5500 98%)',
            transform: isHovered ? 'scale(1.14)' : 'scale(1)',
          }}
        />

        <motion.img
          src="/images/mandala-card-01.png"
          alt=""
          aria-hidden="true"
          animate={{
            rotate: isHovered ? 12 : 0,
            scale: isHovered ? 1.06 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none"
        />

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  if (variant === 'chromatic') {
    // Card 02: "Assisted counter delivery" — Intricate 24-Petal Kolam & Yantra Mandala (Pure White)
    return (
      <div className="relative w-full h-full bg-[#0a1628] overflow-hidden flex items-start justify-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 34%, #ff5500 0%, #c2410c 48%, #0a1628 90%)',
          }}
        />

        <motion.img
          src="/images/mandala-card-02.png"
          alt=""
          aria-hidden="true"
          animate={{
            rotate: isHovered ? -10 : 0,
            scale: isHovered ? 1.06 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none"
        />

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  // Card 03: "Transparent VLE settlement" — Bold Ornamental Indian Star & Paisley Mandala (Pure White)
  return (
    <div className="relative w-full h-full bg-[#071120] overflow-hidden flex items-start justify-center">
      <div
        className="absolute -top-10 right-0 w-[330px] h-[240px] rounded-full opacity-95 blur-2xl pointer-events-none transition-transform duration-700"
        style={{
          background:
            'radial-gradient(circle, #ff5500 0%, #1e3a8a 48%, #071120 86%)',
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
      />

      <motion.img
        src="/images/mandala-card-03.png"
        alt=""
        aria-hidden="true"
        animate={{
          rotate: isHovered ? 10 : 0,
          scale: isHovered ? 1.06 : 0.96,
        }}
        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
        className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none"
      />

      <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
    </div>
  );
}

// ============================================================================
// 5-CARD RESPONSIVE RECTANGLE FAN GEOMETRY (PERSON RIGHT, STORY LEFT)
// ============================================================================
function getFanSlot(offset, width = 1200) {
  if (width < 640) {
    const mobileSlots = {
      0: { x: 0, y: 0, rotate: 0, scale: 1.0, zIndex: 30, brightness: 1.0 },
      '-1': { x: -30, y: 8, rotate: -2, scale: 0.92, zIndex: 20, brightness: 0.88 },
      1: { x: 30, y: 8, rotate: 2, scale: 0.92, zIndex: 20, brightness: 0.88 },
      '-2': { x: -55, y: 15, rotate: -4, scale: 0.84, zIndex: 10, brightness: 0.75 },
      2: { x: 55, y: 15, rotate: 4, scale: 0.84, zIndex: 10, brightness: 0.75 },
    };
    return mobileSlots[offset] || mobileSlots[0];
  }

  if (width < 1024) {
    const tabletSlots = {
      0: { x: 0, y: -4, rotate: 0, scale: 1.0, zIndex: 30, brightness: 1.0 },
      '-1': { x: -150, y: 8, rotate: -3.5, scale: 0.88, zIndex: 20, brightness: 0.92 },
      1: { x: 150, y: 8, rotate: 3.5, scale: 0.88, zIndex: 20, brightness: 0.92 },
      '-2': { x: -280, y: 18, rotate: -6.5, scale: 0.76, zIndex: 10, brightness: 0.8 },
      2: { x: 280, y: 18, rotate: 6.5, scale: 0.76, zIndex: 10, brightness: 0.8 },
    };
    return tabletSlots[offset] || tabletSlots[0];
  }

  const desktopSlots = {
    0: { x: 0, y: -8, rotate: 0, scale: 1.02, zIndex: 30, brightness: 1.0 },
    '-1': { x: -230, y: 10, rotate: -4, scale: 0.88, zIndex: 20, brightness: 0.92 },
    1: { x: 230, y: 10, rotate: 4, scale: 0.88, zIndex: 20, brightness: 0.92 },
    '-2': { x: -400, y: 22, rotate: -7, scale: 0.76, zIndex: 10, brightness: 0.8 },
    2: { x: 400, y: 22, rotate: 7, scale: 0.76, zIndex: 10, brightness: 0.8 },
  };
  return desktopSlots[offset] || desktopSlots[0];
}

// ============================================================================
// BESPOKE ISOMETRIC STAGE FOR CSC WEBSITE NEWS (MATCHING USER REFERENCE DESIGN)
// 3 custom vector illustrations directly illustrating CSC services:
// 1. Security Advisory: Isometric Phone with Security Shield & Anti-Phishing Alert
// 2. CSC Academy: Isometric Workstation with AI Neural Network & Academic Honor
// 3. Financial Inclusion: Isometric DigiPay Micro-ATM & Biometric Fingerprint Sensor
// ============================================================================
function NewsIllustrationStage({ variant }) {
  if (variant === 'security') {
    return (
      <div className="relative w-full h-[180px] sm:h-[195px] bg-[#f4f5f7] flex items-center justify-center overflow-hidden select-none">
        {/* Black Squircle Badge in Top-Right Corner */}
        <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center shadow-xs z-10">
          <ShieldAlert className="w-4 h-4 text-white" />
        </div>

        <svg
          viewBox="0 0 320 200"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Pedestal Platform */}
          <polygon
            points="50,135 160,85 270,135 160,185"
            fill="#ffffff"
            stroke="#d1d5db"
            strokeWidth="1.2"
          />
          <polygon
            points="50,135 160,185 160,195 50,145"
            fill="#e5e7eb"
            stroke="#9ca3af"
            strokeWidth="1.2"
          />
          <polygon
            points="160,185 270,135 270,145 160,195"
            fill="#d1d5db"
            stroke="#9ca3af"
            strokeWidth="1.2"
          />

          {/* Grid lines on platform */}
          <line x1="86" y1="118" x2="196" y2="168" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="123" y1="101" x2="233" y2="151" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="196" y1="101" x2="86" y2="151" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="233" y1="118" x2="123" y2="168" stroke="#f3f4f6" strokeWidth="1" />

          {/* Smartphone lying flat in isometric angle */}
          {/* Phone drop shadow */}
          <polygon points="105,142 165,115 195,128 135,155" fill="#cbd5e1" opacity="0.7" />
          {/* Phone body bottom thickness */}
          <polygon points="102,136 132,150 132,154 102,140" fill="#334155" />
          <polygon points="132,150 192,123 192,127 132,154" fill="#1e293b" />
          {/* Phone surface face */}
          <polygon
            points="102,136 162,109 192,123 132,150"
            fill="#0f172a"
            stroke="#334155"
            strokeWidth="1.5"
          />
          {/* Phone Screen Glass */}
          <polygon points="108,133 160,110 186,121 134,144" fill="#022c22" />
          {/* Message bubble on screen */}
          <polygon points="115,130 152,113 168,120 131,137" fill="#065f46" />
          <line x1="122" y1="127" x2="148" y2="116" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
          <line x1="126" y1="132" x2="156" y2="119" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />

          {/* Floating 3D Security Shield above phone */}
          <g transform="translate(136, 42)">
            {/* Left Shield Half */}
            <path
              d="M24 6 L6 14 C6 35 24 50 24 55 C24 50 24 6 24 6 Z"
              fill="#10b981"
              stroke="#047857"
              strokeWidth="1.5"
            />
            {/* Right Shield Half */}
            <path
              d="M24 6 L42 14 C42 35 24 50 24 55 C24 50 24 6 24 6 Z"
              fill="#34d399"
              stroke="#047857"
              strokeWidth="1.5"
            />
            {/* Checkmark inside Shield */}
            <path
              d="M16 28 L22 34 L32 20"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Floating WhatsApp / Alert Notification Pill */}
          <g transform="translate(56, 68)">
            <rect x="0" y="0" width="48" height="28" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="12" cy="14" r="5" fill="#ef4444" />
            <line x1="22" y1="11" x2="40" y2="11" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="17" x2="34" y2="17" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Floating Official Cyber Lock Badge */}
          <g transform="translate(225, 78)">
            <rect x="0" y="8" width="30" height="22" rx="5" fill="#ffffff" stroke="#9ca3af" strokeWidth="1.2" />
            <path d="M8 8 V4 C8 0 22 0 22 4 V8" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <circle cx="15" cy="17" r="2.5" fill="#10b981" />
            <line x1="15" y1="19" x2="15" y2="24" stroke="#10b981" strokeWidth="1.8" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'academy') {
    return (
      <div className="relative w-full h-[180px] sm:h-[195px] bg-[#f4f5f7] flex items-center justify-center overflow-hidden select-none">
        {/* Black Squircle Badge in Top-Right Corner */}
        <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center shadow-xs z-10">
          <Sparkles className="w-4 h-4 text-white" />
        </div>

        <svg
          viewBox="0 0 320 200"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Pedestal Platform */}
          <polygon
            points="50,135 160,85 270,135 160,185"
            fill="#ffffff"
            stroke="#d1d5db"
            strokeWidth="1.2"
          />
          <polygon
            points="50,135 160,185 160,195 50,145"
            fill="#e5e7eb"
            stroke="#9ca3af"
            strokeWidth="1.2"
          />
          <polygon
            points="160,185 270,135 270,145 160,195"
            fill="#d1d5db"
            stroke="#9ca3af"
            strokeWidth="1.2"
          />

          {/* Desktop Monitor Stand */}
          <polygon points="135,142 185,142 175,152 125,152" fill="#cbd5e1" stroke="#9ca3af" strokeWidth="1" />
          <rect x="152" y="112" width="16" height="32" rx="3" fill="#94a3b8" />

          {/* Computer Screen Frame */}
          <polygon points="80,48 240,48 248,56 88,56" fill="#f8fafc" stroke="#9ca3af" strokeWidth="1.2" />
          <polygon points="240,48 248,56 248,118 240,112" fill="#cbd5e1" stroke="#9ca3af" strokeWidth="1.2" />
          <rect x="80" y="48" width="160" height="66" rx="8" fill="#ffffff" stroke="#9ca3af" strokeWidth="1.5" />

          {/* Screen Display (AI Diagnostic Testing UI) */}
          <rect x="88" y="54" width="144" height="54" rx="5" fill="#0f172a" />

          {/* AI Neural Network Graph */}
          <circle cx="108" cy="80" r="4" fill="#0284c7" />
          <circle cx="128" cy="68" r="3.5" fill="#38bdf8" />
          <circle cx="128" cy="92" r="3.5" fill="#38bdf8" />
          <circle cx="160" cy="81" r="5" fill="#818cf8" />
          <circle cx="192" cy="70" r="3.5" fill="#c084fc" />
          <circle cx="192" cy="92" r="3.5" fill="#38bdf8" />
          <circle cx="212" cy="81" r="4" fill="#0284c7" />

          {/* Interconnecting AI vectors */}
          <line x1="108" y1="80" x2="128" y2="68" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
          <line x1="108" y1="80" x2="128" y2="92" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
          <line x1="128" y1="68" x2="160" y2="81" stroke="#818cf8" strokeWidth="1.5" opacity="0.9" />
          <line x1="128" y1="92" x2="160" y2="81" stroke="#818cf8" strokeWidth="1.5" opacity="0.9" />
          <line x1="160" y1="81" x2="192" y2="70" stroke="#c084fc" strokeWidth="1.5" opacity="0.9" />
          <line x1="160" y1="81" x2="192" y2="92" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
          <line x1="192" y1="70" x2="212" y2="81" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
          <line x1="192" y1="92" x2="212" y2="81" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />

          {/* Floating Academic Olympiad Medal */}
          <g transform="translate(48, 92)">
            <path d="M12 18 L6 36 L16 31 L26 36 L20 18" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
            <circle cx="16" cy="14" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="16" cy="14" r="9" fill="#fef3c7" />
            <path d="M16 8 L18 12 L22 13 L19 16 L20 20 L16 17 L12 20 L13 16 L10 13 L14 12 Z" fill="#d97706" />
          </g>

          {/* Floating Certificate Badge */}
          <g transform="translate(225, 96)">
            <rect x="0" y="0" width="46" height="34" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
            <line x1="8" y1="8" x2="26" y2="8" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="8" y1="15" x2="38" y2="15" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="21" x2="32" y2="21" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="36" cy="24" r="4" fill="#0284c7" />
          </g>
        </svg>
      </div>
    );
  }

  // Financial Inclusion / Grassroots Banking (variant === 'banking')
  return (
    <div className="relative w-full h-[180px] sm:h-[195px] bg-[#f4f5f7] flex items-center justify-center overflow-hidden select-none">
      {/* Black Squircle Badge in Top-Right Corner */}
      <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center shadow-xs z-10">
        <IndianRupee className="w-4 h-4 text-white" />
      </div>

      <svg
        viewBox="0 0 320 200"
        className="w-full h-full object-contain"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Pedestal Platform */}
        <polygon
          points="50,135 160,85 270,135 160,185"
          fill="#ffffff"
          stroke="#d1d5db"
          strokeWidth="1.2"
        />
        <polygon
          points="50,135 160,185 160,195 50,145"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="1.2"
        />
        <polygon
          points="160,185 270,135 270,145 160,195"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="1.2"
        />

        {/* Micro-ATM Terminal (Isometric POS Device) */}
        {/* Terminal Depth & Shadow */}
        <polygon points="78,135 152,90 192,113 118,158" fill="#cbd5e1" />
        <polygon points="78,135 118,158 118,170 78,147" fill="#475569" />
        <polygon points="118,158 192,113 192,125 118,170" fill="#334155" />

        {/* Terminal Face Plate */}
        <polygon
          points="78,130 152,85 192,108 118,153"
          fill="#ffffff"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />

        {/* POS Screen (DigiPay Terminal Screen) */}
        <polygon points="112,102 158,76 182,90 136,116" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
        <line x1="122" y1="100" x2="152" y2="83" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        <line x1="128" y1="107" x2="162" y2="88" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />

        {/* Numeric Keypad on POS */}
        {[
          { x: 96, y: 126 }, { x: 105, y: 121 }, { x: 114, y: 116 },
          { x: 101, y: 133 }, { x: 110, y: 128 }, { x: 119, y: 123 },
          { x: 106, y: 140 }, { x: 115, y: 135 }, { x: 124, y: 130 },
        ].map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r="1.8" fill="#64748b" />
        ))}

        {/* Micro-ATM Card Swipe Slot / Saffron Accent */}
        <line x1="156" y1="118" x2="178" y2="130" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />

        {/* Biometric Fingerprint Scanner Pad (Right Side) */}
        <g transform="translate(195, 102)">
          {/* Scanner Pad base */}
          <polygon points="10,25 45,5 75,22 40,42" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
          {/* Sensor pad */}
          <polygon points="18,24 43,10 65,22 40,36" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          {/* Concentric Fingerprint Arcs */}
          <path d="M33 26 Q40 21 47 26" stroke="#0284c7" strokeWidth="1.5" fill="none" />
          <path d="M30 28 Q40 20 50 28" stroke="#0284c7" strokeWidth="1.5" fill="none" />
          <path d="M36 24 Q40 22 44 24" stroke="#0284c7" strokeWidth="1.5" fill="none" />
        </g>

        {/* Floating Golden Rupee Coin */}
        <g transform="translate(68, 48)">
          <ellipse cx="22" cy="52" rx="14" ry="4" fill="#94a3b8" opacity="0.4" />
          <polygon points="10,24 10,29 34,29 34,24" fill="#d97706" />
          <circle cx="22" cy="22" r="16" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="13" fill="#fbbf24" />
          <text x="22" y="27" textAnchor="middle" fill="#78350f" fontSize="14" fontWeight="bold" fontFamily="sans-serif">₹</text>
        </g>

        {/* DBT Instant Welfare Status Pill */}
        <g transform="translate(208, 50)">
          <rect x="0" y="0" width="56" height="24" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="7" fill="#10b981" />
          <path d="M9 12 L11 14 L15 10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="24" y="16" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">DBT ₹</text>
        </g>
      </svg>
    </div>
  );
}


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [lang, setLang] = useState('EN');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Choose Journey Interactive Step states
  const [vleJourneyIdx, setVleJourneyIdx] = useState(0);
  const [citizenNeedIdx, setCitizenNeedIdx] = useState(0);

  // C. Platform Overview Hover-Drop Card state (Default index 1 open like Image 1)
  const [hoveredCard, setHoveredCard] = useState(1);

  // D. Explore Services state
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [servicePage, setServicePage] = useState(0);
  const [serviceDir, setServiceDir] = useState(1);

  // E. How Digital Seva Works (Scroll-Expanding Pill Gallery — Image 2)
  const workflowRef = useRef(null);
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

  const { scrollYProgress: workflowScroll } = useScroll({
    target: workflowRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(workflowScroll, 'change', (v) => {
    const idx = Math.min(
      WORKFLOW_STEPS.length - 1,
      Math.max(0, Math.floor(v * WORKFLOW_STEPS.length))
    );
    if (idx !== activeWorkflowIdx) setActiveWorkflowIdx(idx);
  });

  const selectWorkflowStep = (idx) => {
    setActiveWorkflowIdx(idx);
    if (workflowRef.current) {
      const rect = workflowRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollableDistance =
        workflowRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance > 0) {
        const targetProgress = (idx + 0.2) / WORKFLOW_STEPS.length;
        window.scrollTo({
          top: sectionTop + targetProgress * scrollableDistance,
          behavior: 'smooth',
        });
      }
    }
  };

  // F. For VLEs 5-Card Fanned Carousel state (Default to Rajeshwar Rao at index 0)
  const [fanActive, setFanActive] = useState(0);

  // H. FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Login Modal state
  const [loginOpen, setLoginOpen] = useState(false);

  // Find Nearest Centre Locator Modal state
  const [locatorOpen, setLocatorOpen] = useState(false);
  const [locatorQuery, setLocatorQuery] = useState('');

  const SAMPLE_CENTRES = [
    {
      id: 'csc-01',
      name: 'CSC Gram Panchayat Kendra — Bodhan',
      vle: 'Rajeshwar Rao',
      vleId: '4892 1048 2910',
      pincode: '503185',
      distance: '0.8 km away',
      address: 'Main Gram Panchayat Bhavan, Bodhan Mandal, Nizamabad, Telangana',
      services: ['Aadhaar UCL', 'DigiPay AePS', 'e-District', 'PM-KISAN', 'Electricity BillPay'],
      timing: '9:00 AM – 7:00 PM',
      phone: '+91 98480 14599',
      verified: true,
    },
    {
      id: 'csc-02',
      name: 'Digital Seva Kendra — Ward 4',
      vle: 'Sunita Devi',
      vleId: '5102 9384 1029',
      pincode: '226001',
      distance: '1.4 km away',
      address: 'Near Primary Health Centre, Rural Block 3, Lucknow, Uttar Pradesh',
      services: ['Ayushman Bharat PM-JAY', 'Jeevan Pramaan', 'Micro-ATM', 'FASTag'],
      timing: '9:30 AM – 6:30 PM',
      phone: '+91 94150 14599',
      verified: true,
    },
    {
      id: 'csc-03',
      name: 'CSC Digital Seva Counter — Civil Lines',
      vle: 'Amit Verma',
      vleId: '3901 8472 6150',
      pincode: '380001',
      distance: '2.1 km away',
      address: 'Shop No. 12, Tehsil Complex, District Headquarters, Ahmedabad, Gujarat',
      services: ['Passport Seva', 'PAN Card', 'Tele-Law', 'BBPS Utilities'],
      timing: '10:00 AM – 7:30 PM',
      phone: '+91 98250 14599',
      verified: true,
    },
  ];

  // G. News & Updates Gazette State & Data
  const [selectedStory, setSelectedStory] = useState(null);
  const [newsCategory, setNewsCategory] = useState('ALL');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  const NEWS_CARDS = [
    {
      id: 'news-01',
      variant: 'security',
      categoryTag: 'Security Advisory',
      cardTitle: 'Advisory: Fake WhatsApp Channels & Phishing Impersonations',
      cardSummary:
        'Strict MeitY directives warning Village Level Entrepreneurs against unauthorized WhatsApp groups, spurious APK downloads, and payment scams.',
      statusNote: 'Active Advisory · Verified',
      issuer: 'MEITY · CSC SPV',
      subLabel: 'OFFICIAL DIRECTIVE',
      sealText: 'CSC',
      actionText: 'Read Advisory',
      headlineDisplay: 'Protection Against Fraudulent Channels & Phishing Impersonations',
      category: 'Security Advisory',
      categoryType: 'Active Alert',
      pillStyle: 'bg-rose-50 text-rose-700 border border-rose-200/60',
      brandBadge: 'CSC VLE SECURITY',
      badgeColor: 'border-rose-500/30 bg-rose-500/15 text-rose-300',
      title: 'Advisory: Protection Against Fraudulent Channels & Phishing Impersonations',
      description:
        'Digital Seva e-Governance issues strict directives warning Village Level Entrepreneurs against unauthorized WhatsApp groups, spurious APK downloads, and payment fraud.',
      date: '15 Oct 2025',
      readTime: '3 min read',
      refCode: 'REF: CSC/SEC/2026-ADV',
      authority: 'MeitY · CSC SPV Security Desk',
      image: '/images/step-03-biometric.jpg',
      fullStory:
        'Official Security Circular for all Village Level Entrepreneurs:\n\nIt has come to our attention that fraudulent entities are creating unauthorized WhatsApp groups, Telegram channels, and fake websites pretending to represent CSC e-Governance district managers.\n\nKey Safety Guidelines:\n1. Never download any third-party APK application sent via WhatsApp or SMS. All verified tools are available only on the official Digital Seva Portal.\n2. Never send registration fees or security deposits to personal UPI IDs or bank accounts. CSC ID generation involves no unauthorized fees.\n3. Verify all district manager contact information directly through your state nodal coordinator.\n\nAny suspicious communication should be reported immediately to the National Cyber Crime portal (cybercrime.gov.in) and the CSC VLE Helpdesk at 14599.',
    },
    {
      id: 'news-02',
      variant: 'academy',
      categoryTag: 'CSC Academy · AI',
      cardTitle: 'CSC Olympiad 6.0: AI-Driven Adaptive Diagnostic Testing',
      cardSummary:
        'Nationwide educational initiative introduces intelligent diagnostic evaluations and regional language practice roadmaps across 50,000+ gram panchayats for Grades 3–12.',
      statusNote: '1.2M Students Enrolled',
      issuer: 'CSC ACADEMY',
      subLabel: 'OFFICIAL CREDENTIAL',
      sealText: 'AI',
      actionText: 'Explore Olympiad',
      headlineDisplay: 'CSC Olympiad 6.0 Adaptive AI Testing for 1.2M Rural Students',
      category: 'CSC Academy · AI',
      categoryType: 'Olympiad 6.0',
      pillStyle: 'bg-sky-50 text-sky-700 border border-sky-200/60',
      brandBadge: 'CSC ACADEMY',
      badgeColor: 'border-sky-500/30 bg-sky-500/15 text-sky-300',
      title: 'CSC Olympiad 6.0 Launches AI-Driven Adaptive Testing for 1.2M Rural Students',
      description:
        'Nationwide educational initiative introduces intelligent diagnostic evaluations and regional language practice roadmaps across 50,000+ gram panchayats for Grades 3–12.',
      date: '13 Oct 2025',
      readTime: '4 min read',
      refCode: 'REF: CSCA/OLY/2026-ED',
      authority: 'CSC Academy · National Education Desk',
      image: '/images/step-01-visit.jpg',
      fullStory:
        'CSC Academy is thrilled to announce the nationwide launch of CSC Olympiad 6.0 across all gram panchayats.\n\nThis year’s edition introduces adaptive artificial intelligence learning modules that tailor question difficulty based on student responses in mathematics, science, and digital literacy.\n\nOver 1.2 million rural school students across Grades 3 to 12 can now access simulated practice examinations, mock tests, and personalized performance roadmaps directly from their neighborhood Digital Seva Kendra.\n\nTop-performing students across rural districts will receive national scholarships, digital tablets, and direct mentorship from premier institutions.',
    },
    {
      id: 'news-03',
      variant: 'banking',
      categoryTag: 'Financial Inclusion',
      cardTitle: 'Grassroots Banking Milestone: ₹1,200+ Cr Doorstep Welfare',
      cardSummary:
        'Frontline Micro-ATM and DigiPay operators deliver critical Direct Benefit Transfers, pensions, and PM-KISAN funds to 14M+ rural citizens.',
      statusNote: '₹1,200+ Cr Disbursed',
      issuer: 'FINANCIAL INCLUSION',
      subLabel: 'OFFICIAL REPORT',
      sealText: '₹',
      actionText: 'View Milestone',
      headlineDisplay: 'Grassroots Banking Milestone: ₹1,200+ Cr Doorstep Welfare',
      category: 'Financial Inclusion',
      categoryType: '₹1,200 Cr Milestone',
      pillStyle: 'bg-amber-50 text-amber-800 border border-amber-200/60',
      brandBadge: 'FINANCIAL SERVICES',
      badgeColor: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
      title: 'Grassroots Banking Milestone: VLEs Facilitate ₹1,200+ Cr in Doorstep Welfare',
      description:
        'Frontline Micro-ATM and DigiPay operators deliver critical Direct Benefit Transfers, pensions, and PM-KISAN funds to 14M+ elderly and rural citizens during festive disbursements.',
      date: '01 Oct 2025',
      readTime: '5 min read',
      refCode: 'REF: CSC/FIN/2026-Q3',
      authority: 'Financial Inclusion & Tax2win Division',
      image: '/images/journey-clean-vle.jpg',
      fullStory:
        'A comprehensive impact evaluation highlights the extraordinary frontline contributions of Village Level Entrepreneurs during the festive welfare disbursement cycle.\n\nOperating Micro-ATMs, AePS biometric scanners, and DigiPay terminals, VLEs delivered doorstep banking assistance to over 14 million rural beneficiaries — specifically elderly citizens, widows, and MGNREGA workers who previously faced arduous journeys to district branch counters.\n\nTotal social welfare disbursements processed through the network surpassed ₹1,200 Crores this quarter, proving once again that the decentralized VLE network is India’s most resilient last-mile financial lifeline.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // If at or near top of page, always show
      if (currentScrollY < 60) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> show navbar
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = SERVICE_DIRECTORY.filter((item) => {
    const matchCat =
      categoryFilter === 'ALL' || item.category === categoryFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.department.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const SERVICES_PER_PAGE = 12;
  const totalServicePages = Math.max(
    1,
    Math.ceil(filteredServices.length / SERVICES_PER_PAGE)
  );
  const currentServicePage = Math.min(servicePage, totalServicePages - 1);
  const paginatedServices = filteredServices.slice(
    currentServicePage * SERVICES_PER_PAGE,
    (currentServicePage + 1) * SERVICES_PER_PAGE
  );

  const rotateFan = (dir) => {
    const len = VLE_CAROUSEL_ITEMS.length;
    setFanActive((prev) => ((prev + dir) % len + len) % len);
  };

  const getOffset = (idx) => {
    const len = VLE_CAROUSEL_ITEMS.length;
    let diff = idx - fanActive;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  const springTransition = {
    type: 'spring',
    stiffness: 230,
    damping: 28,
    mass: 0.85,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fc] text-[#0a1628]">
      {/* ====================================================================
          01. IMPORTANT NOTICE STRIP (PROPOSAL SECTION 01)
          Keep People Informed — Functional Entry Point
          ==================================================================== */}
      <div className="bg-[#071120] border-b border-white/10 text-xs py-2 px-4 text-center text-white/90 relative z-50">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 truncate">
            <span className="px-2 py-0.5 rounded-full bg-[#ff5500] text-white font-semibold text-[10px] uppercase tracking-wider shrink-0">
              Notice
            </span>
            <span className="text-white/85 text-[12px] truncate">
              Digital Seva VLE Re-Registration & e-KYC Update 2026 is now live across all authorized centres.
            </span>
          </div>
          <a
            href="#whats-new"
            className="shrink-0 text-[#ff7733] hover:text-[#ff9966] font-medium text-[11.5px] transition-colors"
          >
            Read Update →
          </a>
        </div>
      </div>

      {/* ====================================================================
          02. HEADER — FLOATING PILL NAVIGATION (PROPOSAL SECTION 02)
          Minimal Navigation with Clear Hierarchy & Key Journeys (Hides on Downscroll, Shows on Upscroll)
          ==================================================================== */}
      <header
        className={`fixed inset-x-0 z-40 px-4 sm:px-8 pointer-events-none transition-all duration-300 ease-in-out ${
          scrolled ? 'top-3.5 sm:top-4' : 'top-10 sm:top-12'
        } ${
          navVisible || mobileNavOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`max-w-[1240px] mx-auto rounded-full px-5 sm:px-7 py-3 flex items-center justify-between gap-6 pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'bg-gradient-to-b from-[#0a1628]/95 via-[#08152c]/90 to-[#050e1f]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]'
              : 'bg-gradient-to-b from-[#0a1628]/85 via-[#08152c]/80 to-[#050e1f]/85 backdrop-blur-xl border border-white/15 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Clean Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0 font-semibold text-[15.5px] tracking-[-0.02em] text-white"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span>CSC Digital Seva</span>
          </a>

          {/* Centered Navigation Links matching Proposal Section 02 */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-white/80">
            <a href="#about" className="hover:text-white transition-colors">
              About CSC
            </a>
            <a href="#choose-journey" className="hover:text-white transition-colors">
              Choose Journey
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Explore Services
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a href="#for-vles" className="hover:text-white transition-colors">
              VLE Stories
            </a>
            <a href="#whats-new" className="hover:text-white transition-colors">
              News & Updates
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Help & Support
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setLang((l) => (l === 'EN' ? 'हिं' : 'EN'))}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'EN / हिं' : 'हिं / EN'}
            </button>

            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-[12.5px] font-semibold transition-colors cursor-pointer"
            >
              <span>Login</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>

            <button
              onClick={() => setMobileNavOpen((o) => !o)}
              className="lg:hidden p-1.5 text-white cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="lg:hidden max-w-[1240px] mx-auto mt-2 rounded-2xl bg-[#0a1628]/95 backdrop-blur-xl border border-white/12 px-5 py-4 space-y-2.5 text-sm font-medium text-white pointer-events-auto shadow-xl">
            <a href="#about" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">About CSC</a>
            <a href="#choose-journey" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">Choose Journey</a>
            <a href="#services" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">Explore Services</a>
            <a href="#how-it-works" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">How It Works</a>
            <a href="#for-vles" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">VLE Stories</a>
            <a href="#whats-new" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">News & Updates</a>
            <a href="#support" onClick={() => setMobileNavOpen(false)} className="block py-1 text-white/85 hover:text-white">Help & Support</a>
          </div>
        )}
      </header>

      {/* ====================================================================
          03. FLAGSHIP EDITORIAL HERO & NATIONWIDE METRICS
          Pure Typographic Authority · Functional Service Finder · Hairline Scale Strip
          Zero Hero Image · Zero AI Bento Cards
          ==================================================================== */}
      <section
        id="home"
        className="relative bg-[#0a1628] text-white border-b border-white/10 overflow-hidden"
      >
        {/* HERO STAGE — VIDEO FITS HERE ONLY */}
        <div className="relative pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 overflow-hidden">
          {/* Ambient Video confined strictly to Hero */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              className="w-full h-full object-cover object-center opacity-95"
            >
              <source src="/Hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Gentle Left-Side Scrim Overlay — light, airy gradient for text legibility without obscuring the video */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.35) 25%, rgba(10, 22, 40, 0.08) 45%, transparent 60%)',
              }}
            />
            {/* Top vignette for floating header and soft bottom fade into solid #0a1628 impact strip */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a1628]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            {/* Left-Aligned Editorial Header Stage */}
            <div className="max-w-3xl text-left">
              {/* Government Credential Pill — Frosted Glassmorphism */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-white/[0.14] to-white/[0.04] backdrop-blur-2xl border border-white/20 text-white/90 text-xs font-semibold tracking-wide mb-6 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
                <span>MINISTRY OF ELECTRONICS & IT · DIGITAL INDIA NETWORK</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-[-0.035em] text-white leading-[1.08] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                Bringing Essential Services Closer to Every Indian.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#c5d5ec] max-w-2xl leading-relaxed mb-9 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                India's unified assisted public service network — connecting citizens across 28 states to 400+ authorized government, banking, healthcare, and utility desks through neighborhood Village Level Entrepreneurs.
              </p>

              {/* Actions: 1. Become a VLE  2. Find Nearest Centre */}
              <div className="flex flex-wrap items-center justify-start gap-3.5 sm:gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                >
                  <span>Become a VLE</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>

                <button
                  onClick={() => setLocatorOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-b from-white/[0.14] to-white/[0.05] hover:from-white/[0.22] hover:to-white/[0.10] backdrop-blur-2xl border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all hover:border-white/35 hover:scale-105 cursor-pointer shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>Find Nearest Centre</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* IMPACT METRICS STAGE — SOLID #0a1628 (NO VIDEO) */}
        <div className="relative z-10 bg-[#0a1628] border-t border-white/10 py-10 sm:py-12">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
              <div className="lg:px-8 first:lg:pl-0">
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
                  5,50,000<span className="text-[#ff5500]">+</span>
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
                  Active Service Centres
                </div>
                <p className="text-xs text-[#9cb1d4] leading-relaxed">
                  Operational entrepreneur counters delivering assisted doorstep services.
                </p>
              </div>

              <div className="lg:px-8">
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
                  3,75,000<span className="text-[#ff5500]">+</span>
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
                  Gram Panchayats
                </div>
                <p className="text-xs text-[#9cb1d4] leading-relaxed">
                  Direct village infrastructure covering over 90% of rural India.
                </p>
              </div>

              <div className="lg:px-8">
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
                  400<span className="text-[#ff5500]">+</span>
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
                  Essential Desks
                </div>
                <p className="text-xs text-[#9cb1d4] leading-relaxed">
                  Central, state, banking, utility bills and pensions on one unified ledger.
                </p>
              </div>

              <div className="lg:px-8 last:lg:pr-0">
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
                  ₹1,200<span className="text-[#ff5500]">+</span> <span className="text-lg sm:text-xl font-normal text-white/70">Cr</span>
                </div>
                <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
                  Monthly DBT Disbursed
                </div>
                <p className="text-xs text-[#9cb1d4] leading-relaxed">
                  Doorstep widow pensions and government welfare payouts to beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          05. CHOOSE YOUR JOURNEY — TWO SIDES OF THE SAME ECOSYSTEM
          Headline: Every Journey Begins with a Different Need.
          Format: Regal Dual-Portal Architectural Folios on Deep Navy & Warm Ivory
          05A: For Aspiring VLEs — Turn Your Ambition into an Opportunity
          05B: For Citizens — The Help You Need. The Services You Can Access.
          ==================================================================== */}
      <section
        id="choose-journey"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center px-5 sm:px-8 bg-[#fffaf5] border-b border-[#0a1628]/12 scroll-mt-24 py-16 sm:py-20"
      >
        {/* Subtle Grand Mandala Background Art (Greyish on Cream) — Animated on scroll */}
        <motion.img
          src="/images/mandala-grand-navy.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          whileInView={{ opacity: 0.045, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[780px] h-[780px] object-contain absolute -top-48 left-1/2 -translate-x-1/2 grayscale pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748b] mb-2">
              <LotusBadge gray className="w-4 h-4 opacity-70" />
              <span>01 / CHOOSE YOUR JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.15] mb-2.5">
              Every Journey Begins with a Different Need.
            </h2>
            <p className="text-xs sm:text-[14px] text-[#64748b] leading-relaxed max-w-xl mx-auto">
              Two sides of the same ecosystem — empowering local entrepreneurs to establish thriving digital service counters, and connecting citizens to essential public and banking desks.
            </p>
          </div>

          {/* Regal Dual-Portal Architectural Folios (Zero AI Containers · Pure Typographic Authority) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* 05A — For Aspiring VLEs */}
            <div className="relative rounded-[28px] bg-[#0a1628] text-white border border-white/12 p-8 sm:p-9 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(7,17,32,0.35)] hover:border-[#ff5500]/40 transition-all duration-300 overflow-hidden group">
              {/* Corner Traditional Mandala Art Watermark — Animated on scroll */}
              <motion.img
                src="/images/mandala-grand-white.png"
                alt=""
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.7, x: 40, y: 40, rotate: -30 }}
                whileInView={{ opacity: 0.07, scale: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[320px] h-[320px] object-contain absolute -bottom-24 -right-24 pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
              />

              <div className="relative z-10">
                {/* Top Bar: Pill Badge & Counter */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.05] backdrop-blur-xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
                    <span>FOR ASPIRING VLES</span>
                  </span>
                  <span className="text-xs font-mono text-white/40 tracking-wider">01 / 02</span>
                </div>

                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-white tracking-[-0.03em] leading-[1.15] mb-3 mt-3 group-hover:text-[#ff7733] transition-colors">
                  Turn Your Ambition into an Opportunity.
                </h3>

                <p className="text-xs sm:text-[13.5px] text-[#b4c6e4] leading-relaxed mb-6 font-normal">
                  Establish a government-authorized Common Service Centre in your gram panchayat. Deliver 400+ public and banking services while building a respected neighborhood enterprise.
                </p>

                {/* Pure-Typographic Broadsheet Spec Strip (Zero AI Containers) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4.5 border-y border-white/10 my-6 divide-x divide-white/10 text-left">
                  <div className="first:pl-0">
                    <div className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                      400<span className="text-[#ff5500]">+</span>
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Public Desks
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      Central & state portals
                    </div>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <div className="text-2xl sm:text-[26px] font-bold text-[#ff7733] tracking-tight leading-none mb-1">
                      MeitY
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Accreditation
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      Official village license
                    </div>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <div className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                      Instant
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Wallet DBT
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      Direct commission credit
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-2">
                <button
                  onClick={() => setLoginOpen(true)}
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs sm:text-[13.5px] tracking-wide cursor-pointer transition-all shadow-xs group/btn"
                >
                  <span>Explore What It Means to Be a CSC VLE</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 05B — For Citizens */}
            <div className="relative rounded-[28px] bg-[#07132b] text-white border border-white/12 p-8 sm:p-9 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(7,17,32,0.35)] hover:border-[#0284c7]/40 transition-all duration-300 overflow-hidden group">
              {/* Corner Traditional Mandala Art Watermark — Animated on scroll */}
              <motion.img
                src="/images/mandala-card-02.png"
                alt=""
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.7, x: 40, y: 40, rotate: 30 }}
                whileInView={{ opacity: 0.07, scale: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[320px] h-[320px] object-contain absolute -bottom-24 -right-24 pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
              />

              <div className="relative z-10">
                {/* Top Bar: Pill Badge & Counter */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.05] backdrop-blur-xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span>FOR CITIZENS</span>
                  </span>
                  <span className="text-xs font-mono text-white/40 tracking-wider">02 / 02</span>
                </div>

                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-white tracking-[-0.03em] leading-[1.15] mb-3 mt-3 group-hover:text-[#38bdf8] transition-colors">
                  The Help You Need. The Services You Can Access.
                </h3>

                <p className="text-xs sm:text-[13.5px] text-[#b4c6e4] leading-relaxed mb-6 font-normal">
                  From verified income and caste certificates to pension disbursements and utility bills — access assisted doorstep services in your neighborhood with official printed receipts.
                </p>

                {/* Pure-Typographic Broadsheet Spec Strip (Zero AI Containers) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4.5 border-y border-white/10 my-6 divide-x divide-white/10 text-left">
                  <div className="first:pl-0">
                    <div className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                      5.5<span className="text-[#38bdf8]">L+</span>
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Neighbourhoods
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      Pan-India coverage
                    </div>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <div className="text-2xl sm:text-[26px] font-bold text-[#38bdf8] tracking-tight leading-none mb-1">
                      ₹0 Extra
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Official Rates
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      No middlemen markup
                    </div>
                  </div>

                  <div className="pl-3 sm:pl-4">
                    <div className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                      Instant
                    </div>
                    <div className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                      Govt Receipts
                    </div>
                    <div className="text-[10px] text-[#9cb1d4] mt-0.5 leading-tight">
                      SMS tracking reference
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-2">
                <a
                  href="#services"
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-xs sm:text-[13.5px] tracking-wide cursor-pointer transition-all shadow-xs group/btn"
                >
                  <span>Find Services at Your Nearest CSC</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          C. VLE OPPORTUNITY & PLATFORM OVERVIEW (PROPOSAL SECTION 07)
          Headline: Explore What It Means to Be a CSC VLE.
          ==================================================================== */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 bg-[#0a1628] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        {/* Top-Left Mandala Art on Deep Navy Section */}
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[620px] h-[620px] object-contain absolute -top-48 -left-48 opacity-[0.08] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          {/* Editorial Section Header with Generous Space After Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ff7733] mb-2.5">
                <LotusBadge className="w-4 h-4" />
                <span>01 / VLE OPPORTUNITY & OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.03em] text-white leading-[1.1]">
                Explore What It Means to Be a CSC VLE.
              </h2>
            </div>
            <p className="lg:col-span-5 text-xs sm:text-[13.5px] text-[#b4c6e4] leading-[1.5]">
              Step inside the world of a Village Level Entrepreneur — a unified digital platform built for assisted delivery, transparent commissions, and community impact.
            </p>
          </div>

          {/* Exact 3 Hover-Drop Folder-Tab Cards with Full Tall Height & Distinct Pure White Mandalas */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            onMouseLeave={() => setHoveredCard(null)}
          >
            {PLATFORM_CARDS.map((card, idx) => {
              const isHovered = hoveredCard === idx;
              return (
                <motion.article
                  key={card.number}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onFocus={() => setHoveredCard(idx)}
                  tabIndex={0}
                  className={`relative h-[430px] sm:h-[455px] lg:h-[470px] rounded-[30px] p-[5px] cursor-pointer select-none shadow-[0_24px_55px_-15px_rgba(0,0,0,0.45)] ${card.outerBg}`}
                >
                  <div className="relative w-full h-full rounded-[25px] overflow-hidden">
                    {/* Top Pure White Mandala Stage */}
                    <CardVisualStage variant={card.variant} isHovered={isHovered} />

                    {/* Folder-Tab Detail Sheet */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? '45%' : '80%',
                      }}
                      transition={springTransition}
                      style={{ backgroundColor: card.sheetColor }}
                      className={`absolute inset-x-0 bottom-0 z-30 rounded-tr-[22px] flex flex-col justify-between px-7 pb-7 pt-1 ${card.textColor}`}
                    >
                      {/* Seamless SVG Folder-Tab Top Shoulder */}
                      <svg
                        viewBox="0 0 400 36"
                        preserveAspectRatio="none"
                        className="absolute -top-[35px] left-0 w-full h-[36px] pointer-events-none block"
                      >
                        <path
                          d="M 0,36 L 0,18 Q 0,0 18,0 L 102,0 Q 118,0 130,13 L 144,28 Q 152,36 168,36 L 400,36 Z"
                          fill={card.sheetColor}
                        />
                      </svg>

                      {/* Number inside top-left tab + ↗ arrow on right */}
                      <div className="relative z-10 flex items-start justify-between -mt-3.5">
                        <span className="text-[42px] font-normal tracking-[-0.04em] leading-none">
                          {card.number}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#ff5500] mt-3" />
                      </div>

                      {/* Bottom Title & Description */}
                      <div className="relative z-10">
                        <h3 className="text-[16px] font-semibold tracking-[-0.01em] leading-snug mb-1.5">
                          {card.title}
                        </h3>
                        <p className={`text-[13px] leading-[1.55] ${card.subColor}`}>
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          D. EXPLORE SERVICES (Fits Viewport)
          Navy & Saffron Orange Service Catalogue with Authentic Mandala Backdrop
          ==================================================================== */}
      <section
        id="services"
        className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 bg-[#fffaf5] border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-20"
      >
        {/* Subtle Floral Mandala Background Art (Greyish on Cream) */}
        <img
          src="/images/mandala-floral-navy.png"
          alt=""
          aria-hidden="true"
          className="w-[460px] h-[460px] object-contain absolute -bottom-40 -left-40 opacity-[0.05] grayscale pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-4 lg:mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] mb-1.5">
                02 / INTERACTIVE SERVICE EXPLORER
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1]">
                One Centre. A World of Essential Services.
              </h2>
              <p className="text-xs sm:text-[13px] text-[#64748b] mt-1 max-w-lg">
                What would you like help with? Choose a common need or search to explore verified G2C and B2C services available through your nearest centre.
              </p>
            </div>

            {/* Search Input + G2C / B2C Segmented Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <div className="flex items-center bg-white border border-[#0a1628]/20 focus-within:border-[#0a1628] rounded-xl px-3 py-2 w-full sm:w-64 shadow-xs transition-colors">
                <Search className="w-3.5 h-3.5 text-[#64748b] mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setServicePage(0);
                  }}
                  placeholder="What are you looking for?"
                  className="w-full text-xs text-[#0a1628] placeholder:text-[#94a3b8] bg-transparent outline-none"
                />
              </div>

              <div className="inline-flex bg-[#0a1628] p-1 rounded-xl">
                {[
                  { id: 'ALL', label: 'All Services' },
                  { id: 'G2C', label: 'G2C' },
                  { id: 'B2C', label: 'B2C' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setCategoryFilter(tab.id);
                      setServicePage(0);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      categoryFilter === tab.id
                        ? 'bg-[#ff5500] text-white'
                        : 'text-[#b4c6e4] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service List Grid */}
          {paginatedServices.length > 0 ? (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xs border-t border-l border-[#0a1628]/15 bg-white">
                <AnimatePresence mode="wait" custom={serviceDir} initial={false}>
                  <motion.div
                    key={`${categoryFilter}-${searchQuery}-${currentServicePage}`}
                    custom={serviceDir}
                    variants={{
                      enter: (dir) => ({
                        x: dir > 0 ? 80 : -80,
                        opacity: 0,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                      },
                      exit: (dir) => ({
                        x: dir > 0 ? -80 : 80,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.36,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  >
                    {paginatedServices.map((srv) => (
                      <article
                        key={srv.id}
                        className="relative group h-[135px] sm:h-[145px] lg:h-[150px] border-r border-b border-[#0a1628]/15 p-3.5 sm:p-4.5 bg-white hover:bg-[#0a1628] transition-colors duration-300 select-none overflow-hidden"
                      >
                        {/* DEFAULT VIEW: Detailed SVG Vector Logo + Centered Title Below (Removed on Hover) */}
                        <div className="h-full flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                          <div className="scale-[0.82] sm:scale-[0.88]">
                            <ServiceVectorLogo id={srv.id} />
                          </div>

                          <h3 className="text-[14.5px] sm:text-[15.5px] font-semibold tracking-[-0.015em] text-[#0a1628] leading-tight">
                            {srv.name}
                          </h3>
                        </div>

                        {/* HOVER VIEW: Description Only (Replaces Logo & Title on Hover) */}
                        <div className="absolute inset-0 p-4 sm:p-5 flex items-center justify-center text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                          <p className="text-[12px] sm:text-[12.5px] text-white/95 leading-[1.5]">
                            {srv.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left Arrow on Grid Edge to Move Back */}
              {totalServicePages > 1 && currentServicePage > 0 && (
                <button
                  onClick={() => {
                    setServiceDir(-1);
                    setServicePage(
                      (prev) =>
                        (prev - 1 + totalServicePages) % totalServicePages
                    );
                  }}
                  aria-label="Show previous services"
                  title="Previous services"
                  className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1628] hover:bg-[#ff5500] text-white shadow-lg transition-all cursor-pointer absolute top-1/2 -left-4 sm:-left-5 -translate-y-1/2 z-20"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}

              {/* Right Arrow on Grid Edge to Move Forward */}
              {totalServicePages > 1 &&
                currentServicePage < totalServicePages - 1 && (
                  <button
                    onClick={() => {
                      setServiceDir(1);
                      setServicePage((prev) => (prev + 1) % totalServicePages);
                    }}
                    aria-label="Show next services"
                    title="Next services"
                    className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1628] hover:bg-[#ff5500] text-white shadow-lg transition-all cursor-pointer absolute top-1/2 -right-4 sm:-right-5 -translate-y-1/2 z-20"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
            </div>
          ) : (
            <div className="py-10 text-center border border-[#0a1628]/15 rounded-2xl bg-white">
              <p className="text-sm text-[#334766] mb-2">
                No services found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('ALL');
                  setServicePage(0);
                }}
                className="text-xs font-semibold text-[#0a1628] underline cursor-pointer"
              >
                Reset search
              </button>
            </div>
          )}

          <p className="mt-2.5 text-[11px] text-[#5a6e8c]">
            Note: Service availability may vary by CSC and region depending on state portal integration and operator authorization.
          </p>
        </div>
      </section>

      {/* ====================================================================
          E. HOW DIGITAL SEVA WORKS (IMAGE 2: SCROLL-EXPANDING PILL GALLERY)
          Deep Navy Blue Stage with Intricate White & Saffron Mandala Art
          ==================================================================== */}
      <section
        ref={workflowRef}
        id="how-it-works"
        className="relative h-[260vh] bg-[#0a1628] text-white border-b border-white/10"
      >
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full flex flex-col justify-center overflow-hidden">
          {/* Authentic High-Res Mandala Watermark Aligned to Right Edge of Screen */}
          <img
            src="/images/mandala-card-01.png"
            alt=""
            aria-hidden="true"
            className="w-[540px] h-[540px] object-contain absolute -top-36 -right-36 opacity-[0.07] pointer-events-none select-none"
          />

          <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 mb-1.5">
                  03 / SERVICE DELIVERY FLOW
                </p>
                <h2 className="text-2xl sm:text-[32px] font-semibold tracking-[-0.03em] text-white leading-tight">
                  How Digital Seva Works
                </h2>
                <p className="text-xs sm:text-[13.5px] text-white/70 mt-1 max-w-lg">
                  A day, a need, a human interaction — see how assisted service delivery unfolds from walk-in to instant printed receipt.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {WORKFLOW_STEPS.map((st, idx) => (
                  <button
                    key={st.step}
                    onClick={() => selectWorkflowStep(idx)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      activeWorkflowIdx === idx
                        ? 'bg-[#2563eb] text-white shadow-md shadow-blue-500/20'
                        : 'bg-white/10 text-[#b4c6e4] hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {st.step}
                  </button>
                ))}
              </div>
            </div>

            {/* Exact Pill-to-Landscape Expanding Gallery with Refined Blue Accents & Rich Closed State */}
            <div className="flex items-stretch gap-3 sm:gap-3.5 h-[370px] sm:h-[410px] lg:h-[430px] w-full select-none">
              {WORKFLOW_STEPS.map((item, idx) => {
                const isExpanded = idx === activeWorkflowIdx;
                return (
                  <motion.div
                    key={item.step}
                    layout
                    onClick={() => selectWorkflowStep(idx)}
                    initial={false}
                    animate={{
                      flexGrow: isExpanded ? 1 : 0,
                      flexShrink: 0,
                      flexBasis: isExpanded ? '0%' : '84px',
                      borderRadius: isExpanded ? 28 : 22,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 210,
                      damping: 28,
                      mass: 0.9,
                    }}
                    className="relative h-full overflow-hidden cursor-pointer bg-[#071120] border border-white/10 hover:border-white/20 transition-colors group"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      initial={false}
                      animate={{
                        scale: isExpanded ? 1.0 : 1.15,
                        opacity: isExpanded ? 1 : 0.18,
                        filter: isExpanded ? 'blur(0px)' : 'blur(3px)',
                      }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                    />

                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0.35 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/30 to-transparent pointer-events-none"
                    />

                    {/* REFINED CLOSED STATE: Dark Glass Overlay + Step Number Badge + Vertical Title */}
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 z-20 flex flex-col justify-between items-center py-6 px-2 bg-[#071120]/90 backdrop-blur-md group-hover:bg-[#071120]/80 transition-colors pointer-events-none border-l border-white/10"
                      >
                        {/* Top: Step Number Badge */}
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs grid place-items-center shadow-md">
                          {item.step}
                        </div>

                        {/* Middle: Vertical Step Title */}
                        <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                          <span
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                            className="text-[12px] font-semibold tracking-[0.2em] text-white/85 group-hover:text-white uppercase whitespace-nowrap"
                          >
                            {item.shortTitle || item.title}
                          </span>
                        </div>

                        {/* Bottom: Click indicator */}
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#2563eb] text-white/70 group-hover:text-white grid place-items-center transition-colors shadow-xs">
                          <Plus className="w-4 h-4" />
                        </div>
                      </motion.div>
                    )}

                    {/* EXPANDED STATE: Full Detail Card with Blue Accent Badges & Action */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.28, delay: 0.08 }}
                          className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-6 z-10"
                        >
                          <div className="max-w-xl text-white">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563eb] text-white text-[10.5px] uppercase font-semibold mb-2.5 tracking-wider shadow-md shadow-blue-500/25">
                              <span>STEP {item.step}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-[-0.02em] leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-[#d6e2f5] mt-1.5 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              selectWorkflowStep(
                                (idx + 1) % WORKFLOW_STEPS.length
                              );
                            }}
                            aria-label="Next workflow step"
                            className="w-11 h-11 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white grid place-items-center shrink-0 shadow-lg shadow-blue-600/30 cursor-pointer hover:scale-105 transition-all"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          F. FOR VILLAGE LEVEL ENTREPRENEURS (Fits Viewport)
          Preserved 5-Card Fanned Arc Interaction with Refined Horizontal Rectangle Cards
          ==================================================================== */}
      <section
        id="for-vles"
        className="relative min-h-screen lg:h-screen flex flex-col justify-center px-5 sm:px-8 bg-gradient-to-b from-[#fffaf5] to-[#eef2f9] border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 pt-24 lg:pt-20 pb-6 lg:pb-8"
      >
        {/* Subtle Grand Mandala Background Art (Greyish on Cream) */}
        <img
          src="/images/mandala-grand-navy.png"
          alt=""
          aria-hidden="true"
          className="w-[740px] h-[740px] object-contain absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.05] grayscale pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto text-center w-full">
          <div className="max-w-2xl mx-auto mb-3 sm:mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] mb-1.5">
              04 / VLE SUCCESS STORIES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1]">
              Real People. Real Journeys. Real Experiences.
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#64748b] mt-1.5 max-w-xl mx-auto">
              The people behind the network — authentic experiences of Village Level Entrepreneurs bringing digital India to every community.
            </p>
          </div>

          {/* 5-Card Responsive Rectangle Fanned Arc Stage */}
          <div className="relative h-[250px] sm:h-[285px] md:h-[305px] flex items-center justify-center my-2 select-none overflow-visible">
            {VLE_CAROUSEL_ITEMS.map((item, idx) => {
              const offset = getOffset(idx);
              const slot = getFanSlot(offset, windowWidth);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setFanActive(idx)}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) rotateFan(1);
                    else if (info.offset.x > 40) rotateFan(-1);
                  }}
                  initial={false}
                  animate={{
                    x: slot.x,
                    y: slot.y,
                    rotate: slot.rotate,
                    scale: slot.scale,
                    zIndex: slot.zIndex,
                    filter: `brightness(${slot.brightness})`,
                  }}
                  whileHover={
                    isCenter
                      ? { scale: 1.04, y: slot.y - 6 }
                      : { scale: slot.scale + 0.02, y: slot.y - 4 }
                  }
                  transition={springTransition}
                  className="absolute w-[320px] sm:w-[480px] md:w-[540px] h-[215px] sm:h-[250px] md:h-[270px] rounded-[24px] overflow-hidden cursor-pointer bg-white text-[#0a1628] shadow-[0_20px_45px_-12px_rgba(10,22,40,0.14)] border border-[#0a1628]/10 flex flex-row select-none text-left"
                >
                  {/* Left Side: Testimonial & Person Meta */}
                  <div className="p-5 sm:p-6 pr-1 flex flex-col justify-between flex-1 min-w-0 z-10">
                    <p className="text-[13px] sm:text-[14.5px] md:text-[15.5px] text-[#0a1628] leading-[1.5] font-normal tracking-[-0.01em] line-clamp-3 sm:line-clamp-4">
                      “{item.testimonial}”
                    </p>

                    <div className="pt-2 sm:pt-2.5 border-t border-[#0a1628]/8">
                      <div className="text-[13px] sm:text-[14px] font-bold text-[#0a1628] leading-tight">
                        {item.name}
                        <span className="text-[11.5px] font-normal text-[#64748b] ml-1.5">
                          Age {item.age}
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-[12px] text-[#64748b] mt-0.5 leading-tight font-medium">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Person Cutout */}
                  <div className="w-[46%] sm:w-[48%] h-full shrink-0 relative flex items-end justify-center pointer-events-none overflow-hidden pr-1 sm:pr-3 pb-0">
                    <img
                      src={`${item.image}?v=25`}
                      alt={`${item.name}, VLE from ${item.location}`}
                      className="h-[102%] w-auto max-h-none object-contain object-bottom pointer-events-none drop-shadow-lg select-none transform translate-y-0.5"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows + Indicator Dots */}
          <div className="flex items-center justify-center gap-3.5 mt-3 sm:mt-4">
            <button
              onClick={() => rotateFan(-1)}
              aria-label="Previous VLE story"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#0a1628]/12 text-[#0a1628] hover:bg-[#ff5500] hover:text-white hover:border-[#ff5500] grid place-items-center shadow-xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {VLE_CAROUSEL_ITEMS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setFanActive(dotIdx)}
                  aria-label={`Go to story ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    fanActive === dotIdx ? 'w-6 bg-[#ff5500]' : 'w-2 bg-[#0a1628]/20 hover:bg-[#0a1628]/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => rotateFan(1)}
              aria-label="Next VLE story"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#0a1628]/12 text-[#0a1628] hover:bg-[#ff5500] hover:text-white hover:border-[#ff5500] grid place-items-center shadow-xs transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          G. NETWORK STORIES & UPDATES
          Headline: News and Updates (Updates in orange)
          Format: 3 Modern Clean Cards with Bespoke Vector Graphics & Gradients
          ==================================================================== */}
      <section
        id="whats-new"
        className="relative py-20 lg:py-24 px-5 sm:px-8 bg-[#fffaf5] text-[#0a1628] border-b border-[#0a1628]/10 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Clean, Human Editorial Header */}
          <div className="max-w-xl mx-auto text-center mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0a1628]">
              News & Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Official circulars, nationwide initiatives, and grassroots announcements.
            </p>
          </div>

          {/* 3 Bespoke CSC Network Story Cards: Vector Illustration Stage + Seamless Navy Blue Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {NEWS_CARDS.map((card) => (
              <article
                key={card.id}
                onClick={() => setSelectedStory(card)}
                className="bg-[#0c1a2e] rounded-[28px] border-0 shadow-[0_8px_30px_rgba(10,22,40,0.16)] overflow-hidden flex flex-col justify-between hover:shadow-[0_16px_44px_rgba(10,22,40,0.28)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Top Bespoke Vector Illustration Stage matching Website Content */}
                  <NewsIllustrationStage variant={card.variant} />

                  {/* Card Body - Deep Navy Blue with White/Light Text */}
                  <div className="p-6 pt-5 pb-2 text-left">
                    {/* Category Pill & Date */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 border-0">
                        {card.categoryTag}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {card.date}
                      </span>
                    </div>

                    {/* Title - Consistent white with NO color change on hover */}
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug mb-2">
                      {card.cardTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                      {card.cardSummary}
                    </p>
                  </div>
                </div>

                {/* Footer Row (Seamless Navy bg-[#0c1a2e], NO dividing border line, White Icon) */}
                <div className="px-6 pb-6 pt-2 bg-[#0c1a2e] flex items-center justify-between text-xs">
                  {/* Left Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStory(card);
                    }}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0c1a2e] transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    {card.actionText}
                  </button>

                  {/* Right Status Indicator with White Icon */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="truncate max-w-[155px] font-medium">{card.statusNote}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ==========================================================
              INTERACTIVE NEWSLETTER & SCHEMES SUBSCRIPTION BANNER
              Allows citizens and VLEs to subscribe to official circulars,
              new scheme rollouts, welfare subsidies, and promotion alerts
              ========================================================== */}
          <div className="mt-12 sm:mt-16 rounded-[28px] bg-gradient-to-br from-[#0c1a2e] via-[#0d1f38] to-[#122847] p-7 sm:p-10 lg:p-12 text-white border border-slate-700/60 shadow-lg relative overflow-hidden">
            {/* Subtle Mandala Background Art Graphic */}
            <img
              src="/images/mandala-grand-white.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-80 h-80 object-contain opacity-[0.06] pointer-events-none select-none"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading, Value Proposition & Trust Badges */}
              <div className="lg:col-span-7">
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold mb-3.5">
                  <Mail className="w-3.5 h-3.5 text-[#ff7733]" />
                  <span>OFFICIAL DIGITAL SEVA DISPATCH</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Stay Informed on New Schemes, Directives & VLE Promotions
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Get official circulars from MeitY, launch notices for upcoming G2C welfare schemes, subsidy calendars, and special VLE commission incentive alerts delivered straight to your inbox.
                </p>

                {/* 3 Value Pillars */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>New Scheme Rollouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Security Advisories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>VLE Earning Incentives</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Subscription Form */}
              <div className="lg:col-span-5">
                <div className="bg-[#081322]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/12 shadow-xl">
                  {newsletterSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 grid place-items-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-1">
                        Subscription Confirmed!
                      </h4>
                      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                        We have registered <strong className="text-white">{newsletterEmail}</strong>. You will receive official weekly digests, scheme launches, and emergency advisories.
                      </p>
                      <button
                        onClick={() => {
                          setNewsletterSubscribed(false);
                          setNewsletterEmail('');
                        }}
                        className="text-xs text-[#ff7733] hover:text-white font-medium underline underline-offset-4 cursor-pointer transition-colors"
                      >
                        Subscribe another email address
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3.5">
                      <div>
                        <label
                          htmlFor="newsletter-email"
                          className="block text-xs font-semibold text-white/90 mb-1.5"
                        >
                          Official or Personal Email
                        </label>
                        <div className="relative">
                          <input
                            id="newsletter-email"
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              if (newsletterError) setNewsletterError('');
                            }}
                            placeholder="Enter your email (e.g. vle@csc.gov.in)"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white/[0.14] border border-white/15 focus:border-white/15 outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-white text-xs sm:text-sm placeholder:text-slate-400 transition-all pr-10"
                            required
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        {newsletterError && (
                          <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                            <span>⚠</span>
                            <span>{newsletterError}</span>
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 px-5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        <Send className="w-4 h-4 text-white" />
                        <span>Subscribe to Scheme & Circular Alerts</span>
                      </button>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/10">
                        <span>🔒 100% Privacy Protected</span>
                        <span>Zero Spam · Unsubscribe Anytime</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gazette Story Detail Reading Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 bg-[#0a1628]/70 backdrop-blur-sm z-50 grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0c1a2e] text-white w-full max-w-xl rounded-3xl shadow-2xl relative border border-white/20 overflow-hidden"
            >
              {/* Header Image with dark gradient scrim */}
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-[#ff5500] text-white grid place-items-center cursor-pointer z-10 transition-colors backdrop-blur-md"
                  aria-label="Close story"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Tags on modal header */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                  <span className="px-2.5 py-0.5 rounded bg-[#ff5500] font-bold text-[11px] tracking-wide text-white shadow-sm">
                    {selectedStory.category}
                  </span>
                  <span className="font-mono text-[10.5px] text-white/90 bg-black/50 px-2 py-0.5 rounded border border-white/20">
                    {selectedStory.refCode}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {/* Authority & Date */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium pb-3 mb-4 border-b border-white/10">
                  <span className="text-slate-300">{selectedStory.authority}</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>{selectedStory.date}</span>
                    <span>· {selectedStory.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4 leading-snug">
                  {selectedStory.title}
                </h3>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 mb-6 whitespace-pre-line max-h-[42vh] overflow-y-auto pr-2">
                  {selectedStory.fullStory}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>STATUS: ACTIVE CIRCULAR</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Print Notice
                    </button>
                    <button
                      onClick={() => setSelectedStory(null)}
                      className="px-5 py-2 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          H. TRUST, SAFETY & SUPPORT (Fits Viewport)
          Headline: Your Safety Is Part of Every Service.
          ==================================================================== */}
      <section
        id="support"
        className="relative min-h-screen lg:h-screen flex flex-col justify-center px-5 sm:px-8 bg-[#fffaf5] border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 pt-24 lg:pt-20 pb-6 lg:pb-8"
      >
        {/* Subtle Floral Mandala Background Art (Greyish on Cream) */}
        <img
          src="/images/mandala-floral-navy.png"
          alt=""
          aria-hidden="true"
          className="w-[520px] h-[520px] object-contain absolute -top-36 -left-36 opacity-[0.05] grayscale pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 5 Cols: Deep Navy Support Channels Card */}
            <div className="lg:col-span-5 relative rounded-[28px] bg-[#0a1628] text-white p-6 sm:p-7 overflow-hidden shadow-xl border border-white/10">
              {/* Authentic Indian Mandala Art in Bottom-Right Corner */}
              <img
                src="/images/mandala-card-01.png"
                alt=""
                aria-hidden="true"
                className="w-[300px] h-[300px] object-contain absolute -bottom-20 -right-20 opacity-[0.09] pointer-events-none select-none"
              />

              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55 mb-1.5">
                  06 / TRUST, SAFETY & SUPPORT
                </p>
                <h2 className="text-2xl sm:text-[28px] font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-2.5">
                  Your Safety Is Part of Every Service.
                </h2>
                <p className="text-xs sm:text-[13px] text-white/70 leading-[1.5] mb-5">
                  Digital services are only useful when people understand how to access them safely. Recognise official channels, identify fraudulent communication, and know where to get help.
                </p>

                <div className="divide-y divide-white/10 border-t border-b border-white/10">
                  {SUPPORT_ITEMS.map((item) => (
                    <div
                      key={item.code}
                      className="py-2.5 sm:py-3 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="text-xs sm:text-[13px] font-semibold text-white">
                          {item.title}
                        </div>
                        <p className="text-[11px] sm:text-[11.5px] text-white/65 mt-0.5 leading-snug">
                          {item.description}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shrink-0 shadow-sm">
                        {item.action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Expandable FAQs */}
            <div className="lg:col-span-7 lg:pl-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] mb-1.5">
                Frequently Asked Questions
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a1628] mb-4">
                Common Questions & Support Guidance
              </h3>

              <div className="divide-y divide-[#0a1628]/12 border-t border-b border-[#0a1628]/12">
                {FAQ_LIST.map((faq, idx) => {
                  const open = openFaqIdx === idx;
                  return (
                    <div key={faq.q} className="py-3 sm:py-3.5">
                      <button
                        onClick={() => setOpenFaqIdx(open ? -1 : idx)}
                        className="w-full text-left flex items-center justify-between gap-4 text-[14px] sm:text-[15px] font-semibold text-[#0a1628] hover:text-[#ff5500] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {open ? (
                          <span className="w-6 h-6 rounded-full bg-[#ff5500] text-white grid place-items-center shrink-0">
                            <Minus className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-[#0a1628] text-white grid place-items-center shrink-0">
                            <Plus className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </button>
                      {open && (
                        <p className="mt-2 text-xs sm:text-[13px] text-[#334766] leading-[1.6] pr-6">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          I. FINAL CALL TO ACTION — DEDICATED VLE CONVERSION STAGE
          Headline: Ready to Bring Digital Services to Your Community?
          Art Graphics: Traditional Indian Mandalas on Bottom-Left & Bottom-Right
          Animated entrance every time user scrolls to this section (viewport: once: false)
          ==================================================================== */}
      <section
        id="get-started"
        className="relative min-h-[70vh] flex flex-col justify-center px-5 sm:px-8 bg-[#0a1628] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-12 sm:py-14 lg:py-16"
      >
        {/* Pristine High-Resolution Grainy Gradient Wallpaper Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/grainy-gradient-bg-4k.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle deep navy gradient integration on top & bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/50" />

          {/* Native SVG Tactile Micro-Grain Overlay (Infinitely sharp, never pixelates or bands) */}
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>

        {/* BOTTOM-LEFT CORNER ART GRAPHIC — Animated Entrance Each Time Scrolled into View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, x: -80, y: 80, rotate: -35 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-32 sm:-bottom-40 -left-32 sm:-left-40 pointer-events-none select-none z-1"
        >
          <img
            src="/images/mandala-grand-white.png"
            alt=""
            aria-hidden="true"
            className="w-[340px] sm:w-[440px] lg:w-[500px] h-[340px] sm:h-[440px] lg:h-[500px] object-contain opacity-[0.16]"
          />
        </motion.div>

        {/* BOTTOM-RIGHT CORNER ART GRAPHIC — Animated Entrance Each Time Scrolled into View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, x: 80, y: 80, rotate: 35 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-32 sm:-bottom-40 -right-32 sm:-right-40 pointer-events-none select-none z-1"
        >
          <img
            src="/images/mandala-grand-white.png"
            alt=""
            aria-hidden="true"
            className="w-[340px] sm:w-[440px] lg:w-[500px] h-[340px] sm:h-[440px] lg:h-[500px] object-contain opacity-[0.16]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[1000px] mx-auto w-full text-center"
        >
          {/* Frosted Glass Credential Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] backdrop-blur-2xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase mb-3 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span>JOIN 5,50,000+ VILLAGE LEVEL ENTREPRENEURS</span>
          </div>

          {/* Display Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-[-0.03em] leading-tight mb-2.5 max-w-2xl mx-auto drop-shadow-sm">
            Ready to Bring Digital Services to Your Community?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] max-w-xl mx-auto leading-relaxed mb-6 font-normal">
            Establish a government-authorized Common Service Centre in your gram panchayat. Deliver 400+ essential banking, welfare, and public desks while building a respected neighborhood enterprise.
          </p>

          {/* 3 Authentic Frosted Glassmorphism Key Prerequisite Cards matching User Reference Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6 text-left">
            {/* Card 01 — Simple Eligibility */}
            <div className="relative overflow-hidden rounded-[20px] p-4 sm:p-4.5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white/90">
                  Step 01
                </span>
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                Simple Eligibility
              </div>
              <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                Age 18+ with minimum 10th pass qualification and local panchayat residency.
              </div>

              {/* Sub-Card Metric Slider Hairline in Clean White */}
              <div className="relative z-10 w-full h-1 rounded-full bg-white/15 mt-3.5 overflow-hidden">
                <div className="h-full bg-white/90 rounded-full w-2/3 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Card 02 — MeitY Certification */}
            <div className="relative overflow-hidden rounded-[20px] p-4 sm:p-4.5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white/90">
                  Step 02
                </span>
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                MeitY Certification
              </div>
              <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                Complete Telecentre Entrepreneur Course (TEC) with dedicated district onboarding.
              </div>

              {/* Sub-Card Metric Slider Hairline in Clean White */}
              <div className="relative z-10 w-full h-1 rounded-full bg-white/15 mt-3.5 overflow-hidden">
                <div className="h-full bg-white/90 rounded-full w-4/5 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Card 03 — Unified Digital Wallet */}
            <div className="relative overflow-hidden rounded-[20px] p-4 sm:p-4.5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white/90">
                  Step 03
                </span>
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                Unified Digital Wallet
              </div>
              <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                Instant commission payouts and real-time reconciliation across 400+ desks.
              </div>

              {/* Sub-Card Metric Slider Hairline in Clean White */}
              <div className="relative z-10 w-full h-1 rounded-full bg-white/15 mt-3.5 overflow-hidden">
                <div className="h-full bg-white/90 rounded-full w-full" />
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Start VLE Registration</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.06] hover:from-white/[0.24] hover:to-white/[0.1] backdrop-blur-2xl border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:border-white/35 hover:scale-105 cursor-pointer shadow-xs"
            >
              <span>VLE Portal Login</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </button>
          </div>

          {/* Direct Support Assistance */}
          <div className="inline-flex items-center gap-2 text-[11.5px] text-white/70">
            <span>Need assistance with VLE registration?</span>
            <span className="text-white font-medium">
              Call Toll-Free Helpdesk: <span className="text-[#ff7733] font-bold">14599</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* ====================================================================
          J. FOOTER (PROPOSAL SECTION 12)
          Headline: Explore More. Stay Informed. Stay Connected.
          ==================================================================== */}
      <footer className="relative bg-[#071120] text-[#9cb1d4] py-16 px-5 sm:px-8 text-xs border-t border-white/10 overflow-hidden">
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] object-contain absolute -bottom-52 left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto">
          {/* Quick Newsletter Subscribe Bar in Footer */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5 text-left w-full lg:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/20 text-[#ff7733] border border-[#ff5500]/30 grid place-items-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  Subscribe to Scheme & Circular Alerts
                </div>
                <div className="text-xs text-[#9cb1d4]">
                  Official MeitY notifications, new welfare launches, and VLE commission updates.
                </div>
              </div>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center gap-2 w-full lg:w-auto shrink-0"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full sm:w-64 px-3.5 py-2 rounded-xl bg-white/[0.08] focus:bg-white/[0.14] border border-white/15 focus:border-white/15 outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-white text-xs placeholder:text-slate-400 transition-all"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs transition-all shadow-xs active:scale-95 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 mb-10 border-b border-white/10">
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff5500] text-white grid place-items-center font-bold text-[10px]">
                  CSC
                </div>
                <span className="font-semibold text-sm text-white">
                  Digital Seva Portal
                </span>
              </div>
              <h4 className="font-semibold text-white text-[13px] mb-1.5">
                Explore More. Stay Informed. Stay Connected.
              </h4>
              <p className="text-[#9cb1d4] leading-relaxed mb-3">
                CSC e-Governance Services India Limited · Ministry of Electronics & Information Technology (MeitY).
              </p>
              <div className="font-mono-code text-[#ff7733] font-semibold">
                Helpline: 14599
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">About CSC</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#ff5500]">Platform Overview</a></li>
                <li><a href="#how-it-works" className="hover:text-[#ff5500]">How Digital Seva Works</a></li>
                <li><a href="#whats-new" className="hover:text-[#ff5500]">Network Announcements</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Digital Seva Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-[#ff5500]">G2C Services</a></li>
                <li><a href="#services" className="hover:text-[#ff5500]">B2C Services</a></li>
                <li><a href="#services" className="hover:text-[#ff5500]">e-District & Certificates</a></li>
                <li><a href="#services" className="hover:text-[#ff5500]">Banking & Utilities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">VLE Resources</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setLoginOpen(true)}
                    className="hover:text-[#ff5500] cursor-pointer"
                  >
                    VLE Portal Login
                  </button>
                </li>
                <li><a href="#for-vles" className="hover:text-[#ff5500]">VLE Success Stories</a></li>
                <li><a href="#get-started" className="hover:text-[#ff5500]">Become a VLE</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#support" className="hover:text-[#ff5500]">Helpline 14599</a></li>
                <li><a href="#support" className="hover:text-[#ff5500]">Security & Fraud Guide</a></li>
                <li><a href="#support" className="hover:text-[#ff5500]">Grievance Redressal</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#7c93b8]">
            <span>
              © 2026 CSC e-Governance Services India Limited. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a href="#support" className="hover:text-[#ff5500]">Privacy Policy</a>
              <a href="#support" className="hover:text-[#ff5500]">Terms & Conditions</a>
              <a href="#support" className="hover:text-[#ff5500]">Official CSC Portal</a>
            </div>
          </div>
        </div>
      </footer>

      {/* VLE Login Modal in Deep Navy & Saffron Orange */}
      <AnimatePresence>
        {loginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLoginOpen(false)}
            className="fixed inset-0 bg-[#071120]/80 backdrop-blur-md z-50 grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#0c1c38] to-[#071328] text-white w-full max-w-md rounded-2xl p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative border border-white/20 overflow-hidden"
            >
              <img
                src="/images/mandala-card-01.png"
                alt=""
                aria-hidden="true"
                className="w-48 h-48 object-contain absolute -top-16 -right-16 opacity-[0.1] pointer-events-none select-none"
              />

              <button
                onClick={() => setLoginOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/[0.12] hover:bg-[#ff5500] text-white border border-white/20 grid place-items-center cursor-pointer z-10 transition-colors shadow-sm"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-wider text-[#ff7733] mb-2">
                  <LotusBadge className="w-4 h-4" />
                  <span>DIGITAL SEVA CONNECT</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-1.5 text-white">
                  VLE Operator Sign In
                </h3>
                <p className="text-xs text-[#9cb1d4] mb-6">
                  Enter your 12-digit CSC ID and password to launch the Digital Seva counter terminal.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setLoginOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-[#c5d4eb] mb-1">
                      CSC ID / Username
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="12-digit CSC ID"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 text-white text-sm outline-none focus:border-[#ff5500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#c5d4eb] mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 text-white text-sm outline-none focus:border-[#ff5500]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold cursor-pointer transition-colors shadow-lg"
                  >
                    Login to Digital Seva
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* Find Nearest CSC Centre Modal */}
        {locatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLocatorOpen(false)}
            className="fixed inset-0 bg-[#0a1628]/75 backdrop-blur-md z-50 grid place-items-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#0c1c38] to-[#071328] text-white w-full max-w-2xl rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative border border-white/20 overflow-hidden my-8 max-h-[88vh] flex flex-col"
            >
              {/* Corner Watermark Mandala */}
              <img
                src="/images/mandala-card-01.png"
                alt=""
                aria-hidden="true"
                className="w-56 h-56 object-contain absolute -top-20 -right-20 opacity-[0.08] pointer-events-none select-none"
              />

              {/* Close Button */}
              <button
                onClick={() => setLocatorOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/[0.12] hover:bg-[#ff5500] text-white border border-white/20 grid place-items-center cursor-pointer z-10 transition-colors shadow-sm"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 mb-5">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#ff7733] mb-1.5">
                  <LotusBadge className="w-4 h-4" />
                  <span>NATIONWIDE CSC KENDRA LOCATOR</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5">
                  Find Your Nearest CSC Centre
                </h3>
                <p className="text-xs sm:text-[13px] text-[#9cb1d4] leading-relaxed">
                  Locate government-authorized Common Service Centres and verified VLE desks in your Gram Panchayat or neighborhood ward.
                </p>
              </div>

              {/* Search Bar + Quick Pincode Filter */}
              <div className="relative z-10 mb-4 space-y-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#ff5500] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={locatorQuery}
                    onChange={(e) => setLocatorQuery(e.target.value)}
                    placeholder="Enter 6-digit PIN code (e.g., 503185, 226001) or village / district..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#071120] border border-white/20 text-white text-xs sm:text-sm outline-none focus:border-[#ff5500] transition-colors placeholder:text-white/40"
                  />
                  {locatorQuery && (
                    <button
                      onClick={() => setLocatorQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick Selection Pills */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-white/50 text-[11px]">Popular:</span>
                  {[
                    { label: '503185 (Bodhan)', q: '503185' },
                    { label: '226001 (Lucknow)', q: '226001' },
                    { label: '380001 (Ahmedabad)', q: '380001' },
                  ].map((p) => (
                    <button
                      key={p.q}
                      onClick={() => setLocatorQuery(p.q)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer border ${
                        locatorQuery === p.q
                          ? 'bg-[#ff5500] text-white border-[#ff5500]'
                          : 'bg-white/[0.06] text-white/75 border-white/15 hover:bg-white/[0.12] hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                  {locatorQuery && (
                    <button
                      onClick={() => setLocatorQuery('')}
                      className="text-[11px] text-[#ff7733] hover:underline cursor-pointer ml-1"
                    >
                      Show All
                    </button>
                  )}
                </div>
              </div>

              {/* Centre Results List */}
              <div className="relative z-10 flex-1 overflow-y-auto space-y-3 pr-1 max-h-[380px]">
                {SAMPLE_CENTRES.filter((c) => {
                  const q = locatorQuery.trim().toLowerCase();
                  if (!q) return true;
                  return (
                    c.name.toLowerCase().includes(q) ||
                    c.vle.toLowerCase().includes(q) ||
                    c.pincode.includes(q) ||
                    c.address.toLowerCase().includes(q) ||
                    c.services.some((s) => s.toLowerCase().includes(q))
                  );
                }).map((centre) => (
                  <div
                    key={centre.id}
                    className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 hover:border-white/25 transition-all text-left space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-[15px] font-bold text-white">
                            {centre.name}
                          </h4>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>MeitY Verified</span>
                          </span>
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          Operator: <span className="text-white/90 font-medium">{centre.vle}</span> · CSC ID: <span className="font-mono text-white/80">{centre.vleId}</span>
                        </div>
                      </div>

                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#38bdf8] text-[11px] font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{centre.distance}</span>
                      </span>
                    </div>

                    <p className="text-xs text-white/75 leading-relaxed flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ff7733] shrink-0 mt-0.5" />
                      <span>{centre.address} — PIN: <strong className="text-white">{centre.pincode}</strong></span>
                    </p>

                    {/* Services Offered Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {centre.services.map((svc) => (
                        <span
                          key={svc}
                          className="px-2 py-0.5 rounded bg-white/[0.08] text-[10.5px] text-white/80 font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                      <span className="text-white/60 text-[11px]">
                        Timing: <strong className="text-white/90">{centre.timing}</strong>
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${centre.phone}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3 h-3 text-[#ff7733]" />
                          <span>Call VLE</span>
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.name + ' ' + centre.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors shadow-xs"
                        >
                          <span>Directions</span>
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom National Directory Notice */}
              <div className="relative z-10 pt-3 mt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
                <span>Looking for all 5,50,000+ pan-India centres?</span>
                <a
                  href="https://locator.csccloud.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ff7733] hover:text-[#ff9966] font-semibold transition-colors"
                >
                  <span>Open Official CSC Cloud Locator</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
