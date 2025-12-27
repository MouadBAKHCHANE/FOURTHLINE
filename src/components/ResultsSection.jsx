import React from 'react';
import { useLanguage } from '../App';
import '../styles/ResultsSection.css';
import { cn } from "@/lib/utils";

const ResultsSection = () => {
    const { t } = useLanguage();
    const results = t.resultsSection;

    const cards = [
        {
            name: results.card1.name,
            title: results.card1.title,
            beforeLabel: results.beforeLabel,
            afterLabel: results.afterLabel,
            beforeVal: "45%",
            afterVal: "87%",
            bgImage: "/assets/works/dreelio.png"
        },
        {
            name: results.card2.name,
            title: results.card2.title,
            beforeLabel: results.beforeLabel,
            afterLabel: results.afterLabel,
            beforeVal: "35%",
            afterVal: "83%",
            bgImage: "/assets/works/fitflow.png"
        },
        {
            name: results.card3.name,
            title: results.card3.title,
            beforeLabel: results.beforeLabel,
            afterLabel: results.afterLabel,
            beforeVal: "52%",
            afterVal: "92%",
            bgImage: "/assets/works/glade.png"
        },
        {
            name: results.card4.name,
            title: results.card4.title,
            beforeLabel: results.beforeLabel,
            afterLabel: results.afterLabel,
            beforeVal: "39%",
            afterVal: "81%",
            bgImage: "/assets/works/refit.png"
        },
        {
            name: results.card5.name,
            title: results.card5.title,
            beforeLabel: results.beforeLabel,
            afterLabel: results.afterLabel,
            beforeVal: "20%",
            afterVal: "65%",
            bgImage: "/assets/works/editor.png"
        }
    ];

    return (
        <section className="results-section" id="works">
            <div className="container">
                <div className="results-header">
                    <span className="results-badge">{results.badge}</span>
                    <h2 className="results-title">{results.title}</h2>
                </div>

                <div className="results-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="result-card group">
                            {/* Background Image */}
                            <div className="card-bg-wrapper">
                                <img src={card.bgImage} alt={card.title} className="card-bg-img" />
                                <div className="card-overlay" />
                            </div>

                            {/* Content Overlay */}
                            <div className="result-content-box">
                                <h3 className="result-card-title">{card.title}</h3>

                                <div className="stats-row">
                                    <div className="stat-col">
                                        <span className="stat-label">{card.beforeLabel}</span>
                                        <span className="stat-val before">{card.beforeVal}</span>
                                    </div>
                                    <div className="stat-col right">
                                        <span className="stat-label">{card.afterLabel}</span>
                                        <span className="stat-val after">{card.afterVal}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
