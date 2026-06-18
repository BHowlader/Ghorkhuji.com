import { motion } from 'framer-motion';
import './GrowthTeam.css';

const growthMembers = [
  {
    name: 'Mohtasin Bari',
    role: 'HR Executive',
    image: '/members/WhatsApp Image 2026-06-15 at 22.32.37.jpeg',
    note: 'Responsible for recruitment, employee engagement, onboarding, and supporting day-to-day human resource operations to help Ghorkhuji build a strong and motivated team.',
  },
  {
    name: 'Imtiaz Ahmed Nasif',
    role: 'Content Strategist',
    image: '/members/nasif.jpeg',
    note: "Responsible for developing content strategies, creating engaging content, managing brand communication, and driving audience growth across Ghorkhuji's digital platforms.",
  },
];

const GrowthTeam = () => {
  return (
    <section className="section growth-team" id="growth-team">
      <div className="container growth-layout">
        <div className="section-heading">
          <span className="section-kicker">Growth Team</span>
          <h2 className="title left">The team scaling Ghorkhuji across Dhaka</h2>
          <p className="subtitle left">
            Our growth team works on the ground — building partnerships, growing our community,
            and making sure every renter in Dhaka knows there's a better way to find a home.
          </p>
        </div>

        <div className="growth-grid">
          {growthMembers.map((member, index) => (
            <motion.article
              className="growth-card"
              key={`${member.role}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="growth-image-container">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="growth-image"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.closest('.growth-image-container').classList.add('image-missing');
                    }}
                  />
                ) : (
                  <div className="growth-image-placeholder">
                    <span>{member.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="growth-info">
                <span className="growth-role">{member.role}</span>
                <h3 className="growth-name">{member.name}</h3>
                <p className="growth-note">{member.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTeam;
