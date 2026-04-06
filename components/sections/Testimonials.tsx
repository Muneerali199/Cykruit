'use client';

import Marquee from '../ui/Marquee';

const testimonialsRow1 = [
  {
    quote: "We filled 3 security roles in just two weeks!",
    name: "Shantanu J.",
    role: "Security Lead",
    initials: "SJ"
  },
  {
    quote: "Finally a platform that understands security hiring nuances.",
    name: "Akshay K.",
    role: "Penetration Tester",
    initials: "AK"
  },
  {
    quote: "I found my current blue team role here. Seamless experience!",
    name: "Amrita S.",
    role: "SOC Analyst",
    initials: "AS"
  },
  {
    quote: "The pre-vetted profiles saved us countless hours of screening.",
    name: "Priya L.",
    role: "HR Director",
    initials: "PL"
  }
];

const testimonialsRow2 = [
  {
    quote: "The pre-vetted profiles saved us countless hours of screening.",
    name: "Priya L.",
    role: "HR Director",
    initials: "PL"
  },
  {
    quote: "I found my current blue team role here. Seamless experience!",
    name: "Amrita S.",
    role: "SOC Analyst",
    initials: "AS"
  },
  {
    quote: "Finally a platform that understands security hiring nuances.",
    name: "Akshay K.",
    role: "Penetration Tester",
    initials: "AK"
  },
  {
    quote: "We filled 3 security roles in just two weeks!",
    name: "Shantanu J.",
    role: "Security Lead",
    initials: "SJ"
  }
];

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="w-[400px] md:w-[500px] p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-accent/30 transition-colors">
      <p className="text-xl md:text-2xl font-display text-white mb-8 leading-snug">
        &quot;{item.quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface2 border border-accent/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <span className="font-mono text-accent text-sm">{item.initials}</span>
        </div>
        <div>
          <div className="font-bold text-white">{item.name}</div>
          <div className="text-sm font-mono text-text/50">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white text-center">
          Trusted by the <span className="text-accent">Best</span>
        </h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <Marquee direction="left" speed="slow">
          {testimonialsRow1.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </Marquee>

        <Marquee direction="right" speed="slow">
          {testimonialsRow2.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
