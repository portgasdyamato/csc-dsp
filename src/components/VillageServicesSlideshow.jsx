import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';

// ============================================================================
// STOREFRONT TEARDROP PIN SVG
// High-craft teardrop map marker with CSC storefront kiosk icon inside
// ============================================================================
function StorefrontMapPin({ selected = false, label = '' }) {
  if (selected) {
    return (
      <g className="cursor-pointer">
        {/* Outer Animated Radar Pulse Rings */}
        <circle cx="0" cy="-22" r="38" fill="#ff5500" fillOpacity="0.11" />
        <circle
          cx="0"
          cy="-22"
          r="26"
          fill="#ff5500"
          fillOpacity="0.22"
          stroke="#ff5500"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        {/* Ground Shadow */}
        <ellipse cx="0" cy="4" rx="8.5" ry="3.2" fill="#0a1628" fillOpacity="0.26" />
        {/* Orange Teardrop Body with Crisp White Rim */}
        <path
          d="M 0 0 C -5 -7 -19 -14 -19 -25 A 19 19 0 1 1 19 -25 C 19 -14 5 -7 0 0 Z"
          fill="#ff5500"
          stroke="#ffffff"
          strokeWidth="2"
        />
        {/* Storefront Kiosk Icon Inside Pin */}
        <g
          transform="translate(-8.5, -34)"
          stroke="#ffffff"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6L3.5 2H13.5L15 6" />
          <path d="M2 6C2 7.2 3 8 4.2 8C5.3 8 6.3 7.2 6.3 6C6.3 7.2 7.3 8 8.5 8C9.7 8 10.7 7.2 10.7 6C10.7 7.2 11.7 8 12.8 8C14 8 15 7.2 15 6" />
          <path d="M3.2 8V14.5H13.8V8" />
          <rect x="6.5" y="10.2" width="4" height="4.3" />
        </g>
        {/* Optional Active Area Label Below Selected Pin */}
        {label && (
          <g transform="translate(0, 17)">
            <rect
              x="-42"
              y="-10"
              width="84"
              height="20"
              rx="10"
              fill="#ffffff"
              fillOpacity="0.95"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#0a1628"
              fontSize="10.5"
              fontWeight="700"
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

function buildNearbyPinsForQuery(basePinCode) {
  const num = parseInt(basePinCode, 10);
  if (Number.isNaN(num)) return DEFAULT_NEARBY_PINS;
  const p1 = String(num).padStart(6, '0');
  const p2 = String(num + 1).padStart(6, '0');
  const p3 = String(Math.max(100000, num - 1)).padStart(6, '0');
  return [
    {
      pinId: 'centre-1',
      pincode: p1,
      title: `Primary Cluster · ${p1}`,
      subtitle: 'Suman Verma & 18 verified VLEs · 1.2 km away',
      badge: `PIN ${p1}`,
    },
    {
      pinId: 'centre-2',
      pincode: p2,
      title: `Adjacent Block · ${p2}`,
      subtitle: 'Rajeshwar Rao & 14 active Kendras · 2.1 km away',
      badge: `PIN ${p2}`,
    },
    {
      pinId: 'centre-6',
      pincode: p3,
      title: `Neighbouring Ward · ${p3}`,
      subtitle: 'Pooja Verma & 11 active Kendras · 2.8 km away',
      badge: `PIN ${p3}`,
    },
  ];
}

export default function VillageServicesSlideshow({ onOpenCalculator }) {
  const [pinQuery, setPinQuery] = useState('');
  const [nearbyClusters, setNearbyClusters] = useState(DEFAULT_NEARBY_PINS);
  const [activeCentre, setActiveCentre] = useState(KENDRA_PINS[0]);
  const [cardVisible, setCardVisible] = useState(true);
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 });

  const handleSelectPin = (pin, updateInput = false) => {
    setActiveCentre(pin);
    if (updateInput) setPinQuery(pin.pincode);
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

    handleSelectPin(updatedPin, true);
  };

  const handleResetView = () => {
    setMapTransform({ scale: 1, x: 0, y: 0 });
    setActiveCentre(KENDRA_PINS[0]);
    setPinQuery('');
    setNearbyClusters(DEFAULT_NEARBY_PINS);
    setCardVisible(true);
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

      {/* Subtle Traditional Indian Mandala Corner Art (Bottom-Left & Top-Right) */}
      <img
        src="/images/mandala-grand-white.png"
        alt=""
        aria-hidden="true"
        className="w-[440px] h-[440px] object-contain absolute -bottom-36 -left-36 opacity-[0.13] pointer-events-none select-none z-1"
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
            <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed mb-6 font-normal">
              Verified Digital Seva Kendras are already thriving in your neighbourhood. Tap a nearby PIN or search yours.
            </p>

            {/* Detected Nearby PIN Codes Label */}
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Detected 3 PIN codes around you</span>
            </div>

            {/* 3 Clean, Airy Clickable Nearby PIN Pills (Zero Truncation, Zero Clutter) */}
            <div className="flex flex-wrap gap-2 mb-7">
              {nearbyClusters.map((cluster) => {
                const isCurrent = activeCentre?.pincode === cluster.pincode;
                const basePin =
                  KENDRA_PINS.find((p) => p.id === cluster.pinId) || KENDRA_PINS[0];
                const targetPin = {
                  ...basePin,
                  pincode: cluster.pincode,
                  cscId: `CSC0${cluster.pincode}45`,
                  address: basePin.address.replace(/\d{6}$/, cluster.pincode),
                };
                const shortArea = cluster.title.split('·')[0].trim();
                return (
                  <button
                    key={cluster.pincode}
                    type="button"
                    onClick={() => handleSelectPin(targetPin, true)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-white text-[#0a1628] border-white shadow-md'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#ff5500]' : 'text-white/75'}`} />
                    <span>{cluster.pincode}</span>
                    <span className={isCurrent ? 'text-slate-500 font-medium' : 'text-white/60 font-medium'}>
                      · {shortArea}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Clean Pill CTA Button */}
            <div>
              <button
                type="button"
                onClick={() => onOpenCalculator?.()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-[13px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer shadow-xs"
              >
                <Calculator className="w-4 h-4 text-white shrink-0" />
                <span>Earning Calculator</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>
            </div>
          </div>

          {/* ================================================================
              RIGHT 8 COLS: CLEAN MAP-FIRST CONTAINER (MINIMAL CHROME)
              ================================================================ */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[24px] p-3.5 sm:p-4 bg-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20">
              {/* Compact Top Toolbar: Clean Title on Left, PIN Input + Find CSC Centre on Right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1 pb-3.5">
                <h3 className="text-base sm:text-[18px] font-bold text-[#0a1628] tracking-tight">
                  CSC Centre Locator
                </h3>

                {/* Compact PIN Search Input + Find CSC Centre CTA */}
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 self-stretch sm:self-auto"
                >
                  <div className="relative flex-1 sm:w-48 flex items-center bg-[#f4f6fa] border border-slate-200/90 focus-within:border-[#0a1628] rounded-xl px-3 py-2 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mr-1.5" />
                    <input
                      type="text"
                      value={pinQuery}
                      onChange={(e) => setPinQuery(e.target.value)}
                      placeholder="Enter PIN"
                      maxLength={18}
                      className="w-full bg-transparent text-xs sm:text-[13px] font-semibold text-[#0a1628] placeholder:text-slate-400 outline-none"
                    />
                    {pinQuery && (
                      <button
                        type="button"
                        onClick={() => setPinQuery('')}
                        aria-label="Clear PIN"
                        className="text-slate-400 hover:text-[#0a1628] ml-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-[13px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs shrink-0"
                  >
                    <Search className="w-3.5 h-3.5 text-white" />
                    <span>Find CSC Centre</span>
                  </button>
                </form>
              </div>

              {/* ==============================================================
                  ARCHITECTURAL VECTOR MAP CANVAS (FITS CLEANLY IN VIEWPORT)
                  Inspired by Live Tracking Reference: Rich City Blocks, Hub Pills,
                  Dashed Network Connectors, River Waterway & Floating Navy Card
                  ============================================================== */}
              <div className="relative w-full h-[370px] sm:h-[395px] lg:h-[405px] rounded-[20px] bg-[#edf1f7] overflow-hidden border border-white/25 shadow-inner select-none">
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
                          scale: Math.min(1.45, +(prev.scale + 0.14).toFixed(2)),
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
                          scale: Math.max(0.86, +(prev.scale - 0.14).toFixed(2)),
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
                    onClick={handleResetView}
                    aria-label="Reset map view"
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
                                className="w-full h-full object-cover object-top"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
