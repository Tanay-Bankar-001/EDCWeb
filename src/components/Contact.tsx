import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Gallery/Director%20And%20EDC%20CBDE.jpg',
    'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Gallery/MIIC%20Mentors%20CBDE.jpg',
    'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Gallery/Quintessence%20Team.jpg',
    'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Gallery/New%20Recruits%20OAT.jpg',
    'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Images_Gallery/Finance%20Workshop%20Quintessence.jpg',
  ];

  const logoUrl = 'https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Logos/ed_cell_logo-removebg-preview.png'; // Replace with your logo URL

  useEffect(() => {
  const interval = setInterval(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;

      if (Math.ceil(carouselRef.current.scrollLeft) >= maxScrollLeft) {
        // Reset scroll position to the start
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveIndex(0);
      } else {
        // Scroll to the next image
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }
  }, 3500);

  return () => clearInterval(interval);
}, [images.length]);


  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const width = carouselRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
      }
    };

    const ref = carouselRef.current;
    ref?.addEventListener('scroll', handleScroll);

    return () => {
      ref?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-gray-900 sm:text-4xl"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600"
          >
            <p>Have questions or want to collab?</p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                    Entrepreneurship Development Cell
                    <br />
                    MNIT Innovation and Incubation Centre
                    <br />
                    Malaviya National Institute of Technology
                    <br />
                    J.L.N. Marg, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <a href="mailto:edcell@mnit.ac.in" className="text-primary-600 hover:text-primary-700">
                    edcell@mnit.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <a href="tel:+911412529164" className="text-primary-600 hover:text-primary-700">
                    +91 141 252 9164
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://www.instagram.com/edcell_mnit/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Instagram size={24} />
                  <span>@edcell_mnit</span>
                </a>
                <a
                  href="https://in.linkedin.com/company/edcell-mnit-jaipur"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center"
          >
            <div
  ref={carouselRef}
  className="overflow-hidden w-full max-w-full sm:max-w-3xl max-h-64 flex space-x-4 scroll-smooth snap-x snap-mandatory"
>
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`carousel-${index}`}
      className="h-64 w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-lg shadow-md flex-shrink-0 snap-center"
    />
  ))}
</div>

            <div className="flex space-x-2 mt-4">
  {images.map((_, index) => (
    <div
      key={index}
      className={`h-2 w-2 rounded-full cursor-pointer ${
        index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
      } transition-colors`}
      onClick={() => {
        if (carouselRef.current) {
          const scrollAmount = carouselRef.current.offsetWidth * index;
          carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
          setActiveIndex(index);
        }
      }}
    ></div>
  ))}
</div>

            <img
              src={logoUrl}
              alt="EDC Logo"
              className="mt-6 h-16 w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
