import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-gray-900 sm:text-4xl"
          >
            Photo Gallery
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600"
          >
            <p>Moments captured from our events and activities</p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{image.event}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
                <h3 className="font-medium">{selectedImage.event}</h3>
                <p className="text-sm text-gray-200">{selectedImage.alt}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

