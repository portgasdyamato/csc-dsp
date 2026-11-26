import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
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
  Calculator,
  Laptop,
  Fingerprint,
  Printer,
  Wifi,
  Headphones,
  BookOpen,
  UserCheck,
} from './components/SolidIcons';

import ServiceVectorLogo from './components/ServiceVectorLogo';
import MultiLayerMandala from './components/MultiLayerMandala';
import VillageServicesSlideshow from './components/VillageServicesSlideshow';
import ImpactScaleSection from './components/ImpactScaleSection';
import SarthiChatbot from './components/SarthiChatbot';
import AppDownloadSection from './components/AppDownloadSection';
import VleEarningCalculatorModal from './components/VleEarningCalculatorModal';
import WhyVleBentoSection from './components/WhyVleBentoSection';
import VleSupportAndHardwareSection from './components/VleSupportAndHardwareSection';
import SupportHubSection from './components/SupportHubSection';
import CscOfficialLogo from './components/CscLogo';
import {
  CardArt01Boss,
  CardArt02Income,
  CardArt03Respect,
  CardArt04Govt,
  CardArt05Franchise,
  CardArt06Impact,
  PillarArt01Enterprise,
  PillarArt02Income,
  PillarArt03Community,
  PillarArt04Government,
} from './components/VleCardArt';

