// components/SplashScreen.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "https://i.ibb.co/fGzFNpW6/ed-cell-logo-removebg-preview.png"; // replace with your actual logo path

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // duration before main content shows

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={logo}
            alt="EDCELL Logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-40 h-40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
