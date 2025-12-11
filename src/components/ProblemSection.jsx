import React from 'react';
import { Unlink, AlertCircle, Clock } from 'lucide-react';
import '../styles/ProblemSection.css';

const ProblemSection = () => {
    return (
        <section className="problem-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">The Disconnect</h2>
                    <p className="section-subtitle">
                        Most businesses have a critical gap between their marketing efforts and sales results.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Tile 1: The Disconnect */}
                    <div className="bento-tile disconnect-tile glass-card">
                        <div className="tile-content">
                            <div className="icon-wrapper red-glow">
                                <Unlink size={48} className="text-red" />
                            </div>
                            <h3>Marketing and Sales are isolated.</h3>
                            <p>Leads generated online fall into a black hole before reaching your sales team.</p>
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
                            <div className="stat-number text-gradient">60%</div>
                            <div className="stat-label">of leads are lost</div>
                            <p className="stat-desc">buried in manual Excel sheets and overlooked emails.</p>
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
                                <h3>Slow response times kill deals.</h3>
                                <p>Every minute of delay reduces conversion probability by 10%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
