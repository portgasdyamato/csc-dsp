import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMPACT_METRICS, STATE_HIGHLIGHTS } from '../data/proposalData';

// Clean, well-proportioned geographic dot-grid forming the silhouette of India
const INDIA_SILHOUETTE_DOTS = [
  // J&K / Ladakh / Himachal / Punjab
  [38, 10], [42, 11], [36, 14], [40, 15], [44, 15],
  [37, 19], [41, 20], [45, 20], [39, 24], [43, 25], [47, 25],
  // Rajasthan / Gujarat / Delhi / UP / Bihar
  [32, 29], [36, 29], [40, 29], [45, 29], [50, 30], [55, 32],
  [27, 34], [32, 34], [37, 34], [42, 34], [47, 34], [52, 35], [57, 36], [62, 37],
  [23, 40], [28, 40], [33, 40], [38, 40], [43, 40], [48, 40], [53, 40], [58, 41], [63, 41], [68, 40],
  // Assam & North-East
  [73, 36], [78, 34], [83, 33], [76, 39], [80, 39], [75, 44],
  // Central India / MP / Chhattisgarh / Odisha / WB
  [21, 45], [26, 45], [32, 45], [37, 45], [42, 45], [47, 45], [52, 45], [57, 46], [62, 46], [67, 46],
  [31, 50], [36, 50], [41, 50], [46, 50], [51, 50], [56, 51], [61, 51],
  // Maharashtra / Telangana / AP / Karnataka
  [33, 56], [38, 56], [43, 56], [48, 56], [53, 56], [58, 56],
  [35, 62], [40, 62], [45, 62], [50, 62], [54, 62],
  [37, 68], [42, 68], [47, 68], [51, 68],
  // Tamil Nadu / Kerala
  [39, 74], [44, 74], [48, 74],
  [41, 80], [45, 80], [48, 80],
  [43, 86], [46, 86], [45, 91],
];

const STATE_PINS = [
  { id: 'jk', name: 'Jammu & Kashmir', x: 39, y: 15 },
  { id: 'rj', name: 'Rajasthan', x: 32, y: 35 },
  { id: 'up', name: 'Uttar Pradesh', x: 51, y: 35 },
  { id: 'as', name: 'Assam & NE', x: 78, y: 36 },
  { id: 'mh', name: 'Maharashtra', x: 38, y: 56 },
  { id: 'od', name: 'Odisha', x: 58, y: 51 },
];

export default function IndiaMapSection() {
  const [activeState, setActiveState] = useState('all');
  const currentHighlight =
    STATE_HIGHLIGHTS.find((s) => s.id === activeState) || STATE_HIGHLIGHTS[0];

  return (
    <section
      id="impact"
      className="py-28 sm:py-36 px-4 sm:px-8 bg-[#081224] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean Minimalist Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 mb-3">
            Nationwide Reach
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
            A Nationwide Network.{' '}
            <span className="font-editorial italic font-normal text-orange-300">
              Millions of Possibilities.
            </span>
          </h2>
        </div>

        {/* Clean 2-Column Layout: Glowing Dot Map (Left) + 4 Pure Typographic Numbers (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Glowing Dot-Silhouette Map */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square max-w-[460px] mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Connecting Network Lines */}
                <g stroke="rgba(251, 146, 60, 0.2)" strokeWidth="0.35">
                  <line x1="39" y1="15" x2="51" y2="35" />
                  <line x1="32" y1="35" x2="51" y2="35" />
                  <line x1="51" y1="35" x2="78" y2="36" />
                  <line x1="32" y1="35" x2="38" y2="56" />
                  <line x1="51" y1="35" x2="58" y2="51" />
                  <line x1="38" y1="56" x2="58" y2="51" />
                </g>

                {/* Progressive Reveal of India Dots */}
                {INDIA_SILHOUETTE_DOTS.map(([x, y], idx) => (
                  <motion.circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r="0.85"
                    fill="#60a5fa"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.45, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.008 }}
                  />
                ))}

                {/* Interactive Regional Nodes */}
                {STATE_PINS.map((pin) => {
                  const selected = activeState === pin.id;
                  return (
                    <g
                      key={pin.id}
                      onClick={() => setActiveState(pin.id)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={selected ? 5 : 3.2}
                        fill="rgba(251, 146, 60, 0.25)"
                      />
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={selected ? 1.8 : 1.3}
                        fill={selected ? '#ffffff' : '#fb923c'}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Minimal State Selector Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {STATE_HIGHLIGHTS.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveState(st.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    activeState === st.id
                      ? 'bg-white text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentHighlight.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-center mt-4 text-xs sm:text-sm text-slate-300"
              >
                <span className="font-semibold text-orange-300">
                  {currentHighlight.name} ({currentHighlight.centres}):
                </span>{' '}
                {currentHighlight.focus}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: 4 Clean Typographic Numbers (Zero Clutter) */}
          <div className="lg:col-span-6 divide-y divide-white/10">
            {IMPACT_METRICS.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
              >
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  {item.value}
                </div>
                <div className="sm:text-right">
                  <div className="text-base font-semibold text-slate-100">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}
            <p className="pt-6 text-xs text-slate-500">
              Illustrative CSC SPV network baseline figures · Verify latest regional counts before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
