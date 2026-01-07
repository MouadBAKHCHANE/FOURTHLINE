import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2 } from 'lucide-react';
import JobApplicationModal from '../components/JobApplicationModal';
import '../styles/Careers.css';

const JobDetail = () => {
    const { id } = useParams();
    const { t } = useLanguage();
    const jobs = t.careersPage.jobs;
    const job = jobs.find(j => j.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!job) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>{t.careersPage.detail.notFound}</h2>
                <Link to="/careers" className="btn btn-secondary">{t.careersPage.detail.backCareers}</Link>
            </div>
        );
    }

    return (
        <div className="careers-page">
            <div className="container">
                <Link to="/careers" className="back-link" style={{ marginBottom: '30px' }}>
                    <ArrowLeft size={16} /> {t.careersPage.detail.back}
                </Link>

                <div className="job-detail-container">
                    <div className="detail-header">
                        <h1 className="detail-title">{job.title}</h1>
                        <div className="detail-tags">
                            <span className="tag-pill"><MapPin size={12} style={{ marginRight: '6px' }} /> {job.location}</span>
                            <span className="tag-pill"><Briefcase size={12} style={{ marginRight: '6px' }} /> {job.department}</span>
                            <span className="tag-pill"><Clock size={12} style={{ marginRight: '6px' }} /> {job.type}</span>
                        </div>
                    </div>

                    <div className="detail-content">
                        <div className="detail-section">
                            <h3>{t.careersPage.detail.role}</h3>
                            <p>{job.description}</p>
                        </div>

                        <div className="detail-section">
                            <h3>{t.careersPage.detail.requirements}</h3>
                            <ul>
                                {job.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-section">
                            <h3>{t.careersPage.detail.benefits}</h3>
                            <ul>
                                {job.benefits.map((ben, i) => (
                                    <li key={i}>{ben}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="apply-bar">
                        <div className="apply-text">
                            <strong style={{ display: 'block', fontSize: '1.1rem' }}>{t.careersPage.detail.interested}</strong>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{t.careersPage.detail.join}</span>
                        </div>
                        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                            {t.careersPage.detail.apply}
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && <JobApplicationModal job={job} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default JobDetail;
