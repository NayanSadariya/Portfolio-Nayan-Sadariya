import React from 'react';

const ContactMeCard: React.FC = () => {
  const handleClick = () => {
    window.open('/contact', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-medium-green rounded-card p-5 sm:p-6 h-[120px] sm:h-[140px] flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
    >
      <h2 className="text-xl sm:text-2xl font-medium text-white">Contact me</h2>
    </div>
  );
};

export default ContactMeCard;
