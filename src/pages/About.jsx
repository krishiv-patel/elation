import PageHero from '../components/shared/PageHero';
import AboutSection from '../components/About';

const About = () => {
    return (
        <div className="about-page">
            <PageHero
                title="About Elation"
                subtitle="Engineering Excellence Since 2021"
                description="Founded by IIT alumni to provide innovative processing solutions in an economical way to global food processing industries. Our 24x7 dedicated customer focus, strong work ethics, and constant knowledge upgradation drive us towards making our vision a reality."
            />
            <AboutSection />

            <section className="container" style={{ padding: '4rem 0' }}>
                <div className="content-grid-2col" style={{ gap: '2rem' }}>
                    <div className="card">
                        <h3>Vision</h3>
                        <p>To become One Stop Solution Provider for Global Food Processing Sector</p>
                    </div>
                    <div className="card">
                        <h3>Mission</h3>
                        <p>To become trustworthy technical stakeholder for our customers by providing innovative and economical processing solutions</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
