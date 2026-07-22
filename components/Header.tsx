'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav hairline-gold transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="R.P.S. Studio Home"
          >
            <AppLogo size={32} className="opacity-90" />
            <span
              className="font-serif text-sm tracking-[0.2em] uppercase text-foreground font-light hidden sm:block"
              style={{ letterSpacing: '0.2em' }}
            >
              R.P.S. Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:block text-[0.65rem] font-medium tracking-[0.2em] uppercase border border-primary/50 text-primary px-5 py-2.5 transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              Book Reservation
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 cursor-pointer bg-transparent border-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-4' : 'w-4'
                }`}
              />
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 mobile-menu-overlay flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-serif text-4xl font-light text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 text-[0.7rem] font-medium tracking-[0.25em] uppercase border border-primary/60 text-primary px-8 py-3 hover:bg-primary/10 transition-all duration-300 bg-transparent cursor-pointer"
          >
            Book Reservation
          </button>
        </div>
      </div>
    </>
  );
}