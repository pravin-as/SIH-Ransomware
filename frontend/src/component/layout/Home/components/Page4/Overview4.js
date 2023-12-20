import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './Overview4.css';
import { Slide } from 'react-awesome-reveal';
import attacker from './attacker.png';
import credit from './credit2.jpg';
import fileUpload from './fileUpload2.png';
import port from './port2.jpg'; 
import { Link } from 'react-router-dom';

const Overview4 = () => {
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
    <div className={`Overview4-section ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Slide delay={1}>
              <img src={attacker} alt="Attacker" />
            </Slide>
          </div>
        </div>

        <div className="row">
          <div className="col position-relative">
              <Slide delay={1}>
                <div className="FileUpload">
                  <button className="overlay-button">Test My RansomWare Defenses</button>
                  <img src={fileUpload} alt="File Upload" />
                </div>
              </Slide>
            </div>
            <div className="col position-relative">
            <Slide delay={1}>
              <div className="Credit">
              <button className="overlay-button">Test My RansomWare Defenses</button>
              </div>
            </Slide>
          </div>
          <div className="col position-relative">
            <Slide delay={1}>
              <div className="Port">
              <button className="overlay-button">Test My RansomWare Defenses</button>
              </div>
            </Slide>
          </div>
          <div className="col position-relative">
            <Slide delay={1}>
              <div className="Domain">
              <button className="overlay-button">Test My RansomWare Defenses</button>
              </div>
            </Slide>
          </div>
        </div>

        <div className='clicktoresult'>
          <Button className='button-1' tag={Link} to="/auto-test" >Test My RansomWare Defenses</Button>
        </div>
            
      </div>
    </div>
  );
};

export default Overview4;

