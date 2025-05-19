import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Suburbia Skates",
      description: "A stunning landing page and interactive customizer app for a fictional skateboard brand, Suburbia Skateboards.",
      tech: ["Next.js", "Three.js", "GSAP","Tailwind"],
      image: "/Project-photoes/Suburbia-Skates.png",
      links: {
        live: "https://suburbia-skates-nayan.netlify.app/",
        github: "https://github.com/NayanSadariya/Skateboard-Website"
      }
    },
    {
      name: "Permissionless BlockAi",
      description: "The website which is made like the future of Shark Tank India that takes the palteform completely online.",
      tech: ["Next.js", "React.js", "Node.js", "Blockchain"],
      image: "/Project-photoes/Permissionless.png",
      links: {
        live: "https://www.linkedin.com/posts/nayan-sadariya_crowdfunding-blockchain-permissionless-activity-7281310372563742720-fsur?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE4PXm4B2GBRuhdfd5s9jnfKl5_ZygLSpl4",
        github: "https://github.com/NayanSadariya/CrowdChain-The-future-of-Shark-Tank"
      }
    },
    {
      name: "Soltracer",
      description: "A web-app that is built to manage the solar panel modern installation and maintenance with 3D objects.",
      tech: ["WebGL", "Three.js","React.js", "Node.js"],
      image: "/Project-photoes/Soltracer.png",
      links: {
        live: "https://monumental-semolina-0d3db5.netlify.app/",
        github: "https://github.com/NayanSadariya"
      }
    },
    {
      name: "Bean&Brew",
      description: "A coffee shop website that showcases the menu, ambiance, and unique offerings of the shop.",
      tech: ["HTML", "Typescript", "Tailwind","PHP"],
      image: "/Project-photoes/Bean&Brew.png",
      links: {
        live: "https://idyllic-duckanoo-4dc071.netlify.app/",
        github: "https://github.com/NayanSadariya/E-commerce"
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="bg-cream rounded-card overflow-hidden hover:shadow-xl transition-all duration-500"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-medium mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-dark-green bg-opacity-10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-medium-green hover:underline"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-medium-green hover:underline"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
