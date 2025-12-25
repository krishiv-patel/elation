import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import Team from '../components/Team';
import { FaQuoteLeft, FaBullseye, FaEye } from 'react-icons/fa';
import './services/ServiceDetail.css';

const About = () => {
    // Content from Excel Sheet
    const introText = "Elation Engineering Pvt Ltd was established in 2021 by IIT alumni with a dream to provide innovative processing solutions in economical way to global food processing industries. Our 24 x 7 completely dedicated customer focus, strong work ethics , constant knowledge upgradation along wide experience in this field helping us to take strong steps towards making our dream a reality.";

    const visionText = "To become One Stop Solution Provider for Global Food Processing Sector";

    const missionText = "To become trustworthy technical stakeholder for our customers by providing innovative and economical processing solutions";

    return (
        <div className="service-detail-page theme-blue">
            <PageHero
                title="About Us"
                subtitle="Elation Engineering Pvt. Ltd."
                description="Established in 2021 by IIT alumni to provide innovative and economical processing solutions to the global food processing industry."
                backgroundClass="about-hero-bg"
            />

            {/* Introduction Section */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="content-grid-2col"
                >
                    <div className="text-content">
                        <h2 className="section-title">
                            <FaQuoteLeft className="title-icon" />
                            Who We Are
                        </h2>
                        <p className="section-description" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-800)' }}>
                            {introText}
                        </p>
                    </div>
                    <div className="image-content">
                        <div className="service-image-wrapper" style={{ boxShadow: 'var(--shadow-xl)', borderRadius: 'var(--radius-3xl)' }}>
                            {/* Using a generic high-quality office/team image since no specific image was provided in Excel */}
                            <img
                                src="/src/assets/about/office-team.jpg"
                                alt="Elation Engineering Team"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <div className="content-grid-2col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white"
                            style={{
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                borderLeft: '5px solid var(--primary-600)'
                            }}
                        >
                            <div className="feature-icon-wrapper" style={{ margin: 0, flexShrink: 0, background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}>
                                <FaEye className="feature-icon" style={{ fontSize: '2rem', color: 'var(--primary-600)' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>Vision</h3>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                                    "{visionText}"
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white"
                            style={{
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                borderLeft: '5px solid var(--primary-600)'
                            }}
                        >
                            <div className="feature-icon-wrapper" style={{ margin: 0, flexShrink: 0, background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}>
                                <FaBullseye className="feature-icon" style={{ fontSize: '2rem', color: 'var(--primary-600)' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>Mission</h3>
                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                                    "{missionText}"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />
        </div>
    );
};

export default About;
