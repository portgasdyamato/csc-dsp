import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import indiaMap from '@svg-maps/india';
import CscOfficialLogo from './CscLogo';
import {
  Building2,
  Fingerprint,
  IndianRupee,
  ShieldCheck,
  Wallet,
} from './SolidIcons';

// ============================================================================
// COUNT-UP METRIC
// ============================================================================
function CountUpMetric({ value, decimals = 0, labelSuffix = '', suffix = '+' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    const target = parseFloat(value);
    const duration = 1100;
    const startTime = performance.now();
    let animationFrame;

    const animateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}
      {labelSuffix}
      {suffix}
    </span>
  );
}

const SERVICE_BREAKDOWN = [
  {
    id: 'g2c',
    title: 'Certificates & ID',
    Icon: Fingerprint,
    bg: 'bg-[#162d52] text-white border border-white/15',
  },
  {
    id: 'banking',
    title: 'Banking & AEPS',
    Icon: IndianRupee,
    bg: 'bg-[#1e3a5f] text-white border border-white/15',
  },
  {
    id: 'utility',
    title: 'Bills & Utilities',
    Icon: Building2,
    bg: 'bg-[#254778] text-white border border-white/15',
  },
  {
    id: 'welfare',
    title: 'Welfare Schemes',
    Icon: ShieldCheck,
    bg: 'bg-[#2c528c] text-white border border-white/15',
  },
];

