import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ServicesSection.css';

const services = [
    {
        id: 'web-dev',
        type: 'content',
        number: '1/4',
        title: 'Web Development that scales',
        description: 'We build robust, high-performance websites that grow with your business. From complex web applications to stunning marketing sites, our code is clean, semantic, and built for speed.',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/7d36588b0692fbbb013395097035ef3b61fa9404?width=1260',
        video: true,
        bgColor: 'bg-[#83D9E1]',
        textColor: 'text-black'
    },
    {
        id: 'ui-ux',
        type: 'image-content',
        number: '2/4',
        title: 'User-Centric Design',
        description: 'We design intuitive interfaces that delight users. Our process involves deep user research, wireframing, and prototyping to ensure every interaction is meaningful and frictionless.',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/d2b9311805852a75dbcc9fd5001c5d7536df8fcb?width=1260',
        textColor: 'text-white'
    },
    {
        id: 'branding',
        type: 'content',
        number: '3/4',
        title: 'Distinctive Brand Identity',
        description: 'We craft unique brand identities that resonate with your audience. From logos to comprehensive visual systems, we ensure your brand stands out in a crowded market.',
        bgColor: 'bg-[#373434]',
        textColor: 'text-white',
        hasGrid: true,
        gridItems: [
            { title: 'Logo Design', desc: 'Memorable marks that embody your brand essence.', icon: 'magic' },
            { title: 'Brand Strategy', desc: 'Defining your voice, values, and positioning.', icon: 'comp' },
            { title: 'Visual Systems', desc: 'Cohesive color palettes, typography, and imagery.', icon: 'raw' },
            { title: 'Brand Guidelines', desc: 'Ensuring consistency across all touchpoints.', icon: 'workflow' }
        ]
    },
    {
        id: 'img-2',
        type: 'image-only',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5b3a9ab8fdfcffae17ee64be7ed54bed41948d6e?width=1260'
    },
    {
        id: 'strategy',
        type: 'content',
        number: '4/4',
        title: 'Strategic Growth',
        description: 'We help you reach your target audience and achieve your business goals through data-driven digital strategies and optimization.',
        bgColor: 'bg-[#373434]',
        textColor: 'text-white',
        hasGrid: true,
        gridItems: [
            { title: 'SEO Optimization', desc: 'Improving visibility and organic traffic.', icon: 'layout' },
            { title: 'Content Strategy', desc: 'Creating valuable content that converts.', icon: 'type' },
            { title: 'Social Media', desc: 'Engaging your community on the right platforms.', icon: 'print' },
            { title: 'Analytics & Insights', desc: 'Measuring performance and refining tactics.', icon: 'data' }
        ]
    },
];

export const ServicesSection = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 600; // Adjust scroll amount as needed
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} className="services-section min-h-screen overflow-hidden relative flex flex-col py-12 md:py-24 justify-center">

            {/* Header Section */}
            <div className="container mx-auto px-8 md:px-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="max-w-4xl">
                    <h2 className="text-white text-[72px] leading-[1.1] font-normal font-['Noto Sans'] mb-4">
                        We craft digital experiences
                    </h2>
                    <p className="text-white/70 text-2xl font-['Noto Sans'] max-w-xl">
                        From concept to code, we build brands that stand out. Explore our full range of design and development services.
                    </p>
                </div>
                <div className="flex gap-4 mt-8 md:mt-0">
                    <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-0 px-8 md:px-16 w-full overflow-x-auto no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`service-card flex-shrink-0 ${service.bgColor || ''} ${service.textColor || ''}`}
                        style={{
                            marginRight: service.type === 'image-only' ? '-16px' : '16px',
                            zIndex: service.type === 'image-only' ? 0 : 10
                        }}
                    >
                        {service.type === 'image-only' && (
                            <div className="relative w-full h-full">
                                <img src={service.image} alt="Showcase" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-white/15"></div>
                            </div>
                        )}

                        {service.type === 'image-content' && (
                            <div className="relative w-full h-full">
                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-white/15 rounded-lg"></div>
                                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                    <div className="mb-auto">
                                        <span className="block text-2xl mb-1">{service.number}</span>
                                        <h3 className="text-[50px] leading-[1.1] mb-2">{service.title}</h3>
                                        <p className="text-base leading-relaxed max-w-md">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {service.type === 'content' && (
                            <div className="w-full h-full flex flex-col">
                                <div className="service-card-content">
                                    <span className="service-card-number">{service.number}</span>
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <p className="service-card-description">{service.description}</p>

                                    {service.hasGrid && (
                                        <div className="mt-8 grid grid-cols-2 gap-8">
                                            {service.gridItems.map((item, idx) => (
                                                <div key={idx} className="flex flex-col gap-2">
                                                    <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center mb-2">
                                                        {/* Placeholder icon */}
                                                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                                    </div>
                                                    <h4 className="text-base font-normal">{item.title}</h4>
                                                    <p className="text-sm opacity-80">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {service.id === 'web-dev' && (
                                    <div className="h-[327px] w-full relative overflow-hidden rounded-b-2xl mt-auto">
                                        <img src={service.image} alt="Platform" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;