'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Is Cykruit free?",
    a: "Yes, fully free for job seekers. We believe in removing barriers for talent to find the right opportunities."
  },
  {
    q: "How does matching work?",
    a: "Our AI analyzes your skills, certifications, and experience to recommend roles where you have the highest probability of success."
  },
  {
    q: "Are employers verified?",
    a: "Yes, fully verified before posting. We ensure that every company on our platform is legitimate and actively hiring."
  },
  {
    q: "What roles do you feature?",
    a: "We cover the entire spectrum of cybersecurity: SOC Analyst, Penetration Tester, CISO, GRC Specialist, Blue Team, Red Team, and more."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-surface relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16 text-center">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="border border-white/10 bg-black/50 rounded-xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-xl md:text-2xl font-display font-bold text-white">
                    {faq.q}
                  </span>
                  <span className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <div className="px-8 pb-6 relative">
                        {/* Left Accent Bar */}
                        <motion.div 
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="absolute left-8 top-0 bottom-6 w-1 bg-accent origin-top"
                        />
                        <p className="pl-6 text-text/70 text-lg font-body leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
