import PageHero from '../../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaChartLine, FaCheckCircle, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import './ServiceDetail.css';

const PPSO = () => {
    const features = [
        'Process Bottleneck Analysis',
        'Energy Efficiency Audits',
        'Safety Integrity Level (SIL) Studies',
        'HAZOP & Risk Assessment',
        'Lean Manufacturing Implementation',
        'Six Sigma Projects',
        'ISO Compliance Support',
        'Operational Excellence Workshops'
    ];

    const focus = [
        { area: 'Process Optimization', level: 96 },
        { area: 'Safety Enhancement', level: 98 },
        { area: 'Energy Efficiency', level: 90 },
        { area: 'Quality Systems', level: 94 }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Process Excellence (PPSO)"
                subtitle="Plant Process & Safety Optimization"
                description="Data-driven process optimization strategies to maximize efficiency, enhance safety, and minimize waste in your industrial operations."
                backgroundClass="default-hero-bg"
            />

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
                            <FaTachometerAlt className="title-icon" />
                            Operational Excellence
                        </h2>
                        <p className="section-description">
                            Our PPSO services focus on enhancing the operational efficiency and safety of your industrial facilities through systematic analysis and optimization.
                        </p>
                        <p>
                            We employ proven methodologies like Lean, Six Sigma, and industry best practices to identify improvement opportunities and implement sustainable solutions that deliver measurable results.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="image-content"
                    >
                        <div className="service-image-wrapper" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', padding: '2rem', borderRadius: '1.5rem' }}>
                            <FaShieldAlt style={{ fontSize: '10rem', color: '#48bb78', margin: '0 auto', display: 'block' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center">PPSO Services</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive plant optimization solutions
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

            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center">
                        <FaChartLine /> Focus Areas
                    </h2>
                </motion.div>

                <div className="technologies-grid">
                    {focus.map((item, index) => (
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
                                    style={{ background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' }}
                                />
                            </div>
                            <span className="progress-label">{item.level}% Effectiveness</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="cta-section" style={{ background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Optimize Your Operations Today</h2>
                        <p>Unlock efficiency gains and safety improvements in your facility</p>
                        <a href="/contact" className="btn btn-gradient btn-large">
                            Request an Audit
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PPSO;
