import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { desaData } from '../data/desaData';
import { MapPin, User, Building, X } from 'lucide-react';

const DesaPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <Section
      id="desa"
      title="Desa-Desa di Tarutung"
      subtitle="Jelajahi informasi desa yang ada di wilayah Tarutung, lengkap dengan lokasi, kepala desa, dan gambar desa."
      className="bg-[#ffffff1a] backdrop-blur-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {desaData.map((desa, index) => (
          <motion.div
            key={desa.id}
            className="bg-[#ffffff1a] backdrop-blur-xl rounded-xl overflow-hidden shadow-md flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={desa.image}
              alt={desa.name}
              onClick={() => setActiveImage(desa.image)}
              className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
              loading="lazy"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-green-500" />
                  {desa.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start">
  <User className="h-4 w-4 mr-2 mt-0.5" />
  Jumlah Penduduk: {desa.population.toLocaleString()} jiwa
</p>

                  
                </div>
              </div>

<a
  href={desa.mapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 rounded-lg inline-flex items-center gap-2 transition"
>
  <MapPin className="h-4 w-4 text-white" />
  Lihat Lokasi
</a>
 
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Gambar Fullscreen */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.7, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.6, y: 100 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            />
            <motion.button
              className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-1 hover:bg-black/80"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default DesaPage;
