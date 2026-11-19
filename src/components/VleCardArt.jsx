import React from 'react';

// ============================================================================
// ART 01: 4-ARM TRILOBED FLORAL CREST (INFINITELY SHARP VECTOR SVG)
// Exact silhouette of Reference 1: 4 symmetrical trilobed arms & V-notches
// ============================================================================
export function CardArt01Boss({ className = '' }) {
  const arms = [0, 90, 180, 270];
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="#ffffff">
        {arms.map((deg) => (
          <path
            key={deg}
            d="M 100 100
               L 76 76
               L 62 49
               C 56 36, 70 25, 81 35
               C 83 18, 91 11, 100 11
               C 109 11, 117 18, 119 35
               C 130 25, 144 36, 138 49
               L 124 76
               Z"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="24" />
      </g>
    </svg>
  );
}

// ============================================================================
// ART 02: HIGH-RES 12-PETAL SWIRLING ROSETTE (EXTRACTED FROM HQ REFERENCE)
// ============================================================================
export function CardArt02Income({ className = '' }) {
  return (
    <img
      src="/images/vle-art-02-hq.png?v=1"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}

// ============================================================================
// ART 03: HIGH-RES 6-PETAL SCALLOPED BLOSSOM (EXTRACTED FROM HQ REFERENCE)
// ============================================================================
export function CardArt03Respect({ className = '' }) {
  return (
    <img
      src="/images/vle-art-03-hq.png?v=1"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}

// ============================================================================
// ART 04: 8-DISC OVERLAPPING CYCLICAL WREATH (INFINITELY SHARP VECTOR SVG)
// Exact silhouette of Reference 4: 8 overlapping discs with crisp vector gaps
// ============================================================================
export function CardArt04Govt({ className = '' }) {
  const discs = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <mask id="art04-disc-cut">
          <rect width="200" height="200" fill="white" />
          <circle
            cx="100"
            cy="55"
            r="32.5"
            fill="black"
            transform="rotate(45 100 100)"
          />
        </mask>
      </defs>

      <g fill="#ffffff">
        {discs.map((deg) => (
          <g key={deg} transform={`rotate(${deg} 100 100)`}>
            <circle
              cx="100"
              cy="55"
              r="28.5"
              mask="url(#art04-disc-cut)"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

// Preserved exports for backwards compatibility
export function CardArt05Franchise({ className = '' }) {
  return <CardArt01Boss className={className} />;
}

export function CardArt06Impact({ className = '' }) {
  return <CardArt03Respect className={className} />;
}

// ============================================================================
// SEMANTIC INDIAN-ART PILLAR EMBLEMS (Conveying Both Indian Craft & Title Meaning)
// ============================================================================

// ============================================================================
// SEMANTIC INDIAN-ART PILLAR EMBLEMS (Conveying Both Indian Craft & Title Meaning)
// ============================================================================

/** 01: Run Your Own Hometown Enterprise — Ornate Rajasthani Jharokha Kiosk Emblem */
export function PillarArt01Enterprise({ className = '' }) {
  return (
    <img
      src="/images/vle-pillar-01.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}

/** 02: Earn Financial Independence Daily — 12-Petal Lotus Mandala with ₹ Emblem */
export function PillarArt02Income({ className = '' }) {
  return (
    <img
      src="/images/vle-pillar-02.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}

/** 03: Community Respect & National Impact — Community Figures Beneath Lotus Halo */
export function PillarArt03Community({ className = '' }) {
  return (
    <img
      src="/images/vle-pillar-03.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}

/** 04: Official Government Portal Backing — Ceremonial Crest Shield & Lotus Wreath */
export function PillarArt04Government({ className = '' }) {
  return (
    <img
      src="/images/vle-pillar-04.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain select-none pointer-events-none`}
    />
  );
}
