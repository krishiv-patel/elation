import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaLeaf, FaCarrot, FaAppleAlt, FaIndustry, FaRecycle, FaTemperatureLow } from 'react-icons/fa';
import fruitVegetableImg from '../../assets/services/fruit-vegetable.png';
import './ServiceDetail.css';

const FruitVegetableProcessing = () => {
    const services = [
        {
            title: 'Canning Lines',
            description: 'Complete canning solutions for fruits and vegetables ensuring long shelf life.',
            icon: FaIndustry
        },
        {
            title: 'Dehydration & Drying',
            description: 'Advanced drying systems for producing dried fruits, vegetables, and powders.',
            icon: FaTemperatureLow
        },
        {
            title: 'Fresh Packaging',
            description: 'Sorting, grading, and packaging lines for fresh produce.',
            icon: FaLeaf
        },
        {
            title: 'Frozen Processing',
            description: 'IQF and blast freezing technologies for frozen fruit and vegetable products.',
            icon: FaCarrot
        },
        {
            title: 'Value Added Products',
            description: 'Production lines for jams, jellies, pickles, ketchups, and sauces.',
            icon: FaAppleAlt
        }
    ];

    const features = [
        {
            title: 'Preservation Excellence',
            description: 'Multiple preservation methods to extend shelf life while retaining nutrition.',
            icon: FaCheckCircle
        },
        {
            title: 'Minimal Processing',
            description: 'Gentle processing techniques that preserve natural taste and texture.',
            icon: FaLeaf
        },
        {
            title: 'Value Addition',
            description: 'Transform raw produce into premium value-added products for higher margins.',
            icon: FaAppleAlt
        },
        {
            title: 'Waste Reduction',
            description: 'Efficient systems that minimize waste and maximize yield from raw materials.',
            icon: FaRecycle
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Fruit & Vegetable Processing"
                subtitle="Innovative Solutions for Fresh Produce"
                description="Transform fresh produce into shelf-stable, value-added products. From farm-fresh canning to frozen foods and gourmet preserves, we provide complete processing lines."
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
                            <FaLeaf className="title-icon" />
                            Preserve Nature's Goodness
                        </h2>
                        <p className="section-description">
                            Our fruit and vegetable processing solutions help you transform fresh produce into shelf-stable, value-added products. We understand the delicate nature of these raw materials and design our systems to handle them with care.
                        </p>
                        <p className="section-description">
                            Whether you need a small-scale jam production unit or a large-scale frozen food plant, our technologies ensure that the nutritional value, taste, and texture of the produce are preserved.
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
                                src={fruitVegetableImg}
                                alt="Fruit and Vegetable Processing"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaCarrot className="overlay-icon" />
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
                            Comprehensive solutions for the produce industry
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
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Key Benefits</h2>
                    <p className="section-subtitle text-center">
                        Why partner with us for your processing needs
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
                        <h2>Start Processing Fresh Produce</h2>
                        <p>Explore our fruit and vegetable processing solutions and discover how we can help you create premium products.</p>
                        <a href="/contact" className="btn-large">
                            Request a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FruitVegetableProcessing;
