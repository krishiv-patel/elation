import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaBoxOpen, FaCheckCircle, FaFlask, FaCogs } from 'react-icons/fa';
import './ServiceDetail.css';

const ProductDevelopment = () => {
    const features = [
        'Market Research & Feasibility',
        'Industrial Design & Styling',
        'Mechanical & Electronics Engineering',
        'Rapid Prototyping & Testing',
        'Design for Manufacturing (DFM)',
        'Supplier Selection & Qualification',
        'Manufacturing Support',
        'Quality Control Systems'
    ];

    const lifecycle = [
        { phase: 'Concept Development', completion: 100 },
        { phase: 'Design & Engineering', completion: 100 },
        { phase: 'Prototyping & Testing', completion: 95 },
        { phase: 'Manufacturing Launch', completion: 92 }
    ];

    return (
        <div className="service-detail-page theme-orange">
            <PageHero
                title="Product Development"
                subtitle="Innovation from Concept to Market"
                description="Transforming innovative ideas into market-ready products with our comprehensive development services covering the entire product lifecycle."
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
                            <FaCogs className="title-icon" />
                            Complete Product Lifecycle
                        </h2>
                        <p className="section-description">
                            We guide you through the entire product development journey, from initial concept validation to mass production and market launch.
                        </p>
                        <p className="section-description">
                            Our multidisciplinary team combines expertise in design, engineering, prototyping, and manufacturing to deliver products that meet market needs while being manufacturable at scale.
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
                                src="/src/assets/services/product-development.png"
                                alt="Product Development"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaFlask className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Product Development Services</h2>
                        <p className="section-subtitle text-center">
                            End-to-end support for your product vision
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

            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                        <FaBoxOpen className="title-icon" style={{ marginRight: '1rem' }} /> Lifecycle Support
                    </h2>
                </motion.div>

                <div className="technologies-grid">
                    {lifecycle.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="tech-card"
                        >
                            <h4>{item.phase}</h4>
                            <div className="progress-bar">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.completion}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="progress-fill"
                                />
                            </div>
                            <span className="progress-label">{item.completion}% Success Rate</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Launch Your Next Product</h2>
                        <p>Partner with us to bring your innovative product to life</p>
                        <a href="/contact" className="btn-large">
                            Start Development
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductDevelopment;
