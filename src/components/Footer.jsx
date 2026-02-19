import React from 'react';
import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="#" className="footer-logo">
                            <LogoIcon style={{ height: '50px', width: 'auto', color: 'white' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', marginLeft: '10px', color: 'white' }}>Ghorkhuji.</span>
                        </a>
                        <p style={{ marginTop: '15px' }}>Your trusted partner in finding the perfect flat. Safe, verified, and direct.</p>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#team">Team</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li>Dhaka, Bangladesh</li>
                            <li>ghorkhuji@gmail.com</li>
                            <li>+8801410688168</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Get the App</h3>
                        <p style={{ marginBottom: '20px' }}>Download our app for the best experience on the go.</p>
                        <a href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link" className="btn" target="_blank" rel="noopener noreferrer">Download Now</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ghorkhuji. All rights reserved.</p>
                    <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#64748b' }}>
                        Designed & Developed by <a href="https://www.bibekhowlader.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}>Bibek Howlader</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
