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
                    <Link to="/website">{t.nav.product}</Link>
                    <Link to="/crm">{t.smallBusiness.navLink}</Link>

                    <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>{t.nav.projects}</a>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
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
                    <Link to="/website" onClick={() => setIsOpen(false)}>{t.nav.product}</Link>
                    <Link to="/crm" onClick={() => setIsOpen(false)}>{t.smallBusiness.navLink}</Link>

                    <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>{t.nav.projects}</a>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
                    <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>{t.nav.pricing}</a>
                    <a href="/Webtoleadform.html" className="btn-pill-gradient" onClick={() => setIsOpen(false)}>
                        {t.nav.requestDemo}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
