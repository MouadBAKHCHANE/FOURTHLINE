import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            {/* Trust Bar */}
            <div className="trust-bar-container">
                <p className="trust-label">Powering Sales for</p>
                <div className="logos-grid">
                    <div className="logo-placeholder">LOGOS</div>
                    <div className="logo-placeholder">NEXUS</div>
                    <div className="logo-placeholder">VENTURE</div>
                    <div className="logo-placeholder">ALPHA</div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="container">
                <div className="final-cta">
                    <h2 className="cta-title">Stop losing leads.<br />Start building your system.</h2>
                    <a href="#contact" className="btn btn-primary btn-lg">Get Your Audit</a>
                </div>

                <div className="footer-content">
                    <div className="footer-col brand-col">
                        <div className="logo-text">FOURTHLINE</div>
                        <p className="footer-desc">
                            Bridging the gap between marketing and sales with Salesforce integration.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Salesforce Setup</a></li>
                            <li><a href="#">Web-to-Lead</a></li>
                            <li><a href="#">Audits</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>contact@fourthline.ma</li>
                            <li>Casablanca, Morocco</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 Fourthline Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
