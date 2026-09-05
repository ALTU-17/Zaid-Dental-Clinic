import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { src: '/images/clinic-interior.png', title: 'Our Clinic', desc: 'A warm, welcoming space designed around your comfort.' },
  { src: '/images/denatlmachine.jpeg', title: 'Modern Equipment', desc: 'Advanced technology for precise, pain-free treatment.' },
  { src: '/images/allstaff.jpeg', title: 'Our Team', desc: 'Specialists who treat every patient like family.' }
];

const Gallery = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery__inner">
        <div className="gallery__header">
          <div className="section-tag">Inside Our Clinic</div>
          <h2 className="section-title">Step Into<br /><em>Zaid Dental</em></h2>
          <p className="section-desc">
            A glimpse of our clinic, our team, and the technology that powers your smile.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.src}
              className={`gallery__tile ${visible ? 'gallery__tile--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <img src={item.src} alt={item.title} className="gallery__img" loading="lazy" />
              <div className="gallery__overlay">
                <div className="gallery__title">{item.title}</div>
                <div className="gallery__desc">{item.desc}</div>
              </div>
            </div>
          ))}

          <div
            className={`gallery__tile gallery__tile--cta ${visible ? 'gallery__tile--visible' : ''}`}
            style={{ transitionDelay: '0.36s' }}
          >
            <div className="gallery__cta">
              <div className="gallery__cta-icon">😁</div>
              <div className="gallery__cta-title">Ready for your perfect smile?</div>
              <button
                className="gallery__cta-btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;