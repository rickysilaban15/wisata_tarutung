export interface Umkm {
  id: string;
  name: string;
  product: string;
  owner: string;
  address: string;
  image: string;
}

export const umkmData: Umkm[] = [
  {
    id: '1',
    name: 'Kopi Partungkoan',
    product: 'Biji Kopi Arabika dan Robusta',
    owner: 'Joy Siahaan & Tiarma Sianturi',
    address: 'Jl. Raja Johannes Hutabarat, Hutatoruan I, Kec. Tarutung,',
    image: '/upload/kopisopar.jpg',
  },
  {
    id: '2',
    name: 'Dame Ulos',
    product: 'Ulos Batak',
    owner: 'Renny Katrina Manurung',
    address: 'Desa Dame, Hutatoruan V, Kec. Tarutung,',
    image: '/upload/dameulos.jpg',
  },
  {
    id: '3',
    name: 'Brownies Andaliman',
    product: 'Brownies Crispy dengan Bumbu Andaliman',
    owner: 'Rusdiana Pardede',
    address: 'Dusun Melati, Lumban Tanpang, Desa Hutabarat, Partali Julu, Kecamatan Tarutung',
    image: '/upload/brownies_andaliman.jpg',
  },
  {
    id: '4',
    name: 'Pia Tarutung',
    product: 'Pia Rasa Coklat dan Keju',
    owner: 'Hendra Simanjuntak',
    address: 'Jl. Balige No. 12, Tarutung',
    image: '/upload/kue_pia.jpg',
  },
  {
    id: '5',
    name: 'Busana Nauli',
    product: 'Ulos dan Pakaian Tradisional Batak',
    owner: 'Juniar Hera Simanjuntak',
    address: 'Pasar Tradisional Tarutung',
    image: '/upload/busana.jpg',
  },
  {
  id: '6',
  name: 'Blessing Cake',
  product: 'Kue ulang tahun, puding, spons bombolony',
  owner: 'Natali Hutagalung',
  address: 'Tarutung, Tapanuli Utara',
  image: '/upload/blessingcake.jpg',
  },
  {
    id: '7',
    name: 'Roti Ganda Tarutung',
    product: 'Roti manis dan lapis selai khas',
    owner: 'Ferdinand Hutapea',
    address: 'Jl. Mayjend D.I. Panjaitan No.18, Tarutung',
    image: '/upload/rotiganda.jpg',
  },
 {
  id: '8',
  name: 'Wine Coffee Gogo',
  product: 'Minuman fermentasi kopi (wine coffee)',
  owner: 'Marince Nababan / Usaha Suka Maju',
  address: 'Pagaran, Tapanuli Utara',
  image: '/upload/wine_coffe.jpg',
}

];
