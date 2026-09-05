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
    </div>
  );
};

export default Loader;
