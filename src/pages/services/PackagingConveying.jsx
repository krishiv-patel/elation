import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaBoxOpen, FaCogs, FaShippingFast, FaIndustry, FaExpandArrowsAlt, FaSearch } from 'react-icons/fa';
import packagingConveyingImg from '../../assets/services/packaging-conveying.png';
import './ServiceDetail.css';

const PackagingConveying = () => {
    const services = [
        {
            title: 'PET Filling Lines',
            description: 'Complete lines with flow moulder/rinser, filler, and capper for PET bottles.',
            icon: FaBoxOpen
        },
        {
            title: 'Bottling Lines',
            description: 'Integrated systems with pre-washer, leak tester, washer, filler, capper, and sleeve applicator.',
            icon: FaIndustry
        },
        {
            title: 'Can Filling Lines',
            description: 'High-speed lines for can rinsing, filling, capping, and sleeve washing.',
            icon: FaIndustry
        },
        {
            title: 'End-of-Line Packaging',
            description: 'Shrink wrapping, labelling, and carton packing conveyor systems.',
            icon: FaBoxOpen
        },
        {
            title: 'Conveyor Systems',
            description: 'Customized screw, bucket, belt, and roller conveyors for material handling.',
            icon: FaShippingFast
        }
    ];

    const features = [
        {
            title: 'Complete Automation',
            description: 'Fully automated packaging lines for maximum efficiency and consistency.',
            icon: FaCogs
        },
        {
            title: 'Flexible Formats',
            description: 'Handle multiple package sizes and formats with quick changeover mechanisms.',
            icon: FaExpandArrowsAlt
        },
        {
            title: 'Quality Control',
            description: 'Integrated inspection systems ensuring package integrity and fill accuracy.',
            icon: FaSearch
        },
        {
            title: 'High Speed',
            description: 'Optimized throughput for large-scale production requirements.',
            icon: FaShippingFast
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Packaging & Conveying"
                subtitle="End-to-End Solutions for Product Packaging"
                description="From filling and capping to labeling and conveying, we provide integrated packaging solutions that streamline your production operations."
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
                            <FaBoxOpen className="title-icon" />
                            Complete Packaging Automation
                        </h2>
                        <p className="section-description">
                            We provide integrated packaging solutions that streamline your production operations. Our systems are engineered for reliability, speed, and flexibility, ensuring your products reach the market ready to impress.
                        </p>
                        <p className="section-description">
                            Our conveyor systems ensure smooth material handling throughout your plant, minimizing manual intervention and maximizing throughput.
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
                                src={packagingConveyingImg}
                                alt="Packaging Line"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaShippingFast className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Packaging Solutions</h2>
                        <p className="section-subtitle text-center">
                            Integrated systems for every packaging need
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
                        Designed for efficiency and reliability
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
                        <h2>Streamline Your Packaging</h2>
                        <p>Let us design a packaging solution that maximizes your efficiency and product quality.</p>
                        <a href="/contact" className="btn-large">
                            Get Started
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PackagingConveying;
