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
          className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
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
          className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
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
        className="relative z-10 w-[240px] h-[240px] -mt-2 object-contain pointer-events-none select-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
      />

      <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
    </div>
  );
}

// ============================================================================
// AUTHENTIC EDITORIAL GRAPHIC HEADERS FOR NEWS & UPDATES (MATCHING IMAGE 2)
// Card 01: Mint background with WhatsApp scam warning & clean smartphone graphic
// Card 02: Sky-blue background with AI Olympiad 6.0 badge & academic credentials
// Card 03: Deep purple background with Tax2Win ITR Super Dhamaka & Tata Punch
// ============================================================================
function NewsVectorSecurity() {
  return (
    <div className="relative w-full h-full bg-[#eefbf4] overflow-hidden p-4 sm:p-5 flex flex-col justify-between border-b border-emerald-100 select-none">
      {/* Top Badges */}
      <div className="flex items-center justify-between w-full">
        <span className="px-2.5 py-0.5 rounded-md bg-[#10b981] text-white text-[11px] font-bold tracking-wide shadow-xs">
          News
        </span>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/90 border border-emerald-200/60 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
          <span className="text-[11px] font-bold text-slate-800 tracking-wider">CSC</span>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="flex items-center justify-between gap-2.5 mt-1">
        <div className="flex-1 min-w-0 pr-1">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ef4444] text-white text-[9.5px] font-black tracking-wider uppercase mb-1.5">
            VLES BEWARE !
          </div>
          <p className="text-[11px] sm:text-[11.5px] text-slate-800 leading-tight font-medium">
            Scammers are making <span className="font-bold text-slate-900">Fake WhatsApp Channels</span> pretending to be CSC officials...
          </p>
          <div className="mt-2 space-y-0.5 text-[10px] font-semibold text-[#dc2626]">
            <div className="flex items-center gap-1">
              <span className="font-bold">✕</span>
              <span>Don't download any APK App</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">✕</span>
              <span>Don't transfer money for CSC ID</span>
            </div>
          </div>
        </div>

        {/* Crisp Smartphone Graphic */}
        <div className="w-[66px] sm:w-[74px] h-[98px] sm:h-[104px] bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm p-1.5 flex flex-col justify-between items-center relative shrink-0">
          <div className="w-6 h-1 rounded-full bg-slate-200" />

          {/* Alert Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ef4444] text-white text-[9px] font-black grid place-items-center shadow-xs">
            !
          </div>

          <div className="text-center my-auto">
            <div className="text-[11px] font-black text-emerald-600 tracking-tight leading-none mb-1">
              CSC
            </div>
            <div className="px-1.5 py-0.5 rounded bg-red-50 border border-red-200 text-[7.5px] font-bold text-red-600 tracking-wider">
              BEWARE
            </div>
          </div>

          <div className="w-3.5 h-1 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

function NewsVectorAcademy() {
  return (
    <div className="relative w-full h-full bg-[#f0f7ff] overflow-hidden p-4 sm:p-5 flex flex-col justify-between border-b border-blue-100 select-none">
      {/* Top Badges */}
      <div className="flex items-center justify-between w-full">
        <span className="px-2.5 py-0.5 rounded-md bg-[#ef4444] text-white text-[11px] font-bold tracking-wide shadow-xs">
          News
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-white border border-sky-200/80 text-[#0284c7] text-[10.5px] font-bold tracking-wider shadow-xs">
          CSC ACADEMY
        </span>
      </div>

      {/* Main Content Row */}
      <div className="flex items-center justify-between gap-2.5 mt-1">
        <div className="flex-1 min-w-0 pr-1">
          <div className="text-[12px] sm:text-[12.5px] font-bold text-[#0284c7] leading-tight mb-1.5">
            Smarter Testing with AI Integration!
          </div>
          <div className="bg-white/95 border border-blue-100 rounded-lg p-2 text-[10px] text-slate-700 leading-snug mb-1 shadow-2xs">
            CSC Olympiad 6.0 brings AI-driven performance tracking to help students analyze & improve!
          </div>
          <p className="text-[9.5px] text-slate-500 font-medium">
            Mock tests, topic-wise quizzes & instant feedback!
          </p>
        </div>

        {/* Olympiad 6.0 Badge Frame */}
        <div className="w-[66px] sm:w-[74px] h-[98px] sm:h-[104px] bg-gradient-to-b from-[#38bdf8] to-[#0284c7] text-white rounded-2xl shadow-sm p-2 flex flex-col justify-between items-center relative shrink-0 text-center">
          <div className="text-[8.5px] font-semibold text-yellow-200 flex items-center justify-center gap-0.5">
            <span>💡</span>
            <span className="font-mono">E=mc²</span>
          </div>

          <div className="my-auto">
            <div className="text-[10px] font-extrabold uppercase tracking-tight leading-tight">
              Olympiad
            </div>
            <div className="text-[13px] font-black leading-none mt-0.5">
              6.0
            </div>
          </div>

          <div className="text-[7.5px] font-bold text-white bg-white/20 backdrop-blur-xs px-1.5 py-0.5 rounded-full w-full">
            Grades 3–12
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsVectorCommunity() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#120524] via-[#26094a] to-[#120524] overflow-hidden p-4 sm:p-5 flex flex-col justify-between border-b border-purple-900/40 text-white select-none">
      {/* Top Badges */}
      <div className="flex items-center justify-between w-full">
        <span className="px-2.5 py-0.5 rounded-md bg-[#10b981] text-white text-[11px] font-bold tracking-wide shadow-xs">
          News
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-white/90 text-[10.5px] font-bold tracking-wide">
          Tax2win · CSC
        </span>
      </div>

      {/* Main Content Row */}
      <div className="flex items-center justify-between gap-3 mt-1">
        {/* VLE ITR Gold Badge */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-14 h-14 rounded-full border-2 border-amber-400 bg-gradient-to-b from-amber-500/20 to-amber-900/30 p-1 flex flex-col items-center justify-center text-center shadow-[0_0_12px_rgba(251,191,36,0.35)]">
            <div className="text-[6.5px] font-black text-amber-300 leading-none tracking-tight uppercase">
              VLE ITR
            </div>
            <div className="text-[8px] font-black text-amber-400 leading-tight">
              SUPER
            </div>
            <div className="text-[6.5px] font-black text-amber-300 leading-none tracking-tight">
              DHAMAKA
            </div>
          </div>
          <div className="mt-1 px-1.5 py-0.5 rounded bg-black/40 border border-amber-400/30 text-[8px] font-bold text-amber-200">
            5000 ITR+GST
          </div>
        </div>

        {/* Tata Punch Grand Offer Card */}
        <div className="flex-1 bg-gradient-to-r from-blue-600/70 to-indigo-600/70 border border-blue-400/40 rounded-xl p-2.5 text-center shadow-md">
          <div className="text-[9.5px] font-bold text-blue-200 flex items-center justify-center gap-1">
            <span>🚗</span>
            <span>Tata Punch</span>
          </div>
          <div className="text-[11px] font-black text-white leading-tight mt-0.5">
            Grand VLE Offer
          </div>
          <div className="text-[7.5px] text-blue-100/80 mt-1">
            Validity: 1st April - 31st July 2025
          </div>
        </div>
      </div>
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

  // G. News & Updates 3-Card Modern Vector Grid state
  const [selectedStory, setSelectedStory] = useState(null);

  const NEWS_CARDS = [
    {
      id: 'news-01',
      tag: 'News',
      brandBadge: 'CSC',
      title: 'VLEs Beware of Scammers',
      description:
        'Scammers are making Fake WhatsApp Channels pretending to be CSC officials...',
      date: 'Oct 15 2025',
      vector: 'security',
      isFeatured: false,
      fullStory:
        'Official Security Circular for all Village Level Entrepreneurs:\n\nIt has come to our attention that fraudulent entities are creating unauthorized WhatsApp groups, Telegram channels, and fake websites pretending to represent CSC e-Governance district managers.\n\nKey Safety Guidelines:\n1. Never download any third-party APK application sent via WhatsApp or SMS. All verified tools are available only on the official Digital Seva Portal.\n2. Never send registration fees or security deposits to personal UPI IDs or bank accounts. CSC ID generation involves no unauthorized fees.\n3. Verify all district manager contact information directly through your state nodal coordinator.',
    },
    {
      id: 'news-02',
      tag: 'News',
      brandBadge: 'CSC ACADEMY',
      title: 'CSC Olympiad 6.0 is Here',
      description: 'Smarter Testing with AI Integration!',
      date: 'Oct 13 2025',
      vector: 'academy',
      isFeatured: true,
      fullStory:
        'CSC Academy is thrilled to announce the nationwide launch of CSC Olympiad 6.0 across all gram panchayats.\n\nThis year’s edition introduces adaptive artificial intelligence learning modules that tailor question difficulty based on student responses in mathematics, science, and digital literacy.\n\nOver 1.2 million rural school students across Grades 3 to 12 can now access simulated practice examinations and personalized performance roadmaps directly from their neighborhood Digital Seva Kendra.',
    },
    {
      id: 'news-03',
      tag: 'News',
      brandBadge: 'Tax2win · CSC',
      title: 'Empowering Communities in Need',
      description:
        'Mahesh Kumar , a dedicated Village Level Entrepreneur (VLE). Read More',
      date: 'Oct 13 2025',
      vector: 'community',
      isFeatured: false,
      fullStory:
        'A comprehensive impact evaluation highlights the extraordinary frontline contributions of Village Level Entrepreneurs during the festive welfare disbursement cycle.\n\nOperating Micro-ATMs, AePS biometric scanners, and DigiPay terminals, VLEs delivered doorstep banking assistance to over 14 million rural beneficiaries — specifically elderly citizens, widows, and MGNREGA workers who previously faced arduous journeys to district branch counters.\n\nTotal social welfare disbursements processed through the network surpassed ₹1,200 Crores this quarter.',
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

  const SERVICES_PER_PAGE = 8;
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
              ? 'bg-[#0a1628]/92 backdrop-blur-xl border border-white/12 shadow-[0_16px_40px_-12px_rgba(7,17,32,0.55)]'
              : 'bg-[#0a1628]/65 backdrop-blur-md border border-white/15'
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
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-14 sm:pb-16 bg-[#0a1628] text-white overflow-hidden border-b border-white/10"
      >
        {/* Subtle Background Traditional Mandala Art */}
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[920px] h-[920px] object-contain absolute -top-44 left-1/2 -translate-x-1/2 opacity-[0.035] pointer-events-none select-none"
        />

        <div className="absolute inset-0 grain-surface pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          {/* Centered Editorial Header Stage */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Government Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/12 text-white/90 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              <span>MINISTRY OF ELECTRONICS & IT · DIGITAL INDIA NETWORK</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] text-white leading-[1.08] mb-5">
              Bringing Essential Services Closer to Every Indian.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#b4c6e4] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
              India's unified assisted public service network — connecting citizens across 28 states to 400+ authorized government, banking, healthcare, and utility desks through neighborhood Village Level Entrepreneurs.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                <span>Become a VLE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#38bdf8]" />
                <span>Explore 400+ Services</span>
              </a>
            </div>

            {/* Functional Service Finder & Popular Pills */}
            <div className="max-w-2xl mx-auto mb-14">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-white/40 absolute left-4.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search public services: Aadhaar, DigiPay, PM-Kisan, Land Records, Electricity..."
                  className="w-full pl-11 pr-24 py-3 rounded-full bg-white/[0.07] hover:bg-white/[0.1] focus:bg-[#071120] border border-white/15 focus:border-[#ff5500] text-xs sm:text-sm text-white placeholder-white/40 outline-none transition-all shadow-inner"
                />
                <a
                  href="#services"
                  className="absolute right-1.5 px-4 py-1.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Search
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-white/60">
                <span className="text-white/40 font-medium">Frequent:</span>
                {['DigiLocker Records', 'Aadhaar e-KYC', 'Micro-ATM Cash', 'PM-Kisan', 'Electricity Bill'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      setSearchQuery(chip);
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-2.5 py-0.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] hover:text-white border border-white/10 transition-colors cursor-pointer text-[11px]"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Authoritative Typographic Scale Strip (No AI Bento Cards) */}
          <div className="border-t border-white/10 pt-8 sm:pt-10">
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
        {/* Subtle Grand Mandala Background Art (Greyish on Cream) */}
        <img
          src="/images/mandala-grand-navy.png"
          alt=""
          aria-hidden="true"
          className="w-[780px] h-[780px] object-contain absolute -top-48 left-1/2 -translate-x-1/2 opacity-[0.04] grayscale pointer-events-none select-none"
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
              {/* Corner Traditional Mandala Art Watermark */}
              <img
                src="/images/mandala-grand-white.png"
                alt=""
                aria-hidden="true"
                className="w-[320px] h-[320px] object-contain absolute -bottom-24 -right-24 opacity-[0.06] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
              />

              <div className="relative z-10">
                {/* Top Bar: Pill Badge & Counter */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white text-[11px] font-semibold tracking-wider uppercase">
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
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs sm:text-[13.5px] tracking-wide cursor-pointer transition-all shadow-[0_10px_25px_-5px_rgba(255,85,0,0.35)] hover:shadow-lg group/btn"
                >
                  <span>Explore What It Means to Be a CSC VLE</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 05B — For Citizens */}
            <div className="relative rounded-[28px] bg-[#07132b] text-white border border-white/12 p-8 sm:p-9 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(7,17,32,0.35)] hover:border-[#0284c7]/40 transition-all duration-300 overflow-hidden group">
              {/* Corner Traditional Mandala Art Watermark */}
              <img
                src="/images/mandala-card-02.png"
                alt=""
                aria-hidden="true"
                className="w-[320px] h-[320px] object-contain absolute -bottom-24 -right-24 opacity-[0.06] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
              />

              <div className="relative z-10">
                {/* Top Bar: Pill Badge & Counter */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-white text-[11px] font-semibold tracking-wider uppercase">
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
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-xs sm:text-[13.5px] tracking-wide cursor-pointer transition-all shadow-[0_10px_25px_-5px_rgba(2,132,199,0.35)] hover:shadow-lg group/btn"
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
        className="relative min-h-screen lg:h-screen flex flex-col justify-center px-5 sm:px-8 bg-[#fffaf5] border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 pt-24 lg:pt-20 pb-6 lg:pb-8"
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
                        className="relative group h-[145px] sm:h-[155px] lg:h-[160px] border-r border-b border-[#0a1628]/15 p-4 sm:p-5 bg-white hover:bg-[#0a1628] transition-colors duration-300 select-none overflow-hidden"
                      >
                        {/* DEFAULT VIEW: Detailed SVG Vector Logo + Centered Title Below (Removed on Hover) */}
                        <div className="h-full flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                          <div className="scale-90">
                            <ServiceVectorLogo id={srv.id} />
                          </div>

                          <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.015em] text-[#0a1628] leading-tight">
                            {srv.name}
                          </h3>
                        </div>

                        {/* HOVER VIEW: Description Only (Replaces Logo & Title on Hover) */}
                        <div className="absolute inset-0 p-5 flex items-center justify-center text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                          <p className="text-[12.5px] sm:text-[13px] text-white/95 leading-[1.55]">
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
                  aria-label="Show previous 8 services"
                  title="Previous 8 services"
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
                    aria-label="Show next 8 services"
                    title="Next 8 services"
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
        className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-8 bg-[#fffaf5] text-[#0a1628] border-b border-[#0a1628]/10 overflow-hidden scroll-mt-24"
      >
        {/* Subtle Mandala Watermark (Greyish on Cream) */}
        <img
          src="/images/mandala-grand-navy.png"
          alt=""
          aria-hidden="true"
          className="w-[600px] h-[600px] object-contain absolute -top-36 -right-36 opacity-[0.04] grayscale pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          {/* Centered Heading */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.15]">
              News and <span className="text-[#ff5500]">Updates</span>
            </h2>
            <p className="text-xs sm:text-[14px] text-[#64748b] mt-2.5 max-w-lg mx-auto leading-relaxed">
              Official circulars, skill initiatives, and grassroots breakthroughs across 5,50,000+ gram panchayats.
            </p>
          </div>

          {/* 3 Modern Clean Cards with Bespoke Vector Artwork matching Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {NEWS_CARDS.map((card) => {
              const isOlympiad = card.id === 'news-02';
              return (
                <article
                  key={card.id}
                  onClick={() => setSelectedStory(card)}
                  className="bg-white rounded-[22px] border border-[#0a1628]/10 shadow-[0_8px_25px_-8px_rgba(10,22,40,0.08)] overflow-hidden flex flex-col justify-between hover:shadow-[0_18px_40px_-10px_rgba(10,22,40,0.14)] hover:border-[#ff5500]/30 transition-all duration-300 group cursor-pointer"
                >
                  {/* Top Vector Artwork Frame */}
                  <div className="relative h-[180px] sm:h-[190px] w-full overflow-hidden">
                    {card.vector === 'security' && <NewsVectorSecurity />}
                    {card.vector === 'academy' && <NewsVectorAcademy />}
                    {card.vector === 'community' && <NewsVectorCommunity />}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-lg sm:text-[19px] font-bold leading-snug mb-2 transition-colors ${
                          isOlympiad
                            ? 'text-[#ff5500]'
                            : 'text-[#0a1628] group-hover:text-[#ff5500]'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed mb-5 line-clamp-3">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Meta & Action */}
                    <div className="pt-3.5 border-t border-[#0a1628]/8 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-[#64748b] font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#64748b]" />
                        <span>{card.date}</span>
                      </div>

                      {isOlympiad ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStory(card);
                          }}
                          className="px-4 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                        >
                          <span>View Detail</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStory(card);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold flex items-center gap-1 border border-slate-200/80 transition-colors cursor-pointer"
                        >
                          <span>View Detail</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom 'View All' Orange Button matching Image 2 */}
          <div className="flex justify-end mt-8 sm:mt-10">
            <button
              onClick={() => setSelectedStory(NEWS_CARDS[0])}
              className="px-7 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <span>View All</span>
            </button>
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
            className="fixed inset-0 bg-[#0a1628]/60 backdrop-blur-sm z-50 grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-[#0a1628] w-full max-w-lg rounded-3xl p-7 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden"
            >
              {/* Corner Mandala Watermark (Greyish on Cream) */}
              <img
                src="/images/mandala-floral-navy.png"
                alt=""
                aria-hidden="true"
                className="w-64 h-64 object-contain absolute -bottom-20 -right-20 opacity-[0.05] grayscale pointer-events-none select-none"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-[#ff5500] hover:text-white text-[#0a1628] grid place-items-center cursor-pointer z-10 transition-colors"
                aria-label="Close story"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10">
                {/* Meta Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold border bg-[#fff1eb] text-[#c2410c] border-[#ffedd5]">
                    {selectedStory.brandBadge || 'Official Announcement'}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">
                    {selectedStory.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a1628] mb-3 leading-snug">
                  {selectedStory.title}
                </h3>

                <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3 mb-6 whitespace-pre-line border-t border-slate-100 pt-4">
                  {selectedStory.fullStory}
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                  >
                    Close
                  </button>
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
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium shrink-0">
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
          Zero Citizen Split · 100% Dedicated to Village Level Entrepreneurs
          ==================================================================== */}
      <section
        id="get-started"
        className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-center px-5 sm:px-8 bg-gradient-to-b from-[#0a1628] to-[#071120] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-20 lg:py-24"
      >
        {/* Subtle Background Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #ff5500 0%, #1d4ed8 50%, transparent 80%)',
          }}
        />

        {/* Ambient Corner Radial Glows for Art Graphics */}
        <div
          className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff5500 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff5500 0%, transparent 70%)' }}
        />

        {/* BOTTOM-LEFT CORNER ART GRAPHIC */}
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] object-contain absolute -bottom-32 sm:-bottom-40 -left-32 sm:-left-40 opacity-[0.14] pointer-events-none select-none drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]"
        />

        {/* BOTTOM-RIGHT CORNER ART GRAPHIC */}
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] object-contain absolute -bottom-32 sm:-bottom-40 -right-32 sm:-right-40 opacity-[0.14] pointer-events-none select-none drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]"
        />

        <div className="absolute inset-0 grain-surface pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1040px] mx-auto w-full text-center">
          {/* Government / VLE Credential Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span>JOIN 5,50,000+ VILLAGE LEVEL ENTREPRENEURS</span>
          </div>

          {/* Display Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-[-0.035em] leading-[1.12] mb-5 max-w-3xl mx-auto">
            Ready to Bring Digital Services to Your Community?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#b4c6e4] max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
            Establish a government-authorized Common Service Centre in your gram panchayat. Deliver 400+ essential banking, welfare, and public desks while building a respected neighborhood enterprise.
          </p>

          {/* 3 Clean Key Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/25 flex items-center justify-center mb-2.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-[13.5px] font-bold text-white mb-1">Simple Eligibility</div>
              <div className="text-xs text-[#9cb1d4] leading-relaxed">
                Age 18+ with minimum 10th pass qualification and local panchayat residency.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/25 flex items-center justify-center mb-2.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-[13.5px] font-bold text-white mb-1">MeitY Certification</div>
              <div className="text-xs text-[#9cb1d4] leading-relaxed">
                Complete Telecentre Entrepreneur Course (TEC) with dedicated district onboarding.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/25 flex items-center justify-center mb-2.5">
                <Wallet className="w-4 h-4" />
              </div>
              <div className="text-[13.5px] font-bold text-white mb-1">Unified Digital Wallet</div>
              <div className="text-xs text-[#9cb1d4] leading-relaxed">
                Instant commission payouts and real-time reconciliation across 400+ desks.
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-7">
            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-sm transition-all shadow-[0_10px_25px_-5px_rgba(255,85,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start VLE Registration</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>VLE Portal Login</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </button>
          </div>

          {/* Direct Support Assistance */}
          <div className="inline-flex items-center gap-2 text-xs text-white/60">
            <span>Need assistance with VLE registration?</span>
            <span className="text-white font-medium">
              Call Toll-Free Helpdesk: <span className="text-[#ff7733] font-bold">14599</span>
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          J. FOOTER (PROPOSAL SECTION 12)
          Headline: Explore More. Stay Informed. Stay Connected.
          ==================================================================== */}
      <footer className="relative bg-[#071120] text-[#9cb1d4] py-16 px-5 sm:px-8 text-xs border-t-4 border-[#ff5500] overflow-hidden">
        <img
          src="/images/mandala-grand-white.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] object-contain absolute -bottom-52 left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto">
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
            className="fixed inset-0 bg-[#071120]/75 backdrop-blur-xs z-50 grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a1628] text-white w-full max-w-md rounded-2xl p-7 shadow-2xl relative border border-[#ff5500]/50 overflow-hidden"
            >
              <img
                src="/images/mandala-card-01.png"
                alt=""
                aria-hidden="true"
                className="w-48 h-48 object-contain absolute -top-16 -right-16 opacity-[0.1] pointer-events-none select-none"
              />

              <button
                onClick={() => setLoginOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/10 hover:bg-[#ff5500] text-white grid place-items-center cursor-pointer z-10 transition-colors"
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
      </AnimatePresence>
    </div>
  );
}
