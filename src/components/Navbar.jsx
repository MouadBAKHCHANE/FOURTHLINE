import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    <div className="logo-icon">
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                        <span className="bar bar-4"></span>
                    </div>
                    <span className="logo-text">FOURTHLINE</span>
                </div>

                {/* Desktop Links */}
                <div className="nav-links desktop-links">
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#contact" className="btn btn-glass btn-sm">Contact</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={toggleMenu}>Services</a>
                    <a href="#process" onClick={toggleMenu}>Process</a>
                    <a href="#contact" className="btn btn-glass btn-sm" onClick={toggleMenu}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
