import React from 'react';
import '../styles/Hero.css';
import { useLanguage } from '../App';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="trail-background">
                <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="trail-svg">
                    <path opacity="0.1" d="M-100 600 C 200 400, 600 800, 1540 200" stroke="#00A1E0" strokeWidth="2" strokeDasharray="10 10" />
                    <path opacity="0.05" d="M-100 700 C 300 500, 700 900, 1540 300" stroke="#00A1E0" strokeWidth="40" />
                </svg>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {t.hero.title}<br />
                        <span className="text-gradient">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t.hero.subtitle}
                    </p>
                    <div className="hero-actions">
                        <a href="/Webtoleadform.html" className="btn btn-primary">{t.hero.startBuild}</a>
                        <a href="#process" className="btn btn-glass">{t.hero.viewSystem}</a>
                    </div>
                </div>

                <div className="hero-visual-creative">
                    <div className="glow-bg hero-glow"></div>

                    {/* Rotating Salesforce Circle */}
                    <div className="circle-container">
                        <img
                            src="/assets/hero/salesforce_circle.png"
                            alt="Salesforce Ecosystem"
                            className="sf-circle-img"
                        />
                    </div>

                    {/* Astro Mascot */}
                    <div className="mascot-container">
                        <img
                            src="/assets/hero/astro_mascot.png"
                            alt="Salesforce Astro"
                            className="sf-mascot-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
