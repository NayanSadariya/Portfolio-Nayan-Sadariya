import React, { useState, useEffect } from 'react';
import HeroCard from './cards/HeroCard';
import ProfileCard from './cards/ProfileCard';
import BioCard from './cards/BioCard';
import ContactPromptCard from './cards/ContactPromptCard';
import ContactMeCard from './cards/ContactMeCard';
import ProjectsCard from './cards/ProjectsCard';
import SocialLinksCard from './cards/SocialLinksCard';
import AwardsCard from './cards/AwardsCard';
import TestimonialsCard from './cards/TestimonialsCard';
import SkillsCard from './cards/SkillsCard';

const GridLayout: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
      {/* Left column */}
      <div className={`md:col-span-4 space-y-3 sm:space-y-4 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
        <HeroCard />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="sm:col-span-2">
            <BioCard />
          </div>
          <ContactPromptCard />
          <ContactMeCard />
        </div>
        <TestimonialsCard />
      </div>
      
      {/* Middle column */}
      <div className={`md:col-span-4 space-y-3 sm:space-y-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <ProfileCard />
        <SkillsCard />
        <SocialLinksCard />
      </div>
      
      {/* Right column */}
      <div className={`md:col-span-4 space-y-3 sm:space-y-4 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
        <ProjectsCard />
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <AwardsCard />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;