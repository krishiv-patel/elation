import { motion } from 'framer-motion';
import { FaLightbulb, FaCheckCircle, FaAward, FaUsers, FaHistory, FaLinkedin, FaTwitter, FaEnvelope, FaRocket, FaCog, FaChartLine } from 'react-icons/fa';
import './About.css';

const stats = [
    { icon: <FaRocket />, value: '500+', label: 'Projects Delivered' },
    { icon: <FaCog />, value: '50+', label: 'Manufacturing Clients' },
    { icon: <FaChartLine />, value: '99%', label: 'Client Satisfaction' }
];

const timelineData = [
    { year: '2008', title: 'Inception', description: 'Elation was founded with a vision to revolutionize industrial automation.' },
    { year: '2012', title: 'Expansion', description: 'Expanded operations to healthcare and pharmaceutical sectors.' },
    { year: '2015', title: 'Global Reach', description: 'Established partnerships with major international engineering firms.' },
    { year: '2018', title: 'Innovation Hub', description: 'Launched dedicated R&D center for product development and startups.' },
    { year: '2023', title: 'Future Ready', description: 'Integrating AI and IoT solutions for Industry 4.0 excellence.' }
];

const teamData = [
    { name: 'Sarah Jenkins', role: 'CEO & Founder', image: 'https://via.placeholder.com/150', bio: 'Visionary leader with 20+ years in industrial engineering.' },
    { name: 'David Chen', role: 'Chief Technology Officer', image: 'https://via.placeholder.com/150', bio: 'Expert in automation systems and AI integration.' },
    { name: 'Emily Rodriguez', role: 'Head of Design', image: 'https://via.placeholder.com/150', bio: 'Award-winning industrial designer passionate about user-centric products.' },
    { name: 'Michael Chang', role: 'Director of Operations', image: 'https://via.placeholder.com/150', bio: 'Ensuring seamless project delivery and operational excellence.' }
];

const valuesData = [
    { title: 'Innovation', icon: <FaLightbulb />, desc: 'Pushing boundaries to find better solutions.' },
    { title: 'Integrity', icon: <FaCheckCircle />, desc: 'Honest, transparent, and ethical in all we do.' },
    { title: 'Excellence', icon: <FaAward />, desc: 'Delivering the highest quality in every project.' },
    { title: 'Collaboration', icon: <FaUsers />, desc: 'Working together to achieve shared success.' }
];

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                {/* ... existing header ... */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="about-header"
                >
                    <h2>About Elation</h2>
                    <div className="about-underline"></div>
                </motion.div>

                <div className="about-content">
                    {/* ... existing text content ... */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-text"
                    >
                        <h3 className="about-title">
                            Engineering Solutions for Tomorrow's Industries
                        </h3>
                        <p>
                            Elation is a leading engineering consultancy specializing in industrial automation,
                            process optimization, and innovative product development. With over 15 years of
                            experience, we've helped businesses across multiple sectors achieve operational
                            excellence and sustainable growth.
                        </p>
                        <p>
                            Our multidisciplinary team of experts combines deep technical knowledge with
                            practical industry experience to deliver customized solutions that address your
                            unique challenges. From startups to established corporations, we provide comprehensive
                            support throughout your engineering journey.
                        </p>

                        {/* Core Values Section */}
                        <div className="values-grid mt-xl">
                            {valuesData.map((value, index) => (
                                <div key={index} className="value-card glass-card p-md">
                                    <div className="value-icon text-gradient">{value.icon}</div>
                                    <h4>{value.title}</h4>
                                    <p className="text-sm text-muted">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ... existing stats ... */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-stats"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="stat-card glass-card"
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value gradient-text">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Timeline Section */}
                <div className="timeline-section mt-4xl">
                    <h3 className="text-center mb-xl">Our Journey</h3>
                    <div className="timeline">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="timeline-item glass-card"
                            >
                                <div className="timeline-year text-gradient">{item.year}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="team-section mt-4xl">
                    <h3 className="text-center mb-xl">Meet The Team</h3>
                    <div className="team-grid">
                        {teamData.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="team-card glass-card"
                            >
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                </div>
                                <div className="team-info p-md text-center">
                                    <h4>{member.name}</h4>
                                    <p className="text-primary-600 mb-sm">{member.role}</p>
                                    <p className="text-sm text-muted mb-md">{member.bio}</p>
                                    <div className="team-socials flex justify-center gap-sm">
                                        <a href="#" className="text-muted hover:text-primary-600"><FaLinkedin /></a>
                                        <a href="#" className="text-muted hover:text-primary-600"><FaTwitter /></a>
                                        <a href="#" className="text-muted hover:text-primary-600"><FaEnvelope /></a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
