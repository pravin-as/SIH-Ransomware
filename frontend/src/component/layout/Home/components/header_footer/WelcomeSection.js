import React from 'react';
import './WelcomeSection.css'; 
import { Button } from 'reactstrap';
import { Slide } from "react-awesome-reveal";
const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="right-content">
      <Slide cascade delay={0.1}>
        <div>
        <h2>Secure Today,</h2>
        <h2>Assess Tomorrow</h2>
        <p>In an era where digital security is non-negotiable, our tool offers a quick 
          <br></br>
          and precise analysis of your system's vulnerabilities. 
          Join us in the proactive '
           <br></br>
        pursuit of securing your digital assets against ransomware threats.</p>
        </div>
      </Slide>
      </div>

    </div>
  );
};

export default IntroSection;
