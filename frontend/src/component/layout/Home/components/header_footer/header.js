import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure this file is in the same directory
import { Button } from 'reactstrap';
import ransomewarelogo from './ransomwarelogo.png'; // Import the image
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={showNavbar ? 'navbar' : 'navbar navbar-hidden'}>
      {/* <a href="#" className="logo" style={{fontFamily: "cursive"}}>Team.Lemon</a> */}
      
      <a href="#"  style={{ fontFamily: "cursive", textDecoration: "None" }}>
        <img src={ransomewarelogo} alt="Logo" className="logo-image" style={{height:"40px", width:"40px", borderRadius:"50%", marginLeft:"20px"}}></img>
        <span className="logo">Lemon </span>
        <span style={{ fontFamily: "cursive", color: "white" }}>Ransomware Assessment Tool</span>
      </a>
      <NavLinks />
    </nav>
  );
};

const NavLinks = () => (
  <ul className="nav-links">
    <li><Link to="/solutions">Solutions</Link></li>
    <li><Link to="/vision">Vision</Link></li>
    <li><Link to="/programs">Programs</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <Button tag={Link} to="/questions" color="success">Start Ransomware Check</Button>
  </ul>
);

export default Navbar;
