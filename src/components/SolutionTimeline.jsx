import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Cloud, Handshake } from 'lucide-react';
import '../styles/SolutionTimeline.css';
import { useLanguage } from '../App';

const SolutionTimeline = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            title: t.solution.step1Title,
            icon: <Search size={24} />,
            desc: t.solution.step1Desc
        },
        {
            id: 2,
            title: t.solution.step2Title,
            icon: <Code size={24} />,
            desc: t.solution.step2Desc
        },
        {
            id: 3,
            title: t.solution.step3Title,
            icon: <Cloud size={24} />,
            desc: t.solution.step3Desc
        },
        {
            id: 4,
            title: t.solution.step4Title,
            icon: <Handshake size={24} />,
            desc: t.solution.step4Desc
        }
    ];

    return (
        <section className="solution-section" id="process">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.solution.title}</h2>
                    <p className="section-subtitle">
                        {t.solution.subtitle}
                    </p>
                </div>

                <div className="timeline-container">
                    {/* Connecting Line */}
                    <div className="timeline-line"></div>



                    <div className="steps-wrapper">
                        {steps.map((step) => (
                            <div key={step.id} className="timeline-step">
                                <div className="step-marker">
                                    <div className="step-icon glass-card">
                                        {step.icon}
                                    </div>
                                    <div className="step-dot"></div>
                                </div>
                                <div className="step-content glass-card">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    {step.id === 2 && (
                                        <Link to="/website" className="btn btn-outline btn-sm mt-3">{t.nav.product}</Link>
                                    )}
                                    {step.id === 3 && (
                                        <Link to="/crm" className="btn btn-outline btn-sm mt-3">{t.smallBusiness.navLink}</Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionTimeline;
