import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import ExpandableText from './ExpandableText';

const destinations = [
  {
    name: '🕊️Salib Kasih',
    description:
      'Terletak di puncak Bukit Siatas Barita, Salib Kasih adalah monumen rohani yang dibangun untuk mengenang jasa misionaris Dr. Ingwer Ludwig Nommensen yang menyebarkan ajaran Kristen di tanah Batak. Dari sini, pengunjung bisa menikmati panorama kota Tarutung yang memukau dengan udara sejuk pegunungan. Tempat ini tak hanya menjadi simbol spiritual, tapi juga spot favorit untuk menenangkan diri dan merenung di tengah keindahan alam.',
    image: '/upload/salibkasih (1).jpeg',
    mapsUrl:
      'https://www.google.com/maps/place/Salib+Kasih+Tarutung/@2.017744,98.9969203,17z/data=!4m10!...'
  },
  {
    name: '🧴Pemandian Air Soda',
    description:
      'Satu-satunya sumber air soda alami di Indonesia! Air Soda Parbubu menyuguhkan pengalaman unik—berendam dalam air yang bergelembung seperti soda. Terletak di Desa Parbubu, kolam ini dipercaya memiliki manfaat kesehatan untuk kulit dan tubuh. Sensasi menyegarkan dari gelembung alami membuat tempat ini menjadi destinasi yang tak boleh dilewatkan saat mengunjungi Tarutung.',
    image: '/upload/airsoda (1).jpeg',
    mapsUrl:
      'https://www.google.com/maps/place/Air+Soda+Parbubu/@2.0005978,98.9613036,17z/data=!3m1!...'
  },
  {
    name: '♨️Air Panas HutaBarat',
    description:
      'Berada di kaki bukit yang tenang, Pemandian Air Panas Hutabarat menawarkan relaksasi alami dalam kolam berair panas yang berasal dari sumber mata air bumi. Dikelilingi oleh suasana alam yang hijau dan asri, tempat ini cocok untuk melepas penat sambil merasakan manfaat terapeutik dari air mineral panas yang dipercaya baik untuk kesehatan otot dan sendi.',
    image: '/upload/air panas_PhotoGrid.png',
    mapsUrl:
      'https://www.google.com/maps/place/Pemandian+Air+Panas+Tamaro/@2.0272215,98.9758063,17z/data=!...'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const DestinasiUnggulan: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="destinasi" title="Destinasi Unggulan" subtitle="Tempat-tempat ikonik yang wajib Anda kunjungi">
      <div className="relative overflow-hidden">

        {/* 🎥 Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="" type="video/mp4" />
          Browser tidak mendukung video.
        </video>

        {/* 🌫️ Overlay blur + gelap */}


        {/* ✅ Konten Destinasi */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
  key={dest.name}
  className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-xl overflow-hidden group transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-[1.03]"
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
>
  <div className="relative h-64 cursor-pointer" onClick={() => setSelectedImage(dest.image)}>
    <img
      src={dest.image}
      alt={dest.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>
  <div className="p-5 text-black dark:text-white">
    <h3 className="text-xl font-bold font-serif text-brand-brown dark:text-brand-cream mb-2 drop-shadow-sm">
      {dest.name}
    </h3>
    <ExpandableText text={dest.description} maxLength={160} />
    <a
      href={dest.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-brand-orange hover:underline font-semibold mt-3"
    >
      <MapPin size={16} className="mr-2" />
      Lihat Lokasi
    </a>
  </div>
</motion.div>

          ))}
        </div>
      </div>

      {/* ✅ Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white z-50">
            <X size={30} />
          </button>
          <img src={selectedImage} alt="Preview" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl" />
        </div>
      )}
    </Section>
  );
};

export default DestinasiUnggulan;
