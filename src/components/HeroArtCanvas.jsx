import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// CONTINUOUS LINE-ART HERO TRANSFORMATION ENGINE
// Seamlessly morphs between:
// 1. Sacred Indian Mandala (Detailed sacred geometry & rotating lotus rings)
// 2. Assisted Seva (Detailed editorial line-art: CSC Officer with notepad helping elder)
// 3. Official CSC Digital Seva Logo (Pristine typography, tricolor arcs, orbital nodes)
// ============================================================================

export default function HeroArtCanvas() {
  const [sceneIndex, setSceneIndex] = useState(0); // 0: Mandala, 1: Officer & Elder, 2: CSC Logo
  const canvasRef = useRef(null);

  // Auto-cycle through the 3 scenes every 6.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % 3);
    }, 6800);
    return () => clearInterval(timer);
  }, []);

  // Ambient Particle Swarm that swirls & reacts during transformations
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 540;
      height = canvas.height = canvas.parentElement.clientHeight || 480;
    };
    window.addEventListener('resize', handleResize);

    // 120 Ambient luminous particles floating around the stage
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#ff7733' : Math.random() > 0.5 ? '#38bdf8' : '#ffffff',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Subtle vortex drift toward center
        const dx = cx - p.x;
        const dy = cy - p.y;
        p.vx += dx * 0.00008;
        p.vy += dy * 0.00008;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles with subtle hairlines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 45) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#ffffff';
            ctx.globalAlpha = (1 - dist / 45) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] sm:max-w-[540px] flex items-center justify-center select-none">
      {/* Background Ambient Glowing Radial Orbs */}
      <div className="absolute inset-0 rounded-full bg-radial from-[#ff5500]/15 via-[#1d4ed8]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Particle Swarm Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* The Central Morphing Vector Stage */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {sceneIndex === 0 && <MandalaScene key="scene-mandala" />}
          {sceneIndex === 1 && <OfficerElderScene key="scene-assisted" />}
          {sceneIndex === 2 && <CscLogoScene key="scene-logo" />}
        </AnimatePresence>
      </div>

      {/* Subtle Bottom Transformation Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a1628]/80 backdrop-blur-md border border-white/10 z-20">
        {[
          { label: 'Sacred Mandala', color: '#ff7733' },
          { label: 'Assisted Seva', color: '#38bdf8' },
          { label: 'CSC Digital Seva', color: '#10b981' },
        ].map((item, idx) => {
          const isActive = sceneIndex === idx;
          return (
            <button
              key={item.label}
              onClick={() => setSceneIndex(idx)}
              className="flex items-center gap-1.5 text-[11px] font-medium transition-all cursor-pointer group"
            >
              <span
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive ? 'scale-125' : 'opacity-40 group-hover:opacity-75'
                }`}
                style={{ backgroundColor: item.color }}
              />
              <span className={isActive ? 'text-white' : 'text-slate-400'}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// 1. SCENE 1: INTRICATE SACRED INDIAN MANDALA (Vector Line Art)
// Concentric rings, 16 blooming lotus petals, yantra sacred geometry
// ============================================================================
function MandalaScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 1.12, rotate: 25 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(255,85,0,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mandalaCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5500" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Core Aura */}
        <circle cx="250" cy="250" r="220" fill="url(#mandalaCoreGlow)" />

        {/* Outer Rotating Scalloped Geometrical Ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          {/* Outer Perimeter Circle */}
          <circle cx="250" cy="250" r="215" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="250" cy="250" r="202" stroke="#ff7733" strokeWidth="1.2" opacity="0.85" />

          {/* 24 Scalloped Outer Lotus Petals */}
          {Array.from({ length: 24 }).map((_, i) => {
            const rot = (i * 360) / 24;
            return (
              <g key={i} transform={`rotate(${rot} 250 250)`}>
                <path
                  d="M 250 35 C 238 60 236 80 250 96 C 264 80 262 60 250 35 Z"
                  stroke="#fbbf24"
                  strokeWidth="1.2"
                  fill="rgba(251,191,36,0.04)"
                />
                <circle cx="250" cy="40" r="2.5" fill="#ff5500" />
              </g>
            );
          })}
        </motion.g>

        {/* Middle Counter-Rotating Sacred Yantra Diamond Star Ring */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          <circle cx="250" cy="250" r="165" stroke="#38bdf8" strokeWidth="1.2" opacity="0.7" />
          <circle cx="250" cy="250" r="150" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" />

          {/* 16 Geometrical Paisley & Yantra Petals */}
          {Array.from({ length: 16 }).map((_, i) => {
            const rot = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${rot} 250 250)`}>
                <path
                  d="M 250 85 C 235 115 240 135 250 148 C 260 135 265 115 250 85 Z"
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                  fill="rgba(56,189,248,0.06)"
                />
                <circle cx="250" cy="98" r="2" fill="#ffffff" />
              </g>
            );
          })}
        </motion.g>

        {/* Inner Blooming 12-Petal Lotus (Padma) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          <circle cx="250" cy="250" r="110" stroke="#ff7733" strokeWidth="1.4" opacity="0.8" />

          {Array.from({ length: 12 }).map((_, i) => {
            const rot = (i * 360) / 12;
            return (
              <g key={i} transform={`rotate(${rot} 250 250)`}>
                <path
                  d="M 250 140 C 236 170 240 195 250 205 C 260 195 264 170 250 140 Z"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  fill="rgba(255,255,255,0.08)"
                />
              </g>
            );
          })}
        </motion.g>

        {/* Central Solar Bindu & 8-Spoke Chakra Core */}
        <g>
          <circle cx="250" cy="250" r="55" stroke="#fbbf24" strokeWidth="1.6" />
          <circle cx="250" cy="250" r="42" stroke="#ff5500" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="14" fill="#ff5500" />
          <circle cx="250" cy="250" r="6" fill="#ffffff" />

          {/* 8 Radiating Sacred Energy Spines */}
          {Array.from({ length: 8 }).map((_, i) => {
            const rot = (i * 360) / 8;
            return (
              <line
                key={i}
                x1="250"
                y1="236"
                x2="250"
                y2="198"
                stroke="#fbbf24"
                strokeWidth="1.5"
                transform={`rotate(${rot} 250 250)`}
              />
            );
          })}
        </g>
      </svg>
    </motion.div>
  );
}

// ============================================================================
// 2. SCENE 2: ASSISTED SEVA (Editorial Vector Line Art)
// Elderly rural Indian citizen in turban & shawl assisted by young CSC VLE officer
// holding official clipboard/notepad and stylus at service counter desk.
// ============================================================================
function OfficerElderScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.08, y: -15 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg
        viewBox="0 0 540 500"
        className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.28)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="serviceRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Ambient Halo behind Desk & People */}
        <circle cx="270" cy="250" r="190" fill="radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)" />

        {/* Architectural Background Arch Frame (Subtle Jharokha Hairline) */}
        <path
          d="M 120 400 L 120 220 C 120 150 160 110 210 80 C 240 60 255 45 270 32 C 285 45 300 60 330 80 C 380 110 420 150 420 220 L 420 400"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
        />

        {/* ==================================================================
            A. THE SERVICE COUNTER DESK & DIGITAL EQUIPMENT
            ================================================================== */}
        {/* Main Service Desk Surface */}
        <line x1="80" y1="380" x2="460" y2="380" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="388" x2="440" y2="388" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />

        {/* Laptop Display (CSC Portal Interface) */}
        <g transform="translate(230, 290)">
          {/* Laptop Screen Frame */}
          <rect x="0" y="0" width="75" height="52" rx="4" stroke="#ffffff" strokeWidth="1.8" fill="#0c1a2e" />
          <rect x="4" y="4" width="67" height="44" rx="2" fill="url(#screenGlow)" />
          {/* Laptop Portal Header & Verification Checks */}
          <line x1="10" y1="12" x2="35" y2="12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="20" x2="55" y2="20" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
          <line x1="10" y1="28" x2="48" y2="28" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
          <circle cx="58" cy="12" r="3" fill="#10b981" />
          {/* Laptop Keyboard Base */}
          <polygon points="-8,56 83,56 75,52 0,52" stroke="#ffffff" strokeWidth="1.5" fill="#1e293b" />
        </g>

        {/* Biometric Thumbprint Scanner on Desk */}
        <g transform="translate(195, 345)">
          <rect x="0" y="0" width="22" height="30" rx="4" stroke="#10b981" strokeWidth="1.5" fill="#064e3b" />
          <ellipse cx="11" cy="15" rx="6" ry="8" stroke="#34d399" strokeWidth="1.2" fill="none" />
          <line x1="11" y1="10" x2="11" y2="20" stroke="#a7f3d0" strokeWidth="1" />
        </g>

        {/* ==================================================================
            B. ELDER CITIZEN (Left: Turban, Glasses, Kurta, Shawl & Cane)
            ================================================================== */}
        <g transform="translate(30, 0)">
          {/* Elder's Traditional Pagri / Turban with Detailed Folds */}
          <path
            d="M 125 155 C 110 135 120 100 155 92 C 185 85 205 105 200 130 C 215 130 220 150 205 165 C 190 178 135 178 125 155 Z"
            stroke="#fbbf24"
            strokeWidth="2.2"
            fill="rgba(251,191,36,0.08)"
          />
          {/* Turban Fabric Wrap Folds */}
          <path d="M 132 125 C 150 115 180 120 198 135" stroke="#fbbf24" strokeWidth="1.4" />
          <path d="M 138 142 C 160 132 185 138 202 150" stroke="#fbbf24" strokeWidth="1.4" />

          {/* Elder's Head, Ear & Dignified Profile */}
          <path
            d="M 160 165 C 160 185 150 205 168 220 C 180 230 195 225 198 205"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Ear */}
          <path d="M 195 180 C 202 185 202 195 196 200" stroke="#ffffff" strokeWidth="1.4" />

          {/* Round Spectacles & Bridge */}
          <circle cx="162" cy="182" r="9" stroke="#38bdf8" strokeWidth="1.8" fill="rgba(56,189,248,0.1)" />
          <circle cx="142" cy="182" r="9" stroke="#38bdf8" strokeWidth="1.8" fill="rgba(56,189,248,0.1)" />
          <line x1="151" y1="182" x2="153" y2="182" stroke="#38bdf8" strokeWidth="2" />
          <line x1="171" y1="182" x2="195" y2="185" stroke="#38bdf8" strokeWidth="1.4" />

          {/* Gentle Smile & Mustache Contour */}
          <path d="M 152 205 C 158 208 168 208 174 205" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />

          {/* Elder's Draped Kurta & Warm Woolen Shawl */}
          <path
            d="M 150 230 C 120 255 105 310 115 380 L 190 380 C 195 330 205 270 178 230 Z"
            stroke="#ffffff"
            strokeWidth="2"
            fill="rgba(255,255,255,0.04)"
          />
          {/* Shawl Draping across Chest */}
          <path
            d="M 145 240 C 160 270 165 320 155 380"
            stroke="#ff7733"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 135 255 C 145 285 148 335 140 380"
            stroke="#ff7733"
            strokeWidth="1.4"
          />

          {/* Elder's Walking Stick / Cane */}
          <path
            d="M 95 280 C 95 260 112 260 112 280 L 108 380"
            stroke="#fbbf24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* ==================================================================
            C. CSC OFFICER / VLE WITH NOTEPAD (Right: Attentive, Guiding)
            ================================================================== */}
        <g transform="translate(-10, 0)">
          {/* Officer's Neat Hair & Head */}
          <path
            d="M 360 145 C 360 115 390 105 415 118 C 430 128 435 150 425 170"
            stroke="#38bdf8"
            strokeWidth="2.4"
            fill="rgba(56,189,248,0.12)"
          />
          <path
            d="M 370 160 C 370 185 380 205 395 215 C 410 215 422 200 422 175"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Attentive Eyes & Welcoming Smile */}
          <circle cx="382" cy="172" r="2.5" fill="#38bdf8" />
          <path d="M 378 190 C 385 196 395 196 400 190" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />

          {/* Collar & Official Digital Seva ID Lanyard */}
          <path d="M 380 215 L 395 235 L 410 215" stroke="#ffffff" strokeWidth="1.8" />
          {/* CSC Lanyard Ribbon & ID Badge */}
          <path d="M 388 225 L 388 275 L 398 275 L 398 225" stroke="#ff5500" strokeWidth="1.6" />
          <rect x="382" y="275" width="18" height="24" rx="2" stroke="#ff7733" strokeWidth="1.4" fill="#0a1628" />

          {/* Officer's Torso & Professional Shirt */}
          <path
            d="M 370 220 C 335 250 325 310 330 380 L 440 380 C 445 320 440 250 415 220 Z"
            stroke="#ffffff"
            strokeWidth="2"
            fill="rgba(255,255,255,0.04)"
          />

          {/* ================================================================
              THE KEY HERO PROP: OFFICIAL CLIPBOARD / NOTEPAD & STYLUS PEN
              ================================================================ */}
          <g transform="translate(305, 235)">
            {/* Clipboard Wooden Frame Backing */}
            <rect x="0" y="0" width="56" height="82" rx="5" stroke="#ffffff" strokeWidth="2.2" fill="#0f1f38" />
            {/* Metal Clip at Top */}
            <rect x="16" y="-6" width="24" height="10" rx="3" stroke="#fbbf24" strokeWidth="1.8" fill="#1e293b" />
            <circle cx="28" cy="-1" r="2" fill="#fbbf24" />

            {/* Application Form Paper Sheet */}
            <rect x="5" y="8" width="46" height="68" rx="2" stroke="#38bdf8" strokeWidth="1.2" fill="#0a1628" />

            {/* Official Citizen Form Lines & Checkbox Ticks */}
            <line x1="10" y1="18" x2="32" y2="18" stroke="#ff7733" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="26" x2="42" y2="26" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
            <line x1="10" y1="34" x2="40" y2="34" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
            <line x1="10" y1="42" x2="44" y2="42" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
            <line x1="10" y1="50" x2="36" y2="50" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />

            {/* Verified Green Checkmarks on Form */}
            <path d="M 36 24 L 39 27 L 45 22" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M 36 40 L 39 43 L 45 38" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />

            {/* Stylus / Pen Pointing Attentively to Form */}
            <line x1="44" y1="52" x2="62" y2="68" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="43" cy="51" r="1.5" fill="#ffffff" />
          </g>
        </g>

        {/* Luminous Trust Bridge: Glowing service ribbon connecting Citizen & Officer */}
        <motion.path
          d="M 185 240 C 230 210 270 210 320 250"
          stroke="url(#serviceRibbon)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </motion.div>
  );
}

// ============================================================================
// 3. SCENE 3: OFFICIAL CSC DIGITAL SEVA EMBLEM (Precision Vector Emblem)
// Crisp serif typography, national tricolor arcs, 16 orbital network nodes
// ============================================================================
function CscLogoScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 1.15, rotate: -20 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_0_35px_rgba(255,85,0,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Saffron & Emerald Tricolor Arc Gradients */}
          <linearGradient id="cscSaffron" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5500" />
            <stop offset="100%" stopColor="#ff7733" />
          </linearGradient>
          <linearGradient id="cscGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <radialGradient id="cscCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Ambient Glow */}
        <circle cx="250" cy="250" r="190" fill="url(#cscCenterGlow)" />

        {/* Outer Orbital Digital Connectivity Ring with 16 Village Nodes */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '250px', originY: '250px' }}
        >
          <circle cx="250" cy="250" r="218" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="250" cy="250" r="206" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />

          {/* 16 Radiating Gram Panchayat Digital Nodes */}
          {Array.from({ length: 16 }).map((_, i) => {
            const rot = (i * 360) / 16;
            const isSaffron = i % 2 === 0;
            return (
              <g key={i} transform={`rotate(${rot} 250 250)`}>
                <line x1="250" y1="206" x2="250" y2="218" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
                <circle cx="250" cy="218" r="3.5" fill={isSaffron ? '#ff5500' : '#10b981'} />
                <circle cx="250" cy="218" r="1.5" fill="#ffffff" />
              </g>
            );
          })}
        </motion.g>

        {/* Sweeping Saffron Upper Arc Ribbon (Top Half) */}
        <path
          d="M 90 250 A 160 160 0 0 1 410 250"
          stroke="url(#cscSaffron)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Sweeping Emerald Green Lower Arc Ribbon (Bottom Half) */}
        <path
          d="M 410 250 A 160 160 0 0 1 90 250"
          stroke="url(#cscGreen)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Inner Ashoka Chakra Concentric White Ring */}
        <circle cx="250" cy="250" r="142" stroke="#ffffff" strokeWidth="1.8" opacity="0.9" />
        <circle cx="250" cy="250" r="132" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

        {/* 24 Chakra Radiating Spokes */}
        {Array.from({ length: 24 }).map((_, i) => {
          const rot = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="250"
              y1="134"
              x2="250"
              y2="142"
              stroke="#0284c7"
              strokeWidth="1.2"
              transform={`rotate(${rot} 250 250)`}
            />
          );
        })}

        {/* ==================================================================
            BOLD, PRISTINE "CSC" BRAND TYPOGRAPHY (Precision Vector Paths)
            Clean, authoritative letters (NOT a sine wave or CZC!)
            ================================================================== */}
        <g transform="translate(0, -10)">
          {/* Letter 'C' (Left) */}
          <path
            d="M 180 200 C 170 185 145 185 130 200 C 112 218 112 262 130 280 C 145 295 170 295 180 280"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Letter 'S' (Middle — Graceful Official Curves) */}
          <path
            d="M 275 200 C 265 186 242 186 232 196 C 220 208 222 225 240 236 C 265 248 268 265 258 278 C 248 290 228 290 216 280"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Letter 'C' (Right) */}
          <path
            d="M 370 200 C 360 185 335 185 320 200 C 302 218 302 262 320 280 C 335 295 360 295 370 280"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Official Indian Saffron Accent Dot on CSC */}
          <circle cx="370" cy="190" r="5" fill="#ff5500" />
        </g>

        {/* Sub-label: "DIGITAL SEVA" / "ई-शासन" Golden Plaque Ribbon */}
        <g transform="translate(0, 30)">
          <path
            d="M 160 305 Q 250 320 340 305"
            stroke="#fbbf24"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <text
            x="250"
            y="335"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
            letterSpacing="5"
          >
            DIGITAL SEVA
          </text>
          <text
            x="250"
            y="354"
            textAnchor="middle"
            fill="#38bdf8"
            fontSize="10"
            fontWeight="600"
            letterSpacing="3"
          >
            COMMON SERVICES CENTRE
          </text>
        </g>
      </svg>
    </motion.div>
  );
}
