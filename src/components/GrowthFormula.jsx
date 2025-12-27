import React, { useEffect, useRef, useState } from 'react';
import '../styles/GrowthFormula.css';
import { useLanguage } from '../App';
import { Sprout, Globe, Database, Rocket, Sparkles, TrendingUp, Zap } from 'lucide-react';

const GrowthFormula = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={`growth-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            {/* Animated Background Particles */}
            <div className="growth-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        '--delay': `${Math.random() * 5}s`,
                        '--x': `${Math.random() * 100}%`,
                        '--size': `${Math.random() * 6 + 2}px`
                    }}></div>
                ))}
            </div>

            {/* Central Glow */}
            <div className="growth-glow"></div>

            <div className="container">
                {/* The Transformation Journey */}
                <div className="transformation-container">

                    {/* Stage 1: The Seed (Your Idea) */}
                    <div className="stage stage-seed">
                        <div className="stage-icon">
                            <Sprout size={32} />
                        </div>
                        <div className="stage-content">
                            <span className="stage-label">{t.stats.formula?.seed || 'Your Vision'}</span>
                        </div>
                        <div className="seed-glow"></div>
                    </div>

                    {/* Connector Line with Animation */}
                    <div className="connector">
                        <div className="connector-line"></div>
                        <div className="connector-pulse"></div>
                    </div>

                    {/* Stage 2: The Tools (Website + CRM) */}
                    <div className="stage stage-tools">
                        <div className="tools-wrapper">
                            <div className="tool-card tool-website">
                                <div className="tool-icon">
                                    <Globe size={28} />
                                </div>
                                <span className="tool-title">{t.stats.formula?.item1 || 'Premium Website'}</span>
                                <div className="tool-shine"></div>
                            </div>

                            <div className="plus-symbol">
                                <Zap size={24} />
                            </div>

                            <div className="tool-card tool-crm">
                                <div className="tool-icon">
                                    <Database size={28} />
                                </div>
                                <span className="tool-title">{t.stats.formula?.item2 || 'Powerful CRM'}</span>
                                <div className="tool-shine"></div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line with Animation */}
                    <div className="connector connector-final">
                        <div className="connector-line"></div>
                        <div className="connector-pulse"></div>
                    </div>

                    {/* Stage 3: The Result (Scale & Grow) */}
                    <div className="stage stage-result">
                        <div className="result-badge">
                            <Rocket size={40} className="result-icon" />
                            <span className="result-text">{t.stats.formula?.result || 'Scale & Grow'}</span>
                            <Sparkles size={20} className="sparkle-left" />
                            <Sparkles size={16} className="sparkle-right" />
                        </div>
                        <div className="result-glow"></div>

                        {/* Orbiting Stats */}
                        <div className="orbit-ring">
                            <div className="orbit-item orbit-1">
                                <TrendingUp size={16} />
                                <span>+300%</span>
                            </div>
                            <div className="orbit-item orbit-2">
                                <Zap size={16} />
                                <span>24/7</span>
                            </div>
                            <div className="orbit-item orbit-3">
                                <Sparkles size={16} />
                                <span>∞</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Tagline */}
                <p className="growth-tagline">
                    {t.stats.formula?.tagline || 'From idea to empire. We build the infrastructure for your digital dominance.'}
                </p>

            </div>
        </section>
    );
};

export default GrowthFormula;
