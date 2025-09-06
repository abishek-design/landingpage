import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden bg-background-dark">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-4 border-primary/50"
          style={{
            animation: 'pulse 4s ease-in-out infinite',
          }}
        ></div>
      </div>
      
      <div className="relative z-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-4">
          Innovative Solutions for a <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Digital World</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-text max-w-3xl mx-auto mb-8">
          We build creative, responsible, and future-proof digital experiences that elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="primary">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;