import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}