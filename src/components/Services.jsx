import { motion } from 'framer-motion';
import './Services.css';

const features = [
  {
    icon: '✓',
    title: 'Verified Listings Only',
    desc: 'Every flat on Ghorkhuji is physically verified by our team. No fake photos, no misleading descriptions — what you see is what you get.',
  },
  {
    icon: '📞',
    title: 'Direct Owner Contact',
    desc: 'Call or message flat owners directly from the app. No brokers taking a cut, no middlemen slowing you down.',
  },
  {
    icon: '🔍',
    title: 'Smart Search & Filters',
    desc: 'Search by area, budget, bedroom count, and more. Find the right flat in your preferred neighborhood within minutes.',
  },
  {
    icon: '👥',
    title: 'Roommate Matching',
    desc: 'Looking to share? Browse roommate-friendly listings and connect with potential flatmates who match your lifestyle.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-intro">
          <div className="section-heading">
            <span className="section-kicker">Why Ghorkhuji</span>
            <h2 className="title left">We're solving the broken rental experience in Dhaka</h2>
            <p className="subtitle left">
              Renters in Dhaka face fake listings, hidden broker fees, and wasted time. We built
              Ghorkhuji to fix all of that — giving you a faster, honest, and direct way to find your next home.
            </p>
          </div>

          <div className="services-panel">
            <span>The Problem We Solve</span>
            <strong>Dhaka renters lose thousands to brokers and fake listings every year.</strong>
            <p>
              Ghorkhuji eliminates the middleman. Our verified-first approach means you only see real
              flats from real owners, with transparent pricing and direct communication.
            </p>
          </div>
        </div>

        <motion.div
          className="services-photo-strip"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <img src="/images/landing/rental-app-visit.png" alt="A verified Dhaka apartment listed on Ghorkhuji" />
          <div className="services-photo-copy">
            <span>Verified homes</span>
            <strong>See the apartment before you spend time visiting it.</strong>
            <p>Real photos, clear details, and direct owner contact help renters shortlist with confidence.</p>
          </div>
        </motion.div>

        <div className="services-grid">
          {features.map((feature, index) => (
            <motion.article
              className="service-card"
              key={feature.title}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="service-icon">{feature.icon}</span>
              <h3 className="service-title">{feature.title}</h3>
              <p className="service-desc">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
