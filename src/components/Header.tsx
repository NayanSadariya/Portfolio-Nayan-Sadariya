import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-cream rounded-full mb-6 px-6 sm:px-8 py-3 sm:py-4">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-lg sm:text-xl">
            <span className="font-light italic">Nayan</span>{' '}
            <span className="font-medium">Sadariya</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-base">
            <li>
              <Link 
                to="/projects" 
                className={`hover:underline transition-all ${location.pathname === '/projects' ? 'underline' : ''}`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`hover:underline transition-all ${location.pathname === '/skills' ? 'underline' : ''}`}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`hover:underline transition-all ${location.pathname === '/about' ? 'underline' : ''}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={`hover:underline transition-all ${location.pathname === '/faq' ? 'underline' : ''}`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`hover:underline transition-all ${location.pathname === '/contact' ? 'underline' : ''}`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-x-4 top-20 bg-cream rounded-xl p-6 shadow-lg animate-fade-in z-50">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/projects" 
                className={`block text-lg hover:text-medium-green transition-colors ${location.pathname === '/projects' ? 'text-medium-green font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`block text-lg hover:text-medium-green transition-colors ${location.pathname === '/skills' ? 'text-medium-green font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block text-lg hover:text-medium-green transition-colors ${location.pathname === '/about' ? 'text-medium-green font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={`block text-lg hover:text-medium-green transition-colors ${location.pathname === '/faq' ? 'text-medium-green font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block text-lg hover:text-medium-green transition-colors ${location.pathname === '/contact' ? 'text-medium-green font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;