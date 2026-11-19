import React, { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  ShieldCheck,
  Headphones,
  MessageSquare,
  MapPin,
  Sparkles,
  Laptop,
  Printer,
  CheckCircle2,
} from 'lucide-react';
import { PLATFORM_CARDS } from '../data/dspData';

/**
 * 5-Card Asymmetric Bento Grid for "#about" ("Why Join As A VLE Today?").
 * Row 1: 3 equal columns (4 + 4 + 4) -> Hometown Enterprise, Monthly Income, Zero Franchise Fee
 * Row 2: 2 wide asymmetric columns (7 + 5) -> Community Impact Stream, Govt Backing Pedestal
 */
export default function WhyVleBentoSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredBarIdx, setHoveredBarIdx] = useState(null);
  const cards = PLATFORM_CARDS.slice(0, 5);

  const monthlyBars = [
    { month: 'Jan', h: 38, amount: '₹28,400' },
    { month: 'Feb', h: 48, amount: '₹31,200' },
    { month: 'Mar', h: 45, amount: '₹30,500' },
    { month: 'Apr', h: 64, amount: '₹36,800' },
    { month: 'May', h: 72, amount: '₹39,400' },
    { month: 'Jun', h: 84, amount: '₹44,200' },
    { month: 'Jul', h: 94, amount: '₹48,500' },
  ];

  const activeBarIdx =
    hoveredBarIdx !== null ? hoveredBarIdx : hoveredIdx === 1 ? 6 : 5;
  const activeBar = monthlyBars[activeBarIdx];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 bg-[#060e1d] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      {/* Layered Atmospheric Light Washes for True Frosted Glass Refraction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[680px] h-[420px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(37,99,235,0.28) 0%, rgba(15,35,70,0.12) 55%, transparent 80%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/5 w-[640px] h-[400px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,85,0,0.16) 0%, rgba(30,58,138,0.14) 50%, transparent 80%)',
        }}
      />
      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-[-0.03em] text-white leading-[1.1]">
            Why Join As A VLE Today?
          </h2>
          <p className="text-xs sm:text-[14px] text-[#8fa5c9] leading-relaxed mt-3 font-normal">
            Build a respected digital enterprise in your community with steady daily income and official government backing.
          </p>
        </div>

        {/* 5-Card Asymmetric 12-Col Bento Grid (3 Top: 4+4+4 | 2 Bottom: 7+5) */}
        <MotionConfig transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* ================================================================
              CARD 01 (Row 1, 4 cols): Run Your Own Hometown Enterprise
              Unique Visual: Topographic Village Street Grid + Local Pin Beacon
              ================================================================ */}
          <article
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(0)}
            onBlur={() => setHoveredIdx(null)}
            tabIndex={0}
            className="lg:col-span-4 group relative rounded-[12px] bg-gradient-to-b from-white/[0.11] via-white/[0.045] to-white/[0.015] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-500 ease-out cursor-pointer outline-none"
          >
            {/* Subtle Ambient Spotlight */}
            <motion.div
              animate={{ opacity: hoveredIdx === 0 ? 0.55 : 0.2 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 34%, rgba(255,110,45,0.12) 0%, transparent 65%)',
              }}
            />

            {/* Top Stage: Clean Architectural Block Grid + 3D Location Beacon */}
            <div className="relative z-10 h-[200px] flex items-center justify-center overflow-hidden">
              {/* Crisp Architectural Town Block Grid (Masked Smoothly at Edges) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 p-2 opacity-65"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 30%, transparent 82%)',
                }}
              >
                {Array.from({ length: 24 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`rounded-md border transition-colors duration-500 ${
                      idx === 8 || idx === 9 || idx === 14 || idx === 15
                        ? hoveredIdx === 0
                          ? 'bg-white/[0.06] border-white/20'
                          : 'bg-white/[0.03] border-white/[0.09]'
                        : 'bg-white/[0.015] border-white/[0.05]'
                    }`}
                  />
                ))}
              </div>

              {/* Expanding Concentric Coverage Rings (Neutral White Glass) */}
              <motion.div
                animate={{
                  scale: hoveredIdx === 0 ? 1.2 : 1,
                  opacity: hoveredIdx === 0 ? 0.65 : 0.25,
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-36 h-36 rounded-full border border-white/25 pointer-events-none"
              />
              <motion.div
                animate={{
                  scale: hoveredIdx === 0 ? 1.35 : 1,
                  opacity: hoveredIdx === 0 ? 0.4 : 0.12,
                }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-48 h-48 rounded-full border border-white/20 pointer-events-none"
              />

              {/* Center 3D Beveled Location Pin Beacon */}
              <motion.div
                animate={{
                  y: hoveredIdx === 0 ? -5 : 0,
                  scale: hoveredIdx === 0 ? 1.08 : 1,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-[#ff8c52] via-[#ff5500] to-[#9c3200] border-t border-white/55 border-x border-b border-x-white/15 border-b-black/50 grid place-items-center text-white shadow-[0_12px_26px_rgba(0,0,0,0.5),0_4px_14px_rgba(255,85,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.45)]"
              >
                <MapPin className="w-7 h-7 drop-shadow-md" />
              </motion.div>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[0]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[0]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 02 (Row 1, 4 cols): Earn Financial Independence Daily
              Unique Visual: Kinetic 7-Month Rising Income Pillars
              ================================================================ */}
          <article
            onMouseEnter={() => setHoveredIdx(1)}
            onMouseLeave={() => {
              setHoveredIdx(null);
              setHoveredBarIdx(null);
            }}
            onFocus={() => setHoveredIdx(1)}
            onBlur={() => {
              setHoveredIdx(null);
              setHoveredBarIdx(null);
            }}
            tabIndex={0}
            className="lg:col-span-4 group relative rounded-[12px] bg-gradient-to-b from-white/[0.11] via-white/[0.045] to-white/[0.015] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-500 ease-out cursor-pointer outline-none"
          >
            {/* Subtle Ambient Top-Right Warm Glow */}
            <motion.div
              animate={{ opacity: hoveredIdx === 1 ? 0.55 : 0.2 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 68% 26%, rgba(255,115,45,0.12) 0%, transparent 65%)',
              }}
            />

            {/* Top Stage: Sculptural 7-Month Commission Pillars */}
            <div className="relative z-10 h-[200px] flex flex-col justify-between pt-2 pb-1 px-2 sm:px-4">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/45">
                  Monthly Commission Flow
                </span>
                <motion.div
                  animate={{ scale: hoveredIdx === 1 ? 1.05 : 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-right"
                >
                  <span className="text-2xl font-semibold text-white tabular-nums tracking-tight transition-colors duration-300">
                    {activeBar.amount}
                  </span>
                  <span className="text-xs font-normal text-[#ff884d] ml-1">/mo</span>
                  <span
                    className={`text-[10px] font-mono text-white/50 ml-1.5 transition-opacity duration-300 ${
                      hoveredBarIdx !== null ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    · {activeBar.month}
                  </span>
                </motion.div>
              </div>

              {/* 7 Rising Interactive Monthly Pillars (Always Exactly 1 Active Bar) */}
              <div className="h-[132px] flex items-end justify-between gap-2.5 sm:gap-3 pt-2">
                {monthlyBars.map((bar, i) => {
                  const isSelected = activeBarIdx === i;
                  return (
                    <div
                      key={bar.month}
                      onMouseEnter={() => setHoveredBarIdx(i)}
                      onMouseLeave={() => setHoveredBarIdx(null)}
                      className="flex-1 h-full flex flex-col items-center justify-end gap-2 cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          height:
                            hoveredBarIdx === i
                              ? `${Math.min(100, bar.h + 16)}%`
                              : hoveredIdx === 1
                                ? `${Math.min(100, bar.h + 12)}%`
                                : `${bar.h}%`,
                          y: hoveredBarIdx === i ? -4 : hoveredIdx === 1 ? -2 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: hoveredBarIdx !== null ? 0 : i * 0.035,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`w-full rounded-t-xl border-t transition-colors duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-b from-[#ff8c52] via-[#ff5500] to-[#ff5500]/20 border-white/50 shadow-[0_-4px_14px_rgba(255,85,0,0.22)]'
                            : hoveredIdx === 1
                              ? 'bg-gradient-to-b from-white/25 to-white/[0.03] border-white/30'
                              : 'bg-gradient-to-b from-white/14 to-white/[0.02] border-white/15'
                        }`}
                      />
                      <span
                        className={`text-[10px] font-mono transition-colors ${
                          isSelected ? 'text-[#ff884d] font-semibold' : 'text-white/35'
                        }`}
                      >
                        {bar.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[1]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[1]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 05 (Row 1, 4 cols): Zero Franchise Fee
              Unique Visual: ₹0 Portal Fee Comparison + Existing Hardware Badges
              ================================================================ */}
          <article
            onMouseEnter={() => setHoveredIdx(4)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(4)}
            onBlur={() => setHoveredIdx(null)}
            tabIndex={0}
            className="lg:col-span-4 group relative rounded-[12px] bg-gradient-to-b from-white/[0.11] via-white/[0.045] to-white/[0.015] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-500 ease-out cursor-pointer outline-none"
          >
            {/* Subtle Ambient Spotlight */}
            <motion.div
              animate={{ opacity: hoveredIdx === 4 ? 0.55 : 0.2 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 34%, rgba(255,115,45,0.12) 0%, transparent 66%)',
              }}
            />

            {/* Top Stage: ₹0 Onboarding vs Private Royalties + Existing Gear */}
            <div className="relative z-10 h-[200px] flex flex-col items-center justify-center gap-3.5 px-2">
              {/* Top Muted Comparison: Private Franchises */}
              <motion.div
                animate={{
                  opacity: hoveredIdx === 4 ? 0.35 : 0.65,
                  y: hoveredIdx === 4 ? -3 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-[260px] rounded-xl bg-white/[0.025] border border-white/[0.07] px-3.5 py-2 flex items-center justify-between text-[11px]"
              >
                <span className="text-white/45">Private Franchises</span>
                <span className="font-mono text-white/35 line-through">₹2,00,000+</span>
              </motion.div>

              {/* Center Hero ₹0 CSC Government Portal Pill */}
              <motion.div
                animate={{
                  scale: hoveredIdx === 4 ? 1.07 : 1,
                  y: hoveredIdx === 4 ? -2 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[275px] rounded-2xl bg-gradient-to-r from-[#ff7733] to-[#ff5500] px-4 py-3 flex items-center justify-between shadow-[0_10px_24px_rgba(0,0,0,0.45),0_4px_12px_rgba(255,85,0,0.2)]"
              >
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold">CSC Portal Onboarding</span>
                </div>
                <span className="text-lg font-bold text-white tabular-nums">₹0</span>
              </motion.div>

              {/* Bottom Existing Hardware Chips */}
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ x: hoveredIdx === 4 ? -4 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[10.5px] text-white/75"
                >
                  <Laptop className="w-3 h-3 text-[#ff884d]" />
                  <span>Existing Laptop</span>
                </motion.div>
                <motion.div
                  animate={{ x: hoveredIdx === 4 ? 4 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[10.5px] text-white/75"
                >
                  <Printer className="w-3 h-3 text-[#ff884d]" />
                  <span>Standard Printer</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[4]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[4]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 03 (Row 2, 7 cols): Community Respect & National Impact
              Unique Visual: Staggered Citizen-Impact Pill Stream Across Bharat
              ================================================================ */}
          <article
            onMouseEnter={() => setHoveredIdx(2)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(2)}
            onBlur={() => setHoveredIdx(null)}
            tabIndex={0}
            className="lg:col-span-7 group relative rounded-[12px] bg-gradient-to-b from-white/[0.11] via-white/[0.045] to-white/[0.015] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-7 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-500 ease-out cursor-pointer outline-none"
          >
            {/* Subtle Ambient Spotlight */}
            <motion.div
              animate={{ opacity: hoveredIdx === 2 ? 0.55 : 0.2 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 34%, rgba(255,115,45,0.12) 0%, transparent 65%)',
              }}
            />

            {/* Top Stage: Staggered Citizen Welfare & National Impact Stream */}
            <div
              className="relative z-10 h-[200px] -mx-6 sm:-mx-7 flex flex-col justify-center gap-3 overflow-hidden select-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)',
              }}
            >
              {/* Row 1 */}
              <motion.div
                animate={{ x: hoveredIdx === 2 ? -34 : 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                {['Senior Pensions', 'Ayushman Health', 'PM-Kisan KYC', 'Scholarships'].map(
                  (tag, i) => (
                    <span
                      key={tag}
                      className={`px-3.5 py-2 rounded-full border text-[11.5px] font-medium transition-colors duration-300 ${
                        i === 1 && hoveredIdx === 2
                          ? 'bg-white/[0.12] border-white/25 text-white'
                          : 'bg-white/[0.04] border-white/[0.09] text-white/65'
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </motion.div>

              {/* Row 2: Highlighted Hero Impact Pill */}
              <motion.div
                animate={{ x: hoveredIdx === 2 ? 26 : -10 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <span className="px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11.5px] font-medium text-white/55">
                  Gram Panchayats
                </span>
                <motion.span
                  animate={{
                    scale: hoveredIdx === 2 ? 1.07 : 1,
                    y: hoveredIdx === 2 ? -2 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#ff7733] to-[#ff5500] text-white text-[12px] font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.45),0_3px_12px_rgba(255,85,0,0.2)] inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>10 Crore+ Citizens Empowered</span>
                </motion.span>
                <span className="px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11.5px] font-medium text-white/55">
                  Telemedicine
                </span>
              </motion.div>

              {/* Row 3 */}
              <motion.div
                animate={{ x: hoveredIdx === 2 ? -24 : 12 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                {['Rural Banking', 'Digital Literacy', 'Certificates', '12 Languages'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-[11.5px] font-medium text-white/45"
                    >
                      {tag}
                    </span>
                  )
                )}
              </motion.div>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[2]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[2]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 04 (Row 2, 5 cols): Official Government Portal Backing
              Visual: Volumetric Spotlight + 3D Beveled Concentric Shield Pedestal
              ================================================================ */}
          <article
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(3)}
            onBlur={() => setHoveredIdx(null)}
            tabIndex={0}
            className="md:col-span-2 lg:col-span-5 group relative rounded-[12px] bg-gradient-to-b from-white/[0.11] via-white/[0.045] to-white/[0.015] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-7 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-500 ease-out cursor-pointer outline-none"
          >
            {/* Subtle Diagonal Top-Right Spotlight Beam */}
            <motion.div
              animate={{ opacity: hoveredIdx === 3 ? 0.55 : 0.25 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 82% 14%, rgba(255,155,95,0.16) 0%, rgba(255,85,0,0.04) 35%, transparent 68%)',
              }}
            />

            {/* Top Visual Stage: Dual-Layer Concentric Pedestal & Counter-Rotating Orbs */}
            <div className="relative z-10 h-[200px] flex items-center justify-center">
              {/* Outer Layer (Second Layer): Holds MessageSquare Orb */}
              <motion.div
                animate={{
                  scale: hoveredIdx === 3 ? 1.06 : 1,
                  rotate: hoveredIdx === 3 ? 180 : 0,
                }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-48 h-48 rounded-full border-t border-r border-white/[0.12] border-b border-l border-b-white/[0.02] border-l-white/[0.02] bg-gradient-to-bl from-white/[0.04] to-transparent"
              >
                <motion.div
                  animate={{ rotate: hoveredIdx === 3 ? -180 : 0 }}
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-b from-white/[0.14] to-white/[0.03] border-t border-white/25 border-x border-b border-x-white/10 border-b-black/40 grid place-items-center text-white/80 shadow-[0_12px_25px_rgba(0,0,0,0.55)] backdrop-blur-md"
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.div>
              </motion.div>

              {/* Inner Layer: Holds Headphones Orb */}
              <motion.div
                animate={{
                  scale: hoveredIdx === 3 ? 1.05 : 1,
                  rotate: hoveredIdx === 3 ? -180 : 0,
                }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-34 h-34 rounded-full border-t border-r border-white/[0.16] border-b border-l border-b-white/[0.03] border-l-white/[0.03] bg-gradient-to-bl from-white/[0.05] to-transparent"
              >
                <motion.div
                  animate={{ rotate: hoveredIdx === 3 ? 180 : 0 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-b from-white/[0.14] to-white/[0.03] border-t border-white/25 border-x border-b border-x-white/10 border-b-black/40 grid place-items-center text-white/80 shadow-[0_12px_25px_rgba(0,0,0,0.55)] backdrop-blur-md"
                >
                  <Headphones className="w-4 h-4" />
                </motion.div>
              </motion.div>

              {/* Center Fixed Primary Shield Orb */}
              <motion.div
                animate={{ scale: hoveredIdx === 3 ? 1.08 : 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 w-18 h-18 rounded-full bg-gradient-to-b from-[#ff8c52] via-[#ff5500] to-[#9c3200] border-t border-white/55 border-x border-b border-x-white/15 border-b-black/50 grid place-items-center text-white shadow-[0_14px_30px_rgba(0,0,0,0.5),0_4px_14px_rgba(255,85,0,0.22),inset_0_2px_4px_rgba(255,255,255,0.45)]"
              >
                <ShieldCheck className="w-8 h-8 drop-shadow-md" />
              </motion.div>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[3]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[3]?.description}
              </p>
            </div>
          </article>
        </div>
        </MotionConfig>
      </div>
    </section>
  );
}
