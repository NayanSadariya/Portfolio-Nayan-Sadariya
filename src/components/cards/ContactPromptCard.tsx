import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactPromptCard: React.FC = () => {
  return (
    <div className="bg-medium-green rounded-card p-5 sm:p-6 flex flex-col justify-between h-[120px] sm:h-[140px] hover:scale-105 transition-all duration-300">
      <div>
        <p className="text-lg sm:text-xl text-white">
          Checkout my Resume!!
        </p>
      </div>
      <a
        href="/Nayan Sadariya - Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end"
        style={{ textDecoration: 'none' }}
        tabIndex={-1}
        aria-label="Open Resume PDF"
      >
        <ArrowUpRight size={24} className="text-white" />
      </a>
    </div>
  );
};

export default ContactPromptCard