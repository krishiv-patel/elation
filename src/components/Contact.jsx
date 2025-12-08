import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-header"
                >
                    <h2>Get In Touch</h2>
                    <p className="contact-subtitle">
                        Let's discuss how we can help transform your business
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info"
                    >
                        <div className="contact-info-card glass-card">
                            <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-info-content">
                                <h4>Address</h4>
                                <p>Elation Engineering Pvt Ltd<br />Block No T 106/2 Gala No 34<br />Rajgurunagar Co Op Industrial Estate<br />MIDC Bhosari Pune 411026</p>
                            </div>
                        </div>

                        <div className="contact-info-card glass-card">
                            <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                <FaPhone />
                            </div>
                            <div className="contact-info-content">
                                <h4>Phone</h4>
                                <p>+91 (123) 456-7890<br />+91 (098) 765-4321</p>
                            </div>
                        </div>

                        <div className="contact-info-card glass-card">
                            <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                <FaEnvelope />
                            </div>
                            <div className="contact-info-content">
                                <h4>Email</h4>
                                <p>info@elation.com<br />support@elation.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-form-wrapper"
                    >
                        <form className="contact-form glass-card" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="label" htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="label" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className="input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label" htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="label" htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    required
                                    className="input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="label" htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    required
                                    className="textarea"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-glow btn-large"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="submit-success"
                                >
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="map-section mt-4xl"
                >
                    <div className="map-container glass-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2844!2d73.8456!3d18.6305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5d5e5e5e5%3A0x1234567890abcdef!2sRajgurunagar%20Co%20Op%20Industrial%20Estate%2C%20MIDC%20Bhosari%2C%20Pune%2C%20Maharashtra%20411026!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin&markers=color:red%7Clabel:E%7C18.6305,73.8456"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Elation Engineering Pvt Ltd - MIDC Bhosari Pune"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
