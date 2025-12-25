import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaLightbulb, FaDraftingCompass, FaCogs, FaProjectDiagram, FaHardHat, FaWrench } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceLinks = [
        {
            name: 'Pre-Project Activities',
            path: '/services/pre-project-activities',
            icon: <FaLightbulb />,
            description: 'Concept development, market survey & business forecasting'
        },
        {
            name: 'Product Design & Development',
            path: '/services/product-development',
            icon: <FaDraftingCompass />,
            description: 'New product development & value addition'
        },
        {
            name: 'Engineering Services',
            path: '/services/engineering-services-detail',
            icon: <FaCogs />,
            description: 'Process design, plant design & equipment selection'
        },
        {
            name: 'Project Management',
            path: '/services/project-management',
            icon: <FaProjectDiagram />,
            description: 'Scope, schedule, cost & quality management'
        },
        {
            name: 'Site Activities',
            path: '/services/site-activities',
            icon: <FaHardHat />,
            description: 'Installation, piping & commissioning'
        },
        {
            name: 'Equipment Maintenance & Retrofits',
            path: '/services/maintenance-retrofits',
            icon: <FaWrench />,
            description: 'Annual maintenance & process improvements'
        }
    ];

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Engineering Services', path: '/services', hasDropdown: true },
        { name: 'Equipment Manufacturing', path: '/equipment-manufacturing' },
        { name: 'Automation', path: '/automation' },
        { name: 'Advance Technologies', path: '/advance-technologies' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -10, x: "-50%" },
        visible: {
            opacity: 1,
            y: 0,
            x: "-50%",
            transition: {
                duration: 0.2,
                staggerChildren: 0.05
            }
        },
        exit: { opacity: 0, y: -10, x: "-50%" }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`header ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="container header-container">
                <Link to="/" className="header-logo">
                    <img src="/logo.png" alt="Elation" />
                    <div className="logo-text-container" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                        <span className="logo-text" style={{ fontSize: '1.1rem' }}>Elation Engineering</span>
                        <span className="logo-text" style={{ fontSize: '0.9rem' }}>Private Limited</span>
                    </div>
                </Link>

                <ul className="header-links desktop-only">
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className={link.hasDropdown ? 'dropdown-parent' : ''}
                            onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                            onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                        >
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services')) ? 'active' : ''}`}
                            >
                                {link.name}
                                {link.hasDropdown && <FaChevronDown className="dropdown-icon" />}
                            </Link>

                            {link.hasDropdown && (
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            variants={menuVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mega-menu"
                                        >
                                            <div className="mega-menu-grid">
                                                {serviceLinks.map((service) => (
                                                    <Link
                                                        key={service.path}
                                                        to={service.path}
                                                        className="mega-menu-item"
                                                    >
                                                        <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                                                            <div className="mega-menu-icon">
                                                                {service.icon}
                                                            </div>
                                                            <div className="mega-menu-content">
                                                                <h4>{service.name}</h4>
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-menu-button mobile-only"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu"
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="mobile-nav-link"
                                        onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <div className="mobile-dropdown">
                                            {serviceLinks.map((service) => (
                                                <Link
                                                    key={service.path}
                                                    to={service.path}
                                                    className="mobile-dropdown-link"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {service.icon}
                                                    <span>{service.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
};

export default Header;
