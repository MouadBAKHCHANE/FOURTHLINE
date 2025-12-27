import React, { useEffect, useState, useRef } from 'react';
import '../styles/Stats.css';
import { useLanguage } from '../App';

const StatItem = ({ number, suffix, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const duration = 2000;
        const end = parseInt(number);

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease out function for smoother effect: 1 - pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, number]);

    return (
        <div className="stat-item" ref={elementRef}>
            <div className="stat-number">
                {count}{suffix}
            </div>
            <div className="stat-label">
                {label}
            </div>
        </div>
    );
};

const Stats = () => {
    const { t } = useLanguage();

    return (
        <section className="stats-section" id="stats">
            <div className="container">
                <div className="formula-container">
                    <div className="equation-row">
                        <div className="formula-item">
                            {t.stats.formula.item1}
                        </div>
                        <div className="operator">+</div>
                        <div className="formula-item">
                            {t.stats.formula.item2}
                        </div>
                        <div className="operator">=</div>
                    </div>
                    <div className="formula-result">
                        {t.stats.formula.result}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
