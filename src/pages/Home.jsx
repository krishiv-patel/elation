import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import About from '../components/About';

import Testimonials from '../components/Testimonials';
import ProjectShowcase from '../components/ProjectShowcase';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <ProjectShowcase />
            <Industries />
            <Testimonials />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;
