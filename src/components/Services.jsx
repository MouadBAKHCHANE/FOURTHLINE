import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import { useLanguage } from '../App';

const Services = () => {
    const { t } = useLanguage();

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.services.title}</h2>
                    <p className="section-subtitle">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="pricing-table-wrapper">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th className="feature-col">Features</th>
                                <th className="tier-col">
                                    <span className="tier-badge">{t.services.tier1Badge}</span>
                                    <div className="tier-name-small">{t.services.tier1Name}</div>
                                </th>
                                <th className="tier-col best-value">
                                    <span className="tier-badge">{t.services.tier2Badge}</span>
                                    <div className="tier-name-small">{t.services.tier2Name}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-name">Web Foundation</td>
                                <td>{t.services.tier1Feat1}</td>
                                <td className="highlight-cell">{t.services.tier2Feat1}</td>
                            </tr>
                            <tr>
                                <td className="feature-name">CRM Power</td>
                                <td>{t.services.tier1Feat2}</td>
                                <td className="highlight-cell">{t.services.tier2Feat2}</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Lead Engine</td>
                                <td>{t.services.tier1Feat3}</td>
                                <td className="highlight-cell">{t.services.tier2Feat3}</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Automation</td>
                                <td>{t.services.tier1Feat4}</td>
                                <td className="highlight-cell">{t.services.tier2Feat4}</td>
                            </tr>
                            <tr>
                                <td className="feature-name">Support & Growth</td>
                                <td className="text-muted">-</td>
                                <td className="highlight-cell">{t.services.tier2Feat5}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="/Webtoleadform.html" className="btn-nova-glow full-width">
                                        <div className="btn-dot-indicator"></div>
                                        {t.services.tier1Button}
                                    </a>
                                </td>
                                <td>
                                    <a href="/Webtoleadform.html" className="btn-nova-glow full-width">
                                        <div className="btn-dot-indicator"></div>
                                        {t.services.tier2Button}
                                    </a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Services;
