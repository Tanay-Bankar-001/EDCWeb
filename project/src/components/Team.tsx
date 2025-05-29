import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/team';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-gray-900 sm:text-4xl"
          >
            Our Leadership Team
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600"
          >
            <p>Meet the dedicated individuals driving innovation at EDC MNIT</p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl hover:glass"

            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-64 object-cover object-center transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <div className="mt-4 flex space-x-3">
                  {member.linkedin && member.linkedin !== "https://linkedin.com" && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
