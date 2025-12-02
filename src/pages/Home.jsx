import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollHero from '../components/ScrollHero';
import WorkSection from '../components/WorkSection';
import ServicesSection from '../components/ServicesSection';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Small timeout to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <ScrollHero />
            <div id="work"><WorkSection /></div>
            <div id="services"><ServicesSection /></div>
            <div id="mission"><MissionSection /></div>
            <TestimonialsSection />
            <FAQ />
            <ContactSection />
        </>
    );
};

export default Home;
