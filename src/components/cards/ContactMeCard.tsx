import React from 'react';

const ContactMeCard: React.FC = () => {
  const handleClick = () => {
    window.open('/contact', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-medium-green rounded-card p-3 sm:p-4 h-[80px] sm:h-[100px] flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => window.location.href = '/contact'}
      tabIndex={0}
      role="button"
      onKeyPress={e => {
      if (e.key === 'Enter' || e.key === ' ') window.location.href = '/contact';
      }}
    >
      <h2 className="text-lg sm:text-xl font-medium text-white">Contact me</h2>
    </div>
  );
};

export default ContactMeCard;
