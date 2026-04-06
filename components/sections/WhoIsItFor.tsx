'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';

export default function WhoIsItFor() {
  return (
    <section className="py-24 bg-black relative z-10" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[800px] md:h-[600px]">
          
          {/* Job Seekers Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative h-full rounded-2xl overflow-hidden group border border-white/5 hover:border-accent/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80"
                alt="For Job Seekers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/80 mix-blend-multiply group-hover:bg-black/70 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
              <h3 className="font-mono text-accent mb-4 uppercase tracking-widest text-sm">For Job Seekers</h3>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Discover roles matching your skillset.
              </h2>
              <p className="text-text/70 mb-8 max-w-md">
                Track applications, manage your profile, and get AI-driven recommendations for your next big move in cybersecurity.
              </p>
              <div>
                <MagneticButton variant="outline" className="!px-6 !py-3 text-sm">
                  Find Jobs
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Employers Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="relative h-full rounded-2xl overflow-hidden group border border-white/5 hover:border-accent/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="For Employers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/80 mix-blend-multiply group-hover:bg-black/70 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
              <h3 className="font-mono text-accent mb-4 uppercase tracking-widest text-sm">For Employers</h3>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Access verified security talent.
              </h2>
              <p className="text-text/70 mb-8 max-w-md">
                Streamline your hiring process, post roles instantly, and connect with pre-vetted professionals ready to secure your infrastructure.
              </p>
              <div>
                <Link href="/post-job">
                  <MagneticButton variant="solid" className="!px-6 !py-3 text-sm">
                    Post a Role
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
