import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Button } from './Button';

const categories = ['All', 'Branding', 'Web Design', 'Mobile', 'Art Direction'];

const projects = [
    {
        id: '1',
        title: 'Neon Horizon',
        client: 'Future Tech',
        description: 'A complete brand overhaul for a leading AI startup focused on sustainable energy solutions.',
        year: '2024',
        category: 'Branding',
        imageUrl: 'https://picsum.photos/800/800?random=1',
        theme: 'cyan'
    },
    {
        id: '2',
        title: 'Velvet Cult',
        client: 'Fashion Week',
        description: 'Immersive digital experience for the Paris Fashion Week runway show.',
        year: '2023',
        category: 'Web Design',
        imageUrl: 'https://picsum.photos/800/1000?random=2',
        theme: 'rose'
    },
    {
        id: '3',
        title: 'Mono Space',
        client: 'Architecture Digest',
        description: 'Minimalist mobile application for architectural visualization and planning.',
        year: '2024',
        category: 'Mobile',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        theme: 'gray'
    },
    {
        id: '4',
        title: 'Acid Jazz',
        client: 'Spotify',
        description: 'Visual identity and album art direction for the new Acid Jazz curated playlist.',
        year: '2023',
        category: 'Art Direction',
        imageUrl: 'https://picsum.photos/900/900?random=4',
        theme: 'lime'
    },
    {
        id: '5',
        title: 'Deep Void',
        client: 'SpaceX',
        description: 'Telemetry dashboard design for the next generation starship controls.',
        year: '2024',
        category: 'Web Design',
        imageUrl: 'https://picsum.photos/800/800?random=5',
        theme: 'purple'
    }
];

export const WorkSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(
        project => activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <section className="bg-black min-h-screen w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden relative">

            {/* Header Area */}
            <div className="max-w-[1400px] mx-auto mb-20 md:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left: Sticky Header */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                                Crafted <br /> <span className="italic text-storm-lime">Experiences</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-sm mb-12">
                                Where pixels meet passion. Each project is a story of bold ideas, meticulous craft, and digital artistry that breaks boundaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Navigation - Sticky on Mobile */}
            <div className="sticky top-4 z-50 mb-12 md:mb-20 mix-blend-difference">
                <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-4 pb-4 md:justify-center md:flex-wrap px-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                whitespace-nowrap px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${activeCategory === category
                                    ? 'bg-white text-black scale-105'
                                    : 'bg-transparent text-gray-400 border border-white/20 hover:border-white hover:text-white'}
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid/Layout */}
            <div className="max-w-[1800px] mx-auto">
                {/* We use a CSS grid that shifts based on content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
                    {filteredProjects.map((project, index) => {
                        // Layout Logic for grid spanning
                        // First item: Large span
                        // Second item: Tall vertical
                        // Others: Mix
                        let colSpan = 'lg:col-span-6';
                        if (index === 0) colSpan = 'lg:col-span-7'; // Big feature
                        if (index === 1) colSpan = 'lg:col-span-5'; // Tall sidekick
                        if (index === 2) colSpan = 'lg:col-span-4';
                        if (index === 3) colSpan = 'lg:col-span-4';
                        if (index === 4) colSpan = 'lg:col-span-4';

                        return (
                            <div
                                key={project.id}
                                className={`${colSpan} h-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    onClick={() => setSelectedProject(project)}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="w-full py-32 text-center border border-dashed border-gray-800 rounded-3xl">
                        <h3 className="font-serif text-3xl text-gray-500 italic mb-4">Nothing here yet.</h3>
                        <p className="text-gray-600">Try adjusting your filters.</p>
                    </div>
                )}
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    ></div>
                    <div className="relative w-full max-w-5xl bg-[#0E1318] rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col md:flex-row">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                            <img
                                src={selectedProject.imageUrl}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] to-transparent md:bg-gradient-to-r"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 text-white/70 w-fit mb-6">
                                {selectedProject.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                                {selectedProject.title}
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                {selectedProject.description}
                            </p>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Client</h4>
                                    <p className="text-white text-lg">{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Year</h4>
                                    <p className="text-white text-lg">{selectedProject.year}</p>
                                </div>
                            </div>

                            <button className="mt-auto w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                View Case Study
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WorkSection;
