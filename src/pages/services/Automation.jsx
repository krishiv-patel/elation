import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCog, FaIndustry, FaCheckCircle, FaRobot } from 'react-icons/fa';
import automationImg from '../../assets/services/automation-services.png';
import './ServiceDetail.css';

const Automation = () => {
    const features = [
        'Control System Design & Panel Manufacturing',
        'HMI Software & SQL Reporting Integration',
        '21 CFR Compliance & Batch Solutions (ISA Standards)',
        'Installation & Commissioning',
        'Software Upgradations & Legacy H/w Migration',
        'Remote Connectivity & Monitoring',
        'Annual Maintenance Contract',
        '24X7 Technical Support'
    ];

    const technologies = [
        {
            name: 'Siemens',
            capabilities: [
                'SIMATIC S7-1200/1500 PLC Programming',
                'TIA Portal Software Development',
                'WinCC HMI & SCADA Solutions',
                'PROFINET & PROFIBUS Networks',
                'Safety Integrated Systems',
                'Distributed I/O Systems'
            ]
        },
        {
            name: 'Allen-Bradley',
            capabilities: [
                'ControlLogix & CompactLogix PLCs',
                'Studio 5000 Programming',
                'FactoryTalk View HMI/SCADA',
                'EtherNet/IP Communication',
                'PowerFlex Drives Integration',
                'DeviceNet & ControlNet Networks'
            ]
        },
        {
            name: 'Schneider Electric',
            capabilities: [
                'Modicon M340/M580 Programming',
                'Unity Pro & EcoStruxure Software',
                'Vijeo Citect SCADA Systems',
                'Modbus TCP/IP Protocol',
                'Altivar Variable Speed Drives',
                'CANopen Integration'
            ]
        },
        {
            name: 'ABB',
            capabilities: [
                'AC500 PLC Programming',
                'Control Builder Software',
                'System 800xA DCS Integration',
                'Industrial Robotics Programming',
                'ACS Drive Systems',
                'FOUNDATION Fieldbus'
            ]
        }
    ];

    const getTechnologyIcon = (index) => {
        const icons = [FaCog, FaRobot, FaIndustry, FaCog];
        return icons[index];
    };

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
                        <p className="section-description">
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
                                src={automationImg}
                                alt="Industrial Automation"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Automation Capabilities</h2>
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
                                <div className="feature-icon-wrapper">
                                    <FaCheckCircle className="feature-icon" />
                                </div>
                                <h3>{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Segmentation */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Technology Segmentation</h2>
                    <p className="section-subtitle text-center">
                        Expertise across leading automation platforms
                    </p>
                </motion.div>

                <div className="technologies-grid">
                    {technologies.map((tech, index) => {
                        const IconComponent = getTechnologyIcon(index);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="tech-card"
                            >
                                <div className="tech-icon-wrapper">
                                    <IconComponent className="feature-icon" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4>{tech.name}</h4>

                                {/* Capabilities List */}
                                <ul className="tech-list">
                                    {tech.capabilities.map((capability, capIndex) => (
                                        <motion.li
                                            key={capIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 + capIndex * 0.05 }}
                                            className="tech-list-item"
                                        >
                                            <span className="tech-list-bullet">●</span>
                                            <span>{capability}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
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
                        <a href="/contact" className="btn-large">
                            Schedule a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Automation;
