import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Cloud, Handshake } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import '../styles/SolutionTimeline.css';
import { useLanguage } from '../App';

const Card = ({ i, children, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.4]); // Added opacity fade

    return (
        <motion.div
            className="timeline-step"
            style={{
                scale,
                opacity,
                top: `var(--base-top, 150px)` // No stagger: cards stack directly on top of each other
            }}
        >
            {children}
        </motion.div>
    );
};

const SolutionTimeline = () => {
    const { t } = useLanguage();

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

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
                <div className="timeline-container">
                    {/* Left Side: Sticky Header */}
                    <div className="section-header-side">
                        <h2 className="section-title sticky-title">{t.solution.title}</h2>
                        <p className="section-subtitle sticky-subtitle">
                            {t.solution.subtitle}
                        </p>
                    </div>

                    {/* Right Side: Scrollable Steps */}
                    <div className="steps-wrapper" ref={container}>
                        {steps.map((step, index) => {
                            const targetScale = 1 - ((steps.length - 1 - index) * 0.1);
                            const range = [index * 0.25, 1];

                            return (
                                <Card
                                    key={step.id}
                                    i={index}
                                    progress={scrollYProgress}
                                    range={range}
                                    targetScale={targetScale}
                                >
                                    <div className="step-marker">
                                        <span className="step-number">0{index + 1}</span>
                                        <div className="step-icon">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                        {step.id === 2 && (
                                            <Link to="/services" className="btn btn-outline btn-sm mt-3">{t.nav.product}</Link>
                                        )}
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
