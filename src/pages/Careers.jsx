import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, ChevronRight, Clock } from 'lucide-react';
import { jobs } from '../data/jobs';
import '../styles/Careers.css';

const Careers = () => {
    return (
        <div className="careers-page">
            <div className="container">
                <div className="careers-hero">
                    <h1 className="careers-title">Join the <span className="text-gradient">Empire</span></h1>
                    <p className="careers-subtitle">
                        We are building the digital infrastructure for Moroccan commerce.
                        We don't just build websites; we build revenue engines.
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
