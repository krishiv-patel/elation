import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Equipment Manufacturing', path: '/equipment-manufacturing' },
        { name: 'Automation', path: '/services/automation' },
        { name: 'Advance Technologies', path: '/advance-technologies' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const isActive = (path) => {
        if (path === location.pathname) return true;
        if (path === '/' && location.pathname !== '/') return false;
        // Prevent 'Services' from being active when 'Automation' is active
        if (path === '/services' && location.pathname.startsWith('/services/automation')) return false;
        return location.pathname.startsWith(path);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="container navbar-container">
                {/* Logo */}
                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <motion.img
                        src="/logo.png"
                        alt="Elation"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <span className="logo-text">Elation</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name}>
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
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button mobile-only"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu glass"
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
