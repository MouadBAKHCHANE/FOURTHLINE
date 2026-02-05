import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, ChevronRight, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Careers.css';

const Careers = () => {
    const { t } = useLanguage();
    const jobs = t.careersPage.jobs;

    return (
        <div className="careers-page">
            <div className="container">
                <div className="careers-hero">
                    <h1 className="careers-title">{t.careersPage.title} <span className="text-gradient">{t.careersPage.highlight}</span></h1>
                    <p className="careers-subtitle">
                        {t.careersPage.subtitle}
                    </p>
                </div>

                <div className="jobs-grid">
                    {jobs.map((job) => (
                        <Link to={`/careers/${job.id}`} key={job.id} className="job-card">
                            <div className="job-info">
                                <h3 className="job-title">{job.title}</h3>
                                <div className="job-meta">
                                    <span><MapPin size={14} /> {job.location}</span>
                                    <span><Briefcase size={14} /> {job.department}</span>
                                    <span><Clock size={14} /> {job.type}</span>
                                </div>
                            </div>
                            <ChevronRight className="job-arrow" size={24} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
