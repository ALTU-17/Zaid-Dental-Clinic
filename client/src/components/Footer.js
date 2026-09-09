import React, { useEffect, useState } from 'react';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const legalDocs = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: January 2026',
    intro: 'At Zaid Dental Clinic, your trust matters. This policy explains what personal information we collect, how we use it, and the steps we take to keep it safe — whether you visit us in person or use this website.',
    sections: [
      { h: '1. Information We Collect', p: 'When you book an appointment or contact us, we collect the details you share: your name, phone number, email address, and any message or treatment information you provide. We may also keep a record of the treatment you received so we can care for you better.' },
      { h: '2. How We Use Your Information', p: 'We use your details to confirm and manage appointments, send reminders, follow up on your treatment, and respond to your enquiries. We use the information only to serve you better — we never sell or rent your personal data to anyone.' },
      { h: '3. Data Protection', p: 'Your information is stored securely and is accessible only to staff who need it to care for you. We keep records only as long as required and take reasonable precautions to protect them against loss or misuse.' },
      { h: '4. Cookies & Website Use', p: 'Our website may use basic cookies to improve performance and your browsing experience. These do not collect personally identifying information about you.' },
      { h: '5. Sharing With Third Parties', p: 'We do not share your personal information with third parties for marketing purposes. We may disclose information only where required by law or with your explicit consent.' },
      { h: '6. Your Rights', p: 'You may ask us at any time to view, correct, or delete the personal information we hold about you. Simply contact us and we will act on your request promptly.' },
      { h: '7. Contact Us', p: 'For any questions about this policy or your data, reach us at Drziamd10@gmail.com or +91 98765 43210, or visit us at Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Aurangabad - 431001.' }
    ]
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: January 2026',
    intro: 'These terms govern your use of the Zaid Dental Clinic website and the services we provide. By booking an appointment or using this site, you agree to them.',
    sections: [
      { h: '1. Acceptance of Terms', p: 'By accessing our website or booking an appointment, you confirm that you have read, understood, and agreed to these terms of service.' },
      { h: '2. Appointments & Cancellations', p: 'Please arrive 10 minutes before your appointment time. If you need to reschedule or cancel, kindly let us know at least 24 hours in advance so we can offer the slot to another patient.' },
      { h: '3. Fees & Payment', p: 'Treatment costs are explained clearly before we begin. Payment is due at the time of service unless other arrangements have been agreed in advance.' },
      { h: '4. Patient Responsibilities', p: 'Please provide an accurate medical and dental history, inform us of any medications you take, and follow the post-treatment care instructions we give you for the best results.' },
      { h: '5. Medical Disclaimer', p: 'Information on this website is provided for general guidance only and is not a substitute for a professional examination, diagnosis, or treatment by a qualified dentist.' },
      { h: '6. Limitation of Liability', p: 'We strive to provide the highest standard of dental care. However, clinical outcomes can vary from patient to patient, and we cannot guarantee specific results for any treatment.' },
      { h: '7. Changes to These Terms', p: 'We may update these terms from time to time. The latest version will always be shown on this page, and continued use of our services after changes means you accept the updated terms.' },
      { h: '8. Contact Us', p: 'Questions about these terms? Contact us at Drziamd10@gmail.com or +91 98765 43210, or visit us at Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Aurangabad - 431001.' }
    ]
  }
};

