import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="group relative rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img src={imageSrc} alt={altText} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" loading="lazy" />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
