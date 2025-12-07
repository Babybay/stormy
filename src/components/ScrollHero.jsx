import React from 'react';
import './ScrollHero.css';

const ScrollHero = () => {
    return (
        <div className="scroll-hero-wrapper" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
            <div className="content-wrap" style={{ height: '100%', width: '100%' }}>
                <header style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, mixBlendMode: 'difference' }}>
                    <h1 className="fluid text-center text-white" style={{ fontSize: '10vw', lineHeight: '1', fontWeight: 'bold' }}>
                        Stormy
                        <br />
                        StormLab.
                    </h1>
                </header>
                <main style={{ height: '100%', width: '100%' }}>
                    <section style={{ height: '100%', width: '100%' }}>
                        <div className="content" style={{ height: '100%', width: '100%' }}>
                            {/* Static text only, image grid removed */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ScrollHero;
