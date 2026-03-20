import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    name: 'Mostofa Mujtahid Sadh',
    role: 'Advisor',
    image: '/images/team/advisor.jpg',
    note: 'Guiding strategy, execution, and long-term product direction to keep Ghorkhuji on mission.',
  },
  {
    name: 'Kazi Tahmidur Rahman',
    role: 'Founder & CEO',
    image: '/images/team/ceo.jpg',
    note: 'Leading the vision to make Dhaka rentals transparent, verified, and accessible for everyone.',
  },
];

const Team = () => {
  return (
    <section className="section team" id="team">
      <div className="container team-layout">
        <div className="section-heading">
          <span className="section-kicker">Meet Our Team</span>
          <h2 className="title left">The people building a better rental future for Dhaka</h2>
          <p className="subtitle left">
            We're a small, focused team driven by one belief — every family in Dhaka deserves
            a fair, honest, and hassle-free way to find a home.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.article
              className="team-card"
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-note">{member.note}</p>
              </div>
            </motion.article>
          ))}

          <article className="team-story-card">
            <span className="story-label">Our Vision</span>
            <h3>A Dhaka where finding a home is simple, safe, and fair</h3>
            <p>
              We're working toward a city where renters don't fear fake listings,
              owners don't need brokers, and the entire process takes days — not weeks.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;
