import PageHero from '../components/shared/PageHero';
import { motion } from 'framer-motion';
import { FaHandshake, FaGavel, FaBan, FaExclamationCircle } from 'react-icons/fa';

const TermsOfService = () => {
    const sections = [
        {
            icon: FaHandshake,
            title: "1. Agreement to Terms",
            content: "By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
            icon: FaExclamationCircle,
            title: "2. Use License",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on Elation Engineering's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
        },
        {
            icon: FaBan,
            title: "3. Disclaimer",
            content: "The materials on Elation Engineering's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property."
        },
        {
            icon: FaGavel,
            title: "4. Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
        }
    ];

    return (
        <div className="legal-page" style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <PageHero
                title="Terms of Service"
                subtitle="Rules & Regulations"
                description="Please read these terms carefully before using our services."
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

export default TermsOfService;
