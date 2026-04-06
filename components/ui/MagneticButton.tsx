'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, HTMLMotionProps } from 'motion/react';

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

export default function MagneticButton({ children, className = '', variant = 'solid', ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // max ~15px offset
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-wider transition-colors duration-300 overflow-hidden";
  
  const variants = {
    solid: "bg-accent text-black hover:bg-white",
    outline: "border border-text/20 text-text hover:border-accent hover:text-accent",
    ghost: "text-text hover:text-accent",
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'solid' && (
        <motion.div 
          className="absolute inset-0 bg-white z-0"
          initial={{ y: '100%' }}
          animate={{ y: isHovered ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        />
      )}
    </motion.button>
  );
}
