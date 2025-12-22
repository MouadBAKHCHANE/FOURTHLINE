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





            <div className="container">
                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h2>{t.footer.newsletterTitle} <span className="script-highlight">{t.footer.newsletterTitleHighlight}</span></h2>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder={t.footer.newsletterPlaceholder} />
                        <button className="btn-pill-gradient">{t.footer.newsletterButton}</button>
                    </div>
                </div>

                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="brand-header">
                            {/* <img src="/path/to/icon.svg" alt="logo" /> */}
                            <span className="logo-text">Seedsvision</span>
                        </div>
                        <div className="brand-info">
                            <p>{t.footer.brandAddr}</p>
                            <p>{t.footer.brandPhone}</p>
                        </div>
                    </div>

                    {/* Sections Column */}
                    <div className="footer-col">
                        <h4>{t.footer.sections}</h4>
                        <ul>
                            <li><Link to="/services">{t.nav.product}</Link></li>
                            <li><Link to="/careers">{t.nav.careers}</Link></li>
                            <li><Link to="/blog">{t.nav.blog}</Link></li>
                            <li><Link to="/contact">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="footer-col">
                        <h4>{t.footer.social}</h4>
                        <ul>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">{t.footer.links.whatsapp}</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">{t.footer.links.instagram}</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">{t.footer.links.twitter}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 {t.footer.rights}</p>
                    <p>{t.footer.poweredBy}</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
