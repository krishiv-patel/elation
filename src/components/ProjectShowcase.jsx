import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaIndustry, FaHeartbeat, FaRocket, FaCogs } from 'react-icons/fa';
import './ProjectShowcase.css';

const projects = [
    {
        id: 1,
        title: "Automated Assembly Line",
        category: "Automation",
        client: "AutoTech Industries",
        image: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        icon: <FaIndustry />,
        description: "Full-scale automation of vehicle assembly line increasing throughput by 200%."
    },
    {
        id: 2,
        title: "Pharma Cleanroom Facility",
        category: "Healthcare",
        client: "MediLife Solutions",
        image: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
        icon: <FaHeartbeat />,
        description: "ISO 7 cleanroom design and validation for sterile injectable manufacturing."
    },
    {
        id: 3,
        title: "Smart Warehouse System",
        category: "Automation",
        client: "LogisticsPro",
        image: "linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)",
        icon: <FaCogs />,
        description: "IoT-enabled inventory management and automated guided vehicle (AGV) system."
    },
    {
        id: 4,
        title: "MedTech Device Prototype",
        category: "Product Development",
        client: "HealthInnovate",
        image: "linear-gradient(135deg, #92400e 0%, #f59e0b 100%)",
        icon: <FaRocket />,
        description: "Rapid prototyping and testing of a next-gen wearable health monitor."
    },
    {
        id: 5,
        title: "Process Optimization",
        category: "PPSO",
        client: "ChemCorp",
        image: "linear-gradient(135deg, #166534 0%, #4ade80 100%)",
        icon: <FaIndustry />,
        description: "Implementation of Lean Six Sigma methodologies reducing waste by 35%."
    },
    {
        id: 6,
        title: "Startup Incubation",
        category: "Startups",
        client: "GreenEnergy",
        image: "linear-gradient(135deg, #5b21b6 0%, #8b5cf6 100%)",
        icon: <FaRocket />,
        description: "End-to-end technical mentorship for a renewable energy startup."
    }
];

const categories = ["All", "Automation", "Healthcare", "Product Development", "PPSO", "Startups"];

const ProjectShowcase = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="project-showcase-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Delivering excellence across industries</p>
                </motion.div>

                <div className="category-filter">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="project-card"
                            >
                                <div className="project-image" style={{ background: project.image }}>
                                    <div className="project-icon-overlay">
                                        {project.icon}
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-client">Client: {project.client}</p>
                                    <p className="project-description">{project.description}</p>
                                    <a href="/contact" className="project-link">
                                        View Case Study <FaArrowRight />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
