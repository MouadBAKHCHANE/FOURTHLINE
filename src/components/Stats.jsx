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

    const statsData = [
        { number: 2, suffix: "k+", label: t.stats.projects },
        { number: 1, suffix: "M+", label: t.stats.satisfaction },
        { number: 150, suffix: "+", label: t.stats.experience },
        { number: 8, suffix: "+", label: t.stats.systems }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <StatItem
                            key={index}
                            number={stat.number}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
