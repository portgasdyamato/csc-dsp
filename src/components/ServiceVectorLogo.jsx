import React from 'react';

// ============================================================================
// SOLID, FILLED & DETAILED MONOCHROME SVG SERVICE VECTORS
// Uses solid filled silhouettes and true transparent negative-space cutouts
// via fillRule="evenodd" and SVG masks so icons adapt cleanly to both
// light (#fff) and dark (#0a1628) hover/focus card states via currentColor.
// ============================================================================
const INK = 'currentColor';

export default function ServiceVectorLogo({
  id,
  className = 'w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] shrink-0 select-none',
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {renderSolidVector(id)}
    </svg>
  );
}

function renderSolidVector(id) {
  switch (id) {
    // 1. AADHAAR / UIDAI — Solid Sunburst + Bold Biometric Fingerprint Arch
    case 'uidai':
      return (
        <g>
          <path
            d="M 50,10 L 55,23 H 45 Z
               M 32,14 L 40,24.5 L 31,28 Z
               M 68,14 L 69,28 L 60,24.5 Z
               M 18,24 L 29,30.5 L 22,37 Z
               M 82,24 L 78,37 L 71,30.5 Z
               M 9,38 L 21.5,40.5 L 16.5,48.5 Z
               M 91,38 L 83.5,48.5 L 78.5,40.5 Z
               M 5,55 L 17,53 L 15,61.5 Z
               M 95,55 L 85,61.5 L 83,53 Z"
            fill={INK}
          />
          <path
            d="M 50,25 A 36,36 0 0 1 84,71 H 74 A 26,26 0 0 0 50,35 A 26,26 0 0 0 26,71 H 16 A 36,36 0 0 1 50,25 Z"
            fill={INK}
          />
          <path
            d="M 32,71 A 18,18 0 0 1 68,71 H 61 A 11,11 0 0 0 39,71 Z"
            fill={INK}
          />
          <path d="M 44,71 A 6,6 0 0 1 56,71 Z" fill={INK} />
          <rect x="12" y="77" width="76" height="5" rx="2.5" fill={INK} />
          <rect x="28" y="85" width="44" height="3.5" rx="1.75" fill={INK} fillOpacity="0.45" />
        </g>
      );

    // 2. e-DISTRICT CERTIFICATES — Solid Official Charter & Serrated Ribbon Seal
    case 'edistrict':
      return (
        <g>
          <mask id="mask-edistrict">
            <rect width="100" height="100" fill="white" />
            {/* Inner seal emblem ring & lines */}
            <circle cx="42" cy="34" r="7.5" fill="black" />
            <rect x="25" y="47" width="34" height="4" rx="2" fill="black" />
            <rect x="25" y="55" width="30" height="4" rx="2" fill="black" />
            <rect x="25" y="63" width="22" height="4" rx="2" fill="black" />
            {/* Seal gap */}
            <circle cx="68" cy="64" r="16.5" fill="black" />
          </mask>
          {/* Back sheet shadow */}
          <rect x="24" y="13" width="48" height="64" rx="6" fill={INK} fillOpacity="0.3" />
          {/* Main filled parchment */}
          <rect x="16" y="18" width="52" height="66" rx="6" fill={INK} mask="url(#mask-edistrict)" />
          {/* Center dot inside crest cutout */}
          <circle cx="42" cy="34" r="3.5" fill={INK} />
          {/* Ribbon tails */}
          <path d="M 61,72 L 57,91 L 68,85 L 79,91 L 75,72 Z" fill={INK} />
          {/* Solid Official Rosette Seal with checkmark cutout */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 68,50 A 14,14 0 1 0 68,78 A 14,14 0 1 0 68,50 Z M 74.5,60.2 L 66.2,68.5 L 61.5,63.8 L 63.8,61.5 L 66.2,63.9 L 72.2,57.9 Z"
            fill={INK}
          />
        </g>
      );

    // 3. PAN / PASSPORT / IDENTITY — Solid Biometric Smart ID Card
    case 'identity':
      return (
        <g>
          <mask id="mask-identity">
            <rect width="100" height="100" fill="white" />
            {/* Header stripe cutout */}
            <rect x="10" y="20" width="80" height="10" fill="black" />
            {/* Portrait box cutout */}
            <rect x="17" y="37" width="24" height="29" rx="3" fill="black" />
            {/* Data bar cutouts */}
            <rect x="47" y="39" width="35" height="5" rx="2.5" fill="black" />
            <rect x="47" y="48" width="26" height="4.5" rx="2.25" fill="black" />
            <rect x="47" y="57" width="32" height="4.5" rx="2.25" fill="black" />
            <rect x="17" y="71" width="44" height="4" rx="2" fill="black" />
          </mask>
          <rect x="10" y="20" width="80" height="60" rx="8" fill={INK} mask="url(#mask-identity)" />
          {/* Top header bar with emblem dot */}
          <rect x="10" y="20" width="80" height="8" rx="3" fill={INK} fillOpacity="0.45" />
          {/* Solid person silhouette inside portrait frame */}
          <circle cx="29" cy="46" r="5" fill={INK} />
          <path d="M 20,63 C 20,57 24,54 29,54 C 34,54 38,57 38,63 Z" fill={INK} />
          {/* Solid verified badge */}
          <circle cx="77" cy="72" r="6" fill={INK} fillOpacity="0.45" />
        </g>
      );

    // 4. MUNICIPAL & LAND RECORDS — Solid Pillar Civic Courthouse
    case 'municipal':
      return (
        <g>
          {/* Pediment Roof */}
          <path d="M 50,14 L 86,34 H 14 Z" fill={INK} />
          <circle cx="50" cy="25" r="3" fill="#FFFFFF" fillOpacity="0.85" />
          {/* Cornice */}
          <rect x="12" y="36" width="76" height="6" rx="2" fill={INK} />
          {/* 4 Solid Fluted Columns */}
          <rect x="19" y="44" width="10" height="30" rx="2" fill={INK} />
          <rect x="36" y="44" width="10" height="30" rx="2" fill={INK} />
          <rect x="54" y="44" width="10" height="30" rx="2" fill={INK} />
          <rect x="71" y="44" width="10" height="30" rx="2" fill={INK} />
          {/* Stepped Plinth Base */}
          <rect x="13" y="76" width="74" height="6" rx="2" fill={INK} />
          <rect x="8" y="84" width="84" height="6" rx="2" fill={INK} />
        </g>
      );

    // 5. ELECTRICITY & UTILITY BILLS — Solid High-Contrast Lightning Emblem
    case 'electricity':
      return (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50,10 C 27.9,10 10,27.9 10,50 C 10,72.1 27.9,90 50,90 C 72.1,90 90,72.1 90,50 C 90,27.9 72.1,10 50,10 Z M 55,21 L 34,53 H 49 L 44,79 L 67,46 H 52 Z"
            fill={INK}
          />
        </g>
      );

    // 6. MOBILE, DTH & FASTAG — Solid Smartphone with Signal Waves & Tag
    case 'recharge':
      return (
        <g>
          <mask id="mask-recharge">
            <rect width="100" height="100" fill="white" />
            <rect x="33" y="21" width="34" height="52" rx="4" fill="black" />
            <circle cx="50" cy="80" r="3.2" fill="black" />
          </mask>
          <rect x="27" y="13" width="46" height="74" rx="9" fill={INK} mask="url(#mask-recharge)" />
          {/* Screen inner solid elements */}
          <rect x="37" y="26" width="26" height="10" rx="3" fill={INK} />
          <rect x="37" y="40" width="11" height="11" rx="2.5" fill={INK} fillOpacity="0.65" />
          <rect x="52" y="40" width="11" height="11" rx="2.5" fill={INK} fillOpacity="0.65" />
          <rect x="37" y="55" width="26" height="13" rx="3" fill={INK} />
          {/* Bold signal arcs */}
          <path d="M 14,34 A 24,24 0 0 0 14,66 L 19,61 A 17,17 0 0 1 19,39 Z" fill={INK} />
          <path d="M 86,34 A 24,24 0 0 1 86,66 L 81,61 A 17,17 0 0 0 81,39 Z" fill={INK} />
        </g>
      );

    // 7. AEPS BANKING & MICRO-ATM — Solid Vault Bank + Rupee Emblem
    case 'banking':
      return (
        <g>
          {/* Solid Bank Roof */}
          <path d="M 50,13 L 88,32 H 12 Z" fill={INK} />
          <rect x="12" y="34" width="76" height="6" rx="2" fill={INK} />
          {/* Outer Pillars */}
          <rect x="17" y="42" width="11" height="33" rx="2" fill={INK} />
          <rect x="72" y="42" width="11" height="33" rx="2" fill={INK} />
          {/* Center Solid Rupee Medallion */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50,42 A 16,16 0 1 0 50,74 A 16,16 0 1 0 50,42 Z M 43,49 H 57 V 52.5 H 52.2 C 53.5,53.6 54.3,55.2 54.4,57 H 57 V 60 H 54.2 C 53.6,63 51.2,65.2 48,65.4 L 54,71 H 49.5 L 43,64.8 V 62 H 47.6 C 49.5,62 50.8,61.1 51.1,60 H 43 V 57 H 51.1 C 50.8,55.8 49.5,55 47.6,55 H 43 V 49 Z"
            fill={INK}
          />
          {/* Base Steps */}
          <rect x="10" y="77" width="80" height="6" rx="2" fill={INK} />
          <rect x="6" y="85" width="88" height="5" rx="2" fill={INK} />
        </g>
      );

    // 8. INSURANCE & LIFE COVER — Solid Sovereign Shield with Bold Cross/Check
    case 'insurance':
      return (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50,12 L 84,25 V 49 C 84,69.5 69.2,83.8 50,89 C 30.8,83.8 16,69.5 16,49 V 25 L 50,12 Z M 67,38.5 L 46.5,59 L 34.5,47 L 29,52.5 L 46.5,70 L 72.5,44 Z"
            fill={INK}
          />
        </g>
      );

    // 9. PM WELFARE SCHEMES — Solid Community Hands & Rising Sun Lotus
    case 'welfare':
      return (
        <g>
          {/* Rising Sun / Emblem */}
          <circle cx="50" cy="31" r="13" fill={INK} />
          <path d="M 50,11 L 54,16 H 46 Z M 30,18 L 36,21 L 32,26 Z M 70,18 L 68,26 L 64,21 Z" fill={INK} />
          {/* Two Solid Supporting Hands */}
          <path d="M 14,56 C 14,50 22,48 29,52 L 45,62 L 45,78 L 22,72 C 16,70 14,64 14,56 Z" fill={INK} />
          <path d="M 86,56 C 86,50 78,48 71,52 L 55,62 L 55,78 L 78,72 C 84,70 86,64 86,56 Z" fill={INK} />
          {/* Base Plinth */}
          <rect x="26" y="81" width="48" height="7" rx="3.5" fill={INK} />
        </g>
      );

    // 10. PENSION & SOCIAL SECURITY — Solid Umbrella Protection & Coin
    case 'pension':
      return (
        <g>
          {/* Umbrella Canopy */}
          <path d="M 12,50 C 14,27 30,14 50,14 C 70,14 86,27 88,50 C 80,45 72,45 64,50 C 57,45 43,45 36,50 C 28,45 20,45 12,50 Z" fill={INK} />
          {/* Handle */}
          <path d="M 47,48 H 53 V 75 C 53,82 47,87 40,87 C 34,87 30,83 30,78 H 36 C 36,80 38,81 40,81 C 44,81 47,78 47,74 V 48 Z" fill={INK} />
          {/* Solid Security Coin */}
          <circle cx="69" cy="70" r="13" fill={INK} />
          <rect x="64" y="65" width="10" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.85" />
          <rect x="64" y="71" width="10" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.85" />
        </g>
      );

    // 11. TELE-LAW & LEGAL AID — Solid Scales of Justice
    case 'telelaw':
      return (
        <g>
          {/* Central Pillar & Crown */}
          <circle cx="50" cy="18" r="6" fill={INK} />
          <rect x="46.5" y="23" width="7" height="53" rx="2" fill={INK} />
          {/* Balance Beam */}
          <rect x="16" y="27" width="68" height="6" rx="3" fill={INK} />
          {/* Left Solid Pan */}
          <path d="M 24,33 L 12,55 H 36 Z" fill={INK} fillOpacity="0.35" />
          <path d="M 10,55 H 38 C 36,64 31,68 24,68 C 17,68 12,64 10,55 Z" fill={INK} />
          {/* Right Solid Pan */}
          <path d="M 76,33 L 64,55 H 88 Z" fill={INK} fillOpacity="0.35" />
          <path d="M 62,55 H 90 C 88,64 83,68 76,68 C 69,68 64,64 62,55 Z" fill={INK} />
          {/* Pedestal Base */}
          <rect x="28" y="76" width="44" height="6" rx="3" fill={INK} />
          <rect x="20" y="83" width="60" height="6" rx="3" fill={INK} />
        </g>
      );

    // 12. AGRICULTURE & KISAN — Solid Wheat Stalks & Sprout Emblem
    case 'agriculture':
      return (
        <g>
          {/* Sun Behind */}
          <circle cx="50" cy="24" r="11" fill={INK} fillOpacity="0.35" />
          {/* Central Stem */}
          <rect x="47.5" y="26" width="5" height="54" rx="2.5" fill={INK} />
          {/* Solid Grain Leaves */}
          <path d="M 47,42 C 33,42 24,33 24,22 C 35,22 47,30 47,42 Z" fill={INK} />
          <path d="M 53,42 C 67,42 76,33 76,22 C 65,22 53,30 53,42 Z" fill={INK} />
          <path d="M 47,60 C 31,60 20,50 20,38 C 33,38 47,48 47,60 Z" fill={INK} />
          <path d="M 53,60 C 69,60 80,50 80,38 C 67,38 53,48 53,60 Z" fill={INK} />
          {/* Soil Mound */}
          <path d="M 18,84 C 24,74 36,71 50,71 C 64,71 76,74 82,84 Z" fill={INK} />
        </g>
      );

    // 13. IRCTC & TRAVEL — Solid High-Speed Express Train Front
    case 'irctc':
      return (
        <g>
          <mask id="mask-irctc">
            <rect width="100" height="100" fill="white" />
            <rect x="28" y="26" width="44" height="20" rx="5" fill="black" />
            <circle cx="33" cy="60" r="5" fill="black" />
            <circle cx="67" cy="60" r="5" fill="black" />
            <rect x="40" y="57" width="20" height="6" rx="3" fill="black" />
          </mask>
          {/* Train Body */}
          <rect x="21" y="16" width="58" height="58" rx="14" fill={INK} mask="url(#mask-irctc)" />
          {/* Pantograph / Top Light */}
          <rect x="41" y="10" width="18" height="5" rx="2.5" fill={INK} />
          {/* Rail Tracks */}
          <path d="M 28,74 L 18,90 H 27 L 36,74 Z" fill={INK} />
          <path d="M 72,74 L 82,90 H 73 L 64,74 Z" fill={INK} />
          <rect x="24" y="80" width="52" height="4.5" rx="2" fill={INK} />
        </g>
      );

    // 14. CSC ACADEMY & SKILLS — Solid Mortarboard Cap & Diploma
    case 'academy':
      return (
        <g>
          {/* Cap Top Diamond */}
          <path d="M 50,18 L 90,36 L 50,54 L 10,36 Z" fill={INK} />
          {/* Cap Crown */}
          <path d="M 24,45 V 63 C 24,72 36,79 50,79 C 64,79 76,72 76,63 V 45 L 50,57 Z" fill={INK} />
          {/* Tassel Cord & Bulb */}
          <rect x="81" y="38" width="4.5" height="24" rx="2" fill={INK} />
          <circle cx="83.25" cy="65" r="4.5" fill={INK} />
        </g>
      );

    // 15. TELEMEDICINE & HEALTHCARE — Solid Medical Shield & Bold Cross
    case 'telehealth':
      return (
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50,12 C 30,12 14,28 14,48 C 14,68 30,86 50,86 C 70,86 86,68 86,48 C 86,28 70,12 50,12 Z M 44,30 H 56 V 42 H 68 V 54 H 56 V 66 H 44 V 54 H 32 V 42 H 44 Z"
            fill={INK}
          />
        </g>
      );

    // 16. GRAMEEN e-STORE & LOGISTICS — Solid Storefront Awning & Parcel
    case 'grameen':
    default:
      return (
        <g>
          {/* Solid Awning Canopy */}
          <path d="M 18,18 H 82 L 88,36 C 88,42 82,46 76,46 C 70,46 66,42 66,37 C 66,42 61,46 55,46 C 49,46 45,42 45,37 C 45,42 40,46 34,46 C 28,46 24,42 24,37 C 24,42 19,46 14,46 C 12,46 11,42 12,36 Z" fill={INK} />
          {/* Store Body with Window & Door Cutout */}
          <mask id="mask-grameen">
            <rect width="100" height="100" fill="white" />
            <rect x="25" y="54" width="22" height="16" rx="3" fill="black" />
            <rect x="54" y="54" width="20" height="30" rx="3" fill="black" />
          </mask>
          <rect x="17" y="46" width="66" height="38" rx="4" fill={INK} mask="url(#mask-grameen)" />
          {/* Base Plinth */}
          <rect x="12" y="84" width="76" height="5" rx="2.5" fill={INK} />
        </g>
      );
  }
}
