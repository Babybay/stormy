import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MissionPage.css';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    "https://res.cloudinary.com/dll8duknt/image/upload/v1764683948/ttdyojiveirhjnqxs5jg.png",
    "https://res.cloudinary.com/dll8duknt/image/upload/v1764683952/q1q2kdd6yipkiaj6rmqm.png",
    "https://res.cloudinary.com/dll8duknt/image/upload/v1764683945/ajlhurrvbxliihaah5qm.png",
    "https://res.cloudinary.com/dll8duknt/image/upload/v1764683955/oyd5ri99u5zfbvpwsaxv.png",
    "https://res.cloudinary.com/dll8duknt/image/upload/v1764683945/pqjjkjdszz7ldqlbgpbp.png",
    "https://api.builder.io/api/v1/image/assets/TEMP/5bde0da7cf51cb00fedf25c86327bf437401f3d1?width=376"
];

const MissionPage = () => {
    const containerRef = useRef(null);
    const linesRef = useRef([]);
    const textRefs = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate SVG Lines drawing
            linesRef.current.forEach((path, i) => {
                if (!path) return;
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current, // Trigger based on the whole page wrapper
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1 + (i * 0.2),
                    }
                });
            });

            // Text Reveal Animation
            textRefs.current.forEach((text, index) => {
                gsap.fromTo(text,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 90%",
                            end: "top 70%",
                            scrub: 1,
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    const addToLines = (el) => {
        if (el && !linesRef.current.includes(el)) {
            linesRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="mission-page-wrapper">
            {/* SVG Lines Background - Full Page & High Contrast */}
            <svg className="mission-svg-line" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Path 1: Red - Bold Swirl */}
                <path
                    ref={addToLines}
                    d="M-10,10 C30,40 10,60 50,50 C90,40 70,10 110,20"
                    stroke="#DC0000"
                    strokeWidth="3"
                    fill="none"
                />
                {/* Path 2: Dark Blue - Wide Arc */}
                <path
                    ref={addToLines}
                    d="M110,90 C70,70 80,30 40,40 C10,50 20,80 -10,70"
                    stroke="#002455"
                    strokeWidth="4"
                    fill="none"
                />
                {/* Path 3: Very Dark Blue - Deep Curve */}
                <path
                    ref={addToLines}
                    d="M50,110 C20,80 80,80 50,50 C20,20 80,20 50,-10"
                    stroke="#050E3C"
                    strokeWidth="5"
                    fill="none"
                />
            </svg>

            <div className="mission-scroll-container">
                <div className="mission-content-section">
                    <h1 className="mission-hero-title">We Are StormLab</h1>

                    <div className="mission-narrative">
                        <p ref={addToRefs} className="mission-paragraph">
                            In a world saturated with noise, we choose to broadcast clarity. We are not just designers; we are architects of the digital realm, crafting spaces where brands can breathe, grow, and connect.
                        </p>
                        <p ref={addToRefs} className="mission-paragraph">
                            Our philosophy is simple: <strong>Impact through innovation.</strong> We strip away the unnecessary to reveal the essential core of your story. Every line of code, every pixel, every interaction is deliberate.
                        </p>
                        <p ref={addToRefs} className="mission-paragraph">
                            We believe in the power of "What If." What if a website could feel like a film? What if an interface could predict your needs? What if digital experiences were as emotive as physical ones?
                        </p>
                        <p ref={addToRefs} className="mission-paragraph">
                            From the neon-lit streets of cyberpunk aesthetics to the clean, sterile beauty of minimalism, we traverse genres to find the perfect visual language for your vision. We don't follow trends; we set the tempo.
                        </p>
                        <p ref={addToRefs} className="mission-paragraph">
                            Join us. Let's build something that doesn't just exist, but <em>lives</em>. Let's create the future, one scroll at a time.
                        </p>
                    </div>
                </div>

                <div className="mission-gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="mission-grid-item">
                            <img src={src} alt={`Mission ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissionPage;
