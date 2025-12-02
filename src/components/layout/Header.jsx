import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCog, FaHeartbeat, FaPencilRuler, FaRocket, FaChartLine, FaBoxOpen, FaSearch } from 'react-icons/fa';
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
            name: 'Automation Systems',
            path: '/services/automation',
            icon: <FaCog />,
            description: 'Industrial automation & control systems'
        },
        {
            name: 'Healthcare Solutions',
            path: '/services/healthcare',
            icon: <FaHeartbeat />,
            description: 'Pharmaceutical & medical device engineering'
        },
        {
            name: 'Engineering Design',
            path: '/services/design',
            icon: <FaPencilRuler />,
            description: '3D modeling, CAD & technical documentation'
        },
        {
            name: 'Product Development',
            path: '/services/product-development',
            icon: <FaBoxOpen />,
            description: 'End-to-end product lifecycle management'
        },
        {
            name: 'Process Excellence',
            path: '/services/ppso',
            icon: <FaChartLine />,
            description: 'PPSO, lean manufacturing & optimization'
        },
        {
            name: 'Startup Handholding',
            path: '/services/startups',
            icon: <FaRocket />,
            description: 'Technical support for emerging companies'
        }
    ];

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Equipment Manufacturing', path: '/equipment-manufacturing' },
        { name: 'Automation', path: '/services/automation' },
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
                    <span className="logo-text">Elation</span>
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
