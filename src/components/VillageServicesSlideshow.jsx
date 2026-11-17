import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/csc-service-aadhaar.jpg',
    vleName: 'Pooja Verma, VLE',
    service: 'Doorstep Biometric & Pension Desk',
    location: 'Gram Panchayat Haliyapur, UP',
  },
  {
    id: 2,
    image: '/images/csc-service-certificate.jpg',
    vleName: 'Rajesh Meena, VLE',
    service: 'Land Records & Revenue Deed Centre',
    location: 'Kendra Rampura, Rajasthan',
  },
  {
    id: 3,
    image: '/images/csc-service-banking.jpg',
    vleName: 'Tariq Ahmed, VLE',
    service: 'Micro-ATM & Welfare Cash Kiosk',
    location: 'Seva Kendra Baramulla, J&K',
  },
  {
    id: 4,
    image: '/images/csc-service-education.jpg',
    vleName: 'Deepak Shrivastava, VLE',
    service: 'CSC Academy & Youth Digital Skilling',
    location: 'Gram Panchayat Chhatarpur, MP',
  },
];

export default function VillageServicesSlideshow({ onOpenLocator }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quickQuery, setQuickQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[currentIdx];

  const handleSearch = (e) => {
    e?.preventDefault();
    onOpenLocator?.(quickQuery);
  };

  const handleQuickSelect = (pincode) => {
    setQuickQuery(pincode);
    onOpenLocator?.(pincode);
  };

  return (
    <section
      id="locator"
      className="relative z-10 w-full min-h-[500px] lg:h-[540px] flex items-center bg-[#071120] text-white overflow-hidden border-b border-white/10 scroll-mt-20"
    >
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
              alt={`${activeSlide.vleName} - ${activeSlide.service}`}
              className="w-full h-full object-cover object-right"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient: Solid navy on the left for crisp text contrast, fading smoothly to reveal the clear photo on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/80 to-transparent lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/95 via-50% to-transparent w-full" />
      </div>

      {/* ====================================================================
          CLEAN, LOW-COGNITIVE CENTRE LOCATOR CONTENT
          Zero cognitive load: Instant headline, 1-line subtext, inline pincode search
          ==================================================================== */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 w-full py-14 lg:py-0">
        <div className="max-w-xl">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ff884d] text-[11px] font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span>CENTRE LOCATOR</span>
          </div>

          {/* Crisp, Direct Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.18] mb-3">
            Find Your Nearest <br />
            <span className="text-[#ff5500]">CSC Centre.</span>
          </h2>

          {/* Short, Plain 1-Sentence Subtext */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-5 max-w-md">
            Locate authorized digital desks in your village for Aadhaar, banking, pensions, and 400+ government services.
          </p>

          {/* Direct Inline Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-lg mb-3.5"
          >
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-[#ff5500] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="Enter Pincode or Village (e.g. 503185)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-[#ff5500] text-white placeholder:text-slate-400 text-sm outline-none transition-all backdrop-blur-md"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff5500] hover:bg-[#e04800] text-white text-sm font-semibold transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-lg shrink-0"
            >
              <span>Find Kendra</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Pincode Selection Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs mb-4">
            <span className="text-slate-400 text-[11px] mr-1">Quick:</span>
            {[
              { label: 'Bodhan (503185)', q: '503185' },
              { label: 'Lucknow (226001)', q: '226001' },
              { label: 'Chhatarpur (471001)', q: '471001' },
              { label: 'Ahmedabad (380001)', q: '380001' },
            ].map((p) => (
              <button
                key={p.q}
                type="button"
                onClick={() => handleQuickSelect(p.q)}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 transition-all cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Live Status & Prospective VLE Link */}
          <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>5,50,000+ Active Kendras across 28 States & 8 UTs</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span>Looking to open a centre?</span>
              <a
                href="#get-started"
                className="inline-flex items-center gap-1 font-semibold text-[#ff884d] hover:text-white transition-colors"
              >
                <span>Apply to Become a VLE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Minimal Slide Dots with Location Indicator */}
          <div className="flex items-center gap-2.5 mt-6">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Show ${slide.vleName}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx
                    ? 'w-7 bg-[#ff5500]'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
            <span className="text-[11px] text-slate-400 ml-2">
              {activeSlide.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
