import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

type Category = 'All' | 'Web Design' | 'UI/UX Design' | 'AI Automation';

const projectsData = [
  {
    category: 'Web Design',
    imageSrc: 'https://picsum.photos/seed/ecommercefashion/800/600',
    altText: 'A screenshot of a minimalist e-commerce website for a fashion brand.',
    title: 'E-commerce for Fashion Brand',
    description: 'A clean, image-focused e-commerce platform that increased sales by 30%.',
  },
  {
    category: 'UI/UX Design',
    imageSrc: 'https://picsum.photos/seed/financeapp/800/600',
    altText: 'UI design for a mobile banking application showing a dashboard.',
    title: 'Mobile Banking App',
    description: 'An intuitive and secure mobile app UI for a leading fintech startup.',
  },
  {
    category: 'AI Automation',
    imageSrc: 'https://picsum.photos/seed/chatbotflow/800/600',
    altText: 'A diagram showing an automated customer support chatbot workflow.',
    title: 'Customer Support Chatbot',
    description: 'An AI-powered chatbot that resolved 80% of customer queries automatically.',
  },
  {
    category: 'Web Design',
    imageSrc: 'https://picsum.photos/seed/techstartup/800/600',
    altText: 'The homepage of a tech startup with a dark theme and vibrant gradients.',
    title: 'SaaS Landing Page',
    description: 'A high-converting landing page for a B2B technology company.',
  },
  {
    category: 'UI/UX Design',
    imageSrc: 'https://picsum.photos/seed/analyticsdashboard/800/600',
    altText: 'A complex data analytics dashboard with various charts and graphs.',
    title: 'Analytics Dashboard UI',
    description: 'A user-friendly interface for visualizing complex business intelligence data.',
  },
  {
    category: 'Web Design',
    imageSrc: 'https://picsum.photos/seed/photographerfolio/800/600',
    altText: 'A portfolio website for a photographer with a full-screen image gallery.',
    title: 'Photographer Portfolio',
    description: 'An elegant, media-rich portfolio to showcase stunning visual work.',
  },
  {
    category: 'AI Automation',
    imageSrc: 'https://picsum.photos/seed/datapipeline/800/600',
    altText: 'A visual representation of an AI-powered data processing pipeline.',
    title: 'Data Processing Pipeline',
    description: 'Automated workflow for ingesting, cleaning, and analyzing large datasets.',
  },
  {
    category: 'UI/UX Design',
    imageSrc: 'https://picsum.photos/seed/uikit/800/600',
    altText: 'A collection of UI components from a design system, including buttons and forms.',
    title: 'Corporate Design System',
    description: 'A comprehensive UI kit to ensure brand consistency across all digital products.',
  },
  {
    category: 'AI Automation',
    imageSrc: 'https://picsum.photos/seed/contentgen/800/600',
    altText: 'The user interface for an AI tool that generates marketing copy.',
    title: 'AI Content Generation Tool',
    description: 'A tool that helps marketing teams create high-quality content in seconds.',
  },
];

const categories: Category[] = ['All', 'Web Design', 'UI/UX Design', 'AI Automation'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Work</h2>
          <p className="mt-4 text-lg text-dark-text">A selection of projects we're proud of.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-content-dark text-dark-text hover:bg-primary/50 hover:text-light-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
