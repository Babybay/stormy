import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    StormLab
                </motion.div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-white transition-colors">Learn</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                    <a href="#" className="hover:text-white transition-colors">Sell</a>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                    Sign in
                </a>
                <button className="px-5 py-2 text-sm font-semibold text-black bg-storm-green rounded-full hover:bg-opacity-90 transition-all">
                    Buy now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
