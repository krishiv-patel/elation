import { motion } from 'framer-motion';
import {
    FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowUp,
    FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-text">Elation</span>
                        </div>
                        <p className="footer-tagline">
                            Engineering Excellence for Modern Industries
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/industries">Industries</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/services/automation">Automation</a></li>
                            <li><a href="/services/healthcare">Healthcare</a></li>
                            <li><a href="/services/design">Design</a></li>
                            <li><a href="/services/startups">Startups</a></li>
                            <li><a href="/services/ppso">PPSO</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest insights</p>
                        <form className="newsletter-form" onSubmit={(e) => {
                            e.preventDefault();
                            const input = e.target.querySelector('input');
                            if (input.value) {
                                alert('Thank you for subscribing!');
                                input.value = '';
                            }
                        }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe <FaPaperPlane style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p className="footer-contact-item">
                            <FaMapMarkerAlt className="footer-icon" />
                            <span>Industrial Area, Sector 15<br />Mumbai, Maharashtra, India</span>
                        </p>
                        <p className="footer-contact-item">
                            <FaEnvelope className="footer-icon" />
                            <span>info@elation.com</span>
                        </p>
                        <p className="footer-contact-item">
                            <FaPhone className="footer-icon" />
                            <span>+91 (123) 456-7890</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Elation. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                        <span>•</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </motion.button>
        </footer>
    );
};

export default Footer;
