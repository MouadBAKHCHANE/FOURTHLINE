import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
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
                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#contact" className="btn btn-glass btn-sm">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
