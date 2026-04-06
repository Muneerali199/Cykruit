'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = this.canvasWidth;
    
    if (this.y > this.canvasHeight) this.y = 0;
    else if (this.y < 0) this.y = this.canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function FinalCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Reduced particle density for better performance
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 30000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      if (!isInView) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        
        // Optimized distance check: use squared distance to avoid Math.sqrt
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 10000) { // 100 * 100
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-48 bg-black overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
      </div>

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none opacity-60"
      />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <h2 className="text-5xl md:text-[80px] font-display font-bold text-white mb-12 leading-[1.1] tracking-tighter">
          Ready to Secure Your Future?
        </h2>
        <div className="flex justify-center">
          <MagneticButton variant="solid" className="!px-12 !py-6 text-lg">
            Get Started
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
