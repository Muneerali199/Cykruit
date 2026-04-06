'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import MagneticButton from '../ui/MagneticButton';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Jobs', href: '#jobs' },
  { name: 'For Employers', href: '/post-job' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
  { name: 'Become a Trainer', href: '#trainer' },
];

export default function Navbar() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
            CYKRUIT<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-mono text-text/80 hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2" />
              </Link>
            ))}
          </div>

          {/* Auth CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton variant="ghost" className="!px-4 !py-2 text-xs">
              Job Seeker Login
            </MagneticButton>
            <Link href="/post-job">
              <MagneticButton variant="outline" className="!px-4 !py-2 text-xs">
                Employer Login
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[100] bg-surface2 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  <Link 
                    href={link.href}
                    className="text-3xl font-display font-bold hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="flex flex-col gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <MagneticButton variant="outline" className="w-full">
                  Job Seeker Login
                </MagneticButton>
                <Link href="/post-job" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <MagneticButton variant="solid" className="w-full">
                    Employer Login
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
