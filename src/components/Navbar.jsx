import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe, ChevronDown } from 'lucide-react';
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
                    <span className="logo-text">FourthLine</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-center desktop-links">
                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>{t.nav.product}</a>

                    <div className="nav-item-dropdown">
                        <button className="nav-link-btn">
                            {t.nav.industries} <ChevronDown size={14} />
                        </button>
                        <div className="dropdown-menu">
                            <button onClick={() => handleIndustryClick(0)}>{t.solutionsSection.logistics.title}</button>
                            <button onClick={() => handleIndustryClick(1)}>{t.solutionsSection.realEstate.title}</button>
                            <button onClick={() => handleIndustryClick(2)}>{t.solutionsSection.education.title}</button>
                            <button onClick={() => handleIndustryClick(3)}>{t.solutionsSection.b2b.title}</button>
                        </div>
                    </div>

                    <a href="#process" onClick={(e) => handleNavClick(e, '#process')}>{t.nav.docs}</a>
                    <a href="#customers" onClick={(e) => handleNavClick(e, '#customers')}>{t.nav.customers}</a>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
                </div>

                <div className="nav-right desktop-links">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <Globe size={16} />
                        <span>{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>
                    <Link to="/start-build" className="btn-pill-gradient">
                        {t.nav.requestDemo} <ArrowRight size={16} />
                    </Link>
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
                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>{t.nav.product}</a>
                    <a href="#process" onClick={(e) => handleNavClick(e, '#process')}>{t.nav.docs}</a>
                    <a href="#customers" onClick={(e) => handleNavClick(e, '#customers')}>{t.nav.customers}</a>
                    <Link to="/careers" onClick={() => setIsOpen(false)}>{t.nav.careers}</Link>
                    <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>{t.nav.pricing}</a>
                    <Link to="/start-build" className="btn-pill-gradient" onClick={() => setIsOpen(false)}>
                        {t.nav.requestDemo}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
