import React, { useState } from 'react';
import { X, Upload, CheckCircle2 } from 'lucide-react';

const JobApplicationModal = ({ job, onClose }) => {
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Show success
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    if (step === 2) {
        return (
            <div className="job-modal-overlay">
                <div className="job-modal" style={{ textAlign: 'center', padding: '60px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <CheckCircle2 size={64} color="#10b981" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Application Sent!</h3>
                    <p style={{ color: '#94a3b8' }}>We will review your profile and get back to you.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="job-modal-overlay">
            <div className="job-modal">
                <button className="modal-close" onClick={onClose}><X size={24} /></button>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', fontWeight: '700' }}>Apply for {job.title}</h2>
                <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '0.9rem' }}>Shape the future of Moroccan tech.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Full Name</label>
                        <input type="text" required
                            style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff'
                            }}
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Email</label>
                        <input type="email" required
                            style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff'
                            }}
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>LinkedIn URL</label>
                        <input type="url" required
                            style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff'
                            }}
                            placeholder="linkedin.com/in/johndoe"
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Resume / CV</label>
                        <div style={{
                            border: '1px dashed rgba(255,255,255,0.2)', padding: '20px', borderRadius: '8px',
                            textAlign: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.02)'
                        }}>
                            <Upload size={20} style={{ margin: '0 auto 8px', color: '#64748b' }} />
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Click to upload PDF</span>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                        Submit Application
                    </button>

                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
