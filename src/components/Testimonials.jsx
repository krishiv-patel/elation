import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Operations Director",
        company: "TechFlow Manufacturing",
        content: "Elation's automation solutions transformed our production line. Efficiency increased by 40% within the first month. Their team's expertise is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        role: "Chief Medical Officer",
        company: "BioHealth Systems",
        content: "The cleanroom facility design exceeded all GMP requirements. Their attention to detail and regulatory knowledge made the validation process seamless.",
        rating: 5
    },
    {
        id: 3,
        name: "David Miller",
        role: "CTO",
        company: "InnovateX Startups",
        content: "As a startup, we needed guidance. Elation provided not just engineering support but strategic mentorship that helped us secure our Series A funding.",
        rating: 5
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        role: "Plant Manager",
        company: "Global Pharma Corp",
        content: "Their PPSO services identified bottlenecks we didn't know existed. The safety improvements alone were worth the investment.",
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
