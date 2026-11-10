import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BENEFIT_CARDS_CLEAN, DAY_AT_CSC_PILLS } from '../data/proposalData';

function CleanBenefitArt({ variant, isHovered }) {
  if (variant === 'cobalt') {
    return (
      <div className="relative w-full h-full bg-[#040328] overflow-hidden">
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
          <defs>
            <radialGradient id="cleanCobalt" cx="65%" cy="18%" r="70%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="40%" stopColor="#312e81" />
              <stop offset="80%" stopColor="#0f0c4d" />
              <stop offset="100%" stopColor="#030222" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#cleanCobalt)" />
        </svg>
        <div className="absolute inset-0 bg-film-grain opacity-35 pointer-events-none" />
      </div>
    );
  }

  if (variant === 'chrome2') {
    // Matches the 3D Chromatic Ribbon "2" in Card 02 of Reference Image 1
    return (
      <div className="relative w-full h-full bg-[#1a0b0e] overflow-hidden">
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
          <defs>
            <radialGradient id="cleanCrimson" cx="25%" cy="15%" r="85%">
              <stop offset="0%" stopColor="#ff6b00" />
              <stop offset="34%" stopColor="#b91c1c" />
              <stop offset="68%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <linearGradient id="cleanChrome" x1="0%" y1="0%" x2="100%" y2="90%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="24%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="76%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="cleanBevel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="48%" stopColor="#0f172a" />
              <stop offset="82%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#cleanCrimson)" />
          <motion.g
            animate={{
              y: isHovered ? 4 : -4,
              scale: isHovered ? 1.04 : 0.98,
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <path
              d="M42 64 L268 18 L334 74 L108 134 L84 166 L328 136 L356 232 L114 252 Z"
              fill="url(#cleanChrome)"
              stroke="#f1f5f9"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M116 154 L326 136 L348 220 L138 236 Z"
              fill="url(#cleanBevel)"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.8"
            />
          </motion.g>
        </svg>
        <div className="absolute inset-0 bg-film-grain opacity-30 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#06090d] overflow-hidden">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          <radialGradient id="cleanObsidian" cx="72%" cy="16%" r="64%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="24%" stopColor="#bae6fd" />
            <stop offset="52%" stopColor="#1e293b" />
            <stop offset="85%" stopColor="#090d14" />
            <stop offset="100%" stopColor="#05070b" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#cleanObsidian)" />
      </svg>
      <div className="absolute inset-0 bg-film-grain opacity-40 pointer-events-none" />
    </div>
  );
}

export default function VleOpportunitySection() {
  const [hoveredCard, setHoveredCard] = useState(1);

  const dayRef = useRef(null);
  const [activePill, setActivePill] = useState(4);

  const { scrollYProgress } = useScroll({
    target: dayRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      DAY_AT_CSC_PILLS.length - 1,
      Math.max(0, Math.floor(v * DAY_AT_CSC_PILLS.length))
    );
    if (idx !== activePill) setActivePill(idx);
  });

  const springConfig = {
    type: 'spring',
    stiffness: 240,
    damping: 28,
    mass: 0.85,
  };

  return (
    <section id="vle-opportunity">
      {/* ====================================================================
          PART 1: BENEFITS SECTION (EXACT 1:1 MATCH FOR REFERENCE IMAGE 1 BOTTOM)
          "for benifits section On hovering, the detail part of the card goes down."
          ==================================================================== */}
      <div className="py-28 sm:py-32 px-4 sm:px-8 bg-[#eef1f6]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F2547] mb-3">
              The VLE Opportunity
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12]">
              Explore What It Means to{' '}
              <span className="font-editorial italic font-normal text-[#E85D04]">
                Be a CSC VLE.
              </span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7"
            onMouseLeave={() => setHoveredCard(null)}
          >
            {BENEFIT_CARDS_CLEAN.map((card, idx) => {
              const isHovered = hoveredCard === idx;
              return (
                <motion.article
                  key={card.number}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onFocus={() => setHoveredCard(idx)}
                  tabIndex={0}
                  whileHover={{ y: -4 }}
                  transition={springConfig}
                  className={`relative h-[490px] sm:h-[510px] rounded-[34px] p-[6px] cursor-pointer shadow-[0_24px_60px_-15px_rgba(15,23,42,0.16)] select-none ${card.outerBg}`}
                >
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                    <CleanBenefitArt variant={card.variant} isHovered={isHovered} />

                    {/* Folder-Tab Detail Sheet that drops down on hover */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? '44%' : '78%',
                      }}
                      transition={springConfig}
                      style={{ backgroundColor: card.sheetColor }}
                      className={`absolute inset-x-0 bottom-0 z-10 rounded-tr-[24px] flex flex-col justify-between px-7 pb-7 pt-2 ${card.textColor}`}
                    >
                      <svg
                        viewBox="0 0 400 38"
                        preserveAspectRatio="none"
                        className="absolute -top-[37px] left-0 w-full h-[38px] pointer-events-none block"
                      >
                        <path
                          d="M 0,38 L 0,20 Q 0,0 20,0 L 106,0 Q 124,0 136,14 L 150,30 Q 158,38 174,38 L 400,38 Z"
                          fill={card.sheetColor}
                        />
                      </svg>

                      <div className="relative z-10 flex items-start justify-between -mt-3">
                        <span className="text-[46px] sm:text-[50px] font-normal tracking-[-0.04em] leading-none">
                          {card.number}
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-75 mt-3" />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-[17px] font-bold tracking-[-0.01em] leading-snug mb-1.5">
                          {card.title}
                        </h3>
                        <p className={`text-[13.5px] leading-relaxed ${card.subColor}`}>
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====================================================================
          PART 2: "A DAY AT A CSC" — SCROLL-EXPANDING PILLS (EXACT 1:1 MATCH FOR IMAGE 2)
          "this one expands with scroll" — Pure white canvas, zero clutter
          ==================================================================== */}
      <div ref={dayRef} className="relative h-[280vh] bg-white">
        <div className="sticky top-16 h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4 sm:px-8 flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E85D04] mb-2">
              A Day at a CSC
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Inside a Village Level Entrepreneur’s Working Day
            </h3>
          </div>

          <div className="flex items-stretch gap-3 sm:gap-3.5 h-[430px] sm:h-[500px] w-full select-none">
            {DAY_AT_CSC_PILLS.map((item, idx) => {
              const isExpanded = idx === activePill;
              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActivePill(idx)}
                  initial={false}
                  animate={{
                    flexGrow: isExpanded ? 1 : 0,
                    flexShrink: 0,
                    flexBasis: isExpanded ? '0%' : '74px',
                    borderRadius: isExpanded ? 32 : 999,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 28,
                    mass: 0.9,
                  }}
                  className="relative h-full overflow-hidden cursor-pointer bg-slate-900"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={false}
                    animate={{
                      scale: isExpanded ? 1.0 : 1.12,
                    }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />

                  <motion.div
                    initial={false}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"
                  />

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                        className="absolute inset-x-0 bottom-0 p-7 sm:p-9 flex items-end justify-between gap-6 z-10"
                      >
                        <div className="max-w-xl text-white">
                          <h4 className="text-2xl sm:text-4xl font-bold tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/85 mt-1.5">
                            {item.subtitle}
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePill((idx + 1) % DAY_AT_CSC_PILLS.length);
                          }}
                          aria-label="Next moment"
                          className="w-11 h-11 rounded-full bg-white text-slate-950 grid place-items-center shrink-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        >
                          <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
