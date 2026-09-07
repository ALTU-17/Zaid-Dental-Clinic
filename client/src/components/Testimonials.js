import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const defaultTestimonials = [
  { id: 1, name: 'Noor Khan', rating: 5, text: 'The team at Zaid Dental transformed my smile completely. The veneers look absolutely natural. Best investment I\'ve ever made!', treatment: 'Smile Makeover', avatar: 'PS', photo: 'patent1.jpeg' },
  { id: 2, name: 'Abdul Rehman', rating: 5, text: 'I was terrified of dentists but the staff made me feel completely at ease. My implant procedure was painless and the results are phenomenal.', treatment: 'Dental Implant', avatar: 'RG', photo: 'patent2.jpeg' },
  { id: 3, name: 'Zainab Ali', rating: 5, text: 'Took my kids here and they loved it! The pediatric team is so patient and fun. My children actually look forward to their check-ups now.', treatment: 'Pediatric Care', avatar: 'AV' }
];

const avatarColors = ['#2DD4BF', '#818CF8', '#FB7185', '#FBBF24'];

const Avatar = ({ t, color }) => {
  const [failed, setFailed] = useState(false);
  if (t.photo && !failed) {
    return (
      <img
        src={`/images/${t.photo}`}
        alt={t.name}
        className="testimonials__avatar-img"
        onError={() => setFailed(true)}
      />
    );
  }
  return t.avatar;
};

const Testimonials = ({ testimonials }) => {
  const data = testimonials?.length ? testimonials : defaultTestimonials;
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % data.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <div className="section-tag">Patient Stories</div>
          <h2 className="section-title">Real Smiles,<br /><em>Real Results</em></h2>
        </div>

        <div className={`testimonials__stage ${visible ? 'testimonials__stage--visible' : ''}`}>
          <div className="testimonials__cards">
            {data.map((t, i) => (
              <div
                key={t.id}
                className={`testimonials__card ${i === active ? 'testimonials__card--active' : ''} ${i === (active - 1 + data.length) % data.length ? 'testimonials__card--prev' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="testimonials__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonials__text">"{t.text}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar" style={{ background: avatarColors[i % avatarColors.length] }}>
                    <Avatar t={t} color={avatarColors[i % avatarColors.length]} />
                  </div>
                  <div>
                    <div className="testimonials__name">{t.name}</div>
                    <div className="testimonials__treatment">{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {data.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__google">
          <div className="testimonials__google-badge">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="testimonials__google-val">4.9 ★★★★★</div>
              <div className="testimonials__google-label">200+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
