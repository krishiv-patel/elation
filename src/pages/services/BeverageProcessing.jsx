import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaWineBottle, FaLeaf, FaTint, FaGlassCheers, FaIndustry, FaCogs, FaFlask, FaTemperatureHigh, FaBoxOpen, FaWater } from 'react-icons/fa';
import './ServiceDetail.css';

const BeverageProcessing = () => {
    const services = [
        {
            title: 'Fruit Juice Processing',
            description: 'Complete lines for extraction, clarification, and pasteurization of fruit juices.',
            icon: FaTint
        },
        {
            title: 'Carbonated Soft Drinks',
            description: 'Mixing and carbonation systems for sparkling beverages and sodas.',
            icon: FaGlassCheers
        },
        {
            title: 'Aseptic Pulp Processing',
            description: 'Sterilization and aseptic packaging for fruit pulps and concentrates.',
            icon: FaLeaf
        },
        {
            title: 'Packaged Drinking Water',
            description: 'Purification, mineral addition, and bottling lines for water plants.',
            icon: FaWineBottle
        }
    ];

    const features = [
        {
            title: 'Aseptic Technology',
            description: 'Advanced aseptic processing for extended shelf life without preservatives.',
            icon: FaFlask
        },
        {
            title: 'Quality Retention',
            description: 'Preserve natural flavors, colors, and nutrients in every bottle.',
            icon: FaCheckCircle
        },
        {
            title: 'Flexible Production',
            description: 'Adaptable systems for various beverage types and packaging formats.',
            icon: FaCogs
        },
        {
            title: 'Automated Systems',
            description: 'Fully automated processing lines for consistent quality and efficiency.',
            icon: FaIndustry
        }
    ];

    const processSteps = [
        { title: 'Blending & Mixing', description: 'Precise formulation of ingredients.' },
        { title: 'Thermal Processing', description: 'Pasteurization or UHT treatment.' },
        { title: 'Carbonation', description: 'CO2 injection for sparkling drinks.' },
        { title: 'Filling & Capping', description: 'Hygienic bottling and sealing.' },
        { title: 'Packaging', description: 'Labeling, packing, and palletizing.' }
    ];

    const technologies = [
        { name: 'Hot Fill Technology', level: 95 },
        { name: 'Aseptic Filling', level: 98 },
        { name: 'Tunnel Pasteurization', level: 90 },
        { name: 'CIP/SIP Systems', level: 95 }
    ];

    return (
        <div className="service-detail-page theme-aqua">
            <PageHero
                title="Beverage Processing"
                subtitle="Advanced Solutions for Beverage Manufacturing"
                description="From fruit juices to carbonated drinks, we deliver comprehensive processing solutions that ensure product quality, safety, and efficiency."
                backgroundClass="beverage-hero-bg"
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
                            <FaGlassCheers className="title-icon" />
                            Complete Production Lines
                        </h2>
                        <p className="section-description">
                            We offer turnkey solutions for the beverage industry, covering everything from raw material handling to final packaging. Our systems are designed to handle diverse beverage types while maintaining the highest standards of hygiene and taste.
                        </p>
                        <p className="section-description">
                            Whether you are producing fresh juices, energy drinks, or bottled water, our technology ensures optimal resource utilization and product stability.
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
                                src="/src/assets/services/beverage-processing.png"
                                alt="Beverage Processing Line"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaWineBottle className="overlay-icon" />
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
                            Specialized solutions for every type of beverage
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

            {/* Process Flow */}
            <section className="container section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>
                        <FaCogs className="title-icon" style={{ marginRight: '1rem' }} /> Production Process
                    </h2>
                    <p className="section-subtitle text-center">
                        Streamlined workflow from blending to bottling
                    </p>
                </motion.div>

                <div className="process-grid">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="process-card"
                        >
                            <div className="process-number">{index + 1}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technologies */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Key Technologies</h2>
                        <p className="section-subtitle text-center">
                            Advanced systems for superior quality
                        </p>
                    </motion.div>

                    <div className="technologies-grid">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="tech-card"
                            >
                                <h4>{tech.name}</h4>
                                <div className="progress-bar">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${tech.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className="progress-fill"
                                    />
                                </div>
                                <span className="progress-label">{tech.level}% Efficiency</span>
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
                        <h2>Launch Your Beverage Line</h2>
                        <p>Get expert guidance on setting up or upgrading your beverage processing facility.</p>
                        <a href="/contact" className="btn-large">
                            Contact Us Today
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BeverageProcessing;
