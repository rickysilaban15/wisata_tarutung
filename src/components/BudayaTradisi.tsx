import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { budayaData, BudayaItem } from '../data/budayaData';

const BudayaTradisi: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-[#ECEFF1] to-[#FDF8F3] dark:from-[#1a1a1a] dark:to-[#111] transition-colors duration-500">
      <div className="space-y-20 max-w-6xl mx-auto">
        {budayaData.map((item: BudayaItem, index: number) => (
          <motion.div
            key={item.title}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className={`relative h-80 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-left">
              <div className="inline-block bg-brand-accent/10 p-3 rounded-full mb-4">
                {React.cloneElement(item.icon, { className: "text-brand-accent h-8 w-8" })}
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Animasi Bangkit */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              initial={{ y: 200, scale: 0.8, rotateX: 60, opacity: 0 }}
              animate={{ y: 0, scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ y: 200, scale: 0.8, rotateX: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BudayaTradisi;
