import React, { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const projects = [
    {
        id: '1',
        title: 'Neon Horizon',
        client: 'Future Tech',
        description: 'A complete brand overhaul for a leading AI startup focused on sustainable energy solutions.',
        longDescription: 'Future Tech approached us to redefine their brand identity as they prepared for a Series B funding round. We created a visual language that balances the technical precision of AI with the organic fluidity of nature, representing their mission to harmonize technology and sustainability. The result is a dynamic, future-forward brand that stands out in a crowded market.',
        year: '2024',
        category: 'Branding',
        imageUrl: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764703734/4703e4fc-f91f-4362-a19b-fa09237c36d7.png',
        gallery: [
            'https://images.unsplash.com/photo-1620641788427-b9651025c4b3?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
        ],
        scope: ['Brand Strategy', 'Visual Identity', 'Web Design', 'Motion Graphics'],
        team: ['Sarah Jenkins (CD)', 'Mike Ross (Design)', 'Jessica Lee (Motion)'],
        theme: 'cyan',
        backgroundColor: '#E0F7FA' // Pastel Cyan
    },
    {
        id: '2',
        title: 'Velvet Cult',
        client: 'Fashion Week',
        description: 'Immersive digital experience for the Paris Fashion Week runway show.',
        longDescription: 'For the Paris Fashion Week, we were tasked with creating a digital counterpart to the physical runway show. We built an immersive 3D web experience that allowed users to explore the collection in a virtual space, interacting with the garments and learning about the inspiration behind each piece. The platform saw record engagement and was featured in major fashion publications.',
        year: '2023',
        category: 'Web Design',
        imageUrl: 'https://cdn.prod.website-files.com/6791fcb8160a1d26db9b13c8%2F67cec642341ad266ff4fabdd_zwdg_leader-transcode.mp4',
        gallery: [
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000'
        ],
        scope: ['UX/UI Design', '3D Development', 'Frontend Engineering'],
        team: ['David Chen (Tech Lead)', 'Elena Rodriguez (3D)', 'Tom Baker (Design)'],
        theme: 'rose',
        backgroundColor: '#FCE4EC' // Pastel Pink
    },
    {
        id: '3',
        title: 'Mono Space',
        client: 'Architecture Digest',
        description: 'Minimalist mobile application for architectural visualization and planning.',
        longDescription: 'Mono Space is a tool for architects and interior designers to visualize spaces in real-time. We designed a clean, distraction-free interface that puts the focus on the work. The app features intuitive gesture controls, real-time rendering, and a collaborative mode for teams. Our goal was to create a tool that feels like an extension of the designer\'s mind.',
        year: '2024',
        category: 'Mobile',
        imageUrl: 'https://picsum.photos/800/600?random=3',
        gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=1000'
        ],
        scope: ['App Design', 'Prototyping', 'User Testing'],
        team: ['Alex Kim (Product)', 'Sam Wilson (UX)', 'Lily Zhang (UI)'],
        theme: 'gray',
        backgroundColor: '#F5F5F5' // Pastel Gray
    },
    {
        id: '4',
        title: 'Acid Jazz',
        client: 'Spotify',
        description: 'Visual identity and album art direction for the new Acid Jazz curated playlist.',
        longDescription: 'Spotify asked us to refresh the visual identity for their popular Acid Jazz playlist. We drew inspiration from the genre\'s roots in the 90s, combining retro typography with psychedelic colors and abstract shapes. The new identity captures the energy and improvisation of jazz while feeling thoroughly modern. We delivered a comprehensive style guide and a library of assets for social media and in-app promotion.',
        year: '2023',
        category: 'Art Direction',
        imageUrl: 'https://picsum.photos/900/900?random=4',
        gallery: [
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1514525253440-b393452e3383?auto=format&fit=crop&q=80&w=1000',
            'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000'
        ],
        scope: ['Art Direction', 'Illustration', 'Graphic Design'],
        team: ['Chris Martin (Art Director)', 'Patty Smith (Design)'],
        theme: 'lime',
        backgroundColor: '#F9FBE7' // Pastel Lime
    }
];

export const WorkSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="bg-black min-h-screen w-full py-24 relative flex flex-col justify-center overflow-hidden">

            {/* Header Area */}
            <div className="container mx-auto px-8 md:px-16 mb-16 flex flex-col md:flex-row justify-between items-end text-center">
                <div>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6">
                        Selected <span className="text-storm-lime">Work</span>
                    </h1>
                </div>
            </div>

            {/* Full Width Grid Container */}
            <div className="flex w-full h-[80vh]">
                {projects.slice(0, 4).map((project, index) => (
                    <div key={project.id} className="w-1/4 h-full">
                        <ProjectCard
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    </div>
                ))}
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="relative w-full h-full max-w-[95vw] max-h-[95vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        style={{ backgroundColor: selectedProject.backgroundColor }}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-50 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            <X size={32} />
                        </button>

                        {/* Left Side: Details */}
                        <div className="w-full md:w-[40%] p-12 md:p-16 flex flex-col overflow-y-auto custom-scrollbar">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-black/10 text-black/60 mb-6">
                                    {selectedProject.category}
                                </span>
                                <h2 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6 leading-tight">
                                    {selectedProject.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-black/10 pt-8">
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-black/50 mb-2 font-bold">Client</h4>
                                    <p className="text-black text-lg font-medium">{selectedProject.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-black/50 mb-2 font-bold">Year</h4>
                                    <p className="text-black text-lg font-medium">{selectedProject.year}</p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-sm uppercase tracking-wider text-black/50 mb-4 font-bold">About Project</h4>
                                <p className="text-black/80 text-xl leading-relaxed font-light">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-sm uppercase tracking-wider text-black/50 mb-4 font-bold">Scope of Work</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {selectedProject.scope.map((item, idx) => (
                                        <li key={idx} className="px-3 py-1 bg-black/5 rounded-lg text-black/70 text-sm">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-8 border-t border-black/10">
                                <h4 className="text-sm uppercase tracking-wider text-black/50 mb-4 font-bold">Team</h4>
                                <ul className="space-y-1">
                                    {selectedProject.team.map((member, idx) => (
                                        <li key={idx} className="text-black/70 text-sm">
                                            {member}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Gallery */}
                        <div className="w-full md:w-[60%] h-full bg-white overflow-y-auto no-scrollbar relative">
                            <div className="grid grid-cols-1 gap-4 p-4">
                                {/* Main Hero Media */}
                                <div className="w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden relative">
                                    {selectedProject.imageUrl.endsWith('.mp4') || selectedProject.imageUrl.endsWith('.webm') ? (
                                        <video
                                            src={selectedProject.imageUrl}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={selectedProject.imageUrl}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                {/* Gallery Grid */}
                                {selectedProject.gallery.map((img, idx) => (
                                    <div key={idx} className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative group">
                                        <img
                                            src={img}
                                            alt={`${selectedProject.title} gallery ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WorkSection;
