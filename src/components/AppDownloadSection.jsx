import React from 'react';
import { ArrowRight } from 'lucide-react';

// ============================================================================
// CLEAN VECTOR QR CODE COMPONENT (AUTHENTIC MATRIX WITH CENTER BRAND MARK)
// ============================================================================
function MinimalQrCode({ label = 'CSC', isVle = false }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className="w-full h-full object-contain"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`QR Code to download ${label} app`}
    >
      {/* Crisp White Canvas */}
      <rect width="160" height="160" fill="#ffffff" />

      {/* TOP-LEFT FINDER PATTERN */}
      <rect x="10" y="10" width="38" height="38" fill="#000000" />
      <rect x="16" y="16" width="26" height="26" fill="#ffffff" />
      <rect x="22" y="22" width="14" height="14" fill="#000000" />

      {/* TOP-RIGHT FINDER PATTERN */}
      <rect x="112" y="10" width="38" height="38" fill="#000000" />
      <rect x="118" y="16" width="26" height="26" fill="#ffffff" />
      <rect x="124" y="22" width="14" height="14" fill="#000000" />

      {/* BOTTOM-LEFT FINDER PATTERN */}
      <rect x="10" y="112" width="38" height="38" fill="#000000" />
      <rect x="16" y="118" width="26" height="26" fill="#ffffff" />
      <rect x="22" y="124" width="14" height="14" fill="#000000" />

      {/* BOTTOM-RIGHT ALIGNMENT SQUARE */}
      <rect x="116" y="116" width="20" height="20" fill="#000000" />
      <rect x="120" y="120" width="12" height="12" fill="#ffffff" />
      <rect x="124" y="124" width="4" height="4" fill="#000000" />

      {/* TIMING PATTERNS */}
      <g fill="#000000">
        <rect x="52" y="18" width="5" height="5" />
        <rect x="62" y="18" width="5" height="5" />
        <rect x="72" y="18" width="5" height="5" />
        <rect x="82" y="18" width="5" height="5" />
        <rect x="92" y="18" width="5" height="5" />
        <rect x="102" y="18" width="5" height="5" />

        <rect x="18" y="52" width="5" height="5" />
        <rect x="18" y="62" width="5" height="5" />
        <rect x="18" y="72" width="5" height="5" />
        <rect x="18" y="82" width="5" height="5" />
        <rect x="18" y="92" width="5" height="5" />
        <rect x="18" y="102" width="5" height="5" />
      </g>

      {/* REALISTIC SCATTERED DATA MATRIX PIXELS */}
      <g fill="#000000">
        {/* Top-Center region */}
        <rect x="52" y="28" width="5" height="10" />
        <rect x="62" y="38" width="10" height="5" />
        <rect x="77" y="28" width="5" height="5" />
        <rect x="87" y="33" width="10" height="10" />
        <rect x="102" y="28" width="5" height="15" />

        {/* Left-Middle region */}
        <rect x="28" y="52" width="5" height="10" />
        <rect x="38" y="62" width="10" height="5" />
        <rect x="28" y="77" width="15" height="5" />
        <rect x="33" y="87" width="10" height="10" />
        <rect x="28" y="102" width="5" height="5" />

        {/* Right-Middle region */}
        <rect x="112" y="52" width="10" height="5" />
        <rect x="127" y="52" width="5" height="10" />
        <rect x="137" y="52" width="10" height="5" />
        <rect x="112" y="67" width="5" height="15" />
        <rect x="122" y="72" width="15" height="5" />
        <rect x="142" y="67" width="5" height="20" />
        <rect x="112" y="92" width="10" height="5" />
        <rect x="127" y="87" width="10" height="10" />
        <rect x="142" y="97" width="5" height="10" />

        {/* Bottom-Center region */}
        <rect x="52" y="112" width="10" height="5" />
        <rect x="67" y="112" width="5" height="15" />
        <rect x="77" y="122" width="15" height="5" />
        <rect x="97" y="112" width="5" height="10" />
        <rect x="52" y="132" width="5" height="10" />
        <rect x="62" y="137" width="15" height="5" />
        <rect x="82" y="132" width="10" height="10" />
        <rect x="97" y="127" width="5" height="15" />

        {/* Center Surrounding modules */}
        <rect x="52" y="52" width="10" height="5" />
        <rect x="67" y="57" width="5" height="10" />
        <rect x="52" y="72" width="10" height="10" />
        <rect x="52" y="92" width="15" height="5" />
        <rect x="92" y="52" width="15" height="5" />
        <rect x="92" y="67" width="5" height="10" />
        <rect x="92" y="87" width="10" height="10" />
      </g>

      {/* CENTER BRAND BADGE */}
      <rect x="62" y="65" width="36" height="30" rx="3" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
      <rect x="65" y="68" width="30" height="24" rx="2" fill={isVle ? '#0a1628' : '#ff5500'} />
      <text
        x="80"
        y="84"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="11"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.5"
      >
        {label}
      </text>
    </svg>
  );
}

// ============================================================================
// SIMPLE & ELEGANT QR APP DOWNLOAD SECTION (MINIMAL UBER-STYLE INSPIRATION)
// 2 side-by-side clean white cards with QR codes and right arrows
// ============================================================================
export default function AppDownloadSection() {
  const apps = [
    {
      id: 'citizen',
      title: 'Download the CSC Seva app',
      subtitle: 'Scan to download',
      label: 'CSC',
      isVle: false,
      href: 'https://digitalseva.csc.gov.in',
    },
    {
      id: 'vle',
      title: 'Download the VLE Kendra app',
      subtitle: 'Scan to download',
      label: 'VLE',
      isVle: true,
      href: 'https://register.csc.gov.in',
    },
  ];

  return (
    <section className="relative z-10 bg-[#FFFAF5] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 border-b border-white/10 text-white">
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-black
         tracking-[-0.02em] mb-7 sm:mb-8">
          It’s easier in the apps
        </h2>

        {/* 2 Clean Side-by-Side App Download Cards in Deep Navy with Pure White Text & Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#071120] hover:bg-[#0e213d] rounded-2xl p-5 sm:p-6 lg:p-7 flex items-center justify-between border border-white/15 hover:border-white/30 hover:shadow-2xl transition-all duration-300 group select-none text-decoration-none"
            >
              {/* Left Side: QR Code + Text Details */}
              <div className="flex items-center gap-5 sm:gap-6">
                {/* QR Code Container */}
                <div className="w-[100px] h-[100px] sm:w-[115px] sm:h-[115px] shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                  <MinimalQrCode label={app.label} isVle={app.isVle} />
                </div>

                {/* Text Details (Pure White Title, Light Slate Subtitle) */}
                <div>
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white tracking-tight leading-snug group-hover:text-[#ff884d] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                    {app.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Arrow (Pure White, transitions on hover) */}
              <div className="shrink-0 ml-4 pl-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#ff5500] transition-all duration-300 group-hover:translate-x-1.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
