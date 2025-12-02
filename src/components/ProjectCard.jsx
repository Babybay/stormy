import React from 'react';

const themeMap = {
    cyan: { bg: 'bg-cyan-400', text: 'text-black', accent: 'border-black/20' },
    rose: { bg: 'bg-rose-400', text: 'text-black', accent: 'border-black/20' },
    gray: { bg: 'bg-gray-800', text: 'text-white', accent: 'border-white/20' },
    lime: { bg: 'bg-lime-400', text: 'text-black', accent: 'border-black/20' },
    purple: { bg: 'bg-purple-700', text: 'text-white', accent: 'border-white/20' },
};

export const ProjectCard = ({ project, onClick }) => {
    const theme = themeMap[project.theme];

    return (
        <div onClick={onClick} className={`group relative flex flex-col h-full min-h-[500px] md:min-h-[600px] w-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer ${theme.bg} ${theme.text}`}>

            {/* Top Details */}
            <div className="p-8 md:p-10 flex justify-between items-start z-10 relative">
                <div className="space-y-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${theme.accent}`}>
                        {project.category}
                    </span>
                    <p className="text-sm font-medium opacity-80">{project.client} — {project.year}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-transform duration-500 group-hover:rotate-[-45deg] ${theme.accent}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col justify-end p-8 md:p-10 relative z-10 mt-auto">
                <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-4 max-w-xl">
                    {project.title}
                </h3>
                <p className="text-lg md:text-xl max-w-md opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hidden md:block">
                    {project.description}
                </p>
            </div>

            {/* Image Background (Reveals on Hover mostly, or acts as texture) */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-50`} />
                {/* We use mix-blend modes to blend the image with the solid color background for a unique look */}
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
                />
            </div>
        </div>
    );
};

export default ProjectCard;
