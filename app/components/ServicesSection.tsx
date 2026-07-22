'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type ServiceItem = {name: string;price: string;note?: string;};
type ServiceTab = {id: string;label: string;image: string;imageAlt: string;items: ServiceItem[];};

const tabs: ServiceTab[] = [
{
  id: 'hair',
  label: 'Hair Artistry',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_151522e88-1772148392618.png",
  imageAlt: 'Professional hair stylist working in dim elegant salon, dark atmospheric background, focused artisan hands, moody shadows',
  items: [
  { name: 'Advanced Rebonding Treatment', price: '₹3,500', note: 'Shoulder length' },
  { name: 'Custom Bob Artistry by Rizwan', price: '₹2,000' },
  { name: 'Balayage & Color Melt', price: '₹4,500', note: 'Base price' },
  { name: 'Keratin Smoothing Therapy', price: '₹4,000', note: 'Shoulder length' },
  { name: 'Bridal Hair Styling', price: '₹5,000', note: 'Trial included' },
  { name: 'Global Hair Colour', price: '₹1,800', note: 'Short length' },
  { name: 'Hair Spa Treatment', price: '₹1,200' },
  { name: 'Highlights (Foil)', price: '₹3,200', note: 'Per session' }]

},
{
  id: 'skin',
  label: 'Skin Care',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1f245cd-1767692472099.png",
  imageAlt: 'Elegant woman receiving luxury facial treatment in dark sophisticated spa, warm golden light, professional aesthetician hands, intimate moody atmosphere',
  items: [
  { name: 'Gold Facial', price: '₹2,200', note: 'Signature treatment' },
  { name: 'Hydrating HydraFacial', price: '₹3,500' },
  { name: 'Threading & Shaping (Full Face)', price: '₹300' },
  { name: 'Waxing – Full Body', price: '₹2,800' },
  { name: 'Advanced De-Tan Treatment', price: '₹1,800', note: 'Face & neck' },
  { name: 'Brightening Vitamin C Facial', price: '₹2,500' },
  { name: 'Eyebrow Shaping & Tint', price: '₹500' },
  { name: 'Back Facial Deep Cleanse', price: '₹2,000' }]

},
{
  id: 'makeup',
  label: 'Make-Up Studio',
  image: "https://images.unsplash.com/photo-1638628064365-f08ad0ec8245",
  imageAlt: 'Professional makeup artist applying bridal makeup in dark elegant studio, warm golden ambient light, luxury cosmetics, intimate cinematic atmosphere',
  items: [
  { name: 'Bridal Makeup (HD)', price: '₹15,000', note: 'Trial session included' },
  { name: 'Party Makeup', price: '₹3,500' },
  { name: 'Airbrush Foundation Application', price: '₹2,500' },
  { name: 'Eye Artistry (Smokey / Cut Crease)', price: '₹1,500' },
  { name: 'Mehndi Coordination Package', price: '₹5,000', note: 'Hair + Makeup' },
  { name: 'Engagement Look', price: '₹8,000' },
  { name: 'Reception Glam', price: '₹9,500' },
  { name: 'Natural Day Makeup', price: '₹2,000' }]

}];


export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('hair');
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="divider-gold" />
              <p className="section-label">The Menu</p>
            </div>
            <h2 className="section-heading text-foreground">
              Services &{' '}
              <span className="italic text-primary">Pricing</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-0 border border-border">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[0.65rem] font-medium tracking-[0.18em] uppercase px-5 py-3 transition-all duration-300 border-none cursor-pointer ${
              activeTab === tab.id ?
              'bg-primary/10 text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground bg-transparent'}`
              }>
              
                {tab.label}
              </button>
            )}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Price list */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {current.items.map((item, i) =>
              <div
                key={item.name}
                className={`flex items-end py-4 group ${
                i < current.items.length - 1 ? 'border-b border-border/50' : ''}`
                }>
                
                  <div className="flex flex-col">
                    <span className="service-item-name group-hover:text-foreground transition-colors duration-300">
                      {item.name}
                    </span>
                    {item.note &&
                  <span className="text-[0.65rem] text-muted-foreground/60 font-light mt-0.5 tracking-wide">
                        {item.note}
                      </span>
                  }
                  </div>
                  <span className="dotted-spacer" />
                  <span className="price-label">{item.price}</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-[0.65rem] text-muted-foreground/50 font-light tracking-wide">
                * Prices vary based on hair length and service complexity. Consultation recommended for precise quote.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <AppImage
                src={current.image}
                alt={current.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-all duration-700" />
              
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(20,20,20,0.7) 100%)'
                }} />
              
              {/* Tab label on image */}
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-xl italic text-foreground/90">{current.label}</p>
                <div className="divider-gold mt-2" />
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/40" style={{ transform: 'translate(6px, -6px)' }} />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/40" style={{ transform: 'translate(-6px, 6px)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>);

}