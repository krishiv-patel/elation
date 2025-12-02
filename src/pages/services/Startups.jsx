import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaRocket, FaCheckCircle, FaLightbulb, FaHandshake, FaFlask, FaAppleAlt, FaCertificate, FaCheese, FaCoffee, FaUtensils, FaBaby, FaLemon, FaCookieBite, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import './ServiceDetail.css';

const Startups = () => {
    const preProjectServices = [
        'Concept Development',
        'Market Survey',
        'Business Forecasting',
        'Business Case Development',
        'Stakeholder Analysis',
        'Project Report'
    ];

    const productDevelopment = [
        'New Product Development',
        'Value Addition to Existing Products',
        'Modernization of Indigenous Products',
        'Localization of Exotic Products',
        'Product Standardization',
        'Product Testing',
        'Patent Processing',
        'Streamlining Compliances'
    ];

    const productCategories = [
        'Milk and Milk Products',
        'Beverages & Non-Alcoholic Beers',
        'Ready to Eat/Cook Products',
        'Baby Food & Breakfast Premixes',
        'Fruit Pulp Products',
        'Chocolate & Bakery Products',
        'Fruit & Vegetable Powders',
        'Immunity Booster & Health Care Products'
    ];

    const certifications = [
        'FSSAI Registration & License (Ver.4)',
        'ISO 9001:2015 - Quality Management',
        'ISO 22000:2018 - Food Safety',
        'HACCP - Hazard Analysis',
        'GMP & GHP - Good Practices'
    ];

    const getProductIcon = (index) => {
        const icons = [FaCheese, FaCoffee, FaUtensils, FaBaby, FaLemon, FaCookieBite, FaSeedling, FaShieldAlt];
        return icons[index];
    };

    return (
        <div className="service-detail-page theme-orange">
            <PageHero
                title="Startup Handholding"
                subtitle="Accelerating Food Industry Innovation"
                description="Comprehensive technical and strategic support for food industry startups, from concept development to market launch, product certifications, and scaling operations."
                backgroundClass="startups-hero-bg"
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
                            <FaRocket className="title-icon" />
                            End-to-End Startup Support
                        </h2>
                        <p className="section-description">
                            We partner with food industry startups to provide the technical expertise and strategic guidance needed to transform innovative ideas into successful businesses.
                        </p>
                        <p className="section-description">
                            From validating technical feasibility and product development to manufacturing setup and certifications, our experienced team provides complete lifecycle support with NDA security and flexible approaches.
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
                                src="/src/assets/services/startups.png"
                                alt="Startup Support"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaLightbulb className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pre-Project Services */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                            <FaLightbulb className="title-icon" style={{ marginRight: '0.5rem' }} />
                            Pre-Project Activities
                        </h2>
                        <p className="section-subtitle text-center">
                            Strategic planning and feasibility analysis
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {preProjectServices.map((service, index) => (
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
                                <h3>{service}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Development */}
            <section className="container section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                            <FaFlask className="title-icon" style={{ marginRight: '0.5rem' }} />
                            Product Design & Development
                        </h2>
                        <p className="section-subtitle text-center">
                            Advanced food technology lab with expert product development
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {productDevelopment.map((service, index) => (
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
                                <h3>{service}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                            <FaAppleAlt className="title-icon" style={{ marginRight: '0.5rem' }} />
                            Food Product Categories
                        </h2>
                        <p className="section-subtitle text-center">
                            Expertise across diverse food product segments
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {productCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon-wrapper">
                                    {(() => {
                                        const IconComponent = getProductIcon(index);
                                        return <IconComponent className="feature-icon" />;
                                    })()}
                                </div>
                                <h3>{category}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="container section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                            <FaCertificate className="title-icon" style={{ marginRight: '0.5rem' }} />
                            Plant Audits & Certifications
                        </h2>
                        <p className="section-subtitle text-center">
                            Comprehensive certification support for compliance and quality
                        </p>
                    </motion.div>

                    <div className="features-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="feature-card"
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <div className="feature-icon-wrapper" style={{ marginBottom: 0, marginRight: '1rem' }}>
                                    <FaCertificate className="feature-icon" />
                                </div>
                                <h3 style={{ margin: 0 }}>{cert}</h3>
                            </motion.div>
                        ))}
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
                        <h2>Ready to Launch Your Food Startup?</h2>
                        <p>Let's turn your innovative idea into a thriving business</p>
                        <a href="/contact" className="btn-large">
                            Schedule a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Startups;
