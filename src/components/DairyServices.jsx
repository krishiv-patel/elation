import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGlassMartini, FaWineGlass, FaAppleAlt, FaUtensils, FaBox, FaChalkboardTeacher } from 'react-icons/fa';
import './DairyServices.css';

import milkImg from '../assets/services/milk-processing-bg.png';
import beverageImg from '../assets/services/beverage-processing.png';
import fruitVegImg from '../assets/services/fruit-vegetable.png';
import foodImg from '../assets/services/food-processing.png';
import packagingImg from '../assets/services/packaging-conveying.png';

const DairyServices = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const services = [
        {
            id: 1,
            title: 'Milk Processing',
            description: 'Complete solutions for liquid milk, paneer, curd, butter, ice-cream, and aseptic processing.',
            icon: FaGlassMartini,
            route: '/services/milk-processing',
            image: milkImg,
            color: '#60a5fa' // Blue
        },
        {
            id: 2,
            title: 'Beverage Processing',
            description: 'Fruit juice, carbonated drinks, health beverages, and aseptic pulp processing solutions.',
            icon: FaWineGlass,
            route: '/services/beverage-processing',
            image: beverageImg,
            color: '#f472b6' // Pink
        },
        {
            id: 3,
            title: 'Fruit & Veg Processing',
            description: 'Canning, drying, freezing, and packaging solutions for fresh fruits and vegetables.',
            icon: FaAppleAlt,
            route: '/services/fruit-vegetable-processing',
            image: fruitVegImg,
            color: '#4ade80' // Green
        },
        {
            id: 4,
            title: 'Food Processing',
            description: 'Rice, dal, bakery products, ready-to-cook meals, and millet-based product processing.',
            icon: FaUtensils,
            route: '/services/food-processing',
            image: foodImg,
            color: '#fbbf24' // Amber
        },
        {
            id: 5,
            title: 'Packaging Systems',
            description: 'PET filling, bottling lines, conveyor systems, and automated packaging solutions.',
            icon: FaBox,
            route: '/services/packaging-conveying',
            image: packagingImg,
            color: '#a78bfa' // Purple
        },
        {
            id: 6,
            title: 'Consultancy & Training',
            description: 'Expert guidance, technical training, and process optimization for food industries.',
            icon: FaChalkboardTeacher,
            route: '/services/consultancy-training',
            image: milkImg,
            color: '#2dd4bf' // Teal
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const cards = container.getElementsByClassName('service-card');

            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="dairy-services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Engineering excellence for the modern food industry.
                    </p>
                </div>

                <div className="services-grid" ref={containerRef}>
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="service-card"
                                onClick={() => navigate(service.route)}
                                style={{ '--accent-color': service.color }}
                            >
                                <div className="card-border"></div>
                                {service.image && (
                                    <div
                                        className="card-image-bg"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    ></div>
                                )}
                                <div className="card-content">
                                    <div className="icon-wrapper">
                                        <IconComponent />
                                    </div>
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                    <div className="card-action">
                                        <span>Explore Solution</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DairyServices;
