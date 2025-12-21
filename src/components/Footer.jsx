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



            {/* Final CTA - Hidden on Clean Footer Pages */}
            {!isCleanFooterPage && (
                <div className="final-cta-new">
                    <div className="cta-content-wrapper">
                        <h2 className="cta-title">Ready to Build a<br />System That Sells?</h2>
                        <p className="cta-sub">Let's design and build your premium Framer website in 7 days or less.</p>

                        <a href="/contact.html" className="btn-nova-glow cta-btn">
                            <span className="btn-dot-indicator"></span>
                            {t.footer.ctaButton}
                        </a>

                        <div className="cta-social-proof">
                            <p className="proof-label">20+ businesses already trust us</p>
                            <div className="proof-logos-mask">
                                <div className="proof-logos">
                                    {/* Original Set */}
                                    <img src="/logos/new-client-1.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/new-client-2.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/new-client-3.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-3.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-4.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-5.png" alt="Partner" className="footer-client-logo" />

                                    {/* Duplicate Set for Infinite Scroll */}
                                    <img src="/logos/new-client-1.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/new-client-2.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/new-client-3.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-3.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-4.png" alt="Partner" className="footer-client-logo" />
                                    <img src="/logos/client-5.png" alt="Partner" className="footer-client-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">

                <div className="footer-content">
                    <div className="footer-col brand-col">
                        <div className="logo-text">Seedsvision</div>
                        <p className="brand-slogan">{t.hero.title} {t.hero.titleHighlight}</p>
                        <p className="footer-desc">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.services || "Services"}</h4>
                        <ul>
                            <li><Link to="/website">{t.nav.product}</Link></li>
                            <li><Link to="/crm">{t.smallBusiness.navLink}</Link></li>
                            <li><a href="/#projects">{t.nav.projects}</a></li>
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
