import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="not-found-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="not-found-content text-center"
                >
                    <FaExclamationTriangle className="error-icon" />
                    <h1 className="error-code">404</h1>
                    <h2 className="error-message">Page Not Found</h2>
                    <p className="error-description">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        <FaHome className="btn-icon" /> Back to Home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
