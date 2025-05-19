import React from 'react';
import SpiralIcon from '../icons/SpiralIcon';

const HeroCard: React.FC = () => {
  return (
    <div className="bg-cream rounded-card p-6 sm:p-8 relative overflow-hidden h-[260px] sm:h-[300px] animate-fade-in">
      <div className="absolute top-4 right-4 animate-[spin_20s_linear_infinite]">
        <SpiralIcon />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-10 pr-4">
        <h2 className="text-mobile-hero sm:text-hero font-bold leading-tight">
          Creative Developer
          <br />
          <span className="font-light italic">developing</span> with
          <br />
          Future in Mind
        </h2>
      </div>
    </div>
  );
};

export default HeroCard;