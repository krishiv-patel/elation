import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/shared/PageHero';
import { FaCheckCircle, FaChalkboardTeacher, FaFileContract, FaChartLine, FaUsers, FaCogs, FaHandshake } from 'react-icons/fa';
import './ServiceDetail.css';

const ConsultancyTraining = () => {
    const services = [
        {
            title: 'Technical Consultancy',
            description: 'Expert advice for food processing projects, from concept to commissioning.',
            icon: FaCogs
        },
        {
            title: 'FSSAI Licensing',
            description: 'Complete support for FSSAI licensing and regulatory compliance.',
            icon: FaFileContract
        },
        {
            title: 'Process Optimization',
            description: 'Analysis and improvement of existing processes to enhance efficiency and yield.',
            icon: FaChartLine
        },
        {
            title: 'Staff Training',
            description: 'Comprehensive training programs for operators, supervisors, and managers.',
            icon: FaChalkboardTeacher
        },
        {
            title: 'Feasibility Studies',
            description: 'Detailed project reports (DPR) and feasibility studies for new ventures.',
            icon: FaChartLine
        },
        {
            title: 'Quality Management',
            description: 'Implementation of QMS, HACCP, and other food safety management systems.',
            icon: FaCheckCircle
        },
        {
            title: 'Vendor Management',
            description: 'Assistance in equipment selection and vendor negotiations.',
            icon: FaHandshake
        }
    ];

    const features = [
        {
            title: 'Expert Guidance',
            description: 'Leverage decades of industry experience for your project success.',
            icon: FaUsers
        },
        {
            title: 'Customized Training',
            description: 'Tailored training programs designed for your specific equipment and team needs.',
            icon: FaChalkboardTeacher
        },
        {
            title: 'Compliance Support',
            description: 'Navigate complex regulatory requirements with confidence and ease.',
            icon: FaFileContract
        },
        {
            title: 'Ongoing Support',
            description: 'Continuous assistance and troubleshooting even after project completion.',
            icon: FaHandshake
        }
    ];

    return (
        <div className="service-detail-page">
            <PageHero
                title="Consultancy & Training"
                subtitle="Expert Guidance for Your Food Processing Journey"
                description="Beyond equipment, we provide comprehensive consultancy and training services to ensure your food processing venture succeeds."
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
                            <FaUsers className="title-icon" />
                            Your Trusted Advisory Partner
                        </h2>
                        <p className="section-description">
                            We provide comprehensive consultancy and training services to ensure your food processing venture succeeds. From project conception to operational excellence, our experts guide you every step of the way.
                        </p>
                        <p className="section-description">
                            Our training programs empower your workforce with the skills and knowledge needed to operate and maintain your plant efficiently.
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
                                src="/src/assets/services/consultancy-training.png"
                                alt="Consultancy and Training"
                                className="service-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            <div className="image-overlay">
                                <FaChalkboardTeacher className="overlay-icon" />
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
                        <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Our Services</h2>
                        <p className="section-subtitle text-center">
                            Comprehensive support for your business
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
                    <h2 className="section-title text-center" style={{ justifyContent: 'center' }}>Why Work With Us?</h2>
                    <p className="section-subtitle text-center">
                        Experience the difference of expert guidance
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
                        <h2>Need Expert Advice?</h2>
                        <p>Schedule a consultation with our food processing experts to discuss your project requirements.</p>
                        <a href="/contact" className="btn-large">
                            Book a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ConsultancyTraining;
