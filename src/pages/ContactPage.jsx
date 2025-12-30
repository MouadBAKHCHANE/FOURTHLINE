import React from 'react';
import '../styles/ContactPage.css'; // New Styles
import { useLanguage } from '../App';
import { Phone, MapPin, Send, Instagram, Twitter, MessageCircle, Linkedin } from 'lucide-react';
import WorldMapDots from '../assets/world-map-dots.png';

const ContactPage = () => {
    const { t } = useLanguage();

    // Prevent crashing if translations aren't loaded yet
    const txt = t.contactPage || {
        header: { title: "Loading...", highlight: "" },
        info: { phone: "Phone", office: "Office", social: {} },
        form: { title: "Contact", subtitle: "", nameLabel: "Name", submitButton: "Submit" }
    };

    return (
        <section className="contact-page-section">
            <div className="container">
                {/* 1. Header */}
                <div className="contact-header">
                    <h1 className="contact-title">{txt.header.title}</h1>
                    <span className="contact-highlight">{txt.header.highlight}</span>
                </div>

                {/* 2. Main Split Grid */}
                <div className="contact-grid">

                    {/* Left: Info Card (Black, Dotted Map) */}
                    <div className="contact-info-card">
                        <img src={WorldMapDots} alt="World Map Pattern" className="world-map-bg-img" />

                        <div className="info-details">

                            <div className="info-group">
                                <h4 className="info-label">{txt.info.office}</h4>
                                <p className="info-value">{txt.info.officeValue}</p>
                            </div>

                            <div className="social-buttons">
                                <a href="#" className="social-btn" aria-label="WhatsApp">
                                    <MessageCircle size={20} />
                                </a>
                                <a href="#" className="social-btn" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="social-btn" aria-label="X (Twitter)">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="social-btn" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Card (Dark Grey) */}
                    <div className="contact-form-card">
                        <div className="form-header">
                            <h2 className="form-title">{txt.form.title}</h2>
                            <p className="form-subtitle">{txt.form.subtitle}</p>
                        </div>

                        <form className="contact-form">
                            <div className="form-row-2">
                                <div className="form-group">
                                    <label className="form-label">{txt.form.nameLabel}</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder={txt.form.namePlaceholder}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">{txt.form.emailLabel}</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder={txt.form.emailPlaceholder}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">{txt.form.businessLabel}</label>
                                <div className="select-wrapper">
                                    <select className="form-select">
                                        <option value="" disabled selected>{txt.form.businessPlaceholder}</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="saas">SaaS</option>
                                        <option value="agency">Agency</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">{txt.form.messageLabel}</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder={txt.form.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button type="submit" className="form-submit-btn">
                                {txt.form.submitButton}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;
