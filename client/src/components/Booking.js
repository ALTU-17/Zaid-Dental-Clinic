import React, { useState, useEffect, useRef } from 'react';
import './Booking.css';

const Booking = ({ clinicData }) => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', service: '', message: '' });
  };

  const info = clinicData;

  return (
    <section className="booking" id="contact" ref={ref}>
      <div className="booking__inner">
        <div className={`booking__left ${visible ? 'booking__left--visible' : ''}`}>
          <div className="section-tag">Book Appointment</div>
          <h2 className="section-title">Ready for Your<br /><em>Perfect Smile?</em></h2>
          <p className="booking__desc">
            Schedule a free consultation and let our specialists craft a personalized treatment plan just for you.
          </p>

          <div className="booking__info">
            <div className="booking__info-item">
              <div className="booking__info-icon">📍</div>
              <div>
                <div className="booking__info-label">Location</div>
                <div className="booking__info-value">{info?.address || 'Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Kaiser Colony, Aurangabad - 431001, Maharashtra, India'}</div>
              </div>
            </div>
            <div className="booking__info-item">
              <div className="booking__info-icon">📞</div>
              <div>
                <div className="booking__info-label">Phone</div>
                <div className="booking__info-value">{info?.phone || '+91 98765 43210'}</div>
              </div>
            </div>
            <div className="booking__info-item">
              <div className="booking__info-icon">🕐</div>
              <div>
                <div className="booking__info-label">Hours</div>
                <div className="booking__info-value">Mon–Fri: {info?.hours?.weekdays || '9 AM – 8 PM'}</div>
                <div className="booking__info-value">Sat: {info?.hours?.saturday || '9 AM – 6 PM'}</div>
              </div>
            </div>
            <div className="booking__info-item">
              <div className="booking__info-icon">✉️</div>
              <div>
                <div className="booking__info-label">Email</div>
                <div className="booking__info-value">{info?.email || 'hello@zaiddentalclinic.com'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`booking__right ${visible ? 'booking__right--visible' : ''}`}>
          <div className="booking__form-card">
            {submitted ? (
              <div className="booking__success">
                <div className="booking__success-icon">✅</div>
                <h3>Appointment Requested!</h3>
                <p>We'll call you within 30 minutes to confirm your slot.</p>
              </div>
            ) : (
              <form className="booking__form" onSubmit={handleSubmit}>
                <h3 className="booking__form-title">Book Free Consultation</h3>
                <div className="booking__field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Altamash Shaikh"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="booking__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="booking__field">
                  <label>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service…</option>
                    <option>General Dentistry</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                    <option>Smile Makeover</option>
                    <option>Pediatric Dentistry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="booking__field">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your concern…"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>
                <button type="submit" className="booking__submit">
                  Book My Free Consultation
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="booking__privacy">🔒 Your information is safe with us. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
