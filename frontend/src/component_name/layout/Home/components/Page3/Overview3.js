import React, { useEffect, useState } from 'react';
import './Overview3.css'; // Ensure this file is in the same directory

const Overview3 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50 && !scrolled) {
        setScrolled(true);
      } else if (scrollY <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`Overview3-section ${scrolled ? 'scrolled' : ''}`}>
      <h3>We Take Pride in Our Numbers</h3>
      <div className="numbers-row">
        <div className="number-item">
          <div className="number">15</div>
          <p className="number-description">Years of Experience</p>
        </div>
        <div className="number-item">
          <div className="number">10K</div>
          <p className="number-description">Business Partners</p>
        </div>
        <div className="number-item">
          <div className="number">25M</div>
          <p className="number-description">Products Installed</p>
        </div>
        <div className="number-item">
          <div className="number">22</div>
          <p className="number-description">Countries World Wide</p>
        </div>
        <div className="number-item">
          <div className="number">5</div>
          <p className="number-description">Industry Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Overview3;

