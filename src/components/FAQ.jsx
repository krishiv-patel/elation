import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in a wide range of industries including manufacturing, healthcare, automotive, aerospace, and industrial automation. Our diverse team brings cross-sector expertise to every project."
    },
    {
        question: "Do you provide international engineering services?",
        answer: "Yes, Elation operates globally. We have successfully delivered projects in over 15 countries and have partnerships with major international engineering firms to ensure seamless execution worldwide."
    },
    {
        question: "How do you ensure project quality and compliance?",
        answer: "We adhere to strict ISO 9001:2015 quality management standards. Our rigorous QA/QC processes, combined with regular audits and compliance checks, ensure every solution meets the highest industry standards."
    },
    {
        question: "Can you help with legacy system modernization?",
        answer: "Absolutely. One of our core strengths is upgrading and integrating legacy systems with modern Industry 4.0 technologies, improving efficiency without the need for complete infrastructure replacement."
    },
    {
        question: "What is your typical project engagement model?",
        answer: "We offer flexible engagement models including fixed-price projects, time and material, and dedicated team augmentation. We work with you to determine the best fit for your specific needs and budget."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="faq-header"
                >
                    <div className="faq-icon-wrapper">
                        <FaQuestionCircle className="faq-header-icon" />
                    </div>
                    <h2>Frequently Asked Questions</h2>
                    <p className="faq-subtitle">
                        Find answers to common questions about our services and expertise
                    </p>
                </motion.div>

                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-toggle-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer"
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
