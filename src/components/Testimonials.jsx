import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Mr Ajay Jain",
        role: "Managing Director",
        company: "Jain Agro Food Products Private Limited, Bangalore Karnataka",
        content: "Elation Engineering Pvt. Ltd. has demonstrated exceptional proficiency in detailed engineering as well as in overall project execution. Their technical expertise, timely delivery, and commitment to maintaining quality standards have been consistently impressive. We also appreciate their continued support and responsiveness even after the project's completion, which reflects their strong dedication to customer satisfaction.",
        rating: 5
    },
    {
        id: 2,
        name: "Mr Sanath Kumara Shetty",
        role: "Founding Partner",
        company: "Mint The Kitchen, Bangalore Karnataka",
        content: "We are very pleased with the support provided by Elation Engineering Pvt. Ltd. They helped us standardize the processes in our bulk food processing units, which significantly increased our production efficiency. The solutions suggested by EEPL were practical, simple to implement, and remarkably cost-effective. Their guidance has truly strengthened our operations, and we highly value their expertise.",
        rating: 5
    },
    {
        id: 3,
        name: "Mr. S.M.Sawant",
        role: "Director",
        company: "MIPL Pune Maharashtra",
        content: "We are extremely satisfied with the support provided by Elation Engineering Pvt. Ltd. They helped us develop innovative engineering solutions for our products, and their design capabilities truly stand out. The team understood our requirements perfectly and delivered the solutions on time. They are incredibly supportive and professional, making it very easy and comfortable for us to work with them.",
        rating: 5
    },
    {
        id: 4,
        name: "Mr Anshul Jain",
        role: "Managing Director",
        company: "Proveg Engineering & Food Processing Pvt. Ltd Kota Rajasthan",
        content: "We are grateful for the outstanding automation support from Elation Engineering Pvt. Ltd. Their expertise in system design and programming gives us a strong technological edge, and their 24×7 support has been invaluable for our operations.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">Client Success Stories</h2>
                    <p className="section-subtitle">Trusted by industry leaders</p>
                </motion.div>

                <div className="testimonials-carousel">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="testimonial-card glass-card"
                        >
                            <FaQuoteLeft className="quote-icon" />
                            <p className="testimonial-content">{testimonials[currentIndex].content}</p>

                            <div className="testimonial-rating">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>

                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <h4>{testimonials[currentIndex].name}</h4>
                                    <p>{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="carousel-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
