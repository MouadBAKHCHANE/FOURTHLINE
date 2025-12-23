import React, { useEffect } from 'react';
import { useLanguage } from '../App';
import { ArrowRight, Zap, Search, TrendingUp, Layers, Code, Globe, Database, Server } from 'lucide-react';
import SmallBusiness from './CRMPage';
import '../styles/Website.css';

import { GlowingEffectDemo } from '../components/GlowingEffectDemo';

const ServicesPage = () => {
    const { t } = useLanguage();
    const ws = t.websitePage;

    // Smooth scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="website-page">
            {/* Hero */}
            <section className="ws-hero">
                <div className="ws-hero-bg"></div>
                <div className="container ws-hero-container">
                    <div className="ws-hero-text">
                        <h1 className="ws-title">{ws.hero.title}</h1>
                        <p className="ws-subtitle">{ws.hero.subtitle}</p>
                        <a href="/Webtoleadform.html" className="btn-nova-glow">
                            <div className="btn-dot-indicator"></div> {ws.hero.cta}
                        </a>
                    </div>

                    <div className="ws-hero-visual">
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

            {/* Services Grid */}
            <section className="container ws-services">
                <div className="ws-services-grid">
                    <div className="ws-card">
                        <Zap size={40} className="text-yellow mb-4" />
                        <h3>{ws.services.landing.title}</h3>
                        <p>{ws.services.landing.desc}</p>
                    </div>
                    <div className="ws-card">
                        <Layers size={40} className="text-blue mb-4" />
                        <h3>{ws.services.multi.title}</h3>
                        <p>{ws.services.multi.desc}</p>
                    </div>
                </div>
            </section>


            {/* Tech Stack (The Arsenal) - Modern Redesign */}
            <section className="ws-stack-section">
                <div className="container">
                    <h2 className="ws-section-title">{ws.techStack.title}</h2>
                    <GlowingEffectDemo />
                </div>
            </section>





            {/* Premium Combo Equation - Below Arsenal */}
            <section className="ws-combo-section">
                <div className="container ws-combo-container">
                    <div className="ws-combo-part ws-combo-highlight">{ws.combo.part1}</div>
                    <div className="ws-combo-operator">+</div>
                    <div className="ws-combo-part ws-combo-highlight">{ws.combo.part2}</div>
                    <div className="ws-combo-operator">=</div>
                    <div className="ws-combo-part ws-combo-result">{ws.combo.result}</div>
                </div>
            </section>

            {/* CRM Section (Merged) */}
            <div className="merged-crm-section">
                <SmallBusiness />
            </div>

        </div>
    );
};

export default ServicesPage;
