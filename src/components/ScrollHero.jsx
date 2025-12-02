import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollHero.css';

const ScrollHero = () => {
    useEffect(() => {
        // Check if browser supports CSS scroll-driven animations
        const hasScrollSupport = CSS.supports(
            '(animation-timeline: view()) and (animation-range: 0 100%)'
        );

        // Set data attributes for CSS
        document.documentElement.dataset.enhanced = 'true';
        document.documentElement.dataset.center = 'true';
        document.documentElement.dataset.layers = 'true';
        document.documentElement.dataset.stagger = 'range';

        // If no native scroll support, use GSAP fallback
        if (!hasScrollSupport) {
            gsap.registerPlugin(ScrollTrigger);
            console.info('GSAP ScrollTrigger registered');

            // Scaler animation
            const scalerTl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.scroll-hero-wrapper main section:first-of-type',
                        start: 'top -10%',
                        end: 'bottom 80%',
                        scrub: true,
                    },
                })
                .from(
                    '.scroll-hero-wrapper .scaler img',
                    {
                        height: window.innerHeight - 32,
                        ease: 'power1.inOut',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .scaler img',
                    {
                        width: window.innerWidth - 32,
                        ease: 'power2.inOut',
                    },
                    0
                );

            // Layers animation
            const layersTl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.scroll-hero-wrapper main section:first-of-type',
                        start: 'top -40%',
                        end: 'bottom bottom',
                        scrub: true,
                    },
                })
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(1)',
                    {
                        opacity: 0,
                        ease: 'sine.out',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(1)',
                    {
                        scale: 0,
                        ease: 'power1.inOut',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(2)',
                    {
                        opacity: 0,
                        ease: 'sine.out',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(2)',
                    {
                        scale: 0,
                        ease: 'power3.inOut',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(3)',
                    {
                        opacity: 0,
                        ease: 'sine.out',
                    },
                    0
                )
                .from(
                    '.scroll-hero-wrapper .layer:nth-of-type(3)',
                    {
                        scale: 0,
                        ease: 'power4.inOut',
                    },
                    0
                );

            return () => {
                scalerTl.kill();
                layersTl.kill();
            };
        }
    }, []);

    return (
        <div className="scroll-hero-wrapper">
            <div className="content-wrap">
                <header>
                    <h1 className="fluid">
                        Stormy
                        <br />
                        StormLab.
                    </h1>
                </header>
                <main>
                    <section>
                        <div className="content">
                            <div className="grid">
                                <div className="layer">
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764684512/ssa1tsorahaaihbsu1zj.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764684518/j4hkv4msae9buu4pppo5.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683955/oyd5ri99u5zfbvpwsaxv.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683952/q1q2kdd6yipkiaj6rmqm.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683948/fdkwxuqb7laxjiagdmeo.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764684795/vl5mme1yxoxrhxjawxah.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="layer">
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764685081/vrstdyizezre28v74dbl.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764685154/nridrdokaiqvexleglhb.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764703734/4703e4fc-f91f-4362-a19b-fa09237c36d7.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="layer">
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="scaler">
                                    <img
                                        src="https://res.cloudinary.com/dll8duknt/image/upload/v1764684795/vl5mme1yxoxrhxjawxah.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ScrollHero;
