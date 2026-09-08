import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const arrowIcon = (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M4 10h12M10 4l6 6-6 6" />
  </svg>
);

const closeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const defaultFacilities = [
  { id: 1, title: 'X-Ray Unit', desc: 'In-house digital X-ray for fast, accurate diagnosis.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Stafne_defect_panorex.jpg/960px-Stafne_defect_panorex.jpg',
    info: 'Digital X-rays give our dentists a precise view of your teeth, roots and jawbone — in seconds and with far less radiation than traditional film. They help detect cavities, infections, impacted teeth and bone loss early, so treatment starts before problems grow.' },
  { id: 2, title: 'Root Canal Treatment', desc: 'Gentle root canal therapy that saves damaged teeth.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Dental_root_canal_treatment_process.jpg/960px-Dental_root_canal_treatment_process.jpg',
    info: 'Root canal therapy removes infected pulp from inside a damaged tooth, cleans the canals and seals them to stop the infection returning. It relieves pain and saves the natural tooth — often in just one or two comfortable visits.' },
  { id: 3, title: 'Cosmetic Fillings', desc: 'Tooth-coloured composite fillings that blend invisibly.', color: '#FB7185',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Dental_Restoration.jpg/960px-Dental_Restoration.jpg',
    info: 'Tooth-coloured composite fillings repair cavities, chips and worn edges with material that matches your natural tooth shade. They blend invisibly with your smile and can often be completed in a single sitting.' },
  { id: 4, title: 'Dental Surgery', desc: 'Safe, expert surgical procedures under strict sterile conditions.', color: '#FBBF24',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Oral_surgery_150408-F-DD059-105.jpg/960px-Oral_surgery_150408-F-DD059-105.jpg',
    info: 'From simple extractions to complex surgical procedures, our dental surgery is performed under strict sterile conditions with modern anaesthesia. You stay comfortable throughout, and we guide your recovery step by step.' },
  { id: 5, title: 'Ultra Sonic Scaling', desc: 'Deep cleaning that lifts plaque and tartar with ultrasonic precision.', color: '#34D399',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Dentist_Examining_Patient%E2%80%99s_Teeth_with_Dental_Mirror.jpg/960px-Dentist_Examining_Patient%E2%80%99s_Teeth_with_Dental_Mirror.jpg',
    info: 'Ultrasonic scaling uses high-frequency vibrations to gently loosen plaque, tartar and stains above and below the gumline. It is a fast, comfortable deep clean that prevents gum disease and keeps your breath fresh.' },
  { id: 6, title: 'Fixed Metal Bridges', desc: 'Strong, durable metal bridges that restore missing teeth.', color: '#F472B6',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Teeth_prepared_for_a_bridge_restoration.jpg/960px-Teeth_prepared_for_a_bridge_restoration.jpg',
    info: 'A fixed metal bridge replaces one or more missing teeth by anchoring a strong metal framework to the neighbouring teeth. It restores your bite, stops teeth from shifting, and is built to last for years.' },
  { id: 7, title: 'Fixed Ceramic Bridges', desc: 'Natural-looking ceramic bridges matched to your smile.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Feldspathic_VM9_Porcelain_Crowns.jpg/960px-Feldspathic_VM9_Porcelain_Crowns.jpg',
    info: 'Ceramic bridges restore missing teeth with natural, tooth-coloured material matched to your smile. The porcelain finish looks lifelike while the bridge stays firmly fixed in place — no removal needed.' },
  { id: 8, title: 'Imported Complete Dentures', desc: 'Premium imported full dentures built for comfort and fit.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Denture_plate.jpg/960px-Denture_plate.jpg',
    info: 'Our imported complete dentures replace all missing teeth in an arch with premium materials chosen for comfort, fit and a natural look. Each set is custom-made so you can eat, speak and smile with confidence.' },
  { id: 9, title: 'Removable Partial Dentures', desc: 'Comfortable, removable partials to replace missing teeth.', color: '#FB7185',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Removable_partial_golden_denture_%28cropped%29.jpg/960px-Removable_partial_golden_denture_%28cropped%29.jpg',
    info: 'Partial dentures fill the gaps left by missing teeth with a lightweight, removable appliance that clips onto your remaining teeth. They improve chewing, speech and appearance, and are easy to keep clean.' },
  { id: 10, title: 'Gum Surgery', desc: 'Advanced gum treatment for healthier teeth and tissue.', color: '#FBBF24',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/UCLA_Periodontics_Graduate_Clinic.jpg/960px-UCLA_Periodontics_Graduate_Clinic.jpg',
    info: 'Gum (periodontal) surgery treats advanced gum disease, receding gums and infected tissue that scaling alone cannot reach. It restores healthy, firm gums — the foundation your teeth stand on.' },
  { id: 11, title: 'Fractures', desc: 'Complete care for cracked, chipped and fractured teeth.', color: '#34D399',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Cracked_tooth.jpg/960px-Cracked_tooth.jpg',
    info: 'Cracked, chipped or fractured teeth are assessed and repaired to protect the nerve and prevent further damage. Depending on severity, treatment ranges from bonding and crowns to full restoration.' },
  { id: 12, title: 'Orthodontic Treatment', desc: 'Braces and alignment care to straighten teeth at any age.', color: '#F472B6',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Before_and_After_Photos_following_Orthodontic_Treatment_-_Teeth_Braces.jpg/960px-Before_and_After_Photos_following_Orthodontic_Treatment_-_Teeth_Braces.jpg',
    info: 'Braces and alignment treatment gradually straighten crooked or crowded teeth and correct your bite at any age. The result is a healthier, more confident smile that is easier to clean and care for.' },
  { id: 13, title: 'Silver Filling', desc: 'Long-lasting amalgam fillings for strong, reliable repairs.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Filling_amalgam.jpg/960px-Filling_amalgam.jpg',
    info: 'Amalgam (silver) fillings are a time-tested, highly durable choice for back teeth that bear heavy chewing pressure. They are strong, long-lasting and a cost-effective way to repair decay.' },
  { id: 14, title: 'Impactions', desc: 'Safe removal of impacted teeth, including wisdom teeth.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Impacted_wisdom_tooth.jpg/960px-Impacted_wisdom_tooth.jpg',
    info: 'An impacted tooth — often a wisdom tooth — is one that cannot fully emerge. We assess it with X-rays and, when needed, remove it safely to prevent pain, infection and damage to neighbouring teeth.' }
];

