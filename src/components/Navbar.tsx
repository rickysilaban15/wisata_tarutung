import React, { useState, useEffect, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Lightbulb, LightbulbOff, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { name: 'Beranda', to: '/' },
  { name: 'Kuliner', to: '/kuliner' },
  { name: 'Budaya', to: '/budaya' },
  { name: 'Kontak', to: '/kontak' },
];

const exploreLinks = [
  { name: 'Galeri', to: '/galeri' },
  { name: 'UMKM', to: '/umkm' },
  { name: 'Desa Wisata', to: '/desa' },
];

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to apply background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = "text-brand-primary dark:text-brand-accent font-semibold";
  const inactiveLinkStyle = "text-text-primary dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-accent transition-colors duration-300";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300
  ${isScrolled 
    ? "bg-black/50 dark:bg-bg-dark/70 backdrop-blur-md shadow-md border-b border-white/10" 
    : "bg-transparent"
  }`}

    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-brand-primary dark:text-brand-secondary">
          Wisata Tarutung
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.to} className={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}>
              {link.name}
            </NavLink>
          ))}

          <HeadlessMenu as="div" className="relative inline-block text-left">
            <div>
              <HeadlessMenu.Button className={`${inactiveLinkStyle} inline-flex w-full justify-center items-center`}>
                Jelajah
                <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </HeadlessMenu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-card-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {exploreLinks.map((link) => (
                    <HeadlessMenu.Item key={link.name}>
                      {({ active }) => (
                        <NavLink
                          to={link.to}
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-700' : ''
                          } group flex w-full items-center rounded-md px-4 py-2 text-sm ${inactiveLinkStyle}`}
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </HeadlessMenu.Item>
                  ))}
                </div>
              </HeadlessMenu.Items>
            </Transition>
          </HeadlessMenu>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-text-primary dark:text-brand-accent"
            whileTap={{ scale: 0.9, y: 5 }}
            transition={{ duration: 0.2 }}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Lightbulb /> : <LightbulbOff />}
          </motion.button>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary dark:text-brand-secondary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-lg"

          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {[...navLinks, ...exploreLinks].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-lg ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
