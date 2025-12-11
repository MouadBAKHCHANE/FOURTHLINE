import React from 'react';
import { Check } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Investment Packages</h2>
                    <p className="section-subtitle">
                        Transparent pricing for scalable growth.
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* Tier 1: The Essential */}
                    <div className="pricing-card glass-card">
                        <div className="card-content">
                            <div className="tier-badge">Startups</div>
                            <h3 className="tier-name">The Essential</h3>
                            <p className="tier-desc">Perfect for launching your digital presence.</p>

                            <ul className="feature-list">
                                <li><Check size={18} className="check-icon" /> High-Conversion Landing Page</li>
                                <li><Check size={18} className="check-icon" /> Salesforce Starter Setup</li>
                                <li><Check size={18} className="check-icon" /> Basic Web-to-Lead</li>
                                <li><Check size={18} className="check-icon" /> Email Support</li>
                            </ul>

                            <a href="#contact" className="btn btn-glass full-width">Get Started</a>
                        </div>
                    </div>

                    {/* Tier 2: The Enterprise */}
                    <div className="pricing-card glass-card enterprise-card">
                        <div className="card-glow"></div>
                        <div className="card-content">
                            <div className="tier-badge badge-accent">SME & Industry</div>
                            <h3 className="tier-name">The Enterprise</h3>
                            <p className="tier-desc">Complete digital infrastructure scaling.</p>

                            <ul className="feature-list">
                                <li><Check size={18} className="check-icon accent" /> Full Corporate Website (5+ Pages)</li>
                                <li><Check size={18} className="check-icon accent" /> Advanced CRM Customization</li>
                                <li><Check size={18} className="check-icon accent" /> Lead Scoring & Automation</li>
                                <li><Check size={18} className="check-icon accent" /> Priority Support (1 Month)</li>
                                <li><Check size={18} className="check-icon accent" /> Half-day Training Workshop</li>
                            </ul>

                            <a href="#contact" className="btn btn-primary full-width">Start Your Build</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
