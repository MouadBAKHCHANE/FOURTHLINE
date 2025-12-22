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
