import PageHero from '../components/shared/PageHero';
import ContactSection from '../components/Contact';
import FAQ from '../components/FAQ';

const contactFAQs = [
    {
        question: 'What industries do you serve?',
        answer: 'We specialize in automation, healthcare (pharmaceuticals & medical devices), dairy, manufacturing, and process industries. Our solutions are tailored to meet the specific needs of each sector.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. Small automation projects may take 4-8 weeks, while comprehensive systems can take 3-6 months. We provide detailed timelines during initial consultation.'
    },
    {
        question: 'Do you provide ongoing support after project completion?',
        answer: 'Yes! We offer comprehensive post-deployment support, including maintenance contracts, training, troubleshooting, and system upgrades to ensure your solutions continue to perform optimally.'
    },
    {
        question: 'Can you integrate with existing systems?',
        answer: 'Absolutely. We have extensive experience integrating new automation and control systems with legacy equipment and software, ensuring seamless operation across your entire facility.'
    },
    {
        question: 'What certifications and compliance standards do you follow?',
        answer: 'We adhere to industry-specific standards including FDA 21 CFR Part 11 for pharmaceuticals, ISO 13485 for medical devices, and various GMP and safety regulations depending on your industry.'
    },
    {
        question: 'Do you offer training for our staff?',
        answer: 'Yes, comprehensive training is included with all projects. We provide on-site training, documentation, and ongoing support to ensure your team can effectively operate and maintain the systems.'
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
