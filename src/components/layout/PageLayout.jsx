import Header from './Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './PageLayout.css';

const PageLayout = ({ children }) => {
    return (
        <div className="page-layout">
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="main-content"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default PageLayout;
