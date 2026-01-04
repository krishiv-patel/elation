import PageHero from '../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserSecret, FaServer } from 'react-icons/fa';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: FaShieldAlt,
            title: "1. Introduction",
            content: "Welcome to Elation Engineering. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website directly or through our partners and tell you about your privacy rights and how the law protects you."
        },
        {
            icon: FaUserSecret,
            title: "2. Information We Collect",
            content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data (includes first name, last name, username), Contact Data (includes billing address, delivery address, email address, telephone numbers), and Technical Data (includes internet protocol (IP) address, browser type and version)."
        },
        {
            icon: FaServer,
            title: "3. How We Use Your Information",
            content: "We use your information to respond to your inquiries, provide services, and improve our website experience. We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you."
        },
        {
            icon: FaLock,
            title: "4. Data Security",
            content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so."
        }
    ];

    return (
        <div className="legal-page" style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <PageHero
                title="Privacy Policy"
                subtitle="Your Privacy Matters"
                description="Transparency is key to our relationship. Learn how we protect your data."
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

                            <div style={{
                                marginTop: '3rem',
                                padding: '1.5rem',
                                background: '#eff6ff',
                                borderRadius: '0.5rem',
                                borderLeft: '4px solid var(--primary-600)'
                            }}>
                                <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Have Questions?</h4>
                                <p style={{ color: '#1e40af', margin: 0 }}>
                                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contactus.elation@gmail.com" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>contactus.elation@gmail.com</a> or <a href="mailto:info@elationengg.com" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>info@elationengg.com</a>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
