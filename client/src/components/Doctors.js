import React, { useEffect, useRef, useState } from 'react';
import './Doctors.css';

const defaultDoctors = [
  { name: 'Dr. Mohammad Ziauddin', specialty: 'Chief Dental Surgeon', initials: 'MZ', photo: 'dr-mohammad-ziauddin.jpeg' },
  { name: 'Dr. Seema Yasmeen', specialty: 'General Dentist', initials: 'SY' },
  { name: 'Dr. Syeda Samiya', specialty: 'General Dentist', initials: 'SS', photo: 'dr-syeda-samiya.jpg' }
];

const avatarColors = ['#2DD4BF', '#818CF8', '#FB7185'];

const initialsOf = (name) => {
  if (!name) return '?';
  const parts = name.replace(/^Dr\.?\s*/i, '').trim().split(/\s+/);
  return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2);
};

const Doctors = ({ clinicData }) => {
  const doctors = clinicData?.doctors?.length ? clinicData.doctors : defaultDoctors;
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
    <section className="doctors" id="doctors" ref={ref}>
      <div className="doctors__inner">
        <div className="doctors__header">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Meet Our<br /><em>Doctors</em></h2>
          <p className="section-desc">
            A team of experienced dental professionals dedicated to your comfort, care, and confident smile.
          </p>
        </div>

        <div className="doctors__grid">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`doctors__card ${visible ? 'doctors__card--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="doctors__avatar" style={{ background: avatarColors[i % avatarColors.length] }}>
                {doc.photo ? (
                  <img src={`/images/${doc.photo}`} alt={doc.name} className="doctors__photo" />
                ) : (
                  doc.initials || initialsOf(doc.name)
                )}
              </div>
              <h3 className="doctors__name">{doc.name}</h3>
              <p className="doctors__specialty">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;