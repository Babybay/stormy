import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-[#B0A79E] py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col justify-between h-full space-y-12">
                    {/* Large Logo Text */}
                    <div className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-[#E8E4DF] select-none font-display">
                        Stormy - StormLab
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {/* Left - Language and Social Icons */}
                        <div className="flex items-center gap-4 text-white">
                            <button className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
                                <span className="text-lg">🌐</span>
                                <span>English (US)</span>
                            </button>

                            <div className="flex items-center gap-3 ml-4">

                                {/* Facebook  */}
                                {/* <a href="#" className="hover:opacity-70 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </a> */}

                                {/* Instagram  */}
                                <a href="https://www.instagram.com/stormlab.creative/" className="hover:opacity-70 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                {/* <a href="#" className="hover:opacity-70 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a> */}

                                {/* Youtube */}
                                {/* <a href="#" className="hover:opacity-70 transition-opacity">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a> */}
                            </div>
                        </div>

                        {/* Right - Links and Copyright */}
                        <div className="flex flex-wrap items-center gap-6 text-white text-sm">
                            <a href="mailto:satriab2108@gmail.com" className="email-btn group">
                                <span className="relative z-10">Send an email</span>
                                <div className="email-btn-icon group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
                            <a href="#" className="hover:opacity-70 transition-opacity">Terms & Conditions</a>
                            <span className="text-[#B0A79E]">© 2025 All Rights Reserved, StormLab.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
