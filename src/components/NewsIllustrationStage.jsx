import React from 'react';

export default function NewsIllustrationStage({ variant }) {
  let shapeSrc = '/images/indian-shape-01.svg';
  if (variant === 'academy') {
    shapeSrc = '/images/indian-shape-02.svg';
  } else if (variant === 'banking') {
    shapeSrc = '/images/indian-shape-03.svg';
  }

  return (
    <div className="relative w-full h-full bg-[#f8fafc] flex items-center justify-center p-8 sm:p-10 pb-12 sm:pb-14 overflow-hidden select-none">
      <img
        src={shapeSrc}
        alt=""
        aria-hidden="true"
        className="w-full h-full max-h-[165px] sm:max-h-[180px] object-contain pointer-events-none select-none group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
      />
    </div>
  );
}
