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
                        <a href="#system" className="btn btn-glass">{t.hero.viewSystem}</a>
                    </div>
                </div>

                <div className="hero-visual perspective-container">
                    <div className="glow-bg hero-glow"></div>

                    <div className="dashboard-stage">
                        {/* Left Card: Contact Form */}
                        <div className="glass-card mockup-card form-card">
                            <div className="card-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                                <span className="card-title">{t.hero.contactUs}</span>
                            </div>
                            <div className="card-body">
                                <div className="skeleton-input short"></div>
                                <div className="skeleton-input"></div>
                                <div className="skeleton-input"></div>
                                <div className="skeleton-btn"></div>
                            </div>
                        </div>

                        {/* Connection Line */}
                        <div className="connection-line-container">
                            <svg className="connection-svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                                <path className="connection-path" d="M0,50 C100,50 100,50 200,50" />
                                <circle className="connection-dot" r="4" cx="0" cy="50">
                                    <animateMotion repeatCount="indefinite" dur="2s" path="M0,50 C100,50 100,50 200,50" />
                                </circle>
                            </svg>
                        </div>

                        {/* Right Card: Salesforce Pipeline */}
                        <div className="glass-card mockup-card crm-card">
                            <div className="card-header sf-header">
                                <div className="sf-logo"></div>
                                <span className="card-title">{t.hero.salesPipeline}</span>
                            </div>
                            <div className="card-body kanban-board">
                                <div className="kanban-col">
                                    <div className="kanban-header">{t.hero.newLeads}</div>
                                    <div className="kanban-item"></div>
                                    <div className="kanban-item"></div>
                                </div>
                                <div className="kanban-col">
                                    <div className="kanban-header">{t.hero.qualified}</div>
                                    <div className="kanban-item active"></div>
                                </div>
                                <div className="kanban-col">
                                    <div className="kanban-header">{t.hero.closed}</div>
                                    <div className="kanban-item"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
