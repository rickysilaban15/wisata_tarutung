import React from 'react';
import BudayaTradisi from '../components/BudayaTradisi';
import Section from '../components/Section';

const BudayaPage: React.FC = () => {
  return (
    <Section id="budaya" title="Budaya & Tradisi" subtitle="Warisan leluhur yang hidup dan lestari hingga kini, membentuk identitas unik masyarakat Tarutung.">
      <BudayaTradisi />
    </Section>
  );
};

export default BudayaPage;
