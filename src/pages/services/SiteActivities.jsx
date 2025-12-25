import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaHardHat, FaTools, FaCheckDouble, FaFileContract } from 'react-icons/fa';
import './ServiceDetail.css';

const SiteActivities = () => {
    const activities = [
        'Installation of process and utility equipment',
        'Interconnecting piping',
        'Site work quality control',
        'Site safety system',
        'Statutory requirements and certifications',
        'Process and utility testing',
        'Commissioning of process plant',
        'Site resource management',
        'Site work documentation'
    ];

    return (
        <div className="service-detail-page theme-orange">
            <PageHero
                title="Site Activities"
                subtitle="Excellence in Execution"
                description="Complete package of site activities including installation, piping, and commissioning with a focus on safety and quality."
                backgroundClass="service-hero-bg"
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
                            <FaHardHat className="title-icon" />
                            On-Site Execution & Safety
                        </h2>
                        <p className="section-description">
                            We provide a complete package of site activities, including unloading, unpacking, shifting, installation, piping, and commissioning of equipment. On-site activities are critical for enforcing safety protocols and preventing accidents, ensuring the wellbeing of workers and compliance with regulatory standards.
                        </p>
                        <p className="section-description">
                            Our trained site engineers closely monitor workmanship, materials, and methods to ensure that all site activities meet design specifications and quality requirements.
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
                                src="/src/assets/services/site-activities.png"
                                alt="Site Activities"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaTools className="overlay-icon" />
                            </div>
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Site Services</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive site management from start to finish
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon-wrapper">
                                    <FaCheckDouble className="feature-icon" />
                                </div>
                                <h3>{activity}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SiteActivities;
