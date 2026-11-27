import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import indiaMap from '@svg-maps/india';
import {
  MapPin,
  Search,
  X,
  Plus,
  Minus,
  LocateFixed,
  Star,
  Clock,
  Layers,
  Navigation,
  Phone,
  Building2,
  Calculator,
  ArrowUpRight,
} from './SolidIcons';

// ============================================================================
// STOREFRONT TEARDROP PIN SVG
// High-craft teardrop map marker with CSC storefront kiosk icon inside
// ============================================================================
function StorefrontMapPin({ selected = false, label = '' }) {
  if (selected) {
    const pillW = Math.max(68, label.length * 6.8 + 22);
    const pillHalf = pillW / 2;
    return (
      <g className="cursor-pointer">
        {/* Clean Subtle Soft Halo Around Pin Head (No Overlapping Double Stroke) */}
        <circle cx="0" cy="-25" r="25" fill="#ff5500" fillOpacity="0.14">
          <animate
            attributeName="r"
            values="22;29;22"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="0.18;0.05;0.18"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Subtle Ground Shadow */}
        <ellipse cx="0" cy="3" rx="6" ry="2" fill="#0a1628" fillOpacity="0.18" />
        {/* Orange Teardrop Body with Crisp White Rim */}
        <path
          d="M 0 0 C -4.5 -6.5 -17 -13.5 -17 -24 A 17 17 0 1 1 17 -24 C 17 -13.5 4.5 -6.5 0 0 Z"
          fill="#ff5500"
          stroke="#ffffff"
          strokeWidth="2.2"
        />
        {/* Storefront Kiosk Icon Inside Pin */}
        <g
          transform="translate(-8, -32.5)"
          stroke="#ffffff"
          strokeWidth="1.65"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6L3.5 2H13.5L15 6" />
          <path d="M2 6C2 7.2 3 8 4.2 8C5.3 8 6.3 7.2 6.3 6C6.3 7.2 7.3 8 8.5 8C9.7 8 10.7 7.2 10.7 6C10.7 7.2 11.7 8 12.8 8C14 8 15 7.2 15 6" />
          <path d="M3.2 8V14.5H13.8V8" />
          <rect x="6.5" y="10.2" width="4" height="4.3" />
        </g>
        {/* Clean Borderless Dark Navy Area Label Below Selected Pin */}
        {label && (
          <g transform="translate(0, 19)">
            <rect
              x={-pillHalf}
              y="-10.5"
              width={pillW}
              height="21"
              rx="10.5"
              fill="#0a1628"
            />
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10.5"
              fontWeight="600"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {label}
            </text>
          </g>
        )}
      </g>
    );
  }

  return (
    <g className="cursor-pointer">
      {/* Ground Shadow */}
      <ellipse cx="0" cy="3" rx="6.5" ry="2.4" fill="#0a1628" fillOpacity="0.22" />
      {/* Dark Navy Teardrop Body with Crisp White Rim */}
      <path
        d="M 0 0 C -3.5 -5 -14 -11 -14 -19 A 14 14 0 1 1 14 -19 C 14 -11 3.5 -5 0 0 Z"
        fill="#0a1628"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      {/* Storefront Kiosk Icon Inside Pin */}
      <g
        transform="translate(-6.5, -26)"
        stroke="#ffffff"
        strokeWidth="1.35"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 5L2.8 1.5H10.2L11.5 5" />
        <path d="M1.5 5C1.5 6 2.3 6.6 3.2 6.6C4.1 6.6 4.8 6 4.8 5C4.8 6 5.6 6.6 6.5 6.6C7.4 6.6 8.2 6 8.2 5C8.2 6 8.9 6.6 9.8 6.6C10.7 6.6 11.5 6 11.5 5" />
        <path d="M2.5 6.6V11.5H10.5V6.6" />
      </g>
    </g>
  );
}

// ============================================================================
// FLOATING CARTROGRAPHIC HUB BADGE (Matches Live Tracking Reference UI)
// ============================================================================
function MapHubBadge({ x, y, name, count }) {
  const width = Math.max(96, name.length * 6.5 + 38);
  const half = width / 2;
  return (
    <g transform={`translate(${x}, ${y})`} className="pointer-events-none">
      {/* Subtle Drop Shadow */}
      <rect
        x={-half}
        y="-12"
        width={width}
        height="24"
        rx="8"
        fill="#0a1628"
        fillOpacity="0.08"
        transform="translate(0, 2)"
      />
      {/* White Pill Body */}
      <rect
        x={-half}
        y="-12"
        width={width}
        height="24"
        rx="8"
        fill="#ffffff"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      {/* Little Bottom Pointer Triangle */}
      <polygon points="-4,12 4,12 0,16" fill="#ffffff" />
      {/* Hub Name + Dot + Count */}
      <text
        x="0"
        y="3.5"
        textAnchor="middle"
        fill="#0a1628"
        fontSize="10.5"
        fontWeight="700"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {name} <tspan fill="#0a1628">•</tspan> <tspan fill="#334155">{count}</tspan>
      </text>
    </g>
  );
}

