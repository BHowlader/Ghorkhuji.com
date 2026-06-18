import { motion } from 'framer-motion';
import './AppShowcase.css';

const screens = [
  {
    title: 'Rental Search Feed',
    label: 'Find House Rent',
    description: 'Browse verified flats by category, area, and rent range with a clean card feed.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.39.57.jpeg'),
    shape: 'phone',
  },
  {
    title: 'Roommate Discovery',
    label: 'Find Roommates',
    description: 'Search roommate-friendly listings with fast price and location scanning.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.39.59.jpeg'),
    shape: 'phone',
  },
  {
    title: 'Owner Listing Flow',
    label: 'List My Room',
    description: 'Owners can add house details, rent, address, and photos from a guided form.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.39.58.jpeg'),
    shape: 'phone',
  },
  {
    title: 'Saved and Created Listings',
    label: 'My Listings',
    description: 'Track created, saved, and applied listings from one organized dashboard.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.40.00.jpeg'),
    shape: 'phone',
  },
  {
    title: 'Account and Verification',
    label: 'My Profile',
    description: 'Profile, identity verification, and account details are visible in one screen.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.39.59 (1).jpeg'),
    shape: 'phone',
  },
  {
    title: 'Community Features',
    label: 'Social Layer',
    description: 'Community chat, announcements, and neighborhood updates extend the app beyond discovery.',
    image: encodeURI('/WhatsApp Image 2026-03-20 at 14.40.01.jpeg'),
    shape: 'wide',
  },
];

const timeline = [
  'Choose your area and monthly budget.',
  'Browse verified flats with real photos.',
  'Call the owner directly and book a visit.',
];

const showcaseHighlights = [
  { value: '6+', label: 'real app screens' },
  { value: '3', label: 'core user flows' },
  { value: '0', label: 'broker steps' },
];

const AppShowcase = () => {
  const loopedScreens = [...screens, ...screens];

  return (
    <section className="section app-showcase" id="screenshots">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Inside the App</span>
          <h2 className="title left">See how Ghorkhuji makes renting effortless</h2>
          <p className="subtitle left">
            From searching verified flats to calling owners directly — every screen is designed
            to get you closer to your next home, faster.
          </p>
        </div>

        <div className="showcase-intro">
          <div className="showcase-rail-card">
            <span className="rail-label">How It Works</span>
            <h3>From search to move-in, in just a few taps</h3>
            <div className="journey-steps">
              {timeline.map((step, index) => (
                <div className="journey-step" key={step}>
                  <span>{`0${index + 1}`}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="showcase-overview-card">
            <div className="showcase-overview-head">
              <span className="rail-label">What You'll Find</span>
              <h3>Every feature renters and owners actually need</h3>
              <p>
                Search, list, save, verify, and connect — all from one app built specifically
                for the Dhaka rental market.
              </p>
            </div>

            <div className="showcase-stats">
              {showcaseHighlights.map((item) => (
                <div className="showcase-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-slider full-bleed-slider">
        <div className="slider-stage marquee-stage">
          <div className="marquee-shell">
            <div className="marquee-fade left" />
            <div className="marquee-fade right" />
            <motion.div
              className="marquee-track"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {loopedScreens.map((screen, index) => (
                <motion.article
                  className={`marquee-card ${screen.shape}`}
                  key={`${screen.title}-${index}`}
                  whileHover={{ y: -10, scale: 1.015 }}
                >
                  <div className="marquee-card-copy">
                    <span>{screen.label}</span>
                    <strong>{screen.title}</strong>
                    <p>{screen.description}</p>
                  </div>
                  <div className={`marquee-frame ${screen.shape}`}>
                    <img src={screen.image} alt={screen.title} className="marquee-image" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="container">
            <div className="showcase-meta">
              {screens.map((screen) => (
                <div className="meta-pill" key={screen.title}>
                  <span>{screen.label}</span>
                  <strong>{screen.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
