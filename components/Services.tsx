import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imageSrc: 'https://picsum.photos/seed/modernweb/1600/900',
    altText: 'A modern desk with a laptop showing a clean UI mockup with indigo and cyan accents.',
    title: 'Web Design',
    description: 'Pixel-perfect responsive websites built for performance and conversions.',
  },
  {
    imageSrc: 'https://picsum.photos/seed/neuralnet/1600/900',
    altText: 'Stylized server room with glowing data lines, representing AI automation.',
    title: 'AI Automation',
    description: 'Smart workflows and agents that automate repetitive tasks and save hours.',
  },
  {
    imageSrc: 'https://picsum.photos/seed/designsystem/1600/900',
    altText: 'A moodboard flatlay with color swatches, UI components, and a tablet for UI/UX design.',
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that provide a seamless user experience.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg text-dark-text">What we do best to help you grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;