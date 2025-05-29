import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/fGzFNpW6/ed-cell-logo-removebg-preview.png"
              alt="ED Cell Logo"
              className="h-12 w-auto mr-3"
            />
            <span className="font-heading font-bold text-lg md:text-xl text-gray-900">
              ED Cell MNIT Jaipur
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {['home', 'about', 'events', 'initiatives', 'gallery', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-medium text-gray-800 hover:text-primary-600 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-4 space-y-2">
            {['home', 'about', 'events', 'initiatives', 'gallery', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-md capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
