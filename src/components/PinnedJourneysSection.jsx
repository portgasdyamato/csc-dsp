import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VLE_STAGES, CITIZEN_NEEDS } from '../data/proposalData';

export default function PinnedJourneysSection() {
  // 05A: For Aspiring VLEs
  const vleRef = useRef(null);
  const [vleIdx, setVleIdx] = useState(0);

  const { scrollYProgress: vleScroll } = useScroll({
    target: vleRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(vleScroll, 'change', (v) => {
    const idx = Math.min(
      VLE_STAGES.length - 1,
      Math.max(0, Math.floor(v * VLE_STAGES.length))
    );
    if (idx !== vleIdx) setVleIdx(idx);
  });

  // 05B: For Citizens
  const citizenRef = useRef(null);
  const [citIdx, setCitIdx] = useState(0);

  const { scrollYProgress: citScroll } = useScroll({
    target: citizenRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(citScroll, 'change', (v) => {
    const idx = Math.min(
      CITIZEN_NEEDS.length - 1,
      Math.max(0, Math.floor(v * CITIZEN_NEEDS.length))
    );
    if (idx !== citIdx) setCitIdx(idx);
  });

  const currentVle = VLE_STAGES[vleIdx];
  const currentCit = CITIZEN_NEEDS[citIdx];

  return (
    <section id="journeys" className="bg-white text-slate-900">
      {/* Clean Section Heading */}
      <div className="max-w-6xl mx-auto pt-28 pb-12 px-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E85D04] mb-3">
          Two Journeys, One Ecosystem
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 max-w-2xl leading-[1.12]">
          Every Journey Begins with a{' '}
          <span className="font-editorial italic font-normal text-[#0F2547]">
            Different Need.
          </span>
        </h2>
      </div>

      {/* ====================================================================
          05A — FOR ASPIRING VLEs (PINNED SPLIT-SCREEN)
          Left: Consistent Text & Stage Selector · Right: Changing Visual
          ==================================================================== */}
      <div ref={vleRef} id="become-vle" className="relative h-[220vh] border-t border-slate-100">
        <div className="sticky top-16 h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4 sm:px-8 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Consistent Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E85D04] mb-3">
                For Aspiring VLEs
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight mb-4">
                Turn Your Ambition into an Opportunity.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Explore what it means to become a Village Level Entrepreneur, understand the requirements, and discover how to establish your own CSC enterprise.
              </p>

              {/* Simple Horizontal Stage Indicator: Explore → Check eligibility → Register → Verification → Get started */}
              <div className="flex flex-wrap gap-2 mb-6">
                {VLE_STAGES.map((st, idx) => (
                  <button
                    key={st.step}
                    onClick={() => setVleIdx(idx)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      vleIdx === idx
                        ? 'bg-[#0F2547] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Active Stage Explanation */}
              <div className="border-l-2 border-[#E85D04] pl-4 mb-8 min-h-[84px]">
                <h4 className="text-base font-bold text-slate-900">
                  {currentVle.title}
                </h4>
                <p className="text-sm text-slate-600 mt-1">{currentVle.desc}</p>
                <p className="text-xs text-slate-500 mt-1.5">
                  <strong className="text-slate-700">What to prepare:</strong>{' '}
                  {currentVle.prepare}
                </p>
              </div>

              <a
                href="#vle-opportunity"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F2547] hover:bg-slate-900 text-white text-sm font-semibold transition-colors"
              >
                <span>Explore What It Means to Be a CSC VLE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Scroll-Changing Visual */}
            <div className="relative aspect-[4/3.2] rounded-[28px] overflow-hidden bg-slate-100 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentVle.step}
                  src={currentVle.image}
                  alt={currentVle.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/75 via-black/25 to-transparent text-white">
                <span className="text-xs uppercase tracking-widest text-orange-300 font-semibold">
                  Step {currentVle.step} of 05
                </span>
                <p className="text-lg font-semibold mt-0.5">{currentVle.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          05B — FOR CITIZENS (PINNED SPLIT-SCREEN)
          Matching proportions; Visual on Left, Consistent Text on Right
          ==================================================================== */}
      <div ref={citizenRef} className="relative h-[220vh] border-t border-slate-100 bg-[#FAF8F5]">
        <div className="sticky top-16 h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4 sm:px-8 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Scroll-Changing Citizen Visual */}
            <div className="order-2 lg:order-1 relative aspect-[4/3.2] rounded-[28px] overflow-hidden bg-slate-200 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCit.id}
                  src={currentCit.image}
                  alt={currentCit.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/75 via-black/25 to-transparent text-white">
                <span className="text-xs uppercase tracking-widest text-orange-300 font-semibold">
                  Everyday Citizen Need
                </span>
                <p className="text-lg font-semibold mt-0.5">{currentCit.label}</p>
              </div>
            </div>

            {/* Right Column: Consistent Citizen Text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0F2547] mb-3">
                For Citizens
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight mb-4">
                The Help You Need. The Services You Can Access.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                From everyday payments to essential government services, discover what may be available through your nearest Common Service Centre.
              </p>

              {/* Citizen Needs Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                {CITIZEN_NEEDS.map((nd, idx) => (
                  <button
                    key={nd.id}
                    onClick={() => setCitIdx(idx)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      citIdx === idx
                        ? 'bg-[#E85D04] text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {nd.label}
                  </button>
                ))}
              </div>

              <div className="border-l-2 border-[#0F2547] pl-4 mb-8 min-h-[84px]">
                <h4 className="text-base font-bold text-slate-900">
                  {currentCit.title}
                </h4>
                <p className="text-sm text-slate-600 mt-1">{currentCit.desc}</p>
                <p className="text-xs text-slate-500 mt-1.5">
                  <strong className="text-slate-700">Documents commonly needed:</strong>{' '}
                  {currentCit.docs}
                </p>
              </div>

              <a
                href="#find-csc"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E85D04] hover:bg-orange-700 text-white text-sm font-semibold transition-colors"
              >
                <span>Find a CSC</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
