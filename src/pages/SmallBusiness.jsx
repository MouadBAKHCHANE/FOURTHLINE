import React from 'react';
import { useLanguage } from '../App';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Users } from 'lucide-react';
import '../styles/SmallBusiness.css';

const SmallBusiness = () => {
    const { t } = useLanguage();
    const sb = t.smallBusiness;

    return (
        <div className="small-business-page">
            {/* Hero Section */}
            <section className="sb-hero">
                <div className="container">
                    <h1 className="sb-title">
                        {sb.title.split(',')[0]},<br />
                        <span className="text-gradient">{sb.title.split(',')[1]}</span>
                    </h1>
                    <div className="sb-hook-card glass-card">
                        <h2>{sb.hook.title}</h2>
                        <p>{sb.hook.text}</p>
                        <div className="sb-value-prop">
                            <ShieldCheck className="text-blue" size={24} />
                            <p>{sb.hook.valueProp}</p>
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
                            <a href="#start-build" className="btn btn-outline full-width">
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
