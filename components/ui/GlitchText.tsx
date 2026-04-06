'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

export default function GlitchText({ text, className = '', as: Component = 'span' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <Component className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-[-2px] -z-10 text-crimson opacity-70"
            style={{ clipPath: 'inset(10% 0 40% 0)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-[2px] -z-10 text-accent opacity-70"
            style={{ clipPath: 'inset(40% 0 10% 0)' }}
          >
            {text}
          </span>
        </>
      )}
    </Component>
  );
}
