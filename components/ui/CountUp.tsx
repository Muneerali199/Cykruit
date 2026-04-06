'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface CountUpProps {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({ to, duration = 2, className = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current));
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  useEffect(() => {
    return displayValue.on('change', (latest) => {
      setValue(latest);
    });
  }, [displayValue]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}{suffix}
    </span>
  );
}
