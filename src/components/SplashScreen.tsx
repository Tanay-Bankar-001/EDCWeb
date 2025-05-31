import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={{ 
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 1.5,
                ease: "easeOut"
              }
            }}
            exit={{ 
              scale: 0.5,
              rotateY: 180,
              transition: {
                duration: 0.5
              }
            }}
            className="relative w-48 h-48 perspective-1000"
          >
            <motion.img
              src="https://raw.githubusercontent.com/Tanay-Bankar-001/ImagesEDC/main/Logos/ed_cell_logo-removebg-preview.png"
              alt="EDC Logo"
              className="w-full h-full object-contain"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;