import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Map, Palette, PenTool, Code, Rocket, Database } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import '../styles/SolutionTimeline.css';
import { useLanguage } from '../contexts/LanguageContext';

const Card = ({ i, children }) => {
    return (
        <div className="timeline-step">
            {children}
        </div>
    );
};

const SolutionTimeline = () => {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            title: t.solution.step1Title,
            icon: <Map size={24} />,
            desc: t.solution.step1Desc
        },
        {
            id: 2,
            title: t.solution.step2Title,
            icon: <Palette size={24} />,
            desc: t.solution.step2Desc
        },
        {
            id: 3,
            title: t.solution.step3Title,
            icon: <PenTool size={24} />,
            desc: t.solution.step3Desc
        },
        {
            id: 4,
            title: t.solution.step4Title,
            icon: <Code size={24} />,
            desc: t.solution.step4Desc
        },
        {
            id: 5,
            title: t.solution.step5Title,
            icon: <Rocket size={24} />,
            desc: t.solution.step5Desc
        },
        {
            id: 6,
            title: t.solution.step6Title,
            icon: <Database size={24} />,
            desc: t.solution.step6Desc
        }
    ];

    return (
        <section className="solution-section" id="process">
            <div className="container">
                <div className="timeline-container">
                    {/* Left Side: Sticky Header */}
                    <div className="section-header-side">
                        <h2 className="section-title sticky-title">{t.solution.title}</h2>
                        <p className="section-subtitle sticky-subtitle">
                            {t.solution.subtitle}
                        </p>
                        <div className="flex flex-col gap-4 mt-8">
                            <a href="#contact" className="btn-nova-glow btn-nav-size">
                                <div className="btn-dot-indicator"></div>
                                {t.nav.requestDemo}
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Scrollable Steps */}
                    <div className="steps-wrapper">
                        {steps.map((step, index) => {
                            return (
                                <Card key={step.id} i={index}>
                                    <div className="step-marker">
                                        <span className="step-number">0{index + 1}</span>
                                        <div
                                            className={`step-icon ${[2, 3].includes(step.id) ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
                                            onClick={() => {
                                                if (step.id === 2) {
                                                    document.getElementById('website-section')?.scrollIntoView({ behavior: 'smooth' });
                                                } else if (step.id === 3) {
                                                    document.getElementById('crm-section')?.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionTimeline;
