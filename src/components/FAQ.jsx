import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
    {
        question: "How EEPL's energy audits help process plants to increase process plant's performance?",
        answer: "EEPL's energy audits play a crucial role in enhancing plant performance by identifying and addressing inefficiencies in energy usage. These audits pinpoint areas of energy waste, such as outdated equipment, inefficient machinery, and energy losses. By correcting these inefficiencies, plants can significantly reduce energy consumption and improve overall operational efficiency. Energy audits serve as a vital tool for optimizing plant performance by ensuring efficient energy utilization, lowering operating costs, and increasing productivity. Implementing the recommendations from energy audits enables plants to achieve measurable improvements in cost savings, system reliability, and long-term sustainability."
    },
    {
        question: "How does EEPL help food product manufacturing companies in New Product Development?",
        answer: "EEPL possesses proven expertise in the development of a wide range of food products, consistently adhering to established processing and quality standards. Our services are designed to be both economically viable and operationally efficient. Professional collaborations associated with EEPL enable pilot-scale and commercial-scale product trials, supported by sample surveys and routine laboratory testing. This integrated approach helps minimize long-term manufacturing risks and liabilities. The confidentiality of all proprietary information is strictly safeguarded through comprehensive non-disclosure agreements."
    },
    {
        question: "What is the important of project management?",
        answer: "Project management defines clear objectives, scope, and deliverables, ensuring that all stakeholders understand what needs to be done and why. It transforms ideas into successful outcomes by effectively controlling scope, time, cost, quality, and risks. Through accurate estimation, monitoring, and cost control, project management minimizes waste and prevents budget overruns. It also establishes a structured communication framework among team members, stakeholders, and clients, promoting transparency and coordination. Projects managed effectively are more likely to meet their objectives and achieve stakeholder satisfaction. Potential risks and issues are identified early, enabling teams to implement mitigation strategies or prepare solutions in advance. At EEPL, PMI-certified Project Managers ensure projects are executed efficiently and effectively, delivering successful results that align with organizational goals."
    },
    {
        question: "How engineering design validation is useful for processing plants?",
        answer: "At EEPL engineering design validation is carried out by Charted Engineers with the helpf of sophisticated softwares. Engineering design validation is a critical step in ensuring the reliability, efficiency, and performance of a product or system. It involves verifying that the final design meets specified requirements and performs as intended under real-world operating conditions. The validation process typically includes defining validation requirements, developing a comprehensive validation plan, executing relevant tests, and analysing the results. Common validation methods in mechanical engineering include Finite Element Analysis (FEA), mechanical testing, vibration testing, and other experimental and analytical techniques."
    },
    {
        question: "What is the importance of advance technologies in food processing plants?",
        answer: "Advanced technologies are essential in food processing plants as they enhance product quality, safety, and operational efficiency. Automation, smart sensors, and advanced control systems ensure consistent processing and compliance with food safety standards. Modern technologies help reduce energy and resource consumption, minimize waste, and improve production yields. They also enable predictive maintenance, reducing equipment downtime and maintenance costs. Overall, the adoption of advanced technologies improves productivity, lowers operating costs, supports sustainability, and helps food processing plants remain competitive in a dynamic market."
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
