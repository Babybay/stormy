import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import { Mail, Phone } from 'lucide-react'; // Using Lucide icon for contact as placeholder for the SVG in design

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, id) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: id } });
        }
    };

    return (
        <header className="navigation-header">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <a href="/" aria-label="StormLab Studio Home" className="nav-logo-text">
                        StormLab
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <button onClick={(e) => handleNavClick(e, 'work')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Work</button>
                    <button onClick={(e) => handleNavClick(e, 'services')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Services</button>
                    <button onClick={(e) => navigate('/mission')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Mission</button>
                </nav>

                {/* Contact Button */}
                <a href="https://wa.me/6281915660272" className="nav-contact-btn">
                    <div className="nav-contact-icon">
                        <Phone size={16} color="#0E1318" />
                    </div>
                    Book a Call
                </a>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="mobile-menu-btn" aria-label="Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navigation;
