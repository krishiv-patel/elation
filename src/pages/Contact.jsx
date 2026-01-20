import PageHero from '../components/shared/PageHero';
import ContactSection from '../components/Contact';
import FAQ from '../components/FAQ';

const contactFAQs = [
    {
        question: "How EEPL's energy audits help process plants to increase process plant's performance?",
        answer: "EEPL's energy audits play a crucial role in enhancing plant performance by identifying and addressing inefficiencies in energy usage. These audits pinpoint areas of energy waste, such as outdated equipment, inefficient machinery, and energy losses. By correcting these inefficiencies, plants can significantly reduce energy consumption and improve overall operational efficiency. Energy audits serve as a vital tool for optimizing plant performance by ensuring efficient energy utilization, lowering operating costs, and increasing productivity. Implementing the recommendations from energy audits enables plants to achieve measurable improvements in cost savings, system reliability, and long-term sustainability."
    },
    {
        question: 'How does EEPL help food product manufacturing companies in New Product Development?',
        answer: 'EEPL possesses proven expertise in the development of a wide range of food products, consistently adhering to established processing and quality standards. Our services are designed to be both economically viable and operationally efficient. Professional collaborations associated with EEPL enable pilot-scale and commercial-scale product trials, supported by sample surveys and routine laboratory testing. This integrated approach helps minimize long-term manufacturing risks and liabilities. The confidentiality of all proprietary information is strictly safeguarded through comprehensive non-disclosure agreements.'
    },
    {
        question: 'What is the important of project management?',
        answer: 'Project management defines clear objectives, scope, and deliverables, ensuring that all stakeholders understand what needs to be done and why. It transforms ideas into successful outcomes by effectively controlling scope, time, cost, quality, and risks. Through accurate estimation, monitoring, and cost control, project management minimizes waste and prevents budget overruns. It also establishes a structured communication framework among team members, stakeholders, and clients, promoting transparency and coordination. Projects managed effectively are more likely to meet their objectives and achieve stakeholder satisfaction. Potential risks and issues are identified early, enabling teams to implement mitigation strategies or prepare solutions in advance. At EEPL, PMI-certified Project Managers ensure projects are executed efficiently and effectively, delivering successful results that align with organizational goals.'
    },
    {
        question: 'How engineering design validation is useful for processing plants?',
        answer: 'At EEPL engineering design validation is carried out by Charted Engineers with the helpf of sophisticated softwares. Engineering design validation is a critical step in ensuring the reliability, efficiency, and performance of a product or system. It involves verifying that the final design meets specified requirements and performs as intended under real-world operating conditions. The validation process typically includes defining validation requirements, developing a comprehensive validation plan, executing relevant tests, and analysing the results. Common validation methods in mechanical engineering include Finite Element Analysis (FEA), mechanical testing, vibration testing, and other experimental and analytical techniques.'
    },
    {
        question: 'What is the importance of advance technologies in food processing plants?',
        answer: 'Advanced technologies are essential in food processing plants as they enhance product quality, safety, and operational efficiency. Automation, smart sensors, and advanced control systems ensure consistent processing and compliance with food safety standards. Modern technologies help reduce energy and resource consumption, minimize waste, and improve production yields. They also enable predictive maintenance, reducing equipment downtime and maintenance costs. Overall, the adoption of advanced technologies improves productivity, lowers operating costs, supports sustainability, and helps food processing plants remain competitive in a dynamic market.'
    }
];

const Contact = () => {
    return (
        <div className="contact-page">
            <PageHero
                title="Contact Us"
                subtitle="Let's Start a Conversation"
                description="Ready to transform your business? Get in touch with our engineering experts today."
            />
            <ContactSection />
            <FAQ data={contactFAQs} title="Frequently Asked Questions" />
        </div>
    );
};

export default Contact;
