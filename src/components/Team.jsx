import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Mr. Vivek Jagtap',
            role: 'Food Engineering Expert',
            credentials: 'Alumni IIT Kharagpur',
            description: 'Visionary leader with extensive experience in Dairy and Food Engineering.',
            image: '/images/team/Mr Vivek Jagtap.png'
        },
        {
            name: 'Mr. Jagdish Bainagari',
            role: 'Automation System Expert',
            credentials: '',
            description: 'Specialist in designing and implementing advanced automation systems for industrial applications.',
            image: '/images/team/Mr Jagdish Bainagari.png'
        },
        {
            name: 'Mr. Pandarinath Pandit',
            role: 'Engineering Design Expert',
            credentials: '',
            description: 'Expert in precision engineering design and manufacturing solutions for complex industrial challenges.',
            image: '/images/team/Mr Pandarinath Pandit.png'
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="team-header"
                >
                    <span className="section-badge">Leadership</span>
                    <h2 className="team-title">Meet Our Team</h2>
                    <p className="team-subtitle">
                        Experienced professionals dedicated to delivering engineering excellence
                    </p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="team-card"
                        >
                            <div className="team-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=300&background=0066CC&color=fff&bold=true`;
                                    }}
                                />
                                <div className="team-image-overlay">
                                    <div className="team-social-links">
                                        <a href="#" className="social-link" aria-label="LinkedIn">
                                            <FaLinkedin />
                                        </a>
                                        <a href="#" className="social-link" aria-label="Email">
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                {member.credentials && (
                                    <p className="team-credentials">{member.credentials}</p>
                                )}
                                <p className="team-description">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
