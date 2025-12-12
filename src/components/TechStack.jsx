import React from 'react';
import { useLanguage } from '../App';

const TechStack = () => {
    const { t } = useLanguage();

    return (
        <section id="tech-stack" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2>Tech Stack</h2>
            <p>Coming Soon...</p>
        </section>
    );
};

export default TechStack;
