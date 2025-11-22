import { motion } from 'framer-motion';
import { FaOilCan, FaFlask, FaBolt, FaTint, FaIndustry, FaPills } from 'react-icons/fa';
import './Industries.css';

const industries = [
    {
        icon: <FaOilCan />,
        title: 'Oil & Gas',
        description: 'Process control and automation solutions for upstream, midstream, and downstream operations.'
    },
    {
        icon: <FaFlask />,
        title: 'Chemicals',
        description: 'Specialized engineering for chemical processing, batch control, and safety systems.'
    },
    {
        icon: <FaBolt />,
        title: 'Power Generation',
        description: 'Control systems and instrumentation for power plants and renewable energy facilities.'
    },
    {
        icon: <FaTint />,
        title: 'Water Treatment',
        description: 'Advanced automation for water and wastewater treatment plants and distribution systems.'
    },
    {
        icon: <FaIndustry />,
        title: 'Manufacturing',
        description: 'Smart manufacturing solutions including MES, SCADA, and production optimization.'
    },
    {
        icon: <FaPills />,
        title: 'Pharmaceuticals',
        description: 'GMP-compliant automation and validation services for pharmaceutical manufacturing.'
    }
];

const Industries = () => {
    return (
        <section className="industries" id="industries">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="industries-header"
                >
                    <h2>Industries We Serve</h2>
                    <p className="industries-subtitle">
                        Delivering specialized solutions across diverse sectors
                    </p>
                </motion.div>

                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="industry-card glass-card"
                        >
                            <div className="industry-icon-wrapper">
                                <div className="industry-icon">{industry.icon}</div>
                            </div>
                            <h3 className="industry-title">{industry.title}</h3>
                            <p className="industry-description">{industry.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
