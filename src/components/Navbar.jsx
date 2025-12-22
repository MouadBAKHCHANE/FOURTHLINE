import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe, ChevronDown, Sprout } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useLanguage } from '../App';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, hash) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/' + hash);
        } else {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const handleIndustryClick = (index) => {
        window.dispatchEvent(new CustomEvent('switchSector', { detail: index }));
        setIsOpen(false);
    };

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-pill">
                <Link to="/" className="logo">
                    <span className="logo-text">Seedsvision</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-center desktop-links">
                    <Link to="/services">{t.nav.product}</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>{t.nav.blog}</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
                </div>

                <div className="nav-right desktop-links">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <Globe size={16} />
                        <span>{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>
                    <a href="/Webtoleadform.html" className="btn-pill-gradient">
                        {t.nav.requestDemo} <ArrowRight size={16} />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-controls">
                    <button className="lang-toggle mobile-lang" onClick={toggleLanguage}>
                        {language === 'en' ? 'FR' : 'EN'}
                    </button>
                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/services" onClick={() => setIsOpen(false)}>{t.nav.product}</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>{t.nav.blog}</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
                    <a href="/Webtoleadform.html" className="btn-pill-gradient" onClick={() => setIsOpen(false)}>
                        {t.nav.requestDemo}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
