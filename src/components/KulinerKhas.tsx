import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { kulinerData, KulinerItem } from '../data/kulinerData';
import Modal from './Modal';
import { BookOpen, MapPin, UtensilsCrossed } from 'lucide-react';

const KulinerKhas: React.FC = () => {
  const [selectedKuliner, setSelectedKuliner] = useState<KulinerItem | null>(null);

  return (
  <>
    {/* SECTION DENGAN BACKGROUND GAMBAR */}
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/tarutung-background.png')", // ganti dengan file kamu
      }}
    >
      <div className="bg-black/60 backdrop-brightness-75 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide font-serif animate-fade-in-up">
          𝐍𝐢𝐤𝐦𝐚𝐭𝐢 𝐊𝐮𝐥𝐢𝐧𝐞𝐫 𝐓𝐚𝐫𝐮𝐭𝐮𝐧𝐠
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100">
          ℝ𝕒𝕤𝕒𝕜𝕒𝕟 𝕜𝕖𝕝𝕖𝕫𝕒𝕥𝕒𝕟 𝕜𝕦𝕝𝕚𝕟𝕖𝕣 𝕜𝕙𝕒𝕤 𝕋𝕒𝕣𝕦𝕥𝕦𝕟𝕘 𝕪𝕒𝕟𝕘 𝕤𝕒𝕣𝕒𝕥 𝕥𝕣𝕒𝕕𝕚𝕤𝕚, 𝕞𝕦𝕝𝕒𝕚 𝕕𝕒𝕣𝕚 𝕞𝕚𝕖 𝕘𝕠𝕞𝕒𝕜 𝕙𝕚𝕟𝕘𝕘𝕒 𝕤𝕒𝕜𝕤𝕒𝕟𝕘. ℍ𝕚𝕕𝕒𝕟𝕘𝕒𝕟 𝕒𝕦𝕥𝕖𝕟𝕥𝕚𝕜 𝕋𝕒𝕡𝕒𝕟𝕦𝕝𝕚 𝕌𝕥𝕒𝕣𝕒 𝕤𝕚𝕒𝕡 𝕞𝕖𝕞𝕒𝕟𝕛𝕒𝕜𝕒𝕟 𝕤𝕖𝕝𝕖𝕣𝕒 𝔸𝕟𝕕𝕒. 𝕂𝕝𝕚𝕜 𝕘𝕒𝕞𝕓𝕒𝕣 𝕦𝕟𝕥𝕦𝕜 𝕛𝕖𝕝𝕒𝕛𝕒𝕙𝕚 𝕔𝕚𝕥𝕒 𝕣𝕒𝕤𝕒𝕟𝕪𝕒!
        </p>
      </div>
    </section>

    {/* BAGIAN GRID KULINER */}
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {kulinerData.map((item, index) => (
          <motion.div
            key={item.name}
            className="bg-white rounded-2xl overflow-hidden shadow-xl group transform hover:scale-[1.03] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedKuliner(item)}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl text-white font-bold font-serif drop-shadow-lg">
                {item.name}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 line-clamp-2">{item.deskripsi}</p>
              <span className="text-brand-accent font-semibold mt-3 inline-block">Lihat Detail</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      <Modal isOpen={!!selectedKuliner} onClose={() => setSelectedKuliner(null)} title={selectedKuliner?.name || ''}>
        {selectedKuliner && (
          <div className="space-y-6 text-text-primary dark:text-gray-300">
            <img src={selectedKuliner.image} alt={selectedKuliner.name} className="w-full h-64 object-cover rounded-lg" />
            
            <div>
              <h4 className="font-bold text-lg flex items-center mb-2"><UtensilsCrossed className="mr-2 h-5 w-5 text-brand-accent"/>Deskripsi</h4>
              <p>{selectedKuliner.deskripsi}</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg flex items-center mb-2"><BookOpen className="mr-2 h-5 w-5 text-brand-accent"/>Sejarah Singkat</h4>
              <p>{selectedKuliner.sejarah}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg flex items-center mb-2"><MapPin className="mr-2 h-5 w-5 text-brand-accent"/>Lokasi</h4>
              <p>{selectedKuliner.lokasi}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default KulinerKhas;
