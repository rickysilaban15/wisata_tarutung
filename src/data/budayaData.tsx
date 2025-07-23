import React from 'react';
import { Home, Music, Palette, Users, Landmark } from 'lucide-react';

export interface BudayaItem {
  icon: React.ReactElement;
  title: string;
  description: string;
  image: string;
}

export const budayaData: BudayaItem[] = [
  {
    icon: <Palette />,
    title: 'Ulos Batak',
    description:
      'Ulos adalah kain tenun khas Batak yang digunakan dalam berbagai upacara adat seperti pernikahan, kelahiran, dan kematian. Setiap motif Ulos memiliki filosofi mendalam sebagai simbol kasih, restu, dan kehormatan.',
    image: '/upload/uloss-fotor-202507233521.jpg',
  },
  {
    icon: <Palette />,
    title: 'Martonun (Bertenun Ulos)',
    description:
      'Martonun atau manirat adalah proses menenun kain Ulos secara tradisional menggunakan alat tenun bukan mesin. Aktivitas ini diwariskan turun-temurun oleh para perempuan Batak, khususnya di daerah Tarutung.',
    image: '/upload/martonun.jpg',
  },
  {
    icon: <Home />,
    title: 'Rumah Bolon',
    description:
      'Rumah Bolon adalah rumah adat Batak Toba yang berbentuk panggung, dengan atap tinggi melengkung. Rumah ini menjadi simbol status sosial, kebersamaan keluarga besar (marga), dan spiritualitas masyarakat Batak.',
    image: '/upload/sopar (1).jpeg',
  },
  {
    icon: <Music />,
    title: 'Gondang Sabangunan',
    description:
      'Gondang Sabangunan adalah ensambel musik Batak yang digunakan dalam ritual adat. Musik ini terdiri dari taganing, gordang, ogung, sarune, dan hesek. Fungsinya tidak hanya menghibur, tapi juga sebagai media komunikasi spiritual.',
    image: '/upload/gondang.jpg',
  },
  {
    icon: <Users />,
    title: 'Marsiadapari',
    description:
      'Tradisi gotong royong dalam pekerjaan, di mana masyarakat saling membantu dalam mengerjakan ladang atau pekerjaan lainnya.',
    image: '/upload/marsiadapari.jpg',
  },
  {
    icon: <Landmark />,
    title: 'Manggokkal Holi',
    description:
      'Manggokkal Holi adalah upacara penggalian dan pemindahan tulang belulang leluhur Batak ke tempat pemakaman baru (tugu). Ritual ini dilakukan untuk menghormati leluhur dan mempererat hubungan kekerabatan.',
    image: '/upload/mangokkal_holi.jpg',
  },
];
