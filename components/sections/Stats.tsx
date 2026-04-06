'use client';

import CountUp from '../ui/CountUp';

const stats = [
  { value: 500, suffix: '+', label: 'Jobs' },
  { value: 1200, suffix: '+', label: 'Professionals' },
  { value: 98, suffix: '%', label: 'Match Rate' },
  { value: 3, suffix: ' Wks', label: 'Avg. Hire' },
];

export default function Stats() {
  return (
    <section className="bg-surface2 border-y border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-x border-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="py-16 px-8 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
              <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2 flex items-center">
                <CountUp to={stat.value} duration={2.5} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-sm font-mono text-text/60 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
