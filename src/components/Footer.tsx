import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
  src="https://i.ibb.co/fGzFNpW6/ed-cell-logo-removebg-preview.png"
  alt="ED Cell Logo"
  className="h-12 w-15 mr-2"
/>

              <span className="font-heading font-bold text-xl">ED Cell MNIT Jaipur</span>
            </div>
            <p className="text-gray-400 mb-6">
              Fostering innovation and entrepreneurship at Malaviya National Institute of Technology, Jaipur.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ED Cell MNIT Jaipur. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'team', 'events', 'gallery'].map((item) => (
                <li key={item} className="text-gray-400 hover:text-primary-400 transition-colors">
                  <button 
                    onClick={() => scrollToSection(item)} 
                    className="flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    <span className="capitalize">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {['Startup Resources', 'Business Plan Templates', 'Funding Opportunities', 'Mentorship Program', 'Entrepreneurship Blog'].map((item) => (
                <li key={item} className="text-gray-400 hover:text-primary-400 transition-colors">
                  <a href="#" className="flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Malaviya National Institute of Technology</p>
              <p>J.L.N. Marg, Jaipur, Rajasthan 302017</p>
              <p>Email: <a href="mailto:edcell@mnit.ac.in" className="text-primary-400 hover:text-primary-300">edcell@mnit.ac.in</a></p>
              <p>Phone: +91 141 252 9164</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Designed and developed for the Entrepreneurship Development Cell, MNIT Jaipur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;