const Services = ({ services }) => {
  const data = services?.length ? services : defaultFacilities;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Close on Escape + lock body scroll while the modal is open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const openModal = (facility) => {
    setImgFailed(false);
    setSelected(facility);
  };

  const bookTreatment = () => {
    const title = selected.title;
    setSelected(null);
    const bk = document.getElementById('contact');
    if (bk) bk.scrollIntoView({ behavior: 'smooth' });
    // Pre-fill the treatment dropdown if it exists
    const select = document.getElementById('bk-service');
    if (select) {
      const match = Array.from(select.options).find((o) => o.text === title);
      if (match) select.value = match.value;
    }
  };

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services__inner">
        <div className="services__header">
          <div className="section-tag">Our Facilities</div>
          <h2 className="section-title">Treatments &amp;<br /><em>Facilities</em></h2>
          <p className="section-desc">
            Everything you need for complete dental care — from routine scaling to full
            dental surgery — all under one roof. Tap any treatment to learn more.
          </p>
        </div>

        <div className="services__grid">
          {data.map((facility, i) => (
            <button
              key={facility.id}
              type="button"
              className={`service-card ${visible ? 'service-card--visible' : ''}`}
              style={{ '--service-color': facility.color }}
              onClick={() => openModal(facility)}
              aria-haspopup="dialog"
            >
              <div className="service-card__icon">{checkIcon}</div>
              <h3 className="service-card__title">{facility.title}</h3>
              <p className="service-card__desc">{facility.desc}</p>
              <div className="service-card__more">
                View details {arrowIcon}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="service-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="service-modal__card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="service-modal__close" onClick={() => setSelected(null)} aria-label="Close details">
              {closeIcon}
            </button>
            <div className="service-modal__media">
              {selected.image && !imgFailed ? (
                <img src={selected.image} alt={selected.title} loading="lazy" onError={() => setImgFailed(true)} />
              ) : (
                <div className="service-modal__fallback" style={{ '--service-color': selected.color }}>
                  {checkIcon}
                </div>
              )}
              <div className="service-modal__tag" style={{ '--service-color': selected.color }}>
                {checkIcon}
                {selected.title}
              </div>
            </div>
            <div className="service-modal__body">
              <h3 className="service-modal__title">{selected.title}</h3>
              <p className="service-modal__desc">{selected.desc}</p>
              <div className="service-modal__divider" />
              <p className="service-modal__info">{selected.info}</p>
              <button type="button" className="service-modal__cta" onClick={bookTreatment}>
                Book this treatment {arrowIcon}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;