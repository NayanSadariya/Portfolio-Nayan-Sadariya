import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactPromptCard: React.FC = () => {
  return (
    <div className="bg-medium-green rounded-card p-3 sm:p-4 h-[80px] sm:h-[100px] flex items-center hover:scale-105 transition-all duration-300 cursor-pointer">
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