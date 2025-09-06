import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="bg-content-dark rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={imageSrc} alt={altText} className="w-full h-56 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-light-text mb-2">{title}</h3>
        <p className="text-dark-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;