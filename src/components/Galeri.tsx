import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galeriData } from '../data/galeriData';

const Galeri: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

  return (
     <div className="min-h-screen bg-gradient-to-b from-[#4b2e2e] via-[#6e4f3a] to-[#a9825a] text-white columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-4 py-8">
      {galeriData.map((item, index) => (
        <motion.div
          key={index}
          className="cursor-pointer mb-4 break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
          whileTap={{ scale: 1.1, rotateX: 10 }}
          onClick={() => setSelected(item.src)}
        >
          {isVideo(item.src) ? (
            <video
              src={item.src}
              controls
              className="w-full h-auto object-cover rounded-lg"
            />
          ) : (
            <img
              src={item.src}
              alt={item.description}
              className="w-full h-auto object-cover rounded-lg"
            />
          )}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            <p className="text-sm font-semibold">{item.description}</p>
          </div>
        </motion.div>
      ))}

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl w-full relative">
            {isVideo(selected) ? (
              <video
                src={selected}
                controls
                autoPlay
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <img
                src={selected}
                alt="Preview"
                className="w-full h-auto rounded-xl"
              />
            )}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white bg-black/60 px-3 py-1 rounded hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
