import React from 'react';
import { Award, Briefcase, Code, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <div className="bg-cream rounded-card p-6 sm:p-8 mb-6">
            <h2 className="text-2xl sm:text-3xl font-medium mb-6">About Me</h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                As an creative Developer based in Gujrat, I explore the intersection of technology and creative expression. My work focuses on pushing the boundaries of tech. visualization through technologies like web/app dev., blockchain and Ai.
              </p>
              <p>
                With over a 3 years of experience in web the field , I've developed a many unique and creative approaches that makes the life easier through technology. I am passionate about creating immersive experiences that engage and inspire users.
              </p>
              <p>
                My projects have been featured in various Hackatons and exhibitions, showcasing my ability to create something completely new and innovative out of blue.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cream rounded-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <Code size={24} className="text-medium-green" />
                <h3 className="text-xl font-medium">Technical</h3>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  3D Modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Ui/Ux Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Blockchain Development
                </li>
              </ul>
            </div>
            
            <div className="bg-cream rounded-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <Palette size={24} className="text-medium-green" />
                <h3 className="text-xl font-medium">Creative</h3>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Visual Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Responsive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  helpful 
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-medium-green rounded-full"></span>
                  Creative Direction
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-cream rounded-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-medium-green" />
              <h3 className="text-xl font-medium">Achievements</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-medium-green pl-4">
                <h4 className="font-medium text-lg">University Highest Marks</h4>
                <p className="text-sm text-gray-700">Parul University CSE diploma 3rd Semester</p>
              </div>
              <div className="border-l-2 border-medium-green pl-4">
                <h4 className="font-medium text-lg">400+ LeetCode Problems</h4>
                <p className="text-sm text-gray-700">with 250+ days of streak and 6000+ followers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cream rounded-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={24} className="text-medium-green" />
              <h3 className="text-xl font-medium">Experience</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg"> 6 Hackathon Participation</h4>
                <p className="text-base text-gray-700">with finalist in 2</p>
                <p className="text-sm text-medium-green">2023-now</p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Full Stack Development</h4>
                <p className="text-base text-gray-700">by Apna Collage</p>
                <p className="text-sm text-medium-green">2023-2024</p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Dipoma in Computer Science</h4>
                <p className="text-base text-gray-700">Parul Universiy</p>
                <p className="text-sm text-medium-green">2023-now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;