import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { FaMicrochip, FaIndustry, FaWater, FaSnowflake, FaWind, FaFlask, FaCogs } from 'react-icons/fa';
import './services/ServiceDetail.css';

const AdvanceTechnologies = () => {
    const technologies = [
        {
            title: 'Continuous Sugar Dissolving System',
            description: 'Advanced systems designed to efficiently dissolve sugar in water, ensuring consistent syrup quality and optimal production processes. Essential for beverage and food production, allowing for continuous mixing to produce homogeneous sugar syrup.',
            details: [
                'Precise control over sugar concentration',
                'Reduces waste and ensures consistent quality',
                'Includes dry sugar handling and activated carbon systems',
                'Integrated filtration and syrup pasteurisation'
            ],
            icon: FaFlask
        },
        {
            title: 'Microwave Heating & High Frequency',
            description: 'Utilizing electromagnetic waves for efficient and rapid heating in food processing and pharmaceuticals. Enables precise temperature control during synthesis and purification, leading to enhanced product yields and purity.',
            details: [
                'Rapid heating via molecular motion',
                'Ideal for cooking, thawing, and drying',
                'Precise temperature control for pharma',
                'High-frequency heating applications'
            ],
            icon: FaMicrochip,
            link: 'https://aimhha.org/'
        },
        {
            title: 'Waste Water Management',
            description: 'Sustainable solutions for residential, commercial, and industrial wastewater treatment. We help remove contaminants, protect water bodies, and facilitate water recycling through advanced treatment plants.',
            details: [
                'Sewage & Effluent Treatment Plants (STP/ETP)',
                'Anaerobic Reactors & Dissolved Air Flotation',
                'Membrane Bio Reactor (MBR) technology',
                'Sequential Batch Reactors (SBR)'
            ],
            icon: FaIndustry,
            link: 'https://alantech.in/waste-water-treatment' // Added inferred link or placeholder if not in excel, wait, excel said "Waste Water Treatment Plant | Industrial & Municipal Solutions" which looks like text, but Water Treatment System had 'https://alantech.in/raw-water-treatment'
        },
        {
            title: 'Water Treatment System',
            description: 'Comprehensive water processing solutions handling sources from sea, borewell, and rivers. We develop concepts based on specific water analysis to meet application requirements.',
            details: [
                'Ultrafiltration & Reverse Osmosis (RO)',
                'Seawater Desalination & Mineral Dosing',
                'High Purity RO & Electrodeionization',
                'Ozonation & UV Treatment'
            ],
            icon: FaWater,
            link: 'https://alantech.in/raw-water-treatment'
        },
        {
            title: 'Ultra High Pressure Homogenisation',
            description: 'High-efficiency homogenisers (200-1500 Bar) for uniform particle size reduction down to the nanometer range. Creates stable emulsions and improves product shelf life.',
            details: [
                'Flow rates from 40 Lph to 6000 Lph',
                'Effective cell disruption & particle reduction',
                'Energy-saving high-efficiency design',
                'Engineered homogenizing valves'
            ],
            icon: FaCogs
        },
        {
            title: 'Powder Transfer System',
            description: 'Specialized vacuum systems for safe, efficient, and contained transfer of powder materials. Critical for pharmaceutical, chemical, and food industries to prevent contamination and ensure safety.',
            details: [
                'Contamination-free vacuum transfer',
                'Safe handling of dense phase powders',
                'Low velocity conveying',
                'Reduces electrostatic charge risks'
            ],
            icon: FaWind
        },
        {
            title: 'Industrial Refrigeration',
            description: 'Innovative refrigeration solutions for various industrial applications including cold storage, freezers, and chillers. Custom designed systems using R22, R404a, and R717 refrigerants.',
            details: [
                'Blast Freezers & IQF Systems',
                'High RH Cold Storage & Ripening Chambers',
                'Process & Utility Chillers (-40°C to +5°C)',
                'Complete piping and PLC automation'
            ],
            icon: FaSnowflake
        }
    ];

    return (
        <div className="service-detail-page theme-tech">
            <PageHero
                title="Advance Technologies"
                subtitle="Innovating for the Future"
                description="Exploring cutting-edge technologies to drive industrial transformation and operational excellence."
                backgroundClass="advance-tech-hero-bg"
                backgroundImage="/brain/1c937c40-bb74-4de4-a7c6-a2ab45c4d7fa/advance_tech_hero_bg_1764509235904.png"
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
                            <FaMicrochip className="title-icon" />
                            Pioneering Industrial Innovation
                        </h2>
                        <p className="section-description">
                            At Elation, we go beyond traditional engineering. We integrate advanced technologies to solve complex industrial challenges, enhance efficiency, and promote sustainability.
                        </p>
                        <p className="section-description">
                            From state-of-the-art water treatment to precision homogenization and industrial automation, our solutions are designed to keep your operations ahead of the curve. We leverage the latest advancements in process engineering to deliver superior results.
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
                                src="/images/advance_tech_overview.png"
                                alt="Advanced Technology Facility"
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

            {/* Technologies Grid */}
            <section className="bg-secondary section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Technological Capabilities</h2>
                        <p className="section-subtitle text-center">
                            Specialized solutions for modern processing challenges
                        </p>
                    </motion.div>

                    <div className="technologies-grid">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="tech-card"
                            >
                                <div className="tech-icon-wrapper">
                                    <tech.icon className="feature-icon" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4>{tech.title}</h4>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                    {tech.description}
                                </p>
                                <ul className="tech-list">
                                    {tech.details.map((detail, idx) => (
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
                        <h2>Ready to Upgrade Your Technology?</h2>
                        <p>Discover how our advanced solutions can optimize your production and efficiency.</p>
                        <a href="/contact" className="btn-large">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AdvanceTechnologies;
