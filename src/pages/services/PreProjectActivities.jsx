import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaLightbulb, FaChartLine, FaClipboardList, FaSearch } from 'react-icons/fa';
import './ServiceDetail.css';

const PreProjectActivities = () => {
    const activities = [
        'Concept Development',
        'Market Survey',
        'Business Forecasting',
        'Business Case',
        'Stakeholder Analysis',
        'Project Report'
    ];

    return (
        <div className="service-detail-page theme-blue">
            <PageHero
                title="Pre-Project Activities"
                subtitle=" laying the Foundation for Success"
                description="Comprehensive support from concept development to feasibility analysis, ensuring every detail is strategically planned for long-term success in the food and beverage sector."
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
                            <FaLightbulb className="title-icon" />
                            Strategic Planning & Analysis
                        </h2>
                        <p className="section-description">
                            The pre-project phase is crucial for establishing a strong foundation in the food and beverage sector. We provide comprehensive support throughout all pre-project activities, ensuring that every detail — from concept development to feasibility analysis — is strategically planned for long-term success.
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
                                src="/src/assets/services/pre-project.png"
                                alt="Pre-Project Activities"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaChartLine className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Pre-Project Services</h2>
                        <p className="section-subtitle text-center">
                            Detailed analysis and planning to minimize risk and maximize ROI
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
                                    <FaClipboardList className="feature-icon" />
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

export default PreProjectActivities;
