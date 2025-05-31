import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, BookOpen, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary-500" aria-label="Target Icon" />,
      title: 'Ideation Workshops',
      description: 'Regular workshops to help students brainstorm and refine their business ideas.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" aria-label="Users Icon" />,
      title: 'Mentorship Network',
      description: 'Connect with experienced entrepreneurs and industry experts for guidance.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" aria-label="Award Icon" />,
      title: 'Pitch Competitions',
      description: 'Opportunities to pitch ideas to investors and win funding for your startup.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" aria-label="Book Open Icon" />,
      title: 'Learning Resources',
      description: 'Access to courses, books, and tools for entrepreneurial skill development.',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-500" aria-label="Globe Icon" />,
      title: 'Networking Events',
      description: 'Connect with like-minded peers, alumni entrepreneurs, and industry leaders.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-500" aria-label="Trending Up Icon" />,
      title: 'Incubation Support',
      description: 'Guidance and resources to help turn your idea into a viable business.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            About ED Cell
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-gray-600"
          >
            Empowering the next generation of entrepreneurs
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 lg:mt-16 space-y-6 text-lg text-gray-700"
        >
          <p className="leading-relaxed">
            The Entrepreneurship Development Cell (EDC) at Malaviya National Institute of Technology, Jaipur is a
            student-run organization that aims to foster and nurture the entrepreneurial spirit among students. Established
            in 2016, our mission is to develop the entrepreneurial ecosystem on campus and help students convert their
            innovative ideas into successful ventures.
          </p>
          <p className="leading-relaxed">
            At ED Cell MNIT, we believe that entrepreneurship is the key to solving real-world problems and creating a
            sustainable future. We provide a platform for students to explore their entrepreneurial potential, develop
            business acumen, and connect with industry experts and investors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              role="article"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-50 rounded-lg">{feature.icon}</div>
              </div>
              <h3
                id={`feature-title-${index}`}
                className="text-xl font-bold text-gray-900 mb-2"
              >
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
