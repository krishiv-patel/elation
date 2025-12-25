import PageHero from '../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaCookieBite, FaListUl, FaToggleOn, FaInfoCircle } from 'react-icons/fa';

const CookiePolicy = () => {
    const sections = [
        {
            icon: FaCookieBite,
            title: "1. What Are Cookies",
            content: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time."
        },
        {
            icon: FaListUl,
            title: "2. How We Use Cookies",
            content: "We use cookies to understand how you use our website, to remember your preferences, and to improve your browsing experience. Some cookies are essential for the website to function, while others help us optimize performance."
        },
        {
            icon: FaInfoCircle,
            title: "3. Types of Cookies We Use",
            content: "We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device for a set period of time or until you delete them). We also use third-party cookies from service providers like Google Analytics."
        },
        {
            icon: FaToggleOn,
            title: "4. Managing Cookies",
            content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site."
        }
    ];

    return (
        <div className="legal-page" style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <PageHero
                title="Cookie Policy"
                subtitle="Transparency in Usage"
                description="Understanding how and why we use cookies to improve your experience."
            />

            <section className="container section-padding">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white"
                        style={{
                            padding: '3rem',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    >
                        <div style={{ marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Last Updated: December 25, 2025</p>
                        </div>

                        <div className="legal-content">
                            {sections.map((section, index) => (
                                <div key={index} style={{ marginBottom: '2.5rem' }}>
                                    <h3 style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        fontSize: '1.25rem',
                                        color: '#0f172a',
                                        marginBottom: '1rem'
                                    }}>
                                        <section.icon style={{ color: 'var(--primary-600)' }} />
                                        {section.title}
                                    </h3>
                                    <p style={{
                                        color: '#475569',
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CookiePolicy;