// ============================================================================
// ACTIVE VLE LOCATIONS ON THE INTERACTIVE MAP
// ============================================================================
const KENDRA_PINS = [
  {
    id: 'centre-1',
    vleName: 'Suman Verma',
    cscId: 'CSC011092345',
    rating: '4.8',
    reviews: 126,
    avatar: '/images/vle-sunita-cutout.png?v=50',
    pincode: '110092',
    areaName: 'Mandawali',
    districtLabel: 'East Delhi Cluster',
    activeCount: '18 Active Kendras',
    address: 'Shop No. 12, Mandawali Main Road, East Delhi – 110092',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM',
    phone: '+91 98765 43210',
    services: ['Aadhaar', 'PAN', 'Bill Payment'],
    moreCount: '+6',
    x: 245,
    y: 222,
  },
  {
    id: 'centre-2',
    vleName: 'Rajeshwar Rao',
    cscId: 'CSC050318518',
    rating: '4.9',
    reviews: 142,
    avatar: '/images/vle-rajeshwar-cutout.png?v=50',
    pincode: '503185',
    areaName: 'Nizamabad',
    districtLabel: 'Telangana Gram Cluster',
    activeCount: '24 Active Kendras',
    address: 'Panchayat Road, Block 4, Main Market – 503185',
    hours: 'Mon – Sat, 8:30 AM – 7:00 PM',
    phone: '+91 98480 14599',
    services: ['Aadhaar', 'Banking', 'PM-Kisan'],
    moreCount: '+8',
    x: 148,
    y: 148,
  },
  {
    id: 'centre-3',
    vleName: 'Gurpreet Singh',
    cscId: 'CSC014200190',
    rating: '4.9',
    reviews: 98,
    avatar: '/images/vle-gurpreet-cutout.png?v=50',
    pincode: '142001',
    areaName: 'Moga Main',
    districtLabel: 'Punjab Rural Cluster',
    activeCount: '15 Active Kendras',
    address: 'Plot 18, Near Community Health Centre, Moga – 142001',
    hours: 'Mon – Sat, 9:00 AM – 6:30 PM',
    phone: '+91 94150 14599',
    services: ['DigiPay', 'FASTag', 'Passport'],
    moreCount: '+5',
    x: 96,
    y: 266,
  },
  {
    id: 'centre-4',
    vleName: 'Meenakshi Nair',
    cscId: 'CSC067800154',
    rating: '4.8',
    reviews: 114,
    avatar: '/images/vle-meenakshi-cutout.png?v=50',
    pincode: '678001',
    areaName: 'Palakkad',
    districtLabel: 'Kerala Panchayat Hub',
    activeCount: '21 Active Kendras',
    address: 'Shop 7, Vikas Marg Main Chowk, Palakkad – 678001',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM',
    phone: '+91 98220 14599',
    services: ['e-District', 'PAN', 'Insurance'],
    moreCount: '+7',
    x: 205,
    y: 342,
  },
  {
    id: 'centre-5',
    vleName: 'Arjun Sharma',
    cscId: 'CSC017100112',
    rating: '4.7',
    reviews: 89,
    avatar: '/images/vle-tashi-cutout.png?v=50',
    pincode: '171001',
    areaName: 'Shimla Hub',
    districtLabel: 'Himachal Valley Cluster',
    activeCount: '12 Active Kendras',
    address: 'Station Road, Near GramSeva Kendra – 171001',
    hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
    phone: '+91 94140 14599',
    services: ['Aadhaar', 'Pension', 'Electricity'],
    moreCount: '+4',
    x: 345,
    y: 162,
  },
  {
    id: 'centre-6',
    vleName: 'Pooja Verma',
    cscId: 'CSC022600171',
    rating: '4.9',
    reviews: 164,
    avatar: '/images/vle-sunita-cutout.png?v=50',
    pincode: '226001',
    areaName: 'Shakarpur',
    districtLabel: 'Lucknow Division Hub',
    activeCount: '29 Active Kendras',
    address: 'Main Bazaar Road, Ward 9, Sector 2 – 226001',
    hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
    phone: '+91 98930 14599',
    services: ['Banking', 'Aadhaar', 'Ayushman'],
    moreCount: '+6',
    x: 392,
    y: 268,
  },
];

// 3 Nearby PIN Codes Detected Around the User's Area
const DEFAULT_NEARBY_PINS = [
  {
    pinId: 'centre-1',
    pincode: '110092',
    title: 'Mandawali · East Delhi',
    subtitle: 'Suman Verma & 18 verified VLEs · 1.2 km away',
    badge: 'PIN 110092',
  },
  {
    pinId: 'centre-2',
    pincode: '110091',
    title: 'Mayur Vihar · Block 4',
    subtitle: 'Rajeshwar Rao & 14 active Kendras · 2.1 km away',
    badge: 'PIN 110091',
  },
  {
    pinId: 'centre-6',
    pincode: '110093',
    title: 'Shakarpur · Vikas Marg',
    subtitle: 'Pooja Verma & 11 active Kendras · 2.8 km away',
    badge: 'PIN 110093',
  },
];

