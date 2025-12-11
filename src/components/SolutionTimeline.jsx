import React from 'react';
import { Search, Code, Cloud, Handshake } from 'lucide-react';
import '../styles/SolutionTimeline.css';

const steps = [
    {
        id: 1,
        title: 'The Audit',
        icon: <Search size={24} />,
        desc: 'We analyze your current sales data flow and identify bottlenecks.',
        week: 'Week 1'
    },
    {
        id: 2,
        title: 'The Build',
        icon: <Code size={24} />,
        desc: 'Development of high-performance site and Salesforce environment.',
        week: 'Week 2'
    },
    {
        id: 3,
        title: 'The Integration',
        icon: <Cloud size={24} />,
        desc: 'Connecting forms directly to CRM. The "Handshake" moment.',
        week: 'Week 3'
    },
    {
        id: 4,
        title: 'The Handover',
        icon: <Handshake size={24} />,
        desc: 'Training your team and handing over the keys to the engine.',
        week: 'Week 4'
    }
];

const SolutionTimeline = () => {
    return (
        <section className="solution-section" id="process">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">The Solution</h2>
                    <p className="section-subtitle">
                        From static brochure to automated sales engine in 4 weeks.
                    </p>
                </div>

                <div className="timeline-container">
                    {/* Connecting Line */}
                    <div className="timeline-line"></div>

                    <div className="steps-wrapper">
                        {steps.map((step, index) => (
                            <div key={step.id} className="timeline-step">
                                <div className="step-marker">
                                    <div className="step-icon glass-card">
                                        {step.icon}
                                    </div>
                                    <div className="step-dot"></div>
                                </div>
                                <div className="step-content glass-card">
                                    <span className="step-week">{step.week}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
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
