import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import '../styles/Navbar.css';
import { useLanguage } from '../App';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-pill">
                <div className="logo">
                    <span className="logo-text">FourthLine</span>
                </div>

                {/* Desktop Links */}
                <div className="nav-center desktop-links">
                    <a href="#services">{t.nav.product}</a>
                    <a href="#process">{t.nav.docs}</a>
                    <a href="#customers">{t.nav.customers}</a>
                    <a href="#pricing">{t.nav.pricing}</a>
                </div>

                <div className="nav-right desktop-links">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <Globe size={16} />
                        <span>{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>
                    <a href="#contact" className="btn-pill-gradient">
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
                    <a href="#services" onClick={toggleMenu}>{t.nav.product}</a>
                    <a href="#process" onClick={toggleMenu}>{t.nav.docs}</a>
                    <a href="#customers" onClick={toggleMenu}>{t.nav.customers}</a>
                    <a href="#pricing" onClick={toggleMenu}>{t.nav.pricing}</a>
                    <a href="#contact" className="btn-pill-gradient" onClick={toggleMenu}>
                        {t.nav.requestDemo}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
