import React from 'react';
import '../styles/HeroNew.css';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-new">
            {/* Background Effects */}
            <div className="hero-bg-effects">
                <div className="hero-grid"></div>
                <div className="hero-glow-blue"></div>
                <div className="hero-particles"></div>
            </div>

            <div className="hero-new-container">
                {/* Badge */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    <span className="badge-text">Salesforce Experts</span>
                </div>

                {/* Typography */}
                <h1 className="hero-new-title">
                    SCALE YOUR
                </h1>

                {/* Script Font Accent - using standard serif fallback if script not available, 
                    but CSS targets 'Dancing Script' or similar. 
                    Ideally index.html should load a Google Font for this. */}
                <div className="hero-new-subtitle">
                    Revenue Engine
                </div>

                <p className="hero-desc">
                    We help you capture, organize, and close more leads with Salesforce.<br />
                    Automated systems designed for growth.
                </p>

                {/* CTA */}
                <a href="#contact" className="hero-cta-btn">
                    Start Your Build <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
