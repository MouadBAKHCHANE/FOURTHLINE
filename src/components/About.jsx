import React from 'react';
import '../styles/About.css';
import '../styles/Website.css';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Code, Zap } from 'lucide-react';

const About = () => {
    const { t } = useLanguage();

    return (
        <section className="hero about-section" id="about">
            <div className="trail-background">
                <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="trail-svg">
                    <path opacity="0.1" d="M-100 600 C 200 400, 600 800, 1540 200" stroke="#00A1E0" strokeWidth="2" strokeDasharray="10 10" />
                    <path opacity="0.05" d="M-100 700 C 300 500, 700 900, 1540 300" stroke="#00A1E0" strokeWidth="40" />
                </svg>
            </div>
            <div className="container hero-container ws-hero-container-override">
                <div className="hero-content ws-hero-text-override">

                    <h1 className="ws-title mb-4">{t.websitePage.hero.title}</h1>
                    <div className="hero-cta-group mb-12">
                        <a href="/Webtoleadform.html" className="btn-nova-glow">
                            <div className="btn-dot-indicator"></div> {t.websitePage.hero.cta}
                        </a>
                        <a href="#works" className="btn-nova-glow">
                            {t.websitePage.hero.ctaSecondary}
                        </a>
                    </div>

                    <div className="hero-social-proof mt-8">
                        <p className="proof-text">{t.hero.trustedBy}</p>
                        <div className="proof-logos-mask">
                            <div className="proof-logos">
                                {/* Original Set */}
                                <img src="/logos/new-client-1.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-2.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-3.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/client-3.webp" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-4.webp" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-5.webp" alt="Client Logo" className="client-logo-hero" />

                                {/* Duplicate Set for Infinite Scroll */}
                                <img src="/logos/new-client-1.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-2.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/new-client-3.webp" alt="Partner Logo" className="client-logo-hero" />
                                <img src="/logos/client-3.webp" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-4.webp" alt="Client Logo" className="client-logo-hero" />
                                <img src="/logos/client-5.webp" alt="Client Logo" className="client-logo-hero" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-creative ws-hero-visual-override">
                    {/* Floating Tech Icons */}
                    <div className="float-icon icon-react"><Code size={24} /></div>
                    <div className="float-icon icon-vue"><Zap size={24} /></div>

                    {/* The Code Window */}
                    <div className="code-window">
                        <div className="window-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="code-content">
                            <span className="code-line"><span className="c-purple">const</span> <span className="c-yellow">GrowthSystem</span> = () =&gt; {'{'}</span>
                            <span className="code-line">&nbsp;&nbsp;<span className="c-purple">return</span> (</span>
                            <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="c-green">AutoPilot</span></span>
                            <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-orange">leads</span>={'{'}<span className="c-blue">true</span>{'}'}</span>
                            <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-orange">sales</span>={'{'}<span className="c-blue">"24/7"</span>{'}'}</span>
                            <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</span>
                            <span className="code-line">&nbsp;&nbsp;);</span>
                            <span className="code-line">{'}'};</span>
                        </div>
                    </div>

                    {/* The Live Preview Card */}
                    <div className="preview-card">
                        <div className="preview-header">
                            <div className="preview-avatar"></div>
                            <div className="preview-lines">
                                <div className="p-line"></div>
                                <div className="p-line short"></div>
                            </div>
                        </div>
                        <div className="preview-stat">
                            <span className="stat-num">+124%</span>
                            <span className="stat-label">Conversion Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export About component
export default About;
