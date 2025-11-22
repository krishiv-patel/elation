import PageHero from '../../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaCog, FaIndustry, FaCheckCircle, FaRobot } from 'react-icons/fa';
import './ServiceDetail.css';

const Automation = () => {
    const features = [
        'PLC & SCADA Programming',
        'HMI Design & Integration',
        'Industrial IoT Solutions',
        'Robotic Process Automation',
        'Control Panel Design & Fabrication',
        'Process Instrumentation',
        'DCS Implementation',
        'Motion Control Systems'
    ];

    const technologies = [
        { name: 'Siemens', level: 95 },
        { name: 'Allen-Bradley', level: 90 },
        { name: 'Schneider Electric', level: 85 },
        { name: 'ABB', level: 88 }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Automation Systems"
                subtitle="Smart Manufacturing & Industrial Control"
                description="We design and implement advanced automation solutions that optimize productivity, ensure quality, and reduce operational costs in industrial environments."
                backgroundClass="automation-hero-bg"
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
                            <FaIndustry className="title-icon" />
                            Industrial Automation Excellence
                        </h2>
                        <p className="section-description">
                            Transform your manufacturing processes with our state-of-the-art automation solutions. We specialize in designing, implementing, and optimizing industrial automation systems that drive efficiency and innovation.
                        </p>
                        <p>
                            From concept to commissioning, our team of experienced engineers delivers turnkey automation solutions tailored to your specific industrial needs. We leverage cutting-edge technologies to create systems that are reliable, scalable, and easy to maintain.
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
                                src="/brain/b6d4a4bb-9e7e-4af4-9d09-c8b3572b678a/automation_industrial_scene_1763708182279.png"
                                alt="Industrial Automation"
                                className="service-image"
                            />
                            <div className="image-overlay">
                                <FaRobot className="overlay-icon" />
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
                        <h2 className="section-title text-center">Our Automation Capabilities</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive solutions for modern industrial automation
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

            {/* Technologies */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center">Technologies We Master</h2>
                    <p className="section-subtitle text-center">
                        Industry-leading automation platforms
                    </p>
                </motion.div>

                <div className="technologies-grid">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="tech-card"
                        >
                            <h4>{tech.name}</h4>
                            <div className="progress-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${tech.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="progress-fill"
                                />
                            </div>
                            <span className="progress-label">{tech.level}% Expertise</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Ready to Automate Your Processes?</h2>
                        <p>Let's discuss how our automation solutions can transform your operations</p>
                        <a href="/contact" className="btn btn-gradient btn-large">
                            Schedule a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Automation;
