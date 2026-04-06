'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import GlitchText from '../ui/GlitchText';

const jobTitles = [
  'SOC Analyst', 'Pen Tester', 'CISO', 'GRC Specialist', 'Blue Team', 'Red Team', 'Cloud Security'
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80"
          alt="Cybersecurity Background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Noise/Grain Texture */}
      <div className="absolute inset-0 z-10 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-32 right-6 md:right-12 z-20 flex items-center gap-3 bg-surface/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-text">AI-Matched Roles</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 mt-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter text-[12vw] md:text-[8vw] lg:text-[96px] uppercase flex flex-col">
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                Find Your Next
              </span>
              <GlitchText text="Security Career." className="text-white mt-2" />
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-text/80 max-w-2xl font-body leading-relaxed"
          >
            Explore top cybersecurity opportunities tailored to your skills. Connect with trusted employers hiring today.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <MagneticButton variant="solid">Browse Jobs</MagneticButton>
            <MagneticButton variant="outline">Create Profile</MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/50 backdrop-blur-sm py-4">
        <div className="flex overflow-hidden w-full">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee duration-[30s]">
            {[...jobTitles, ...jobTitles].map((title, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-mono text-text/60 uppercase tracking-widest whitespace-nowrap">{title}</span>
                <span className="text-accent text-xs">·</span>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee duration-[30s]">
            {[...jobTitles, ...jobTitles].map((title, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-mono text-text/60 uppercase tracking-widest whitespace-nowrap">{title}</span>
                <span className="text-accent text-xs">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
