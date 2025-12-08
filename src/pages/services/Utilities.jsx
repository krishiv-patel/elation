import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaWater, FaRecycle, FaSnowflake, FaFire, FaWind, FaCogs, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import './ServiceDetail.css';

const Utilities = () => {
    const services = [
        {
            title: 'Water Treatment System',
            description: 'Complete water purification and treatment solutions for industrial applications ensuring clean water supply.',
            icon: FaWater
        },
        {
            title: 'Waste Water Treatment System',
            description: 'Efficient waste water treatment plants for environmental compliance and water recycling.',
            icon: FaRecycle
        },
        {
            title: 'Refrigeration System',
            description: 'Industrial refrigeration solutions for cold storage, process cooling, and temperature-controlled environments.',
            icon: FaSnowflake
        },
        {
            title: 'Boiler & Steam Generation System',
            description: 'High-efficiency boilers and steam generation systems for industrial heating and processing needs.',
            icon: FaFire
        },
        {
            title: 'Air Compression System',
            description: 'Compressed air systems for pneumatic equipment, process air, and instrument air applications.',
            icon: FaWind
        }
    ];

    const features = [
        {
            title: 'Energy Efficient',
            description: 'Optimized systems designed to minimize energy consumption and reduce operational costs.',
            icon: FaLeaf
        },
        {
            title: 'Automated Control',
            description: 'PLC-based automation for precise monitoring and control of all utility systems.',
            icon: FaCogs
        },
        {
            title: 'Compliance Ready',
            description: 'Systems designed to meet environmental regulations and industry standards.',
            icon: FaShieldAlt
        },
        {
            title: 'Reliable Performance',
            description: 'Robust design ensuring continuous operation with minimal downtime.',
            icon: FaCheckCircle
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Utilities"
                subtitle="Essential Industrial Utility Systems"
                description="Complete utility solutions including water treatment, refrigeration, steam generation, and compressed air systems for seamless plant operations."
                backgroundClass="default-hero-bg"
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
                            <FaWater className="title-icon" />
                            Comprehensive Utility Solutions
                        </h2>
                        <p className="section-description">
                            We provide end-to-end utility solutions that form the backbone of your industrial operations. From water treatment to steam generation, our systems ensure reliable and efficient plant utilities.
                        </p>
                        <p className="section-description">
                            Our utility systems are designed for maximum efficiency, minimal environmental impact, and seamless integration with your existing infrastructure.
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
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Industrial Utilities"
                                className="service-image"
                            />
                            <div className="image-overlay">
                                <FaWater className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Utility Systems</h2>
                        <p className="section-subtitle text-center">
                            Complete range of industrial utility solutions
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon-wrapper">
                                    <service.icon className="feature-icon" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>System Features</h2>
                    <p className="section-subtitle text-center">
                        Engineered for reliability and efficiency
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
                            style={{ borderLeft: '4px solid var(--primary-500)' }}
                        >
                            <div className="feature-icon-wrapper" style={{ background: 'var(--primary-50)' }}>
                                <feature.icon className="feature-icon" style={{ color: 'var(--primary-700)' }} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
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
                        <h2>Optimize Your Plant Utilities</h2>
                        <p>Let us design utility systems that enhance efficiency and reduce operational costs.</p>
                        <a href="/contact" className="btn-large">
                            Get Started
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Utilities;
