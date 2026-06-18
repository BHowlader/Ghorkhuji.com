import { useEffect, useState } from 'react';
import { appLinks } from '../constants/appLinks';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((current) => !current);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-shell">
        <a href="#home" className="logo" onClick={closeMenu}>
          <LogoIcon className="logo-icon" />
          <span className="logo-text">
            Ghorkhuji<span>.</span>
          </span>
        </a>

        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={isOpen ? 'bar open' : 'bar'} />
          <span className={isOpen ? 'bar open' : 'bar'} />
          <span className={isOpen ? 'bar open' : 'bar'} />
        </button>

        <div className={`nav-panel ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-store-links" aria-label="Download Ghorkhuji app">
            {appLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-store-link ${link.variant || ''}`}
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt="" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
