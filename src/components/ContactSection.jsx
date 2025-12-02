import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

const fanImages = [
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764684512/ssa1tsorahaaihbsu1zj.png',
        finalRotate: -167.177,
        finalLeft: '-272px',
        finalTop: '238px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764683955/oyd5ri99u5zfbvpwsaxv.png',
        finalRotate: 167.177,
        finalLeft: '-61px',
        finalTop: '238px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764685154/nridrdokaiqvexleglhb.png',
        finalRotate: 141.392,
        finalLeft: '72px',
        finalTop: '136px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764683945/pqjjkjdszz7ldqlbgpbp.png',
        finalRotate: 115.763,
        finalLeft: '191px',
        finalTop: '6px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764687122/ildycs5fonz1xntf2td4.png',
        finalRotate: 90,
        finalLeft: '272px',
        finalTop: '-124px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764687126/bllyoanpd9w7dygebrlf.png',
        finalRotate: 64.237,
        finalLeft: '191px',
        finalTop: '-404px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764687122/jd0mimfpmwkgdkyky38i.png',
        finalRotate: 38.608,
        finalLeft: '72px',
        finalTop: '-603px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764684518/j4hkv4msae9buu4pppo5.png',
        finalRotate: 12.823,
        finalLeft: '-61px',
        finalTop: '-683px'
    },
    {
        src: 'https://res.cloudinary.com/dll8duknt/image/upload/v1764687121/zebwo0kzypxhpptm7fli.png',
        finalRotate: -12.823,
        finalLeft: '-272px',
        finalTop: '-683px'
    }
];

export const ContactSection = () => {
    const sectionRef = useRef(null);
    const fanRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%", // Pin for 100% of viewport height
                    pin: true,
                    scrub: 1,
                    // markers: true // Uncomment for debugging
                }
            });

            // Animate cards fanning out
            cardsRef.current.forEach((card, index) => {
                const config = fanImages[index];
                tl.to(card, {
                    rotation: config.finalRotate,
                    left: config.finalLeft,
                    top: config.finalTop,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                }, 0); // All start at 0
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="contact-section">
            <div className="contact-container-outer">
                <div className="contact-content-wrapper">

                    {/* Image Fan */}
                    <div ref={fanRef} className="contact-image-fan">
                        <div className="fan-center">
                            {fanImages.map((img, index) => (
                                <div
                                    key={index}
                                    ref={el => cardsRef.current[index] = el}
                                    className="fan-card"
                                // Initial styles handled by CSS, final by GSAP
                                >
                                    <img src={img.src} alt="" />
                                    <div className="fan-card-overlay"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="contact-text-content">
                        <h2 className="contact-heading">
                            Ready to start your project?
                        </h2>
                        <p className="contact-subtext">
                            Let's build something amazing together.
                        </p>
                        <a href="https://wa.me/6281915660272" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <span className="contact-button-text">Contact Us</span>
                            <div className="contact-button-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0E1318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
