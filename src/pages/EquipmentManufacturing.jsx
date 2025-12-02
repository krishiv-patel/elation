import React from 'react';
import PageHero from '../components/shared/PageHero';

const EquipmentManufacturing = () => {
    return (
        <div className="page-wrapper">
            <PageHero
                title="Equipment Manufacturing"
                subtitle="Precision Engineering & Fabrication"
                description="State-of-the-art manufacturing solutions for industrial equipment, ensuring durability, efficiency, and compliance with global standards."
                backgroundClass="default-hero-bg"
            />
            <section className="container section-padding">
                <div className="text-center">
                    <h2>Our Manufacturing Capabilities</h2>
                    <p>Content coming soon...</p>
                </div>
            </section>
        </div>
    );
};

export default EquipmentManufacturing;
