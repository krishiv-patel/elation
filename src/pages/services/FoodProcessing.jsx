import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaBreadSlice, FaSeedling, FaUtensils, FaIndustry, FaShieldAlt, FaChartLine, FaCandyCane, FaMortarPestle, FaDumbbell } from 'react-icons/fa';
import foodProcessingImg from '../../assets/services/food-processing.png';
import './ServiceDetail.css';

const FoodProcessing = () => {
    const services = [
        {
            title: 'Chocolate Processing',
            description: 'Complete processing lines for chocolate manufacturing, conching, tempering, and molding.',
            icon: FaCandyCane
        },
        {
            title: 'Spices Processing',
            description: 'Advanced grinding, blending, sterilization, and packing solutions for various spices.',
            icon: FaMortarPestle
        },
        {
            title: 'Ready to Cook & Ready to Eat',
            description: 'Processing lines for convenience foods, retort pouches, instant meals, and premixes.',
            icon: FaUtensils
        },
        {
            title: 'Bakery Production',
            description: 'Automated lines for biscuits, cookies, breads, cakes, and other baked goods.',
            icon: FaBreadSlice
        },
        {
            title: 'Millet Processing',
            description: 'Specialized equipment for dehulling, polishing, and processing various types of millets.',
            icon: FaSeedling
        },
        {
            title: 'High Protein Products',
            description: 'Advanced processing solutions for plant-based proteins, protein bars, and supplements.',
            icon: FaDumbbell
        }
    ];

    const features = [
        {
            title: 'Modern Milling',
            description: 'Advanced grain processing with minimal loss and maximum quality output.',
            icon: FaIndustry
        },
        {
            title: 'Hygiene Standards',
            description: 'World-class food safety and hygiene management systems compliant with global standards.',
            icon: FaShieldAlt
        },
        {
            title: 'Scalable Solutions',
            description: 'Modular processing lines designed to grow with your business needs.',
            icon: FaChartLine
        },
        {
            title: 'Product Diversification',
            description: 'Versatile equipment capable of handling multiple product categories.',
            icon: FaUtensils
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Food Processing"
                subtitle="Comprehensive Solutions for Modern Food Manufacturing"
                description="State-of-the-art food processing solutions for grains, bakery products, ready-to-eat meals, and specialty foods."
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
                            <FaUtensils className="title-icon" />
                            Complete Processing Solutions
                        </h2>
                        <p className="section-description">
                            We offer state-of-the-art food processing solutions designed to deliver consistent quality, enhance food safety, and optimize production efficiency. From traditional grain milling to modern convenience foods, we cover the entire spectrum.
                        </p>
                        <p className="section-description">
                            Our systems are engineered to meet the evolving demands of the food industry, focusing on hygiene, energy efficiency, and product quality.
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
                                src={foodProcessingImg}
                                alt="Food Processing Plant"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaBreadSlice className="overlay-icon" />
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
                            Specialized solutions for diverse food categories
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
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Key Advantages</h2>
                    <p className="section-subtitle text-center">
                        Why our solutions stand out
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
                        <h2>Modernize Your Food Production</h2>
                        <p>Partner with us to implement cutting-edge food processing solutions tailored to your needs.</p>
                        <a href="/contact" className="btn-large">
                            Discuss Your Project
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FoodProcessing;
