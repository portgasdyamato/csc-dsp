import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

// ============================================================================
// HIGH-PRECISION COUNT-UP ODOMETER COMPONENT
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
    const duration = 1450;
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
      <span className="text-[#7ca5e8] ml-0.5">{suffix}</span>
    </span>
  );
}

const IMPACT_STATS = [
  {
    id: 'vles',
    value: 5.5,
    decimals: 1,
    labelSuffix: ' Lakh',
    suffix: '+',
    title: 'Registered VLEs',
    context: 'Local entrepreneurs running Digital Seva Kendras across 36 States & UTs.',
  },
  {
    id: 'districts',
    value: 700,
    decimals: 0,
    labelSuffix: '',
    suffix: '+',
    title: 'Districts Connected',
    context: 'Reaching remote gram panchayats, tribal blocks, and border villages.',
  },
  {
    id: 'services',
    value: 400,
    decimals: 0,
    labelSuffix: '',
    suffix: '+',
    title: 'Essential Services',
    context: 'Single-window access to government schemes, banking, and utility bills.',
  },
  {
    id: 'citizens',
    value: 10,
    decimals: 0,
    labelSuffix: ' Crore',
    suffix: '+',
    title: 'Citizens Empowered',
    context: 'Seamless doorstep Aadhaar, pension, and welfare authentications.',
  },
];

// ============================================================================
// IMPACT SCALE & INFRASTRUCTURE SECTION
// Grounded editorial storytelling + clear contextual metrics on Brand Navy
// ============================================================================
export default function ImpactScaleSection() {
  return (
    <section className="relative z-10 bg-[#0a1628] border-t border-white/15 border-b border-white/10 shadow-[0_-30px_35px_-12px_rgba(0,0,0,0.9)] py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Uniform Brand Navy Stage with Subtle Radial Depth & Tactile Grain */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 25% 25%, #112442 0%, #0a1628 60%, #071120 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.26] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='impactGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78  0 0 0 0 0.84  0 0 0 0 0.94  0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23impactGrain)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Top Editorial Row: Clear Story & Context + Right-Side 5-Petal Lotus Accent */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-white/12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-[-0.03em] leading-[1.12]">
              Powering India’s Largest Citizen Service Network.
            </h2>

            <p className="text-xs sm:text-[14px] text-[#c5d5ec] mt-2.5 leading-relaxed font-normal max-w-xl">
              From mountain hamlets to coastal panchayats, local Village Level Entrepreneurs bring verified government, financial, and welfare access within walking distance of every family.
            </p>
          </div>

          {/* 5-Petal Lotus Silhouette Accent on Right Empty Space (Crisp Masked Separation) */}
          <div className="hidden lg:flex items-center justify-end shrink-0 pr-2">
            <svg
              viewBox="0 0 200 135"
              className="w-36 xl:w-44 h-auto opacity-[0.20] select-none pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Cut center petal + 4px gap out of inner petals */}
                <mask id="lotus-inner-mask">
                  <rect width="200" height="135" fill="white" />
                  <path
                    d="M 100 110 C 75 84 75 40 100 14 C 125 40 125 84 100 110 Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="9"
                    strokeLinejoin="round"
                  />
                </mask>
                {/* Cut inner petals + center petal + 4px gap out of outer petals */}
                <mask id="lotus-outer-mask">
                  <rect width="200" height="135" fill="white" />
                  <path
                    d="M 100 110 C 75 84 75 40 100 14 C 125 40 125 84 100 110 Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="9"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 94 113 C 62 102 44 72 44 36 C 72 40 90 68 94 113 Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="9"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 106 113 C 138 102 156 72 156 36 C 128 40 110 68 106 113 Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="9"
                    strokeLinejoin="round"
                  />
                </mask>
              </defs>

              <g fill="#ffffff">
                {/* Outer Left & Right Flared Petals */}
                <g mask="url(#lotus-outer-mask)">
                  <path d="M 90 118 C 50 124 20 106 10 78 C 36 66 70 78 90 118 Z" />
                  <path d="M 110 118 C 150 124 180 106 190 78 C 164 66 130 78 110 118 Z" />
                </g>

                {/* Inner Left & Right Petals */}
                <g mask="url(#lotus-inner-mask)">
                  <path d="M 94 113 C 62 102 44 72 44 36 C 72 40 90 68 94 113 Z" />
                  <path d="M 106 113 C 138 102 156 72 156 36 C 128 40 110 68 106 113 Z" />
                </g>

                {/* Center Main Lotus Petal */}
                <path d="M 100 110 C 75 84 75 40 100 14 C 125 40 125 84 100 110 Z" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom 4 Contextual Architectural Stat Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/12 pt-8 sm:pt-10">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`text-left ${idx > 0 ? 'lg:pl-8' : ''} ${
                idx < IMPACT_STATS.length - 1 ? 'lg:pr-8' : ''
              }`}
            >
              <div
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-none mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <CountUpMetric
                  value={stat.value}
                  decimals={stat.decimals}
                  labelSuffix={stat.labelSuffix}
                  suffix={stat.suffix}
                />
              </div>

              <div className="text-[13.5px] font-bold text-white tracking-tight mb-1.5">
                {stat.title}
              </div>

              <p className="text-xs text-[#9cb1d4] leading-relaxed font-normal">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
