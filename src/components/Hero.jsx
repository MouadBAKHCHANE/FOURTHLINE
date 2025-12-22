import React from 'react';
import '../styles/Hero.css';
import '../styles/FlipText.css';
import { useLanguage } from '../App';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { t } = useLanguage();

    // Flip Text State
    const [index, setIndex] = React.useState(0);

    const phrases = [
        "DIGITAL INFRA",
        "CRM TO SCALE",
        "PREMIUM WEBSITES"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

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
                    <h1 className="hero-title nova-title">
                        WE BUILD <br />
                        <span key={index} className="text-highlight flip-enter" style={{ display: 'inline-block' }}>
                            {phrases[index]}
                        </span>
                    </h1>
                    <div className="hero-actions">
                        <a href="/Webtoleadform.html" className="btn-nova-glow">
                            <span className="btn-dot-indicator"></span>
                            {t.hero.startBuild}
                        </a>

                    </div>

                    <div className="hero-social-proof">
                        <p className="proof-text">{t.hero.trustedBy}</p>
                        <div className="proof-logos-mask">
                            <div className="proof-logos">
                                {/* Original Set */}
                                <img src="/logos/new-client-1.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-2.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-3.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/client-3.png" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-4.png" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-5.png" alt="Client Logo" className="client-logo-hero" />

                                {/* Duplicate Set for Infinite Scroll */}
                                <img src="/logos/new-client-1.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-2.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-3.png" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/client-3.png" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-4.png" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-5.png" alt="Client Logo" className="client-logo-hero" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-creative">
                    <div className="glow-bg hero-glow"></div>

                    {/* Main Dashboard Visual */}
                    <div className="dashboard-container">
                        <img
                            src="/assets/hero/dashboard_v2.png"
                            alt="Salesforce Dashboard Interface"
                            className="hero-dashboard-img"
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

// Export Hero component
export default Hero;
