import { motion } from 'framer-motion';
import { appLinks } from '../constants/appLinks';
import './Hero.css';

const trustPoints = [
  { icon: '🏠', value: 'Verified Listings', label: 'Every flat is physically checked before going live' },
  { icon: '🤝', value: 'Zero Brokerage', label: 'Talk to owners directly, no middlemen fees' },
  { icon: '📍', value: 'Dhaka Focused', label: 'Built specifically for the Dhaka rental market' },
];

const heroStats = [
  { value: '0%', label: 'Broker fee' },
  { value: 'Direct', label: 'Owner contact' },
  { value: 'Dhaka', label: 'Local focus' },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-shell">
        <div className="hero-copy">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            #1 Flat Booking App in Dhaka
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Finding a home in Dhaka
            <br />
            <span className="hero-highlight">shouldn't be this hard.</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No more broker fees. No more fake listings. Ghorkhuji connects you directly with
            verified property owners so you can find your next home with confidence and zero hassle.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="store-links" aria-label="Download Ghorkhuji app">
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
            <a href="#screenshots" className="btn btn-outline">
              See How It Works
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-photo-card">
            <img src="/images/landing/dhaka-apartment-hero.png" alt="Using Ghorkhuji during an apartment visit" />
            <motion.div
              className="hero-floating-card top"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Verified visit</span>
              <strong>Real flats, real photos</strong>
            </motion.div>
            <motion.div
              className="hero-floating-card bottom"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Broker fee</span>
              <strong>৳0</strong>
            </motion.div>
          </div>

          <div className="hero-stat-row">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container hero-trust"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        {trustPoints.map((item) => (
          <div className="trust-card" key={item.value}>
            <span className="trust-icon">{item.icon}</span>
            <div>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
