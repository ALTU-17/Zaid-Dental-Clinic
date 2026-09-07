import React, { useEffect, useRef, useState } from 'react';
import './Equipment.css';

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const equipmentCards = [
  {
    id: 'equipment',
    img: '/images/denatlmachine.jpeg',
    tag: 'Advanced Technology',
    title: 'Modern Equipment',
    desc: 'Every treatment at Zaid Dental Clinic is powered by the latest-generation dental technology — built for precision, comfort and faster results.',
    points: [
      'Latest-generation dental chairs & treatment units',
      'Digital X-ray with minimal radiation for instant, accurate diagnosis',
      'Precision instruments for smoother, gentler procedures',
      'Modern equipment that is serviced and calibrated regularly'
    ]
  },
  {
    id: 'hygiene',
    img: '/images/denatlmachine2.jpeg',
    tag: 'Clean. Sterile. Safe.',
    title: 'Hygiene & Safety',
    desc: 'Your safety comes first. We follow strict, hospital-grade hygiene protocols so every visit is clean, protected and worry-free.',
    points: [
      'Autoclave sterilization of every instrument after each patient',
      'Fresh, single-use disposable kits for every appointment',
      'Surfaces, chairs & equipment disinfected between patients',
      'A spotless, modern environment you can trust'
    ]
  }
];

const Equipment = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="equipment" id="equipment" ref={ref}>
      <div className="equipment__inner">
        <div className="equipment__header">
          <div className="section-tag">Advanced Care</div>
          <h2 className="section-title">Modern Equipment<br /><em>&amp; Hygiene</em></h2>
          <p className="section-desc">
            Technology that makes treatment precise — and hygiene standards that make it safe.
          </p>
        </div>

        <div className="equipment__list">
          {equipmentCards.map((card, i) => (
            <div
              key={card.id}
              className={`equipment__row ${i % 2 === 1 ? 'equipment__row--reverse' : ''} ${visible ? 'equipment__row--visible' : ''}`}
            >
              <div className="equipment__media">
                <img src={card.img} alt={card.title} className="equipment__img" loading="lazy" />
                <span className="equipment__media-tag">{card.tag}</span>
              </div>
              <div className="equipment__info">
                <h3 className="equipment__title">{card.title}</h3>
                <p className="equipment__desc">{card.desc}</p>
                <ul className="equipment__points">
                  {card.points.map(point => (
                    <li key={point} className="equipment__point">
                      <span className="equipment__check"><Check /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
