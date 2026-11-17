import React from 'react';

// Polar coordinate helper: 0 deg = 12 o'clock (top)
function polar(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [+(cx + r * Math.cos(rad)).toFixed(2), +(cy + r * Math.sin(rad)).toFixed(2)];
}

// 4-pointed radiant sparkle star (as in user inspiration Image 1)
function sparkleStar(cx, cy, size = 4.5) {
  return `M ${cx},${cy - size} Q ${cx},${cy} ${cx + size},${cy} Q ${cx},${cy} ${cx},${cy + size} Q ${cx},${cy} ${cx - size},${cy} Q ${cx},${cy} ${cx},${cy - size} Z`;
}

// ============================================================================
// ART 01: THE INTRICATE INK LOTUS MANDALA (Card 01: "Be Your Own Boss")
// Directly inspired by User Image 1 (hand-drawn ink mandala with hatching!)
// Features:
// - Central solar core with double border & 64 radial micro-hatches
// - Concentric 36-pearl garland between double containment tracks
// - Tier 1: 16 pointed inner petals with diagonal cross-hatch shading
// - Tier 2: 16 intermediate scalloped flourishes and curled leaf tips
// - Tier 3: 16 grand botanical lotus leaves with central ribs and fine line shading
// - 16 floating sparkle stars and 16 orbiting micro-pearls
// ============================================================================
export function CardArt01Boss({ className = '' }) {
  const cx = 100;
  const cy = 100;
  const nPetals = 16;
  const step = 360 / nPetals;

  // 1. Center micro-hatching ring (64 ticks between r=22 and r=27)
  const nCenterHatches = 64;
  const centerHatches = [];
  for (let i = 0; i < nCenterHatches; i++) {
    const a = (i * 360) / nCenterHatches;
    const [x1, y1] = polar(cx, cy, 22.5, a);
    const [x2, y2] = polar(cx, cy, 27, a);
    centerHatches.push(`M ${x1},${y1} L ${x2},${y2}`);
  }

  // 2. Beaded pearl garland (36 circular pearls between r=29 and r=38)
  const nBeads = 36;
  const pearls = Array.from({ length: nBeads }).map((_, i) => {
    const [bx, by] = polar(cx, cy, 33.5, (i * 360) / nBeads);
    return { bx, by };
  });

  // 3. Tier 1: 16 Inner Lotus Petals with diagonal hatch lines on right flank
  const innerPetalOutlines = [];
  const innerPetalVeins = [];
  const innerPetalHatches = [];

  // 4. Tier 2: 16 Intermediate Scallop Flourishes
  const midFlourishes = [];

  // 5. Tier 3: 16 Grand Botanical Leaves with fine diagonal shading
  const outerLeafOutlines = [];
  const outerLeafVeins = [];
  const outerLeafHatches = [];
  const outerStars = [];
  const outerOrbitDots = [];

  for (let i = 0; i < nPetals; i++) {
    const a = i * step;

    // --- Tier 1: Inner Petals (r=39 to r=57) ---
    const [ipBaseLeft, ipBaseLeftY] = polar(cx, cy, 39, a - 9);
    const [ipBaseRight, ipBaseRightY] = polar(cx, cy, 39, a + 9);
    const [ipTipX, ipTipY] = polar(cx, cy, 57, a);
    const [ipCtrlLX, ipCtrlLY] = polar(cx, cy, 47, a - 10);
    const [ipCtrlRX, ipCtrlRY] = polar(cx, cy, 47, a + 10);
    innerPetalOutlines.push(
      `M ${ipBaseLeft},${ipBaseLeftY} Q ${ipCtrlLX},${ipCtrlLY} ${ipTipX},${ipTipY} Q ${ipCtrlRX},${ipCtrlRY} ${ipBaseRight},${ipBaseRightY}`
    );

    // Inner petal center vein
    const [ipBaseMidX, ipBaseMidY] = polar(cx, cy, 39, a);
    innerPetalVeins.push(`M ${ipBaseMidX},${ipBaseMidY} L ${polar(cx, cy, 54, a).join(',')}`);

    // Inner petal hatch lines on right flank (3 lines)
    for (let h = 1; h <= 3; h++) {
      const frac = h / 4;
      const [vx, vy] = polar(cx, cy, 40 + frac * 14, a);
      const [wx, wy] = polar(cx, cy, 41 + frac * 12, a + 5.5);
      innerPetalHatches.push(`M ${vx},${vy} L ${wx},${wy}`);
    }

    // --- Tier 2: Intermediate Scallops in valleys (r=45 to r=65) ---
    const midA = a + step / 2;
    const [scBaseL, scBaseLY] = polar(cx, cy, 46, midA - 8);
    const [scBaseR, scBaseRY] = polar(cx, cy, 46, midA + 8);
    const [scTipX, scTipY] = polar(cx, cy, 65, midA);
    const [scCtrlLX, scCtrlLY] = polar(cx, cy, 54, midA - 9);
    const [scCtrlRX, scCtrlRY] = polar(cx, cy, 54, midA + 9);
    midFlourishes.push(
      `M ${scBaseL},${scBaseLY} Q ${scCtrlLX},${scCtrlLY} ${scTipX},${scTipY} Q ${scCtrlRX},${scCtrlRY} ${scBaseR},${scBaseRY}`
    );

    // --- Tier 3: Grand Outer Botanical Leaves (r=55 to r=86) ---
    const [olBaseL, olBaseLY] = polar(cx, cy, 55, a - 10);
    const [olBaseR, olBaseRY] = polar(cx, cy, 55, a + 10);
    const [olTipX, olTipY] = polar(cx, cy, 86, a);
    const [olCtrlLX, olCtrlLY] = polar(cx, cy, 68, a - 12);
    const [olCtrlRX, olCtrlRY] = polar(cx, cy, 68, a + 12);
    outerLeafOutlines.push(
      `M ${olBaseL},${olBaseLY} Q ${olCtrlLX},${olCtrlLY} ${olTipX},${olTipY} Q ${olCtrlRX},${olCtrlRY} ${olBaseR},${olBaseRY}`
    );

    // Outer leaf center rib
    const [olBaseMidX, olBaseMidY] = polar(cx, cy, 55, a);
    outerLeafVeins.push(`M ${olBaseMidX},${olBaseMidY} L ${polar(cx, cy, 82, a).join(',')}`);

    // Outer leaf diagonal hatching on right flank (4 lines)
    for (let h = 1; h <= 4; h++) {
      const frac = h / 5;
      const [vx, vy] = polar(cx, cy, 58 + frac * 24, a);
      const [wx, wy] = polar(cx, cy, 60 + frac * 20, a + 7);
      outerLeafHatches.push(`M ${vx},${vy} L ${wx},${wy}`);
    }

    // Floating Sparkle Stars outside between leaf tips (at midA, r=93)
    const [sx, sy] = polar(cx, cy, 93, midA);
    outerStars.push(sparkleStar(sx, sy, 3.8));

    // Outer Orbiting Pearl Beads on leaf tips (at a, r=91)
    const [ox, oy] = polar(cx, cy, 91, a);
    outerOrbitDots.push({ ox, oy });
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Solar Aperture */}
      <circle cx={cx} cy={cy} r="18" stroke="white" strokeWidth="1.4" strokeOpacity="0.9" fill="white" fillOpacity="0.06" />
      <circle cx={cx} cy={cy} r="22.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

      {/* Center Fine Micro-Hatching */}
      <path d={centerHatches.join(' ')} stroke="white" strokeWidth="0.85" strokeOpacity="0.75" />
      <circle cx={cx} cy={cy} r="27.5" stroke="white" strokeWidth="1.3" strokeOpacity="0.9" />

      {/* Pearl Bead Garland Track (Double-rail with 36 pearls) */}
      <circle cx={cx} cy={cy} r="29.5" stroke="white" strokeWidth="1.1" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="37.5" stroke="white" strokeWidth="1.3" strokeOpacity="0.9" />
      {pearls.map((p, idx) => (
        <circle
          key={idx}
          cx={p.bx}
          cy={p.by}
          r="2.1"
          stroke="white"
          strokeWidth="0.9"
          strokeOpacity="0.95"
          fill="white"
          fillOpacity="0.7"
        />
      ))}
      <circle cx={cx} cy={cy} r="39" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

      {/* Tier 1: Inner Lotus Petals */}
      <path
        d={innerPetalOutlines.join(' ')}
        stroke="white"
        strokeWidth="1.35"
        strokeOpacity="0.95"
        fill="white"
        fillOpacity="0.08"
      />
      <path d={innerPetalVeins.join(' ')} stroke="white" strokeWidth="1.0" strokeOpacity="0.75" />
      <path d={innerPetalHatches.join(' ')} stroke="white" strokeWidth="0.85" strokeOpacity="0.7" />

      {/* Tier 2: Intermediate Scalloped Flourishes */}
      <path
        d={midFlourishes.join(' ')}
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.85"
        fill="white"
        fillOpacity="0.05"
      />

      {/* Tier 3: Grand Outer Botanical Leaves with Shading */}
      <path
        d={outerLeafOutlines.join(' ')}
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.98"
        fill="white"
        fillOpacity="0.1"
      />
      <path d={outerLeafVeins.join(' ')} stroke="white" strokeWidth="1.15" strokeOpacity="0.85" />
      <path d={outerLeafHatches.join(' ')} stroke="white" strokeWidth="0.9" strokeOpacity="0.8" />

      {/* Outer Orbiting Pearl Finials */}
      {outerOrbitDots.map((d, idx) => (
        <circle
          key={idx}
          cx={d.ox}
          cy={d.oy}
          r="1.7"
          fill="white"
          fillOpacity="0.95"
        />
      ))}

      {/* 16 Floating Four-Point Sparkle Stars */}
      <path
        d={outerStars.join(' ')}
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.95"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

// ============================================================================
// ART 02: HIGH-DENSITY BANKNOTE GUILLOCHE ROSETTE (Card 02: "Earn Every Single Day")
// Directly inspired by User Image 3 (intricate banknote moiré engravings) & Image 2 #2
// Features:
// - Multi-facet 16-point central Surya star with alternating tone
// - Inner radial gear teeth ring (32 micro-teeth)
// - Inner 16-ribbon guilloche moiré weave
// - Outer 24-ribbon grand sweeping rosette petals
// - Intersecting reverse-angle ribbons creating diamond lattice
// - Double boundary tracks with 48 pearls & 16 diamond finials
// ============================================================================
export function CardArt02Income({ className = '' }) {
  const cx = 100;
  const cy = 100;

  // 1. 16-point faceted central star
  const centralStar = [];
  for (let i = 0; i < 16; i++) {
    const a = i * 22.5;
    const [x0, y0] = polar(cx, cy, 8, a);
    const [xTip, yTip] = polar(cx, cy, 22, a);
    const [c1x, c1y] = polar(cx, cy, 14, a - 8);
    const [c2x, c2y] = polar(cx, cy, 14, a + 8);
    centralStar.push(`M ${x0},${y0} L ${c1x},${c1y} L ${xTip},${yTip} L ${c2x},${c2y} Z`);
  }

  // 2. 32 radial gear teeth ticks (r=24 to r=28)
  const nTeeth = 32;
  const gearTeeth = [];
  for (let i = 0; i < nTeeth; i++) {
    const a = (i * 360) / nTeeth;
    const [t1x, t1y] = polar(cx, cy, 24, a);
    const [t2x, t2y] = polar(cx, cy, 28, a);
    gearTeeth.push(`M ${t1x},${t1y} L ${t2x},${t2y}`);
  }

  // 3. Inner 16 Guilloche Weave loops
  const innerLoops = Array.from({ length: 16 }).map((_, i) => ({
    rot: (i * 360) / 16,
  }));

  // 4. Outer 24 Grand Rosette Guilloche loops
  const outerLoops = Array.from({ length: 24 }).map((_, i) => ({
    rot: (i * 360) / 24,
  }));

  // 5. Outer 48 Pearls between r=83 and r=88
  const nPearls = 48;
  const outerPearls = Array.from({ length: nPearls }).map((_, i) => {
    const [px, py] = polar(cx, cy, 85.5, (i * 360) / nPearls);
    return { px, py };
  });

  // 6. 16 Radiant Diamond Finials at r=92
  const diamondFinials = [];
  for (let i = 0; i < 16; i++) {
    const a = (i * 360) / 16;
    const [dx, dy] = polar(cx, cy, 92, a);
    diamondFinials.push(sparkleStar(dx, dy, 2.8));
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer 24 Grand Guilloche Weave (Fine Banknote Engraving) */}
      <g stroke="white" strokeWidth="1.15" strokeOpacity="0.82" fill="white" fillOpacity="0.04">
        {outerLoops.map((l, i) => (
          <ellipse
            key={`out-${i}`}
            cx={cx}
            cy={cy}
            rx="49"
            ry="18"
            transform={`rotate(${l.rot} ${cx} ${cy})`}
          />
        ))}
      </g>

      {/* Inner 16 Reverse-Angle Guilloche Weave (Creating Moiré Interference) */}
      <g stroke="white" strokeWidth="1.2" strokeOpacity="0.85" fill="white" fillOpacity="0.05">
        {innerLoops.map((l, i) => (
          <ellipse
            key={`in-${i}`}
            cx={cx}
            cy={cy}
            rx="36"
            ry="14"
            transform={`rotate(${l.rot + 11.25} ${cx} ${cy})`}
          />
        ))}
      </g>

      {/* Concentric Framing Tracks */}
      <circle cx={cx} cy={cy} r="68" stroke="white" strokeWidth="1.3" strokeOpacity="0.75" />
      <circle cx={cx} cy={cy} r="54" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx={cx} cy={cy} r="32" stroke="white" strokeWidth="1.3" strokeOpacity="0.85" />

      {/* Radial Micro-Teeth Ring */}
      <path d={gearTeeth.join(' ')} stroke="white" strokeWidth="1.0" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="24" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

      {/* Faceted 16-Point Central Star */}
      <path
        d={centralStar.join(' ')}
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.95"
        fill="white"
        fillOpacity="0.25"
      />
      <circle cx={cx} cy={cy} r="4.5" fill="white" fillOpacity="0.95" />

      {/* Outer Halo Rings & 48 Pearls */}
      <circle cx={cx} cy={cy} r="82" stroke="white" strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="89" stroke="white" strokeWidth="1.4" strokeOpacity="0.9" />
      {outerPearls.map((p, idx) => (
        <circle
          key={idx}
          cx={p.px}
          cy={p.py}
          r="1.6"
          fill="white"
          fillOpacity="0.9"
        />
      ))}

      {/* 16 Diamond Finials on Perimeter */}
      <path
        d={diamondFinials.join(' ')}
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.95"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

// ============================================================================
// ART 03: SURYA STARBURST & SACRED KOLAM EMBLEM (Card 03: "Respect in Your Community")
// Directly inspired by User Image 2 #3 & #6, and Image 3 #3
// Features:
// - 8-petal central padma rosette with golden bindu
// - 12 faceted inner starburst rays
// - 12 triple-nested rounded floral petals
// - 12 grand radiant starburst spikes extending to r=86
// - Scalloped ogive arches connecting spike bases
// - Pearl finials and 12 outer sparkle stars
// ============================================================================
export function CardArt03Respect({ className = '' }) {
  const cx = 100;
  const cy = 100;
  const nPoints = 12;
  const step = 360 / nPoints;

  // 1. 8-petal central rosette
  const coreRosette = [];
  for (let i = 0; i < 8; i++) {
    const a = i * 45;
    const [px0, py0] = polar(cx, cy, 4, a);
    const [pxTip, pyTip] = polar(cx, cy, 14, a);
    const [w1x, w1y] = polar(cx, cy, 9, a - 12);
    const [w2x, w2y] = polar(cx, cy, 9, a + 12);
    coreRosette.push(`M ${px0},${py0} Q ${w1x},${w1y} ${pxTip},${pyTip} Q ${w2x},${w2y} ${px0},${py0}`);
  }

  // 2. 24 radial micro-ticks between r=16 and r=21
  const spokeTicks = [];
  for (let i = 0; i < 24; i++) {
    const a = (i * 360) / 24;
    const [x1, y1] = polar(cx, cy, 16, a);
    const [x2, y2] = polar(cx, cy, 21, a);
    spokeTicks.push(`M ${x1},${y1} L ${x2},${y2}`);
  }

  // 3. 12 Inner faceted starburst rays (r=22 to r=42)
  const innerRays = [];

  // 4. 12 Rounded floral petals with double nested outline & vein (r=28 to r=65)
  const floralPetalsOuter = [];
  const floralPetalsInner = [];
  const floralPetalVeins = [];

  // 5. 12 Grand Radiant Starburst Spikes (r=36 to r=86)
  const grandSpikes = [];
  const grandSpikeVeins = [];

  // 6. Scalloped ogive arches connecting spike shoulders
  const scallops = [];
  const tipPearls = [];
  const sparkleStarsList = [];

  for (let i = 0; i < nPoints; i++) {
    const a = i * step;

    // --- Inner Faceted Rays ---
    const [ir0, ir0y] = polar(cx, cy, 22, a);
    const [irTip, irTipy] = polar(cx, cy, 42, a);
    const [irL, irLy] = polar(cx, cy, 30, a - 8);
    const [irR, irRy] = polar(cx, cy, 30, a + 8);
    innerRays.push(`M ${ir0},${ir0y} L ${irL},${irLy} L ${irTip},${irTipy} L ${irR},${irRy} Z`);

    // --- Rounded Floral Petals in between (at midA) ---
    const midA = a + step / 2;
    const [fp0, fp0y] = polar(cx, cy, 28, midA);
    const [fpTip, fpTipy] = polar(cx, cy, 64, midA);
    const [fpL, fpLy] = polar(cx, cy, 46, midA - 11);
    const [fpR, fpRy] = polar(cx, cy, 46, midA + 11);
    floralPetalsOuter.push(`M ${fp0},${fp0y} Q ${fpL},${fpLy} ${fpTip},${fpTipy} Q ${fpR},${fpRy} ${fp0},${fp0y}`);

    // Inner nested petal contour
    const [ifp0, ifp0y] = polar(cx, cy, 32, midA);
    const [ifpTip, ifpTipy] = polar(cx, cy, 57, midA);
    const [ifpL, ifpLy] = polar(cx, cy, 44, midA - 7);
    const [ifpR, ifpRy] = polar(cx, cy, 44, midA + 7);
    floralPetalsInner.push(`M ${ifp0},${ifp0y} Q ${ifpL},${ifpLy} ${ifpTip},${ifpTipy} Q ${ifpR},${ifpRy} ${ifp0},${ifp0y}`);

    floralPetalVeins.push(`M ${fp0},${fp0y} L ${polar(cx, cy, 52, midA).join(',')}`);

    // --- Grand Radiant Starburst Spikes (at a, r=36 to r=86) ---
    const [gs0, gs0y] = polar(cx, cy, 36, a);
    const [gsTip, gsTipy] = polar(cx, cy, 86, a);
    const [gsL, gsLy] = polar(cx, cy, 58, a - 8);
    const [gsR, gsRy] = polar(cx, cy, 58, a + 8);
    grandSpikes.push(`M ${gs0},${gs0y} L ${gsL},${gsLy} L ${gsTip},${gsTipy} L ${gsR},${gsRy} Z`);
    grandSpikeVeins.push(`M ${polar(cx, cy, 44, a).join(',')} L ${polar(cx, cy, 80, a).join(',')}`);

    // Scallop connecting arch
    const nextA = (i + 1) * step;
    const [sc1x, sc1y] = polar(cx, cy, 70, a);
    const [sc2x, sc2y] = polar(cx, cy, 70, nextA);
    const [sccx, sccy] = polar(cx, cy, 58, (a + nextA) / 2);
    scallops.push(`M ${sc1x},${sc1y} Q ${sccx},${sccy} ${sc2x},${sc2y}`);

    // Pearl Finial at spike tip
    const [tx, ty] = polar(cx, cy, 89.5, a);
    tipPearls.push({ tx, ty });

    // Floating Sparkle Star above floral petal
    const [sx, sy] = polar(cx, cy, 78, midA);
    sparkleStarsList.push(sparkleStar(sx, sy, 3.4));
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central 8-Petal Rosette */}
      <circle cx={cx} cy={cy} r="4" fill="white" fillOpacity="0.95" />
      <path
        d={coreRosette.join(' ')}
        stroke="white"
        strokeWidth="1.1"
        strokeOpacity="0.85"
        fill="white"
        fillOpacity="0.2"
      />
      <circle cx={cx} cy={cy} r="16" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
      <path d={spokeTicks.join(' ')} stroke="white" strokeWidth="0.9" strokeOpacity="0.75" />
      <circle cx={cx} cy={cy} r="21.5" stroke="white" strokeWidth="1.3" strokeOpacity="0.85" />

      {/* 12 Inner Faceted Rays */}
      <path
        d={innerRays.join(' ')}
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.1"
      />

      {/* 12 Rounded Floral Petals with Nested Contour & Veins */}
      <path
        d={floralPetalsOuter.join(' ')}
        stroke="white"
        strokeWidth="1.35"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.08"
      />
      <path
        d={floralPetalsInner.join(' ')}
        stroke="white"
        strokeWidth="1.0"
        strokeOpacity="0.75"
        fill="white"
        fillOpacity="0.12"
      />
      <path d={floralPetalVeins.join(' ')} stroke="white" strokeWidth="0.9" strokeOpacity="0.7" />

      {/* Scalloped Ogive Halo Arches */}
      <path d={scallops.join(' ')} stroke="white" strokeWidth="1.15" strokeOpacity="0.75" />

      {/* 12 Grand Radiant Starburst Spikes */}
      <path
        d={grandSpikes.join(' ')}
        stroke="white"
        strokeWidth="1.45"
        strokeOpacity="0.98"
        fill="white"
        fillOpacity="0.12"
      />
      <path d={grandSpikeVeins.join(' ')} stroke="white" strokeWidth="1.0" strokeOpacity="0.8" />

      {/* Concentric Framing Ring */}
      <circle cx={cx} cy={cy} r="74" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />

      {/* 12 Pearl Finials on Spike Tips */}
      {tipPearls.map((p, idx) => (
        <circle
          key={idx}
          cx={p.tx}
          cy={p.ty}
          r="2.2"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.9"
          fill="white"
          fillOpacity="0.95"
        />
      ))}

      {/* 12 Floating Sparkle Stars */}
      <path
        d={sparkleStarsList.join(' ')}
        stroke="white"
        strokeWidth="0.75"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  );
}

// ============================================================================
// ART 04: GRAND 24-SPOKE ASHOKA & GUILLOCHE EMBLEM (Card 04: "Official Government Support")
// Directly inspired by User Image 3 Row 5 #5 & Ashoka Chakra / Sovereign Indian Seal
// Features:
// - Exact 24-spoke Ashoka/Dharma Wheel hub with central bindu and solid rim
// - 24-pearl containment garland between double circular tracks
// - Tier 1: 24 pointed chevron lotus petals
// - Tier 2: 24 sweeping interlocking guilloche ribbons forming imperial wreath
// - 48 radial solar ticks
// - Double outer protective boundary rings with 24 pearl droplets
// ============================================================================
export function CardArt04Govt({ className = '' }) {
  const cx = 100;
  const cy = 100;
  const nSpokes = 24;
  const step = 360 / nSpokes;

  // 1. 24 Dharma spokes
  const spokes24 = [];
  for (let i = 0; i < 24; i++) {
    const a = i * 15;
    const [x1, y1] = polar(cx, cy, 7, a);
    const [x2, y2] = polar(cx, cy, 22, a);
    spokes24.push(`M ${x1},${y1} L ${x2},${y2}`);
  }

  // 2. 24 Circular pearls between r=25 and r=33
  const nPearls = 24;
  const pearls = Array.from({ length: nPearls }).map((_, i) => {
    const [px, py] = polar(cx, cy, 29, (i * 360) / nPearls);
    return { px, py };
  });

  // 3. 24 Chevron Lotus Petals (r=35 to r=48)
  const chevronPetals = [];
  for (let i = 0; i < 24; i++) {
    const a = i * 15;
    const [x0, y0] = polar(cx, cy, 35, a);
    const [xTip, yTip] = polar(cx, cy, 48, a);
    const [w1, w1y] = polar(cx, cy, 41, a - 6);
    const [w2, w2y] = polar(cx, cy, 41, a + 6);
    chevronPetals.push(`M ${x0},${y0} L ${w1},${w1y} L ${xTip},${yTip} L ${w2},${w2y} Z`);
  }

  // 4. 24 Interlocking Guilloche Petal Ribbons (r=42 to r=78)
  const guillocheLoops = Array.from({ length: 24 }).map((_, i) => ({
    rot: i * 15,
  }));

  // 5. 48 Solar ticks between r=80 and r=86
  const nTicks = 48;
  const ticks = [];
  for (let i = 0; i < nTicks; i++) {
    const a = (i * 360) / nTicks;
    const [tx1, ty1] = polar(cx, cy, 80, a);
    const [tx2, ty2] = polar(cx, cy, 86, a);
    ticks.push(`M ${tx1},${ty1} L ${tx2},${ty2}`);
  }

  // 6. 24 Outer Pearl Droplets at r=91
  const outerDroplets = Array.from({ length: 24 }).map((_, i) => {
    const [ox, oy] = polar(cx, cy, 91, (i * 360) / 24);
    return { ox, oy };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 24 Interlocking Guilloche Imperial Wreath */}
      <g stroke="white" strokeWidth="1.2" strokeOpacity="0.82" fill="white" fillOpacity="0.04">
        {guillocheLoops.map((l, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="48"
            ry="17"
            transform={`rotate(${l.rot} ${cx} ${cy})`}
          />
        ))}
      </g>

      {/* Central Ashoka / Dharma Wheel Hub */}
      <circle cx={cx} cy={cy} r="3.5" fill="white" fillOpacity="0.95" />
      <circle cx={cx} cy={cy} r="7" stroke="white" strokeWidth="1.2" strokeOpacity="0.9" />
      <path d={spokes24.join(' ')} stroke="white" strokeWidth="1.15" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="22" stroke="white" strokeWidth="1.4" strokeOpacity="0.95" />

      {/* 24 Pearl Beads Track */}
      <circle cx={cx} cy={cy} r="25" stroke="white" strokeWidth="1.1" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="33" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
      {pearls.map((p, idx) => (
        <circle
          key={idx}
          cx={p.px}
          cy={p.py}
          r="1.8"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.9"
          fill="white"
          fillOpacity="0.75"
        />
      ))}
      <circle cx={cx} cy={cy} r="35" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

      {/* 24 Pointed Chevron Lotus Petals */}
      <path
        d={chevronPetals.join(' ')}
        stroke="white"
        strokeWidth="1.3"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.12"
      />

      {/* Concentric Framing Orbit Rings */}
      <circle cx={cx} cy={cy} r="66" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx={cx} cy={cy} r="79" stroke="white" strokeWidth="1.3" strokeOpacity="0.8" />

      {/* 48 Solar Hatch Ticks */}
      <path d={ticks.join(' ')} stroke="white" strokeWidth="1.1" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="87" stroke="white" strokeWidth="1.5" strokeOpacity="0.95" />

      {/* 24 Outer Pearl Droplets */}
      {outerDroplets.map((d, idx) => (
        <circle
          key={idx}
          cx={d.ox}
          cy={d.oy}
          r="1.7"
          fill="white"
          fillOpacity="0.95"
        />
      ))}
    </svg>
  );
}

// ============================================================================
// ART 05: LAKSHMI PADMA & PROSPERITY ROSETTE (Card 05: "Zero Franchise Fee & Royalties")
// Features:
// - Central solar core with 8-fold Lakshmi prosperity star
// - Dual circular boundary rings with 32 radial tick marks
// - Tier 1: 16 faceted diamond petals with central veins
// - Tier 2: 16 curved prosperity lotus scallops
// - Outer 32-pearl garland & radiant 4-point sparkle stars
// ============================================================================
export function CardArt05Franchise({ className = '' }) {
  const cx = 100;
  const cy = 100;

  // 1. 32 Coin ticks (r=22 to r=27)
  const nTicks = 32;
  const ticks = [];
  for (let i = 0; i < nTicks; i++) {
    const a = (i * 360) / nTicks;
    const [x1, y1] = polar(cx, cy, 22.5, a);
    const [x2, y2] = polar(cx, cy, 27, a);
    ticks.push(`M ${x1},${y1} L ${x2},${y2}`);
  }

  // 2. 16 Faceted Diamond Petals (r=33 to r=55)
  const nPetals = 16;
  const step = 360 / nPetals;
  const facetedPetals = [];
  const petalVeins = [];
  for (let i = 0; i < nPetals; i++) {
    const a = i * step;
    const [bL, bLY] = polar(cx, cy, 33, a - 9);
    const [bR, bRY] = polar(cx, cy, 33, a + 9);
    const [tip, tipY] = polar(cx, cy, 55, a);
    const [midL, midLY] = polar(cx, cy, 44, a - 10);
    const [midR, midRY] = polar(cx, cy, 44, a + 10);
    facetedPetals.push(
      `M ${bL},${bLY} L ${midL},${midLY} L ${tip},${tipY} L ${midR},${midRY} L ${bR},${bRY} Z`
    );
    const [baseMidX, baseMidY] = polar(cx, cy, 33, a);
    petalVeins.push(`M ${baseMidX},${baseMidY} L ${tip},${tipY}`);
  }

  // 3. 16 Outer Curved Scallops (r=50 to r=76)
  const outerScallops = [];
  for (let i = 0; i < nPetals; i++) {
    const a = i * step + step / 2;
    const [sL, sLY] = polar(cx, cy, 50, a - 11);
    const [sR, sRY] = polar(cx, cy, 50, a + 11);
    const [sTip, sTipY] = polar(cx, cy, 76, a);
    const [cL, cLY] = polar(cx, cy, 64, a - 12);
    const [cR, cRY] = polar(cx, cy, 64, a + 12);
    outerScallops.push(
      `M ${sL},${sLY} Q ${cL},${cLY} ${sTip},${sTipY} Q ${cR},${cRY} ${sR},${sRY}`
    );
  }

  // 4. 32 Beaded pearls at r=83
  const pearls = Array.from({ length: 32 }).map((_, i) => {
    const [px, py] = polar(cx, cy, 83, (i * 360) / 32);
    return { px, py };
  });

  // 5. 16 Radiant Sparkle Stars at r=91
  const stars = Array.from({ length: 16 }).map((_, i) => {
    const [sx, sy] = polar(cx, cy, 91, i * step);
    return sparkleStar(sx, sy, 3.8);
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer framing boundary tracks */}
      <circle cx={cx} cy={cy} r="88" stroke="white" strokeWidth="1.3" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="78" stroke="white" strokeWidth="1.1" strokeOpacity="0.75" />

      {/* 32 Beaded Pearls */}
      {pearls.map((p, idx) => (
        <circle
          key={idx}
          cx={p.px}
          cy={p.py}
          r="1.6"
          fill="white"
          fillOpacity="0.9"
        />
      ))}

      {/* 16 Outer Scallop Flourishes */}
      <path
        d={outerScallops.join(' ')}
        stroke="white"
        strokeWidth="1.3"
        strokeOpacity="0.85"
        fill="white"
        fillOpacity="0.06"
      />

      {/* Intermediate Orbit Ring */}
      <circle cx={cx} cy={cy} r="52" stroke="white" strokeWidth="1.1" strokeOpacity="0.65" />

      {/* 16 Faceted Diamond Petals */}
      <path
        d={facetedPetals.join(' ')}
        stroke="white"
        strokeWidth="1.3"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.1"
      />
      <path d={petalVeins.join(' ')} stroke="white" strokeWidth="0.9" strokeOpacity="0.8" />

      {/* Inner Framing Rings */}
      <circle cx={cx} cy={cy} r="32" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="28" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

      {/* 32 Radial Coin Ticks */}
      <path d={ticks.join(' ')} stroke="white" strokeWidth="1.1" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="22" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

      {/* Central 8-Pointed Lakshmi Star Core */}
      <circle cx={cx} cy={cy} r="5" fill="white" fillOpacity="0.95" />
      <circle cx={cx} cy={cy} r="14" stroke="white" strokeWidth="1.2" strokeOpacity="0.9" />
      {Array.from({ length: 8 }).map((_, i) => {
        const [x1, y1] = polar(cx, cy, 6, i * 45);
        const [x2, y2] = polar(cx, cy, 14, i * 45);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.2" strokeOpacity="0.9" />;
      })}

      {/* Outer 16 Sparkle Stars */}
      <path d={stars.join(' ')} fill="white" fillOpacity="0.9" />
    </svg>
  );
}

// ============================================================================
// ART 06: BHARAT KALPATARU & DIGITAL LOTUS MANDALA (Card 06: "Digital Empowerment")
// Features:
// - Central jewel with 12 radiating digital inclusion node rays
// - 12 concentric petal arches forming a blossoming interconnected matrix
// - 24 radiating solar spokes connecting to boundary node points
// - 24 sacred teardrop kalpataru leaves & ambient outer constellation dots
// ============================================================================
export function CardArt06Impact({ className = '' }) {
  const cx = 100;
  const cy = 100;
  const nNodes = 12;
  const step = 360 / nNodes;

  // 1. Central 12 Spokes with node dots (r=6 to r=22)
  const innerSpokes = [];
  const innerNodes = [];
  for (let i = 0; i < nNodes; i++) {
    const a = i * step;
    const [x1, y1] = polar(cx, cy, 6, a);
    const [x2, y2] = polar(cx, cy, 22, a);
    innerSpokes.push(`M ${x1},${y1} L ${x2},${y2}`);
    const [nx, ny] = polar(cx, cy, 22, a);
    innerNodes.push({ nx, ny });
  }

  // 2. 12 Blossoming Lotus Petals with dual inner filaments (r=26 to r=56)
  const lotusPetals = [];
  const filaments = [];
  for (let i = 0; i < nNodes; i++) {
    const a = i * step;
    const [bL, bLY] = polar(cx, cy, 26, a - 12);
    const [bR, bRY] = polar(cx, cy, 26, a + 12);
    const [tip, tipY] = polar(cx, cy, 56, a);
    const [cL, cLY] = polar(cx, cy, 42, a - 15);
    const [cR, cRY] = polar(cx, cy, 42, a + 15);
    lotusPetals.push(
      `M ${bL},${bLY} Q ${cL},${cLY} ${tip},${tipY} Q ${cR},${cRY} ${bR},${bRY}`
    );

    // Inner arch filament
    const [fL, fLY] = polar(cx, cy, 28, a - 7);
    const [fR, fRY] = polar(cx, cy, 28, a + 7);
    const [fTip, fTipY] = polar(cx, cy, 46, a);
    filaments.push(`M ${fL},${fLY} Q ${polar(cx, cy, 38, a - 9).join(',')} ${fTip},${fTipY} Q ${polar(cx, cy, 38, a + 9).join(',')} ${fR},${fRY}`);
  }

  // 3. 24 Interconnected Rays from r=58 to r=78
  const nRays = 24;
  const midRays = [];
  for (let i = 0; i < nRays; i++) {
    const a = (i * 360) / nRays;
    const [r1, ry1] = polar(cx, cy, 58, a);
    const [r2, ry2] = polar(cx, cy, 78, a);
    midRays.push(`M ${r1},${ry1} L ${r2},${ry2}`);
  }

  // 4. 24 Sacred Kalpataru Teardrops at r=85
  const teardrops = [];
  for (let i = 0; i < nRays; i++) {
    const a = (i * 360) / nRays;
    const [tTip, tTipY] = polar(cx, cy, 91, a);
    const [tBaseL, tBaseLY] = polar(cx, cy, 81, a - 4.5);
    const [tBaseR, tBaseRY] = polar(cx, cy, 81, a + 4.5);
    teardrops.push(`M ${tBaseL},${tBaseLY} Q ${polar(cx, cy, 86, a - 5).join(',')} ${tTip},${tTipY} Q ${polar(cx, cy, 86, a + 5).join(',')} ${tBaseR},${tBaseRY} Z`);
  }

  // 5. 24 Outer Orbit Constellation Dots at r=94
  const dots24 = Array.from({ length: 24 }).map((_, i) => {
    const [dx, dy] = polar(cx, cy, 95, (i * 360) / 24 + 7.5);
    return { dx, dy };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Boundary Rings */}
      <circle cx={cx} cy={cy} r="89" stroke="white" strokeWidth="1.3" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="79" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

      {/* 24 Outer Constellation Dots */}
      {dots24.map((d, idx) => (
        <circle key={idx} cx={d.dx} cy={d.dy} r="1.4" fill="white" fillOpacity="0.9" />
      ))}

      {/* 24 Sacred Teardrops */}
      <path
        d={teardrops.join(' ')}
        stroke="white"
        strokeWidth="1.1"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.14"
      />

      {/* 24 Radiating Spoke Rays */}
      <path d={midRays.join(' ')} stroke="white" strokeWidth="1" strokeOpacity="0.75" />

      {/* Middle Orbit Track */}
      <circle cx={cx} cy={cy} r="58" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

      {/* 12 Blossoming Lotus Petals & Filaments */}
      <path
        d={lotusPetals.join(' ')}
        stroke="white"
        strokeWidth="1.4"
        strokeOpacity="0.9"
        fill="white"
        fillOpacity="0.08"
      />
      <path d={filaments.join(' ')} stroke="white" strokeWidth="1" strokeOpacity="0.75" />

      {/* Inner Circular Containment Rims */}
      <circle cx={cx} cy={cy} r="25" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
      <circle cx={cx} cy={cy} r="20" stroke="white" strokeWidth="1" strokeOpacity="0.7" />

      {/* 12 Center Spokes */}
      <path d={innerSpokes.join(' ')} stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

      {/* 12 Inner Network Nodes */}
      {innerNodes.map((n, idx) => (
        <circle key={idx} cx={n.nx} cy={n.ny} r="1.8" fill="white" fillOpacity="0.95" />
      ))}

      {/* Central Radiating Core */}
      <circle cx={cx} cy={cy} r="4" fill="white" fillOpacity="0.95" />
      <circle cx={cx} cy={cy} r="8" stroke="white" strokeWidth="1.2" strokeOpacity="0.9" />
    </svg>
  );
}
