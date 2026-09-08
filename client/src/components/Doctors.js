import React, { useEffect, useRef, useState } from 'react';
import './Doctors.css';

const defaultDoctors = [
  {
    name: 'Dr. Mohammad Ziauddin',
    qualification: 'B.D.S.',
    role: 'Dental Surgeon',
    regd: 'Regd. No. A-9312',
    experience: '15+ Years Experience',
    initials: 'MZ',
    photo: 'primedoc.jpeg',
    prime: true
  },
   {
    name: 'Dr. Syeda Samiya Mir Hidayat Ali',
    qualification: 'B.D.S.',
    role: 'General Dentist',
    regd: 'Regd. No. A-52000',
    experience: '5+ Years Experience',
    photo: 'drsamiya.png',
    initials: 'SS'
  },
  {
     name: 'Dr. Seema Yasmeen',
      role: 'General Dentist',
       qualification: 'B.D.S.',
        initials: 'SY',
         experience: '10+ Years Experience'
         },
 
];

const avatarColors = ['#2DD4BF', '#818CF8', '#FB7185'];

const initialsOf = (name) => {
  if (!name) return '?';
  const parts = name.replace(/^Dr\.?\s*/i, '').trim().split(/\s+/);
  return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2);
};

const Doctors = ({ clinicData }) => {
  const doctors = clinicData?.doctors?.length ? clinicData.doctors : defaultDoctors;
  // Prime doctor always first, others keep their order
  const ordered = [...doctors].sort((a, b) => (b.prime ? 1 : 0) - (a.prime ? 1 : 0));
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

  const renderFace = (doc, i) => {
    if (doc.photo) {
      return <img src={`/images/${doc.photo}`} alt={doc.name} className="doctors__photo" />;
    }
    return (
      <span style={{ color: '#0A0F1E' }}>
        {doc.initials || initialsOf(doc.name)}
      </span>
    );
  };

  return (
    <section className="doctors" id="doctors" ref={ref}>
      <div className="doctors__inner">
        <div className="doctors__header">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Meet Our<br /><em>Doctors</em></h2>
          <p className="section-desc">
            Skilled, caring dental professionals dedicated to your comfort and a confident smile.
          </p>
        </div>

        <div className="doctors__grid">
          {ordered.map((doc, i) =>
            doc.prime ? (
              <article
                key={doc.name}
                className={`doctors__card doctors__card--prime ${visible ? 'doctors__card--visible' : ''}`}
                style={{ transitionDelay: '0s' }}
              >
                <div className="doctors__prime-photo" style={{ background: avatarColors[0] }}>
                  {renderFace(doc, i)}
                </div>
                <span className="doctors__prime-tag">Lead Dental Surgeon</span>
                <h3 className="doctors__prime-name">{doc.name}</h3>
                <div className="doctors__prime-quals">
                  {(doc.qualification ? [doc.qualification] : []).map(q => (
                    <span key={q} className="doctors__chip">{q}</span>
                  ))}
                  {doc.role && <span className="doctors__chip">{doc.role}</span>}
                </div>
                {doc.regd && <p className="doctors__prime-regd">{doc.regd}</p>}
                {doc.experience && (
                  <p className="doctors__prime-exp">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {doc.experience}
                  </p>
                )}
                {doc.desc && <p className="doctors__prime-desc">{doc.desc}</p>}
              </article>
            ) : (
              <article
                key={doc.name}
                className={`doctors__card doctors__card--small ${visible ? 'doctors__card--visible' : ''}`}
                style={{ transitionDelay: '0.15s' }}
              >
                <div className="doctors__avatar" style={{ background: avatarColors[i % avatarColors.length] }}>
                  {renderFace(doc, i)}
                </div>
                <h3 className="doctors__name">{doc.name}</h3>
                {(doc.role || doc.qualification) && (
                  <p className="doctors__specialty">{[doc.role, doc.qualification].filter(Boolean).join(' · ')}</p>
                )}
                {doc.regd && <p className="doctors__small-regd">{doc.regd}</p>}
                {doc.experience && (
                  <p className="doctors__small-exp">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {doc.experience}
                  </p>
                )}
                {doc.desc && <p className="doctors__small-desc">{doc.desc}</p>}
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
