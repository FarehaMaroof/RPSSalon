'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = underlineRef?.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el?.classList?.add('active-underline');
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{ paddingTop: '80px' }}>
      
      {/* Background atmospheric glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197,168,128,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197,168,128,0.03) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left 60% — Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="divider-gold" />
              <p className="section-label">Civil Lines, Prayagraj</p>
            </div>

            {/* Heading */}
            <h1 className="hero-heading">
              Redefining Hair
              <br />
              <span className="italic text-primary">& Luxury Beauty</span>
              <br />
              in Prayagraj.
            </h1>

            {/* Subtext */}
            <div className="space-y-3 max-w-lg">
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                A private sanctuary of bespoke artistry, housed within the prestigious{' '}
                <span className="text-foreground/70">Vinayak City Center Mall</span>, Civil Lines —
                where master craftspeople sculpt, colour, and transform.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-8">
              <button
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[0.7rem] font-medium tracking-[0.25em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300">
                
                Explore Services
              </button>

              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-3 text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 bg-transparent border-none cursor-pointer">
                
                <span className="underline-animate" ref={underlineRef}>
                  Discover The Menu
                </span>
                <span className="shimmer-cta text-base">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 pt-4 border-t border-border">
              {[
              { value: '12+', label: 'Years of Artistry' },
              { value: '3,000+', label: 'Bridal Looks' },
              { value: '4.9★', label: 'Client Rating' }]?.
              map((stat) =>
              <div key={stat?.label} className="space-y-1">
                  <p className="font-serif text-2xl text-primary font-light">{stat?.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-medium">{stat?.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right 40% — Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative hero-image-frame float-element" style={{ width: '100%', maxWidth: '420px' }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f3dc9054-1782809993954.png"
                  alt="Luxury hair salon interior with warm ambient lighting, elegant dark walls, professional styling chairs, sophisticated premium atmosphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                  priority />
                
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(11,11,11,0.5) 0%, rgba(11,11,11,0.1) 40%, transparent 100%)'
                  }} />
                
              </div>

              {/* Corner accent marks */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/60" style={{ transform: 'translate(-8px, -8px)' }} />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/60" style={{ transform: 'translate(8px, -8px)' }} />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/60" style={{ transform: 'translate(-8px, 8px)' }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/60" style={{ transform: 'translate(8px, 8px)' }} />

              {/* Badge */}
              <div
                className="absolute bottom-6 left-6 bg-background/90 border border-primary/30 px-4 py-3"
                style={{ backdropFilter: 'blur(8px)' }}>
                
                <p className="font-serif text-xs italic text-primary">Est. 2012</p>
                <p className="text-[0.6rem] uppercase tracking-widest text-muted-foreground font-medium mt-0.5">Prayagraj's Premier Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}