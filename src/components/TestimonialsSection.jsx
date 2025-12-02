import React, { useRef } from 'react';
import './TestimonialsSection.css';

const testimonials = [
    {
        id: 1,
        text: "Working with this team of brilliant, problem solving, passionate, agile Ninjas is such a joy. Their creative ambition & desire to help bring even the most eye watering & challenging projects to life is second to none.",
        author: "Nikki Cramphorn",
        role: "Adam&EveDDB",
        theme: "pink"
    },
    {
        id: 2,
        text: "Not content with executing whatever you ask of them to the highest standard, they consistently improve and develop concepts, taking them in exciting new directions I could have never foreseen.",
        author: "John Wildes",
        role: "Edelman",
        theme: "green"
    },
    {
        id: 3,
        text: "I’ve worked with Creative Giants for many years, and they never fail to deliver… they jump head feet into all challenges and over- deliver every time. What I especially like about them is that they often enhance the creative, as well as being solutions orientated…",
        author: "Emilie Verlander",
        role: "Edelman",
        theme: "blue"
    }
];

const QuoteIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.1837 63.1402H0V39.7885C0 35.581 0.489796 31.6539 1.46939 28.0074C2.61225 24.2207 4.2449 20.9248 6.36735 18.1198C8.65306 15.3148 11.5103 13.0708 14.9388 11.3878C18.3673 9.70479 22.3673 8.86328 26.9387 8.86328V19.3821C24.1633 19.3821 21.8776 20.0132 20.0817 21.2754C18.2857 22.3975 16.8163 23.9402 15.6735 25.9037C14.5306 27.8672 13.7143 30.1113 13.2245 32.6357C12.898 35.02 12.7347 37.4043 12.7347 39.7885H27.1837V63.1402ZM72 63.1402H44.8163V39.7885C44.8163 35.581 45.3062 31.6539 46.2857 28.0074C47.4286 24.2207 49.0612 20.9248 51.1837 18.1198C53.4694 15.3148 56.3265 13.0708 59.7551 11.3878C63.1837 9.70479 67.1836 8.86328 71.7551 8.86328V19.3821C68.9795 19.3821 66.6939 20.0132 64.8979 21.2754C63.102 22.3975 61.6327 23.9402 60.4897 25.9037C59.3469 27.8672 58.5306 30.1113 58.0409 32.6357C57.7143 35.02 57.551 37.4043 57.551 39.7885H72V63.1402Z" fill={color} />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.1298 3.55859L2.18799 12.5003L11.1291 21.4415L11.999 20.5715L4.54303 13.1154H22.1968V11.8851H4.54303L11.9997 4.42854L11.1298 3.55859Z" fill="black" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.8703 3.55859L22.812 12.5003L13.8709 21.4415L13.001 20.5715L20.457 13.1154H2.80322V11.8851H20.457L13.0004 4.42854L13.8703 3.55859Z" fill="black" />
    </svg>
);

const TestimonialsSection = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 932; // Card width + padding
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-header-container">
                <div className="testimonials-top-bar">
                    <h2 className="testimonials-title">Testimonials</h2>
                    <div className="testimonials-nav">
                        <button onClick={() => scroll('left')} className="nav-button" aria-label="Previous testimonial">
                            <ArrowLeftIcon />
                        </button>
                        <button onClick={() => scroll('right')} className="nav-button" aria-label="Next testimonial">
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className="testimonials-scroll-container" ref={scrollContainerRef}>
                <div className="testimonials-list">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card-wrapper">
                            <div className={`testimonial-card ${item.theme}`}>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">
                                        {item.text}
                                    </p>
                                    <div className="quote-icon-container">
                                        <QuoteIcon color={
                                            item.theme === 'pink' ? '#8A0467' :
                                                item.theme === 'green' ? '#03624C' :
                                                    '#A5C8EB'
                                        } />
                                    </div>
                                </div>
                                <div className="testimonial-author-info">
                                    <span className="author-name">{item.author}</span>
                                    <span className="author-role">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
