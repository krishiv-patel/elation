import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import PageHero from '../components/shared/PageHero';
import './Careers.css';

const jobOpenings = [
    {
        id: 1,
        title: 'Project Manager',
        experience: '3 to 4 Years',
        location: 'Pune',
        education: 'B. Tech preferably from Food Tech',
        responsibilities: [
            'End to End Project Management including project scope, cost and schedule',
            'Coordination of all internal and external project stake holders',
            'Preparation and submission of Project Report',
            'Ensuring high quality of all project deliverables'
        ]
    },
    {
        id: 2,
        title: 'Sales Coordinator',
        experience: '2 to 3 Years',
        location: 'Pune',
        education: 'B. Tech preferably from Food Tech',
        responsibilities: [
            'Preparation and maintenance of Sales databases',
            'Making the cold calls to customers',
            'Coordination of all internal and external Sales stake holders',
            'Continuous follow up for sales leads'
        ]
    }
];

const Careers = () => {
    return (
        <div className="page-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'float 8s ease-in-out infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(118,75,162,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
                animation: 'float 10s ease-in-out infinite reverse'
            }}></div>

            <PageHero
                title="Careers"
                subtitle="Join Our Team"
                description="Build your career with us. We are always looking for talented individuals to join our growing team of experts."
                backgroundClass="default-hero-bg"
            />
            <section className="container section-padding">
                <div className="careers-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-xl"
                    >
                        Current Openings
                    </motion.h2>

                    <div className="job-listings">
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="job-card glass-card"
                            >
                                <div className="job-header">
                                    <h3 className="job-title">{job.title}</h3>
                                </div>

                                <div className="job-meta">
                                    <div className="job-meta-item">
                                        <FaClock className="job-icon" />
                                        <span>Experience: {job.experience}</span>
                                    </div>
                                    <div className="job-meta-item">
                                        <FaMapMarkerAlt className="job-icon" />
                                        <span>Location: {job.location}</span>
                                    </div>
                                    <div className="job-meta-item">
                                        <FaGraduationCap className="job-icon" />
                                        <span>{job.education}</span>
                                    </div>
                                </div>

                                <div className="job-responsibilities">
                                    <h4>Job Responsibilities:</h4>
                                    <ul>
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    className="btn btn-glow"
                                    onClick={() => {
                                        const subject = encodeURIComponent(`Application for ${job.title} Position`);
                                        const body = encodeURIComponent(`Dear Hiring Team,\n\nI am interested in applying for the ${job.title} position at Elation Engineering.\n\nPlease find my resume attached.\n\nBest regards,`);
                                        window.open(`mailto:info@elationengg.com?subject=${subject}&body=${body}`, '_blank');
                                    }}
                                >
                                    <FaBriefcase style={{ marginRight: '8px' }} />
                                    APPLY NOW
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
