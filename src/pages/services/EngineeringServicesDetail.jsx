import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCogs, FaDraftingCompass, FaIndustry, FaTools } from 'react-icons/fa';
import './ServiceDetail.css';

const EngineeringServicesDetail = () => {
    const services = [
        'Process Design',
        'Plant Design',
        'Process and Utility Equipment Design',
        'Equipment Selection',
        'Vendor Selection and Development',
        'Estimation of Bill of Material',
        'Installation Activities',
        'Product Trials',
        'Maintenance System',
        'Engineering Documentation'
    ];

    return (
        <div className="service-detail-page theme-teal">
            <PageHero
                title="Engineering Services"
                subtitle="Optimizing Efficiency & Innovation"
                description="Specialized expertise in engineering solutions to drive efficiency, safety, and innovation across diverse industries."
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
                            <FaCogs className="title-icon" />
                            Comprehensive Engineering Solutions
                        </h2>
                        <p className="section-description">
                            We provide specialized expertise in engineering solutions to drive efficiency, safety, and innovation. Our engineering services are essential for optimizing processes, enhancing product quality, and reducing costs across diverse industries.
                        </p>
                        <p className="section-description">
                            They also play a critical role in promoting sustainability, ensuring safety, and maintaining regulatory compliance. By leveraging advanced technologies, we further amplify efficiency, innovation, and long-term operational excellence.
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
                                src="/src/assets/services/engineering-services.png"
                                alt="Engineering Services"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaDraftingCompass className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Engineering Capabilities</h2>
                        <p className="section-subtitle text-center">
                            End-to-end engineering support for your facility
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
                                    <FaIndustry className="feature-icon" />
                                </div>
                                <h3>{service}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EngineeringServicesDetail;
