import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ComparisonSlider from '../components/ComparisonSlider';
import HeroBackground from '../components/HeroBackground';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Users, Layers, Code, Globe, TrendingUp, Megaphone, Bot, BarChart, Smartphone, ShoppingCart, Webhook, FileText, LifeBuoy } from 'lucide-react';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import { GlowingEffectDemo } from '../components/GlowingEffectDemo';
import '../styles/TechnologiesPage.css';

const ServiceCard = ({ icon, data }) => (
    <div className="ws-card group">
        <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
            {icon}
        </div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>{data.title}</h3>
        <p>{data.desc}</p>
    </div>
);

const TechnologiesPage = () => {
    const { t } = useLanguage();
    const sb = t.smallBusiness;
    const [activeTab, setActiveTab] = useState('sales');

    return (
        <div className="small-business-page">
            {/* Hero Section */}
            <section className="sb-hero">
                <HeroBackground />
                <div className="sb-hero-bg"></div>
                <div className="container sb-hero-container">
                    <div className="sb-hero-content">
                        <h1 className="sb-title">
                            {sb.title.split(',')[0]}
                            <br />
                            <span className="text-gradient">{sb.title.split(',')[1]}</span>
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
                            <div className="stack-card excel-card">
                                <div className="card-header-bar red"></div>
                                <div className="card-row"></div>
                                <div className="card-row"></div>
                                <div className="card-row"></div>
                                <div className="excel-tag">Spreadsheets</div>
                            </div>

                            <div className="transform-arrow">
                                <div className="arrow-line"></div>
                                <ArrowRight size={24} className="arrow-icon" />
                            </div>

                            <div className="stack-card crm-card">
                                <div className="card-header-bar blue"></div>
                                <div className="crm-stat">
                                    <div className="stat-label">Pipeline</div>
                                    <div className="stat-value text-blue">$45k</div>
                                </div>
                                <div className="crm-graph">
                                    <div className="bar" style={{ height: '40%' }}></div>
                                    <div className="bar" style={{ height: '70%' }}></div>
                                    <div className="bar" style={{ height: '100%' }}></div>
                                </div>
                                <div className="crm-tag">Salesforce</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* Feature Tabs Section */}
            {sb.featureTabs && (
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
            )}




            {/* Services Grid (Moved from Home) */}
            <section className="container ws-services section-padding">
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

            {/* Tech Stack (Moved from Home) */}
            <section className="ws-stack-section section-padding">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        Our <span className="text-gradient">Technologies</span>
                    </h2>
                    <GlowingEffectDemo />
                </div>
            </section>

            {/* Industries / Expertise Section (Moved from Home) */}
            <Solutions />

            {/* Services Table (Moved from Home) */}
            <Services />

            {/* Comparison Slider Section */}
            <ComparisonSlider />

        </div>
    );
};

export default TechnologiesPage;
