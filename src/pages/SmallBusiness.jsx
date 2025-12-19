import React, { useState } from 'react';
import { useLanguage } from '../App';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Users } from 'lucide-react';
import '../styles/SmallBusiness.css';

const SmallBusiness = () => {
    const { t } = useLanguage();
    const sb = t.smallBusiness;
    const [activeTab, setActiveTab] = useState('sales');

    return (
        <div className="small-business-page">
            {/* Hero Section */}
            <section className="sb-hero">
                <div className="sb-hero-bg"></div>
                <div className="container sb-hero-container">
                    <div className="sb-hero-content">
                        <div className="sb-badge">
                            <span className="dot"></span> {sb.navLink}
                        </div>
                        <h1 className="sb-title">
                            {sb.title.split(',')[0]}
                            <br />
                            <span className="text-gradient">{sb.title.split(',')[1]}</span>
                        </h1>
                        <p className="sb-subtitle">
                            {sb.hook.valueProp}
                        </p>
                        <div className="sb-hero-actions">
                            <a href="#start-build" className="btn btn-primary btn-lg btn-glow">
                                {sb.cta} <ArrowRight size={20} />
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

                            <div className="floating-badge">
                                <Zap size={16} fill="currentColor" /> {sb.hook.title}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="sb-packages section-padding">
                <div className="container">
                    <div className="packages-grid">
                        {/* Launchpad Package */}
                        <div className="sb-package-card glass-card">
                            <div className="package-header">
                                <h3>{sb.packages.launchpad.name}</h3>
                                <div className="target-badge">{sb.packages.launchpad.target}</div>
                            </div>
                            <ul className="package-features">
                                <li><CheckCircle size={18} className="text-green" /> {sb.packages.launchpad.feat1}</li>
                                <li><CheckCircle size={18} className="text-green" /> {sb.packages.launchpad.feat2}</li>
                                <li><CheckCircle size={18} className="text-green" /> {sb.packages.launchpad.feat3}</li>
                                <li><CheckCircle size={18} className="text-green" /> {sb.packages.launchpad.feat4}</li>
                            </ul>
                            <a href="#start-build" className="btn btn-secondary full-width">
                                {sb.cta} <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* Engine Package */}
                        <div className="sb-package-card glass-card featured">
                            <div className="featured-tag">POPULAR</div>
                            <div className="package-header">
                                <h3>{sb.packages.engine.name}</h3>
                                <div className="target-badge accent">{sb.packages.engine.target}</div>
                            </div>
                            <ul className="package-features">
                                <li><CheckCircle size={18} className="text-blue" /> {sb.packages.engine.feat1}</li>
                                <li><CheckCircle size={18} className="text-blue" /> {sb.packages.engine.feat2}</li>
                                <li><CheckCircle size={18} className="text-blue" /> {sb.packages.engine.feat3}</li>
                                <li><CheckCircle size={18} className="text-blue" /> {sb.packages.engine.feat4}</li>
                            </ul>
                            <a href="#start-build" className="btn btn-primary full-width">
                                {sb.cta} <ArrowRight size={16} />
                            </a>
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
                                <a href="#start-build" className="btn btn-outline">
                                    {sb.featureTabs.content[activeTab].btn} <ArrowRight size={16} />
                                </a>
                            </div>
                            <div className="tab-visual-wrapper">
                                <div className={`tab-visual ${activeTab}`}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Industries Section */}
            <section className="sb-industries section-padding">
                <div className="container">
                    <div className="industries-grid">
                        <div className="industry-card glass-card">
                            <Users size={32} className="text-blue mb-4" />
                            <h4>{sb.industries.agencies}</h4>
                            <p>{sb.industries.agenciesDesc}</p>
                        </div>
                        <div className="industry-card glass-card">
                            <Zap size={32} className="text-yellow mb-4" />
                            <h4>{sb.industries.retail}</h4>
                            <p>{sb.industries.retailDesc}</p>
                        </div>
                        <div className="industry-card glass-card">
                            <CheckCircle size={32} className="text-green mb-4" />
                            <h4>{sb.industries.local}</h4>
                            <p>{sb.industries.localDesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section (Old Way vs New Way) */}
            <section className="sb-comparison section-padding">
                <div className="container">
                    <div className="comparison-wrapper glass-card">
                        <div className="comparison-side old-way">
                            <div className="overlay-text">{sb.comparison.oldWay}</div>
                            {/* Placeholder for the image that failed generation - CSS styled instead */}
                            <div className="comparison-visual messy-desk"></div>
                        </div>
                        <div className="comparison-side new-way">
                            <div className="overlay-text">{sb.comparison.newWay}</div>
                            {/* CSS styled placeholder */}
                            <div className="comparison-visual clean-dashboard"></div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SmallBusiness;
