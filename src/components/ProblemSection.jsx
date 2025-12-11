import React from 'react';
import { Unlink, AlertCircle, Clock } from 'lucide-react';
import '../styles/ProblemSection.css';
import { useLanguage } from '../App';

const ProblemSection = () => {
    const { t } = useLanguage();

    return (
        <section className="problem-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.problem.title}</h2>
                    <p className="section-subtitle">
                        {t.problem.subtitle}
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Tile 1: The Disconnect */}
                    <div className="bento-tile disconnect-tile glass-card">
                        <div className="tile-content">
                            <div className="icon-wrapper red-glow">
                                <Unlink size={48} className="text-red" />
                            </div>
                            <h3>{t.problem.card1Title}</h3>
                            <p>{t.problem.card1Desc}</p>
                        </div>
                        <div className="visual-disconnect">
                            {/* Abstract visual of broken connection */}
                            <div className="line-segment left"></div>
                            <div className="gap-indicator"></div>
                            <div className="line-segment right"></div>
                        </div>
                    </div>

                    {/* Tile 2: Stat Highlight */}
                    <div className="bento-tile stat-tile glass-card">
                        <div className="tile-content">
                            <div className="stat-number text-gradient">{t.problem.card2Stat}</div>
                            <div className="stat-label">{t.problem.card2Label}</div>
                            <p className="stat-desc">{t.problem.card2Desc}</p>
                            <AlertCircle className="absolute-icon" size={120} />
                        </div>
                    </div>

                    {/* Tile 3: Slow Response */}
                    <div className="bento-tile clock-tile glass-card">
                        <div className="tile-content row-layout">
                            <div className="icon-wrapper orange-glow">
                                <Clock size={32} className="text-orange" />
                            </div>
                            <div>
                                <h3>{t.problem.card3Title}</h3>
                                <p>{t.problem.card3Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
