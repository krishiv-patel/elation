import React from 'react';
import PageHero from '../components/shared/PageHero';

const Careers = () => {
    return (
        <div className="page-wrapper">
            <PageHero
                title="Careers"
                subtitle="Join Our Team"
                description="Build your career with us. We are always looking for talented individuals to join our growing team of experts."
                backgroundClass="default-hero-bg"
            />
            <section className="container section-padding">
                <div className="text-center">
                    <h2>Current Openings</h2>
                    <p>Content coming soon...</p>
                </div>
            </section>
        </div>
    );
};

export default Careers;
