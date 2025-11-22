import PageHero from '../../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaPencilRuler, FaCheckCircle, FaCube, FaDrawPolygon } from 'react-icons/fa';
import './ServiceDetail.css';

const Design = () => {
    const features = [
        '3D Modeling & Simulation',
        'Detailed Engineering Drawings',
        'Finite Element Analysis (FEA)',
        'Piping & Instrumentation Diagrams (P&ID)',
        'Structural Design & Analysis',
        'Mechanical Design',
        'Electrical Layout Design',
        'Technical Documentation'
    ];

    const software = [
        { name: 'AutoCAD / AutoCAD Plant 3D', level: 98 },
        { name: 'SolidWorks / CATIA', level: 95 },
        { name: 'ANSYS (FEA/CFD)', level: 88 },
        { name: 'Revit MEP', level: 90 }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Engineering Design"
                subtitle="Turning Concepts into Detailed Engineering"
                description="Comprehensive design services from conceptualization to detailed engineering for diverse industrial applications using cutting-edge CAD and simulation tools."
                backgroundClass="design-hero-bg"
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
                            <FaPencilRuler className="title-icon" />
                            Advanced Engineering Design
                        </h2>
                        <p className="section-description">
                            Our design team combines technical expertise with advanced CAD and simulation tools to deliver precise, efficient, and innovative engineering designs.
                        </p>
                        <p>
                            From concept sketches to fully detailed 3D models and manufacturing-ready drawings, we provide comprehensive design solutions that transform your ideas into reality.
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
                                src="/brain/b6d4a4bb-9e7e-4af4-9d09-c8b3572b678a/engineering_design_workspace_1763708223641.png"
                                alt="Engineering Design Workspace"
                                className="service-image"
                            />
                            <div className="image-overlay">
                                <FaCube className="overlay-icon" />
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
                        <h2 className="section-title text-center">Design Capabilities</h2>
                        <p className="section-subtitle text-center">
                            Full spectrum of engineering design services
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

            {/* Software Expertise */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center">
                        <FaDrawPolygon /> Design Software Mastery
                    </h2>
                    <p className="section-subtitle text-center">
                        Industry-leading CAD and simulation platforms
                    </p>
                </motion.div>

                <div className="technologies-grid">
                    {software.map((sw, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="tech-card"
                        >
                            <h4>{sw.name}</h4>
                            <div className="progress-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${sw.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="progress-fill"
                                    style={{ background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)' }}
                                />
                            </div>
                            <span className="progress-label">{sw.level}% Expertise</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" style={{ background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Bring Your Design Vision to Life</h2>
                        <p>Partner with our engineering design experts for your next project</p>
                        <a href="/contact" className="btn btn-gradient btn-large">
                            Start Your Project
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Design;
