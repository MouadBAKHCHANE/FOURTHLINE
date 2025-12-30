import React, { useState } from 'react';
import '../styles/Footer.css';
import { useLanguage } from '../App';
import AuditModal from './AuditModal';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';

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

                        <div className="social-buttons footer-socials">
                            <a href="#" className="social-btn"><MessageCircle size={18} /></a>
                            <a href="#" className="social-btn"><Linkedin size={18} /></a>
                            <a href="#" className="social-btn"><Twitter size={18} /></a>
                            <a href="#" className="social-btn"><Instagram size={18} /></a>
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

                    {/* Contact Info Column (Formerly Social) */}
                    <div className="footer-col">
                        <h4>{t.nav.contact}</h4>
                        <div className="contact-info-list">
                            <p>{t.footer.brandAddr}</p>
                            <p>contact@seedsvision.com</p>
                        </div>
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
