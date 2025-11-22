import { motion } from 'framer-motion';
import './PageHero.css';

const PageHero = ({ title, subtitle, description, backgroundClass = 'default-hero-bg' }) => {
    return (
        <section className={`page-hero ${backgroundClass}`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="page-hero-content"
                >
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="page-hero-subtitle"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="page-hero-title"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="page-hero-description"
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
