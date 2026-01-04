import React from 'react';
import '../styles/HeroBackground.css';

const HeroBackground = () => {
    return (
        <div className="trail-background">
            <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="trail-svg">
                <path opacity="0.1" d="M-100 600 C 200 400, 600 800, 1540 200" stroke="#00A1E0" strokeWidth="2" strokeDasharray="10 10" />
                <path opacity="0.05" d="M-100 700 C 300 500, 700 900, 1540 300" stroke="#00A1E0" strokeWidth="40" />
            </svg>
        </div>
    );
};

export default HeroBackground;
