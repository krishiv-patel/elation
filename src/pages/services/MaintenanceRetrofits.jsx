import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaWrench, FaSyncAlt, FaChartLine, FaCogs } from 'react-icons/fa';
import './ServiceDetail.css';

const MaintenanceRetrofits = () => {
    const maintenanceItems = [
        'Homogeniser',
        'Steriliser',
        'Pasteuriser',
        'Process pump',
        'Filling Machines',
        'Automation System'
    ];

    const retrofitItems = [
        'Adding new products',
        'Increasing performance of existing equipment',
        'Complying statutory requirement'
    ];

    return (
        <div className="service-detail-page theme-blue">
            <PageHero
                title="Equipment Maintenance & Retrofits"
                subtitle="Ensuring Reliability & Longevity"
                description="Regular maintenance and timely retrofits to extend machinery lifespan and incorporate modern technologies."
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
                            <FaWrench className="title-icon" />
                            Reliable Operations
                        </h2>
                        <p className="section-description">
                            Regular maintenance prevents unexpected breakdowns, ensuring equipment operates reliably and meets production or operational targets. Proper maintenance and timely retrofits extend the lifespan of machinery, reducing the need for frequent replacements and minimizing capital expenditure.
                        </p>
                        <p className="section-description">
                            Additionally, retrofitting enables older equipment to incorporate modern technologies, enhancing functionality, automation, and compatibility with current processes.
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
                                src="/src/assets/services/maintenance.png"
                                alt="Maintenance Services"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaSyncAlt className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-secondary section-padding">
                <div className="container">
                    <div className="content-grid-2col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="section-title" style={{ justifyContent: 'center', fontSize: '1.8rem' }}>Annual Maintenance</h3>
                            <div className="features-list-center">
                                {maintenanceItems.map((item, index) => (
                                    <div key={index} className="feature-item-simple">
                                        <FaCogs className="feature-icon-simple" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="section-title" style={{ justifyContent: 'center', fontSize: '1.8rem' }}>Process Improvement</h3>
                            <div className="features-list-center">
                                {retrofitItems.map((item, index) => (
                                    <div key={index} className="feature-item-simple">
                                        <FaChartLine className="feature-icon-simple" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MaintenanceRetrofits;
