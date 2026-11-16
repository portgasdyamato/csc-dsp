import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Award, CheckCircle2 } from 'lucide-react';

export default function HeroArtLoop() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3 Continuous Narrative Scenes in Loop
  const SCENES = [
    {
      id: 'mandala',
      title: 'Sacred Mandala Line Art',
      subtitle: 'The cultural foundation & sacred geometry of Digital India',
      badge: 'Heritage & Geometry',
      icon: Sparkles,
      color: '#ff7733',
    },
    {
      id: 'seva',
      title: 'Assisted Seva Interaction',
      subtitle: 'Village entrepreneur with notepad guiding an elder with trust',
      badge: 'Human Connection',
      icon: Users,
      color: '#38bdf8',
    },
    {
      id: 'logo',
      title: 'CSC Digital Seva Emblem',
      subtitle: 'Empowering 5,50,000+ gram panchayats nationwide',
      badge: 'National Mission',
      icon: Award,
      color: '#10b981',
    },
  ];

  // Auto-advance loop every 6.5 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % SCENES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, SCENES.length]);

  return (
    <div
      className="relative w-full max-w-[540px] xl:max-w-[580px] mx-auto select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Ethereal Glow Halos */}
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-full opacity-60 blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          background:
            activeScene === 0
              ? 'radial-gradient(circle, rgba(255,119,51,0.25) 0%, rgba(10,28,56,0.3) 50%, transparent 75%)'
              : activeScene === 1
              ? 'radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(255,119,51,0.18) 45%, transparent 75%)'
              : 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(255,119,51,0.2) 45%, transparent 75%)',
        }}
      />

      {/* Main Glassmorphic Art Chamber */}
      <div className="relative rounded-[32px] bg-gradient-to-b from-[#0e1d35]/90 via-[#0a172c]/95 to-[#061020]/95 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col items-center">
        {/* Subtle Decorative Architectural Arch Framing */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

        {/* Top Status & Narrative Pill */}
        <div className="relative z-10 w-full flex items-center justify-between gap-3 mb-2 px-1 sm:px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-wide text-white">
            <span
              className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500"
              style={{ backgroundColor: SCENES[activeScene].color }}
            />
            <span className="text-white/90 uppercase tracking-wider text-[10px]">
              {SCENES[activeScene].badge}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-white/50">
            <span>Scene {activeScene + 1} of 3</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-[#ff7733] font-semibold">Continuous Loop</span>
          </div>
        </div>

        {/* Central Animated Illustration Stage (Fixed 1:1 Aspect Ratio) */}
        <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] flex items-center justify-center my-1">
          {/* Universal Rotating Cosmic Orbital Rings (Persistent Across All Scenes) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            <div className="w-[96%] h-[96%] rounded-full border border-white/[0.08] border-dashed" />
            <div className="w-[88%] h-[88%] rounded-full border border-[#ff7733]/15" />
            <div className="w-[78%] h-[78%] rounded-full border border-white/[0.05]" />
          </motion.div>

          {/* Morphing Scene Cross-Fade Canvas */}
          <AnimatePresence mode="wait">
            {activeScene === 0 && (
              <motion.div
                key="scene-mandala"
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <MandalaLineArtScene />
              </motion.div>
            )}

            {activeScene === 1 && (
              <motion.div
                key="scene-seva"
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <AssistedSevaScene />
              </motion.div>
            )}

            {activeScene === 2 && (
              <motion.div
                key="scene-logo"
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <CscLogoScene />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Narrative Caption Card */}
        <div className="relative z-10 w-full text-center mt-2 px-3 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10">
          <div className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <span>{SCENES[activeScene].title}</span>
          </div>
          <p className="text-[11.5px] sm:text-[12px] text-[#c5d5ec] mt-0.5 leading-snug">
            {SCENES[activeScene].subtitle}
          </p>
        </div>

        {/* Interactive Segmented Scene Switcher with Progress Indicator */}
        <div className="relative z-10 w-full grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10">
          {SCENES.map((scene, idx) => {
            const isActive = activeScene === idx;
            const IconComponent = scene.icon;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveScene(idx)}
                className={`group relative py-2 px-2 rounded-xl text-left transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.12] border border-white/25 shadow-sm'
                    : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/15'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg grid place-items-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#ff5500] text-white shadow-xs'
                      : 'bg-white/10 text-white/60 group-hover:text-white'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1 hidden sm:block">
                  <div
                    className={`text-[11px] font-semibold truncate ${
                      isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                    }`}
                  >
                    {idx === 0 ? 'Mandala Art' : idx === 1 ? 'Assisted Seva' : 'CSC Logo'}
                  </div>
                  <div className="text-[9.5px] text-white/40 truncate">
                    {idx === 0 ? 'Geometry' : idx === 1 ? 'Human Touch' : 'Identity'}
                  </div>
                </div>

                {/* Active Progress Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeSceneBar"
                    className="absolute bottom-0 inset-x-2 h-[2px] bg-gradient-to-r from-[#ff5500] via-white to-[#38bdf8] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCENE 1: INTRICATE SACRED MANDALA LINE ART
// Sacred Indian Geometry with Multi-Layered Rotating Petals & Radiant Chakras
// ============================================================================
function MandalaLineArtScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 460 460"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mandala-solar-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7733" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-hairline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ff7733" />
          </linearGradient>
        </defs>

        {/* Center Radiant Solar Ambient Wash */}
        <circle cx="230" cy="230" r="140" fill="url(#mandala-solar-glow)" />

        {/* Layer 1: Outermost Radiating Lotus Crests (Slow Clockwise Rotation) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '230px 230px' }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <g key={i} transform={`rotate(${angle} 230 230)`}>
                {/* Outermost Scalloped Arch Petal */}
                <path
                  d="M 230 35 C 242 55, 250 75, 246 95 C 238 95, 230 90, 230 90 C 230 90, 222 95, 214 95 C 210 75, 218 55, 230 35 Z"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                <circle cx="230" cy="30" r="2.2" fill="#ff7733" />
                <line x1="230" y1="90" x2="230" y2="120" stroke="#fbbf24" strokeWidth="0.8" strokeOpacity="0.5" />
              </g>
            );
          })}
          <circle cx="230" cy="230" r="195" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 4" />
          <circle cx="230" cy="230" r="175" stroke="#ff7733" strokeWidth="1.2" strokeOpacity="0.5" />
        </motion.g>

        {/* Layer 2: 16-Point Interlocking Yantra Geometric Stars (Counter-Clockwise Rotation) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '230px 230px' }}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 230 230)`}>
                {/* Pointed Diamond / Ogee Petal */}
                <path
                  d="M 230 75 L 246 115 L 230 145 L 214 115 Z"
                  stroke="url(#gold-hairline)"
                  strokeWidth="1.4"
                  strokeOpacity="0.8"
                />
                <circle cx="230" cy="115" r="3" fill="#ffffff" fillOpacity="0.8" />
              </g>
            );
          })}
          <circle cx="230" cy="230" r="145" stroke="#fbbf24" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4 3" />
        </motion.g>

        {/* Layer 3: Inner 12-Petal Blooming Lotus Flower (Gentle Breathing Scale & Slow Spin) */}
        <motion.g
          animate={{ rotate: 360, scale: [0.97, 1.03, 0.97] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformOrigin: '230px 230px' }}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <g key={i} transform={`rotate(${angle} 230 230)`}>
                <path
                  d="M 230 130 C 248 150, 252 178, 230 200 C 208 178, 212 150, 230 130 Z"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  fill="#ff5500"
                  fillOpacity="0.08"
                />
                {/* Central Petal Vein */}
                <line x1="230" y1="135" x2="230" y2="195" stroke="#fbbf24" strokeWidth="1" strokeOpacity="0.7" />
              </g>
            );
          })}
          <circle cx="230" cy="230" r="100" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.8" />
          <circle cx="230" cy="230" r="85" stroke="#ff7733" strokeWidth="1" strokeOpacity="0.6" />
        </motion.g>

        {/* Center: Radiant Sacred Bindu & Core Chakras */}
        <g>
          {/* Pulsing Concentric Aura Rings */}
          <motion.circle
            cx="230"
            cy="230"
            r="60"
            stroke="#fbbf24"
            strokeWidth="1.2"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '230px 230px' }}
          />
          <circle cx="230" cy="230" r="45" stroke="#ffffff" strokeWidth="1.8" />
          <circle cx="230" cy="230" r="30" fill="#0f1f38" stroke="#ff5500" strokeWidth="2" />

          {/* 8-Point Center Starburst */}
          <path
            d="M 230 208 L 234 224 L 250 224 L 237 234 L 242 250 L 230 239 L 218 250 L 223 234 L 210 224 L 226 224 Z"
            fill="#ffffff"
          />
          {/* Inner Golden Bindu Core */}
          <circle cx="230" cy="230" r="6" fill="#ff5500" />
          <circle cx="230" cy="230" r="3" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// SCENE 2: ASSISTED SEVA INTERACTION (OFFICER WITH NOTEPAD & ELDER TALKING)
