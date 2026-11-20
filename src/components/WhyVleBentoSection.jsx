import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PLATFORM_CARDS } from '../data/dspData';

/**
 * 5-Card Asymmetric Bento Grid for "#about" ("Why Join As A VLE Today?").
 * Clean Indian heritage emblems with tactile frosted-glass sheen & lift on hover:
 * Row 1 (4+4+4): Hometown Jharokha Kendra, Lotus ₹ Prosperity, Village Shop & Laptop (₹0)
 * Row 2 (7+5):   Rural Community Lotus Halo, Official Government Shield Crest
 */
export default function WhyVleBentoSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const cards = PLATFORM_CARDS.slice(0, 5);

  const cardBaseClass =
    'group relative rounded-[16px] bg-gradient-to-b from-white/[0.10] via-white/[0.04] to-white/[0.015] hover:from-white/[0.14] hover:via-white/[0.06] backdrop-blur-2xl border border-white/[0.13] border-t-white/25 hover:border-white/30 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-7 overflow-hidden flex flex-col justify-between min-h-[345px] transition-colors duration-300 ease-out cursor-pointer outline-none';

  const smoothEase = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

  const renderSheen = (isHovered) => (
    <motion.div
      aria-hidden="true"
      initial={false}
      animate={{
        x: isHovered ? '140%' : '-140%',
        opacity: isHovered ? [0, 0.35, 0] : 0,
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
    />
  );

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 bg-[#060e1d] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Atmospheric Washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[680px] h-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(37,99,235,0.24) 0%, rgba(15,35,70,0.12) 55%, transparent 80%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/5 w-[640px] h-[400px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(148,163,184,0.14) 0%, rgba(30,58,138,0.12) 50%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-[-0.03em] text-white leading-[1.1]">
            Why Join As A VLE Today?
          </h2>
          <p className="text-xs sm:text-[14px] text-[#8fa5c9] leading-relaxed mt-3 font-normal">
            Build a respected digital enterprise in your village with steady daily income and official government backing.
          </p>
        </div>

        {/* 5-Card Asymmetric 12-Col Bento Grid (Row 1: 4+4+4 | Row 2: 7+5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* ================================================================
              CARD 01 (4 cols): Run Your Own Hometown Enterprise
              ================================================================ */}
          <motion.article
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(0)}
            onBlur={() => setHoveredIdx(null)}
            whileHover={{ y: -6 }}
            transition={smoothEase}
            tabIndex={0}
            className={`lg:col-span-4 ${cardBaseClass}`}
          >
            {renderSheen(hoveredIdx === 0)}

            <div className="relative z-10 h-[200px] flex items-center justify-center">
              <motion.img
                src="/images/vle-pillar-01.png"
                alt="Indian Jharokha Village Kendra"
                animate={{
                  scale: hoveredIdx === 0 ? 1.08 : 1,
                  y: hoveredIdx === 0 ? -4 : 0,
                }}
                transition={smoothEase}
                className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 object-contain mix-blend-screen drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none"
              />
            </div>

            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[0]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[0]?.description}
              </p>
            </div>
          </motion.article>

          {/* ================================================================
              CARD 02 (4 cols): Earn Financial Independence Daily
              ================================================================ */}
          <motion.article
            onMouseEnter={() => setHoveredIdx(1)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(1)}
            onBlur={() => setHoveredIdx(null)}
            whileHover={{ y: -6 }}
            transition={smoothEase}
            tabIndex={0}
            className={`lg:col-span-4 ${cardBaseClass}`}
          >
            {renderSheen(hoveredIdx === 1)}

            <div className="relative z-10 h-[200px] flex items-center justify-center">
              <motion.div
                animate={{
                  scale: hoveredIdx === 1 ? 1.08 : 1,
                  y: hoveredIdx === 1 ? -4 : 0,
                }}
                transition={smoothEase}
                className="relative inline-flex items-center justify-center"
              >
                <img
                  src="/images/vle-pillar-02.png"
                  alt="Indian Lotus Money Pouch Emblem"
                  className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 object-contain mix-blend-screen drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none"
                />
                {/* Center Money Pouch (Potli) with ₹ inside the Lotus */}
                <div className="absolute z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0d1626] grid place-items-center">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-11 h-11 sm:w-12 sm:h-12 text-white"
                  >
                    <path
                      d="M11.8 7.5C11 5.6 13.3 4.2 15.2 5.6C16.5 3.9 19.5 3.9 20.8 5.6C22.7 4.2 25 5.6 24.2 7.5L22.3 11.6C27.5 14.5 29.8 20.2 28.8 26.2C28 31 23.4 33 18 33C12.6 33 8 31 7.2 26.2C6.2 20.2 8.5 14.5 13.7 11.6L11.8 7.5Z"
                      fill="currentColor"
                    />
                    <rect x="12.5" y="10.6" width="11" height="1.9" rx="0.95" fill="#0d1626" />
                    {/* Crisp ₹ Symbol on the Pouch */}
                    <path
                      d="M14.5 17.5H21.5M14.5 20.4H21.5M17.5 17.5C19.6 17.5 20.8 18.7 20.8 20.4C20.8 22.5 19 23.8 16 23.8L20.5 28.8"
                      stroke="#0d1626"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[1]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[1]?.description}
              </p>
            </div>
          </motion.article>

          {/* ================================================================
              CARD 05 (4 cols): Zero Franchise Fee
              Relatable Visual: Indian Shop Canopy + Existing Laptop & Desk
              ================================================================ */}
          <motion.article
            onMouseEnter={() => setHoveredIdx(4)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(4)}
            onBlur={() => setHoveredIdx(null)}
            whileHover={{ y: -6 }}
            transition={smoothEase}
            tabIndex={0}
            className={`lg:col-span-4 ${cardBaseClass}`}
          >
            {renderSheen(hoveredIdx === 4)}

            <div className="relative z-10 h-[200px] flex items-center justify-center">
              <motion.svg
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Indian Village Shopfront and Laptop Zero Franchise Fee"
                animate={{
                  scale: hoveredIdx === 4 ? 1.08 : 1,
                  y: hoveredIdx === 4 ? -4 : 0,
                }}
                transition={smoothEase}
                className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none"
              >
                {/* Top Indian Shop Scalloped Awning (Chhajja) */}
                <path
                  d="M28 48L40 30H140L152 48H28Z"
                  fill="currentColor"
                />
                <path
                  d="M28 52H50C50 58.5 45 63 39 63C33 63 28 58.5 28 52ZM53.5 52H75.5C75.5 58.5 70.5 63 64.5 63C58.5 63 53.5 58.5 53.5 52ZM79 52H101C101 58.5 96 63 90 63C84 63 79 58.5 79 52ZM104.5 52H126.5C126.5 58.5 121.5 63 115.5 63C109.5 63 104.5 58.5 104.5 52ZM130 52H152C152 58.5 147 63 141 63C135 63 130 58.5 130 52Z"
                  fill="currentColor"
                />
                {/* Shop Pillars */}
                <rect x="35" y="67" width="8" height="66" rx="2" fill="currentColor" />
                <rect x="137" y="67" width="8" height="66" rx="2" fill="currentColor" />
                {/* Open Laptop on Shop Counter */}
                <rect x="58" y="80" width="64" height="42" rx="5" fill="currentColor" />
                <rect x="64" y="86" width="52" height="30" rx="2" fill="#060e1d" />
                {/* Checkmark inside Laptop Screen */}
                <path
                  d="M79 101L86.5 108.5L102 93"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Laptop Base & Shop Counter */}
                <path d="M48 125H132L138 133H42L48 125Z" fill="currentColor" />
                <rect x="26" y="137" width="128" height="9" rx="4.5" fill="currentColor" />
              </motion.svg>
            </div>

            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[4]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[4]?.description}
              </p>
            </div>
          </motion.article>

          {/* ================================================================
              CARD 03 (7 cols): Community Respect & National Impact
              ================================================================ */}
          <motion.article
            onMouseEnter={() => setHoveredIdx(2)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(2)}
            onBlur={() => setHoveredIdx(null)}
            whileHover={{ y: -6 }}
            transition={smoothEase}
            tabIndex={0}
            className={`lg:col-span-7 ${cardBaseClass}`}
          >
            {renderSheen(hoveredIdx === 2)}

            <div className="relative z-10 h-[200px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5 px-2 sm:px-6">
              <motion.img
                src="/images/vle-pillar-03.png"
                alt="Indian Village Community"
                animate={{
                  scale: hoveredIdx === 2 ? 1.07 : 1,
                  y: hoveredIdx === 2 ? -4 : 0,
                }}
                transition={smoothEase}
                className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 object-contain mix-blend-screen drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none shrink-0"
              />

              <div className="hidden sm:flex flex-col items-start text-left max-w-[300px]">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#ff8c52] font-semibold mb-2">
                  Serving Rural Bharat
                </span>
                <div className="text-3xl lg:text-[34px] font-bold tracking-[-0.03em] text-white leading-none mb-2">
                  10 Crore+
                </div>
                <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed">
                  Villagers empowered with pensions, Ayushman health cards, banking &amp; land records right in their panchayat.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[2]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[2]?.description}
              </p>
            </div>
          </motion.article>

          {/* ================================================================
              CARD 04 (5 cols): Official Government Portal Backing
              ================================================================ */}
          <motion.article
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
            onFocus={() => setHoveredIdx(3)}
            onBlur={() => setHoveredIdx(null)}
            whileHover={{ y: -6 }}
            transition={smoothEase}
            tabIndex={0}
            className={`md:col-span-2 lg:col-span-5 ${cardBaseClass}`}
          >
            {renderSheen(hoveredIdx === 3)}

            <div className="relative z-10 h-[200px] flex items-center justify-center">
              <motion.img
                src="/images/vle-pillar-04.png"
                alt="Official Government Portal Shield Crest"
                animate={{
                  scale: hoveredIdx === 3 ? 1.08 : 1,
                  y: hoveredIdx === 3 ? -4 : 0,
                }}
                transition={smoothEase}
                className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 object-contain mix-blend-screen drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none"
              />
            </div>

            <div className="relative z-10 pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[3]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#8fa5c9] leading-[1.55]">
                {cards[3]?.description}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
