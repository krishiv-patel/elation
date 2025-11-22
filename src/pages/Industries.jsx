import PageHero from '../components/shared/PageHero';
import IndustriesSection from '../components/Industries';

const Industries = () => {
    return (
        <div className="industries-page">
            <PageHero
                title="Industries We Serve"
                subtitle="Expertise Across Sectors"
                description="We bring deep domain knowledge and engineering expertise to a wide range of industries."
            />
            <IndustriesSection />
        </div>
    );
};

export default Industries;
