import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaChartLine, FaCheckCircle, FaShieldAlt, FaTachometerAlt, FaCogs, FaLightbulb } from 'react-icons/fa';
import './ServiceDetail.css';

const PPSO = () => {
    const optimizationAreas = [
        {
            name: 'Process Optimization',
            items: ['Process Audit', 'Process Flow Improvement', 'Process Time Optimization', 'New Processing Techniques', 'Government Compliances', 'Patent Processing']
        },
        {
            name: 'Layout Optimization',
            items: ['Equipment Footprints', '3D Drawings of Existing Systems', 'Future Expansion Plans', 'Material Movement Time Reduction']
        },
        {
            name: 'Skills Optimization',
            items: ['Skills Matrix Preparation', 'Future Skills Requirements', 'Training Programs', 'Human Resource Alignment']
        },
        {
            name: 'Equipment Optimization',
            items: ['Equipment Selection', 'Critical Equipment Maintenance', 'Annual Maintenance Contract', 'System Modifications', 'Automation of Existing Systems']
        },
        {
            name: 'Utilities Optimization',
            items: ['Energy Audit', 'Existing Utility Survey', 'Utility Expansion Estimation', 'Equipment Design & Installation']
        }
    ];

    const getIcon = (index) => {
        const icons = [FaChartLine, FaLightbulb, FaShieldAlt, FaCogs, FaTachometerAlt];
        return icons[index];
    };

    return (
        <div className="service-detail-page theme-green">
            <PageHero
                title="Process Excellence (PPSO)"
                subtitle="Plant Process & Safety Optimization"
                description="Comprehensive optimization strategies to maximize efficiency, enhance safety, and minimize waste in your industrial operations through systematic analysis across five key areas."
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
                            Our PPSO services focus on enhancing the operational efficiency and safety of your industrial facilities through systematic analysis and optimization across five critical areas.
                        </p>
                        <p className="section-description">
                            From process improvements to utility optimization, we employ data-driven methodologies and industry best practices to identify opportunities and implement sustainable solutions that deliver measurable results.
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
                                src="/src/assets/services/ppso.png"
                                alt="Process Optimization"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaShieldAlt className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Optimization Areas */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Process Plant System Optimization</h2>
                        <p className="section-subtitle text-center">
                            Five key optimization areas for maximum operational efficiency
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {optimizationAreas.map((area, index) => {
                            const IconComponent = getIcon(index);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="feature-card"
                                >
                                    <div className="feature-icon-wrapper">
                                        <IconComponent className="feature-icon" />
                                    </div>
                                    <h3>{area.name}</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                        {area.items.map((item, itemIndex) => (
                                            <li key={itemIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: 'var(--success)', marginTop: '4px', fontSize: '0.8em' }}>●</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
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
                        <h2>Optimize Your Operations Today</h2>
                        <p>Unlock efficiency gains and safety improvements in your facility</p>
                        <a href="/contact" className="btn-large">
                            Request an Audit
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PPSO;
