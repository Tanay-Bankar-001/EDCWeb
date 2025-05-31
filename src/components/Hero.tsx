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
            backgroundImage:
              "url('https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Team/EDC%20Team%20Pic.jpg')",
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
              Empowering students to transform innovative ideas into successful
              ventures through mentorship, resources, and opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById('events')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-300 group"
              >
                Upcoming Events
                <ArrowRight
                  size={18}
                  className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg shadow-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 transition duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Wave + Logo */}
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
    <div
  className="absolute left-1/2 transform -translate-x-1/2"
  style={{ bottom: '0px' }} // Adjust the value as needed
>
  <img
    src="https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Logos/ed_cell_logo-removebg-preview.png"
    alt="ED Cell Logo"
    className="w-48 h-auto object-contain"
  />
</div>

  </div>
</div>

    </>
  );
};

export default Hero;
