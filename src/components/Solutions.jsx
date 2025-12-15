import React, { useState, useEffect } from 'react';
import '../styles/Solutions.css';
import { Truck, Building, GraduationCap, Briefcase, ChevronRight, BarChart3, Users, Globe, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../App';

const Solutions = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);
    const [animateDash, setAnimateDash] = useState(false);

    // Trigger animation reset on tab change
    useEffect(() => {
        setAnimateDash(true);
        const timer = setTimeout(() => setAnimateDash(false), 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    // Listen for footer clicks
    useEffect(() => {
        const handleSwitch = (e) => {
            setActiveTab(e.detail);
            document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' });
        };
        window.addEventListener('switchSector', handleSwitch);
        return () => window.removeEventListener('switchSector', handleSwitch);
    }, []);

    const industries = [
        {
            id: 'logistique',
            icon: <Truck />,
            title: t.solutionsSection.logistics.title,
            role: t.solutionsSection.logistics.role,
            pain: t.solutionsSection.logistics.pain,
            solution: t.solutionsSection.logistics.solution,
            result: t.solutionsSection.logistics.result,
            stats: [
                { label: "Quote Speed", val: "-80%", color: "#10b981" },
                { label: "Lost Leads", val: "0%", color: "#6366f1" }
            ],
            dashData: {
                title: t.solutionsSection.logistics.dashTitle,
                metric: "Pending Quotes",
                value: "12",
                list: t.solutionsSection.logistics.dashList
            }
        },
        {
            id: 'immobilier',
            icon: <Building />,
            title: t.solutionsSection.realEstate.title,
            role: t.solutionsSection.realEstate.role,
            pain: t.solutionsSection.realEstate.pain,
            solution: t.solutionsSection.realEstate.solution,
            result: t.solutionsSection.realEstate.result,
            stats: [
                { label: "Lead Velocity", val: "+45%", color: "#f59e0b" },
                { label: "Conversion", val: "12%", color: "#10b981" }
            ],
            dashData: {
                title: t.solutionsSection.realEstate.dashTitle,
                metric: "Active Buyers",
                value: "1,240",
                list: t.solutionsSection.realEstate.dashList
            }
        },
        {
            id: 'education',
            icon: <GraduationCap />,
            title: t.solutionsSection.education.title,
            role: t.solutionsSection.education.role,
            pain: t.solutionsSection.education.pain,
            solution: t.solutionsSection.education.solution,
            result: t.solutionsSection.education.result,
            stats: [
                { label: "Admin Time", val: "-60%", color: "#ec4899" },
                { label: "Enrollment", val: "+22%", color: "#10b981" }
            ],
            dashData: {
                title: t.solutionsSection.education.dashTitle,
                metric: "Applications",
                value: "854",
                list: t.solutionsSection.education.dashList
            }
        },
        {
            id: 'b2b',
            icon: <Briefcase />,
            title: t.solutionsSection.b2b.title,
            role: t.solutionsSection.b2b.role,
            pain: t.solutionsSection.b2b.pain,
            solution: t.solutionsSection.b2b.solution,
            result: t.solutionsSection.b2b.result,
            stats: [
                { label: "Signature Rate", val: "35%", color: "#8b5cf6" },
                { label: "Client LTV", val: "+20%", color: "#0ea5e9" }
            ],
            dashData: {
                title: t.solutionsSection.b2b.dashTitle,
                metric: "Active Contracts",
                value: "42",
                list: t.solutionsSection.b2b.dashList
            }
        }
    ];

    return (
        <section className="solutions-section" id="solutions">
            <div className="container">
                <div className="solutions-header">
                    <h2 className="section-title">
                        {t.solutionsSection.title} <span className="text-gradient">{t.solutionsSection.titleHighlight}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t.solutionsSection.subtitle}
                    </p>
                </div>

                <div className="solutions-grid">
                    {/* Left: Interactive Tabs */}
                    <div className="solutions-tabs">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className={`solution-tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="tab-icon-box">
                                    {item.icon}
                                </div>
                                <div className="tab-content">
                                    <h3 className="tab-title">{item.title}</h3>
                                    <p className="tab-role">{item.role}</p>

                                    <div className={`tab-details ${activeTab === index ? 'open' : ''}`}>
                                        <div className="detail-row pain">
                                            <div className="dot red"></div>
                                            <span>"{item.pain}"</span>
                                        </div>
                                        <div className="detail-row solution">
                                            <div className="dot green"></div>
                                            <span>{item.solution}</span>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className={`tab-arrow ${activeTab === index ? 'rotated' : ''}`} size={20} />
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Dashboard Visualization */}
                    <div className="dashboard-preview-container">
                        <div className="dashboard-frame">
                            {/* Dashboard Header */}
                            <div className="dash-header">
                                <div className="dash-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="dash-title-bar">
                                    <Globe size={14} className="dash-icon" />
                                    <span>fourthline-crm.com/{industries[activeTab].id}</span>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className={`dash-body ${animateDash ? 'fade-anim' : ''}`}>
                                <div className="dash-top-bar">
                                    <h4>{industries[activeTab].dashData.title}</h4>
                                    <div className="dash-user">
                                        <div className="user-avatar">AD</div>
                                    </div>
                                </div>

                                <div className="dash-stats-row">
                                    <div className="dash-stat-card main">
                                        <span className="stat-label">{industries[activeTab].dashData.metric}</span>
                                        <span className="stat-value">{industries[activeTab].dashData.value}</span>
                                        <div className="stat-chart-mini"></div>
                                    </div>
                                    <div className="dash-stat-card secondary">
                                        <span className="stat-label">Performance</span>
                                        <div className="stat-graph-lines">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="dash-list-view">
                                    <div className="list-header">Most Recent Activity</div>
                                    {industries[activeTab].dashData.list.map((line, i) => (
                                        <div key={i} className="list-item-row" style={{ animationDelay: `${i * 0.1}s` }}>
                                            <div className="status-indicator">
                                                <CheckCircle2 size={14} color="#10b981" />
                                            </div>
                                            <div className="list-text">{line}</div>
                                            <div className="list-meta">Just now</div>
                                        </div>
                                    ))}
                                    {/* Fake items to fill space */}
                                    <div className="list-item-row blur-1">
                                        <div className="status-indicator"><Clock size={14} color="#fbbf24" /></div>
                                        <div className="list-text">Pending Approval...</div>
                                    </div>
                                </div>

                                {/* Floating Result Badge */}
                                <div className="result-badge">
                                    <div className="badge-icon">
                                        <ArrowUpRight size={20} />
                                    </div>
                                    <div className="badge-content">
                                        <span className="badge-label">Impact</span>
                                        <span className="badge-val">{industries[activeTab].result}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
