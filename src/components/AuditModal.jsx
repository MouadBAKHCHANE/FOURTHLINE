import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/AuditModal.css';
import { useLanguage } from '../App';

const AuditModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        goals: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend/Salesforce
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', email: '', company: '', website: '', goals: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                {!isSubmitted ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{t.hero.startBuild}</h2>
                            <p className="modal-subtitle">Ready to optimize your sales pipeline? Let's audit your system.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="audit-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Current Website</label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://test.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Primary Goal</label>
                                <select name="goals" value={formData.goals} onChange={handleChange}>
                                    <option value="">Select an objective...</option>
                                    <option value="leads">Generate More Leads</option>
                                    <option value="crm">Organize Sales Process (CRM)</option>
                                    <option value="automation">Automate Follow-ups</option>
                                    <option value="redesign">Complete Website Redesign</option>
                                </select>
                            </div>

                            <button type="submit" className="btn-submit">
                                Request Audit <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">
                            <CheckCircle size={48} color="#00A1E0" />
                        </div>
                        <h3>Request Received!</h3>
                        <p>Our team will analyze your digital footprint and reach out within 24 hours.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuditModal;
