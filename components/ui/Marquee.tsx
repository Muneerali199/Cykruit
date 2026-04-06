'use client';

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const speedClass = {
    slow: 'duration-[60s]',
    normal: 'duration-[40s]',
    fast: 'duration-[20s]',
  }[speed];

  const directionClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  const hoverClass = pauseOnHover ? 'hover:[animation-play-state:paused]' : '';

  return (
    <div className={`flex overflow-hidden w-full ${className}`}>
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${directionClass} ${speedClass} ${hoverClass}`}>
        {children}
      </div>
      <div aria-hidden="true" className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${directionClass} ${speedClass} ${hoverClass}`}>
        {children}
      </div>
    </div>
  );
}
