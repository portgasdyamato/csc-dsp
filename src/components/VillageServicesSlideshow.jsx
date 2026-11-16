import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/csc-service-aadhaar.jpg',
    service: 'Aadhaar & Pension Verification',
    location: 'Gram Panchayat Haliyapur, UP',
  },
  {
    id: 2,
    image: '/images/csc-service-certificate.jpg',
    service: 'Land Records & Revenue Deeds',
    location: 'Kendra Rampura, Rajasthan',
  },
  {
    id: 3,
    image: '/images/csc-service-banking.jpg',
    service: 'Doorstep Banking & Welfare Cash',
    location: 'Seva Kendra Baramulla, J&K',
  },
  {
    id: 4,
    image: '/images/csc-service-education.jpg',
    service: 'CSC Academy & Youth Skilling',
    location: 'Gram Panchayat Chhatarpur, MP',
  },
];

export default function VillageServicesSlideshow() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[currentIdx];

  return (
    <section className="relative z-10 w-full min-h-[520px] lg:h-[600px] flex items-center bg-[#071120] text-white overflow-hidden border-b border-white/10">
      {/* ====================================================================
          BACKGROUND PHOTOGRAPHY SLIDESHOW LAYER
          Image sits on the right, completely unobstructed.
          ==================================================================== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.service}
              className="w-full h-full object-cover object-right"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient: Solid navy on the left for crisp text contrast, fading smoothly to reveal the clear photo on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/80 to-transparent lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/90 via-50% to-transparent w-full" />
      </div>

      {/* ====================================================================
          CLEAN, LOW-COGNITIVE-LOAD CONTENT (LEFT SIDE ONLY)
          ==================================================================== */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 w-full py-16 lg:py-0">
        <div className="max-w-xl">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ff884d] text-[11px] font-bold tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span>IN YOUR GRAM PANCHAYAT</span>
          </div>

          {/* Simple, Punchy Display Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.15] mb-5">
            No English. <br />
            No Long Journeys. <br />
            <span className="text-[#ff5500]">Just Your Village Kendra.</span>
          </h2>

          {/* Single Reassuring Sentence — Zero Clutter */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-lg">
            From Aadhaar and pensions to land deeds, your village VLE handles every form and computer process for you in your own language.
          </p>

          {/* Clear Call-To-Action Button — Clean flat button without glow */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-none border-0 cursor-pointer"
            >
              <span>Find Your Village Centre</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Minimalist Slide Navigation Indicators */}
          <div className="flex items-center gap-2.5 mt-10">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Show ${slide.service}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx
                    ? 'w-8 bg-[#ff5500]'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
            <span className="text-xs text-slate-400 font-medium ml-2">
              {activeSlide.service} · {activeSlide.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
