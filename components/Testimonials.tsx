import React from 'react';

// Logos as simple functional components for reuse
const LogoStartupInc: React.FC = () => (
  <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.383 1.992a1 1 0 00-1.066-.002l-9.13 5.495A1 1 0 002 8.4v6.998a1 1 0 00.3.7l9.434 5.495a1 1 0 001.066 0l9.13-5.495a1 1 0 00.7-.9V8.4a1 1 0 00-.7-.9l-9.13-5.495zM4 9.18l8-4.8v16.238l-8-4.72V9.18z" />
  </svg>
);

const LogoCreativeCo: React.FC = () => (
  <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>
);

const LogoBrandify: React.FC = () => (
    <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
);

const logos = [<LogoStartupInc />, <LogoCreativeCo />, <LogoBrandify />];

const testimonials = [
    {
        quote: "Techwork By Abi's AI automation saved us 10+ hours a week. Their design process was seamless and the results speak for themselves. A true partner in growth.",
        name: 'Jane Doe',
        title: 'CEO, Startup Inc.'
    },
    {
        quote: "The new website is not only beautiful but also incredibly fast. We've seen a 40% increase in conversions since launch. Highly recommended!",
        name: 'John Smith',
        title: 'Marketing Head, Creative Co.'
    },
    {
        quote: "They understood our vision for brand strategy perfectly and delivered a design that truly represents our company's values. The team is professional and efficient.",
        name: 'Emily White',
        title: 'Founder, Brandify'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-content-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-dark-text">Real stories from businesses we've helped.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-background-dark p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                            {logos[index]}
                            <blockquote className="text-light-text italic mt-6 mb-4 flex-grow">"{testimonial.quote}"</blockquote>
                            <footer className="mt-4">
                                <p className="font-bold text-primary">{testimonial.name}</p>
                                <cite className="text-sm text-dark-text not-italic">{testimonial.title}</cite>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;