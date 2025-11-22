import { motion } from 'framer-motion';
import {
    FaCogs,
    FaHeart,
    FaDraftingCompass,
    FaRocket,
    FaChartLine,
    FaBuilding,
    FaIndustry,
    FaMicrochip
} from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaMicrochip />,
        title: 'Automation Systems',
        description: 'Advanced industrial automation solutions including SCADA, PLC programming, and control systems integration.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        icon: <FaHeart />,
        title: 'Healthcare Solutions',
        description: 'Specialized engineering solutions for healthcare facilities, medical equipment, and pharmaceutical processes.',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        icon: <FaDraftingCompass />,
        title: 'Engineering Design',
        description: 'Comprehensive design services from concept to detailed engineering, including 3D modeling and technical documentation.',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        icon: <FaRocket />,
        title: 'Startup Handholding',
        description: 'End-to-end support for startups from ideation to market launch, including technical consulting and mentorship.',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        icon: <FaChartLine />,
        title: 'Process Excellence',
        description: 'Process optimization, performance enhancement, and efficiency improvement strategies for industrial operations.',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
        icon: <FaBuilding />,
        title: 'Corporate Solutions',
        description: 'Tailored engineering and consulting services for corporate clients across various industries.',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        icon: <FaIndustry />,
        title: 'Equipment Fabrication',
        description: 'Custom equipment design and fabrication services for specialized industrial applications.',
        gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    },
    {
        icon: <FaCogs />,
        title: 'Project Management',
        description: 'Comprehensive project management services ensuring timely delivery and optimal resource utilization.',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
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
                    <h2>Our Services</h2>
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
