import React from 'react';

// ============================================================================
// LARGE, INTRICATELY DETAILED MONOCHROME NAVY BLUE (#0A1628) SVG VECTORS
// Standalone detailed vector illustrations in pure deep navy blue
// ============================================================================
const NAVY = '#0A1628';

export default function ServiceVectorLogo({ id }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] shrink-0 select-none text-[#0a1628]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderNavyVector(id)}
    </svg>
  );
}

function renderNavyVector(id) {
  switch (id) {
    // 1. AADHAAR / UIDAI — Large Detailed Sunburst + Concentric Fingerprint Arch
    case 'uidai':
      return (
        <g>
          {/* 11 Detailed Sun Rays */}
          <path
            d="M 50,10 L 54.5,22 L 45.5,22 Z
               M 33,13 L 40.5,23.5 L 31.5,26.5 Z
               M 67,13 L 68.5,26.5 L 59.5,23.5 Z
               M 19,23 L 29.5,29.5 L 22,36 Z
               M 81,23 L 78,36 L 70.5,29.5 Z
               M 9.5,37.5 L 21.5,39.5 L 16.5,47.5 Z
               M 90.5,37.5 L 83.5,47.5 L 78.5,39.5 Z
               M 5,54 L 17,52 L 14.5,60.5 Z
               M 95,54 L 85.5,60.5 L 83,52 Z
               M 4,68.5 L 15.5,63.5 L 15,71.5 Z
               M 96,68.5 L 85,71.5 L 84.5,63.5 Z"
            fill={NAVY}
          />
          {/* Sweeping Sun Halo Crescent */}
          <path
            d="M 50,25 A 37,37 0 0 1 84,71.5 L 76,71.5 A 29,29 0 0 0 50,33 Z"
            fill={NAVY}
          />
          {/* Fine Inner Halo Accent */}
          <path
            d="M 22,38 A 32,32 0 0 1 50,25"
            stroke={NAVY}
            strokeWidth="1.8"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />
          {/* 6 Detailed Concentric Fingerprint Ridges */}
          <path
            d="M 18,70.5 A 30,30 0 0 1 69,46"
            stroke={NAVY}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M 24.5,70.5 A 23.5,23.5 0 0 1 68,55"
            stroke={NAVY}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M 31,70.5 A 17,17 0 0 1 64,62"
            stroke={NAVY}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M 37.5,70.5 A 10.5,10.5 0 0 1 58,66.5"
            stroke={NAVY}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M 44,70.5 A 4.8,4.8 0 0 1 53.5,70.5"
            stroke={NAVY}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <circle cx="21.5" cy="60" r="2.2" fill={NAVY} />
          <circle cx="65.5" cy="49.5" r="2" fill={NAVY} />
          {/* Base Horizon Line */}
          <path
            d="M 12,78 H 88"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 26,84 H 74"
            stroke={NAVY}
            strokeWidth="1.5"
            strokeOpacity="0.45"
            strokeLinecap="round"
          />
        </g>
      );

    // 2. e-DISTRICT CERTIFICATES — Ornate Official Charter Scroll & Sovereign Rosette Seal
    case 'edistrict':
      return (
        <g>
          {/* Back Layered Sheet */}
          <path
            d="M 24,14 H 66 C 70,14 73,17 73,21 V 72"
            stroke={NAVY}
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          {/* Main Certificate Parchment */}
          <rect
            x="16"
            y="18"
            width="52"
            height="66"
            rx="5"
            stroke={NAVY}
            strokeWidth="2.8"
          />
          {/* Inner Filigree Border */}
          <rect
            x="21"
            y="23"
            width="42"
            height="56"
            rx="2.5"
            stroke={NAVY}
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          {/* Crest Emblem at Top of Certificate */}
          <circle cx="42" cy="34" r="6" stroke={NAVY} strokeWidth="2.2" />
          <circle cx="42" cy="34" r="2.2" fill={NAVY} />
          {/* Certificate Typography Lines */}
          <path
            d="M 27,46 H 57 M 27,53 H 57 M 27,60 H 48 M 27,67 H 42"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Detailed Serrated Official Seal & Ribbons */}
          <path
            d="M 64,71 L 60,89 L 68,84 L 76,89 L 72,71"
            fill={NAVY}
          />
          <circle
            cx="68"
            cy="63"
            r="14"
            fill="#FFFFFF"
            stroke={NAVY}
            strokeWidth="2.8"
          />
          <circle
            cx="68"
            cy="63"
            r="10"
            stroke={NAVY}
            strokeWidth="1.6"
            strokeDasharray="2.5 2"
          />
          <path
            d="M 63.5,63 L 66.8,66.2 L 73,59.5"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    // 3. PAN & PASSPORT SEVA — Detailed Passport Booklet, Globe Grid & Smart ID Card
    case 'identity':
      return (
        <g>
          {/* Passport Booklet Left/Back */}
          <rect
            x="14"
            y="14"
            width="46"
            height="62"
            rx="5"
            stroke={NAVY}
            strokeWidth="2.6"
          />
          <path d="M 21,14 V 76" stroke={NAVY} strokeWidth="1.6" strokeOpacity="0.4" />
          {/* Globe Meridians Inside Passport */}
          <circle cx="40" cy="39" r="13" stroke={NAVY} strokeWidth="2" />
          <ellipse cx="40" cy="39" rx="6.5" ry="13" stroke={NAVY} strokeWidth="1.6" />
          <path d="M 27,39 H 53 M 29,33 H 51 M 29,45 H 51" stroke={NAVY} strokeWidth="1.4" />
          {/* Overlapping Smart PAN Card at Bottom-Right */}
          <rect
            x="36"
            y="48"
            width="50"
            height="34"
            rx="5"
            fill="#FFFFFF"
            stroke={NAVY}
            strokeWidth="2.8"
          />
          <path d="M 36,56 H 86" stroke={NAVY} strokeWidth="2.2" />
          {/* EMV Smart Chip */}
          <rect x="43" y="61" width="11" height="9" rx="1.8" stroke={NAVY} strokeWidth="1.8" />
          <path d="M 43,65.5 H 54 M 48.5,61 V 70" stroke={NAVY} strokeWidth="1.2" />
          {/* Card Lines */}
          <path
            d="M 60,63 H 79 M 60,69 H 74 M 43,75 H 79"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      );

    // 4. MUNICIPAL & CIVIC SERVICES — Grand Classical Rotunda, Dome & Fluted Columns
    case 'municipal':
      return (
        <g>
          {/* Flagstaff & Pennant */}
          <path d="M 50,10 V 21" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 50,10 L 62,14 L 50,18 Z" fill={NAVY} />
          {/* Cupola & Ribbed Dome */}
          <path
            d="M 22,42 C 22,22 78,22 78,42 Z"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 34,42 C 34,25 66,25 66,42 M 44,42 C 44,26 56,26 56,42 M 50,24 V 42"
            stroke={NAVY}
            strokeWidth="1.6"
          />
          {/* Entablature Pediment Beam */}
          <rect x="14" y="42" width="72" height="6" rx="1.5" fill={NAVY} />
          {/* 5 Fluted Classical Pillars */}
          <path
            d="M 22,48 V 74 M 26,48 V 74
               M 37,48 V 74 M 41,48 V 74
               M 50,48 V 74
               M 59,48 V 74 M 63,48 V 74
               M 74,48 V 74 M 78,48 V 74"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Stepped Plinth Base */}
          <rect x="14" y="74" width="72" height="5" rx="1.5" stroke={NAVY} strokeWidth="2.4" />
          <rect x="10" y="79" width="80" height="5" rx="1.5" fill={NAVY} />
        </g>
      );

    // 5. ELECTRICITY & BILLPAY — Detailed Power Grid Crest, Insulator & High-Voltage Bolt
    case 'electricity':
      return (
        <g>
          {/* Outer Meter / Grid Ring */}
          <circle cx="50" cy="50" r="36" stroke={NAVY} strokeWidth="2.8" />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke={NAVY}
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          {/* Precision Gauge Ticks */}
          <path
            d="M 50,14 V 19 M 50,81 V 86 M 14,50 H 19 M 81,50 H 86
               M 24.5,24.5 L 28,28 M 75.5,75.5 L 72,72
               M 75.5,24.5 L 72,28 M 24.5,75.5 L 28,72"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* High-Voltage Lightning Vector */}
          <path
            d="M 56,24 L 33,52 H 49 L 43,76 L 67,48 H 51 Z"
            fill={NAVY}
            stroke={NAVY}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>
      );

    // 6. MOBILE, DTH & FASTAG — Detailed Smartphone, RFID Toll Waves & Satellite Dish
    case 'recharge':
      return (
        <g>
          {/* Concentric RF Signal Waves */}
          <path
            d="M 58,16 A 26,26 0 0 1 84,42"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 56,24 A 18,18 0 0 1 76,44"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M 54,32 A 10,10 0 0 1 68,46"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Detailed Smartphone Chassis */}
          <rect
            x="20"
            y="14"
            width="38"
            height="68"
            rx="7"
            stroke={NAVY}
            strokeWidth="2.8"
          />
          <path d="M 34,20 H 44" stroke={NAVY} strokeWidth="2.2" strokeLinecap="round" />
          <rect
            x="25"
            y="25"
            width="28"
            height="44"
            rx="2.5"
            stroke={NAVY}
            strokeWidth="1.8"
          />
          {/* FASTag Barcode / Wave Symbol Inside Screen */}
          <circle cx="39" cy="45" r="9" stroke={NAVY} strokeWidth="2" />
          <path
            d="M 35,45 L 38,48 L 44,41"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="39" cy="75.5" r="2.4" fill={NAVY} />
        </g>
      );

    // 7. DIGIPAY BANKING — Intricate Sovereign Coin Medallion, Rupee ₹ & Biometric Curves
    case 'banking':
      return (
        <g>
          {/* Outer Scalloped Coin Rim */}
          <circle cx="50" cy="50" r="36" stroke={NAVY} strokeWidth="2.8" />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke={NAVY}
            strokeWidth="2"
            strokeDasharray="6 3"
          />
          <circle cx="50" cy="50" r="24" stroke={NAVY} strokeWidth="1.4" />
          {/* Left & Right Wheat/Laurel Dots */}
          <circle cx="22" cy="50" r="2" fill={NAVY} />
          <circle cx="78" cy="50" r="2" fill={NAVY} />
          <circle cx="50" cy="22" r="2" fill={NAVY} />
          <circle cx="50" cy="78" r="2" fill={NAVY} />
          {/* Bold Indian Rupee ₹ Vector */}
          <path
            d="M 38,34 H 62
               M 38,43 H 62
               M 48,34 C 58,34 58,52 45,52 H 39 L 58,69"
            stroke={NAVY}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    // 8. INSURANCE & PROTECTION — Ribbed Canopy Umbrella over Protective Shield
    case 'insurance':
      return (
        <g>
          {/* Umbrella Finial */}
          <path d="M 50,11 V 18" stroke={NAVY} strokeWidth="2.8" strokeLinecap="round" />
          {/* Detailed Ribbed Canopy */}
          <path
            d="M 14,46 C 14,17 86,17 86,46 C 74,42 62,42 50,46 C 38,42 26,42 14,46 Z"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 50,18 C 35,24 28,34 26,44
               M 50,18 C 65,24 72,34 74,44
               M 50,18 V 46"
            stroke={NAVY}
            strokeWidth="1.8"
          />
          {/* Umbrella Shaft & Curved Handle */}
          <path
            d="M 50,46 V 76 C 50,83 40,83 40,76 V 73"
            stroke={NAVY}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Shield Silhouette Behind */}
          <path
            d="M 64,54 L 78,59 V 70 C 78,79 71,84 64,87 C 57,84 50,79 50,70"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 60,70 L 63,73 L 69,66"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    // 9. AYUSHMAN & WELFARE — Sovereign Health Shield, Lotus Petals & Caring Hands
    case 'welfare':
      return (
        <g>
          {/* Shield Crest */}
          <path
            d="M 50,12 L 78,22 V 46 C 78,64 65,75 50,81 C 35,75 22,64 22,46 V 22 Z"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 50,18 L 72,26 V 45 C 72,59 61,68 50,74 C 39,68 28,59 28,45 V 26 Z"
            stroke={NAVY}
            strokeWidth="1.4"
            strokeDasharray="4 2.5"
          />
          {/* Medical Cross Emblem */}
          <path
            d="M 50,31 V 55 M 38,43 H 62"
            stroke={NAVY}
            strokeWidth="5.2"
            strokeLinecap="round"
          />
          {/* Supportive Hands Cradle Curve Below */}
          <path
            d="M 16,66 C 24,80 38,87 50,89 C 62,87 76,80 84,66"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      );

    // 10. JEEVAN PRAMAAN & PENSION — Detailed Botanical Life Leaf & Sunburst Halo
    case 'pension':
      return (
        <g>
          {/* Dashed Sun Halo */}
          <circle
            cx="48"
            cy="44"
            r="30"
            stroke={NAVY}
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
          {/* Detailed Botanical Leaf */}
          <path
            d="M 22,74 C 20,42 44,18 76,20 C 76,52 54,76 22,74 Z"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Central Midrib & Lateral Veins */}
          <path
            d="M 20,76 L 66,30
               M 34,62 L 30,46
               M 45,51 L 41,35
               M 56,40 L 53,28
               M 34,62 L 50,64
               M 45,51 L 61,53
               M 56,40 L 68,42"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      );

    // 11. TELE-LAW LEGAL AID — Ornate Balance Scales of Justice on Stepped Pedestal
    case 'telelaw':
      return (
        <g>
          {/* Central Pillar & Finial */}
          <circle cx="50" cy="14" r="4.5" stroke={NAVY} strokeWidth="2.4" />
          <path d="M 50,18.5 V 78" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
          {/* Ornate Balance Beam */}
          <path
            d="M 16,29 C 30,25 70,25 84,29"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Left Scale Chains & Pan */}
          <path
            d="M 20,28 L 11,54 H 29 Z"
            stroke={NAVY}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 9,54 C 9,62 31,62 31,54 Z"
            fill={NAVY}
          />
          {/* Right Scale Chains & Pan */}
          <path
            d="M 80,28 L 71,54 H 89 Z"
            stroke={NAVY}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 69,54 C 69,62 91,62 91,54 Z"
            fill={NAVY}
          />
          {/* Stepped Pedestal */}
          <path
            d="M 34,78 H 66 M 26,84 H 74"
            stroke={NAVY}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>
      );

    // 12. PMFBY CROP INSURANCE — Rising Sun, Detailed Wheat Ear & Ploughed Furrows
    case 'agriculture':
      return (
        <g>
          {/* Rising Sun & Rays */}
          <path
            d="M 28,36 A 22,22 0 0 1 72,36"
            stroke={NAVY}
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          {/* Central Wheat Stalk */}
          <path d="M 50,14 V 74" stroke={NAVY} strokeWidth="2.8" strokeLinecap="round" />
          {/* 3 Pairs of Detailed Wheat Grains */}
          <path
            d="M 50,30 C 37,27 34,17 44,17 C 49,17 50,24 50,30 Z
               M 50,30 C 63,27 66,17 56,17 C 51,17 50,24 50,30 Z
               M 50,44 C 35,41 32,30 43,30 C 49,30 50,37 50,44 Z
               M 50,44 C 65,41 68,30 57,30 C 51,30 50,37 50,44 Z
               M 50,58 C 35,55 32,44 43,44 C 49,44 50,51 50,58 Z
               M 50,58 C 65,55 68,44 57,44 C 51,44 50,51 50,58 Z"
            stroke={NAVY}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Ploughed Field Horizon Curves */}
          <path
            d="M 14,76 Q 50,64 86,76
               M 22,84 Q 50,74 78,84"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      );

    // 13. IRCTC RAILWAY TICKETING — Detailed Electric Locomotive, Pantograph & Ties
    case 'irctc':
      return (
        <g>
          {/* Overhead Pantograph */}
          <path
            d="M 38,18 L 50,11 L 62,18 L 50,23 Z M 32,11 H 68"
            stroke={NAVY}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Locomotive Cab */}
          <rect
            x="24"
            y="23"
            width="52"
            height="46"
            rx="9"
            stroke={NAVY}
            strokeWidth="2.8"
          />
          {/* Split Windshield */}
          <rect
            x="30"
            y="29"
            width="40"
            height="15"
            rx="3"
            stroke={NAVY}
            strokeWidth="2.2"
          />
          <path d="M 50,29 V 44" stroke={NAVY} strokeWidth="2" />
          {/* Livery Band & Headlights */}
          <path d="M 24,51 H 76" stroke={NAVY} strokeWidth="2.6" />
          <circle cx="35" cy="60" r="3.8" fill={NAVY} />
          <circle cx="65" cy="60" r="3.8" fill={NAVY} />
          <path d="M 45,60 H 55" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round" />
          {/* Railway Tracks & Sleepers */}
          <path
            d="M 32,69 L 20,86 M 68,69 L 80,86 M 26,76 H 74 M 22,83 H 78"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      );

    // 14. CSC ACADEMY & SKILLS — Detailed Mortarboard, Tassel & Laurels
    case 'academy':
      return (
        <g>
          {/* Diamond Mortarboard Top */}
          <path
            d="M 50,18 L 88,35 L 50,52 L 12,35 Z"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 50,24 L 76,35 L 50,46 L 24,35 Z"
            stroke={NAVY}
            strokeWidth="1.4"
            strokeDasharray="4 2.5"
          />
          {/* Skullcap Base */}
          <path
            d="M 26,42 V 62 C 26,72 74,72 74,62 V 42"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Hanging Tassel */}
          <path
            d="M 50,35 L 82,42 V 64"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="82" cy="66" r="3.2" fill={NAVY} />
          {/* Open Book Pages Base */}
          <path
            d="M 22,78 Q 36,73 50,79 Q 64,73 78,78"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>
      );

    // 15. TELE-MEDICINE CONSULTS — Detailed Stethoscope & Medical Caduceus Cross
    case 'telehealth':
      return (
        <g>
          {/* Outer Crest Ring */}
          <circle cx="50" cy="50" r="35" stroke={NAVY} strokeWidth="2.8" />
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke={NAVY}
            strokeWidth="1.6"
            strokeDasharray="5 3"
          />
          {/* Precision Outlined Medical Cross */}
          <path
            d="M 43,29 H 57 V 43 H 71 V 57 H 57 V 71 H 43 V 57 H 29 V 43 H 43 Z"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Heartbeat ECG Pulse Line Across Center */}
          <path
            d="M 20,50 H 37 L 42,40 L 48,61 L 54,44 L 58,50 H 80"
            stroke={NAVY}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    // 16. CSC GRAMEEN e-STORE — Detailed Rural Storefront Awning & Commerce Basket
    case 'grameen':
    default:
      return (
        <g>
          {/* Storefront Scalloped Awning */}
          <path
            d="M 16,34 L 24,18 H 76 L 84,34"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M 16,34 C 16,41 33,41 33,34 C 33,41 50,41 50,34 C 50,41 67,41 67,34 C 67,41 84,41 84,34"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 36,18 L 33,34 M 50,18 V 34 M 64,18 L 67,34" stroke={NAVY} strokeWidth="1.8" />
          {/* Store Chassis */}
          <path
            d="M 22,39 V 78 H 78 V 39 M 14,78 H 86"
            stroke={NAVY}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Verified Check Badge Inside Storefront */}
          <circle cx="50" cy="58" r="11" stroke={NAVY} strokeWidth="2.4" />
          <path
            d="M 45,58 L 48.5,61.5 L 55.5,54"
            stroke={NAVY}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
  }
}
