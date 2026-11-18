import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Search,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Phone,
  ArrowUpRight,
  Plus,
  Minus,
  RotateCcw,
} from 'lucide-react';

// ============================================================================
// VERIFIED VLE PINS DATA ACROSS INDIA (Mapped to 600x520 SVG coordinate space)
// ============================================================================
const INDIA_PINS = [
  {
    id: 'ts',
    name: 'Gram Panchayat Kendra, Bodhan',
    vle: 'Rajeshwar Rao',
    idCode: 'CSC-TS-503185',
    pincode: '503185',
    district: 'Nizamabad, Telangana',
    address: 'Panchayat Bhavan, Main Road, Bodhan',
    rating: 4.9,
    servedCount: 420,
    services: ['Aadhaar eKYC', 'AEPS Cash', 'PM-Kisan', 'Ayushman'],
    timing: '8:30 AM – 7:30 PM',
    phone: '+91 98480 14599',
    x: 275,
    y: 335,
  },
  {
    id: 'up',
    name: 'Digital Seva Kendra, Lucknow Rural',
    vle: 'Sunita Devi',
    idCode: 'CSC-UP-226001',
    pincode: '226001',
    district: 'Lucknow, Uttar Pradesh',
    address: 'Near Health Centre, Mohanlalganj',
    rating: 4.9,
    servedCount: 510,
    services: ['Aadhaar Update', 'DigiPay Cash', 'Pension', 'FASTag'],
    timing: '9:00 AM – 8:00 PM',
    phone: '+91 94150 14599',
    x: 310,
    y: 215,
  },
  {
    id: 'mp',
    name: 'CSC Academy & Skilling Centre',
    vle: 'Deepak Shrivastava',
    idCode: 'CSC-MP-471001',
    pincode: '471001',
    district: 'Chhatarpur, Madhya Pradesh',
    address: 'Gram Panchayat Bhawan, Chhatarpur',
    rating: 5.0,
    servedCount: 620,
    services: ['CSC Academy', 'Fasal Bima', 'Micro-ATM', 'Soil Cards'],
    timing: '8:30 AM – 7:00 PM',
    phone: '+91 98930 14599',
    x: 265,
    y: 255,
  },
  {
    id: 'rj',
    name: 'Land Records & Revenue Deed Centre',
    vle: 'Rajesh Meena',
    idCode: 'CSC-RJ-302001',
    pincode: '302001',
    district: 'Jaipur Rural, Rajasthan',
    address: 'Tehsil Road, Kendra Rampura',
    rating: 4.9,
    servedCount: 480,
    services: ['Land Records', 'Caste Certificates', 'Electricity Bills'],
    timing: '9:30 AM – 7:30 PM',
    phone: '+91 94140 14599',
    x: 185,
    y: 205,
  },
  {
    id: 'mh',
    name: 'MahaSeva Digital Citizen Kendra',
    vle: 'Sachin Patil',
    idCode: 'CSC-MH-411001',
    pincode: '411001',
    district: 'Pune Rural, Maharashtra',
    address: 'Panchayat Office, Shirur Block',
    rating: 4.9,
    servedCount: 530,
    services: ['7/12 Land Utara', 'AEPS Cash', 'Ration Card', 'Aadhaar'],
    timing: '8:00 AM – 8:00 PM',
    phone: '+91 98220 14599',
    x: 205,
    y: 345,
  },
  {
    id: 'jk',
    name: 'Micro-ATM & Welfare Cash Kiosk',
    vle: 'Tariq Ahmed',
    idCode: 'CSC-JK-193101',
    pincode: '193101',
    district: 'Baramulla, Jammu & Kashmir',
    address: 'Main Chowk, Baramulla',
    rating: 4.9,
    servedCount: 440,
    services: ['Pension Disbursal', 'Ayushman Card', 'Horticulture Forms'],
    timing: '9:00 AM – 6:00 PM',
    phone: '+91 94190 14599',
    x: 195,
    y: 75,
  },
  {
    id: 'br',
    name: 'Digital Seva Kendra, Danapur',
    vle: 'Manoj Kumar',
    idCode: 'CSC-BR-800001',
    pincode: '800001',
    district: 'Patna, Bihar',
    address: 'Station Road, Danapur Rural',
    rating: 4.8,
    servedCount: 490,
    services: ['Labour Card', 'Cash Withdrawal', 'Scholarships'],
    timing: '8:30 AM – 7:30 PM',
    phone: '+91 94310 14599',
    x: 390,
    y: 235,
  },
  {
    id: 'tn',
    name: 'Madurai Grama e-Seva Kendra',
    vle: 'Murugan S.',
    idCode: 'CSC-TN-625001',
    pincode: '625001',
    district: 'Madurai, Tamil Nadu',
    address: 'Panchayat Complex, Madurai South',
    rating: 4.9,
    servedCount: 470,
    services: ['Patta Chitta', 'Pension Desk', 'TNEB Bill Pay'],
    timing: '8:30 AM – 7:30 PM',
    phone: '+91 98420 14599',
    x: 260,
    y: 450,
  },
];

