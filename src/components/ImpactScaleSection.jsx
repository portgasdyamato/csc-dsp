import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

// ============================================================================
// HIGH-PRECISION COUNT-UP ODOMETER COMPONENT
// Smoothly counts up from 0 to target when scrolled into view
// Uses cubic ease-out for a realistic, grounded acceleration & deceleration
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
    const duration = 1600; // 1.6s smooth duration
    const startTime = performance.now();

    let animationFrame;

    const animateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic-out easing curve (starts quick, glides into final number)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplayValue(current);

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
      <span className="text-[#ff5500]">{suffix}</span>
    </span>
  );
}

// ============================================================================
// IMPACT SCALE & INFRASTRUCTURE SECTION
// Seamless Upper Drop Shadow (Zero Gap, Zero Bottom Bleed) + Animated Counters
// ============================================================================
export default function ImpactScaleSection() {
  return (
    <section className="relative z-10 bg-[#0a1628] border-t border-white/20 border-b border-white/10 shadow-[0_-30px_35px_-12px_rgba(0,0,0,0.9)] py-12 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Editorial Section Header: Clean, grounded, dignified */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#ff7733] uppercase mb-2">
            Unmatched Scale & Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-[-0.02em] leading-tight">
            Powering India's Largest Citizen Service Network
          </h2>
          <p className="text-xs sm:text-sm text-[#9cb1d4] mt-2 max-w-2xl leading-relaxed font-normal">
            Serving remote corners across every pin code with trusted digital accessibility.
          </p>
        </div>

        {/* Pure Typographic Broadsheet Spec Strip with Smooth Animated Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10 text-left pt-6 border-t border-white/10">
          {/* Metric 1: 5.5 Lakh+ */}
          <div className="lg:px-8 first:lg:pl-0">
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
              <CountUpMetric value={5.5} decimals={1} labelSuffix=" Lakh" suffix="+" />
            </div>
            <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
              Registered VLEs
            </div>
            <p className="text-xs text-[#9cb1d4] leading-relaxed">
              Active across 36 States & Union Territories.
            </p>
          </div>

          {/* Metric 2: 700+ */}
          <div className="lg:px-8">
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
              <CountUpMetric value={700} decimals={0} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
              Districts Serviced
            </div>
            <p className="text-xs text-[#9cb1d4] leading-relaxed">
              Deep penetration reaching remote tribal & border belts.
            </p>
          </div>

          {/* Metric 3: 500+ */}
          <div className="lg:px-8">
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
              <CountUpMetric value={500} decimals={0} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
              G2C & B2C Services
            </div>
            <p className="text-xs text-[#9cb1d4] leading-relaxed">
              Single sign-on gateway for welfare, banking, & utilities.
            </p>
          </div>

          {/* Metric 4: 10 Crore+ */}
          <div className="lg:px-8 last:lg:pr-0">
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none mb-1.5">
              <CountUpMetric value={10} decimals={0} labelSuffix=" Crore" suffix="+" />
            </div>
            <div className="text-xs font-semibold text-white/90 uppercase tracking-[0.1em] mb-1">
              Citizens Empowered
            </div>
            <p className="text-xs text-[#9cb1d4] leading-relaxed">
              Processed Aadhaar, pension, and banking authentications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
