import { motion } from 'framer-motion';
import './Hero.css';

const trustPoints = [
  { icon: '🏠', value: 'Verified Listings', label: 'Every flat is physically checked before going live' },
  { icon: '🤝', value: 'Zero Brokerage', label: 'Talk to owners directly, no middlemen fees' },
  { icon: '📍', value: 'Dhaka Focused', label: 'Built specifically for the Dhaka rental market' },
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
            <a
              href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the App
            </a>
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
          <div className="hero-mission-card">
            <div className="mission-badge">Our Mission</div>
            <h3>Make renting in Dhaka transparent, affordable, and broker-free.</h3>
            <p>
              We believe every family deserves to find a safe, verified home without paying
              thousands in brokerage or falling for fake listings.
            </p>
            <div className="mission-stats">
              <div className="mission-stat">
                <strong>100%</strong>
                <span>Verified Listings</span>
              </div>
              <div className="mission-stat">
                <strong>৳0</strong>
                <span>Brokerage Fee</span>
              </div>
            </div>
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
