import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const icons = {
  tooth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 4 5 4 9c0 3 1 5.5 2.5 9C8 22 8.5 23 10 23s1.5-2 2-2 .5 2 2 2 2-1 3.5-5c1.5-3.5 2.5-6 2.5-9 0-4-4-7-8-7z"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  align: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18"/>
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
};

const defaultServices = [
  { id: 1, icon: 'tooth', title: 'General Dentistry', desc: 'Comprehensive oral health care for the whole family.', color: '#2DD4BF' },
  { id: 2, icon: 'sparkle', title: 'Teeth Whitening', desc: 'Professional whitening for a brighter, confident smile.', color: '#818CF8' },
  { id: 3, icon: 'shield', title: 'Dental Implants', desc: 'Permanent tooth replacements that look completely natural.', color: '#FB7185' },
  { id: 4, icon: 'align', title: 'Orthodontics', desc: 'Clear aligners and braces for straighter teeth at any age.', color: '#FBBF24' },
  { id: 5, icon: 'smile', title: 'Smile Makeover', desc: 'Complete aesthetic transformations tailored to you.', color: '#34D399' },
  { id: 6, icon: 'heart', title: 'Pediatric Dentistry', desc: 'Gentle, fun dental care kids actually look forward to.', color: '#F472B6' }
];

const Services = ({ services }) => {
  const data = services?.length ? services : defaultServices;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services__inner">
        <div className="services__header">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">Comprehensive<br /><em>Dental Care</em></h2>
          <p className="section-desc">
            From routine cleanings to complete smile transformations — every service crafted with precision and care.
          </p>
        </div>

        <div className="services__grid">
          {data.map((service, i) => (
            <div
              key={service.id}
              className={`service-card ${visible ? 'service-card--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="service-card__icon" style={{ '--service-color': service.color }}>
                {icons[service.icon]}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__arrow">
                <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Learn more
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
