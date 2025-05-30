import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Team/EDC%20Team%20Pic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-yellow-700 opacity-70"></div>

{/* 
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-900/80"></div> */}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center md:text-left md:max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Entrepreneurship Development Cell, MNIT Jaipur
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-200 max-w-3xl"
          >
            The Entrepreneurship Development Cell at MNIT Jaipur empowers students to transform innovative ideas into successful ventures through mentorship, resources, and opportunities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              Upcoming Events
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-primary-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Element with Logo */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,170.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="absolute left-1/2 transform -translate-x-1/2"
  style={{ bottom: '-20px' }}
>
            <img
              src="https://i.ibb.co/fGzFNpW6/ed-cell-logo-removebg-preview.png"
              alt="ED Cell Logo"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;