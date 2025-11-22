import PageHero from '../../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCheckCircle, FaPills, FaMicroscope } from 'react-icons/fa';
import './ServiceDetail.css';

const Healthcare = () => {
    const features = [
        'Cleanroom Design & Validation',
        'Pharmaceutical Process Piping',
        'Medical Device Manufacturing Support',
        'GMP Compliance Consulting',
        'Utility Systems Design (HVAC, WFI, CW)',
        'Equipment Qualification (IQ/OQ/PQ)',
        'Regulatory Documentation',
        'Process Automation for Pharma'
    ];

    const expertise = [
        { area: 'Cleanroom Engineering', level: 95 },
        { area: 'GMP Compliance', level: 98 },
        { area: 'Pharma Equipment', level: 90 },
        { area: 'Quality Systems', level: 93 }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Healthcare Solutions"
                subtitle="Pharmaceutical & Medical Device Engineering"
                description="Specialized engineering solutions for the life sciences industry, ensuring compliance, quality, and operational excellence in pharmaceutical and healthcare manufacturing."
                backgroundClass="healthcare-hero-bg"
            />

            {/* Overview Section */}
            <section className="container section-padding">
                <div className="content-grid-2col">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-content"
                    >
                        <h2 className="section-title">
                            <FaHeartbeat className="title-icon" />
                            Pharmaceutical & Healthcare Engineering
                        </h2>
                        <p className="section-description">
                            We provide end-to-end engineering support for the healthcare sector, with deep expertise in pharmaceutical manufacturing, medical device development, and regulatory compliance.
                        </p>
                        <p>
                            Our team understands the critical importance of quality, safety, and compliance in the healthcare industry. We deliver solutions that meet stringent GMP standards while optimizing operational efficiency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="image-content"
                    >
                        <div className="service-image-wrapper">
                            <img
                                src="/brain/b6d4a4bb-9e7e-4af4-9d09-c8b3572b678a/healthcare_cleanroom_facility_1763708201678.png"
                                alt="Healthcare Cleanroom Facility"
                                className="service-image"
                            />
                            <div className="image-overlay">
                                <FaPills className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center">Healthcare Engineering Services</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive solutions for pharmaceutical and medical device industries
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <FaCheckCircle className="feature-icon" />
                                <h3>{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center">
                        <FaMicroscope /> Our Healthcare Expertise
                    </h2>
                    <p className="section-subtitle text-center">
                        Proven experience in pharmaceutical and medical device engineering
                    </p>
                </motion.div>

                <div className="technologies-grid">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="tech-card"
                        >
                            <h4>{item.area}</h4>
                            <div className="progress-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="progress-fill"
                                    style={{ background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)' }}
                                />
                            </div>
                            <span className="progress-label">{item.level}% Proficiency</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" style={{ background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Need Healthcare Engineering Support?</h2>
                        <p>Let's discuss your pharmaceutical or medical device project</p>
                        <a href="/contact" className="btn btn-gradient btn-large">
                            Contact Our Experts
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Healthcare;
