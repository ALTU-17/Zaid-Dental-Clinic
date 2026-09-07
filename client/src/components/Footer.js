import React from 'react';
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

const Footer = ({ clinicData }) => {
  const year = new Date().getFullYear();

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
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
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
    </footer>
  );
};

export default Footer;