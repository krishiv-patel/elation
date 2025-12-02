import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaCog } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const [keywordIndex, setKeywordIndex] = useState(0);

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
        const timer = setInterval(() => {
            setKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

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
                        <span key={keywordIndex} className="typewriter-wrapper popup-text">
                            {keywords[keywordIndex]}
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


            </div>
        </section>
    );
};

export default Hero;
