import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="laser-storm">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="laser" style={{
                        left: `${40 + Math.random() * 20}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${0.5 + Math.random() * 1}s`,
                        opacity: Math.random() * 0.5 + 0.2
                    }}></div>
                ))}
                <div className="laser-core"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Your Website is Open.<br />
                        <span className="text-gradient">Is Your Sales Team?</span>
                    </h1>
                    <p className="hero-subtitle">
                        We build the digital infrastructure for Moroccan business. Professional websites integrated directly with Salesforce CRM to capture every lead, automatically.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Start Your Build</a>
                        <a href="#system" className="btn btn-glass">View the System</a>
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
                                <span className="card-title">Contact Us</span>
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
                                <span className="card-title">Sales Pipeline</span>
                            </div>
                            <div className="card-body kanban-board">
                                <div className="kanban-col">
                                    <div className="kanban-header">New Leads</div>
                                    <div className="kanban-item"></div>
                                    <div className="kanban-item"></div>
                                </div>
                                <div className="kanban-col">
                                    <div className="kanban-header">Qualified</div>
                                    <div className="kanban-item active"></div>
                                </div>
                                <div className="kanban-col">
                                    <div className="kanban-header">Closed</div>
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
