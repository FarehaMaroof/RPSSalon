import React from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote:
  'Rizwan understood my face shape better than I did. The bob he gave me has completely changed how I carry myself. People stop me on the street. The studio itself — inside PVR Mall — feels like a different world.',
  name: 'Aishwarya Mishra',
  role: 'Architect, Civil Lines',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_115c8b1ce-1763299945418.png",
  avatarAlt: 'Young Indian woman professional portrait, warm lighting',
  stars: 5,
  highlight: 'Hair Sculpting'
},
{
  quote:
  'Kajal did my bridal makeup for my wedding at Taj Hotel and I received compliments all day. The HD finish held for 12 hours in full Prayagraj heat. Every photograph looks like a magazine shoot. Worth every rupee.',
  name: 'Neha Tiwari',
  role: 'Bride, December 2025',
  avatar: "https://images.unsplash.com/photo-1670296047448-8bc7eb7c46f4",
  avatarAlt: 'Radiant Indian bride portrait, elegant expression, warm tones',
  stars: 5,
  highlight: 'Bridal Makeup'
},
{
  quote:
  'The ambiance alone is worth visiting for. Soft music, immaculate hygiene, and a team that listens. Pradeep\'s balayage gave me exactly the honey-brown melt I had been chasing for two years at other salons.',
  name: 'Divya Srivastava',
  role: 'Business Owner, George Town',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb5dad5c-1763299079145.png",
  avatarAlt: 'Confident Indian businesswoman portrait, professional setting',
  stars: 5,
  highlight: 'Balayage & Ambiance'
}];


export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="divider-gold" />
              <p className="section-label">Client Stories</p>
            </div>
            <h2 className="section-heading text-foreground">
              Real Results.{' '}
              <span className="italic text-primary">Real Transformations.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) =>
              <span key={s} className="text-primary text-sm">★</span>
              )}
            </div>
            <span className="text-muted-foreground text-sm font-light">4.9 / 5.0 · 200+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) =>
          <div
            key={t.name}
            className="bg-background border border-border p-8 flex flex-col gap-6 group hover:border-primary/30 transition-colors duration-500">
            
              {/* Quote mark */}
              <span className="quote-mark">&ldquo;</span>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) =>
              <span key={i} className="text-primary text-xs">★</span>
              )}
              </div>

              {/* Quote text */}
              <p className="text-foreground/75 text-sm font-light leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Highlight tag */}
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-primary/60 border border-primary/15 px-3 py-1 w-fit font-medium group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                {t.highlight}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  fill
                  sizes="40px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground text-[0.65rem] font-light">{t.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}