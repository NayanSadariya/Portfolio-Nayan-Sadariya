import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsCard: React.FC = () => {
  const projects = [
    {
      name: "Suburbia Skates",
      description: "Skills showcase.",
      image: "/Project-photoes/Suburbia-Skates.png",
      tech: ["Next.js", "Three.js", "GSAP","Tailwind"]
    },
    {
      name: "Permissionless BlockAi",
      description: "Online Shark Tank",
      image: "public/Project-photoes/Permissionless.png",
      tech: ["Next.js", "React.js", "Node.js", "Blockchain"]
    },
    {
      name: "Soltracer",
      description: "Moving Solar panel",
      image: "public/Project-photoes/Soltracer.png",
      tech: ["WebGL", "Three.js","React.js", "Node.js"]
    }
  ];

  return (
    <div className="bg-cream rounded-card p-5 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Featured Projects</h3>
        <Link to="/projects">
          <ArrowUpRight size={24} className="cursor-pointer hover:scale-110 transition-transform" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end text-white transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
              <h4 className="text-lg font-medium mb-1">{project.name}</h4>
              <p className="text-sm text-gray-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;