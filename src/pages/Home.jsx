import React, { useEffect } from 'react';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import SolutionAnimation from '../components/SolutionAnimation';
import Solutions from '../components/Solutions';
import SolutionTimeline from '../components/SolutionTimeline';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { useLocation } from 'react-router-dom';

import { Zap, Layers, Code } from 'lucide-react';
import GrowthFormula from '../components/GrowthFormula';
import { GlowingEffectDemo } from '../components/GlowingEffectDemo';
import SmallBusiness from './CRMPage';
import { useLanguage } from '../App';
import ResultsSection from '../components/ResultsSection';
import '../styles/Website.css'; // Needed for ws-hero styles

const Home = () => {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <About />
            <ProblemSection />
            <SolutionTimeline />


            {/* Premium Digital Footprint Visual (Moved from ServicesPage) */}
            <div className="container ws-hero-container" style={{ marginBottom: '80px' }}>
                <div className="ws-hero-text">
                    <div className="ws-hero-badges">
                        <div className="ws-hero-badge">Website</div>
                    </div>
                    <h1 className="ws-title">{t.websitePage.hero.title}</h1>
                    <p className="ws-subtitle">{t.websitePage.hero.subtitle}</p>
                    <a href="/Webtoleadform.html" className="btn-nova-glow">
                        <div className="btn-dot-indicator"></div> {t.websitePage.hero.cta}
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

            {/* Services Grid */}
            <section className="container ws-services">
                <div className="ws-services-grid">
                    <div className="ws-card">
                        <Zap size={40} className="text-yellow mb-4" />
                        <h3>{t.websitePage.services.landing.title}</h3>
                        <p>{t.websitePage.services.landing.desc}</p>
                    </div>
                    <div className="ws-card">
                        <Layers size={40} className="text-blue mb-4" />
                        <h3>{t.websitePage.services.multi.title}</h3>
                        <p>{t.websitePage.services.multi.desc}</p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="ws-stack-section">
                <div className="container">
                    <h2 className="ws-section-title">{t.websitePage.techStack.title}</h2>
                    <GlowingEffectDemo />
                </div>
            </section>

            {/* CRM Section */}
            <div className="merged-crm-section">
                <SmallBusiness />
            </div>

            <Services /> {/* Keeping original Pricing/Services component if needed, or remove if redundant with grid above? User said 'all section of services page under Work Process'. ServicesPage had a grid AND likely used Services component elsewhere? No, ServicesPage used GrowthFormula, Grid, GlowingEffect, SmallBusiness. It did NOT use <Services /> component. Home used <Services />. I will keep native Home <Services /> at bottom or remove? User said 'move ALL section of services page'. ServicesPage content effectively replaces Home's bottom half. I will comment out original Services and SolutionAnimation to be safe or just place them after? User said 'under Work Process'. I will assume they replace the Industries/Work content. I will keep SolutionAnimation at the end. */}

            <SolutionAnimation />
        </>
    );
};

export default Home;
