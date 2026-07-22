'use client';

import React, { useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    'Advanced Rebonding Treatment',
    'Custom Bob Artistry',
    'Balayage & Color Melt',
    'Keratin Smoothing Therapy',
    'Bridal Hair Styling',
    'Gold Facial',
    'HydraFacial',
    'Bridal Makeup (HD)',
    'Party Makeup',
    'Airbrush Foundation',
    'Other / Consultation',
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Form */}
          <div>
            <p className="section-label mb-4">Reserve Your Session</p>
            <h2 className="section-heading text-foreground mb-3">
              Begin Your <span className="italic text-primary">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-10 max-w-sm">
              Complete the form below and our team will confirm your booking within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-primary italic mb-2">Thank You</p>
                <p className="text-muted-foreground text-sm font-light">
                  We will reach out to confirm your reservation shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="form-field"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="form-field"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-field"
                  >
                    <option value="" disabled>Select a Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional notes (optional)"
                    rows={2}
                    className="form-field resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[0.7rem] font-medium tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
                >
                  Request Reservation
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-12">
            {/* Hours */}
            <div>
              <p className="section-label mb-5">Studio Hours</p>
              <div className="space-y-3">
                {[
                  { day: 'Monday – Sunday', time: '10:30 AM – 8:30 PM' },
                ].map((row) => (
                  <div key={row.day} className="flex items-end gap-0">
                    <span className="text-sm font-light text-foreground/80 min-w-[140px]">{row.day}</span>
                    <span className="dotted-spacer" />
                    <span className="text-sm font-light text-primary whitespace-nowrap">{row.time}</span>
                  </div>
                ))}
                <p className="text-muted-foreground text-xs font-light mt-2">Open all 7 days, including public holidays.</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="section-label mb-5">Location</p>
              <address className="not-italic space-y-1">
                <p className="text-sm font-light text-foreground/80">1st Floor, Shop No. 18</p>
                <p className="text-sm font-light text-foreground/80">PVR Mall, Vinayak City Center</p>
                <p className="text-sm font-light text-foreground/80">Civil Lines, Prayagraj</p>
                <p className="text-sm font-light text-foreground/80">Uttar Pradesh, India</p>
              </address>
            </div>

            {/* Contact Links */}
            <div>
              <p className="section-label mb-5">Direct Contact</p>
              <div className="space-y-4">
                <a
                  href="tel:+918896125062"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span className="text-sm font-light text-foreground/80 group-hover:text-primary transition-colors duration-300">
                    +91 88961 25062
                  </span>
                </a>

                <a
                  href="https://wa.me/918896125062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="text-sm font-light text-foreground/80 group-hover:text-primary transition-colors duration-300">
                    WhatsApp Chat
                  </span>
                </a>

                <a
                  href="https://maps.google.com/?q=Vinayak+City+Center+Mall+Civil+Lines+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="text-sm font-light text-foreground/80 group-hover:text-primary transition-colors duration-300">
                    Get Directions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base row */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AppLogo size={24} />
            <span className="font-serif text-xs tracking-[0.18em] uppercase text-muted-foreground">
              R.P.S. Studio
            </span>
          </div>
          <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground/50">
            © 2026 R.P.S. Professional Hair Beauty & Make-Up Studio
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[0.65rem] uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">Privacy</a>
            <a href="#" className="text-[0.65rem] uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}