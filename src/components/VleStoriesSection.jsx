import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { STORIES_FAN_CLEAN } from '../data/proposalData';

const FAN_POSITIONS = {
  0: { x: 0, y: -14, rotate: 0, scale: 1.05, zIndex: 30, brightness: 1.0 },
  '-1': { x: -158, y: 14, rotate: -7, scale: 0.89, zIndex: 20, brightness: 0.94 },
  1: { x: 158, y: 14, rotate: 7, scale: 0.89, zIndex: 20, brightness: 0.94 },
  '-2': { x: -282, y: 42, rotate: -14, scale: 0.77, zIndex: 10, brightness: 0.88 },
  2: { x: 282, y: 42, rotate: 14, scale: 0.77, zIndex: 10, brightness: 0.88 },
};

export default function VleStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Starts on Odisha story in center
  const [openStoryModal, setOpenStoryModal] = useState(null);
  const total = STORIES_FAN_CLEAN.length;

  const step = (dir) => {
    setActiveIndex((prev) => ((prev + dir) % total + total) % total);
  };

  const getOffset = (idx) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeStory = STORIES_FAN_CLEAN[activeIndex];

  return (
    <section
      id="vle-stories"
      className="py-28 sm:py-36 px-4 sm:px-8 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Clean Minimal Heading */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E85D04] mb-3">
            People Behind the Network
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
            Real People. Real Journeys.{' '}
            <span className="font-editorial italic font-normal text-[#0F2547]">
              Real Experiences.
            </span>
          </h2>
        </div>

        {/* 5-Card Fanned Stage (Exact 1:1 Proportions of Reference Image 1 Top) */}
        <div className="relative h-[400px] sm:h-[430px] flex items-center justify-center my-2 select-none">
          {STORIES_FAN_CLEAN.map((story, idx) => {
            const offset = getOffset(idx);
            const pos = FAN_POSITIONS[offset] || {
              x: 0,
              y: 50,
              rotate: 0,
              scale: 0.6,
              zIndex: 1,
              brightness: 0.7,
            };
            const isCenter = offset === 0;

            return (
              <motion.div
                key={story.id}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                  else setOpenStoryModal(story);
                }}
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -45) step(1);
                  else if (info.offset.x > 45) step(-1);
                }}
                initial={false}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  rotate: pos.rotate,
                  scale: pos.scale,
                  zIndex: pos.zIndex,
                  filter: `brightness(${pos.brightness})`,
                }}
                whileHover={
                  isCenter
                    ? { scale: 1.07, y: -18 }
                    : { scale: pos.scale + 0.02, y: pos.y - 4 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 230,
                  damping: 26,
                  mass: 0.85,
                }}
                className="absolute w-[225px] sm:w-[265px] h-[320px] sm:h-[372px] rounded-[20px] overflow-hidden cursor-pointer bg-slate-900 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.26)]"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Bottom Controls & 2-Line Caption (Exact match to Reference Image 1 Top) */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 mt-4">
          <button
            onClick={() => step(-1)}
            aria-label="Previous story"
            className="w-10 h-10 rounded-full bg-[#141414] text-white grid place-items-center shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="min-w-[250px] sm:min-w-[340px] max-w-md min-h-[56px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-[16px] font-semibold text-slate-900">
                  {activeStory.title}
                </h3>
                <p className="text-[12px] font-mono-tech text-slate-400 tracking-[0.06em] mt-1">
                  {activeStory.subtitle}
                </p>
                <button
                  onClick={() => setOpenStoryModal(activeStory)}
                  className="mt-2.5 text-xs font-semibold text-[#E85D04] hover:underline cursor-pointer"
                >
                  Read documentary story →
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => step(1)}
            aria-label="Next story"
            className="w-10 h-10 rounded-full bg-[#141414] text-white grid place-items-center shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Optional Clean Documentary Reader Modal on Click */}
      <AnimatePresence>
        {openStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenStoryModal(null)}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-md z-50 grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-slate-900 w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative"
            >
              <div className="relative h-64 bg-slate-900">
                <img
                  src={openStoryModal.image}
                  alt={openStoryModal.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setOpenStoryModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white grid place-items-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E85D04] mb-2">
                  {openStoryModal.title}
                </p>
                <h3 className="text-2xl font-bold text-slate-950 mb-3">
                  {openStoryModal.headline}
                </h3>
                <p className="font-editorial italic text-xl text-slate-700 mb-4">
                  {openStoryModal.quote}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {openStoryModal.story}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
