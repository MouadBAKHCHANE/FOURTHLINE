import React, { useEffect } from 'react';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import SolutionAnimation from '../components/SolutionAnimation';
import Solutions from '../components/Solutions';
import SolutionTimeline from '../components/SolutionTimeline';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <About />
            <ProblemSection />
            <SolutionTimeline />
            <Solutions />
            <Stats />
            <Services />
            <SolutionAnimation />
        </>
    );
};

export default Home;
