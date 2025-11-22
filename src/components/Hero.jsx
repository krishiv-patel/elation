import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaCog } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const [currentKeyword, setCurrentKeyword] = useState('');
    const [keywordIndex, setKeywordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const keywords = [
        'Process Excellence',
        'Product Development',
        'Project Management',
        'Engineering Design',
        'Equipment Fabrication',
        'Automation Systems',
        'Startup Handholding'
    ];

    useEffect(() => {
        const keyword = keywords[keywordIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseEnd = 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < keyword.length) {
                setCurrentKeyword(keyword.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentKeyword(keyword.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === keyword.length) {
                setTimeout(() => setIsDeleting(true), pauseEnd);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setKeywordIndex((keywordIndex + 1) % keywords.length);
            }
        }, isDeleting ? typingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, keywordIndex]);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Engineering Excellence Since 2015
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-title"
                    >
                        Transforming Ideas Into<br />
                        <span className="typewriter-wrapper">
                            {currentKeyword}
                            <span className="typewriter-cursor">|</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="hero-description"
                    >
                        Leading engineering solutions provider delivering innovative, reliable, and scalable solutions that drive your business forward.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hero-cta"
                    >
                        <a href="/services" className="btn btn-glow btn-large">
                            Explore Our Services
                        </a>
                        <a href="/contact" className="btn btn-secondary btn-large">
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="hero-stats"
                >
                    <div className="stat-card">
                        <FaRocket className="stat-icon" />
                        <h3 className="stat-number">500+</h3>
                        <p className="stat-label">Projects Delivered</p>
                    </div>

                    <div className="stat-card">
                        <FaCog className="stat-icon" />
                        <h3 className="stat-number">50+</h3>
                        <p className="stat-label">Manufacturing Clients</p>
                    </div>

                    <div className="stat-card">
                        <FaChartLine className="stat-icon" />
                        <h3 className="stat-number">99%</h3>
                        <p className="stat-label">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
