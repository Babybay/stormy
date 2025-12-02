import React from 'react';

export const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative w-full h-[80vh] group overflow-hidden bg-gray-900 cursor-pointer border-r border-white/10 last:border-r-0"
        >
            {/* Media Background */}
            <div className="absolute inset-0 w-full h-full">
                {project.imageUrl.endsWith('.mp4') || project.imageUrl.endsWith('.webm') ? (
                    <video
                        src={project.imageUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}
            </div>

            {/* Hover Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col justify-end pointer-events-none">
                {/* Black background that slides up */}
                <div className="bg-black/90 backdrop-blur-sm w-full transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 flex flex-col justify-center p-8" style={{ height: '30%' }}>
                    <div className="flex flex-col gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-storm-lime">
                            {project.category}
                        </span>
                        <h3 className="text-white text-2xl font-bold font-serif leading-tight">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-3">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Default Title (Visible when not hovering) */}
            <div className="absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-3xl font-bold font-serif drop-shadow-lg">{project.title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;
