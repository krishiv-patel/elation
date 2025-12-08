import Hero from '../components/Hero';
import DairyServices from '../components/DairyServices';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <DairyServices />
            <Team />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
