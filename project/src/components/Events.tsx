import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { events } from '../data/events';
import { Event } from '../types';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const filteredEvents = events.filter(event => event.type === activeTab);

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent-400"
    >
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover object-center"
        />
        <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-medium ${
          event.type === 'upcoming' ? 'bg-accent-500 text-white' : 'bg-primary-600 text-white'
        }`}>
          {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary-800">{event.title}</h3>
        <div className="mt-2 flex items-center text-primary-600">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        {event.location && (
          <div className="mt-1 flex items-center text-primary-600">
            <MapPin size={16} className="mr-2" />
            <span>{event.location}</span>
          </div>
        )}
        <p className="mt-3 text-primary-700">{event.description}</p>
        {event.registrationLink && (
          <a 
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
          >
            Register Now
            <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-primary-800 sm:text-4xl"
          >
            Events
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-primary-700"
          >
            <p>Join us for workshops, competitions, and networking opportunities</p>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                activeTab === 'upcoming' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-primary-700 hover:bg-primary-50'
              } border border-primary-300`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                activeTab === 'past' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-primary-700 hover:bg-primary-50'
              } border border-primary-300 border-l-0`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;