function buildNearbyPinsForQuery(basePinCode, areaLabel = '') {
  const num = parseInt(basePinCode, 10);
  if (Number.isNaN(num)) return [];
  const p1 = String(num).padStart(6, '0');
  const p2 = String(num + 1).padStart(6, '0');
  const p3 = String(Math.max(100000, num - 1)).padStart(6, '0');
  const primaryTitle = areaLabel ? `${areaLabel}` : `Area ${p1}`;
  return [
    {
      pinId: 'centre-1',
      pincode: p1,
      title: primaryTitle,
      subtitle: '18 verified VLEs · 1.2 km away',
      badge: `PIN ${p1}`,
    },
    {
      pinId: 'centre-2',
      pincode: p2,
      title: `Nearby Block`,
      subtitle: '14 active Kendras · 2.1 km away',
      badge: `PIN ${p2}`,
    },
    {
      pinId: 'centre-6',
      pincode: p3,
      title: `Adjacent Ward`,
      subtitle: '11 active Kendras · 2.8 km away',
      badge: `PIN ${p3}`,
    },
  ];
}

export default function VillageServicesSlideshow({ onOpenCalculator }) {
  const [pinQuery, setPinQuery] = useState('');
  const [nearbyClusters, setNearbyClusters] = useState([]);
  const [locating, setLocating] = useState(false);
  const [locationHint, setLocationHint] = useState('');
  const [activeCentre, setActiveCentre] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 });

  const detectUserLocation = (silent = false) => {
    if (!navigator?.geolocation) {
      if (!silent) setLocationHint('Enter your 6-digit PIN code in the search box.');
      return;
    }
    if (!silent) setLocating(true);
    setLocationHint('');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const addr = data?.address || {};
          const rawPin = String(addr.postcode || '').replace(/\D/g, '').slice(0, 6);
          const areaName =
            addr.suburb || addr.village || addr.town || addr.city_district || addr.city || 'Your Area';

          if (/^\d{6}$/.test(rawPin)) {
            setNearbyClusters(buildNearbyPinsForQuery(rawPin, areaName));
          } else {
            setLocationHint('Could not detect a 6-digit PIN here. Please enter your PIN.');
          }
        } catch {
          if (!silent) {
            setLocationHint('Unable to look up PIN for your coordinates. Please enter your PIN.');
          }
        } finally {
          setLocating(false);
        }
      },
      () => {
        setLocating(false);
        if (!silent) {
          setLocationHint('Location access declined. Enter your 6-digit PIN code on the map.');
        }
      },
      { timeout: 6000 }
    );
  };

  // Auto-detect only if browser location permission is already granted (no intrusive prompt on page load)
  useEffect(() => {
    if (navigator?.permissions?.query) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((status) => {
          if (status.state === 'granted') {
            detectUserLocation(true);
          }
        })
        .catch(() => { });
    }
  }, []);

  const handleSelectPin = (pin) => {
    setActiveCentre(pin);
    setCardVisible(true);
    setMapTransform({
      scale: 1.07,
      x: (245 - pin.x) * 0.24,
      y: (222 - pin.y) * 0.24,
    });
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    const q = pinQuery.trim();
    if (!q) return;

    const exact = KENDRA_PINS.find((p) => p.pincode === q);
    const basePin =
      exact ||
      KENDRA_PINS[
      q.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) %
      KENDRA_PINS.length
      ];

    const updatedPin = /^\d{6}$/.test(q)
      ? {
        ...basePin,
        pincode: q,
        cscId: `CSC0${q}45`,
        address: basePin.address.replace(/\d{6}$/, q),
      }
      : basePin;

    if (/^\d{6}$/.test(q)) {
      setNearbyClusters(buildNearbyPinsForQuery(q));
    }

    handleSelectPin(updatedPin);
  };

  const handleResetView = () => {
    setMapTransform({ scale: 1, x: 0, y: 0 });
    setActiveCentre(null);
    setPinQuery('');
    setCardVisible(false);
  };

  return (
    <section
      id="locator"
      className="relative z-10 min-h-screen lg:h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-12 px-5 sm:px-8 bg-[#0a1628] text-white border-b border-white/10 overflow-hidden scroll-mt-20"
    >
      {/* ====================================================================
          UNIFORM BRAND NAVY (#0a1628) STAGE WITH ANALOG FILM GRAIN
          Matches VleSupportAndHardwareSection & Get Started Section Vibe
          ==================================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 55% 45%, #0f1f38 0%, #0a1628 65%, #071120 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.32] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='locatorGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78  0 0 0 0 0.84  0 0 0 0 0.94  0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23locatorGrain)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Subtle Traditional Indian Mandala Corner Art (Tucked Cleanly Away from Text) */}
      <img
        src="/images/mandala-grand-white.png"
        alt=""
        aria-hidden="true"
        className="w-[400px] h-[400px] object-contain absolute -bottom-56 -left-56 opacity-[0.06] pointer-events-none select-none z-1"
      />
      <img
        src="/images/mandala-grand-white.png"
        alt=""
        aria-hidden="true"
        className="w-[420px] h-[420px] object-contain absolute -top-36 -right-36 opacity-[0.11] pointer-events-none select-none z-1"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ================================================================
              LEFT 4 COLS: CALM, LOW-COGNITIVE EDITORIAL + 3 COMPACT PIN PILLS
              ================================================================ */}
          <div className="lg:col-span-4">
            {/* Display Headline (Season Mix Serif) */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-3 drop-shadow-sm">
              See Other VLEs &amp; CSC Centres Right Around You.
            </h2>

            {/* Concise Subtitle (Matter Sans) */}
            <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed mb-7 font-normal">
              Have questions or doubts before starting? Look up thriving VLEs near you, explore their centres, and contact them directly for real-world guidance.
            </p>

            {/* Primary & Secondary Pill CTA Buttons (Side by Side) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById('locator-pin-input');
                  if (input) {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => input.focus(), 250);
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs whitespace-nowrap shrink-0"
              >
                <Search className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Find CSC Centre</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenCalculator?.()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-b from-white/[0.16] to-white/[0.06] hover:from-white/[0.24] hover:to-white/[0.10] backdrop-blur-xl border border-white/20 text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer shadow-xs whitespace-nowrap shrink-0"
              >
                <Calculator className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Earning Calculator</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>
            </div>
          </div>

          {/* ================================================================
              RIGHT 8 COLS: CLEAN MAP-FIRST CONTAINER (MINIMAL CHROME)
              ================================================================ */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[26px] p-2.5 sm:p-3 bg-gradient-to-br from-white/[0.14] via-white/[0.06] to-white/[0.02] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20">
              {/* ==============================================================
                  INTERACTIVE MAP CANVAS:
                  - Default Mode (!activeCentre): India Overview Map + Pulsing Regional Hubs
                  - Active PIN Mode (activeCentre): Detailed Local Street & Kendra Map
                  ============================================================== */}
              <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[430px] rounded-[20px] bg-[#edf1f7] overflow-hidden border border-white/25 shadow-inner select-none">
                {/* Floating PIN Search Control Inside Map Container:
                    - India Overview (!activeCentre): Bottom-Right compact square card with "Enter PIN" heading
                    - Detailed Pin View (activeCentre): Top-Left beside zoom/recenter controls */}
                {!activeCentre ? (
                  <form
                    onSubmit={handleSearch}
                    autoComplete="off"
                    className="absolute bottom-6 right-5 sm:bottom-10 sm:right-8 z-30 w-[225px] sm:w-[260px] rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl p-3.5 sm:p-4"
                  >
                    <label
                      htmlFor="locator-pin-input"
                      className="block text-[13px] font-bold text-[#0a1628] tracking-tight mb-0.5"
                    >
                      Enter PIN
                    </label>
                    <p className="text-[11px] text-slate-500 mb-2.5">
                      Search nearest Digital Seva Kendra
                    </p>
                    <div className="relative flex items-center bg-slate-50 border border-slate-200 focus-within:border-slate-300 rounded-lg p-1 pl-2.5 gap-1.5 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />
                      <input
                        id="locator-pin-input"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        value={pinQuery}
                        onChange={(e) => setPinQuery(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="e.g. 110092"
                        maxLength={6}
                        className="w-full min-w-0 bg-transparent text-xs font-semibold text-[#0a1628] placeholder:text-slate-400 outline-none focus:outline-none focus-visible:outline-none"
                      />
                      {pinQuery && (
                        <button
                          type="button"
                          onClick={handleResetView}
                          aria-label="Clear PIN"
                          className="text-slate-400 hover:text-[#0a1628] p-1 cursor-pointer shrink-0 focus:outline-none"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        type="submit"
                        aria-label="Find CSC Centre"
                        className="w-8 h-8 rounded-md bg-[#ff5500] hover:bg-[#e04800] text-white grid place-items-center transition-all active:scale-95 cursor-pointer shrink-0"
                      >
                        <Search className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <form
                    onSubmit={handleSearch}
                    className="absolute top-3.5 left-14 sm:left-16 z-30 w-[calc(100%-4.5rem)] max-w-[230px] sm:w-56"
                  >
                    <div className="relative flex items-center bg-white/95 backdrop-blur-md border border-slate-200 focus-within:border-slate-300 rounded-xl p-1 pl-2.5 sm:pl-3 gap-1.5 transition-colors shadow-md">
                      <label htmlFor="locator-pin-input" className="sr-only">
                        Enter 6-digit PIN code to locate CSC centres
                      </label>
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />
                      <input
                        id="locator-pin-input"
                        type="text"
                        inputMode="numeric"
                        value={pinQuery}
                        onChange={(e) => setPinQuery(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="Enter PIN"
                        maxLength={6}
                        className="w-full min-w-0 bg-transparent text-xs sm:text-[13px] font-semibold text-[#0a1628] placeholder:text-slate-400 outline-none focus:outline-none focus-visible:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleResetView}
                        aria-label="Close detailed view and return to India map"
                        title="Return to India map"
                        className="text-slate-500 hover:text-[#0a1628] p-1 cursor-pointer shrink-0 focus:outline-none"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="submit"
                        aria-label="Find CSC Centre"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white grid place-items-center transition-all active:scale-95 cursor-pointer shrink-0"
                      >
                        <Search className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </form>
                )}
                <AnimatePresence mode="wait">
                  {!activeCentre ? (
                    <motion.div
                      key="india-overview-map"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.08 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full bg-[#e8eef6] flex items-center justify-center"
                    >
                      {/* Subtle Cartographic Grid Backdrop */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-45 pointer-events-none"
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                          backgroundSize: '36px 36px',
                        }}
                      />

                      {/* Detailed Official India State-by-State Vector Map */}
                      <svg
                        viewBox={indiaMap.viewBox}
                        role="img"
                        aria-label="Interactive map of India showing CSC centres across all states and union territories"
                        className="relative z-10 w-full h-[94%] max-w-[540px] drop-shadow-[0_10px_24px_rgba(10,22,40,0.12)]"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g>
                          {indiaMap.locations.map((loc) => {
                            const isHovered = hoveredState === loc.name;
                            const selectStatePin = () => {
                              const statePins = {
                                an: '744101', ap: '520001', ar: '791111', as: '781001', br: '800001',
                                ch: '160001', ct: '492001', dn: '396230', dd: '396210', dl: '110092',
                                ga: '403001', gj: '380001', hr: '122001', hp: '171001', jk: '190001',
                                jh: '834001', ka: '560001', kl: '682001', ld: '682555', mp: '462001',
                                mh: '400001', mn: '795001', ml: '793001', mz: '796001', nl: '797001',
                                or: '751001', py: '605001', pb: '141001', rj: '302001', sk: '737101',
                                tn: '600001', tg: '500001', tr: '799001', up: '226001', ut: '248001',
                                wb: '700001', la: '194101',
                              };
                              const pin = statePins[loc.id] || '110092';
                              const matched = KENDRA_PINS[0];
                              setPinQuery(pin);
                              handleSelectPin({
                                ...matched,
                                pincode: pin,
                                cscId: `CSC0${pin}45`,
                                address: `${loc.name}, PIN ${pin}`,
                              });
                            };
                            return (
                              <path
                                key={loc.id}
                                d={loc.path}
                                tabIndex={0}
                                role="button"
                                aria-label={`Explore CSC centres in ${loc.name}`}
                                fill={isHovered ? '#fed7aa' : '#ffffff'}
                                stroke={isHovered ? '#ff5500' : '#94a3b8'}
                                strokeWidth={isHovered ? 1.5 : 0.9}
                                strokeLinejoin="round"
                                onMouseEnter={() => setHoveredState(loc.name)}
                                onMouseLeave={() => setHoveredState(null)}
                                onFocus={() => setHoveredState(loc.name)}
                                onBlur={() => setHoveredState(null)}
                                onClick={selectStatePin}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    selectStatePin();
                                  }
                                }}
                                className="transition-colors duration-200 cursor-pointer outline-none"
                              />
                            );
                          })}
                        </g>

                        {/* Pan-India Network Mesh Connecting Every State & UT */}
                        {(() => {
                          const stateNodes = [
                            { id: 'jk', label: 'Srinagar', pin: '190001', x: 158, y: 82 },
                            { id: 'la', label: 'Leh', pin: '194101', x: 205, y: 65 },
                            { id: 'hp', label: 'Shimla', pin: '171001', x: 194, y: 142 },
                            { id: 'pb', label: 'Chandigarh', pin: '160001', x: 170, y: 158 },
                            { id: 'uk', label: 'Dehradun', pin: '248001', x: 218, y: 172 },
                            { id: 'hr', label: 'Gurugram', pin: '122001', x: 176, y: 196 },
                            { id: 'dl', label: 'Delhi', pin: '110092', x: 188, y: 210, major: true },
                            { id: 'rj', label: 'Jaipur', pin: '302001', x: 145, y: 255, major: true },
                            { id: 'up', label: 'Lucknow', pin: '226001', x: 266, y: 242 },
                            { id: 'gj', label: 'Ahmedabad', pin: '380001', x: 92, y: 332 },
                            { id: 'mp', label: 'Bhopal', pin: '462001', x: 215, y: 340, major: true },
                            { id: 'br', label: 'Patna', pin: '800001', x: 370, y: 270, major: true },
                            { id: 'jh', label: 'Ranchi', pin: '834001', x: 368, y: 325 },
                            { id: 'wb', label: 'Kolkata', pin: '700001', x: 424, y: 334, major: true },
                            { id: 'sk', label: 'Gangtok', pin: '737101', x: 432, y: 222 },
                            { id: 'as', label: 'Guwahati', pin: '781001', x: 492, y: 244, major: true },
                            { id: 'ar', label: 'Itanagar', pin: '791111', x: 540, y: 218 },
                            { id: 'nl', label: 'Kohima', pin: '797001', x: 542, y: 258 },
                            { id: 'mn', label: 'Imphal', pin: '795001', x: 536, y: 282 },
                            { id: 'mz', label: 'Aizawl', pin: '796001', x: 520, y: 306 },
                            { id: 'tr', label: 'Agartala', pin: '799001', x: 492, y: 300 },
                            { id: 'ml', label: 'Shillong', pin: '793001', x: 492, y: 264 },
                            { id: 'ct', label: 'Raipur', pin: '492001', x: 298, y: 375 },
                            { id: 'od', label: 'Bhubaneswar', pin: '751001', x: 365, y: 394 },
                            { id: 'mh', label: 'Mumbai', pin: '400001', x: 122, y: 440, major: true },
                            { id: 'pn', label: 'Pune', pin: '411001', x: 146, y: 462 },
                            { id: 'ga', label: 'Panaji', pin: '403001', x: 125, y: 512 },
                            { id: 'tg', label: 'Hyderabad', pin: '500001', x: 228, y: 495, major: true },
                            { id: 'ap', label: 'Vijayawada', pin: '520001', x: 274, y: 505 },
                            { id: 'ka', label: 'Bengaluru', pin: '560001', x: 196, y: 575, major: true },
                            { id: 'tn', label: 'Chennai', pin: '600001', x: 252, y: 576 },
                            { id: 'kl', label: 'Kochi', pin: '682001', x: 176, y: 626 },
                          ];

                          const links = [
                            ['jk', 'la'], ['jk', 'hp'], ['jk', 'pb'], ['la', 'hp'], ['hp', 'uk'], ['hp', 'pb'],
                            ['pb', 'hr'], ['uk', 'dl'], ['hr', 'dl'], ['dl', 'rj'], ['dl', 'up'], ['rj', 'gj'],
                            ['rj', 'mp'], ['up', 'mp'], ['up', 'br'], ['gj', 'mp'], ['gj', 'mh'], ['mp', 'ct'],
                            ['mp', 'mh'], ['br', 'jh'], ['br', 'sk'], ['br', 'wb'], ['jh', 'wb'], ['jh', 'ct'],
                            ['jh', 'od'], ['wb', 'od'], ['wb', 'sk'], ['sk', 'as'], ['as', 'ar'], ['as', 'ml'],
                            ['as', 'nl'], ['ar', 'nl'], ['nl', 'mn'], ['mn', 'mz'], ['ml', 'tr'], ['tr', 'mz'],
                            ['ct', 'od'], ['ct', 'tg'], ['od', 'ap'], ['mh', 'pn'], ['pn', 'ga'], ['pn', 'tg'],
                            ['ga', 'ka'], ['tg', 'ap'], ['tg', 'ka'], ['ap', 'tn'], ['ka', 'tn'], ['ka', 'kl'],
                            ['tn', 'kl'],
                          ];

                          const nodeMap = Object.fromEntries(stateNodes.map((n) => [n.id, n]));

                          return (
                            <>
                              <g stroke="#ff5500" strokeWidth="1.2" strokeDasharray="3.5 3.5" opacity="0.38" fill="none" pointerEvents="none">
                                {links.map(([a, b]) => {
                                  const n1 = nodeMap[a];
                                  const n2 = nodeMap[b];
                                  if (!n1 || !n2) return null;
                                  return <line key={`${a}-${b}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} />;
                                })}
                              </g>

                              {stateNodes.map((hub) => (
                                <g
                                  key={hub.id}
                                  onMouseEnter={() => setHoveredState(hub.label)}
                                  onMouseLeave={() => setHoveredState(null)}
                                  onClick={() => {
                                    setPinQuery(hub.pin);
                                    const matched = KENDRA_PINS[0];
                                    handleSelectPin({
                                      ...matched,
                                      pincode: hub.pin,
                                      cscId: `CSC0${hub.pin}45`,
                                      address: `${hub.label}, PIN ${hub.pin}`,
                                    });
                                  }}
                                  className="cursor-pointer"
                                >
                                  {hub.major && (
                                    <circle cx={hub.x} cy={hub.y} r="15" fill="#ff5500" opacity="0.16">
                                      <animate attributeName="r" values="8;18;8" dur="2.6s" repeatCount="indefinite" />
                                      <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.6s" repeatCount="indefinite" />
                                    </circle>
                                  )}
                                  <circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r={hub.major ? 5.5 : 3.8}
                                    fill="#ff5500"
                                    stroke="#ffffff"
                                    strokeWidth={hub.major ? 2 : 1.5}
                                  />
                                </g>
                              ))}
                            </>
                          );
                        })()}
                      </svg>

                      {/* Top-Left Live State Hover Badge */}
                      <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0a1628]/10 text-[11.5px] font-semibold text-[#0a1628] shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
                        <span>{hoveredState ? `${hoveredState} · Active CSCs` : 'All 28 States & 8 UTs'}</span>
                      </div>

                      {/* Bottom-Left Floating Guide Pill */}
                      <div className="hidden sm:inline-flex absolute bottom-3.5 left-3.5 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a1628]/90 backdrop-blur-md text-white text-[11.5px] shadow-lg border border-white/15">
                        <span className="font-medium">
                          5.5L+ Centres — enter PIN or click any state
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="local-detail-map"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full"
                    >
                      <svg
                        viewBox="0 0 820 420"
                        className="w-full h-full object-cover"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <motion.g
                          animate={{
                            scale: mapTransform.scale,
                            x: mapTransform.x,
                            y: mapTransform.y,
                          }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: '245px 222px' }}
                        >
                          {/* Base Cartographic Canvas */}
                          <rect width="820" height="420" fill="#edf1f7" />

                          {/* Architectural Urban & Village Block Polygons (High-Craft Map Depth) */}
                          <g fill="#e2e8f0">
                            <polygon points="18,16 128,12 142,86 26,98" />
                            <polygon points="154,14 278,8 294,76 166,88" />
                            <polygon points="308,10 442,14 426,92 318,82" />
                            <polygon points="462,16 610,12 595,96 452,88" />
                            <polygon points="24,114 138,104 152,196 34,208" />
                            <polygon points="168,102 298,92 314,188 182,198" />
                            <polygon points="332,98 456,106 442,196 324,186" />
                            <polygon points="474,108 618,112 602,208 462,198" />
                            <polygon points="32,224 148,214 162,312 42,324" />
                            <polygon points="178,212 312,202 328,302 192,314" />
                            <polygon points="344,204 468,214 452,306 338,298" />
                            <polygon points="48,338 168,326 182,408 56,412" />
                            <polygon points="198,328 322,316 334,404 208,412" />
                          </g>

                          {/* Secondary Inner Sub-Blocks for Authentic Cartographic Detail */}
                          <g fill="#e7edf5">
                            <polygon points="176,110 232,105 240,152 182,158" />
                            <polygon points="246,104 292,100 298,146 252,150" />
                            <polygon points="186,220 248,214 256,266 194,272" />
                            <polygon points="262,212 306,208 314,260 268,264" />
                            <polygon points="342,108 398,112 392,158 336,152" />
                          </g>

                          {/* Soft Green Parks & Panchayat Grounds */}
                          <g fill="#d6ebe1">
                            <polygon points="168,28 238,22 246,72 176,78" />
                            <polygon points="344,112 414,118 406,168 338,162" />
                            <polygon points="56,238 128,230 136,288 64,296" />
                            <polygon points="212,336 286,328 294,386 220,394" />
                          </g>

                          {/* Yamuna River / Canal Waterway with Soft Bank Casing */}
                          <path
                            d="M 295 430 C 330 335, 445 305, 555 375 C 605 405, 650 420, 700 430"
                            stroke="#bae6fd"
                            strokeWidth="26"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 295 430 C 330 335, 445 305, 555 375 C 605 405, 650 420, 700 430"
                            stroke="#7dd3fc"
                            strokeWidth="14"
                            fill="none"
                            strokeLinecap="round"
                            opacity="0.75"
                          />

                          {/* Minor Local Street Grid */}
                          <g stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none">
                            <path d="M 0 96 L 820 74" />
                            <path d="M 0 162 L 820 142" />
                            <path d="M 0 210 L 820 192" />
                            <path d="M 0 272 L 820 254" />
                            <path d="M 0 322 L 820 308" />
                            <path d="M 0 378 L 820 362" />

                            <path d="M 88 0 L 128 420" />
                            <path d="M 156 0 L 194 420" />
                            <path d="M 238 0 L 274 420" />
                            <path d="M 318 0 L 352 420" />
                            <path d="M 402 0 L 436 420" />
                            <path d="M 468 0 L 504 420" />
                            <path d="M 552 0 L 588 420" />
                          </g>

                          {/* Major Arterial Highways & Ring Roads */}
                          <g stroke="#ffffff" strokeWidth="8.5" strokeLinecap="round" fill="none">
                            <path d="M -20 278 Q 230 212 520 76 L 840 -10" />
                            <path d="M 118 -15 L 296 435" />
                            <path d="M 348 -15 L 478 435" />
                            <path d="M -15 112 Q 310 175 835 268" />
                          </g>

                          {/* Subtle Road Centerline Tint on Major Arterials */}
                          <g stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 6" fill="none">
                            <path d="M -20 278 Q 230 212 520 76 L 840 -10" />
                            <path d="M 118 -15 L 296 435" />
                          </g>

                          {/* Interactive CSC Storefront Pins */}
                          {KENDRA_PINS.map((pin) => {
                            const isSelected = activeCentre?.id === pin.id;
                            return (
                              <g
                                key={pin.id}
                                transform={`translate(${pin.x}, ${pin.y})`}
                                onClick={() => handleSelectPin(pin)}
                              >
                                <StorefrontMapPin
                                  selected={isSelected}
                                  label={isSelected ? pin.areaName : ''}
                                />
                              </g>
                            );
                          })}
                        </motion.g>
                      </svg>

                      {/* Left Floating Zoom & Recenter Controls */}
                      <div className="absolute top-3.5 left-3.5 z-20 flex flex-col gap-2">
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/80 divide-y divide-slate-200/80 overflow-hidden">
                          <button
                            type="button"
                            onClick={() =>
                              setMapTransform((prev) => ({
                                ...prev,
                                scale: Math.min(2.2, +(prev.scale + 0.25).toFixed(2)),
                              }))
                            }
                            aria-label="Zoom in"
                            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center text-[#0a1628] hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setMapTransform((prev) => ({
                                ...prev,
                                scale: Math.max(0.75, +(prev.scale - 0.25).toFixed(2)),
                              }))
                            }
                            aria-label="Zoom out"
                            className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center text-[#0a1628] hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (activeCentre) {
                              setMapTransform({
                                scale: 1.07,
                                x: (245 - activeCentre.x) * 0.24,
                                y: (222 - activeCentre.y) * 0.24,
                              });
                              setCardVisible(true);
                            }
                          }}
                          aria-label="Recenter on active centre"
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 grid place-items-center text-[#0a1628] hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <LocateFixed className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Bottom-Left Legend Pill (Selected Centre | Other Centre) */}
                      <div className="absolute bottom-3.5 left-3.5 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-3 text-[11px] font-semibold text-[#0a1628]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] inline-block" />
                          <span>Selected Centre</span>
                        </span>
                        <span className="h-3 w-px bg-slate-200" />
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0a1628] inline-block" />
                          <span>Other Centre</span>
                        </span>
                      </div>

                      {/* ============================================================
                    FLOATING DARK NAVY GLASSMORPHIC VLE PROFILE CARD
                    ============================================================ */}
                      <AnimatePresence mode="wait">
                        {cardVisible && activeCentre && (
                          <motion.div
                            key={activeCentre.id + activeCentre.pincode}
                            initial={{ opacity: 0, x: 16, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 12, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-3.5 bottom-3.5 right-3.5 w-[285px] sm:w-[325px] rounded-[18px] bg-[#0a1628] text-white p-4 shadow-[0_24px_55px_rgba(10,22,40,0.45)] border border-white/15 z-30 flex flex-col justify-between"
                          >
                            <div>
                              {/* Header: Orange Storefront Badge + CSC Centre + Close X */}
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#ff5500] grid place-items-center shrink-0 shadow-xs">
                                    <svg
                                      viewBox="0 0 16 16"
                                      className="w-3.5 h-3.5 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                    >
                                      <path d="M2 6L3.2 2.5H12.8L14 6" />
                                      <path d="M3 6.5V13.5H13V6.5" />
                                      <rect x="6.5" y="9" width="3" height="4.5" />
                                    </svg>
                                  </div>
                                  <h4 className="text-[15px] font-bold text-white tracking-tight">
                                    CSC Centre
                                  </h4>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => setCardVisible(false)}
                                  aria-label="Close card"
                                  className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>

                              {/* VLE Profile Row */}
                              <div className="flex items-center justify-between gap-2.5 pb-3 border-b border-white/12">
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className="w-12 h-12 rounded-full bg-white overflow-hidden shrink-0 border-2 border-white/25 shadow-xs">
                                    <img
                                      src={activeCentre.avatar}
                                      alt={activeCentre.vleName}
                                      className="w-full h-full object-cover object-top scale-[1.85] origin-[50%_12%]"
                                    />
                                  </div>

                                  <div className="min-w-0">
                                    <div className="text-[14.5px] font-bold text-white leading-tight truncate">
                                      {activeCentre.vleName}
                                    </div>
                                    <div className="text-[10.5px] text-slate-300 mt-1 font-mono">
                                      CSC ID: {activeCentre.cscId}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col items-end shrink-0">
                                  <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-white">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span>{activeCentre.rating}</span>
                                  </span>
                                  <span className="text-[10.5px] text-slate-300 mt-0.5 font-medium">
                                    {activeCentre.reviews} reviews
                                  </span>
                                </div>
                              </div>

                              {/* Details Table (Address, Working Hours, Services) */}
                              <div className="divide-y divide-white/10 text-[11.5px]">
                                <div className="py-2.5 flex items-start gap-2">
                                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                  <span className="text-slate-400 w-18 shrink-0">Address</span>
                                  <span className="text-white/95 font-medium leading-snug line-clamp-2">
                                    {activeCentre.address}
                                  </span>
                                </div>

                                <div className="py-2.5 flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <span className="text-slate-400 w-18 shrink-0">Working Hours</span>
                                  <span className="text-white/95 font-medium truncate">
                                    {activeCentre.hours}
                                  </span>
                                </div>

                                <div className="py-2.5 flex items-center gap-2">
                                  <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <span className="text-slate-400 w-18 shrink-0">Services</span>
                                  <div className="flex flex-wrap items-center gap-1">
                                    {activeCentre.services.map((svc) => (
                                      <span
                                        key={svc}
                                        className="px-2 py-0.5 rounded-md bg-white/[0.12] border border-white/15 text-[10px] font-medium text-white"
                                      >
                                        {svc}
                                      </span>
                                    ))}
                                    <span className="px-1.5 py-0.5 rounded-md bg-white/[0.12] border border-white/15 text-[10px] font-semibold text-white/85">
                                      {activeCentre.moreCount}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Action Buttons */}
                            <div className="grid grid-cols-2 gap-2 pt-1.5">
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  'CSC Centre ' + activeCentre.address
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-3 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md"
                              >
                                <Navigation className="w-3 h-3 fill-white" />
                                <span>Get Directions</span>
                              </a>

                              <a
                                href={`tel:${activeCentre.phone}`}
                                className="py-2 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 text-white text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Contact VLE</span>
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
