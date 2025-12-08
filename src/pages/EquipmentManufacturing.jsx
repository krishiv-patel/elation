import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { FaIndustry, FaFire, FaCog, FaWarehouse, FaFlask } from 'react-icons/fa';
import './services/ServiceDetail.css';

const EquipmentManufacturing = () => {
    const capabilities = [
        {
            title: 'Pressure Vessels',
            description: 'With our extensive design and fabrication expertise, we offer durable and robust Pressure Vessels. Our range of Pressure Vessels is crafted from premium-grade raw materials and manufactured in compliance with global quality standards to ensure maximum performance, reliability, and efficiency.',
            details: [
                'Premium-grade raw materials',
                'Global quality standards compliance',
                'Maximum performance & reliability',
                'Long-term industrial use design'
            ],
            icon: FaIndustry
        },
        {
            title: 'Heat Exchangers',
            description: 'We believe that customization is key to delivering the best solutions. Backed by extensive experience in thermal design and manufacturing of heat exchangers, we offer a wide range of products including Shell and Tube Heat Exchangers, Corrugated Tube Heat Exchangers, and Spiral Heat Exchangers.',
            details: [
                'Shell and Tube Heat Exchangers',
                'Corrugated Tube Heat Exchangers',
                'Spiral Heat Exchangers',
                'Energy-efficient & reliable heat transfer'
            ],
            icon: FaFire
        },
        {
            title: 'Agitated Tanks',
            description: 'Agitator Tanks are used for dispersing, suspending, emulsifying, and homogenizing liquids and pastes. We design and manufacture a wide range of agitators suitable for various processes in the pharmaceutical, chemical, food, cosmetics, and related industries.',
            details: [
                'Mixing, blending, dissolution & dispersion',
                'Homogenization & reaction processes',
                'Fermentation, oxidation & digestion',
                'Emulsification of liquids & pastes'
            ],
            icon: FaCog
        },
        {
            title: 'Storage Silos',
            description: 'We design and supply storage silos and tanks that play a pivotal role in maintaining product quality. Each unit is engineered with precision to meet the stringent requirements of hygiene, temperature control, and efficient drainage.',
            details: [
                'Superior hygiene & corrosion resistance',
                'Temperature & level control systems',
                'Agitation mechanisms available',
                'Capacities from 1,000 L to 150,000 L'
            ],
            icon: FaWarehouse
        },
        {
            title: 'Reactors',
            description: 'With the support of our expert team, we design and manufacture a wide range of reactors that are highly scalable—suitable for both small-scale laboratory applications and large-scale industrial processes.',
            details: [
                'Stainless steel construction',
                'Integrated coil system for temperature control',
                'High-quality components & modern machinery',
                'Precision-built coil vessels'
            ],
            icon: FaFlask
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Equipment Manufacturing"
                subtitle="Precision Engineering & Fabrication"
                description="State-of-the-art manufacturing solutions for industrial equipment, ensuring durability, efficiency, and compliance with global standards."
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
                            World-Class Manufacturing Excellence
                        </h2>
                        <p className="section-description">
                            At Elation, we combine precision engineering with advanced fabrication techniques to deliver industrial equipment that exceeds expectations. Our manufacturing facilities are equipped with state-of-the-art machinery and staffed by experienced engineers.
                        </p>
                        <p className="section-description">
                            From pressure vessels to heat exchangers, every piece of equipment we manufacture undergoes rigorous quality control to ensure it meets international standards and delivers reliable performance for years to come.
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
                                src="/images/equipment_manufacturing_hero.png"
                                alt="Equipment Manufacturing Facility"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaIndustry className="overlay-icon" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Manufacturing Capabilities</h2>
                        <p className="section-subtitle text-center">
                            Precision-engineered solutions for diverse industrial applications
                        </p>
                    </motion.div>

                    <div className="technologies-grid">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="tech-card"
                            >
                                <div className="tech-icon-wrapper">
                                    <cap.icon className="feature-icon" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4>{cap.title}</h4>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                    {cap.description}
                                </p>
                                <ul className="tech-list">
                                    {cap.details.map((detail, idx) => (
                                        <li key={idx} className="tech-list-item">
                                            <span className="tech-list-bullet">●</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
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
                        <h2>Ready to Build Your Custom Equipment?</h2>
                        <p>Let's discuss how our manufacturing expertise can bring your industrial vision to life.</p>
                        <a href="/contact" className="btn-large">
                            Request a Quote
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EquipmentManufacturing;
