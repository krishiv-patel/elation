import PageHero from '../../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaRocket, FaCheckCircle, FaLightbulb, FaHandshake } from 'react-icons/fa';
import './ServiceDetail.css';

const Startups = () => {
    const features = [
        'Technical Feasibility Studies',
        'Prototype Development',
        'Manufacturing Setup Support',
        'Product Design & Engineering',
        'Supply Chain Optimization',
        'Funding & Investment Guidance',
        'Mentorship & Networking',
        'Go-to-Market Strategy'
    ];

    const support = [
        { stage: 'Ideation to Prototype', level: 95 },
        { stage: 'Manufacturing Setup', level: 92 },
        { stage: 'Market Launch Support', level: 88 },
        { stage: 'Scale-Up Consulting', level: 90 }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Startup Handholding"
                subtitle="Accelerating Innovation & Growth"
                description="Comprehensive technical and strategic support for engineering startups, from initial concept to successful market launch and scaling."
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
                            <FaRocket className="title-icon" />
                            End-to-End Startup Support
                        </h2>
                        <p className="section-description">
                            We partner with engineering startups to provide the technical expertise and strategic guidance needed to transform innovative ideas into successful businesses.
                        </p>
                        <p>
                            From validating technical feasibility to scaling manufacturing operations, our experienced team has helped numerous startups navigate the challenges of bringing new products to market.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="image-content"
                    >
                        <div className="service-image-wrapper" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', padding: '2rem', borderRadius: '1.5rem' }}>
                            <FaLightbulb style={{ fontSize: '10rem', color: '#ff9800', margin: '0 auto', display: 'block' }} />
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
                        <h2 className="section-title text-center">Startup Services</h2>
                        <p className="section-subtitle text-center">
                            Everything your startup needs to succeed
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
                        <FaHandshake /> Support Across Stages
                    </h2>
                </motion.div>

                <div className="technologies-grid">
                    {support.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="tech-card"
                        >
                            <h4>{item.stage}</h4>
                            <div className="progress-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="progress-fill"
                                    style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' }}
                                />
                            </div>
                            <span className="progress-label">{item.level}% Success Rate</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="cta-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Ready to Launch Your Startup?</h2>
                        <p>Let's turn your innovative idea into a thriving business</p>
                        <a href="/contact" className="btn btn-gradient btn-large">
                            Schedule a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Startups;
