import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <LogoIcon style={{ height: '42px', width: 'auto' }} />
            <span>Ghorkhuji.</span>
          </a>
          <p>
            Verified flats, direct owner contact, and zero brokerage fees.
            Making the Dhaka rental experience fair and transparent for everyone.
          </p>
        </div>

        <div className="footer-links-group">
          <a href="#services">Why Ghorkhuji</a>
          <a href="#screenshots">App Screenshots</a>
          <a href="#team">Our Team</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-cta">
          <p>Ready to find your next home? Download the app and start exploring verified listings today.</p>
          <a
            href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ghorkhuji. All rights reserved.</p>
        <p>
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
