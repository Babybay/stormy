import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import { Mail, Phone } from 'lucide-react'; // Using Lucide icon for contact as placeholder for the SVG in design

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsMenuOpen(false); // Close menu on click
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { scrollTo: id } });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

                {/* Desktop Navigation Links */}
                <nav className="nav-links">
                    <button onClick={(e) => handleNavClick(e, 'work')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Work</button>
                    <button onClick={(e) => handleNavClick(e, 'services')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Services</button>
                    <button onClick={(e) => navigate('/mission')} className="nav-link bg-transparent border-none cursor-pointer font-inherit">Mission</button>
                </nav>

                {/* Desktop Contact Button */}
                <a href="https://wa.me/6281915660272" className="nav-contact-btn">
                    <div className="nav-contact-icon">
                        <Phone size={16} color="#0E1318" />
                    </div>
                    Book a Call
                </a>
            </div>
        </header>
    );
};

export default Navigation;