// Highly Detailed, Warm, Humanistic Line Art of CSC Assisted Village Delivery
// ============================================================================
function AssistedSevaScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 460 460"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="seva-halo-warm" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#ff7733" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="notepad-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* Ambient Warm Halo behind the Human Interaction */}
        <circle cx="230" cy="230" r="160" fill="url(#seva-halo-warm)" />

        {/* Traditional Mughal Arch Background Silhouette Framing the Centre */}
        <path
          d="M 70 380 V 160 C 70 90, 150 45, 230 30 C 310 45, 390 90, 390 160 V 380"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
        />
        <path
          d="M 85 380 V 170 C 85 110, 155 70, 230 55 C 305 70, 375 110, 375 170 V 380"
          stroke="#ff7733"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />

        {/* Subtle Radiating Communication Waves Between Officer & Citizen */}
        <motion.path
          d="M 185 175 Q 230 150 275 175"
          stroke="#38bdf8"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          opacity="0.8"
        />
        <motion.path
          d="M 195 195 Q 230 175 265 195"
          stroke="#fbbf24"
          strokeWidth="1.4"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, 24] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
          opacity="0.7"
        />

        {/* ====================================================================
            FIGURE 1 (LEFT): THE ELDER CITIZEN (PAGRI, SHAWL, WALKING STICK)
            Gentle smile, spectacles, attentive listening, posture of trust
            ==================================================================== */}
        <g id="elder-citizen">
          {/* Traditional Pagri / Turban on Elder's Head */}
          <path
            d="M 115 130 C 110 110, 125 85, 148 85 C 168 85, 180 102, 180 120 C 180 135, 170 142, 152 144 C 132 144, 118 140, 115 130 Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            fill="#0f2342"
          />
          {/* Turban Fabric Folds */}
          <path d="M 122 108 C 138 98, 160 104, 174 116" stroke="#fbbf24" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M 120 122 C 136 114, 158 118, 176 128" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7" />
          <path d="M 130 92 C 145 88, 162 94, 170 104" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />

          {/* Elder's Head Profile & Warm Facial Expression */}
          <path
            d="M 160 128 C 168 135, 170 145, 168 152 C 165 158, 168 162, 172 165 C 166 170, 162 174, 158 178 C 150 184, 138 184, 130 178"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Elder's Gentle Smile */}
          <path d="M 160 162 Q 165 166 168 163" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
          {/* Spectacles / Glasses on Elder */}
          <circle cx="156" cy="144" r="8.5" stroke="#38bdf8" strokeWidth="1.6" fill="#0b1b36" fillOpacity="0.6" />
          <path d="M 164 144 L 172 143" stroke="#38bdf8" strokeWidth="1.6" />
          <path d="M 148 144 L 140 142" stroke="#38bdf8" strokeWidth="1.4" />

          {/* Elder's Kurta & Traditional Draped Shawl */}
          {/* Draped Shawl across left shoulder */}
          <path
            d="M 130 180 C 105 195, 92 230, 90 280 L 105 340 L 145 340 L 140 280 C 140 240, 142 205, 130 180 Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            fill="#091830"
          />
          {/* Shawl Ornamental Border Embroidery */}
          <path d="M 100 230 C 105 270, 108 305, 110 340" stroke="#ff7733" strokeWidth="1.4" strokeDasharray="3 3" />
          {/* Torso & Kurta */}
          <path
            d="M 130 180 C 150 190, 175 195, 185 220 L 185 340 L 140 340"
            stroke="#ffffff"
            strokeWidth="1.8"
          />
          {/* Kurta Buttons */}
          <circle cx="160" cy="210" r="1.8" fill="#fbbf24" />
          <circle cx="162" cy="225" r="1.8" fill="#fbbf24" />
          <circle cx="164" cy="240" r="1.8" fill="#fbbf24" />

          {/* Elder's Walking Cane with Curved Handle */}
          <path
            d="M 72 260 C 72 245, 88 245, 92 260 L 92 380"
            stroke="#fbbf24"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Elder's Left Hand resting gently near cane */}
          <path
            d="M 88 262 C 96 256, 106 262, 102 272 C 98 278, 88 274, 88 262 Z"
            stroke="#ffffff"
            strokeWidth="1.6"
            fill="#0c1d38"
          />

          {/* Elder's Right Arm Resting Forward on Counter */}
          <path
            d="M 160 230 C 175 240, 195 260, 205 285"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* ====================================================================
            CENTER: THE SERVICE DESK COUNTER WITH LAPTOP & BIOMETRIC SCANNER
            Official counter where assisted delivery takes place
            ==================================================================== */}
        <g id="counter-table">
          {/* Main Wooden Countertop */}
          <path
            d="M 80 300 L 380 300 L 375 325 L 85 325 Z"
            stroke="#ffffff"
            strokeWidth="2"
            fill="#0f223f"
          />
          {/* Counter Front Bevel Strip */}
          <line x1="85" y1="312" x2="375" y2="312" stroke="#ff7733" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* Counter Pillars */}
          <line x1="110" y1="325" x2="110" y2="385" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.5" />
          <line x1="350" y1="325" x2="350" y2="385" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.5" />

          {/* Laptop on Counter (Screen facing citizen) */}
          <path d="M 215 300 L 255 300 L 250 260 L 220 260 Z" stroke="#38bdf8" strokeWidth="1.6" fill="#08152b" />
          {/* Laptop Screen Display with Digital Seva Portal Lines */}
          <rect x="222" y="264" width="26" height="20" rx="2" fill="#071a38" stroke="#38bdf8" strokeWidth="1" />
          <line x1="225" y1="270" x2="242" y2="270" stroke="#ff7733" strokeWidth="1.2" />
          <line x1="225" y1="275" x2="238" y2="275" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="225" y1="280" x2="245" y2="280" stroke="#10b981" strokeWidth="1" />

          {/* Biometric Thumb Impression Scanner Device */}
          <rect x="195" y="292" width="15" height="8" rx="2" fill="#0c1d38" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="202.5" cy="296" r="2.5" fill="#10b981" />

          {/* Official Document / Scheme Certificate with Golden Seal on Desk */}
          <rect x="175" y="298" width="18" height="12" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
          <circle cx="184" cy="304" r="2" fill="#ff7733" />
        </g>

        {/* ====================================================================
            FIGURE 2 (RIGHT): THE CSC OFFICER / VLE WITH NOTEPAD & PEN
            Youthful energetic posture, holding notepad, explaining document
            ==================================================================== */}
        <g id="csc-officer">
          {/* Officer's Hair & Smart Head Profile */}
          <path
            d="M 320 115 C 320 95, 340 85, 355 85 C 372 85, 382 100, 380 120 C 378 128, 372 135, 368 140 C 352 144, 335 142, 324 135 Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            fill="#0f2342"
          />
          {/* Officer's Clean Hairline */}
          <path d="M 330 102 C 345 94, 365 100, 372 110" stroke="#38bdf8" strokeWidth="1.4" />

          {/* Officer's Face in Profile (Looking with Smile at Elder & Notepad) */}
          <path
            d="M 335 125 C 328 132, 325 140, 328 148 C 330 154, 326 158, 322 162 C 328 166, 334 170, 338 174 C 346 180, 358 180, 365 174"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Officer's Attentive Smile */}
          <path d="M 334 158 Q 330 162 326 159" stroke="#ff7733" strokeWidth="1.8" strokeLinecap="round" />
          {/* Officer's Eye looking down at document */}
          <circle cx="338" cy="140" r="1.8" fill="#ffffff" />

          {/* Officer's Smart Collared Shirt & CSC Lanyard Badge */}
          <path
            d="M 345 176 L 332 195 L 345 205 L 360 190"
            stroke="#38bdf8"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Torso */}
          <path
            d="M 360 178 C 380 190, 395 220, 395 270 L 390 340 L 330 340 L 325 280 C 320 230, 335 195, 360 178 Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            fill="#0a1a33"
          />
          {/* Official CSC Lanyard Ribbon around Neck */}
          <path d="M 348 190 L 342 235 L 354 235 Z" stroke="#ff7733" strokeWidth="1.2" fill="#ff7733" fillOpacity="0.2" />
          {/* ID Card Badge */}
          <rect x="340" y="235" width="12" height="16" rx="2" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
          <circle cx="346" cy="241" r="2" fill="#ff5500" />
          <line x1="343" y1="246" x2="349" y2="246" stroke="#0a1628" strokeWidth="1" />

          {/* ================================================================
              THE HERO PROP: OFFICER HOLDING NOTEPAD / CLIPBOARD & DIGITAL PEN
              Angled clearly toward the center so the elder can see it
              ================================================================ */}
          {/* Officer's Right Arm Extending Forward Holding Stylus/Pen */}
          <path
            d="M 345 220 C 320 230, 295 240, 275 245"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Digital Stylus / Pen in Hand Pointing to Line on Notepad */}
          <line x1="262" y1="236" x2="278" y2="248" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="261" cy="235" r="1.5" fill="#38bdf8" />

          {/* The Notepad / Clipboard */}
          <g transform="translate(250, 220) rotate(-12)">
            {/* Wooden Clipboard Backing */}
            <rect
              x="-5"
              y="-5"
              width="54"
              height="72"
              rx="4"
              fill="#08162e"
              stroke="#fbbf24"
              strokeWidth="1.8"
            />
            {/* Top Metal Clip */}
            <rect x="14" y="-8" width="16" height="7" rx="2" fill="#cbd5e1" stroke="#ffffff" strokeWidth="1" />

            {/* Glowing White Notepad Sheet */}
            <rect
              x="0"
              y="0"
              width="44"
              height="62"
              rx="2"
              fill="#ffffff"
              stroke="#38bdf8"
              strokeWidth="1"
            />

            {/* Official Digital Seva Header Stamp on Notepad */}
            <circle cx="8" cy="8" r="4" fill="#ff5500" />
            <line x1="16" y1="8" x2="38" y2="8" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

            {/* Checklist items representing Government Schemes & Form lines */}
            <g stroke="#334155" strokeWidth="1.2" strokeLinecap="round">
              {/* Item 1 with Green Verified Check */}
              <circle cx="8" cy="18" r="2.5" fill="#10b981" stroke="none" />
              <line x1="14" y1="18" x2="36" y2="18" stroke="#0f172a" strokeWidth="1.4" />

              {/* Item 2 with Green Verified Check */}
              <circle cx="8" cy="28" r="2.5" fill="#10b981" stroke="none" />
              <line x1="14" y1="28" x2="38" y2="28" stroke="#0f172a" strokeWidth="1.4" />

              {/* Item 3 Active Highlighted Line being pointed at */}
              <circle cx="8" cy="38" r="2.5" fill="#ff5500" stroke="none" />
              <line x1="14" y1="38" x2="34" y2="38" stroke="#ff5500" strokeWidth="1.6" />

              {/* Item 4 */}
              <line x1="8" y1="48" x2="38" y2="48" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          </g>

          {/* Officer's Left Arm supporting the clipboard */}
          <path
            d="M 370 230 C 350 255, 320 270, 295 272"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Officer's Hand clasping clipboard bottom */}
          <path
            d="M 288 268 C 282 262, 292 258, 298 264 Z"
            stroke="#ffffff"
            strokeWidth="1.6"
            fill="#0f2342"
          />
        </g>

        {/* Floating Heart / Trust Sparkle indicating Seva & Compassion */}
        <motion.g
          animate={{ y: [-4, 4, -4], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          transform="translate(230, 115)"
        >
          <circle cx="0" cy="0" r="14" fill="#0e2344" stroke="#ff7733" strokeWidth="1.4" />
          <path
            d="M 0 -4 C -2 -7, -6 -7, -6 -4 C -6 -1, 0 4, 0 5 C 0 4, 6 -1, 6 -4 C 6 -7, 2 -7, 0 -4 Z"
            fill="#ff5500"
          />
        </motion.g>
      </svg>
    </div>
  );
}

