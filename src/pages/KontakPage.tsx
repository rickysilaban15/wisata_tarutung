import React from 'react';
import Kontak from '../components/Kontak';
import Section from '../components/Section';

const KontakPage: React.FC = () => {
  return (
    <Section id="kontak" title="Hubungi Kami" subtitle="Punya pertanyaan atau saran? Kami siap membantu">
      <Kontak />
    </Section>
  );
};

export default KontakPage;
