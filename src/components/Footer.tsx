import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="font-poppins bg-white/70 dark:bg-white/10 backdrop-blur-md border-t border-gray-300 dark:border-white/20 text-black dark:text-white relative text-sm transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Informasi Umum */}
          <div>
            <h3 className="font-serif text-xl font-bold text-black dark:text-white mb-1">Wisata Tarutung</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Dinas Pariwisata Taput</p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Jl. Sisingamangaraja, Tarutung</p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-2 text-base">Tautan</h4>
            <div className="flex flex-col items-center md:items-start space-y-1 text-gray-700 dark:text-gray-300">
              <Link to="/kuliner" className="hover:text-brand-accent transition font-medium">Kuliner</Link>
              <Link to="/budaya" className="hover:text-brand-accent transition font-medium">Budaya</Link>
              <Link to="/galeri" className="hover:text-brand-accent transition font-medium">Galeri</Link>
              <Link to="/kontak" className="hover:text-brand-accent transition font-medium">Kontak</Link>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-2 text-base">Ikuti Kami</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-700 dark:text-gray-300">
              <a href="https://www.facebook.com/horastapanuliutara" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="hover:text-blue-500 transition" />
              </a>
              <a href="https://www.instagram.com/horastapanuliutara/?__pwa=1" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-pink-400 transition" />
              </a>
              <a href="https://x.com/RickySt72122634" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="hover:text-sky-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-4 text-center text-gray-600 dark:text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Wisata Tarutung. All rights reserved.
        </div>

        {/* Created by */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-1 text-xs font-medium text-gray-600 dark:text-gray-300 text-center sm:text-right">
          <span>Created by:</span>
          <a
            href="https://www.instagram.com/stev_ky_silaban/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-pink-400 transition"
          >
            <Instagram size={14} />
            <span>Ricky Steven Silaban</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
