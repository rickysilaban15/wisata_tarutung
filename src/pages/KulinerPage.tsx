import React from 'react';
import KulinerKhas from '../components/KulinerKhas';
import Section from '../components/Section';

const KulinerPage: React.FC = () => {
  return (
    <Section id="kuliner" title="Cita Rasa Kuliner" subtitle="Manjakan lidah Anda dengan hidangan otentik khas Batak. Klik pada gambar untuk detail.">
      <KulinerKhas />
    </Section>
  );
};

export default KulinerPage;
