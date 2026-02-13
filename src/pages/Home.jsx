import React, { useEffect } from 'react';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import WhatWeDo from '../components/WhatWeDo';
import SolutionTimeline from '../components/SolutionTimeline';
import { useLocation } from 'react-router-dom';
import { Zap, Layers, Code, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ResultsSection from '../components/ResultsSection';
import { ServicesSolutions } from '../components/ServicesSolutions';
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
        <div className="min-h-screen bg-[#0B1120] relative">
            {/* Hero Section */}
            <header className="relative pt-10 pb-0 lg:pt-20 lg:pb-6 overflow-hidden">
                <div className="container">
                    <About />
                </div>
            </header>

            <WhatWeDo />
            <ProblemSection />
            <SolutionTimeline />

            {/* Services Section */}
            <section className="ws-stack-section section-padding">
                <div className="container">
                    <ServicesSolutions />
                </div >
            </section >

            {/* Results / Our Work Section */}
            < ResultsSection />

        </div >
    );
};

export default Home;
