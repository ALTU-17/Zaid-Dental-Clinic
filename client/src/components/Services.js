import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const defaultFacilities = [
  { id: 1, title: 'X-Ray Unit', desc: 'In-house digital X-ray for fast, accurate diagnosis.', color: '#2DD4BF' },
  { id: 2, title: 'Root Canal Treatment', desc: 'Gentle root canal therapy that saves damaged teeth.', color: '#818CF8' },
  { id: 3, title: 'Cosmetic Fillings', desc: 'Tooth-coloured composite fillings that blend invisibly.', color: '#FB7185' },
  { id: 4, title: 'Dental Surgery', desc: 'Safe, expert surgical procedures under strict sterile conditions.', color: '#FBBF24' },
  { id: 5, title: 'Ultra Sonic Scaling', desc: 'Deep cleaning that lifts plaque and tartar with ultrasonic precision.', color: '#34D399' },
  { id: 6, title: 'Fixed Metal Bridges', desc: 'Strong, durable metal bridges that restore missing teeth.', color: '#F472B6' },
  { id: 7, title: 'Fixed Ceramic Bridges', desc: 'Natural-looking ceramic bridges matched to your smile.', color: '#2DD4BF' },
  { id: 8, title: 'Imported Complete Dentures', desc: 'Premium imported full dentures built for comfort and fit.', color: '#818CF8' },
  { id: 9, title: 'Removable Partial Dentures', desc: 'Comfortable, removable partials to replace missing teeth.', color: '#FB7185' },
  { id: 10, title: 'Gum Surgery', desc: 'Advanced gum treatment for healthier teeth and tissue.', color: '#FBBF24' },
  { id: 11, title: 'Fractures', desc: 'Complete care for cracked, chipped and fractured teeth.', color: '#34D399' },
  { id: 12, title: 'Orthodontic Treatment', desc: 'Braces and alignment care to straighten teeth at any age.', color: '#F472B6' },
  { id: 13, title: 'Silver Filling', desc: 'Long-lasting amalgam fillings for strong, reliable repairs.', color: '#2DD4BF' },
  { id: 14, title: 'Impactions', desc: 'Safe removal of impacted teeth, including wisdom teeth.', color: '#818CF8' }
];

const Services = ({ services }) => {
  const data = services?.length ? services : defaultFacilities;
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
          <div className="section-tag">Our Facilities</div>
          <h2 className="section-title">Treatments &amp;<br /><em>Facilities</em></h2>
          <p className="section-desc">
            Everything you need for complete dental care — from routine scaling to full
            dental surgery — all under one roof.
          </p>
        </div>

        <div className="services__grid">
          {data.map((facility, i) => (
            <div
              key={facility.id}
              className={`service-card ${visible ? 'service-card--visible' : ''}`}
              style={{ '--service-color': facility.color }}
            >
              <div className="service-card__icon">{checkIcon}</div>
              <h3 className="service-card__title">{facility.title}</h3>
              <p className="service-card__desc">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
