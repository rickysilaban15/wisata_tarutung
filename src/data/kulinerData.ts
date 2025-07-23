

export interface KulinerItem {
  name: string;
  image: string;
  deskripsi: string;
  sejarah: string;
  lokasi: string;
}

export const kulinerData: KulinerItem[] = [
  {
    name: 'Saksang',
    image: '/upload/saksangdon.webp',
    deskripsi: 'Masakan khas Batak yang terbuat dari daging babi atau anjing yang dicincang dan dimasak dengan darah serta rempah khas seperti andaliman dan bawang batak. Rasa pedas dan gurihnya sangat khas.',
    sejarah: 'Saksang adalah hidangan wajib dalam adat Batak, seperti pernikahan (Pesta Unjuk) dan syukuran. Melambangkan keberanian, pengorbanan, dan ikatan sosial yang kuat.',
    lokasi: 'Dapat ditemukan di hampir semua Lapo (rumah makan Batak) di Tarutung dan daerah Tapanuli lainnya.'
  },
  {
    name: 'Mie Gomak',
    image: '/upload/mie_gomakces.webp',
    deskripsi: 'Mie khas Batak Toba berbentuk tebal dan kasar seperti spaghetti. Biasanya disajikan dengan kuah santan berbumbu khas Batak, seperti andaliman dan bawang batak.',
    sejarah: 'Nama "gomak" berarti "digenggam", mengacu pada cara menyajikan mie ini secara tradisional menggunakan tangan. Mie ini sudah menjadi makanan sehari-hari masyarakat Batak sejak lama.',
    lokasi: 'Banyak dijual di warung sarapan pagi, pasar tradisional, dan kantin-kantin di Tarutung.'
  },
  {
    name: 'Ikan Mas Arsik',
    image: '/upload/ikan_mas...webp',
    deskripsi: 'Ikan mas utuh dimasak dengan bumbu kuning khas Batak tanpa santan, menggunakan andaliman, bawang batak, asam cikala (kecombrang muda), dan serai. Rasanya gurih, pedas, dan sedikit asam.',
    sejarah: 'Arsik merupakan simbol doa berkat dan harapan hidup panjang. Wajib disajikan dalam upacara adat dengan jumlah ganjil, seperti 1, 3, atau 5 ekor.',
    lokasi: 'Tersedia di restoran khas Batak dan saat pesta adat di Tarutung dan sekitarnya.'
  },
  {
    name: 'Kacang Sihobuk',
    image: '/upload/kacang_sihobuk (1).jpeg',
    deskripsi: 'Kacang tanah khas yang disangrai menggunakan pasir panas, menghasilkan rasa gurih dan renyah yang khas. Kacang ini sudah menjadi oleh-oleh khas Tapanuli.',
    sejarah: 'Berawal dari desa Sihobuk di Tapanuli Utara. Cara pengolahannya yang unik sudah diwariskan turun-temurun sejak zaman Belanda.',
    lokasi: 'Banyak dijual di sepanjang jalan lintas Tarutung–Balige, kios oleh-oleh, dan pasar tradisional.'
  },
  {
    name: 'Kue Talam',
    image: '/upload/kue talam (1).jpeg',
    deskripsi: 'Kue tradisional berbahan dasar tepung beras dan santan yang memiliki dua lapis: putih dan hijau. Rasanya gurih dan manis, teksturnya lembut dan legit.',
    sejarah: 'Meski dikenal luas di seluruh Indonesia, kue ini juga menjadi jajanan pasar tradisional di Tarutung dan sering dihidangkan pada acara kumpul keluarga atau ibadah.',
    lokasi: 'Dijual di pasar-pasar tradisional dan toko kue lokal di Tarutung, terutama di pagi hari.'
  },
  {
  name: 'Susu Batak (Tuak)',
  image: '/upload/TUAK (1).jpeg',
  deskripsi: 'Minuman tradisional hasil fermentasi nira aren atau enau. Memiliki cita rasa manis sedikit asam, segar saat baru dituang, dan semakin kuat jika difermentasi lebih lama.',
  sejarah: 'Tuak telah menjadi bagian penting dalam budaya Batak, termasuk di Tarutung. Minuman ini disajikan dalam acara adat, sebagai simbol persaudaraan dan kehangatan sosial di lapo-lapo.',
  lokasi: 'Bisa ditemukan di lapo-lapo (warung makan khas Batak) di sekitar Tarutung, terutama di malam hari atau saat pesta adat.'
}

];
