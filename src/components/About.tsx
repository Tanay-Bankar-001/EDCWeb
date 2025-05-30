import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, BookOpen, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Ideation Workshops',
      description: 'Regular workshops to help students brainstorm and refine their business ideas.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Mentorship Network',
      description: 'Connect with experienced entrepreneurs and industry experts for guidance.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Pitch Competitions',
      description: 'Opportunities to pitch ideas to investors and win funding for your startup.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Learning Resources',
      description: 'Access to courses, books, and tools for entrepreneurial skill development.',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Networking Events',
      description: 'Connect with like-minded peers, alumni entrepreneurs, and industry leaders.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Incubation Support',
      description: 'Guidance and resources to help turn your idea into a viable business.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-primary-800 sm:text-4xl"
          >
            About ED Cell MNIT
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-primary-700"
          >
            <p>Empowering the next generation of entrepreneurs</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 lg:mt-16 text-lg text-primary-900 space-y-6"
        >
          <p>
            The Entrepreneurship Development Cell (EDC) at Malaviya National Institute of Technology, Jaipur is a student-run organization that aims to foster and nurture the entrepreneurial spirit among students. Established in 2016, our mission is to develop the entrepreneurial ecosystem on campus and help students convert their innovative ideas into successful ventures.
          </p>
          <p>
            At ED Cell MNIT, we believe that entrepreneurship is the key to solving real-world problems and creating a sustainable future. We provide a platform for students to explore their entrepreneurial potential, develop business acumen, and connect with industry experts and investors.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-400"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
              <p className="text-primary-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;