import React from 'react';
import { Zap, Magnet, Trophy, Rocket, Settings2, ShieldCheck, Component, MousePointerBan, EyeOff, PlugZap, Hourglass, MessageSquareOff, AlertTriangle } from 'lucide-react';
import '../styles/ProblemSection.css';
import '../styles/ProblemSectionPremium.css';
import { useLanguage } from '../contexts/LanguageContext';

const ProblemSection = () => {
    const { t } = useLanguage();
    const [isDo, setIsDo] = React.useState(false); // Default to 'Don't'

    const problemData = t.problem;
    const currentCards = isDo ? problemData.cards.do : problemData.cards.dont;

    // Icons mapping
    const iconsDo = [
        <Zap size={48} className="text-[#398fff]" />,           // Fast
        <Magnet size={48} className="text-[#398fff]" />,        // New Leads
        <Trophy size={48} className="text-[#398fff]" />,        // Top 3 SEO
        <Rocket size={48} className="text-[#398fff]" />,        // 400% Traffic
        <Settings2 size={48} className="text-[#398fff]" />,     // Custom Dev
        <ShieldCheck size={48} className="text-[#398fff]" />    // Service & Support
    ];

    const iconsDont = [
        <Component size={48} className="text-red-500" />,        // Generic Designs
        <MousePointerBan size={48} className="text-red-500" />,  // Poor UX
        <EyeOff size={48} className="text-red-500" />,           // Low Visibility
        <PlugZap size={48} className="text-red-500" />,          // Limited Functionality
        <Hourglass size={48} className="text-red-500" />,        // Missed Deadlines
        <MessageSquareOff size={48} className="text-red-500" />  // Inadequate Support
    ];

    return (
        <section className="problem-section" id="problem">
            <div className="container">
                {/* Header with Toggle Switch */}
                <div className="toggle-header">
                    <h2 className="toggle-headline">
                        {problemData.headline.split('{switch}')[0]}
                        <div className="toggle-switch-container" onClick={() => setIsDo(!isDo)}>
                            <div className={`toggle-switch ${!isDo ? 'active-dont' : ''}`}>
                                <div className="toggle-slider"></div>
                                <span className={`toggle-label ${!isDo ? 'active' : ''}`}>{problemData.toggle.dont}</span>
                                <span className={`toggle-label ${isDo ? 'active' : ''}`}>{problemData.toggle.do}</span>
                            </div>
                        </div>
                        {problemData.headline.split('{switch}')[1]}
                    </h2>

                    <p className="toggle-sub">
                        {isDo ? problemData.subDo : problemData.subDont}
                    </p>

                    {!isDo && (
                        <div className="stat-banner">
                            <AlertTriangle size={20} className="text-yellow-400" />
                            <span>{problemData.stat}</span>
                        </div>
                    )}
                </div>

                {/* Grid */}
                <div className="comparison-grid">
                    {currentCards.map((card, index) => (
                        <div key={index} className={`comparison-card glass-card ${isDo ? 'card-do' : 'card-dont'}`}>
                            <div className="card-icon-wrapper">
                                {isDo ? iconsDo[index] : iconsDont[index]}
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
