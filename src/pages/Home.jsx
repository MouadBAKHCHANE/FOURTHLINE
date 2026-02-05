import React, { useEffect } from 'react';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import WhatWeDo from '../components/WhatWeDo';
import Solutions from '../components/Solutions';
import SolutionTimeline from '../components/SolutionTimeline';
import { useLocation } from 'react-router-dom';
import { Zap, Layers, Code, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ResultsSection from '../components/ResultsSection';
import '../styles/Website.css'; // Needed for ws-hero styles

const Home = () => {
    const location = useLocation();
    const { t } = useLanguage();

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
            <WhatWeDo />
            <ProblemSection />
            <SolutionTimeline />

            {/* Industries / Expertise Section */}
            <Solutions />

            {/* Results / Our Work Section */}
            <ResultsSection />

        </>
    );
};

export default Home;
