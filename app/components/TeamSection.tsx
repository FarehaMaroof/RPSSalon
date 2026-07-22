import React from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'Rizwan',
  role: 'Master Hair Artisan',
  specialty: 'Precision Cuts · Balayage · Bridal Hair',
  bio: 'With over a decade at the chair, Rizwan has developed a signature approach to face-shape analysis that has made him the most sought-after hair sculptor in Civil Lines. His custom bob artistry is unrivalled in Prayagraj.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba656a74-1772207433077.png",
  imageAlt: 'Professional male hair stylist portrait, dark moody studio background, confident expression, artistic professional',
  tag: 'Master Artisan'
},
{
  name: 'Pradeep',
  role: 'Senior Hair Stylist',
  specialty: 'Keratin · Rebonding · Colour Science',
  bio: 'Pradeep\'s expertise in chemical treatments — from keratin smoothing to multi-tonal colour melts — has earned him a loyal clientele who trust him with their most complex transformations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb41f749-1768723778001.png",
  imageAlt: 'Professional male hair colourist in modern salon, focused expression, dark professional atmosphere',
  tag: 'Colour Specialist'
},
{
  name: 'Kajal',
  role: 'Senior Beauty Consultant',
  specialty: 'Bridal Makeup · Skin Care · Eye Artistry',
  bio: 'Kajal brings a painter\'s sensitivity to every face she works on. Her bridal portfolio spans hundreds of weddings across Prayagraj and beyond, consistently praised for HD-perfect results that photograph beautifully.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aec92aed-1772257914475.png",
  imageAlt: 'Professional female beauty consultant portrait, warm elegant studio lighting, confident composed expression',
  tag: 'Bridal Expert'
}];


export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <p className="section-label">The Artisans</p>
            </div>
            <h2 className="section-heading text-foreground">
              Meet the{' '}
              <span className="italic text-primary">Masters</span>{' '}
              Behind the Magic
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Named specialists, not anonymous technicians. When you book at R.P.S. Studio,
              you choose your artist.
            </p>
          </div>
        </div>

        {/* Team rows */}
        <div className="space-y-0">
          {team.map((member, index) =>
          <div
            key={member.name}
            className={`team-row grid lg:grid-cols-12 gap-8 py-10 px-4 -mx-4 ${
            index < team.length - 1 ? 'border-b border-border' : ''} group cursor-default`
            }>
            
              {/* Number */}
              <div className="lg:col-span-1 hidden lg:flex items-center">
                <span className="font-serif text-4xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>

              {/* Image */}
              <div className="lg:col-span-2 team-img-wrap">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxWidth: '140px' }}>
                  <AppImage
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="140px"
                  className="object-cover" />
                
                </div>
              </div>

              {/* Name + Role */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground font-medium mt-1">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <div className="lg:col-span-4 flex items-center">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Specialty + Tag */}
              <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-center gap-3">
                <span className="team-tag text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/60 border border-border px-3 py-1.5 font-medium">
                  {member.tag}
                </span>
                <p className="text-[0.65rem] text-muted-foreground/50 font-light text-right leading-relaxed">
                  {member.specialty}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}