// ============================================================================
// SCENE 3: CSC DIGITAL SEVA LOGO EMBLEM
// Sacred National Crest with Tricolor Ribbons, Radiant Waves & Connectivity
// ============================================================================
function CscLogoScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 460 460"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="csc-emblem-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5500" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#061224" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tricolor-saffron" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff884d" />
            <stop offset="100%" stopColor="#ff5500" />
          </linearGradient>
          <linearGradient id="tricolor-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Core Radiating National Aura */}
        <circle cx="230" cy="230" r="160" fill="url(#csc-emblem-core)" />

        {/* Outer Ring: 16 Nationwide Village Connectivity Nodes */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '230px 230px' }}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 230 230)`}>
                <line x1="230" y1="50" x2="230" y2="70" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <circle cx="230" cy="46" r="3" fill="#ffffff" />
                <circle cx="230" cy="46" r="5" stroke="#ff7733" strokeWidth="1" strokeOpacity="0.6" />
              </g>
            );
          })}
          <circle cx="230" cy="230" r="184" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6" />
        </motion.g>

        {/* Dynamic Sweeping Tricolor Arch Ribbons (Saffron, White, Green) */}
        {/* Saffron Upper Sweep */}
        <motion.path
          d="M 90 230 A 140 140 0 0 1 370 230"
          stroke="url(#tricolor-saffron)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeOpacity="0.9"
          animate={{ strokeWidth: [10, 12, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* White Center Ring */}
        <circle cx="230" cy="230" r="126" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.9" />

        {/* Green Lower Sweep */}
        <motion.path
          d="M 90 230 A 140 140 0 0 0 370 230"
          stroke="url(#tricolor-green)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeOpacity="0.9"
          animate={{ strokeWidth: [10, 12, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle Ashoka Chakra 24 Rays Linework inside Emblem */}
        <g opacity="0.35">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <line
                key={i}
                x1="230"
                y1="140"
                x2="230"
                y2="160"
                stroke="#0284c7"
                strokeWidth="1.2"
                transform={`rotate(${angle} 230 230)`}
              />
            );
          })}
          <circle cx="230" cy="230" r="90" stroke="#0284c7" strokeWidth="1" />
        </g>

        {/* Central Deep Navy Crest Medallion */}
        <circle
          cx="230"
          cy="230"
          r="86"
          fill="#0a1932"
          stroke="#ffffff"
          strokeWidth="2.5"
          className="shadow-2xl"
        />
        <circle cx="230" cy="230" r="80" stroke="#ff5500" strokeWidth="1.5" strokeOpacity="0.8" />

        {/* Bold Sculpted Iconic "CSC" Typography */}
        <g>
          {/* Main "CSC" Text */}
          <text
            x="230"
            y="222"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="54"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-0.03em"
          >
            CSC
          </text>

          {/* Saffron Characteristic Brand Dot above "C" */}
          <circle cx="272" cy="192" r="5" fill="#ff5500" />

          {/* "DIGITAL SEVA" Banner Plaque beneath CSC */}
          <g transform="translate(230, 246)">
            <rect
              x="-64"
              y="-4"
              width="128"
              height="20"
              rx="10"
              fill="url(#tricolor-saffron)"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <text
              x="0"
              y="10"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="800"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="0.16em"
            >
              DIGITAL SEVA
            </text>
          </g>
        </g>

        {/* Concentric Digital Network Pulses Radiating outward */}
        <motion.circle
          cx="230"
          cy="230"
          r="95"
          stroke="#38bdf8"
          strokeWidth="1.5"
          animate={{ r: [95, 140, 95], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
          fill="none"
        />

        {/* 4 Cardinal Sacred Lotus Pearls */}
        <circle cx="230" cy="80" r="4.5" fill="#ff5500" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="380" cy="230" r="4.5" fill="#ffffff" stroke="#ff5500" strokeWidth="1.5" />
        <circle cx="230" cy="380" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="80" cy="230" r="4.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

