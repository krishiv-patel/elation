import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaIndustry, FaFlask, FaSnowflake, FaTint, FaCogs, FaCookie } from 'react-icons/fa';
import './ServiceDetail.css';

const MilkProcessing = () => {
    const services = [
        {
            title: 'Liquid Milk Processing',
            description: 'Complete pasteurization and homogenization lines for market milk.',
            icon: FaTint
        },
        {
            title: 'Aseptic Processing',
            description: 'UHT treatment and aseptic packaging for long-shelf-life products.',
            icon: FaFlask
        },
        {
            title: 'Paneer & Cheese',
            description: 'Automated lines for paneer, cheese, and curd production.',
            icon: FaIndustry
        },
        {
            title: 'Ice Cream & Frozen',
            description: 'Mix preparation, freezing, and hardening systems for frozen desserts.',
            icon: FaSnowflake
        },
        {
            title: 'Indigenous Sweets Processing',
            description: 'Traditional Indian sweets processing with modern automation and quality control.',
            icon: FaCookie
        }
    ];

    const features = [
        {
            title: 'Advanced Technology',
            description: 'State-of-the-art processing equipment ensuring highest quality output and efficiency.',
            icon: FaCogs
        },
        {
            title: 'Hygienic Design',
            description: 'Food-grade stainless steel construction meeting international sanitary standards.',
            icon: FaCheckCircle
        },
        {
            title: 'Energy Efficient',
            description: 'Optimized thermal systems reducing operational costs and environmental impact.',
            icon: FaIndustry
        },
        {
            title: 'Customizable Solutions',
            description: 'Tailored processing lines designed to meet your specific production requirements.',
            icon: FaFlask
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Milk Processing"
                subtitle="Complete Turnkey Solutions"
                description="End-to-end dairy processing solutions designed for quality, efficiency, and hygiene. From reception to packaging, we deliver excellence."
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
                            <FaIndustry className="title-icon" />
                            Comprehensive Dairy Solutions
                        </h2>
                        <p className="section-description">
                            We provide end-to-end milk and dairy product processing solutions designed to meet the highest standards of quality, efficiency, and hygiene. Our expertise spans across liquid milk processing, cultured dairy products, frozen desserts, and aseptic processing technologies.
                        </p>
                        <p className="section-description">
                            Our systems are engineered to maximize yield while minimizing energy consumption and waste. Whether you are setting up a new plant or upgrading an existing one, our team of experts ensures seamless integration and superior performance.
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
                                src="/src/assets/services/milk-processing.png"
                                alt="Milk Processing Plant"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'; // Fallback image
                                }}
                            />
                            <div className="image-overlay">
                                <FaTint className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Processing Capabilities</h2>
                        <p className="section-subtitle text-center">
                            Specialized solutions for every stage of dairy production
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

            {/* Key Features / Why Choose Us */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Why Choose Our Solutions?</h2>
                    <p className="section-subtitle text-center">
                        Engineered for excellence and reliability
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
                        <h2>Ready to Upgrade Your Dairy Plant?</h2>
                        <p>Contact our experts today to discuss your requirements and get a customized proposal.</p>
                        <a href="/contact" className="btn-large">
                            Get a Quote
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MilkProcessing;
