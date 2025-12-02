import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MissionSection.css';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const images = document.querySelectorAll('.mission-image-wrapper');

            images.forEach((img, index) => {
                gsap.fromTo(img,
                    {
                        scale: 0,
                        opacity: 0
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: img,
                            start: "top 90%", // Start animation when top of image hits 90% of viewport height
                            end: "bottom 60%",
                            toggleActions: "play none none reverse",
                            scrub: 1 // Smooth scrubbing effect
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="mission-section">
            {/* Floating Images Layer */}
            <div className="mission-images-layer">
                {/* Image 1: Woman with bubble helmet */}
                <div className="mission-image-wrapper img-1">
                    <div className="mission-picture">
                        <img
                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683948/ttdyojiveirhjnqxs5jg.png"
                            alt="White"
                            style={{ width: '286.98px', height: '338.56px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>

                {/* Image 2: Vanity table */}
                <div className="mission-image-wrapper img-2">
                    <div className="mission-picture">
                        <img
                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683952/q1q2kdd6yipkiaj6rmqm.png"
                            alt="Yellow"
                            style={{ width: '393.98px', height: '363.33px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>

                {/* Image 3: Escalator */}
                <div className="mission-image-wrapper img-3">
                    <div className="mission-picture">
                        <img
                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683945/ajlhurrvbxliihaah5qm.png"
                            alt="Pink White"
                            style={{ width: '306px', height: '282px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>

                {/* Image 4: Cosmic figure */}
                <div className="mission-image-wrapper img-4">
                    <div className="mission-picture">
                        <img
                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683955/oyd5ri99u5zfbvpwsaxv.png"
                            alt="Red"
                            style={{ width: '368.98px', height: '340.61px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>

                {/* Image 5: Sushi */}
                <div className="mission-image-wrapper img-5">
                    <div className="mission-picture">
                        <img
                            src="https://res.cloudinary.com/dll8duknt/image/upload/v1764683945/pqjjkjdszz7ldqlbgpbp.png"
                            alt="White Blue"
                            style={{ width: '231.98px', height: '214.59px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>

                {/* Image 6: Logo face */}
                <div className="mission-image-wrapper img-6">
                    <div className="mission-picture">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/5bde0da7cf51cb00fedf25c86327bf437401f3d1?width=376"
                            alt="For Creatives By Creatives logo"
                            style={{ width: '188px', height: '188px' }}
                        />
                        <div className="mission-overlay"></div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="mission-container-outer">
                <div className="mission-container-inner">
                    <div className="mission-content-wrapper">
                        <div className="mission-heading">
                            <h2 className="mission-title">
                                StormLab is for people
                            </h2>
                            <p className="mission-description">
                                who <strong>obsessed</strong> with craft, by people who respect it. Whether you geek out on mesh gradients or just love clean lines, this is your playground.
                            </p>
                        </div>

                        <a href="/mission" className="mission-button">
                            <span className="mission-button-text">About our mission</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
