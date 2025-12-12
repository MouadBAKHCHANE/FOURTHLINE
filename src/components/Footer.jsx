import React from 'react';
import '../styles/Footer.css';
import { useLanguage } from '../App';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-section">
            {/* Trust Bar */}
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

            {/* Final CTA */}
            <div className="container">
                <div className="final-cta">
                    <h2 className="cta-title nl-whitespace">{t.footer.ctaTitle}</h2>
                    <a href="#contact" className="btn btn-primary btn-lg">{t.footer.ctaButton}</a>
                </div>

                <div className="footer-content">
                    <div className="footer-col brand-col">
                        <div className="logo-text">FourthLine</div>
                        <p className="footer-desc">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.services}</h4>
                        <ul>
                            <li><a href="#">{t.footer.webDesign}</a></li>
                            <li><a href="#">{t.footer.salesforceSetup}</a></li>
                            <li><a href="#">{t.footer.webToLead}</a></li>
                            <li><a href="#">{t.footer.audits}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.legal}</h4>
                        <ul>
                            <li><a href="#">{t.footer.privacyPolicy}</a></li>
                            <li><a href="#">{t.footer.termsOfService}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.contact}</h4>
                        <ul>
                            <li>contact@fourthline.ma</li>
                            <li>Casablanca, Morocco</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Fourthline Consulting. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
