import React, { useEffect } from 'react';
import { useLanguage } from '../App';
import Solutions from '../components/Solutions';
import ResultsSection from '../components/ResultsSection';
import IndustryMarquee from '../components/IndustryMarquee';
import HeroBackground from '../components/HeroBackground';
import '../styles/About.css'; // Borrowing styles for hero if needed

const ExpertisePage = () => {
    const { t } = useLanguage();

    // Smooth scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="expertise-page">
            {/* Simple Hero Section for Expertise */}
            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '0' }}>
                <HeroBackground />
                <div className="hero-container" style={{ flexDirection: 'column', textAlign: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="hero-title nova-title expertise-main-title">
                            {t.expertisePage.title} <span className="text-highlight">{t.expertisePage.highlight}</span>
                        </h1>
                        <p className="section-subtitle">
                            {t.expertisePage.subtitle}
                        </p>
                    </div>
                    <IndustryMarquee />
                </div>
            </section>

            {/* Industries Section */}
            <Solutions />

            {/* Our Work Section */}
            <ResultsSection />
        </div>
    );
};

export default ExpertisePage;
