import React, { useState, useRef } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/AuditModal.css';
import { useLanguage } from '../App';

const AuditModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        url: '', // Website maps to 'url'
        '00NQH00000NPSK1': '' // Primary Goal ID
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const iframeRef = useRef(null);

    if (!isOpen) return null;

    const handleSubmit = () => {
        // We let the form submit naturally to the iframe, then show success
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                company: '',
                url: '',
                '00NQH00000NPSK1': ''
            });
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

                        {/* hidden iframe for submission target */}
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} ref={iframeRef}></iframe>

                        <form
                            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQH00000K6psL"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="audit-form"
                        >
                            <input type="hidden" name="oid" value="00DQH00000K6psL" />
                            <input type="hidden" name="retURL" value="http://localhost:5173/" />

                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
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
                                    maxLength="80"
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
                                        maxLength="40"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Current Website</label>
                                    <input
                                        type="text"
                                        name="url"
                                        value={formData.url}
                                        onChange={handleChange}
                                        placeholder="https://test.com"
                                        maxLength="80"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Primary Goal</label>
                                <select
                                    id="00NQH00000NPSK1"
                                    name="00NQH00000NPSK1"
                                    value={formData['00NQH00000NPSK1']}
                                    onChange={handleChange}
                                    title="Primary Goal"
                                >
                                    <option value="">Select an objective...</option>
                                    <option value="Generate More Leads">Generate More Leads</option>
                                    <option value="Organize Sales Process (CRM)">Organize Sales Process (CRM)</option>
                                    <option value="Automate Follow-ups">Automate Follow-ups</option>
                                    <option value="Complete Website Redesign">Complete Website Redesign</option>
                                </select>
                            </div>

                            <button type="submit" name="submit" className="btn-submit">
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
