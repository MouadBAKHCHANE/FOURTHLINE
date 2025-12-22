import React from 'react';
import { Unlink, Layout, Database, Bot, BarChart3, HeartHandshake, Code2, Copy, Frown, EyeOff, CalendarX2, UserX, AlertTriangle } from 'lucide-react';
import '../styles/ProblemSection.css';
import '../styles/ProblemSectionPremium.css';
import { useLanguage } from '../App';

const ProblemSection = () => {
    const { t } = useLanguage();
    const [isDo, setIsDo] = React.useState(true); // Default to 'Do'

    const problemData = t.problem;
    const currentCards = isDo ? problemData.cards.do : problemData.cards.dont;

    // Icons mapping
    const iconsDo = [
        <Layout size={32} className="text-green-400" />,
        <Database size={32} className="text-blue-400" />,
        <Bot size={32} className="text-purple-400" />,
        <BarChart3 size={32} className="text-yellow-400" />,
        <HeartHandshake size={32} className="text-pink-400" />,
        <Code2 size={32} className="text-cyan-400" />
    ];

    const iconsDont = [
        <Copy size={32} className="text-gray-400" />,
        <Frown size={32} className="text-red-400" />,
        <EyeOff size={32} className="text-gray-400" />,
        <Unlink size={32} className="text-red-400" />,
        <CalendarX2 size={32} className="text-red-400" />,
        <UserX size={32} className="text-red-400" />
    ];

    return (
        <section className="problem-section" id="problem">
            <div className="container">
                {/* Header with Toggle Switch */}
                <div className="toggle-header">
                    <h2 className="toggle-headline">
                        When people
                        <div className="toggle-switch-container" onClick={() => setIsDo(!isDo)}>
                            <div className={`toggle-switch ${!isDo ? 'active-dont' : ''}`}>
                                <div className="toggle-slider"></div>
                                <span className={`toggle-label ${!isDo ? 'active' : ''}`}>{problemData.toggle.dont}</span>
                                <span className={`toggle-label ${isDo ? 'active' : ''}`}>{problemData.toggle.do}</span>
                            </div>
                        </div>
                        work with us.
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
