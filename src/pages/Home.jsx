import React, { useEffect } from 'react';
import About from '../components/About';
import ProblemSection from '../components/ProblemSection';
import SolutionAnimation from '../components/SolutionAnimation';
import Solutions from '../components/Solutions';
import SolutionTimeline from '../components/SolutionTimeline';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { useLocation } from 'react-router-dom';

import { Zap, Layers, Code, Smartphone, ShoppingCart, Webhook, FileText, LifeBuoy, ShieldCheck, Globe } from 'lucide-react';
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
            <div id="website-section" className="container ws-hero-container" style={{ marginBottom: '80px' }}>
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
                <h2 className="ws-section-title text-center mb-10">{t.websitePage.services.title}</h2>
                <div className="ws-services-grid">
                    <ServiceCard icon={<Globe size={40} className="text-purple-400 mb-4" />} data={t.websitePage.services.custom} />
                    <ServiceCard icon={<Smartphone size={40} className="text-blue-400 mb-4" />} data={t.websitePage.services.responsive} />
                    <ServiceCard icon={<ShoppingCart size={40} className="text-pink-400 mb-4" />} data={t.websitePage.services.ecommerce} />
                    <ServiceCard icon={<Webhook size={40} className="text-green-400 mb-4" />} data={t.websitePage.services.api} />
                    <ServiceCard icon={<FileText size={40} className="text-orange-400 mb-4" />} data={t.websitePage.services.cms} />
                    <ServiceCard icon={<LifeBuoy size={40} className="text-red-400 mb-4" />} data={t.websitePage.services.support} />
                    <ServiceCard icon={<ShieldCheck size={40} className="text-teal-400 mb-4" />} data={t.websitePage.services.qa} />
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
            <div id="crm-section" className="merged-crm-section">
                <SmallBusiness />
            </div>

            <Services /> {/* Keeping original Pricing/Services component if needed, or remove if redundant with grid above? User said 'all section of services page under Work Process'. ServicesPage had a grid AND likely used Services component elsewhere? No, ServicesPage used GrowthFormula, Grid, GlowingEffect, SmallBusiness. It did NOT use <Services /> component. Home used <Services />. I will keep native Home <Services /> at bottom or remove? User said 'move ALL section of services page'. ServicesPage content effectively replaces Home's bottom half. I will comment out original Services and SolutionAnimation to be safe or just place them after? User said 'under Work Process'. I will assume they replace the Industries/Work content. I will keep SolutionAnimation at the end. */}

            <SolutionAnimation />
        </>
    );
};

const ServiceCard = ({ icon, data }) => (
    <div className="ws-card group">
        <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
            {icon}
        </div>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
    </div>
);

export default Home;
