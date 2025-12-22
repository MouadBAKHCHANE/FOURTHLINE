import React from 'react';
import '../styles/SolutionAnimation.css';
import { useLanguage } from '../App';

const SolutionAnimation = () => {
    const { t } = useLanguage();

    return (
        <section className="solution-animation-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.solutionVisual.title}</h2>
                    <p className="section-subtitle">{t.solutionVisual.subtitle}</p>
                </div>

                <div className="animation-container">
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

                <div className="center-cta" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <a href="/contact.html" className="btn-opti-primary">
                        <span className="btn-dot-indicator"></span>
                        {t.footer.ctaButton}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SolutionAnimation;
