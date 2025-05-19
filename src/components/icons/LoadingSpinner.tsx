import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" stroke="#0A3B25" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  );
};

export default LoadingSpinner;