import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      {/* Overlay hitam semi-transparan */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Konten utama */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        {/* H1 3D dan glow */}
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="font-serif text-4xl md:text-6xl font-extrabold mb-6 text-white animate-glow"
>
  Selamat Datang di Tarutung
</motion.h1>



        {/* Subjudul */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg md:text-xl text-white/90 mb-10"
        >
          𝑻𝒆𝒎𝒖𝒌𝒂𝒏 𝒌𝒆𝒊𝒏𝒅𝒂𝒉𝒂𝒏 𝒂𝒍𝒂𝒎, 𝒃𝒖𝒅𝒂𝒚𝒂, 𝒅𝒂𝒏 𝒌𝒖𝒍𝒊𝒏𝒆𝒓 𝒌𝒉𝒂𝒔 𝒚𝒂𝒏𝒈 𝒎𝒆𝒎𝒊𝒌𝒂𝒕 𝒉𝒂𝒕𝒊. 𝑱𝒆𝒍𝒂𝒋𝒂𝒉𝒊 𝒔𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝒅𝒂𝒏 𝒓𝒂𝒔𝒂𝒌𝒂𝒏 𝒎𝒂𝒈𝒊𝒔𝒏𝒚𝒂 𝑻𝒂𝒏𝒂𝒉 𝑩𝒂𝒕𝒂𝒌!
        </motion.p>

        {/* Tombol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/desa"
            className="inline-flex items-center gap-2 
      px-8 py-4 rounded-full font-semibold shadow-md 
      bg-white/30 dark:bg-white/10 
      backdrop-blur-md border border-white/30 dark:border-white/10 
      text-black dark:text-white 
      hover:bg-white/40 dark:hover:bg-white/20 
      hover:shadow-lg transition-all duration-300"
          >
            Mulai Jelajahi <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Style langsung di komponen */}
      <style>
        {`
          .text-3d {
            text-shadow:
              1px 1px 0 #ccc,
              2px 2px 0 #bbb,
              3px 3px 0 #aaa,
              4px 4px 0 #999,
              5px 5px 0 #888;
          }

          .glow {
            animation: glow-pulse 2.5s ease-in-out infinite;
          }

          @keyframes glow-pulse {
            0%, 100% {
              text-shadow:
                0 0 10px rgba(255, 255, 255, 0.9),
                0 0 20px rgba(255, 165, 0, 0.8),
                0 0 40px rgba(255, 165, 0, 0.6);
            }
            50% {
              text-shadow:
                0 0 5px rgba(255, 255, 255, 0.6),
                0 0 10px rgba(255, 165, 0, 0.5),
                0 0 20px rgba(255, 165, 0, 0.4);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
