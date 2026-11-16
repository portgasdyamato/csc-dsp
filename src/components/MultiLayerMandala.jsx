import React from 'react';
import { motion } from 'framer-motion';

// ============================================================================
// MULTI-LAYER CONCENTRIC SACRED INDIAN MANDALA
// Cleanly separated, authentic architectural rings rotating in alternating directions:
// - Layer 1 (Outermost Leaf Ring): Pure leaf sprigs wreath -> Rotates RIGHT (Clockwise)
// - Layer 2 (Scalloped Arches Ring): Triple-curved arches & droplets -> Rotates LEFT (Counter-Clockwise)
// - Layer 3 (Geometric & Beaded Star Ring): Chevrons & bead loops -> Rotates RIGHT (Clockwise)
// - Layer 4 (Central Lotus Flower & Solar Bindu): Inner padma & bindu -> Rotates LEFT (Counter-Clockwise)
//
// ZERO CSS mask overlaps, ZERO double-exposure ghosting, ZERO broken/sliced petals or leaves.
// ============================================================================

export default function MultiLayerMandala({
  className = '',
  opacity = 0.16,
}) {
  return (
    <div
      className={`relative ${className} pointer-events-none select-none`}
      style={{ opacity }}
    >
      <div className="relative w-full h-full aspect-square">
        {/* ==================================================================
            LAYER 1: Outermost Leaf Sprigs Wreath (Radius 84% to 100%)
            Pure delicate foliage tips — Rotates RIGHT (Clockwise)
            ================================================================== */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <img
            src="/images/mandala-layer-1-leaves.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </motion.div>

        {/* ==================================================================
            LAYER 2: Scalloped Arches & Droplets Ring (Radius 69% to 84%)
            Rotates LEFT (Counter-Clockwise)
            ================================================================== */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 85, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <img
            src="/images/mandala-layer-2-arches.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </motion.div>

        {/* ==================================================================
            LAYER 3: Geometric Chevron & Beaded Star Ring (Radius 36% to 69%)
            Rotates RIGHT (Clockwise)
            ================================================================== */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <img
            src="/images/mandala-layer-3-pattern.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </motion.div>

        {/* ==================================================================
            LAYER 4: Blooming Lotus & Central Solar Bindu (Radius 0% to 36%)
            Rotates LEFT (Counter-Clockwise)
            ================================================================== */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <img
            src="/images/mandala-layer-4-core.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </motion.div>
      </div>
    </div>
  );
}
