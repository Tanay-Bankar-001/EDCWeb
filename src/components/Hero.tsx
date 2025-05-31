import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-[85vh] flex items-center justify-center bg-gray-900"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Team/EDC%20Team%20Pic.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              className="mt-8 text-lg sm:text-xl text-gray-200 leading-relaxed"
            >
              Empowering students to transform innovative ideas into successful ventures through mentorship, resources, and opportunities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <button 
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-300 group"
              >
                Upcoming Events
                <ArrowRight size={18} className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg shadow-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 transition duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Wave + Logo */}
      <div className="relative bg-white">
        {/* SVG Wave */}
        <div className="w-full h-[120px] overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Logo Overlapping the Wave */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            src="https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Logos/ed_cell_logo-removebg-preview.png"
            alt="Entrepreneurship Development Cell Logo"
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
