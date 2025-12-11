import React from 'react';
import { Check } from 'lucide-react';
import '../styles/Services.css';
import { useLanguage } from '../App';

const Services = () => {
    const { t } = useLanguage();

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.services.title}</h2>
                    <p className="section-subtitle">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* Tier 1: The Essential */}
                    <div className="pricing-card glass-card">
                        <div className="card-content">
                            <div className="tier-badge">{t.services.tier1Badge}</div>
                            <h3 className="tier-name">{t.services.tier1Name}</h3>
                            <p className="tier-desc">{t.services.tier1Desc}</p>

                            <ul className="feature-list">
                                <li><Check size={18} className="check-icon" /> {t.services.tier1Feat1}</li>
                                <li><Check size={18} className="check-icon" /> {t.services.tier1Feat2}</li>
                                <li><Check size={18} className="check-icon" /> {t.services.tier1Feat3}</li>
                                <li><Check size={18} className="check-icon" /> {t.services.tier1Feat4}</li>
                            </ul>

                            <a href="#contact" className="btn btn-glass full-width">{t.services.tier1Button}</a>
                        </div>
                    </div>

                    {/* Tier 2: The Enterprise */}
                    <div className="pricing-card glass-card enterprise-card">
                        <div className="card-glow"></div>
                        <div className="card-content">
                            <div className="tier-badge badge-accent">{t.services.tier2Badge}</div>
                            <h3 className="tier-name">{t.services.tier2Name}</h3>
                            <p className="tier-desc">{t.services.tier2Desc}</p>

                            <ul className="feature-list">
                                <li><Check size={18} className="check-icon accent" /> {t.services.tier2Feat1}</li>
                                <li><Check size={18} className="check-icon accent" /> {t.services.tier2Feat2}</li>
                                <li><Check size={18} className="check-icon accent" /> {t.services.tier2Feat3}</li>
                                <li><Check size={18} className="check-icon accent" /> {t.services.tier2Feat4}</li>
                                <li><Check size={18} className="check-icon accent" /> {t.services.tier2Feat5}</li>
                            </ul>

                            <a href="#contact" className="btn btn-primary full-width">{t.services.tier2Button}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
