import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Bespoke Face-Shape Hair Sculpting',
    description:
      'Every cut is a study in geometry. Rizwan analyses bone structure, facial proportions, and lifestyle before a single strand is touched — resulting in hair that frames your face with architectural precision.',
    accent: 'Hair Architecture',
  },
  {
    number: '02',
    title: 'Immaculate Clinical Hygiene',
    description:
      'Hospital-grade sterilisation of all implements, single-use applicators, and UV-sanitised tools are standard — never an afterthought. Your safety is our non-negotiable foundation.',
    accent: 'Studio Protocol',
  },
  {
    number: '03',
    title: 'A Private Luxury Sanctuary inside Vinayak City Center',
    description:
      'Retreat from the city within the finest mall in Civil Lines. Our studio is a curated environment of calm — soft lighting, curated music, and a team that exists solely to serve your vision.',
    accent: 'The Experience',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <p className="section-label">Our Philosophy</p>
            </div>
            <h2 className="section-heading text-foreground">
              Three Pillars of{' '}
              <span className="italic text-primary">Uncompromising</span>{' '}
              Excellence
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              At R.P.S. Studio, every principle exists in service of a single promise:
              to deliver an experience so considered, so precise, that you leave transformed —
              not merely styled.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-0">
          {pillars?.map((pillar, index) => (
            <div
              key={pillar?.number}
              className={`grid lg:grid-cols-12 gap-8 py-12 ${
                index < pillars?.length - 1 ? 'border-b border-border' : ''
              } group`}
            >
              {/* Number */}
              <div className="lg:col-span-1 flex items-start">
                <span className="font-serif text-5xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                  {pillar?.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4 flex items-start">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground leading-tight group-hover:text-primary transition-colors duration-500">
                  {pillar?.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4 flex items-start">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {pillar?.description}
                </p>
              </div>

              {/* Tag */}
              <div className="lg:col-span-3 flex items-start justify-end">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors duration-500 font-medium border border-primary/10 group-hover:border-primary/30 px-3 py-1.5 h-fit">
                  {pillar?.accent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}