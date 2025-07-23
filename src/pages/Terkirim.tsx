import React from 'react';

const Terkirim: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0cfc1] to-[#6b3e26] text-white text-center p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-10 shadow-2xl max-w-xl">
        <h1 className="text-3xl font-bold mb-4">🎉 Terima kasih!</h1>
        <p className="text-lg mb-2">Pesanmu sudah terkirim ke kami. Kami akan segera merespons.</p>
        <p className="text-lg font-semibold">Mauliate hasian! Tarsurak do suratmu tu hami!</p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-[#6b3e26] font-bold rounded-full hover:bg-gray-200 transition"
        >
          ⬅️ Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default Terkirim;
