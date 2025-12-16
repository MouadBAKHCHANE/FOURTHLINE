import React, { useState } from 'react';
import '../styles/Footer.css';
import { useLanguage } from '../App';
import AuditModal from './AuditModal';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isCleanFooterPage = ['/start-build', '/privacy-policy', '/terms-of-service'].includes(location.pathname);

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <footer className="footer-section">
            <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Trust Bar - Hidden on Clean Footer Pages */}
            {!isCleanFooterPage && (
                <div className="trust-bar-container">
                    <p className="trust-label">{t.footer.poweringSales}</p>
                    <div className="logos-slider">
                        <div className="logos-slide">
                            <img src="/logos/new-client-1.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/new-client-2.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/new-client-3.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/client-2.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-3.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-4.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-5.png" alt="Client Logo" className="client-logo" />
                        </div>
                        <div className="logos-slide">
                            <img src="/logos/new-client-1.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/new-client-2.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/new-client-3.png" alt="Partner Logo" className="client-logo" />
                            <img src="/logos/client-2.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-3.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-4.png" alt="Client Logo" className="client-logo" />
                            <img src="/logos/client-5.png" alt="Client Logo" className="client-logo" />
                        </div>
                    </div>
                </div>
            )}

            {/* Final CTA - Hidden on Clean Footer Pages */}
            <div className="container">
                {!isCleanFooterPage && (
                    <div className="final-cta">
                        <h2 className="cta-title nl-whitespace">{t.footer.ctaTitle}</h2>
                        <a href="/contact.html" className="btn btn-primary btn-lg">{t.footer.ctaButton}</a>
                    </div>
                )}

                <div className="footer-content">
                    <div className="footer-col brand-col">
                        <div className="logo-text">Seedsvision</div>
                        <p className="footer-desc">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.industries || "Industries"}</h4>
                        <ul>
                            <li><button onClick={() => window.dispatchEvent(new CustomEvent('switchSector', { detail: 0 }))} className="footer-link-btn">{t.solutionsSection.logistics.title}</button></li>
                            <li><button onClick={() => window.dispatchEvent(new CustomEvent('switchSector', { detail: 1 }))} className="footer-link-btn">{t.solutionsSection.realEstate.title}</button></li>
                            <li><button onClick={() => window.dispatchEvent(new CustomEvent('switchSector', { detail: 2 }))} className="footer-link-btn">{t.solutionsSection.education.title}</button></li>
                            <li><button onClick={() => window.dispatchEvent(new CustomEvent('switchSector', { detail: 3 }))} className="footer-link-btn">{t.solutionsSection.b2b.title}</button></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.legal}</h4>
                        <ul>
                            <li><Link to="/careers">{t.nav.careers}</Link></li>
                            <li><Link to="/privacy-policy">{t.footer.privacyPolicy}</Link></li>
                            <li><Link to="/terms-of-service">{t.footer.termsOfService}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.contact}</h4>
                        <ul>
                            <li>contact@seedsvision.ma</li>
                            <li>Casablanca, Morocco</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Seedsvision Consulting. {t.footer.rights}</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
