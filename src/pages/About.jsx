import PageHero from '../components/shared/PageHero';
import AboutSection from '../components/About';

const About = () => {
    return (
        <div className="about-page">
            <PageHero
                title="About Elation"
                subtitle="Engineering Excellence Since 2008"
                description="We are a premier engineering consultancy dedicated to delivering innovative solutions for complex industrial challenges."
            />
            <AboutSection />

            <section className="container" style={{ padding: '4rem 0' }}>
                <div className="card">
                    <h3>Our Mission</h3>
                    <p>To empower industries with cutting-edge engineering solutions that drive efficiency, sustainability, and growth.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
