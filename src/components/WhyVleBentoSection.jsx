import React from 'react';
import { PLATFORM_CARDS } from '../data/dspData';

/**
 * 5-Card Asymmetric Bento Grid for "#about" ("Why Join As A VLE Today?").
 * Frosted glassmorphism cards (no bevels) over the signature Blue & Saffron
 * grainy gradient backdrop matching the VLE CTA section.
 */
export default function WhyVleBentoSection() {
  const cards = PLATFORM_CARDS.slice(0, 5);

  const cardBaseClass =
    'group relative rounded-2xl bg-gradient-to-br from-white/[0.18] via-white/[0.09] to-white/[0.03] hover:from-white/[0.24] hover:via-white/[0.12] hover:to-white/[0.05] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 hover:border-white/35 shadow-[0_18px_42px_-16px_rgba(0,0,0,0.45)] p-6 sm:p-7 overflow-hidden flex flex-col justify-between min-h-[335px] transition-all duration-300 outline-none';

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 bg-[#0a1628] text-white border-b border-white/10 overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      {/* Blue & Saffron Grainy Gradient Wallpaper Layer (Matching VLE CTA Section) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/grainy-gradient-bg-4k.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/50" />
        <div
          className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='whyVleNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23whyVleNoise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-[-0.03em] text-white leading-[1.1] drop-shadow-sm">
            Why Join As A VLE Today?
          </h2>
          <p className="text-xs sm:text-[14px] text-white/80 leading-relaxed mt-3 font-normal">
            Build a respected digital enterprise in your village with steady daily income and official government backing.
          </p>
        </div>

        {/* 5-Card Asymmetric 12-Col Bento Grid (Row 1: 4+4+4 | Row 2: 7+5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* ================================================================
              CARD 01 (4 cols): Run Your Own Hometown Enterprise
              ================================================================ */}
          <article tabIndex={0} className={`lg:col-span-4 ${cardBaseClass}`}>
            <div className="h-[190px] flex items-center justify-center">
              <img
                src="/images/vle-pillar-01-indian.png"
                alt="Indian Village Digital Kendra Enterprise"
                className="w-36 h-36 sm:w-40 sm:h-40 object-contain select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[0]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-[1.55]">
                {cards[0]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 02 (4 cols): Earn Financial Independence Daily
              ================================================================ */}
          <article tabIndex={0} className={`lg:col-span-4 ${cardBaseClass}`}>
            <div className="h-[190px] flex items-center justify-center">
              <div className="relative inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]">
                <img
                  src="/images/vle-pillar-02.png"
                  alt="Indian Lotus Money Pouch Emblem"
                  className="w-36 h-36 sm:w-40 sm:h-40 object-contain select-none"
                />
                {/* Center Money Pouch (Potli) with ₹ inside the Lotus */}
                <div className="absolute z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0d1d38] grid place-items-center">
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
                    <rect x="12.5" y="10.6" width="11" height="1.9" rx="0.95" fill="#0d1d38" />
                    <path
                      d="M14.5 17.5H21.5M14.5 20.4H21.5M17.5 17.5C19.6 17.5 20.8 18.7 20.8 20.4C20.8 22.5 19 23.8 16 23.8L20.5 28.8"
                      stroke="#0d1d38"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[1]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-[1.55]">
                {cards[1]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 05 (4 cols): Zero Franchise Fee
              ================================================================ */}
          <article tabIndex={0} className={`lg:col-span-4 ${cardBaseClass}`}>
            <div className="h-[190px] flex items-center justify-center">
              <svg
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Indian Village Shopfront and Laptop Zero Franchise Fee"
                className="w-36 h-36 sm:w-40 sm:h-40 text-white select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
              >
                <defs>
                  <mask id="shop-laptop-screen-mask">
                    <rect width="180" height="180" fill="white" />
                    <rect x="64" y="86" width="52" height="30" rx="2" fill="black" />
                  </mask>
                </defs>
                {/* Top Indian Shop Scalloped Awning (Chhajja) */}
                <path d="M28 48L40 30H140L152 48H28Z" fill="currentColor" />
                <path
                  d="M28 52H50C50 58.5 45 63 39 63C33 63 28 58.5 28 52ZM53.5 52H75.5C75.5 58.5 70.5 63 64.5 63C58.5 63 53.5 58.5 53.5 52ZM79 52H101C101 58.5 96 63 90 63C84 63 79 58.5 79 52ZM104.5 52H126.5C126.5 58.5 121.5 63 115.5 63C109.5 63 104.5 58.5 104.5 52ZM130 52H152C152 58.5 147 63 141 63C135 63 130 58.5 130 52Z"
                  fill="currentColor"
                />
                {/* Shop Pillars */}
                <rect x="35" y="67" width="8" height="66" rx="2" fill="currentColor" />
                <rect x="137" y="67" width="8" height="66" rx="2" fill="currentColor" />
                {/* Open Laptop on Shop Counter with Transparent Screen Cutout */}
                <rect
                  x="58"
                  y="80"
                  width="64"
                  height="42"
                  rx="5"
                  fill="currentColor"
                  mask="url(#shop-laptop-screen-mask)"
                />
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
              </svg>
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[4]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-[1.55]">
                {cards[4]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 03 (7 cols): Community Respect & National Impact
              ================================================================ */}
          <article tabIndex={0} className={`lg:col-span-7 ${cardBaseClass}`}>
            <div className="h-[190px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-5 px-2 sm:px-6">
              <img
                src="/images/vle-pillar-03.png"
                alt="Indian Village Community"
                className="w-36 h-36 sm:w-44 sm:h-44 object-contain select-none shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
              />

              <div className="hidden sm:flex flex-col items-start text-left max-w-[300px]">
                <span className="text-[10.5px] font-mono-code uppercase tracking-[0.16em] text-white/90 font-semibold mb-2">
                  Serving Rural Bharat
                </span>
                <div className="text-3xl lg:text-[34px] font-bold tracking-[-0.03em] text-white leading-none mb-2">
                  10 Crore+
                </div>
                <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed">
                  Villagers empowered with pensions, Ayushman health cards, banking &amp; land records right in their panchayat.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[2]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-[1.55]">
                {cards[2]?.description}
              </p>
            </div>
          </article>

          {/* ================================================================
              CARD 04 (5 cols): Official Government Portal Backing
              ================================================================ */}
          <article tabIndex={0} className={`md:col-span-2 lg:col-span-5 ${cardBaseClass}`}>
            <div className="h-[190px] flex items-center justify-center">
              <img
                src="/images/vle-pillar-04-emblem.png?v=2"
                alt="State Emblem of India — Official Government Portal Backing"
                className="w-36 h-40 sm:w-40 sm:h-44 object-contain select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-white leading-snug mb-1.5">
                {cards[3]?.title}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-[1.55]">
                {cards[3]?.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
