import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure this file is in the same directory
import { Button } from 'reactstrap';
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
      <a href="#" className="logo" style={{fontFamily: "cursive"}}>Team.Lemon</a>
      <NavLinks />
    </nav>
  );
};

const NavLinks = () => (
  <ul className="nav-links">
    <li><a href="#">Solutions</a></li>
    <li><a href="#">Vision</a></li>
    <li><a href="#">Programs</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Log In</a></li>
    <Button outline><a href="#">Get Started</a></Button>
  </ul>
);

export default Navbar;
