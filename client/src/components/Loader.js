import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Preparing your experience…', 'Loading services…', 'Almost ready…', 'Welcome'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12 + 3;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(next, 99);
      });
    }, 120);

    const phaseInterval = setInterval(() => {
      setPhase(prev => Math.min(prev + 1, phases.length - 1));
    }, 750);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <div className="loader-wrap">
      {/* Ambient orbs */}
      <div className="loader-orb loader-orb-1" />
      <div className="loader-orb loader-orb-2" />

      <div className="loader-content">
        {/* Tooth SVG animation */}
        <div className="loader-icon">
          <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="tooth-path"
              d="M40 5 C25 5, 8 18, 8 32 C8 42, 12 50, 16 60 C20 70, 22 85, 28 85 C34 85, 35 70, 40 70 C45 70, 46 85, 52 85 C58 85, 60 70, 64 60 C68 50, 72 42, 72 32 C72 18, 55 5, 40 5 Z"
              stroke="#2DD4BF"
              strokeWidth="2.5"
              fill="none"
              strokeLinejoin="round"
            />
            <circle className="loader-dot" cx="30" cy="30" r="3" fill="#2DD4BF" />
            <circle className="loader-dot" cx="50" cy="30" r="3" fill="#2DD4BF" />
          </svg>
        </div>

        <div className="loader-brand">Zaid Dental Clinic</div>
        <div className="loader-phase">{phases[phase]}</div>

        {/* Progress bar */}
        <div className="loader-bar-wrap">
          <div className="loader-bar" style={{ width: `${progress}%` }} />
          <div className="loader-bar-glow" style={{ left: `${progress}%` }} />
        </div>

        <div className="loader-percent">{Math.round(progress)}%</div>
      </div>

      {/* Developer credit */}
      <a
        className="loader-dev"
        href="https://altamash-shaikh-portfolio.vercel.app"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit developer portfolio"
      >
        <span className="loader-dev-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </span>
        <span className="loader-dev-text">Developed by <strong>ALTAMASH SHAIKH</strong></span>
        <span className="loader-dev-runner" aria-hidden="true">
          <svg className="loader-runner-tooth" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="loader-runner-body" d="M22 3 C14 3 6 9.5 6 18 C6 23.5 8.2 28 10.5 33.5 C12.8 39 13 44 16.5 44 C20 44 19.5 38 22 38 C24.5 38 24 44 27.5 44 C31 44 31.2 39 33.5 33.5 C35.8 28 38 23.5 38 18 C38 9.5 30 3 22 3 Z" />
            <line className="loader-runner-leg loader-runner-leg--back" x1="15" y1="43" x2="11" y2="47" />
            <line className="loader-runner-leg loader-runner-leg--front" x1="29" y1="43" x2="33" y2="47" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Loader;
