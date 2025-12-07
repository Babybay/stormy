import React from 'react';
import './ContactSection.css';

export const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container-outer">
                <div className="contact-content-wrapper">

                    {/* Text Content */}
                    <div className="contact-text-content">
                        <h2 className="contact-heading">
                            Ready to start your project?
                        </h2>
                        <p className="contact-subtext">
                            Let's build something amazing together.
                        </p>
                        <a href="https://wa.me/6281915660272" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <span className="contact-button-text">Contact Us</span>
                            <div className="contact-button-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0E1318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
