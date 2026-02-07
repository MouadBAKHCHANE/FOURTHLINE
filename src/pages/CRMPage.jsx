import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ComparisonSlider from '../components/ComparisonSlider';
import HeroBackground from '../components/HeroBackground';
import { ArrowRight, ShieldCheck, TrendingUp, Megaphone, Bot, BarChart } from 'lucide-react';
import Services from '../components/Services';
import Solutions from '../components/Solutions';

import '../styles/TechnologiesPage.css';



const CRMPage = () => {
    const { t } = useLanguage();
    const sb = t.smallBusiness;
    const [activeTab, setActiveTab] = useState('sales'); // Kept for now, but will be removed if featureTabs section is removed

    return (
        <div className="technologies-page">

            {/* Hero Section */}
            <section className="sb-hero">
                <HeroBackground />
                <div className="sb-hero-bg"></div>
                <div className="container sb-hero-container">
                    <div className="sb-hero-content">
                        <h1 className="sb-title">
                            The Engine Behind Your <span className="text-gradient">Expansion</span>
                        </h1>
                        <p className="sb-subtitle">
                            {sb.hook.valueProp}
                        </p>
                        <div className="sb-hero-actions">
                            <a href="/Webtoleadform.html" className="btn-nova-glow">
                                <div className="btn-dot-indicator"></div> {sb.cta}
                            </a>
                        </div>
                    </div>

                    <div className="sb-hero-visual">
                        <div className="glass-stack">
                            {/* Contact Card (Left) */}
                            <div className="stack-card contact-card">
                                <div className="card-dots">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                <div className="card-header-text">Contact Us</div>
                                <div className="card-body-empty"></div>
                            </div>

                            {/* Arrow */}
                            <div className="transform-arrow">
                                <div className="arrow-line-dotted"></div>
                                <div className="arrow-dot"></div>
                            </div>

                            {/* Pipeline Card (Right) */}
                            <div className="stack-card pipeline-card">
                                <div className="card-header-simple">
                                    <div className="header-icon-square"></div>
                                    <span>Sales Pipeline</span>
                                </div>
                                <div className="pipeline-columns">
                                    <div className="col">
                                        <div className="col-header">NEW LEADS</div>
                                        <div className="col-item"></div>
                                        <div className="col-item"></div>
                                    </div>
                                    <div className="col active">
                                        <div className="col-header">QUALIFIED</div>
                                        <div className="col-item highlight"></div>
                                    </div>
                                    <div className="col">
                                        <div className="col-header">CLOSED</div>
                                        <div className="col-item"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >



            {/* Feature Tabs Section */}
            {
                sb.featureTabs && (
                    <section className="sb-tabs-section section-padding">
                        <div className="container">
                            <div className="tabs-header">
                                <h2 className="tabs-title">{sb.featureTabs.title}</h2>
                            </div>

                            <div className="tabs-nav">
                                {Object.entries(sb.featureTabs.tabs).map(([key, label]) => (
                                    <button
                                        key={key}
                                        className={`tab-btn ${activeTab === key ? 'active' : ''} `}
                                        onClick={() => setActiveTab(key)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <div className="tab-content" key={activeTab}>
                                <div className="tab-text">
                                    <h3>{sb.featureTabs.content[activeTab].title}</h3>
                                    <p>{sb.featureTabs.content[activeTab].desc}</p>
                                    <a href="/Webtoleadform.html" className="btn btn-outline">
                                        {sb.featureTabs.content[activeTab].btn} <ArrowRight size={16} />
                                    </a>
                                </div>
                                <div className="tab-visual-wrapper">
                                    <div className={`tab-visual ${activeTab}`}>
                                        <div className="visual-backdrop"></div>
                                        <div className="floating-icon-badge">
                                            {activeTab === 'sales' && <TrendingUp size={24} />}
                                            {activeTab === 'service' && <ShieldCheck size={24} />}
                                            {activeTab === 'marketing' && <Megaphone size={24} />}
                                            {activeTab === 'ai' && <Bot size={24} />}
                                            {activeTab === 'analytics' && <BarChart size={24} />}
                                        </div>
                                        {activeTab === 'sales' && (
                                            <img src="/assets/salesforce_dashboard_preview.webp" alt="Salesforce Sales Dashboard" />
                                        )}
                                        {activeTab === 'service' && (
                                            <img src="/assets/service_dashboard_preview.webp" alt="Salesforce Service Dashboard" />
                                        )}
                                        {activeTab === 'marketing' && (
                                            <img src="/assets/marketing_cloud_dashboard.webp" alt="Salesforce Marketing Cloud Dashboard" />
                                        )}
                                        {activeTab === 'ai' && (
                                            <img src="/assets/agentforce_dashboard.webp" alt="Salesforce Agentforce AI & Automation" />
                                        )}
                                        {activeTab === 'analytics' && (
                                            <img src="/assets/analytics_dashboard.webp" alt="Salesforce Einstein Analytics Dashboard" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }








            {/* Industries / Expertise Section (Moved from Home) */}
            <Solutions />



            {/* Comparison Slider Section */}
            <ComparisonSlider />

            {/* Services Table (Moved from Home) */}
            <Services />

        </div >
    );
};

export default CRMPage;
