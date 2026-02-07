import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/WhatWeDo.css';

const WhatWeDo = () => {
    const { t } = useLanguage();
    const { title, cta, items } = t.whatWeDo;

    return (
        <section className="what-we-do-section">
            <div className="container wwd-layout">
                {/* Left Column: Title & CTA */}
                <div className="wwd-left">
                    <h2 className="wwd-title">{title}</h2>
                    <div className="wwd-cta-wrapper flex gap-4 mt-8">
                        <a href="#contact" className="btn-nova-glow">
                            <div className="btn-dot-indicator"></div> {cta}
                        </a>
                    </div>
                </div>

                {/* Right Column: Interactive List */}
                <div className="wwd-right">
                    {items.map((item, index) => (
                        <div key={index} className="wwd-item group">
                            <div className="wwd-item-header">
                                <h3 className="wwd-item-title">{item.title}</h3>
                                <ArrowRight className="wwd-arrow group-hover:-rotate-45 transition-transform duration-300" size={24} />
                            </div>
                            <div className="wwd-item-body">
                                <p className="wwd-item-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section >
    );
};

export default WhatWeDo;
