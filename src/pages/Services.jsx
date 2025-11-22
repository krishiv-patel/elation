import PageHero from '../components/shared/PageHero';
import ServicesSection from '../components/Services';

const Services = () => {
    return (
        <div className="services-page">
            <PageHero
                title="Our Services"
                subtitle="Comprehensive Engineering Solutions"
                description="From automation to product development, we provide end-to-end engineering services tailored to your needs."
            />
            <ServicesSection />
        </div>
    );
};

export default Services;
