import React, { useState, useEffect } from 'react';
import '../styles/QualificationForm.css';
import { useLanguage } from '../App';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight, Check, ArrowLeft, Globe, Database,
    Users, DollarSign, Send, Briefcase, Building, Layers
} from 'lucide-react';

const QualificationForm = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form Data - Matching WebToLead structure
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        company: '', role: '',
        goal: '',
        budget: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const totalSteps = 4;

    const handleNext = () => { if (step < totalSteps) setStep(step + 1); };
    const handleBack = () => { if (step > 1) setStep(step - 1); };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelect = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct Salesforce Form
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQH00000KAqzV';
        // form.target = '_blank'; // Optional

        const appendField = (name, value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value || '';
            form.appendChild(input);
        };

        appendField('oid', '00DQH00000KAqzV');
        appendField('retURL', 'https://www.seedsvision.com/small-business');

        // Map Standard Fields
        appendField('first_name', formData.firstName);
        appendField('last_name', formData.lastName);
        appendField('email', formData.email);
        appendField('phone', formData.phone);
        appendField('company', formData.company);

        // Map Custom Fields (IDs based on previous file)
        appendField('00NQH00000NSvqv', formData.role); // Role
        appendField('00NQH00000NPSK1', formData.goal); // Primary Goal (using ID from contact.html if applicable, or fallback)
        appendField('00NQH00000NSwLZ', formData.budget); // Budget/Investment

        document.body.appendChild(form);
        form.submit();
        setShowSuccess(true);
    };

    // Steps Configuration matching the screenshot visual
    const stepsConfig = [
        { num: 1, label: "Contact" },
        { num: 2, label: "Company" },
        { num: 3, label: "Project" },
        { num: 4, label: "Budget" }
    ];

    return (
        <div className="qual-page-wrapper">
            <div className="qual-card">

                {/* Stepper Header */}
                <div className="stepper-header">
                    <div className="step-line-bg"></div>
                    <div className="step-line-fill" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>

                    <div className="steps-container">
                        {stepsConfig.map((s) => (
                            <div key={s.num} className={`step-item ${step >= s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}>
                                <div className="step-circle">
                                    {step > s.num ? <Check size={16} /> : s.num}
                                </div>
                                <span className="step-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="qual-content">
                    <div className="qual-text-header">
                        <h2>Start Building</h2>
                        <p>Help us understand your needs</p>
                    </div>

                    <form onSubmit={handleSubmit} className="qual-form">

                        {/* Step 1: Contact */}
                        {step === 1 && (
                            <div className="form-step fade-in">
                                <div className="input-row">
                                    <div className="input-group">
                                        <label>First Name *</label>
                                        <input type="text" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Last Name *</label>
                                        <input type="text" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Email *</label>
                                    <input type="email" name="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" placeholder="+212 6..." value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Company */}
                        {step === 2 && (
                            <div className="form-step fade-in">
                                <div className="input-group">
                                    <label>Company Name *</label>
                                    <input type="text" name="company" placeholder="Acme Inc." value={formData.company} onChange={handleChange} required />
                                </div>

                                <label className="field-label mt-4">Your Role</label>
                                <div className="options-grid">
                                    {['CEO / Founder', 'Sales Director', 'Marketing Lead', 'Other'].map(role => (
                                        <div
                                            key={role}
                                            className={`option-card ${formData.role === role ? 'selected' : ''}`}
                                            onClick={() => handleSelect('role', role)}
                                        >
                                            <span className="opt-text">{role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Project */}
                        {step === 3 && (
                            <div className="form-step fade-in">
                                <label className="field-label">Primary Goal</label>
                                <div className="options-list">
                                    {[
                                        { val: 'Generate More Leads', icon: <Users size={18} /> },
                                        { val: 'Organize Sales (CRM)', icon: <Database size={18} /> },
                                        { val: 'Website Redesign', icon: <Globe size={18} /> },
                                        { val: 'Automation', icon: <Layers size={18} /> }
                                    ].map(goal => (
                                        <div
                                            key={goal.val}
                                            className={`list-option ${formData.goal === goal.val ? 'selected' : ''}`}
                                            onClick={() => handleSelect('goal', goal.val)}
                                        >
                                            <div className="opt-icon">{goal.icon}</div>
                                            <span className="opt-text">{goal.val}</span>
                                            {formData.goal === goal.val && <Check size={18} className="check-icon" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 4: Budget */}
                        {step === 4 && (
                            <div className="form-step fade-in">
                                <label className="field-label">Estimated Budget (MAD)</label>
                                <div className="options-grid">
                                    {['15k - 25k', '25k - 45k', '> 45k', 'Unsure'].map(b => (
                                        <div
                                            key={b}
                                            className={`option-card ${formData.budget === b ? 'selected' : ''}`}
                                            onClick={() => handleSelect('budget', b)}
                                        >
                                            <span className="opt-text">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="form-actions">
                            {step < totalSteps ? (
                                <button type="button" className="action-btn next" onClick={handleNext}>
                                    Next <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button type="submit" className="action-btn submit">
                                    Submit <Send size={18} />
                                </button>
                            )}

                            {step > 1 && (
                                <button type="button" className="back-link-btn" onClick={handleBack}>
                                    Back
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default QualificationForm;
