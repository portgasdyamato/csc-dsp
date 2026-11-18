import React from 'react';

/**
 * Official CSC Transparent Vector Logo
 * Pure SVG with transparent background — never uses a white box.
 * Supports:
 * - showDividers: true (C | S | C) or false (CSC without vertical bars for compact navbar)
 * - showSubtitle: true/false
 * - subtitleText: customizable text below the CSC mark
 */
export function CscOfficialLogo({
  className = 'h-9 w-auto',
  showSubtitle = true,
  showDividers = false,
  subtitleText = 'E-GOVERNANCE SERVICES INDIA LIMITED',
  variant = 'dark-bg', // 'dark-bg' for dark navy surfaces, 'light-bg' for white surfaces
}) {
  const blueColor = variant === 'dark-bg' ? '#1d7dfa' : '#0055a5';
  const silverColor = variant === 'dark-bg' ? '#d8dee9' : '#c2c5c8';
  const dividerColor = variant === 'dark-bg' ? '#b8c2d0' : '#b8bcbf';
  const subtitleColor = variant === 'dark-bg' ? '#e2e8f0' : '#1e293b';

  // When dividers are hidden (e.g. in navbar), bring left & right 'C' closer to center 'S'
  const leftOffset = showDividers ? 0 : 12;
  const rightOffset = showDividers ? 0 : -12;

  return (
    <svg
      viewBox={showSubtitle ? '0 0 320 142' : '0 0 320 112'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CSC Digital Seva"
    >
      {/* LEFT 'C' — HEAVY CONDENSED BLOCK LETTER (CSC BLUE) */}
      <path
        transform={`translate(${leftOffset}, 0)`}
        d="M 60 12
           C 34 12, 20 24, 20 47
           L 20 73
           C 20 96, 34 108, 60 108
           C 85 108, 98 96, 98 74
           L 98 67
           L 68 67
           L 68 76
           C 68 84, 65 87, 59 87
           C 53 87, 50 84, 50 76
           L 50 44
           C 50 36, 53 33, 59 33
           C 65 33, 68 36, 68 44
           L 68 51
           L 98 51
           L 98 45
           C 98 24, 85 12, 60 12 Z"
        fill={blueColor}
      />

      {/* FIRST VERTICAL DIVIDER BAR */}
      {showDividers && (
        <rect x="110" y="6" width="3.5" height="106" fill={dividerColor} />
      )}

      {/* CENTER 'S' — HEAVY CONDENSED BLOCK LETTER (SILVER GREY) */}
      <path
        d="M 160 12
           C 135 12, 122 23, 122 42
           C 122 57, 130 65, 152 72
           C 166 76, 170 79, 170 85
           C 170 90, 166 93, 160 93
           C 153 93, 150 89, 150 80
           L 150 76
           L 121 76
           L 121 81
           C 121 99, 135 108, 160 108
           C 186 108, 199 98, 199 80
           C 199 64, 191 56, 168 49
           C 155 45, 151 42, 151 36
           C 151 31, 154 28, 160 28
           C 166 28, 169 31, 169 39
           L 169 43
           L 197 43
           L 197 39
           C 197 22, 184 12, 160 12 Z"
        fill={silverColor}
      />

      {/* SECOND VERTICAL DIVIDER BAR */}
      {showDividers && (
        <rect x="208" y="6" width="3.5" height="106" fill={dividerColor} />
      )}

      {/* RIGHT 'C' — HEAVY CONDENSED BLOCK LETTER (CSC BLUE) */}
      <path
        transform={`translate(${rightOffset}, 0)`}
        d="M 262 12
           C 236 12, 222 24, 222 47
           L 222 73
           C 222 96, 236 108, 262 108
           C 287 108, 300 96, 300 74
           L 300 67
           L 270 67
           L 270 76
           C 270 84, 267 87, 261 87
           C 255 87, 252 84, 252 76
           L 252 44
           C 252 36, 255 33, 261 33
           C 267 33, 270 36, 270 44
           L 270 51
           L 300 51
           L 300 45
           C 300 24, 287 12, 262 12 Z"
        fill={blueColor}
      />

      {/* BOTTOM SUBTITLE */}
      {showSubtitle && (
        <text
          x="160"
          y="133"
          textAnchor="middle"
          fill={subtitleColor}
          fontSize="13.2"
          fontWeight="700"
          letterSpacing="1.3"
          style={{
            fontFamily: "'JetBrains Mono', 'Arial Narrow', sans-serif",
          }}
        >
          {subtitleText}
        </text>
      )}
    </svg>
  );
}

export default CscOfficialLogo;
