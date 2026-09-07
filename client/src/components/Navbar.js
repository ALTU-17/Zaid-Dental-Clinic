import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { getOpenStatus } from '../clinicStatus';

const Navbar = ({ clinicData }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Refresh open/closed status every minute
  useEffect(() => {
    const timer = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Treatments', target: 'services' },
    { label: 'About', target: 'about' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
          <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C8 2 3 7 3 12C3 17 5 20 7 25C9 30 10 31 12 31C14 31 14 26 14 26C14 26 14 31 16 31C18 31 19 30 21 25C23 20 25 17 25 12C25 7 20 2 14 2Z" fill="#2DD4BF" fillOpacity="0.2" stroke="#2DD4BF" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__brand">{clinicData?.name || 'Zaid Dental Clinic'}</span>
            <span className={`navbar__status ${status.open ? 'navbar__status--open' : 'navbar__status--closed'}`}>
              <span className="navbar__status-dot" />
              <strong className="navbar__status-label">{status.label}</strong>
              {status.sub && (
                <>
                  <span className="navbar__status-sep">·</span>
                  <span className="navbar__status-sub">{status.sub}</span>
                </>
              )}
            </span>
          </div>
        </div>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <button onClick={() => scrollTo(link.target)} className="navbar__link">
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button className="navbar__cta" onClick={() => scrollTo('contact')}>
              Book Appointment
            </button>
          </li>
        </ul>

        <button className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
