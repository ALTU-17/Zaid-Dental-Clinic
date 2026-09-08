import React, { useEffect, useRef } from 'react';
import './Hero.css';

const defaultDoctors = [
  { name: 'Dr. Mohammad Ziauddin' },
  { name: 'Dr. Seema Yasmeen' },
  { name: 'Dr. Syeda Samiya' }
];

const Hero = ({ clinicData }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero-animate');
    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 0.15}s`;
      item.classList.add('hero-animate--visible');
    });
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb-1" />
        <div className="hero__orb hero__orb-2" />
        <div className="hero__grid" />
      </div>

      {/* Floating tooth silhouettes */}
      <div className="hero__float hero__float-1" aria-hidden="true">
        <ToothSVG opacity={0.06} />
      </div>
      <div className="hero__float hero__float-2" aria-hidden="true">
        <ToothSVG opacity={0.04} />
      </div>

      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__badges hero-animate">
            {(clinicData?.doctors || defaultDoctors).map(doc => (
              <div key={doc.name} className="hero__badge">
                <span className="hero__badge-dot" />
                {doc.sname}
              </div>
            ))}
          </div>

          <h1 className="hero__title hero-animate">
            Your Smile,<br />
            <span className="hero__title-accent">Perfectly</span><br />
            Crafted
          </h1>

          <p className="hero__desc hero-animate">
            At {clinicData?.name || 'Zaid Dental Clinic'}, we combine cutting-edge technology with gentle care to create smiles that last a lifetime. Expert dentists, zero anxiety.
          </p>

          <div className="hero__actions hero-animate">
            <button className="hero__btn hero__btn--primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Free Consultation
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero__btn hero__btn--ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Treatments
            </button>
          </div>

          <div className="hero__trust hero-animate">
            <div className="hero__avatars">
              {['A','B','C','D'].map((l, i) => (
                <div key={i} className="hero__avatar" style={{ background: ['#2DD4BF','#818CF8','#FB7185','#FBBF24'][i] }}>
                  {l}
                </div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__stars">★★★★★</div>
              <div className="hero__trust-label">Loved by 5,000+ patients</div>
            </div>
          </div>
        </div>

       <div className="hero__right hero-animate">
  <div className="hero__card-wrap">
    {/* Main visual card */}
    <div className="hero__card">
     <div className="hero__clinic-visual">
  <picture>
    <source srcSet="/images/clinick.png" type="image/png" />

    <img
      src="/images/clinick.png"
      alt={`${clinicData?.name || 'Zaid Dental Clinic'} clinic`}
      className="hero__clinic-image"
    />
  </picture>

  <div className="hero__image-overlay" />

  <div className="hero__image-label">
    <span className="hero__image-label-dot" />
    <div>
      <strong>Premium Dental Care</strong>
      <small>Modern • Gentle • Trusted</small>
    </div>
  </div>
</div>

      {/* Floating stat cards */}
      <div className="hero__stat-card hero__stat-card-1">
        <div className="hero__stat-icon">😁</div>
        <div>
          <div className="hero__stat-value">5000+</div>
          <div className="hero__stat-label">Happy Smiles</div>
        </div>
      </div>

      <div className="hero__stat-card hero__stat-card-2">
        <div className="hero__stat-icon">⭐</div>
        <div>
          <div className="hero__stat-value">4.9/5</div>
          <div className="hero__stat-label">Patient Rating</div>
        </div>
      </div>

      <div className="hero__stat-card hero__stat-card-3">
        <div className="hero__stat-icon">🏥</div>
        <div>
          <div className="hero__stat-value">15+ Yrs</div>
          <div className="hero__stat-label">Excellence</div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

const ToothSVG = ({ opacity }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 8C30 8 10 20 10 38C10 52 16 62 22 78C28 94 30 112 38 112C46 112 48 92 50 92C52 92 54 112 62 112C70 112 72 94 78 78C84 62 90 52 90 38C90 20 70 8 50 8Z"
      fill={`rgba(45,212,191,${opacity})`}
    />
  </svg>
);

export default Hero;
