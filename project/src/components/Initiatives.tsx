import React from 'react';
import { motion } from 'framer-motion';
import { initiatives } from '../data/initiatives';

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-primary-800 sm:text-4xl"
          >
            Our Initiatives
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-primary-700"
          >
            <p>Building the entrepreneurial ecosystem at MNIT</p>
          </motion.div>
        </div>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent-400 border-4 border-white shadow-md z-10 flex items-center justify-center">
                <span className="text-lg">{initiative.icon}</span>
              </div>

              {/* Content Card */}
              <div
                className={`relative w-full sm:w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-400">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary-800">{initiative.title}</h3>
                    <span className="text-sm font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded">
                      {initiative.year}
                    </span>
                  </div>
                  <p className="text-primary-600">{initiative.description}</p>
                </div>
              </div>

              {/* Connecting Line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-accent-400 ${
                  index % 2 === 0 ? 'left-1/2' : 'right-1/2'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
