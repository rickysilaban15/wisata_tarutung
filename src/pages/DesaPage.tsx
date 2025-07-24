import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { desaData } from '../data/desaData';
import { MapPin, User, Building, X } from 'lucide-react';

const DesaPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Debug logs
  console.log('=== DESA PAGE DEBUG ===');
  console.log('Component rendered');
  console.log('desaData length:', desaData?.length || 0);
  console.log('desaData sample:', desaData?.[0]);

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

  // Test render tanpa data dulu
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
           ᴅᴇꜱᴀ-ᴅᴇꜱᴀ ᴅɪ ᴛᴀʀᴜᴛᴜɴɢ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
           𝗝𝗲𝗹𝗮𝗷𝗮𝗵𝗶 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶 𝗱𝗲𝘀𝗮 𝘆𝗮𝗻𝗴 𝗮𝗱𝗮 𝗱𝗶 𝘄𝗶𝗹𝗮𝘆𝗮𝗵 𝗧𝗮𝗿𝘂𝘁𝘂𝗻𝗴
          </p>
        </div>

        

        {/* Conditional Rendering */}
        {!desaData || desaData.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-red-100 border border-red-400 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Data Tidak Ditemukan</h3>
              <p className="text-red-700">
                Import desaData mungkin gagal atau data kosong.
              </p>
              <p className="text-sm text-red-600 mt-2">
                Periksa path import dan struktur file data.
              </p>
            </div>
          </div>
        ) : (
          <>
            
            {/* Grid Desa */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {desaData.map((desa, index) => (
                <motion.div
                  key={desa.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={desa.image}
                      alt={desa.name}
                      onClick={() => setActiveImage(desa.image)}
                      className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        console.log('❌ Image failed to load:', desa.name, desa.image);
                        e.currentTarget.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=' + encodeURIComponent(desa.name);
                      }}
                      onLoad={() => {
                        console.log('✅ Image loaded:', desa.name);
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center">
                      <Building className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="truncate">{desa.name}</span>
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span>{desa.population.toLocaleString()} jiwa</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>Kode Pos: {desa.postalCode}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={desa.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg inline-flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      <MapPin className="h-4 w-4" />
                      Lihat Lokasi
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Modal untuk gambar fullscreen */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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
                className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
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
      </div>
    </div>
  );
};

export default DesaPage;
