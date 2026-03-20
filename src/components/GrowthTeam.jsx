import { motion } from 'framer-motion';
import './GrowthTeam.css';

const growthMembers = [
  {
    name: 'Raiyan Emon',
    role: 'Chief Marketing Officer',
    image: '/images/team/cmo.jpg',
    note: 'Growing Ghorkhuji across Dhaka and building trust within renter and owner communities.',
  },
  {
    name: 'Member Name',
    role: 'Content Strategist',
    image: '',
    note: 'Creating compelling content that resonates with renters and property owners.',
  },
  {
    name: 'Member Name',
    role: 'Community Manager',
    image: '',
    note: 'Building and nurturing the Ghorkhuji community across social platforms.',
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="growth-image-container">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="growth-image" />
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
