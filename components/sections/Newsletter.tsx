'use client';

import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';

export default function Newsletter() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Animated Gradient Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-crimson/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
          >
            Stay Ahead of Every Threat.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text/70 mb-12 font-body"
          >
            Get the latest cybersecurity roles and industry insights delivered straight to your inbox.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-surface2 border border-white/10 rounded-none px-6 py-4 text-white placeholder:text-text/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-mono text-sm"
              required
            />
            <MagneticButton variant="solid" type="submit" className="shrink-0">
              Subscribe
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