// ============================================================================
// IMPACT SCALE & INFRASTRUCTURE SECTION
// Unified light architectural Bento Grid in Crisp White, Slate & Deep Navy
// ============================================================================
export default function ImpactScaleSection() {
  return (
    <section
      aria-labelledby="impact-section-heading"
      className="relative z-10 bg-[#0a1628] text-white border-t border-white/15 border-b border-white/10 shadow-[0_-30px_35px_-12px_rgba(0,0,0,0.9)] py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8">
          <div className="max-w-2xl">
            <h2
              id="impact-section-heading"
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
            >
              Powering India’s Largest Citizen Service Network.
            </h2>
            <p className="text-xs sm:text-[14px] text-[#c5d5ec] mt-2.5 leading-relaxed font-normal max-w-xl">
              From mountain hamlets to coastal panchayats, local Village Level Entrepreneurs bring verified government, financial, and welfare access within walking distance of every family.
            </p>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] font-heading">
              <CountUpMetric value={10} decimals={0} labelSuffix=" Crore" suffix="+" />
            </div>
            <div className="text-xs font-medium text-[#9cb1d4] mt-0.5">
              Citizens Empowered Annually
            </div>
          </div>
        </div>

        {/* Asymmetric 2-Column Architectural Grid: Pure Inner Separator Lines Only */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-white/12">
          {/* ================================================================
              LEFT TALL BLOCK (6 COLS):
              5.5 Lakh+ Registered VLEs + Clean Concentric Orbital Rings
              ================================================================ */}
          <article className="lg:col-span-6 relative pt-8 pb-6 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/12 overflow-hidden flex flex-col justify-between min-h-[420px] sm:min-h-[470px]">
            <div className="relative z-10 max-w-md">
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-2 font-heading">
                <CountUpMetric value={5.5} decimals={1} labelSuffix=" Lakh" suffix="+" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                Registered Village Level Entrepreneurs
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed font-normal">
                Authorized local operators running Digital Seva Kendras in their own communities with single-sign-on access to central and state portals.
              </p>
            </div>

            {/* Balanced Concentric CSC Ecosystem Diagram — Exact Polar Placement */}
            <div className="relative z-10 mt-6 flex-1 min-h-[290px] sm:min-h-[330px] flex items-center justify-center">
              <div
                aria-hidden="true"
                className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
              >
                {/* Subtle Ambient Radial Depth Behind Hub */}
                <div
                  className="absolute inset-6 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(56,189,248,0.10) 0%, rgba(15,32,61,0.03) 58%, transparent 74%)',
                  }}
                />

                {/* 3 Mathematically Centered Concentric Rings (r = 46%, 32%, 21%) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] rounded-full border border-white/12" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[64%] h-[64%] rounded-full border border-white/18" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] rounded-full border border-white/15" />

                {/* 4 Subtle Cardinal Dots on Outer Ring (r = 46%) */}
                <span className="absolute left-1/2 top-[4%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="absolute left-[96%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="absolute left-1/2 top-[96%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="absolute left-[4%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />

                {/* Center CSC Hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/[0.06] shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center p-2.5 shadow-inner">
                    <CscOfficialLogo
                      className="w-16 sm:w-[74px] h-auto"
                      showSubtitle={false}
                      showDividers={false}
                      variant="light-bg"
                    />
                  </div>
                </div>

                {/* Middle Ring (r = 32%): 4 Cardinal Solid Service Nodes */}
                <div className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13294b] text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <Fingerprint className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </div>

                <div className="absolute left-[82%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13294b] text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <Wallet className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </div>

                <div className="absolute left-1/2 top-[82%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13294b] text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <Building2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </div>

                <div className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#13294b] text-white shadow-[0_6px_18px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </div>

                {/* Outer Ring (r = 46%, 45° Diagonals): 4 Tightly-Framed VLE Portraits */}
                <div className="absolute left-[82.53%] top-[17.47%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden bg-[#162d52] shadow-[0_8px_22px_rgba(0,0,0,0.5)]">
                  <img
                    src="/images/vle-rajeshwar-cutout.png"
                    alt="VLE Rajeshwar Rao"
                    className="w-full h-full object-cover object-top scale-[1.55] translate-y-2"
                  />
                </div>

                <div className="absolute left-[82.53%] top-[82.53%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden bg-[#162d52] shadow-[0_8px_22px_rgba(0,0,0,0.5)]">
                  <img
                    src="/images/vle-meenakshi-cutout.png"
                    alt="VLE Meenakshi Nair"
                    className="w-full h-full object-cover object-top scale-[1.55] translate-y-2"
                  />
                </div>

                <div className="absolute left-[17.47%] top-[82.53%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden bg-[#162d52] shadow-[0_8px_22px_rgba(0,0,0,0.5)]">
                  <img
                    src="/images/vle-gurpreet-cutout.png"
                    alt="VLE Gurpreet Singh"
                    className="w-full h-full object-cover object-top scale-[1.55] translate-y-2"
                  />
                </div>

                <div className="absolute left-[17.47%] top-[17.47%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden bg-[#162d52] shadow-[0_8px_22px_rgba(0,0,0,0.5)]">
                  <img
                    src="/images/vle-sunita-cutout.png"
                    alt="VLE Sunita Devi"
                    className="w-full h-full object-cover object-top scale-[1.55] translate-y-2"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* ================================================================
              RIGHT COLUMN (6 COLS): TWO STACKED BLOCKS SEPARATED BY HAIRLINE
              ================================================================ */}
          <div className="lg:col-span-6 flex flex-col">
            {/* TOP RIGHT BLOCK: 700+ Districts Connected + Clean India Map */}
            <article className="relative flex-1 py-8 lg:pl-8 border-b border-white/12 overflow-hidden min-h-[210px] flex flex-col justify-between">
              <div className="relative z-10 max-w-[65%] sm:max-w-xs">
                <div className="text-3xl sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-1.5 font-heading">
                  <CountUpMetric value={700} decimals={0} suffix="+" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1.5">
                  Districts Connected
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed font-normal">
                  Active presence across all 36 States &amp; Union Territories, reaching remote blocks and border panchayats.
                </p>
              </div>

              {/* Clean Architectural India Silhouette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 sm:right-2 bottom-2 w-[140px] sm:w-[175px] h-[160px] sm:h-[195px]"
              >
                <svg
                  viewBox={indiaMap.viewBox}
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g>
                    {indiaMap.locations.map((loc) => {
                      const highlight = ['up', 'mp', 'mh', 'rj', 'tg', 'tn', 'wb', 'as'].includes(loc.id);
                      return (
                        <path
                          key={loc.id}
                          d={loc.path}
                          fill={highlight ? '#2a4d7c' : '#1b355c'}
                          stroke="#0a1628"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            </article>

            {/* BOTTOM RIGHT BLOCK: 400+ Essential Services — Calm, Low-Cognitive */}
            <article className="flex-1 pt-8 pb-4 lg:pl-8 flex flex-col justify-between min-h-[210px]">
              <div>
                <div className="text-3xl sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-1.5 font-heading">
                  <CountUpMetric value={400} decimals={0} suffix="+" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1.5">
                  Essential Citizen Services
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed font-normal max-w-sm">
                  Certificates, banking, utility bills, and welfare schemes — all under one roof in 12+ languages.
                </p>
              </div>

              {/* Clean Single-Row Overlapping Solid Service Badges */}
              <div className="mt-6 flex items-center">
                {SERVICE_BREAKDOWN.map(({ id, title, Icon, bg }, idx) => (
                  <div
                    key={id}
                    title={title}
                    aria-label={title}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-[3px] ring-[#0a1628] shadow-xs ${bg} ${
                      idx > 0 ? '-ml-2.5' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}

                <div className="-ml-2.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0a1628] flex items-center justify-center font-bold text-xs ring-[3px] ring-[#0a1628] shadow-xs">
                  +396
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
