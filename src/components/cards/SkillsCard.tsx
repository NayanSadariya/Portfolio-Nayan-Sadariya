import React from 'react';
import { Code, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkillsCard: React.FC = () => {
  const skills = [
    'Three.js & WebGL',
    'DSA using C++',
    'React.js and Next.js',
    'Python & Java',
    'Database Management',
  ];

  return (
    <div className="bg-cream rounded-card p-5 sm:p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Code size={20} />
          <h3 className="text-xl font-medium">Skills</h3>
        </div>
        <Link to="/skills">
          <ArrowUpRight size={24} className="cursor-pointer hover:scale-110 transition-transform" />
        </Link>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm bg-cream-darker rounded-lg p-3 hover:translate-x-1 transition-transform"
          >
            <span className="w-2 h-2 bg-medium-green rounded-full"></span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;