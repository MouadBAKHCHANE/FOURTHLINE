import React, { useState, useEffect } from 'react';
import '../styles/QualificationForm.css';
import { useLanguage } from '../App';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight, Check, ArrowLeft, Briefcase, TrendingUp, Code, User,
    Truck, Building, GraduationCap, Factory, Globe, Layout, Database,
    Plug, Frown, Search, Zap, Clock, ShieldCheck, CreditCard, PieChart, CheckCircle
} from 'lucide-react';

const QualificationForm = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        role: '', roleOther: '', companyName: '', industry: '', industryOther: '',
        needType: '', websiteFormat: '', painPoint: '',
        crmChoice: '', crmUsers: '', crmOther: '', budget: '', budgetOther: '',
        name: '', email: '', phone: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const totalSteps = 4;
    const progress = ((step - 1) / totalSteps) * 100;

    const handleNext = () => { if (step < totalSteps) setStep(step + 1); };
    const handleBack = () => { if (step > 1) setStep(step - 1); };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setShowSuccess(true);

        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    const steps = [
        { num: 1, title: "Identity", subtitle: "Business & Role" },
        { num: 2, title: "Scope", subtitle: "Project Needs" },
        { num: 3, title: "Specs", subtitle: "CRM & Budget" },
        { num: 4, title: "Finalize", subtitle: "Contact Info" }
    ];

    return (
        <div className="qualification-wrapper">
            <div className="qualification-container">
                {/* Left Sidebar */}
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h3>Configuration</h3>
                        <p>Build your digital engine.</p>
                    </div>

                    <div className="steps-vertical">
                        {steps.map((s) => (
                            <div key={s.num} className={`step-row ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''} `}>
                                <div className="step-indicator">
                                    {step > s.num ? <Check size={16} /> : s.num}
                                </div>
                                <div className="step-content">
                                    <span className="step-title">{s.title}</span>
                                    <span className="step-subtitle">{s.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="sidebar-footer">
                        <div className="progress-label">Progress: {Math.round(((step - 1) / 4) * 100)}%</div>
                        <div className="progress-bar-bg-sm">
                            <div className="progress-bar-fill-sm" style={{ width: `${progress}% ` }}></div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="main-content">
                    <form onSubmit={handleSubmit} className="form-content">
                        {step === 1 && (
                            <div className="step-pane fade-in">
                                <h2 className="pane-title">Who are we building for?</h2>
                                <p className="pane-subtitle">Help us tailor the experience to your role.</p>

                                <label className="field-label">Your Role</label>
                                <div className="cards-grid">
                                    {[
                                        { val: 'Dirigeant / Gérant', icon: <Briefcase />, label: 'CEO / Founder' },
                                        { val: 'Directeur Commercial', icon: <TrendingUp />, label: 'Sales Director' },
                                        { val: 'DSI / Chef de Projet', icon: <Code />, label: 'Tech Lead' },
                                        { val: 'Autre', icon: <User />, label: 'Other' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`selection-card ${formData.role === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="role" value={opt.val} checked={formData.role === opt.val} onChange={handleChange} />
                                            <div className="card-icon">{opt.icon}</div>
                                            <span className="card-text">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {formData.role === 'Autre' && (
                                    <input type="text" name="roleOther" className="input-text mt-4" placeholder="Please specify your role" value={formData.roleOther} onChange={handleChange} />
                                )}

                                <label className="field-label mt-8">Industry Sector</label>
                                <div className="cards-grid">
                                    {[
                                        { val: 'Logistique', icon: <Truck />, label: 'Logistics' },
                                        { val: 'Immobilier', icon: <Building />, label: 'Real Estate' },
                                        { val: 'Education', icon: <GraduationCap />, label: 'Education' },
                                        { val: 'Services B2B', icon: <Briefcase />, label: 'Consulting' },
                                        { val: 'Industrie', icon: <Factory />, label: 'Industry' },
                                        { val: 'Autre', icon: <Globe />, label: 'Other' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`selection-card ${formData.industry === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="industry" value={opt.val} checked={formData.industry === opt.val} onChange={handleChange} />
                                            <div className="card-icon">{opt.icon}</div>
                                            <span className="card-text">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {formData.industry === 'Autre' && (
                                    <input type="text" name="industryOther" className="input-text mt-4" placeholder="Please specify your industry" value={formData.industryOther} onChange={handleChange} />
                                )}
                            </div>
                        )}

                        {step === 2 && (
                            <div className="step-pane fade-in">
                                <h2 className="pane-title">Define the Scope</h2>
                                <p className="pane-subtitle">What are the main components of your project?</p>

                                <label className="field-label">Core Needs</label>
                                <div className="cards-list">
                                    {[
                                        { val: 'Site Web', icon: <Layout />, label: 'Website Only', desc: 'High-performance digital presence.' },
                                        { val: 'CRM', icon: <Database />, label: 'CRM Setup', desc: 'Internal sales infrastructure.' },
                                        { val: 'Les Deux', icon: <Plug />, label: 'Website + CRM', desc: 'Integrated growth engine.' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`list-card ${formData.needType === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="needType" value={opt.val} checked={formData.needType === opt.val} onChange={handleChange} />
                                            <div className="list-icon">{opt.icon}</div>
                                            <div className="list-content">
                                                <span className="list-title">{opt.label}</span>
                                                <span className="list-desc">{opt.desc}</span>
                                            </div>
                                            {formData.needType === opt.val && <Check className="check-badge" size={20} />}
                                        </label>
                                    ))}
                                </div>

                                <label className="field-label mt-8">Primary Pain Point</label>
                                <div className="cards-grid">
                                    {[
                                        { val: 'Lost Leads', icon: <Frown />, label: 'Losing Leads' },
                                        { val: 'No Visibility', icon: <Search />, label: 'No Visibility' },
                                        { val: 'Slow Site', icon: <Zap />, label: 'Slow Website' },
                                        { val: 'Manual Work', icon: <Clock />, label: 'Manual Data' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`selection-card ${formData.painPoint === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="painPoint" value={opt.val} checked={formData.painPoint === opt.val} onChange={handleChange} />
                                            <div className="card-icon">{opt.icon}</div>
                                            <span className="card-text">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="step-pane fade-in">
                                <h2 className="pane-title">Technical Specs</h2>
                                <p className="pane-subtitle">Structuring the deal.</p>

                                <label className="field-label">Preferred CRM Platform</label>
                                <div className="cards-grid two-col">
                                    {[
                                        { val: 'Salesforce', icon: <img src="/assets/salesforce.png" alt="Salesforce" className="crm-logo" />, label: 'Salesforce', sub: 'World Leader' },
                                        { val: 'Odoo', icon: <img src="/assets/odoo_v2.png" alt="Odoo" className="crm-logo" />, label: 'Odoo', sub: 'Open Source' },
                                        { val: 'Autre', icon: <Database />, label: 'Other', sub: 'Specify Below' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`selection-card large ${formData.crmChoice === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="crmChoice" value={opt.val} checked={formData.crmChoice === opt.val} onChange={handleChange} />
                                            <div className="card-icon">{opt.icon}</div>
                                            <span className="card-text">{opt.label}</span>
                                            <span className="card-sub">{opt.sub}</span>
                                        </label>
                                    ))}
                                </div>
                                {formData.crmChoice === 'Autre' && (
                                    <input type="text" name="crmOther" className="input-text mt-4" placeholder="Please specify your CRM" value={formData.crmOther} onChange={handleChange} />
                                )}

                                <label className="field-label mt-8">Investment Range</label>
                                <div className="cards-list compact">
                                    {[
                                        { val: 'Essential', icon: <CreditCard />, label: '15k - 25k MAD', desc: 'Starter Package' },
                                        { val: 'Growth', icon: <PieChart />, label: '25k - 45k MAD', desc: 'Most Popular' },
                                        { val: 'Enterprise', icon: <ShieldCheck />, label: '> 45k MAD', desc: 'Full Custom' },
                                        { val: 'Autre', icon: <Briefcase />, label: 'Other', desc: 'Custom Budget' }
                                    ].map(opt => (
                                        <label key={opt.val} className={`list-card ${formData.budget === opt.val ? 'selected' : ''} `}>
                                            <input type="radio" name="budget" value={opt.val} checked={formData.budget === opt.val} onChange={handleChange} />
                                            <div className="list-icon sm">{opt.icon}</div>
                                            <div className="list-content">
                                                <span className="list-title">{opt.label}</span>
                                                <span className="list-desc">{opt.desc}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                {formData.budget === 'Autre' && (
                                    <input type="text" name="budgetOther" className="input-text mt-4" placeholder="Please specify your budget" value={formData.budgetOther} onChange={handleChange} />
                                )}
                            </div>
                        )}

                        {step === 4 && (
                            <div className="step-pane fade-in">
                                <h2 className="pane-title">Final Touch</h2>
                                <p className="pane-subtitle">Where should we send the proposal?</p>

                                <div className="contact-form-grid">
                                    <div className="input-group">
                                        <label>Full Name</label>
                                        <input type="text" name="name" className="input-text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" name="email" className="input-text" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" className="input-text" placeholder="+212 6..." value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Company Name</label>
                                        <input type="text" name="companyName" className="input-text" placeholder="Acme Corp" value={formData.companyName} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="form-footer">
                            {step > 1 ? (
                                <button type="button" className="nav-btn prev" onClick={handleBack}>
                                    <ArrowLeft size={18} /> Back
                                </button>
                            ) : <div></div>}

                            {step < totalSteps ? (
                                <button type="button" className="nav-btn next" onClick={handleNext}>
                                    Next Step <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button type="submit" className="nav-btn submit">
                                    Submit Request <Check size={18} />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div >

            {/* Success Popup Overlay */}
            {showSuccess && (
                <div className="success-overlay fade-in">
                    <div className="success-card-popup">
                        <div className="success-icon-wrapper">
                            <CheckCircle size={48} color="#10b981" />
                        </div>
                        <h3>Request Received!</h3>
                        <p>We'll be in touch shortly to discuss your project.</p>
                    </div>
                </div>
            )}
        </div >
    );
};

export default QualificationForm;
