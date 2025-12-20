import React from 'react';
import { useLanguage } from '../App';
import { Zap, Layers, Code, ArrowRight } from 'lucide-react';
import '../styles/TechStack.css';

const TechStack = () => {
    const { t } = useLanguage();
    const tech = t.techStack;

    if (!tech) return null;

    return (
        <section className="tech-stack-section">
            <div className="container">
                <div className="section-header text-center mb-60" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">{tech.title}</h2>
                </div>
                <div className="tech-grid">
                    {/* Framer/Webflow */}
                    <div className="tech-card glass-card">
                        <div className="tech-icon-wrapper purple">
                            <Zap size={40} />
                        </div>
                        <div className="tech-content">
                            <span className="tech-platform">{tech.cards.nocode.platform}</span>
                            <h3>{tech.cards.nocode.title}</h3>
                            <p>{tech.cards.nocode.desc}</p>
                        </div>
                    </div>

                    {/* WordPress */}
                    <div className="tech-card glass-card">
                        <div className="tech-icon-wrapper blue">
                            <Layers size={40} />
                        </div>
                        <div className="tech-content">
                            <span className="tech-platform">{tech.cards.cms.platform}</span>
                            <h3>{tech.cards.cms.title}</h3>
                            <p>{tech.cards.cms.desc}</p>
                        </div>
                    </div>

                    {/* Custom Stack */}
                    <div className="tech-card glass-card">
                        <div className="tech-icon-wrapper green">
                            <Code size={40} />
                        </div>
                        <div className="tech-content">
                            <span className="tech-platform">{tech.cards.custom.platform}</span>
                            <h3>{tech.cards.custom.title}</h3>
                            <p>{tech.cards.custom.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="tech-cta-wrapper">
                    <a href="#start-build" className="btn btn-primary btn-glow btn-lg">
                        {tech.cta} <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