export default function CscInteractiveMapLocator({ onOpenLocatorModal }) {
  const [activePin, setActivePin] = useState(INDIA_PINS[0]); // Default to Bodhan
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomScale, setZoomScale] = useState(1);
  const [mapPan, setMapPan] = useState({ x: 0, y: 0 });

  // Handle Search Input or Pin Click
  const handleSelectPin = (pin) => {
    setActivePin(pin);
    // Smooth focal zoom to pin
    setZoomScale(1.4);
    setMapPan({
      x: (300 - pin.x * 1.4) * 0.45,
      y: (260 - pin.y * 1.4) * 0.45,
    });
  };

  const handleResetMap = () => {
    setZoomScale(1);
    setMapPan({ x: 0, y: 0 });
    setActivePin(null);
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    const match = INDIA_PINS.find(
      (p) =>
        p.pincode.includes(q) ||
        p.district.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.vle.toLowerCase().includes(q)
    );

    if (match) {
      handleSelectPin(match);
    }
  };

  return (
    <section
      id="locator"
      className="relative z-10 w-full bg-[#071120] text-white py-14 sm:py-16 lg:py-20 px-5 sm:px-8 border-b border-white/10 overflow-hidden scroll-mt-20"
    >
      <div className="relative z-10 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ==================================================================
              LEFT COLUMN: OLD FIND CSC CONTENT (CLEAN, LOW-COGNITIVE & PUNCHY)
              ================================================================== */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ff884d] text-[11px] font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
              <span>CENTRE LOCATOR</span>
            </div>

            {/* Crisp, Direct Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.14] mb-3.5">
              Find Your Nearest <br />
              <span className="text-[#ff5500]">CSC Centre.</span>
            </h2>

            {/* Plain 1-Sentence Subtext */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 max-w-lg">
              Locate authorized digital desks in your village for Aadhaar, banking, pensions, and 400+ government services.
            </p>

            {/* Direct Pincode Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-md mb-4"
            >
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 text-[#ff5500] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Pincode or Village (e.g. 503185)..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#ff5500] text-white placeholder:text-slate-400 text-sm outline-none transition-all backdrop-blur-md"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-sm font-semibold transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-lg shrink-0"
              >
                <span>Find Kendra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Pincode Selection Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs mb-6">
              <span className="text-slate-400 text-[11px] mr-1">Quick:</span>
              {[
                { label: 'Bodhan (503185)', id: 'ts' },
                { label: 'Lucknow (226001)', id: 'up' },
                { label: 'Chhatarpur (471001)', id: 'mp' },
                { label: 'Jaipur (302001)', id: 'rj' },
                { label: 'Pune (411001)', id: 'mh' },
              ].map((p) => {
                const isSelected = activePin?.id === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      const match = INDIA_PINS.find((pin) => pin.id === p.id);
                      if (match) handleSelectPin(match);
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#ff5500] text-white border-[#ff5500] shadow-xs'
                        : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Live Status + Prospective VLE Link */}
            <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>5,50,000+ Active Kendras across 28 States & 8 UTs</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <span>Looking to open a centre?</span>
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-1 font-semibold text-[#ff884d] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Join as VLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ==================================================================
              RIGHT COLUMN: INDIAN MAP VISUAL WITH INTERACTIVE PINS
              Stylized vector map of India with glowing regional pins and popovers
              ================================================================== */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative w-full h-[450px] sm:h-[490px] lg:h-[520px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1c38] via-[#09152b] to-[#050e1d] border border-white/15 shadow-2xl overflow-hidden p-3 sm:p-4 select-none">
              {/* Map Floating Controls (+ / - / Reset) */}
              <div className="absolute top-4 left-4 z-20 flex flex-col rounded-xl bg-[#0a1628]/90 backdrop-blur-md border border-white/15 divide-y divide-white/10 overflow-hidden shadow-lg">
                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.min(2, +(s + 0.3).toFixed(1)))}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Zoom in"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.max(1, +(s - 0.3).toFixed(1)))}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Zoom out"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleResetMap}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Reset view"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Status Header Badge on Top-Right */}
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Interactive Kendra Pins</span>
              </div>

              {/* Interactive Vector Indian Map Canvas */}
              <svg
                viewBox="0 0 600 520"
                className="w-full h-full cursor-pointer"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.g
                  animate={{
                    scale: zoomScale,
                    x: mapPan.x,
                    y: mapPan.y,
                  }}
                  transition={{ type: 'spring', stiffness: 90, damping: 20 }}
                  style={{ transformOrigin: '300px 260px' }}
                >
                  {/* Subtle Background Radial Aura */}
                  <circle cx="280" cy="270" r="230" fill="#1e3a8a" opacity="0.12" filter="blur(40px)" />

                  {/* Stylized Modern Indian Territory Contours */}
                  <g fill="#0c1f3d" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.85">
                    {/* Kashmir & Northern Crown */}
                    <path d="M 180,40 L 225,48 L 245,75 L 240,110 L 270,130 L 340,165 L 360,185 L 310,225 L 265,205 L 195,165 L 170,120 L 180,40 Z" />
                    {/* Western India (Rajasthan & Gujarat) */}
                    <path d="M 170,120 L 195,165 L 205,220 L 150,235 L 125,265 L 140,300 L 190,285 L 195,250 L 170,120 Z" />
                    {/* Central India (MP & Chhattisgarh) */}
                    <path d="M 265,205 L 310,225 L 335,260 L 310,305 L 255,285 L 250,240 L 265,205 Z" />
                    {/* Eastern India (Bihar, Bengal, Odisha) */}
                    <path d="M 360,185 L 430,200 L 450,245 L 415,305 L 360,295 L 335,260 L 360,185 Z" />
                    {/* North-East Wing (Assam, Meghalaya, etc.) */}
                    <path d="M 430,200 L 490,190 L 515,220 L 485,245 L 450,245 L 430,200 Z" />
                    {/* Peninsular South (Maharashtra, Telangana, AP, Karnataka, TN, Kerala) */}
                    <path d="M 190,285 L 255,285 L 310,305 L 330,360 L 290,430 L 260,455 L 245,420 L 225,350 L 190,285 Z" />
                  </g>

                  {/* Stylized Connectivity Network Lines */}
                  <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" opacity="0.35" fill="none">
                    <line x1="195" y1="75" x2="310" y2="215" />
                    <line x1="310" y1="215" x2="390" y2="235" />
                    <line x1="310" y1="215" x2="265" y2="255" />
                    <line x1="185" y1="205" x2="265" y2="255" />
                    <line x1="265" y1="255" x2="275" y2="335" />
                    <line x1="205" y1="345" x2="275" y2="335" />
                    <line x1="275" y1="335" x2="260" y2="450" />
                  </g>

                  {/* Interactive Glowing Pins */}
                  {INDIA_PINS.map((pin) => {
                    const isSelected = activePin?.id === pin.id;

                    return (
                      <g
                        key={pin.id}
                        transform={`translate(${pin.x}, ${pin.y})`}
                        className="cursor-pointer"
                        onClick={() => handleSelectPin(pin)}
                      >
                        {/* Selected Pulsing Radar Ring */}
                        {isSelected && (
                          <>
                            <circle
                              r="20"
                              fill="none"
                              stroke="#ff5500"
                              strokeWidth="1.2"
                              strokeDasharray="4 2"
                              opacity="0.9"
                            />
                            <circle r="30" fill="#ff5500" fillOpacity="0.12" />
                          </>
                        )}

                        {/* Outer Glow Halo */}
                        <circle
                          r="12"
                          fill={isSelected ? '#ff5500' : '#38bdf8'}
                          fillOpacity={isSelected ? 0.35 : 0.2}
                        />

                        {/* Solid Pin Body */}
                        <circle
                          r="7.5"
                          fill={isSelected ? '#ff5500' : '#0a1628'}
                          stroke={isSelected ? '#ffffff' : '#38bdf8'}
                          strokeWidth="2"
                          filter="drop-shadow(0 2px 5px rgba(0,0,0,0.4))"
                        />

                        {/* Inner White Center */}
                        <circle r="2.5" fill="#ffffff" />
                      </g>
                    );
                  })}
                </motion.g>
              </svg>

              {/* ==============================================================
                  FLOATING PIN DETAIL CARD (POPUP OVER / BESIDE ACTIVE PIN)
                  ============================================================== */}
              <AnimatePresence>
                {activePin && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[320px] bg-[#0a1628]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl z-30"
                  >
                    {/* Top Row: Verified Badge + Close */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified Kendra · {activePin.idCode}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setActivePin(null)}
                        className="text-slate-400 hover:text-white text-xs cursor-pointer p-0.5"
                      >
                        ✕
                      </button>
                    </div>

                    {/* VLE Name & Kendra Title */}
                    <div className="mt-2.5">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {activePin.name}
                      </h4>
                      <p className="text-xs text-[#ff884d] font-semibold mt-0.5">
                        {activePin.vle} <span className="text-slate-400 font-normal">· {activePin.district}</span>
                      </p>
                    </div>

                    {/* Rating & Citizens Served */}
                    <div className="flex items-center justify-between text-xs mt-2 py-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{activePin.rating}</span>
                        <span className="text-slate-400 font-normal text-[11px]">
                          ({activePin.servedCount}+ served)
                        </span>
                      </div>
                      <span className="text-sky-400 text-[11px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Open Now</span>
                      </span>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {activePin.services.map((svc, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-slate-200 font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-white/10">
                      <a
                        href={`tel:${activePin.phone}`}
                        className="inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold transition-colors"
                      >
                        <Phone className="w-3 h-3 text-slate-300" />
                        <span>Call VLE</span>
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          activePin.name + ' ' + activePin.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#e04800] text-white text-[11px] font-semibold transition-colors"
                      >
                        <span>Directions</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
