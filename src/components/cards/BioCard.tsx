import React from 'react';
import LoadingSpinner from '../icons/LoadingSpinner';

const BioCard: React.FC = () => {
  return (
    <div className="bg-cream rounded-card p-5 sm:p-6 flex flex-col h-full">
      <div className="mb-4">
        <LoadingSpinner />
      </div>
      <p className="text-sm leading-relaxed">
        Sadariya Nayan is creative developer with a passion for crafting immersive digital experiences. With a background in web development and design, Nayan combines technical expertise with a keen eye for aesthetics. He is dedicated to pushing the boundaries of creativity and technology, delivering innovative solutions that engage and inspire users.
      </p>
    </div>
  );
};

export default BioCard;