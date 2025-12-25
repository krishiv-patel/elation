import { motion } from 'framer-motion';
import {
    FaCogs,
    FaLightbulb,
    FaDraftingCompass,
    FaProjectDiagram,
    FaHardHat,
    FaWrench
} from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaLightbulb />,
        title: 'Pre-Project Activities',
        description: 'Concept development, market survey, business forecasting, stakeholder analysis, and comprehensive project reports.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        icon: <FaDraftingCompass />,
        title: 'Product Design & Development',
        description: 'New product development, value addition, modernization of indigenous products, and product standardization.',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        icon: <FaCogs />,
        title: 'Engineering Services',
        description: 'Process design, plant design, equipment design & selection, vendor development, and engineering documentation.',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        icon: <FaProjectDiagram />,
        title: 'Project Management',
        description: 'Scope, schedule, cost, quality, resource, risk, and stakeholder management aligned with PMI standards.',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        icon: <FaHardHat />,
        title: 'Site Activities',
        description: 'Installation, piping, commissioning, site safety, statutory requirements, and site work quality control.',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
        icon: <FaWrench />,
        title: 'Equipment Maintenance & Retrofits',
        description: 'Annual maintenance for homogenisers, sterilisers, pasteurisers, filling machines, and process improvement solutions.',
        gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    }
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    return (
        <section className="services" id="services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="services-header"
                >
                    <h2>Engineering Services</h2>
                    <p className="services-subtitle">
                        Comprehensive engineering solutions tailored to your industry's unique challenges
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="services-grid"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="service-card glass-card"
                        >
                            <div
                                className="service-icon"
                                style={{ background: service.gradient }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <motion.div
                                className="service-hover-line"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ background: service.gradient }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
