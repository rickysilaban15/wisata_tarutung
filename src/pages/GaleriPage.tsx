import React from 'react';
import Galeri from '../components/Galeri';
import Section from '../components/Section';

const GaleriPage: React.FC = () => {
  return (
    <Section id="galeri" title="Galeri Interaktif" subtitle="Lihat lebih dekat pesona alam dan budaya Tarutung. Arahkan kursor ke gambar untuk melihat deskripsi.">
      <Galeri />
    </Section>
  );
};

export default GaleriPage;
