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
import MultiLayerMandala from './components/MultiLayerMandala';
import VillageServicesSlideshow from './components/VillageServicesSlideshow';

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
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hero Curtain Recess Physics
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);
  const heroDimOpacity = useTransform(heroScroll, [0, 0.85], [0, 0.45]);

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
          className={`max-w-[1360px] mx-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-5 pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'bg-gradient-to-b from-[#0a1628]/95 via-[#08152c]/90 to-[#050e1f]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]'
              : 'bg-gradient-to-b from-[#0a1628]/85 via-[#08152c]/80 to-[#050e1f]/85 backdrop-blur-xl border border-white/15 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Clean Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0 font-semibold text-[14.5px] sm:text-[15.5px] tracking-[-0.02em] text-white"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span>CSC Digital Seva</span>
          </a>

          {/* Centered Primary Navigation Links — Ordered by User Priority (Citizen Needs First, Clean Text Only) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 2xl:gap-6 text-[12px] xl:text-[12.5px] 2xl:text-[13px] font-medium text-white/75">
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap">
              Jankari Suvidha
            </a>
            <button
              onClick={() => setLocatorOpen(true)}
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Find Centre</span>
            </button>
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">
              Why Become a VLE
            </a>
            <a href="#whats-new" className="hover:text-white transition-colors whitespace-nowrap">
              News & Updates
            </a>
            <a href="#support" className="hover:text-white transition-colors whitespace-nowrap">
              Support
            </a>
          </nav>

          {/* Right Action Cluster — Structured Hierarchy (Utility -> Secondary CTA -> Primary CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Subtle Ghost Newsletter Action */}
            <button
              onClick={scrollToNewsletter}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-white/75 hover:text-white hover:bg-white/10 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap"
              title="Subscribe to Newsletter & Scheme Alerts"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff7733]" />
              <span className="hidden xl:inline">Newsletter</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang((l) => (l === 'EN' ? 'हिं' : 'EN'))}
              className="px-2 py-1 text-[11.5px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'EN' ? 'EN / हिं' : 'हिं / EN'}
            </button>

            <div className="hidden lg:block h-4 w-px bg-white/15 mx-0.5" />

            {/* Secondary CTA: Join as VLE (Pill Button for Action Distinction) */}
            <a
              href="#get-started"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-white text-[12px] font-semibold transition-all whitespace-nowrap shadow-xs"
            >
              Join as VLE
            </a>

            {/* Primary CTA: VLE Portal Login (Sole Solid Saffron Button) */}
            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center gap-1 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-[12px] sm:text-[12.5px] font-semibold transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <span>Login</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileNavOpen((o) => !o)}
              className="lg:hidden p-1.5 text-white cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured Mobile Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden max-w-[1240px] mx-auto mt-2 rounded-2xl bg-[#0a1628]/95 backdrop-blur-xl border border-white/12 p-5 text-sm font-medium text-white pointer-events-auto shadow-xl space-y-4">
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
                  <span className="text-[11px] text-white/40 uppercase">Directory</span>
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center justify-between py-1.5 text-white/85 hover:text-white"
                >
                  <span>Jankari Suvidha</span>
                  <span className="text-[11px] text-white/40 uppercase">Information</span>
                </a>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    setLocatorOpen(true);
                  }}
                  className="w-full flex items-center justify-between py-1.5 text-left text-white/85 hover:text-white cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>Find Nearest CSC Centre</span>
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
                  href="#about"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-white/85 hover:text-white"
                >
                  Why Become a VLE
                </a>
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
                Network & Support
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
                  Help & Support (14599)
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2.5">
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  scrollToNewsletter();
                }}
                className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff7733]" />
                <span>Subscribe</span>
              </button>
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  setLoginOpen(true);
                }}
                className="flex-1 py-2 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-xs font-semibold text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Login</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          03. FLAGSHIP EDITORIAL HERO
          Dedicated 100vh Full Viewport · Pristine CTA Grainy Gradient Wallpaper
          Tactile SVG Micro-Grain · Authentic Rotating Mandala Art Watermarks
          Sticky Curtain Parallax: Stays pinned in place as the next section slides over
          ==================================================================== */}
      <motion.section
        ref={heroRef}
        id="home"
        style={{ scale: heroScale }}
        className="sticky top-0 z-0 h-screen min-h-[640px] flex items-center justify-center bg-[#0a1628] text-white overflow-hidden pt-20 sm:pt-24 origin-top will-change-transform"
      >
        {/* Physical depth scrim that dims the pinned hero subtly as the curtain slides over */}
        <motion.div
          style={{ opacity: heroDimOpacity }}
          className="absolute inset-0 bg-[#071120] z-20 pointer-events-none"
        />

        {/* Pristine High-Resolution Grainy Gradient Wallpaper Layer (Exact CTA Background) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/grainy-gradient-bg-4k.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle deep navy gradient integration on top & bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/55 via-[#0a1628]/25 to-[#0a1628]/75" />

          {/* Native SVG Tactile Micro-Grain Overlay (Infinitely sharp, never pixelates or bands) */}
          <div
            className="absolute inset-0 opacity-[0.24] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>

        {/* TOP-RIGHT CORNER ART GRAPHIC — Multi-Layer Concentric Counter-Rotating Mandala */}
        <div className="absolute -top-72 sm:-top-84 lg:-top-96 -right-48 sm:-right-60 lg:-right-72 pointer-events-none select-none z-1">
          <MultiLayerMandala
            idPrefix="hero-tr"
            className="w-[450px] sm:w-[580px] lg:w-[680px] h-[450px] sm:h-[580px] lg:h-[680px]"
            opacity={0.16}
          />
        </div>

        {/* BOTTOM-LEFT CORNER ART GRAPHIC — Multi-Layer Concentric Counter-Rotating Mandala */}
        <div className="absolute -bottom-52 sm:-bottom-60 lg:-bottom-72 -left-44 sm:-left-52 lg:-left-64 pointer-events-none select-none z-1">
          <MultiLayerMandala
            idPrefix="hero-bl"
            className="w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px]"
            opacity={0.14}
          />
        </div>

        {/* Main Center Content — Filling the 100vh Viewport Comfortably */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 text-center py-8">
          {/* Government Credential Pill — Frosted Glassmorphism */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] backdrop-blur-2xl border border-white/20 text-white text-xs font-semibold tracking-wide mb-6 sm:mb-7 shadow-md mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span>MINISTRY OF ELECTRONICS & IT · DIGITAL INDIA NETWORK</span>
          </div>

          {/* Monumental Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-bold tracking-[-0.035em] text-white leading-[1.06] mb-5 sm:mb-6 max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
            Bringing Essential Services Closer to Every Indian.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[18px] text-[#c5d5ec] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            India's unified assisted public service network — connecting citizens across 28 states and every Gram Panchayat to 400+ authorized government, banking, healthcare, and utility desks through neighborhood Village Level Entrepreneurs.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Become a VLE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => setLocatorOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] hover:from-white/[0.26] hover:to-white/[0.12] backdrop-blur-2xl border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all hover:border-white/35 hover:scale-105 cursor-pointer shadow-md"
            >
              <MapPin className="w-4 h-4 text-[#38bdf8]" />
              <span>Find Nearest Centre</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          04. IMPACT METRICS STRIP — BELOW THE HERO VIEWPORT
          Curtain Overlay: Slides up over the sticky hero section with physical edge & shadow
          ==================================================================== */}
      <section className="relative z-10 bg-[#0a1628] border-t border-white/20 border-b border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] py-10 sm:py-12">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 text-left">
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
        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.15] mb-2.5">
              Every Journey Begins with a Different Need.
            </h2>
            <p className="text-xs sm:text-[14px] text-[#64748b] leading-relaxed max-w-xl mx-auto">
              Empowering local entrepreneurs and connecting citizens to essential public and banking services.
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
                {/* Top Bar: Pill Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.05] backdrop-blur-xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
                    <span>FOR ASPIRING VLES</span>
                  </span>
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
                {/* Top Bar: Pill Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.05] backdrop-blur-xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span>FOR CITIZENS</span>
                  </span>
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
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1]">
                One Centre. A World of Essential Services.
              </h2>
              <p className="text-xs sm:text-[13px] text-[#64748b] mt-1 max-w-lg">
                Choose a category or search verified government and public services available at your nearest centre.
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
        </div>
      </section>

      {/* ====================================================================
          VILLAGE DIGITAL SEVA SLIDESHOW — GROUND REALITIES & SERVICE DELIVERY
          Cinematic documentary slideshow showing clean Indian village centres
          ==================================================================== */}
      <VillageServicesSlideshow />

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
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.1]">
              Real People. Real Journeys. Real Experiences.
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#64748b] mt-1.5 max-w-xl mx-auto">
              Authentic experiences of Village Level Entrepreneurs bringing digital services to every community.
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
          {/* Section Header with 'View all' on the top right */}
          <div className="relative flex flex-col items-center text-center mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0a1628]">
              News & Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed max-w-xl">
              Official circulars, nationwide initiatives, and grassroots announcements.
            </p>

            {/* View All link on top right */}
            <a
              href="#newsletter"
              className="sm:absolute sm:right-0 sm:bottom-1 mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#ff5500] hover:text-[#e04800] transition-colors group cursor-pointer"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4 text-[#ff5500] group-hover:text-[#e04800] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* 3 Bespoke CSC Network Story Cards: Vector Illustration Stage + Seamless Navy Blue Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {NEWS_CARDS.map((card) => (
              <article
                key={card.id}
                onClick={() => setSelectedStory(card)}
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
            className="mt-12 sm:mt-16 rounded-[28px] bg-gradient-to-br from-[#0c1a2e] via-[#0d1f38] to-[#122847] p-7 sm:p-10 lg:p-12 text-white border border-slate-700/60 shadow-lg relative overflow-hidden scroll-mt-28"
          >
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
                <h2 className="text-2xl sm:text-[28px] font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-2.5">
                  Your Safety Is Part of Every Service.
                </h2>
                <p className="text-xs sm:text-[13px] text-white/70 leading-[1.5] mb-5">
                  Recognise official channels, identify fraudulent communication, and access verified assistance safely.
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
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#0a1628] mb-4">
                Frequently Asked Questions
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

          {/* 3 Authentic Frosted Key Prerequisite Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6 text-left">
            {/* Card 01 — Simple Eligibility */}
            <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Building2 className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                Simple Eligibility
              </div>
              <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                Age 18+ with minimum 10th pass qualification and local panchayat residency.
              </div>
            </div>

            {/* Card 02 — MeitY Certification */}
            <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Award className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                MeitY Certification
              </div>
              <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                Complete Telecentre Entrepreneur Course (TEC) with dedicated district onboarding.
              </div>
            </div>

            {/* Card 03 — Unified Digital Wallet */}
            <div className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Wallet className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10 text-[14.5px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                Unified Digital Wallet
              </div>
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
                <li><a href="#about" className="hover:text-[#ff5500]">VLE Opportunity</a></li>
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 focus:border-white/20 text-white text-sm outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071120] border border-white/20 focus:border-white/20 text-white text-sm outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
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
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#071120] border border-white/20 focus:border-white/20 text-white text-xs sm:text-sm outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 transition-colors placeholder:text-white/40"
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
