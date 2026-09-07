import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const features = [
  { icon: '🔬', title: 'Advanced Technology', desc: 'Digital X-rays, 3D scanning, and laser dentistry for precise, pain-free treatment.' },
  { icon: '🏆', title: 'Award-Winning Care', desc: 'Recognized as Aurangabad\'s top dental clinic for 3 consecutive years.' },
  { icon: '💊', title: 'Pain-Free Promise', desc: 'We use the latest anesthesia techniques so you feel nothing but comfort.' },
  { icon: '📋', title: 'Personalized Plans', desc: 'Every treatment plan is customized to your specific needs and goals.' }
];

const About = () => {
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
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">
        <div className={`about__left ${visible ? 'about__left--visible' : ''}`}>
          <div className="section-tag">About Zaid Dental</div>
          <h2 className="section-title">Dentistry With a<br /><em>Human Touch</em></h2>
          <p className="about__desc">
            Founded in Aurangabad over 15 years ago, Zaid Dental Clinic has grown from a single chair to a full-service dental destination — all while keeping the same philosophy: treat every patient like family.
          </p>
          <p className="about__desc">
            Our team of 12 specialists brings together expertise in everything from routine care to cosmetic transformations, always guided by evidence-based practices and a genuine commitment to your comfort.
          </p>

          <div className="about__features">
            {features.map((f, i) => (
              <div key={i} className="about__feature">
                <div className="about__feature-icon">{f.icon}</div>
                <div>
                  <div className="about__feature-title">{f.title}</div>
                  <div className="about__feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`about__right ${visible ? 'about__right--visible' : ''}`}>
          <div className="about__visual">
            {/* Abstract visual — clinic ambiance */}
            <div className="about__visual-bg">
              <div className="about__ring about__ring-1" />
              <div className="about__ring about__ring-2" />
              <div className="about__ring about__ring-3" />
            </div>

            <div className="about__center">
              <img
                src="/images/clinic-interior.png"
                alt="Zaid Dental Clinic reception area"
                className="about__photo"
              />
            </div>

            {/* Clinic creds floating badges */}
            <div className="about__badge about__badge-top">
              <span>🏆</span>
              <div>
                <div className="about__badge-val">Best Clinic</div>
                <div className="about__badge-sub">Aurangabad 2023</div>
              </div>
            </div>
            <div className="about__badge about__badge-bottom">
              <span>✅</span>
              <div>
                <div className="about__badge-val">ISO Certified</div>
                <div className="about__badge-sub">International Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
