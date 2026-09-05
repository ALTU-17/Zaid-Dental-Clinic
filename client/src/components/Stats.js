import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const defaultStats = [
  { value: '5000+', label: 'Happy Patients' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '12', label: 'Expert Specialists' }
];

const Stats = ({ clinicData }) => {
  const stats = clinicData?.stats || defaultStats;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`stats__item ${visible ? 'stats__item--visible' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="stats__value">{stat.value}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
