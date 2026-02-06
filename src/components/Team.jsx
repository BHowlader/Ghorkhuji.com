import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: "Mostofa Mujtahid Sadh",
            role: "Advisor",
            image: "/images/team/advisor.jpg"
        },
        {
            name: "Kazi Tahmidur Rahman",
            role: "Founder & CEO",
            image: "/images/team/ceo.jpg"
        },
        {
            name: "Raiyan Emon",
            role: "Chief Marketing Officer (CMO)",
            image: "/images/team/cmo.jpg"
        }
    ];

    return (
        <section className="section team" id="team">
            <div className="container">
                <motion.h2
                    className="title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                >
                    Meet Our Team
                </motion.h2>
                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    The passionate people behind Ghorkhuji making your flat hunt easier.
                </motion.p>

                <div className="team-grid">
                    {teamMembers.map((member, index) => {
                        const isCeo = member.role.includes("CEO");
                        return (
                            <motion.div
                                className={`team-card ${isCeo ? 'featured' : ''}`}
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="team-image-container">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </div>
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
