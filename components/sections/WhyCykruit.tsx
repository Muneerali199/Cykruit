'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: '01',
    title: 'Security-Focused Platform',
    desc: 'No irrelevant roles. We strictly curate opportunities for cybersecurity professionals, ensuring every listing matches your expertise.'
  },
  {
    num: '02',
    title: 'Fast AI Matching',
    desc: 'Smart recommendations based on your skills, certifications, and experience. Stop searching and start interviewing.'
  },
  {
    num: '03',
    title: 'Insights & Analytics',
    desc: 'Track your applications, monitor profile engagement, and increase your visibility to top-tier employers.'
  }
];

export default function WhyCykruit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    gsap.fromTo(lineRef.current, 
      { strokeDasharray: 100, strokeDashoffset: 100 },
      { 
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="why" ref={containerRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
          alt="Why Cykruit Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-24 text-center"
          >
            Why Cykruit<span className="text-accent">?</span>
          </motion.h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[2px]">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 100">
                <line x1="1" y1="0" x2="1" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <line 
                  ref={lineRef}
                  x1="1" y1="0" x2="1" y2="100" 
                  stroke="#00e5ff" 
                  strokeWidth="2"
                  pathLength="100"
                />
              </svg>
            </div>

            <div className="space-y-24">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-24 md:pl-48 group"
                >
                  {/* Oversized Ghost Number */}
                  <div className="absolute left-0 top-0 text-6xl md:text-8xl font-mono font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                    {reason.num}
                  </div>
                  
                  <div className="relative pt-4 md:pt-8">
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-text/70 text-lg max-w-xl leading-relaxed">
                      {reason.desc}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="h-[1px] w-0 bg-accent mt-8 transition-all duration-700 group-hover:w-full max-w-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
