import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaTasks, FaUserTie, FaProjectDiagram, FaClock } from 'react-icons/fa';
import './ServiceDetail.css';

const ProjectManagement = () => {
    const areas = [
        'Scope Management',
        'Schedule Management',
        'Cost Management',
        'Quality Management',
        'Resource Management',
        'Communication Management',
        'Risk Management',
        'Procurement Management',
        'Stakeholder Management',
        'Project Integration Management',
        'Project Document'
    ];

    return (
        <div className="service-detail-page theme-purple">
            <PageHero
                title="Project Management"
                subtitle="Delivering Excellence on Time"
                description="Systematic approach to planning, organizing, and controlling resources to ensure timely achievement of defined goals."
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
                            <FaTasks className="title-icon" />
                            PMI Aligned Management
                        </h2>
                        <p className="section-description">
                            Project management ensures proper planning of tasks and the timely achievement of defined goals. It serves as a systematic approach to planning, organizing, and controlling resources, fostering effective collaboration between team members and stakeholders.
                        </p>
                        <p className="section-description">
                            The importance of project management extends across various sectors, facilitating efficient delivery while minimizing risks. We provide comprehensive project management services in alignment with PMI standards.
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
                                src="/src/assets/services/project-management.png"
                                alt="Project Management"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaProjectDiagram className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Management Areas</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive coverage of all project aspects
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {areas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon-wrapper">
                                    <FaUserTie className="feature-icon" />
                                </div>
                                <h3>{area}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectManagement;
