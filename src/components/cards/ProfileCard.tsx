import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-profile-bg rounded-card overflow-hidden h-[400px] transition-all duration-300 hover:shadow-xl animate-fade-in">
      <img 
        src="\owner-photo\Nayan.jpg" 
        alt="Sadariya Nayan with White coat and tree's at background" 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default ProfileCard;