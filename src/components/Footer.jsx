import { appLinks } from '../constants/appLinks';
import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
  const homePath = window.location.pathname === '/privacy-policy' ? '/' : '';

  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <a href={`${homePath}#home`} className="footer-logo">
            <LogoIcon style={{ height: '42px', width: 'auto' }} />
            <span>Ghorkhuji.</span>
          </a>
          <p>
            Verified flats, direct owner contact, and zero brokerage fees.
            Making the Dhaka rental experience fair and transparent for everyone.
          </p>
        </div>

        <div className="footer-links-group">
          <a href={`${homePath}#services`}>Why Ghorkhuji</a>
          <a href={`${homePath}#screenshots`}>App Screenshots</a>
          <a href={`${homePath}#team`}>Our Team</a>
          <a href={`${homePath}#contact`}>Contact Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>

        <div className="footer-cta">
          <p>Ready to find your next home? Download the app and start exploring verified listings today.</p>
          <div className="store-links footer-store-links" aria-label="Download Ghorkhuji app">
            {appLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`store-button ${link.variant || ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt="" className="store-icon" aria-hidden="true" />
                <span className="store-copy">
                  <small>{link.eyebrow}</small>
                  <strong>{link.label}</strong>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ghorkhuji. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="footer-divider" aria-hidden="true">|</span>
          Built by{' '}
          <a href="https://mindrona.com" className="mindrona-link" target="_blank" rel="noopener noreferrer">
            Mindrona
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
