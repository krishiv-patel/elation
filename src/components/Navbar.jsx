import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const location = useLocation();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Robust Body Scroll Lock
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('no-scroll');
            document.documentElement.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        }

        // Cleanup
        return () => {
            document.body.classList.remove('no-scroll');
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Engineering Services',
            path: '/services',
            dropdown: [
                { name: 'Pre-Project Activities', path: '/services/pre-project-activities' },
                { name: 'Product Design & Development', path: '/services/product-development' },
                { name: 'Engineering Services', path: '/services/engineering-services-detail' },
                { name: 'Project Management', path: '/services/project-management' },
                { name: 'Site Activities', path: '/services/site-activities' },
                { name: 'Equipment Maintenance', path: '/services/maintenance-retrofits' }
            ]
        },
        { name: 'Equipment Manufacturing', path: '/equipment-manufacturing' },
        { name: 'Automation', path: '/automation' },
        { name: 'Advance Technologies', path: '/advance-technologies' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const isActive = (path) => {
        if (path === location.pathname) return true;
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    const toggleMobileDropdown = (name) => {
        setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/logo.png" alt="Elation" />
                    <span className="logo-text">Elation Engineering Pvt. Ltd.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name} className={link.dropdown ? 'has-dropdown' : ''}>
                            <Link
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="active-indicator"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>

                            {link.dropdown && (
                                <ul className="dropdown-menu">
                                    {link.dropdown.map((subLink) => (
                                        <li key={subLink.name}>
                                            <Link to={subLink.path} className="dropdown-link">
                                                {subLink.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button
                    className={`mobile-menu-button mobile-only ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Clean Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-overlay"
                    >
                        <ul className="mobile-menu-list">
                            {navLinks.map((link) => (
                                <li key={link.name} className="mobile-item">
                                    {link.dropdown ? (
                                        <div>
                                            <div
                                                className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                                onClick={() => toggleMobileDropdown(link.name)}
                                            >
                                                {link.name}
                                                <FaChevronDown className={`mobile-chevron ${activeMobileDropdown === link.name ? 'open' : ''}`} />
                                            </div>

                                            {/* Dropdown Content */}
                                            {activeMobileDropdown === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="mobile-dropdown-content"
                                                >
                                                    {link.dropdown.map(subLink => (
                                                        <Link
                                                            key={subLink.name}
                                                            to={subLink.path}
                                                            className="mobile-sublink"
                                                            onClick={handleMobileLinkClick}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                            onClick={handleMobileLinkClick}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
