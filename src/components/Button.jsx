import React from 'react';

export const Button = ({ children, icon = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20"
        >
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {icon && (
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
};

export default Button;