const Footer = ({ clinicData }) => {
  const year = new Date().getFullYear();
  const [activeDoc, setActiveDoc] = useState(null);

  // Close on Escape + lock body scroll while a legal doc is open
  useEffect(() => {
    if (!activeDoc) return;
    const onKey = (e) => { if (e.key === 'Escape') setActiveDoc(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeDoc]);

  const serviceLinks = [
    'Root Canal Treatment',
    'X-Ray Unit',
    'Cosmetic Fillings',
    'Dental Surgery',
    'Ultra Sonic Scaling',
    'Orthodontic Treatment'
  ];

  const clinicLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'Our Team', target: 'doctors' },
    { label: 'Technology', target: 'equipment' },
    { label: 'Testimonials', target: 'testimonials' }
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28">
                <path d="M14 2C8 2 3 7 3 12C3 17 5 20 7 25C9 30 10 31 12 31C14 31 14 26 14 26C14 26 14 31 16 31C18 31 19 30 21 25C23 20 25 17 25 12C25 7 20 2 14 2Z" fill="#2DD4BF" fillOpacity="0.2" stroke="#2DD4BF" strokeWidth="1.5"/>
              </svg>
              <span className="footer__name">{clinicData?.name || 'Zaid Dental Clinic'}</span>
            </div>
            <p className="footer__tagline">{clinicData?.tagline || 'Crafting Confident Smiles'}</p>
            <div className="footer__socials">
              {['FB', 'IG', 'YT', 'WA'].map((s, i) => (
                <button key={i} className="footer__social" aria-label={s}>{s}</button>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Facilities</div>
            {serviceLinks.map(s => (
              <button key={s} className="footer__link" onClick={() => scrollTo('services')}>{s}</button>
            ))}
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Clinic</div>
            {clinicLinks.map(link => (
              <button key={link.label} className="footer__link" onClick={() => scrollTo(link.target)}>{link.label}</button>
            ))}
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <div className="footer__contact-item">
              <span>📍</span> {clinicData?.address || 'Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Kaiser Colony, Aurangabad - 431001, Maharashtra, India'}
            </div>
            <div className="footer__contact-item">
              <span>📞</span> {clinicData?.phone || '+91 98765 43210'}
            </div>
            <div className="footer__contact-item">
              <span>✉️</span> {clinicData?.email || 'hello@zaiddentalclinic.com'}
            </div>
            <div className="footer__hours">
              <div className="footer__hours-label">Timings</div>
              <div className="footer__hours-row"><span>Morning</span><span>{clinicData?.hours?.morning || '11AM–3PM'}</span></div>
              <div className="footer__hours-row"><span>Evening</span><span>{clinicData?.hours?.evening || '6:30PM–10:30PM'}</span></div>
              <div className="footer__hours-row"><span>Sunday</span><span>By Appt</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {year} Zaid Dental Clinic. All rights reserved.</p>
          <div className="footer__legal">
            <button type="button" onClick={() => setActiveDoc('privacy')}>Privacy Policy</button>
            <button type="button" onClick={() => setActiveDoc('terms')}>Terms of Service</button>
          </div>
        </div>

        <div className="footer__dev">
          <a
            href="https://altamash-shaikh-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="footer__dev-link"
            aria-label="Visit developer portfolio"
          >
            <CodeIcon />
            <span>Developed by: ALTAMASH SHAIKH</span>
          </a>

          <span className="footer__dev-sep" />

          <a href="tel:+919766220055" className="footer__dev-link" aria-label="Call developer">
            <PhoneIcon />
            <span>+91 9766220055</span>
          </a>

          <span className="footer__dev-sep" />

          <a href="mailto:skaltamsh789@gmail.com" className="footer__dev-link" aria-label="Email developer">
            <MailIcon />
            <span>skaltamsh789@gmail.com</span>
          </a>
        </div>
      </div>

      {activeDoc && (
        <div className="footer-modal" role="dialog" aria-modal="true" aria-label={legalDocs[activeDoc].title} onClick={() => setActiveDoc(null)}>
          <div className="footer-modal__card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="footer-modal__close" onClick={() => setActiveDoc(null)} aria-label="Close">
              <CloseIcon />
            </button>
            <div className="footer-modal__head">
              <div className="footer-modal__tag">Legal</div>
              <h3 className="footer-modal__title">{legalDocs[activeDoc].title}</h3>
              <p className="footer-modal__updated">{legalDocs[activeDoc].updated}</p>
            </div>
            <div className="footer-modal__body">
              <p className="footer-modal__intro">{legalDocs[activeDoc].intro}</p>
              {legalDocs[activeDoc].sections.map((s) => (
                <div key={s.h} className="footer-modal__section">
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
            <div className="footer-modal__foot">
              <button type="button" className="footer-modal__cta" onClick={() => setActiveDoc(null)}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;