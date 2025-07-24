import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { budayaData, BudayaItem } from '../data/budayaData';

const BudayaTradisi: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-8 sm:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#ECEFF1] to-[#FDF8F3] dark:from-[#1a1a1a] dark:to-[#111] transition-colors duration-500">
      <div className="space-y-12 sm:space-y-20 max-w-6xl mx-auto">
        {budayaData.map((item: BudayaItem, index: number) => (
          <motion.div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Reduced from 0.4 for better mobile trigger
            transition={{ duration: 0.7 }}
          >
            {/* Image Container */}
            <div
              className={`relative h-64 sm:h-80 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 order-1 ${
                index % 2 !== 0 ? 'md:order-2' : 'md:order-1'
              }`}
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback jika gambar tidak bisa dimuat
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-image.jpg';
                }}
              />
            </div>

            {/* Content Container */}
            <div className={`text-left order-2 ${
              index % 2 !== 0 ? 'md:order-1' : 'md:order-2'
            }`}>
              <div className="inline-block bg-brand-accent/10 p-2 sm:p-3 rounded-full mb-3 sm:mb-4">
                {React.cloneElement(item.icon, { 
                  className: "text-brand-accent h-6 w-6 sm:h-8 sm:w-8" 
                })}
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal untuk Preview Gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              initial={{ y: 100, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 100, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BudayaTradisi;
