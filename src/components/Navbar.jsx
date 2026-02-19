import React, { useState, useEffect } from 'react';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          <LogoIcon className="logo-icon" />
          <span className="logo-text">Ghorkhuji<span style={{ color: 'var(--color-primary-light)' }}>.</span></span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#team" onClick={toggleMenu}>Team</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link" className="mobile-btn" onClick={toggleMenu} target="_blank" rel="noopener noreferrer">Get App</a></li>
        </ul>

        <a href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link" className="btn nav-btn desktop-btn" target="_blank" rel="noopener noreferrer">Get App</a>
      </div>
    </nav>
  );
};

export default Navbar;