import {
  VLE_JOURNEY_STAGES,
  CITIZEN_NEEDS,
  PLATFORM_CARDS,
  SERVICE_DIRECTORY,
  VLE_OPPORTUNITY_PILLARS,
  VLE_DAY_TIMELINE,
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
// BALANCED INDIAN SACRED GEOMETRY ART FOR WHY-VLE CARDS
// Golden-ratio geometric motifs: Refined, elegant, cohesive, neither crowded nor crude
// ============================================================================
function CardVisualStage({ variant, isHovered }) {
  if (variant === 'cobalt') {
    // Card 01: "Be Your Own Boss" — Intricate Ink Lotus Mandala with Fine Diagonal Hatching
    return (
      <div className="relative w-full h-full bg-[#071120] overflow-hidden flex items-start justify-center pt-2">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[350px] h-[250px] rounded-full opacity-90 blur-2xl pointer-events-none transition-transform duration-700"
          style={{
            background:
              'radial-gradient(circle, #1d4ed8 0%, #0a1628 58%, #ff5500 98%)',
            transform: isHovered ? 'scale(1.14)' : 'scale(1)',
          }}
        />

        <motion.div
          animate={{
            rotate: isHovered ? 4 : 0,
            scale: isHovered ? 1.04 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[185px] h-[185px] mt-1 pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]"
        >
          <CardArt01Boss className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  if (variant === 'chromatic') {
    // Card 02: "Earn Every Single Day" — Banknote Guilloche Moiré Rosette
    return (
      <div className="relative w-full h-full bg-[#0a1628] overflow-hidden flex items-start justify-center pt-2">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 34%, #ff5500 0%, #c2410c 48%, #0a1628 90%)',
          }}
        />

        <motion.div
          animate={{
            rotate: isHovered ? -4 : 0,
            scale: isHovered ? 1.04 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[185px] h-[185px] mt-1 pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.2)]"
        >
          <CardArt02Income className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  if (variant === 'sapphire') {
    // Card 03: "Deep Community Trust & Respect" — 12-Ray Surya Starburst & Sacred Kolam
    return (
      <div className="relative w-full h-full bg-[#061224] overflow-hidden flex items-start justify-center pt-2">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[240px] rounded-full opacity-90 blur-2xl pointer-events-none transition-transform duration-700"
          style={{
            background:
              'radial-gradient(circle, #0284c7 0%, #0369a1 45%, #061224 88%)',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />

        <motion.div
          animate={{
            rotate: isHovered ? 4 : 0,
            scale: isHovered ? 1.04 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[185px] h-[185px] mt-1 pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]"
        >
          <CardArt03Respect className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  if (variant === 'obsidian') {
    // Card 04: "Official Government Backing" — 24-Spoke Ashoka & Guilloche Sovereign Emblem
    return (
      <div className="relative w-full h-full bg-[#071120] overflow-hidden flex items-start justify-center pt-2">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[240px] rounded-full opacity-90 blur-2xl pointer-events-none transition-transform duration-700"
          style={{
            background:
              'radial-gradient(circle, #6366f1 0%, #1e3a8a 50%, #071120 88%)',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />

        <motion.div
          animate={{
            rotate: isHovered ? -4 : 0,
            scale: isHovered ? 1.04 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[185px] h-[185px] mt-1 pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]"
        >
          <CardArt04Govt className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  if (variant === 'emerald') {
    // Card 05: "Zero Franchise Fee & Royalties" — Lakshmi Padma & Faceted Diamond Rosette
    return (
      <div className="relative w-full h-full bg-[#0a1628] overflow-hidden flex items-start justify-center pt-2">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 34%, #059669 0%, #047857 44%, #0a1628 90%)',
          }}
        />

        <motion.div
          animate={{
            rotate: isHovered ? 4 : 0,
            scale: isHovered ? 1.05 : 0.96,
          }}
          transition={{ type: 'spring', stiffness: 110, damping: 22 }}
          className="relative z-10 w-[215px] h-[215px] pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.22)]"
        >
          <CardArt05Franchise className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 grain-surface pointer-events-none z-20" />
      </div>
    );
  }

  // Card 06: "Digital Empowerment & Social Impact" — Interconnected Digital Bharat Network Mandala
  return (
    <div className="relative w-full h-full bg-[#061224] overflow-hidden flex items-start justify-center pt-2">
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[240px] rounded-full opacity-90 blur-2xl pointer-events-none transition-transform duration-700"
        style={{
          background:
            'radial-gradient(circle, #0284c7 0%, #0f766e 48%, #061224 88%)',
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
      />

      <motion.div
        animate={{
          rotate: isHovered ? -4 : 0,
          scale: isHovered ? 1.05 : 0.96,
        }}
        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
        className="relative z-10 w-[215px] h-[215px] pointer-events-none select-none drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]"
      >
        <CardArt06Impact className="w-full h-full" />
      </motion.div>

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
// SOLID DARK NAVY BLUE INDIAN ART ARCHITECTURAL SHAPES (60% CARD STAGE)
// Authentic Indian heritage jharokha & stepped architectural silhouettes
// 1. Security Advisory: Scalloped Indian Jharokha Medallion (Shape 01)
// 2. CSC Academy: Stepped Architectural Diamond Jharokha (Shape 02)
// 3. Financial Inclusion: Lotus-Scalloped Temple Arch Medallion (Shape 03)
// ============================================================================
function NewsIllustrationStage({ variant }) {
  let shapeSrc = '/images/indian-shape-01.svg';
  if (variant === 'academy') {
    shapeSrc = '/images/indian-shape-02.svg';
  } else if (variant === 'banking') {
    shapeSrc = '/images/indian-shape-03.svg';
  }

  return (
    <div className="relative w-full h-full bg-[#f8fafc] flex items-center justify-center p-8 sm:p-10 pb-12 sm:pb-14 overflow-hidden select-none">
      <img
        src={shapeSrc}
        alt=""
        aria-hidden="true"
        className="w-full h-full max-h-[165px] sm:max-h-[180px] object-contain pointer-events-none select-none group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
      />
    </div>
  );
}


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [lang, setLang] = useState('EN');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [screenReaderModalOpen, setScreenReaderModalOpen] = useState(false);
  const [heroVideoPaused, setHeroVideoPaused] = useState(false);
  const heroVideoRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync <html lang="..."> with active language toggle (WCAG 3.1.1 & GIGW multi-lingual sync)
  useEffect(() => {
    document.documentElement.lang = lang === 'EN' ? 'en' : 'hi';
  }, [lang]);

  // Respect prefers-reduced-motion for hero background video (WCAG 2.2.2 / 2.3.3)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setHeroVideoPaused(true);
      heroVideoRef.current?.pause();
    }
  }, []);

  // Hero Curtain Parallax Physics (Zero shrinking, authentic parallax drift & depth scrim)
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroContentY = useTransform(heroScroll, [0, 1], ['0%', '16%']);
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '24%']);
  const heroDimOpacity = useTransform(heroScroll, [0, 0.9], [0, 0.45]);

  // Choose Journey Interactive Step states
  const [vleJourneyIdx, setVleJourneyIdx] = useState(0);
  const [citizenNeedIdx, setCitizenNeedIdx] = useState(0);

  // C. Platform Overview Hover-Drop Card state (Default index 1 open like Image 1)
  const [hoveredCard, setHoveredCard] = useState(1);

  // D. Explore Services state
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [g2cSubFilter, setG2cSubFilter] = useState('ALL'); // 'ALL' | 'CENTRAL' | 'STATE' | 'OTHER'
  const [g2cDropdownOpen, setG2cDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicePage, setServicePage] = useState(0);
  const [serviceDir, setServiceDir] = useState(1);

  // F. For VLEs 5-Card Fanned Carousel state (Default to Rajeshwar Rao at index 0)
  const [fanActive, setFanActive] = useState(0);

  // H. Support & FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Welcome Entry Pop-up (shown on every homepage load)
  const [welcomePopupOpen, setWelcomePopupOpen] = useState(true);

  // Login Modal state
  const [loginOpen, setLoginOpen] = useState(false);

  // Find Nearest Centre Locator Modal state
  const [locatorOpen, setLocatorOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [locatorQuery, setLocatorQuery] = useState('');
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  // Global Escape key handler to close open modals/drawers (WCAG 2.1.1 Keyboard)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (screenReaderModalOpen) setScreenReaderModalOpen(false);
      else if (locatorOpen) setLocatorOpen(false);
      else if (loginOpen) setLoginOpen(false);
      else if (welcomePopupOpen) setWelcomePopupOpen(false);
      else if (mobileNavOpen) setMobileNavOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenReaderModalOpen, locatorOpen, loginOpen, welcomePopupOpen, mobileNavOpen]);

  const SAMPLE_CENTRES = [
    {
      id: 'csc-01',
      name: 'Gram Panchayat Kendra, Bodhan',
      vle: 'Rajeshwar Rao',
      pincode: '503185',
      distance: '0.8 km away',
      address: 'Panchayat Bhavan, Bodhan, Telangana',
      services: ['Aadhaar Updates', 'Cash Withdrawal', 'Caste & Income Certificates', 'PM-Kisan', 'Bill Payments'],
      timing: '9:00 AM – 7:00 PM',
      phone: '+91 98480 14599',
      verified: true,
    },
    {
      id: 'csc-02',
      name: 'Digital Seva Kendra, Lucknow Rural',
      vle: 'Sunita Devi',
      pincode: '226001',
      distance: '1.4 km away',
      address: 'Near Health Centre, Block 3, Lucknow, Uttar Pradesh',
      services: ['Ayushman Health Card', 'Pension Life Certificate', 'Aadhaar ATM', 'FASTag'],
      timing: '9:30 AM – 6:30 PM',
      phone: '+91 94150 14599',
      verified: true,
    },
    {
      id: 'csc-03',
      name: 'Tehsil Seva Counter, Ahmedabad',
      vle: 'Amit Verma',
      pincode: '380001',
      distance: '2.1 km away',
      address: 'Shop 12, Tehsil Complex, Civil Lines, Ahmedabad, Gujarat',
      services: ['Passport Application', 'PAN Card', 'Free Legal Advice', 'Electricity & Water Bills'],
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

  const scrollToNewsletter = () => {
    const el = document.getElementById('newsletter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('newsletter-email');
        if (input) input.focus();
      }, 500);
    }
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = SERVICE_DIRECTORY.filter((item) => {
    let matchCat = true;
    if (categoryFilter === 'B2C') {
      matchCat = item.category === 'B2C';
    } else if (categoryFilter === 'G2C') {
      matchCat = item.category === 'G2C';
      if (g2cSubFilter !== 'ALL') {
        matchCat = matchCat && item.subCategory === g2cSubFilter;
      }
    }
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
      {/* GIGW / WCAG 2.4.1 Skip to Main Content Link */}
      <a href="#main-content" className="skip-to-content">
        {lang === 'EN' ? 'Skip to main content' : 'मुख्य सामग्री पर जाएं'}
      </a>

      {/* ====================================================================
          PERSISTENT FULL-WIDTH NAVIGATION BAR (NEVER HIDES ON SCROLL, NEVER BLOCKED BY NOTICE)
          Clean edge-to-edge navbar fixed at top, 100% visible across the entire site
          ==================================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-2xl border-b border-white/12 shadow-[0_12px_30px_rgba(0,0,0,0.35)]'
          : 'bg-[#0a1628]/90 backdrop-blur-xl border-b border-white/10'
          }`}
      >
        <div className="w-full px-3.5 sm:px-8 lg:px-12 py-3 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
          {/* Official CSC Brand Lockup (No Vertical Lines, Digital Seva Portal Stacked Below) */}
          <a
            href="#home"
            aria-label="CSC Digital Seva Portal Home"
            className="inline-flex flex-col items-center shrink-0 text-white group leading-none"
          >
            <CscOfficialLogo
              className="h-5 sm:h-[26px] w-auto"
              showSubtitle={false}
              showDividers={false}
              variant="dark-bg"
            />
            <span className="font-semibold text-[9px] sm:text-[10px] tracking-[0.03em] text-white/95 mt-0.5 whitespace-nowrap">
              {lang === 'EN' ? 'Digital Seva Portal' : 'डिजिटल सेवा पोर्टल'}
            </span>
          </a>

          {/* Centered Primary Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] xl:text-[13px] font-medium text-white/85"
          >
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'EN' ? 'Services' : 'सेवाएं'}
            </a>
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'EN' ? 'Jankari Suvidha' : 'जानकारी सुविधा'}
            </a>
            <a
              href="#locator"
              onClick={(e) => {
                const el = document.getElementById('locator');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              {lang === 'EN' ? 'Find CSC Centre' : 'सीएससी केंद्र खोजें'}
            </a>
            <a href="#whats-new" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'EN' ? 'News & Updates' : 'समाचार एवं अपडेट'}
            </a>
            <a href="#support" className="hover:text-white transition-colors whitespace-nowrap">
              {lang === 'EN' ? 'Help' : 'सहायता'}
            </a>
          </nav>

          {/* Right Action Cluster — Conversion-First Hierarchy (Primary 'Join as VLE' -> Secondary 'Login' -> Utilities Last) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Primary Conversion CTA: Join as VLE (Highlighted Solid Saffron Button) */}
            <a
              href="#get-started"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-[11px] sm:text-[12.5px] font-semibold transition-all hover:scale-102 active:scale-98 whitespace-nowrap shadow-md"
            >
              <span>{lang === 'EN' ? 'Join as VLE' : 'वीएलई बनें'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>

            {/* Secondary Action: Existing VLE Login */}
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-white/25 hover:border-white/40 hover:bg-white/10 text-white text-[12px] font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs"
            >
              <span>{lang === 'EN' ? 'Login' : 'लॉगिन'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" aria-hidden="true" />
            </button>

            <div className="hidden lg:block h-4 w-px bg-white/15 mx-0.5" aria-hidden="true" />

            {/* Utility Controls Moved Last (Quiet, Non-Competing) */}
            <button
              type="button"
              onClick={scrollToNewsletter}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              title="Subscribe to Newsletter & Scheme Alerts"
              aria-label="Subscribe to Newsletter and Scheme Alerts"
            >
              <Mail className="w-3.5 h-3.5 text-white/80" aria-hidden="true" />
              <span className="hidden xl:inline">{lang === 'EN' ? 'Newsletter' : 'समाचार पत्र'}</span>
            </button>

            <button
              type="button"
              onClick={() => setLang((l) => (l === 'EN' ? 'हिं' : 'EN'))}
              aria-label={lang === 'EN' ? 'Switch language to Hindi' : 'Switch language to English'}
              className="px-2 py-1 text-[11px] sm:text-[11.5px] font-medium text-white/85 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              {lang === 'EN' ? 'EN / हिं' : 'हिं / EN'}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((o) => !o)}
              className="lg:hidden p-2 text-white cursor-pointer rounded-lg hover:bg-white/10"
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileNavOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Structured Mobile Drawer */}
        {mobileNavOpen && (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="lg:hidden w-full bg-[#0a1628]/98 backdrop-blur-xl border-b border-white/12 px-5 py-4 text-sm font-medium text-white pointer-events-auto shadow-2xl space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                Citizen Access
              </div>
              <div className="space-y-1">
                <a
                  href="#services"
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center justify-between py-1.5 text-white/85 hover:text-white"
                >
                  <span>Services</span>
                  <span className="text-[11px] text-white/40 uppercase">Catalogue</span>
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center justify-between py-1.5 text-white/85 hover:text-white"
                >
                  <span>Jankari Suvidha</span>
                  <span className="text-[11px] text-white/40 uppercase">Information</span>
                </a>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    const el = document.getElementById('locator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else setLocatorOpen(true);
                  }}
                  className="w-full flex items-center justify-between py-1.5 text-left text-white/85 hover:text-white cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>Find CSC Centre</span>
                  </span>
                  <span className="text-[11px] text-sky-400 font-semibold">Locator</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                For Entrepreneurs & VLEs
              </div>
              <div className="space-y-1">
                <a
                  href="#get-started"
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center justify-between py-1.5 text-white/85 hover:text-white"
                >
                  <span>Join as VLE</span>
                  <span className="text-[11px] text-[#ff7733] font-semibold">Register</span>
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                Network & Help
              </div>
              <div className="space-y-1">
                <a
                  href="#whats-new"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-white/85 hover:text-white"
                >
                  News & Updates
                </a>
                <a
                  href="#support"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-white/85 hover:text-white"
                >
                  Help (Toll-Free 14599)
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2.5">
              <a
                href="#get-started"
                onClick={() => setMobileNavOpen(false)}
                className="flex-1 py-2 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-xs font-semibold text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Join as VLE</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  setLoginOpen(true);
                }}
                className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Login</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
              </button>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* ====================================================================
          03. FLAGSHIP EDITORIAL HERO — STICKY CURTAIN PARALLAX
          Pinned in place as the rest of the site rolls over like a theater curtain.
          Full-width, full-height, zero shrinking!
          ==================================================================== */}
      <section
        ref={heroRef}
        id="home"
        className="sticky top-0 z-0 w-full h-screen min-h-[560px] sm:min-h-[640px] flex items-center justify-center bg-black text-white overflow-hidden pt-20 sm:pt-24 will-change-transform"
      >
        {/* Physical depth scrim that dims the pinned hero subtly as the curtain slides over */}
        <motion.div
          style={{ opacity: heroDimOpacity }}
          className="absolute inset-0 bg-black z-20 pointer-events-none"
        />

        {/* Hero Background Video Layer with Parallax */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
        >
          <video
            ref={heroVideoRef}
            src="/Hero-bg.mp4"
            poster="/images/grainy-gradient-bg-4k.jpg"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Balanced black gradient overlay & softer vignette shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />

          {/* Native SVG Tactile Micro-Grain Overlay (Infinitely sharp, never pixelates or bands) */}
          <div
            className="absolute inset-0 opacity-[0.24] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </motion.div>

        {/* Main Center Content with Parallax Drift (NO SHRINKING!) */}
        <motion.div
          style={{ y: heroContentY }}
          className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 text-center py-8"
        >
          {/* Government Credential Pill — Frosted Glassmorphism */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] backdrop-blur-2xl border border-white/20 text-white text-xs font-semibold tracking-wide mb-6 sm:mb-7 shadow-md mx-auto">
            <span>MINISTRY OF ELECTRONICS & IT · DIGITAL INDIA NETWORK</span>
          </div>

          {/* Monumental Display Headline */}
          <h1 className="text-[32px] sm:text-5xl lg:text-[62px] xl:text-[68px] font-bold tracking-[-0.035em] text-white leading-[1.08] sm:leading-[1.06] mb-4 sm:mb-6 max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
            {lang === 'EN'
              ? 'Bringing Essential Services Closer to Every Indian.'
              : 'हर भारतीय के करीब आवश्यक सेवाएं पहुंचाना।'}
          </h1>

          {/* Subtitle */}
          <p className="text-[13.5px] sm:text-base lg:text-[17px] text-[#c5d5ec] max-w-xl mx-auto leading-relaxed mb-7 sm:mb-10 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Connecting citizens across every Gram Panchayat to 400+ government, banking, and utility services through local Village Level Entrepreneurs.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>{lang === 'EN' ? 'Join as VLE' : 'वीएलई के रूप में जुड़ें'}</span>
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('locator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setLocatorOpen(true);
              }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] hover:from-white/[0.26] hover:to-white/[0.12] backdrop-blur-2xl border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all hover:border-white/35 hover:scale-105 cursor-pointer shadow-md"
            >
              <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
              <span>{lang === 'EN' ? 'Find CSC Centre' : 'सीएससी केंद्र खोजें'}</span>
            </button>
          </div>
        </motion.div>

        {/* WCAG 2.2.2 Time-Based Media Control: Pause/Play Background Video */}
        <button
          type="button"
          onClick={() => {
            const vid = heroVideoRef.current;
            if (!vid) return;
            if (vid.paused) {
              vid.play();
              setHeroVideoPaused(false);
            } else {
              vid.pause();
              setHeroVideoPaused(true);
            }
          }}
          aria-label={heroVideoPaused ? 'Play background video' : 'Pause background video'}
          className="absolute bottom-5 left-5 z-20 px-3 py-1.5 rounded-full bg-black/55 hover:bg-black/75 border border-white/20 text-white text-[11px] font-medium backdrop-blur-md transition-colors cursor-pointer"
        >
          {heroVideoPaused ? 'Play background' : 'Pause background'}
        </button>
      </section>

      {/* ====================================================================
          SOLID CURTAIN OVERLAY WRAPPER (Z-10)
          Slides smoothly OVER the sticky hero with physical elevation shadow.
          Completely opaque to guarantee ZERO bleed-through between sections!
          ==================================================================== */}
      <div className="relative z-10 w-full bg-[#0a1628] shadow-[0_-30px_60px_rgba(0,0,0,0.85)]">
        {/* 04. IMPACT SCALE & INFRASTRUCTURE SECTION */}
        <ImpactScaleSection />

        {/* ====================================================================
          D. EXPLORE SERVICES (Fits Viewport)
          Navy & Saffron Orange Service Catalogue with Authentic Mandala Backdrop
          ==================================================================== */}
        <section
          id="services"
          className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 bg-white border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-20"
        >
          {/* Subtle Floral Mandala Background Art (Greyish on Cream) */}
          <img
            src="/images/mandala-floral-navy.png"
            alt=""
            aria-hidden="true"
            className="w-[460px] h-[460px] object-contain absolute -bottom-40 -left-40 opacity-[0.05] grayscale pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-[1240px] mx-auto w-full">
            <div className="mb-6 lg:mb-7">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1] mb-2.5">
                Explore Opportunities Through Digital Seva
              </h2>
              <p className="text-xs sm:text-[13px] text-[#64748b] max-w-2xl">
                Explore essential CSC services, their benefits for citizens, and opportunities for VLEs to deliver them and grow their businesses sustainably.
              </p>

              {/* Search Input + G2C / B2C Segmented Filter on Next Line */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center bg-white border border-[#0a1628]/20 focus-within:border-[#0a1628] rounded-xl px-3 py-2 w-full sm:w-72 shadow-xs transition-colors">
                  <Search className="w-3.5 h-3.5 text-[#64748b] mr-2 shrink-0" aria-hidden="true" />
                  <label htmlFor="service-search-input" className="sr-only">
                    Search CSC services
                  </label>
                  <input
                    id="service-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setServicePage(0);
                    }}
                    placeholder="What are you looking for?"
                    className="w-full text-xs text-[#0a1628] placeholder:text-[#64748b] bg-transparent outline-none"
                  />
                </div>

                {/* Segmented Filter Bar with Full Forms & G2C Dropdown */}
                <div
                  role="group"
                  aria-label="Filter services by category"
                  className="relative flex flex-wrap sm:inline-flex items-center gap-1 bg-[#0a1628]/[0.055] border border-[#0a1628]/10 p-1 rounded-xl w-full sm:w-auto"
                >
                  {/* 1. All Services */}
                  <button
                    type="button"
                    onClick={() => {
                      setCategoryFilter('ALL');
                      setG2cSubFilter('ALL');
                      setG2cDropdownOpen(false);
                      setServicePage(0);
                    }}
                    aria-pressed={categoryFilter === 'ALL'}
                    className={`px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${categoryFilter === 'ALL'
                      ? 'bg-white text-[#0a1628] shadow-xs'
                      : 'text-[#334155] hover:text-[#0a1628]'
                      }`}
                  >
                    All Services
                  </button>

                  {/* 2. Government to Citizen (G2C) with Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        if (categoryFilter !== 'G2C') {
                          setCategoryFilter('G2C');
                          setG2cSubFilter('ALL');
                          setServicePage(0);
                        }
                        setG2cDropdownOpen((prev) => !prev);
                      }}
                      aria-expanded={g2cDropdownOpen}
                      aria-haspopup="menu"
                      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${categoryFilter === 'G2C'
                        ? 'bg-white text-[#0a1628] shadow-xs'
                        : 'text-[#334155] hover:text-[#0a1628]'
                        }`}
                    >
                      <span>
                        {categoryFilter === 'G2C' && g2cSubFilter !== 'ALL'
                          ? `Government (G2C): ${g2cSubFilter === 'CENTRAL'
                            ? 'Central'
                            : g2cSubFilter === 'STATE'
                              ? 'State'
                              : 'Other'
                          }`
                          : 'Government to Citizen (G2C)'}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${g2cDropdownOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {g2cDropdownOpen && (
                      <>
                        {/* Invisible backdrop to dismiss dropdown on outside click */}
                        <div
                          className="fixed inset-0 z-30"
                          onClick={() => setG2cDropdownOpen(false)}
                        />
                        <div
                          role="menu"
                          aria-label="Government service subcategories"
                          className="absolute left-0 top-full mt-2 w-56 py-1.5 rounded-xl bg-white border border-[#0a1628]/15 shadow-2xl z-40 divide-y divide-[#0a1628]/10 text-left"
                        >
                          {[
                            { id: 'ALL', label: 'All Government Services' },
                            { id: 'CENTRAL', label: 'Central Government' },
                            { id: 'STATE', label: 'State Government' },
                            { id: 'OTHER', label: 'Other Civic & Local' },
                          ].map((sub) => (
                            <button
                              key={sub.id}
                              type="button"
                              role="menuitemradio"
                              aria-checked={categoryFilter === 'G2C' && g2cSubFilter === sub.id}
                              onClick={() => {
                                setCategoryFilter('G2C');
                                setG2cSubFilter(sub.id);
                                setServicePage(0);
                                setG2cDropdownOpen(false);
                              }}
                              className={`w-full px-3.5 py-2 text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${categoryFilter === 'G2C' && g2cSubFilter === sub.id
                                ? 'bg-[#0a1628] text-white font-semibold'
                                : 'text-[#0a1628] hover:bg-[#0a1628]/5'
                                }`}
                            >
                              <span>{sub.label}</span>
                              {categoryFilter === 'G2C' && g2cSubFilter === sub.id && (
                                <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                              )}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* 3. Business to Consumer (B2C) */}
                  <button
                    type="button"
                    onClick={() => {
                      setCategoryFilter('B2C');
                      setG2cSubFilter('ALL');
                      setG2cDropdownOpen(false);
                      setServicePage(0);
                    }}
                    aria-pressed={categoryFilter === 'B2C'}
                    className={`px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${categoryFilter === 'B2C'
                      ? 'bg-white text-[#0a1628] shadow-xs'
                      : 'text-[#334155] hover:text-[#0a1628]'
                      }`}
                  >
                    Business to Consumer (B2C)
                  </button>
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
                          tabIndex={0}
                          aria-label={`${srv.name}: ${srv.description}`}
                          className="relative group h-[142px] sm:h-[150px] lg:h-[155px] border-r border-b border-[#0a1628]/15 p-3.5 sm:p-4 bg-white hover:bg-[#0a1628] focus:bg-[#0a1628] transition-colors duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] select-none overflow-hidden cursor-pointer outline-none"
                        >
                          {/* ICON: Smooth 550ms glide & scale using pure interpolatable coords */}
                          <div className="absolute z-20 pointer-events-none top-[14px] left-1/2 -translate-x-1/2 scale-[0.82] sm:scale-[0.86] text-[#0a1628] group-hover:top-[12px] group-hover:left-[14px] group-hover:translate-x-0 group-hover:scale-[0.38] group-hover:text-white group-focus:top-[12px] group-focus:left-[14px] group-focus:translate-x-0 group-focus:scale-[0.38] group-focus:text-white origin-top-left transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform">
                            <ServiceVectorLogo id={srv.id} className="w-[88px] h-[88px]" />
                          </div>

                          {/* ANIMATED TITLE: Smooth 550ms glide with consistent weight */}
                          <div className="absolute top-[106px] sm:top-[112px] lg:top-[116px] left-1/2 -translate-x-1/2 max-w-[calc(100%-24px)] group-hover:top-[19px] group-hover:left-[56px] group-hover:translate-x-0 group-hover:max-w-[calc(100%-68px)] group-focus:top-[19px] group-focus:left-[56px] group-focus:translate-x-0 group-focus:max-w-[calc(100%-68px)] z-20 pointer-events-none transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform">
                            <h3 className="text-[13.5px] sm:text-[14px] font-semibold tracking-[-0.015em] text-[#0a1628] group-hover:text-white group-focus:text-white leading-tight whitespace-nowrap truncate transition-colors duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                              {srv.name}
                            </h3>
                          </div>

                          {/* HOVER / FOCUS DESCRIPTION: Smooth 500ms fade & micro-rise below title */}
                          <div className="absolute inset-x-3.5 top-[50px] bottom-2 flex items-start justify-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 pointer-events-none">
                            <p className="text-[11.5px] sm:text-[12px] text-[#c5d5ec] leading-[1.55] text-left line-clamp-3">
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
                    type="button"
                    onClick={() => {
                      setServiceDir(-1);
                      setServicePage(
                        (prev) =>
                          (prev - 1 + totalServicePages) % totalServicePages
                      );
                    }}
                    aria-label="Show previous services"
                    title="Previous services"
                    className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1628] hover:bg-[#ff5500] text-white shadow-lg transition-all cursor-pointer absolute top-1/2 left-1 sm:-left-5 -translate-y-1/2 z-20"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}

                {/* Right Arrow on Grid Edge to Move Forward */}
                {totalServicePages > 1 &&
                  currentServicePage < totalServicePages - 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setServiceDir(1);
                        setServicePage((prev) => (prev + 1) % totalServicePages);
                      }}
                      aria-label="Show next services"
                      title="Next services"
                      className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a1628] hover:bg-[#ff5500] text-white shadow-lg transition-all cursor-pointer absolute top-1/2 right-1 sm:-right-5 -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
          </div>
        </section>

        {/* ====================================================================
          C. VLE OPPORTUNITY & PLATFORM OVERVIEW (PROPOSAL SECTION 07)
          Headline: Explore What It Means to Be a CSC VLE.
          ==================================================================== */}
        {/* ====================================================================
          E. WHY JOIN AS A VLE TODAY? (Interactive 2x2 Bento Grid)
          ==================================================================== */}
        <WhyVleBentoSection />

        {/* ====================================================================
          F. FOR VILLAGE LEVEL ENTREPRENEURS (Fits Viewport)
          Preserved 5-Card Fanned Arc Interaction with Refined Horizontal Rectangle Cards
          ==================================================================== */}
        <section
          id="for-vles"
          className="relative min-h-screen lg:h-screen flex flex-col justify-center px-5 sm:px-8 bg-white border-b border-[#0a1628]/12 overflow-hidden scroll-mt-24 pt-24 lg:pt-20 pb-6 lg:pb-8"
        >
          {/* Subtle Grand Mandala Background Art (Fits Completely Inside Viewport) */}
          <img
            src="/images/mandala-grand-navy.png"
            alt=""
            aria-hidden="true"
            className="w-[520px] sm:w-[580px] lg:w-[620px] max-h-[84%] aspect-square object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] grayscale pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-[1240px] mx-auto text-center w-full">
            <div className="max-w-2xl mx-auto mb-3 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1]">
                Meet the Voices Behind Every Village Kendra.
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#64748b] mt-1.5 max-w-xl mx-auto">
                Everyday neighbours who built thriving digital hubs right from their hometowns—and became the heartbeat of their communities.
              </p>
            </div>

            {/* 5-Card Responsive Rectangle Fanned Arc Stage */}
            <div
              onPointerDown={(e) => {
                e.currentTarget.dataset.swipeX = String(e.clientX);
              }}
              onPointerUp={(e) => {
                const startX = Number(e.currentTarget.dataset.swipeX);
                if (!Number.isNaN(startX)) {
                  const delta = e.clientX - startX;
                  if (delta < -45) rotateFan(1);
                  else if (delta > 45) rotateFan(-1);
                }
                delete e.currentTarget.dataset.swipeX;
              }}
              className="relative h-[250px] sm:h-[285px] md:h-[305px] w-full my-2 select-none overflow-visible touch-pan-y"
            >
              {VLE_CAROUSEL_ITEMS.map((item, idx) => {
                const offset = getOffset(idx);
                const slot = getFanSlot(offset, windowWidth);
                const isCenter = offset === 0;

                return (
                  <div
                    key={item.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: slot.zIndex }}
                  >
                    <motion.div
                      role="button"
                      tabIndex={0}
                      aria-label={`VLE story from ${item.name}, ${item.location}`}
                      onClick={() => setFanActive(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setFanActive(idx);
                        }
                      }}
                      initial={false}
                      animate={{
                        x: slot.x,
                        y: slot.y,
                        rotate: slot.rotate,
                        scale: slot.scale,
                        filter: `brightness(${slot.brightness})`,
                      }}
                      whileHover={
                        isCenter
                          ? { scale: 1.04, y: slot.y - 6 }
                          : { scale: slot.scale + 0.02, y: slot.y - 4 }
                      }
                      transition={springTransition}
                      className="w-[calc(100vw-2.5rem)] max-w-[330px] sm:max-w-none sm:w-[480px] md:w-[540px] h-[215px] sm:h-[250px] md:h-[270px] rounded-[24px] overflow-hidden cursor-pointer bg-white text-[#0a1628] shadow-[0_20px_45px_-12px_rgba(10,22,40,0.14)] border border-[#0a1628]/10 flex flex-row select-none text-left"
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
                          src={`${item.image.split('?')[0]}?v=50`}
                          alt={`${item.name}, VLE from ${item.location}`}
                          className="h-[91%] sm:h-[92%] w-auto max-h-none object-contain object-bottom pointer-events-none drop-shadow-md select-none transform translate-y-0.5"
                        />
                      </div>
                    </motion.div>
                  </div>
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
                    className={`h-2 rounded-full transition-all cursor-pointer ${fanActive === dotIdx ? 'w-6 bg-[#ff5500]' : 'w-2 bg-[#0a1628]/20 hover:bg-[#0a1628]/40'
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
          VILLAGE DIGITAL SEVA SLIDESHOW — GROUND REALITIES & SERVICE DELIVERY
          Clean, low-cognitive centre locator with authentic rural photography
          ==================================================================== */}
        <VillageServicesSlideshow
          onOpenLocator={(q) => {
            setLocatorQuery(q || '');
            setLocatorOpen(true);
          }}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* ====================================================================
          G. NETWORK STORIES & UPDATES
          Headline: News and Updates (Updates in orange)
          Format: 3 Modern Clean Cards with Bespoke Vector Graphics & Gradients
          ==================================================================== */}
        <section
          id="whats-new"
          className="relative py-20 lg:py-24 px-5 sm:px-8 bg-white text-[#0a1628] border-b border-[#0a1628]/10 scroll-mt-24"
        >
          <div className="max-w-[1200px] mx-auto w-full">
            {/* Section Header with 'View all' on the top right */}
            <div className="relative flex flex-col items-center text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0a1628]">
                What's Happening Across the CSC Network?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed max-w-xl">
                Official circulars, nationwide initiatives, and grassroots announcements.
              </p>

              {/* View All link on top right */}
              <a
                href="#newsletter"
                className="sm:absolute sm:right-0 sm:bottom-1 mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-black hover:text-black/75 transition-colors group cursor-pointer"
              >
                <span>View all</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:text-black/75 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3 Bespoke CSC Network Story Cards: Vector Illustration Stage + Seamless Navy Blue Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {NEWS_CARDS.map((card) => (
                <article
                  key={card.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`${card.cardTitle} — ${card.actionText}`}
                  onClick={() => setSelectedStory(card)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedStory(card);
                    }
                  }}
                  className="relative h-[460px] sm:h-[485px] bg-[#0c1a2e] rounded-[28px] border-0 shadow-[0_8px_30px_rgba(10,22,40,0.16)] overflow-hidden hover:shadow-[0_16px_44px_rgba(10,22,40,0.28)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
                >
                  {/* Visual Stage Container (Upper ~60% in normal state) */}
                  <div className="absolute top-0 inset-x-0 h-[280px] sm:h-[295px]">
                    <NewsIllustrationStage variant={card.variant} />
                  </div>

                  {/* Sliding Navy Text Container: Fixed to bottom of card, slides UP over the shape on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#0c1a2e] flex flex-col justify-between h-[180px] sm:h-[190px] group-hover:h-[280px] sm:group-hover:h-[295px] transition-all duration-500 ease-out z-10 shadow-[0_-10px_25px_rgba(12,26,46,0.3)]">
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

                      {/* Title */}
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug line-clamp-2">
                        {card.cardTitle}
                      </h3>

                      {/* Body Description - Slides up & reveals as container height expands */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                        <div className="overflow-hidden">
                          <p className="text-[12.5px] sm:text-[13px] text-slate-300 leading-relaxed pt-3 line-clamp-3 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                            {card.cardSummary}
                          </p>
                        </div>
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
                  </div>
                </article>
              ))}
            </div>

            {/* ==========================================================
              INTERACTIVE NEWSLETTER & SCHEMES SUBSCRIPTION BANNER
              Allows citizens and VLEs to subscribe to official circulars,
              new scheme rollouts, welfare subsidies, and promotion alerts
              ========================================================== */}
            <div
              id="newsletter"
              className="mt-12 sm:mt-16 rounded-[28px] bg-gradient-to-br from-[#0c1a2e] via-[#0d1f38] to-[#122847] px-7 py-8 sm:px-10 sm:py-10 text-white border border-slate-700/60 shadow-lg relative overflow-hidden scroll-mt-28"
            >
              {/* Subtle Mandala Background Art Graphic */}
              <img
                src="/images/mandala-grand-white.png"
                alt=""
                aria-hidden="true"
                className="absolute -right-32 -bottom-32 w-72 h-72 object-contain opacity-[0.05] pointer-events-none select-none"
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
                {/* Left Column: Clean Headline & 1-Line Subtext */}
                <div className="max-w-xl">
                  <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-white leading-snug">
                    Stay Updated on New Schemes & Circulars
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Get official updates on new government schemes, service rollouts, and VLE announcements directly in your inbox.
                  </p>
                </div>

                {/* Right Column: Clean Inline Email Input + Subscribe Button */}
                <div className="w-full lg:w-[440px] shrink-0">
                  {newsletterSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-200"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Subscribed <strong className="text-white">{newsletterEmail}</strong></span>
                      </span>
                      <button
                        onClick={() => {
                          setNewsletterSubscribed(false);
                          setNewsletterEmail('');
                        }}
                        className="text-[#ff884d] hover:text-white font-semibold underline cursor-pointer shrink-0"
                      >
                        Change
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit}>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                        <div className="relative flex-1">
                          <label htmlFor="newsletter-email" className="sr-only">
                            Email address for scheme alerts and circulars
                          </label>
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                          <input
                            id="newsletter-email"
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => {
                              setNewsletterEmail(e.target.value);
                              if (newsletterError) setNewsletterError('');
                            }}
                            placeholder="Enter your email address..."
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-white/30 text-white text-sm placeholder:text-slate-300 transition-all"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="py-3.5 px-6 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-sm transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center justify-center gap-2 shadow-md shrink-0"
                        >
                          <span>Subscribe</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {newsletterError && (
                        <p className="text-[11px] text-rose-400 mt-1.5">
                          ⚠ {newsletterError}
                        </p>
                      )}
                    </form>
                  )}
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
          H. DEDICATED SUPPORT & SAFETY (Standalone 3-Col Editorial Hub) + FAQ
          ==================================================================== */}
        <section
          id="support"
          className="relative px-6 sm:px-12 lg:px-20 bg-white overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24"
        >
          <div className="relative z-10 max-w-[1260px] mx-auto w-full">
            {/* Dedicated Support Section — Multi-Layout Interactive Hub */}
            <SupportHubSection onOpenChatbot={() => setChatbotOpen(true)} />

            {/* Separate 2-Column Editorial FAQ Section Below */}
            <div className="mt-16 sm:mt-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Left 5 Cols: FAQ Heading Top + Ask Sarthi AI CTA Anchored Bottom */}
              <div className="lg:col-span-5 flex flex-col justify-between items-start pb-2">
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.08] max-w-xs">
                  Frequently Asked Questions
                </h3>

                <div className="mt-14 lg:mt-20">
                  <h4 className="text-lg sm:text-xl font-bold text-[#0a1628] tracking-tight mb-1">
                    Still have questions?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-sm leading-relaxed">
                    Get instant answers from Sarthi, our official AI assistant in your language.
                  </p>
                  <button
                    type="button"
                    onClick={() => setChatbotOpen(true)}
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0a1628] hover:bg-[#162844] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Ask Sarthi our AI chat bot</span>
                  </button>
                </div>
              </div>

              {/* Right 7 Cols: Minimal Hairline FAQ Accordion */}
              <div className="lg:col-span-7 divide-y divide-[#0a1628]/10 border-b border-[#0a1628]/10">
                {FAQ_LIST.map((faq, idx) => {
                  const open = openFaqIdx === idx;
                  return (
                    <div key={faq.q} className="py-5 first:pt-1">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(open ? -1 : idx)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${idx}`}
                        id={`faq-trigger-${idx}`}
                        className="w-full text-left flex items-center justify-between gap-4 sm:gap-6 text-[14.5px] sm:text-[16px] font-medium text-[#0a1628] hover:text-[#0a1628]/75 transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <motion.span
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden="true"
                          className="w-7 h-7 rounded-full bg-[#0a1628] text-white shrink-0 grid place-items-center"
                        >
                          {open ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="content"
                            id={`faq-panel-${idx}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${idx}`}
                            initial={{ height: 0, opacity: 0, y: -4 }}
                            animate={{ height: 'auto', opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -4 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 pb-1 text-xs sm:text-[13.5px] text-[#334155] leading-[1.65] pr-6 sm:pr-10">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
          APP DOWNLOAD SECTION — SCAN & DOWNLOAD
          Headline: Get Our App: Scan & Download
          Features: Authentic Vector QR Code with CSC Emblem, Store Links & App Pillars
          ==================================================================== */}
        <AppDownloadSection />

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
            className="absolute -bottom-44 sm:-bottom-56 -left-32 sm:-left-40 pointer-events-none select-none z-1"
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
            className="absolute -bottom-44 sm:-bottom-56 -right-32 sm:-right-40 pointer-events-none select-none z-1"
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
              <span>JOIN 5,50,000+ VILLAGE LEVEL ENTREPRENEURS</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-[-0.03em] leading-tight mb-2.5 max-w-2xl mx-auto drop-shadow-sm">
              Your CSC Journey Starts with One Step.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] max-w-xl mx-auto leading-relaxed mb-6 font-normal">
              Explore the requirements, understand the registration process, and take the first step towards establishing your own Village Level Enterprise.
            </p>

            {/* 3 Authentic Frosted Key Prerequisite Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6 text-left">
              {/* Card 01 — Simple Eligibility */}
              <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Building2 className="w-4 h-4 text-white" />
                </div>

                <h3 className="relative z-10 text-[15px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                  Simple Eligibility
                </h3>
                <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                  Age 18+ with minimum 10th pass qualification and local panchayat residency.
                </div>
              </div>

              {/* Card 02 — MeitY Certification */}
              <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 text-white" />
                </div>

                <h3 className="relative z-10 text-[15px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                  MeitY Certification
                </h3>
                <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                  Complete Telecentre Entrepreneur Course (TEC) with dedicated district onboarding.
                </div>
              </div>

              {/* Card 03 — Unified Digital Wallet */}
              <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Wallet className="w-4 h-4 text-white" />
                </div>

                <h3 className="relative z-10 text-[15px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                  Unified Digital Wallet
                </h3>
                <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                  Instant commission payouts and real-time reconciliation across 400+ desks.
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
                onClick={() => setCalculatorOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.06] hover:from-white/[0.24] hover:to-white/[0.1] backdrop-blur-2xl border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all hover:border-white/35 hover:scale-105 cursor-pointer shadow-xs"
              >
                <Calculator className="w-4 h-4 text-white" />
                <span>Earning Calculator</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Direct Support Assistance */}
            <div className="inline-flex items-center gap-2 text-[11.5px] text-white">
              <span>Need assistance with VLE registration?</span>
              <span className="text-white font-medium">
                Call Toll-Free Helpdesk: <span className="text-white font-bold">14599</span>
              </span>
            </div>
          </motion.div>
        </section>

        </div>
      </main>

      {/* ====================================================================
          J. FOOTER — CLEAN ARCHITECTURAL INSTITUTIONAL FOOTER (GIGW COMPLIANT)
          ==================================================================== */}
      <footer className="relative z-10 bg-[#071120] text-[#b4c6e4] pt-14 sm:pt-16 pb-10 px-5 sm:px-8 text-xs border-t border-white/10 overflow-hidden">
          <div className="relative z-10 max-w-[1240px] mx-auto">
            {/* 12-Column Main Footer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 mb-8 border-b border-white/10">
              {/* Left 4 Cols: State Emblem of India + Official CSC Brand Lockup & Department Lineage */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  {/* State Emblem of India (Ashoka Lion Capital) — GIGW Ownership Requirement */}
                  <div className="flex flex-col items-center shrink-0 pr-4 border-r border-white/15">
                    <svg
                      viewBox="0 0 64 88"
                      className="w-9 h-12 text-white"
                      fill="currentColor"
                      role="img"
                      aria-label="State Emblem of India"
                    >
                      {/* Stylized Ashoka Lion Capital & Abacus */}
                      <path d="M32 6c-3.5 0-6.2 2.4-6.8 5.6-.4 2.1.4 4.2 1.8 5.6-3.2 1.2-5.4 4.2-5.4 7.8v6h20.8v-6c0-3.6-2.2-6.6-5.4-7.8 1.4-1.4 2.2-3.5 1.8-5.6C38.2 8.4 35.5 6 32 6Zm-13 11c-2.8 0-5 2.2-5 5v9c0 1.4 1.1 2.5 2.5 2.5H20V22c0-2.8-1.8-5-1-5Zm26 0c-.8 0-1 2.2-1 5v11.5h3.5c1.4 0 2.5-1.1 2.5-2.5v-9c0-2.8-2.2-5-5-5Z" />
                      <rect x="14" y="36" width="36" height="4.5" rx="1.5" />
                      <circle cx="32" cy="48" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="32" cy="48" r="1.8" />
                      <path d="M16 58h32l-3 7H19l-3-7Z" />
                      <text x="32" y="77" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.4">
                        सत्यमेव जयते
                      </text>
                    </svg>
                  </div>

                  <a
                    href="#home"
                    aria-label="CSC Digital Seva Portal Home"
                    className="inline-flex flex-col items-start leading-none"
                  >
                    <CscOfficialLogo
                      className="h-8 sm:h-9 w-auto"
                      showSubtitle={false}
                      showDividers={false}
                      variant="dark-bg"
                    />
                    <span className="font-semibold text-[11px] tracking-[0.03em] text-white/95 mt-1 whitespace-nowrap">
                      Digital Seva Portal
                    </span>
                  </a>
                </div>

                <p className="text-[12.5px] sm:text-[13px] text-[#b4c6e4] leading-relaxed max-w-sm mb-5">
                  <strong className="text-white font-semibold">Government of India</strong> · Ministry of Electronics &amp; Information Technology (MeitY) ·{' '}
                  <span className="text-white/90">CSC e-Governance Services India Limited</span> (Special Purpose Vehicle).
                </p>

                {/* Clean Frosted Glass Toll-Free Helpline Pill */}
                <a
                  href="tel:14599"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-xs text-white font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Toll-Free National Helpline:</span>
                  <span className="font-bold text-white">14599</span>
                </a>
              </div>

              {/* Right 8 Cols: 4 Clean Navigation Columns */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <h2 className="font-sans font-semibold text-white text-[13.5px] tracking-tight mb-3.5">
                    About CSC
                  </h2>
                  <ul className="space-y-2.5 text-[12.5px]">
                    <li>
                      <a href="#about" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Why Join as VLE
                      </a>
                    </li>
                    <li>
                      <a href="#locator" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Find CSC Centre
                      </a>
                    </li>
                    <li>
                      <a href="#whats-new" className="text-[#b4c6e4] hover:text-white transition-colors">
                        News &amp; Circulars
                      </a>
                    </li>
                    <li>
                      <a href="#newsletter" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Scheme Alerts
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sans font-semibold text-white text-[13.5px] tracking-tight mb-3.5">
                    Digital Seva
                  </h2>
                  <ul className="space-y-2.5 text-[12.5px]">
                    <li>
                      <a href="#services" className="text-[#b4c6e4] hover:text-white transition-colors">
                        G2C Government Services
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-[#b4c6e4] hover:text-white transition-colors">
                        B2C Public Utilities
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-[#b4c6e4] hover:text-white transition-colors">
                        e-District &amp; Certificates
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Banking &amp; Insurance
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sans font-semibold text-white text-[13.5px] tracking-tight mb-3.5">
                    VLE Network
                  </h2>
                  <ul className="space-y-2.5 text-[12.5px]">
                    <li>
                      <a href="#get-started" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Join as VLE
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setCalculatorOpen(true)}
                        className="text-[#b4c6e4] hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Earning Calculator
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setLoginOpen(true)}
                        className="text-[#b4c6e4] hover:text-white transition-colors cursor-pointer text-left"
                      >
                        VLE Portal Login
                      </button>
                    </li>
                    <li>
                      <a href="#for-vles" className="text-[#b4c6e4] hover:text-white transition-colors">
                        VLE Stories
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sans font-semibold text-white text-[13.5px] tracking-tight mb-3.5">
                    Help &amp; Support
                  </h2>
                  <ul className="space-y-2.5 text-[12.5px]">
                    <li>
                      <a href="#support" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Helpline 14599
                      </a>
                    </li>
                    <li>
                      <a href="#support" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Security &amp; Fraud Guide
                      </a>
                    </li>
                    <li>
                      <a href="#support" className="text-[#b4c6e4] hover:text-white transition-colors">
                        Grievance Redressal
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setChatbotOpen(true)}
                        className="text-[#b4c6e4] hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Ask Sarthi AI
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Legal, GIGW Accessibility & Copyright Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#9eb4d6]">
              <span>
                © 2026 CSC e-Governance Services India Limited · MeitY, Government of India.
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={() => setScreenReaderModalOpen(true)}
                  className="text-white hover:text-[#ff884d] font-medium underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Screen Reader Access
                </button>
                <a href="#support" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#support" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
                <a
                  href="https://digitalseva.csc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Official CSC Portal
                </a>
              </div>
            </div>
          </div>
        </footer>

      {/* Welcome Entry Pop-up — Shown on every homepage visit */}
      <AnimatePresence>
        {welcomePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setWelcomePopupOpen(false)}
            className="fixed inset-0 bg-[#071120]/80 backdrop-blur-md z-50 grid place-items-center p-4"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-dialog-title"
              initial={{ scale: 0.95, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#0c1c38] to-[#071328] text-white w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.75)] relative border border-white/15 overflow-hidden"
            >
              <img
                src="/images/mandala-card-01.png"
                alt=""
                aria-hidden="true"
                className="w-52 h-52 object-contain absolute -top-16 -right-16 opacity-[0.1] pointer-events-none select-none"
              />

              <button
                type="button"
                onClick={() => setWelcomePopupOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white grid place-items-center cursor-pointer z-30 transition-colors shadow-md"
                aria-label="Close popup"
              >
                <X className="w-4.5 h-4.5 stroke-[2.25] pointer-events-none" />
              </button>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-wider text-[#ff7733] mb-3">
                  <LotusBadge className="w-4 h-4" />
                  <span>DIGITAL SEVA PORTAL</span>
                </div>

                <h3 id="welcome-dialog-title" className="text-2xl font-medium tracking-tight text-white mb-2">
                  Welcome to CSC Digital Seva
                </h3>
                <p className="text-sm text-[#a6bad8] leading-relaxed mb-6">
                  Start your own Village Level Entrepreneur centre in your community or stay updated with the latest government schemes and circulars.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setWelcomePopupOpen(false);
                      const el = document.getElementById('get-started');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 px-5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg"
                  >
                    <span>Join as VLE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setWelcomePopupOpen(false);
                      setTimeout(() => {
                        scrollToNewsletter();
                      }, 150);
                    }}
                    className="w-full py-3.5 px-5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Subscribe to Newsletter</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-dialog-title"
              initial={{ scale: 0.96, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-[#0c1c38] to-[#071328] text-white w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative border border-white/20 overflow-hidden"
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
                <h3 id="login-dialog-title" className="text-xl font-semibold tracking-tight mb-1.5 text-white">
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
                    <label htmlFor="vle-login-id" className="block text-xs font-medium text-[#c5d4eb] mb-1">
                      CSC ID / Username
                    </label>
                    <input
                      id="vle-login-id"
                      type="text"
                      required
                      placeholder="12-digit CSC ID"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 focus:border-[#ff5500] text-white text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="vle-login-password" className="block text-xs font-medium text-[#c5d4eb] mb-1">
                      Password
                    </label>
                    <input
                      id="vle-login-password"
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 focus:border-[#ff5500] text-white text-sm"
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
        {/* VLE Monthly Earning Calculator Modal */}
        <VleEarningCalculatorModal
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
          onStartRegistration={() => setLoginOpen(true)}
        />

        {/* Find Nearest CSC Centre Modal — Clean, Low-Cognitive & Citizen-Friendly */}
        {locatorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLocatorOpen(false)}
            className="fixed inset-0 bg-[#0a1628]/60 backdrop-blur-sm z-50 grid place-items-center p-4 overflow-y-auto"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="locator-modal-title"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-[#0a1628] w-full max-w-2xl rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] relative border border-slate-200 overflow-hidden my-8 max-h-[88vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setLocatorOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 grid place-items-center cursor-pointer z-10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Simple Friendly Header */}
              <div className="relative z-10 mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ff5500] text-[11px] font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>CENTRE LOCATOR</span>
                </div>
                <h3 id="locator-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a1628] mb-1.5">
                  Find Your Nearest CSC Centre
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Visit your local Kendra for Aadhaar updates, cash withdrawal, certificates, and government schemes.
                </p>
              </div>

              {/* Search Bar + Quick Pincode Filter */}
              <div className="relative z-10 mb-4 space-y-2.5">
                <div className="relative">
                  <label htmlFor="modal-locator-search" className="sr-only">
                    Enter pincode or village name
                  </label>
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                  <input
                    id="modal-locator-search"
                    type="text"
                    value={locatorQuery}
                    onChange={(e) => setLocatorQuery(e.target.value)}
                    placeholder="Enter pincode or village (e.g. 503185)..."
                    className="w-full pl-10 pr-14 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#ff5500] text-slate-900 text-xs sm:text-sm transition-colors placeholder:text-slate-500"
                  />
                  {locatorQuery && (
                    <button
                      onClick={() => setLocatorQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-medium cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick Selection Pills */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 text-[11px]">Popular:</span>
                  {[
                    { label: 'Bodhan (503185)', q: '503185' },
                    { label: 'Lucknow (226001)', q: '226001' },
                    { label: 'Ahmedabad (380001)', q: '380001' },
                  ].map((p) => (
                    <button
                      key={p.q}
                      onClick={() => setLocatorQuery(p.q)}
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer border ${locatorQuery === p.q
                        ? 'bg-[#ff5500] text-white border-[#ff5500]'
                        : 'bg-slate-100 text-slate-600 border-slate-200/80 hover:bg-slate-200/80 hover:text-slate-900'
                        }`}
                    >
                      {p.label}
                    </button>
                  ))}
                  {locatorQuery && (
                    <button
                      onClick={() => setLocatorQuery('')}
                      className="text-[11px] text-[#ff5500] hover:underline cursor-pointer ml-1 font-medium"
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
                }).length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <p className="text-sm font-medium">No centres found for &ldquo;{locatorQuery}&rdquo;</p>
                    <button
                      onClick={() => setLocatorQuery('')}
                      className="mt-2 text-xs text-[#ff5500] hover:underline font-semibold cursor-pointer"
                    >
                      Show all centres
                    </button>
                  </div>
                ) : (
                  SAMPLE_CENTRES.filter((c) => {
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
                      className="p-4 sm:p-4.5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all text-left space-y-2.5 shadow-xs"
                    >
                      {/* Top Title & Distance */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm sm:text-[15px] font-bold text-[#0a1628]">
                              {centre.name}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Verified</span>
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                            <span>Run by <strong className="text-slate-800 font-medium">{centre.vle}</strong></span>
                            <span>·</span>
                            <span className="flex items-center gap-1 text-slate-600">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>Open: {centre.timing}</span>
                            </span>
                          </div>
                        </div>

                        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{centre.distance}</span>
                        </span>
                      </div>

                      {/* Location */}
                      <p className="text-xs text-slate-600 leading-relaxed flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                        <span>{centre.address} · PIN <strong className="text-slate-800 font-semibold">{centre.pincode}</strong></span>
                      </p>

                      {/* Plain-Language Services Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {centre.services.map((svc) => (
                          <span
                            key={svc}
                            className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200/80">
                        <a
                          href={`tel:${centre.phone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors border border-slate-200"
                        >
                          <Phone className="w-3.5 h-3.5 text-slate-600" />
                          <span>Call Centre</span>
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.name + ' ' + centre.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors shadow-xs"
                        >
                          <span>Get Directions</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom National Directory Notice */}
              <div className="relative z-10 pt-3 mt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                <span>Looking for all 5,50,000+ pan-India centres?</span>
                <a
                  href="https://locator.csccloud.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#ff5500] hover:text-[#d94800] font-semibold transition-colors"
                >
                  <span>Open CSC National Directory</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sarthi AI Assistant & Screen Reader Access Modal */}
      <AnimatePresence>
        {screenReaderModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setScreenReaderModalOpen(false)}
            className="fixed inset-0 bg-[#071120]/75 backdrop-blur-md z-50 grid place-items-center p-4 overflow-y-auto"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="screen-reader-dialog-title"
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-[#0a1628] w-full max-w-2xl rounded-2xl p-6 sm:p-7 shadow-2xl relative border border-slate-200 my-8 max-h-[88vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setScreenReaderModalOpen(false)}
                aria-label="Close screen reader access information"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 grid place-items-center cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              <h3 id="screen-reader-dialog-title" className="text-xl font-bold text-[#0a1628] mb-2 pr-8">
                Screen Reader Access &amp; Accessibility Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                The CSC Digital Seva Portal complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 Level AA and Guidelines for Indian Government Websites (GIGW). It is compatible with assistive technologies such as JAWS, NVDA, SAFA, Supernova, and System Access To Go.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <caption className="sr-only">
                    Supported screen readers, official websites, and license types
                  </caption>
                  <thead className="bg-[#0a1628] text-white">
                    <tr>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Screen Reader</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Website</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Free / Commercial</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      { name: 'Non Visual Desktop Access (NVDA)', url: 'https://www.nvaccess.org/', type: 'Free' },
                      { name: 'System Access To Go', url: 'http://www.satogo.com', type: 'Free' },
                      { name: 'Hal', url: 'https://yourdolphin.com/ScreenReader', type: 'Commercial' },
                      { name: 'JAWS', url: 'https://www.freedomscientific.com/Downloads/JAWS', type: 'Commercial' },
                      { name: 'Supernova', url: 'https://yourdolphin.com/SuperNova', type: 'Commercial' },
                    ].map((sr) => (
                      <tr key={sr.name} className="hover:bg-slate-50">
                        <td className="px-4 py-2.5 font-medium text-[#0a1628]">{sr.name}</td>
                        <td className="px-4 py-2.5">
                          <a
                            href={sr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c2410c] hover:underline break-all"
                          >
                            {sr.url}
                          </a>
                        </td>
                        <td className="px-4 py-2.5 text-slate-700">{sr.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sarthi AI Chatbot Assistant */}
      <SarthiChatbot
        isOpen={chatbotOpen}
        onOpen={() => setChatbotOpen(true)}
        onClose={() => setChatbotOpen(false)}
      />
    </div>
  );
}
