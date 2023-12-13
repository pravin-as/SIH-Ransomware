import React from 'react';
import './WelcomeSection.css'; 
import { Button } from 'reactstrap';

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="right-content">
        <h2>The New Standard</h2>
        <h2>in Data Analysis</h2>
        <p>Use Data to Get a 360-Degree View of Your Business</p>
        <Button Danger><a href="#" style={{color: "white"}}>Get Started</a></Button>
      </div>

    </div>
  );
};

export default IntroSection;
