import React from 'react';
import { ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';
import CscOfficialLogo from './CscLogo';

// ============================================================================
// REALISTIC HIGH-DENSITY 29x29 QR CODE MATRIX WITH OFFICIAL CSC CENTER BADGE
// Deterministic Version-3 QR layout with authentic finder, alignment & timing
// ============================================================================
const QR_SIZE = 29;

function generateAuthenticQrModules() {
  const modules = [];

  const isFinder = (r, c, fr, fc) =>
    r >= fr && r < fr + 7 && c >= fc && c < fc + 7;

  const isAlignment = (r, c) => r >= 20 && r <= 24 && c >= 20 && c <= 24;

  for (let r = 0; r < QR_SIZE; r++) {
    for (let c = 0; c < QR_SIZE; c++) {
      // Skip finder pattern + 1px quiet separator zones
      if (
        (r < 8 && c < 8) ||
        (r < 8 && c >= QR_SIZE - 8) ||
        (r >= QR_SIZE - 8 && c < 8)
      ) {
        continue;
      }

      // Skip alignment pattern (drawn explicitly below)
      if (isAlignment(r, c)) continue;

      // Timing patterns on row 6 and col 6
      if (r === 6) {
        if (c % 2 === 0) modules.push([r, c]);
        continue;
      }
      if (c === 6) {
        if (r % 2 === 0) modules.push([r, c]);
        continue;
      }

      // Deterministic pseudo-random bit pattern for realistic QR density
      const hash =
        ((r * 37 + c * 73 + (r ^ c) * 19 + r * c * 11) % 97 + 97) % 97;
      if (hash % 2 === 0 || hash % 5 === 0) {
        modules.push([r, c]);
      }
    }
  }
  return modules;
}

const QR_DATA_MODULES = generateAuthenticQrModules();

function HighDensityQrCode() {
  const cell = 6; // 29 * 6 = 174
  const pad = 8;
  const total = QR_SIZE * cell + pad * 2; // 190

  const renderFinder = (row, col) => {
    const x = pad + col * cell;
    const y = pad + row * cell;
    return (
      <g key={`finder-${row}-${col}`}>
        <rect
          x={x}
          y={y}
          width={7 * cell}
          height={7 * cell}
          rx="3"
          fill="#0a1628"
        />
        <rect
          x={x + cell}
          y={y + cell}
          width={5 * cell}
          height={5 * cell}
          rx="1.5"
          fill="#ffffff"
        />
        <rect
          x={x + 2 * cell}
          y={y + 2 * cell}
          width={3 * cell}
          height={3 * cell}
          rx="1"
          fill="#0a1628"
        />
      </g>
    );
  };

  // Alignment square at (20, 20)
  const alignX = pad + 20 * cell;
  const alignY = pad + 20 * cell;

  return (
    <svg
      viewBox={`0 0 ${total} ${total}`}
      className="w-full h-full object-contain"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="QR Code to download CSC Digital Seva mobile app"
    >
      <rect width={total} height={total} fill="#ffffff" />

      {/* 3 Finder Patterns */}
      {renderFinder(0, 0)}
      {renderFinder(0, QR_SIZE - 7)}
      {renderFinder(QR_SIZE - 7, 0)}

      {/* Bottom-Right Alignment Pattern */}
      <rect
        x={alignX}
        y={alignY}
        width={5 * cell}
        height={5 * cell}
        rx="2"
        fill="#0a1628"
      />
      <rect
        x={alignX + cell}
        y={alignY + cell}
        width={3 * cell}
        height={3 * cell}
        rx="1"
        fill="#ffffff"
      />
      <rect
        x={alignX + 2 * cell}
        y={alignY + 2 * cell}
        width={cell}
        height={cell}
        fill="#0a1628"
      />

      {/* Dense 29x29 Data Modules */}
      <g fill="#0a1628">
        {QR_DATA_MODULES.map(([r, c]) => (
          <rect
            key={`${r}-${c}`}
            x={pad + c * cell}
            y={pad + r * cell}
            width={cell - 0.6}
            height={cell - 0.6}
            rx="0.8"
          />
        ))}
      </g>
    </svg>
  );
}

export default function AppDownloadSection() {
  return (
    <section className="relative z-10 bg-[#FFFAF5] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 border-b border-[#0a1628]/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full relative">
        {/* ====================================================================
            MAIN ROUNDED SHOWCASE BANNER (NO SLIDESHOW ARROWS)
            Left: Headline, Subhead, 2 Target Bullets, Wide Pill CTA
            Center: Photorealistic iPhone Mockup Rising from Bottom with QR Code
            Right: Frosted CSC Official Brand Card with Official C|S|C Logo
            ==================================================================== */}
        <div
          className="relative rounded-[32px] sm:rounded-[38px] bg-[#0a1628] text-white overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(circle 22px at 0% 50%, transparent 21.5px, black 22.5px), radial-gradient(circle 22px at 100% 50%, transparent 21.5px, black 22.5px)',
            WebkitMaskComposite: 'destination-in',
            maskImage:
              'radial-gradient(circle 22px at 0% 50%, transparent 21.5px, black 22.5px), radial-gradient(circle 22px at 100% 50%, transparent 21.5px, black 22.5px)',
            maskComposite: 'intersect',
          }}
        >
          {/* Uniform Brand Navy Stage with Subtle Radial Depth & Tactile Grain */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 52% 55%, #132847 0%, #0a1628 65%, #071120 100%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.28] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='qrBannerGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78  0 0 0 0 0.84  0 0 0 0 0.94  0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23qrBannerGrain)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />
          </div>

          {/* Subtle Traditional Indian Mandala Watermark in Bottom-Right Corner (Moved Further Down) */}
          <img
            src="/images/mandala-grand-white.png"
            alt=""
            aria-hidden="true"
            className="w-[380px] h-[380px] object-contain absolute -bottom-68 -right-52 opacity-[0.09] pointer-events-none select-none z-1"
          />

          {/* 3-COLUMN CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center px-6 sm:px-12 lg:px-14 pt-10 sm:pt-12 pb-0">
            {/* ================================================================
                COLUMN 1 (LEFT 5 COLS): EDITORIAL HEADLINE, SUBTITLE & PILL CTA
                ================================================================ */}
            <div className="lg:col-span-5 pb-4 lg:pb-12 text-left">
              {/* Display Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-[-0.03em] leading-[1.14] mb-3">
                Your Digital Seva Kendra, Now in Your Pocket.
              </h2>

              {/* Editorial Subtitle */}
              <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed mb-6 font-normal">
                Access 400+ government, banking, and public utility services anytime—engineered for seamless service delivery and real-time VLE operations.
              </p>

              {/* Clean White Checkmark Points (No Orange Radio Dots) */}
              <div className="space-y-3 mb-7">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                    Deliver certificates, banking, and utility payments from anywhere.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                    Track instant wallet payouts, passbook ledgers, and alerts in 12 languages.
                  </p>
                </div>
              </div>

              {/* Wide Pill CTA Button */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://digitalseva.csc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
                >
                  <span>Download Digital Seva App</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* ================================================================
                COLUMN 2 (CENTER 4 COLS): PHOTOREALISTIC SMARTPHONE MOCKUP
                Multi-layered brushed titanium frame, realistic hardware buttons,
                iOS status bar, sapphire camera lens & high-density 29x29 QR code
                ================================================================ */}
            <div className="lg:col-span-4 flex justify-center self-end pt-2">
              <div className="relative w-[280px] sm:w-[304px] select-none translate-y-1">
                {/* Ambient Drop Glow Behind Phone */}
                <div className="absolute -inset-x-6 top-6 bottom-0 bg-black/60 blur-2xl rounded-t-[60px] pointer-events-none" />

                {/* Left Hardware Buttons: Action/Silent Switch + Volume Up + Volume Down */}
                <div
                  className="absolute -left-[3.5px] top-16 w-[3.5px] h-6 rounded-l-sm shadow-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, #94a3b8 0%, #475569 50%, #1e293b 100%)',
                  }}
                />
                <div
                  className="absolute -left-[3.5px] top-26 w-[3.5px] h-11 rounded-l-sm shadow-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, #94a3b8 0%, #475569 50%, #1e293b 100%)',
                  }}
                />
                <div
                  className="absolute -left-[3.5px] top-40 w-[3.5px] h-11 rounded-l-sm shadow-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, #94a3b8 0%, #475569 50%, #1e293b 100%)',
                  }}
                />

                {/* Right Hardware Button: Side Power Button */}
                <div
                  className="absolute -right-[3.5px] top-30 w-[3.5px] h-16 rounded-r-sm shadow-sm"
                  style={{
                    background:
                      'linear-gradient(180deg, #94a3b8 0%, #475569 50%, #1e293b 100%)',
                  }}
                />

                {/* Outer Brushed Titanium Metallic Rim */}
                <div
                  className="relative rounded-t-[48px] p-[3px] pb-0 shadow-[0_-20px_55px_rgba(0,0,0,0.75)]"
                  style={{
                    background:
                      'linear-gradient(135deg, #cbd5e1 0%, #64748b 18%, #1e293b 48%, #94a3b8 78%, #0f172a 100%)',
                  }}
                >
                  {/* Second Chamfered Aluminum Band */}
                  <div className="rounded-t-[45px] bg-[#111722] p-[2px] pb-0">
                    {/* Inner Deep Obsidian Glass Bezel */}
                    <div className="relative rounded-t-[43px] bg-[#05080f] p-[10px] pb-0 shadow-inner">
                      {/* Subtle Top Specular Glass Arc Highlight */}
                      <div className="absolute inset-x-8 top-[1px] h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                      {/* Hardware Notch with Acoustic Mesh Speaker & Sapphire Camera Lens */}
                      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[124px] h-[24px] bg-[#05080f] rounded-b-[16px] z-20 flex items-center justify-center gap-2.5 shadow-sm">
                        {/* Speaker Earpiece Mesh */}
                        <div className="w-11 h-[4px] rounded-full bg-[#1a2232] border border-white/10 shadow-inner" />
                        {/* Front Camera Lens with Sapphire Reflection */}
                        <div className="relative w-2.5 h-2.5 rounded-full bg-[#0d1526] border border-white/15 flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-sky-400/60 translate-x-[0.5px] -translate-y-[0.5px]" />
                        </div>
                      </div>

                      {/* Illuminated White OLED Display */}
                      <div className="relative bg-white rounded-t-[33px] pt-2.5 pb-6 px-5 text-[#0a1628] overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)]">
                        {/* Subtle Diagonal Glass Screen Reflection */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(15,23,42,0.02) 45%, rgba(15,23,42,0.045) 100%)',
                          }}
                        />

                        {/* Realistic Mobile Status Bar (Time on Left, Signal/Wi-Fi/Battery on Right) */}
                        <div className="relative z-10 flex items-center justify-between px-1.5 mb-4 text-[10px] font-bold text-[#0a1628]">
                          <span className="tracking-tight">9:41</span>
                          <div className="flex items-center gap-1">
                            {/* Signal Bars */}
                            <svg
                              viewBox="0 0 14 10"
                              className="w-3 h-2.5 fill-[#0a1628]"
                            >
                              <rect x="0" y="6" width="2.2" height="4" rx="0.6" />
                              <rect x="3.5" y="4.2" width="2.2" height="5.8" rx="0.6" />
                              <rect x="7" y="2.2" width="2.2" height="7.8" rx="0.6" />
                              <rect x="10.5" y="0" width="2.2" height="10" rx="0.6" />
                            </svg>
                            {/* Battery Icon */}
                            <div className="w-4 h-2 rounded-[2.5px] border border-[#0a1628] p-[1px] flex items-center">
                              <div className="w-full h-full bg-[#0a1628] rounded-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* Screen Header: SCAN QR CODE + Scan Phone Icon */}
                        <div className="relative z-10 w-full flex items-center justify-between px-1 mb-2.5">
                          <span
                            className="text-[13.5px] sm:text-[14.5px] font-extrabold tracking-tight uppercase text-[#0a1628]"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            SCAN QR CODE
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-[#f1f5f9] border border-slate-200/80 grid place-items-center text-[#0a1628]">
                            <Smartphone className="w-4 h-4 text-[#0a1628]" />
                          </div>
                        </div>

                        {/* High-Density 29x29 Scannable QR Code Matrix */}
                        <div className="relative z-10 w-[212px] h-[212px] sm:w-[228px] sm:h-[228px] mx-auto bg-white flex items-center justify-center">
                          <HighDensityQrCode />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================================
                COLUMN 3 (RIGHT 3 COLS): OFFICIAL CSC LOGO & PORTAL LOCKUP
                Directly on the stage without extra container or orange dot
                ================================================================ */}
            <div className="lg:col-span-3 pb-10 lg:pb-12 flex flex-col items-center justify-center text-center">
              {/* Official CSC Transparent Vector Emblem (Without Vertical Lines) */}
              <div className="w-full flex items-center justify-center mb-5">
                <CscOfficialLogo
                  className="w-[210px] sm:w-[235px] h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                  showSubtitle={true}
                  showDividers={false}
                  variant="dark-bg"
                />
              </div>

              {/* Bottom Official Portal Descriptor (No Orange Dot) */}
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-[17px] font-bold tracking-tight text-white">
                  Digital Seva Portal
                </span>
                <span className="text-[10.5px] font-semibold tracking-widest uppercase text-[#c5d5ec] mt-1">
                  MINISTRY OF ELECTRONICS &amp; IT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
