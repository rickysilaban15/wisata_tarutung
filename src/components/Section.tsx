import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <motion.section 
      id={id} 
      className={`py-20 px-4 container mx-auto ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary dark:text-brand-secondary mb-2">{title}</h2>
        <p className="text-lg text-text-secondary dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
