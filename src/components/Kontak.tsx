import React from 'react';
import { motion } from 'framer-motion';

const Kontak: React.FC = () => {
  return (
   <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fff7f1] via-[#c9a27e] to-[#6b3e26] dark:from-[#3e2723] dark:to-[#4e342e] p-10 rounded-2xl shadow-xl backdrop-blur-md transition duration-700">

      <form
        action="https://formsubmit.co/rickysilaban384@gmail.com"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Hidden config for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
       <input
  type="hidden"
  name="_autoresponse"
  value="🎉 Terima kasih sudah menghubungi kami! Kami akan segera membalas pesan Anda. || 🎉 Mauliate hasian! Pas ni suratmu tu hami, tarida do balosna gabe!"
/>


        <input
  type="hidden"
  name="_next"
  value="http://localhost:5173/Terkirim"
/>


        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-secondary dark:text-gray-300 mb-1"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-bg-dark"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-secondary dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-bg-dark"
          />
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-secondary dark:text-gray-300 mb-1"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md focus:ring-brand-primary focus:border-brand-primary dark:bg-bg-dark"
          ></textarea>
        </motion.div>

        <motion.div
          className="md:col-span-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            type="submit"
            className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            Kirim Pesan
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Kontak;
