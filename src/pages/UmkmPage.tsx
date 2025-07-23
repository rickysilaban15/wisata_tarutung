import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { umkmData } from '../data/umkmData';
import { Building, User, MapPin, Package, X } from 'lucide-react';

const UmkmPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section
      id="umkm"
      title="UMKM Lokal Tarutung"
      subtitle="Dukung pengusaha lokal dengan membeli produk-produk unik dan berkualitas asli dari Tarutung."
    className="bg-[#ffffff1a] backdrop-blur-xl"


    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {umkmData.map((item, index) => (
          <motion.div
            key={item.id}
           className="bg-[#ffffff1a] backdrop-blur-xl"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setActiveImage(item.image)}
              className="w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <Building className="h-5 w-5 mr-2 text-yellow-500" />
                {item.name}
              </h3>
              <div className="space-y-2 text-sm flex-grow">
                <p className="flex items-start"><Package className="h-4 w-4 mr-2 mt-0.5" /> Produk: <strong>{item.product}</strong></p>
                <p className="flex items-start"><User className="h-4 w-4 mr-2 mt-0.5" /> Pemilik: {item.owner}</p>
                <p className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-0.5" /> {item.address}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
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
            <X className="absolute top-6 right-6 text-white w-8 h-8 cursor-pointer" onClick={() => setActiveImage(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default UmkmPage;
