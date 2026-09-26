import illusPenari from '../assets/img/illus-penari.svg';
import illusGendang from '../assets/img/illus-gendang.svg';
import illusBusana from '../assets/img/illus-busana.svg';
import illusPolaLantai from '../assets/img/illus-pola-lantai.svg';
import illusKearifan from '../assets/img/illus-kearifan.svg';
import illusApresiasi from '../assets/img/illus-astresiasi.svg';
import illusVideo from '../assets/img/illus-video.svg';
import illusArah from '../assets/img/illus-arah.svg';
import illusLevel from '../assets/img/illus-level.svg';
import illusTenaga from '../assets/img/illus-tenaga.svg';

export const MENU_FOOTER = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'materi', label: 'Modul Materi' },
  { id: 'video', label: 'Video Tari' },
  { id: 'gerak', label: 'Gerak Tari' },
  { id: 'kearifan', label: 'Kearifan Lokal' },
  { id: 'lkpd', label: 'LKPD Digital' },
  { id: 'evaluasi', label: 'Evaluasi' },
  { id: 'refleksi', label: 'Refleksi Belajar' },
];

export const STATISTIK = [
  { value: 5, suffix: '', label: 'Modul Materi' },
  { value: 6, suffix: '', label: 'Tujuan Belajar' },
  { value: 4, suffix: '', label: 'Unsur Tari' },
];

export const FITUR = [
  {
    id: 'materi',
    icon: 'book',
    title: 'Modul Materi',
    desc: 'Lima modul ringkas: dari pengertian, ciri khas, unsur tari, hingga nilai kearifan lokal.'
  },
  {
    id: 'video',
    icon: 'play',
    title: 'Video Tari',
    desc: 'Pemutar video dengan daftar putar untuk melihat dan mempelajari Tari Pattu’d Tommuane.'
  },
  {
    id: 'gerak',
    icon: 'move',
    title: 'Gerak Tari',
    desc: 'Visual arah, level, dan tenaga setiap gerak dasar beserta uraian deskriptifnya.'
  },
  {
    id: 'kearifan',
    icon: 'leaf',
    title: 'Kearifan Lokal',
    desc: 'Nilai budaya, kebersamaan, penghargaan, dan pelestarian yang diwariskan turun-temurun.'
  },
  {
    id: 'lkpd',
    icon: 'clipboard',
    title: 'LKPD Digital',
    desc: 'Lembar kerja interaktif dengan autosave lokal agar hasil kerjamu tidak hilang.'
  },
  {
    id: 'evaluasi',
    icon: 'target',
    title: 'Evaluasi',
    desc: 'Kuis pilihan ganda berskor otomatis beserta refleksi tertulis.'
  },
  {
    id: 'apresiasi',
    icon: 'star',
    title: 'Apresiasi',
    desc: 'Rubrik penilaian dan piala sebagai penghargaan bagi kelas.'
  },
  {
    id: 'refleksi',
    icon: 'heart',
    title: 'Refleksi Belajar',
    desc: 'Ruang menuliskan perasaan, temuan, dan rencana tindak lanjut.'
  }
];

export const TUJUAN_PEMBELAJARAN = [
  "Menjelaskan pengertian dan gambaran umum Tari Pattu'du Tommuane.",
  'Mengidentifikasi karakteristik Tari Pattu’du Tommuane.',
  'Mengenal unsur-unsur Tari Pattu’du Tommuane.',
  'Menjelaskan nilai budaya dan kearifan lokal yang berkaitan dengan Tari Pattu’du Tommuane.',
  'Mengamati dan mengenali beberapa gerak dasar Tari Pattu’du Tommuane.',
  'Menunjukkan sikap menghargai keberadaan tari tradisional sebagai bagian dari budaya lokal.'
];

export const MARQUEE_TEKS = [
  'Pattu’du Tommuane',
  'Masyarakat Mandar',
  'Nilai Kebersamaan',
  'Pola Lantai Tari',
  'Kearifan Lokal',
  'Seni Budaya Majene',
  'Ekspresi Gerak',
  'Musik Pengiring'
];

export const MATERI_LIST = [
  {
    id: 'materi-1',
    title: 'Materi 1 — Mengenal Tari Pattu’d Tommuane',
    hint: 'Pengertian dan konteks kebudayaan',
    image: illusPenari,
    content: [
      {
        subtitle: 'A. Pengertian',
        text: "Pattu’du Tommuane merupakan salah satu bentuk tari tradisional yang berkaitan dengan kebudayaan masyarakat Mandar. Istilah tommuane merujuk pada laki-laki, sehingga Tari Pattu’du Tommuane merupakan bentuk tari Pattu’du yang dibawakan oleh penari laki-laki."
      },
      {
        subtitle: 'Konteks Kebudayaan',
        text: 'Tari Pattu’du Tommuane dapat diperkenalkan kepada siswa sebagai bagian dari kekayaan seni budaya lokal masyarakat Mandar, khususnya dalam konteks kebudayaan yang berkembang di wilayah Majene dan Polewali Mandar.'
      }
    ],
    funFact:
      'Kata Pattu’du berkaitan dengan aktivitas menari dalam kebudayaan Mandar, sedangkan Tommuane berarti laki-laki. Dengan demikian, Tari Pattu’du Tommuane dapat dipahami sebagai tari Pattu’du yang dibawakan oleh laki-laki.'
  },
  {
    id: 'materi-2',
    title: 'Materi 2 — Latar Belakang dan Keberadaan Tari',
    hint: 'Hubungan tari dengan kehidupan masyarakat',
    image: illusKearifan,
    content: [
      {
        subtitle: 'Hubungan Tari dan Kehidupan Masyarakat',
        text: 'Tari tradisional tidak hanya berupa rangkaian gerakan, tetapi berkaitan dengan kehidupan masyarakat yang melahirkan dan mengembangkan tari tersebut. Tari Pattu’du Tommuane menjadi salah satu bagian dari seni budaya masyarakat Mandar yang dapat diperkenalkan dalam pembelajaran seni tari di sekolah.'
      },
      {
        subtitle: 'Tujuan Pembelajaran Identitas Budaya',
        text: 'Melalui pembelajaran Tari Pattu’du Tommuane, siswa tidak hanya diarahkan untuk mengenal gerakan tari, tetapi juga memahami bahwa tari tradisional memiliki hubungan dengan identitas budaya, nilai sosial, dan kehidupan masyarakat pendukungnya.'
      }
    ],
    flow: ['Tari', 'Budaya', 'Nilai', 'Identitas', 'Pelestarian']
  },
  {
    id: 'materi-3',
    title: 'Materi 3 — Ciri dan Karakteristik Tari',
    hint: 'Penari, gerak, musik, busana, pola penyajian',
    image: illusBusana,
    items: [
      { name: 'Penari', desc: 'Tari Pattu’du Tommuane dibawakan oleh penari laki-laki.' },
      { name: 'Gerak', desc: 'Gerak tari menjadi bagian utama yang diamati siswa melalui video dan demonstrasi guru.' },
      { name: 'Musik pengiring', desc: 'Siswa mengenal fungsi musik dalam mendukung suasana dan gerak tari.' },
      { name: 'Busana', desc: 'Busana menjadi bagian visual yang membantu menunjukkan identitas budaya dalam penyajian tari.' },
      { name: 'Pola penyajian', desc: 'Siswa mengamati bagaimana tari ditampilkan melalui susunan gerak, penari, musik, dan unsur pendukung lainnya.' }
    ],
    note: 'Catatan media: bagian ini sebaiknya dilengkapi foto atau video asli Tari Pattu’du Tommuane dari sumber yang jelas.'
  },
  {
    id: 'materi-4',
    title: 'Materi 4 — Unsur-Unsur Tari',
    hint: 'Gerak, ruang, waktu, dan tenaga',
    image: illusPolaLantai,
    items: [
      { name: 'Gerak', desc: 'Gerak merupakan unsur utama dalam seni tari. Siswa diarahkan mengamati bentuk, arah, tenaga, ruang, dan tempo gerak.' },
      { name: 'Ruang', desc: 'Ruang berkaitan dengan tempat dan arah gerak, termasuk arah gerak, level, posisi penari, dan pola lantai.' },
      { name: 'Waktu', desc: 'Waktu berkaitan dengan tempo dan ritme gerakan tari: lambat, sedang, atau cepat.' },
      { name: 'Tenaga', desc: 'Tenaga berkaitan dengan kuat atau lemahnya gerakan yang dilakukan penari.' }
    ],
    activity: 'Tonton video Tari Pattu’du Tommuane, kemudian amati penggunaan ruang, waktu, dan tenaga. Tuliskan hasil pengamatan pada LKPD.'
  },
  {
    id: 'materi-5',
    title: 'Materi 5 — Nilai dan Kearifan Lokal',
    hint: 'Mengapa tari perlu dilestarikan',
    image: illusApresiasi,
    content: [
      {
        subtitle: 'Apa yang dimaksud kearifan lokal?',
        text: 'Kearifan lokal merupakan pengetahuan, nilai, norma, kebiasaan, dan pandangan hidup yang berkembang dalam suatu masyarakat dan menjadi bagian dari kehidupan masyarakat tersebut. Dalam pembelajaran Tari Pattu’du Tommuane, siswa tidak hanya mempelajari bagaimana menari, tetapi juga mengapa tari tersebut penting untuk dipelajari.'
      }
    ],
    values: [
      { title: 'Nilai budaya', desc: 'Tari menjadi bagian dari identitas budaya masyarakat.' },
      { title: 'Nilai kebersamaan', desc: 'Kegiatan tari dilakukan dengan memperhatikan hubungan antara penari dan lingkungan sosialnya.' },
      { title: 'Nilai penghargaan terhadap budaya', desc: 'Siswa belajar menghargai seni tradisional yang berkembang di daerahnya.' },
      { title: 'Nilai pelestarian', desc: 'Pembelajaran tari tradisional di sekolah dapat menjadi salah satu cara mengenalkan budaya lokal kepada generasi muda.' }
    ],
    academicNote:
      'Catatan akademik: nilai yang benar-benar ditemukan dalam penelitian perlu disesuaikan dengan hasil observasi, wawancara, dan sumber budaya yang digunakan.'
  }
];

export const GERAK_DATA = [
  {
    id: 1,
    nama: 'Gerak 1 — [Isi Nama Gerak]',
    deskripsi:
      'Gerak dasar pembuka yang membentuk sikap siap penari. Amati posisi ujung jari, tinggi bahu, dan arah pandangan penari sebagai ciri khas saat memulai tarian.',
    arah: 'Depan / Samping',
    level: 'Sedang / Rendah',
    tenaga: 'Sedang',
    image: illusArah,
    videoUrl: ''
  },
  {
    id: 2,
    nama: 'Gerak 2 — [Isi Nama Gerak]',
    deskripsi:
      'Gerak dengan ritme sedang yang menekankan kelangsungan. Perhatikan perubahan posisi kaki dan pergeseran pusat berat badan yang berlangsung halus.',
    arah: 'Samping Kiri / Kanan',
    level: 'Sedang',
    tenaga: 'Kuat',
    image: illusLevel,
    videoUrl: ''
  },
  {
    id: 3,
    nama: 'Gerak 3 — [Isi Nama Gerak]',
    deskripsi:
      'Gerak dinamis dengan perubahan arah menjadi lingkaran. Amati apakah ruang yang dimanfaatkan penari berpola simetris atau bergantian.',
    arah: 'Melingkar / Maju',
    level: 'Tinggi',
    tenaga: 'Sedang',
    image: illusTenaga,
    videoUrl: ''
  }
];

export const VIDEO_PLAYLIST = [
  {
    id: 'v1',
    title: 'Pengenalan Tari Pattu’d Tommuane',
    durasi: '04:12',
    src: '',
    poster: illusVideo,
    desc: 'Gambaran umum tari, penari, dan konteks kebudayaan Mandar.'
  },
  {
    id: 'v2',
    title: 'Unsur Gerak: Ruang, Waktu, dan Tenaga',
    durasi: '05:38',
    src: '',
    poster: illusPolaLantai,
    desc: 'Membedah tiga unsur utama yang paling mudah diamati.'
  },
  {
    id: 'v3',
    title: 'Musik Pengiring & Alat Tradisional',
    durasi: '03:26',
    src: '',
    poster: illusGendang,
    desc: 'Peran gendang dalam menjaga ritme dan suasana tari.'
  },
  {
    id: 'v4',
    title: 'Busana dan Ornamen Budaya',
    durasi: '04:05',
    src: '',
    poster: illusBusana,
    desc: 'Motif dan warna busana sebagai penanda identitas budaya.'
  }
];

export const KEARIFAN_LIST = [
  {
    title: 'Menjaga Identitas',
    text: 'Tari tradisional menjadi identitas kolektif masyarakat Mandar. Mengenalinya berarti menjaga bukti kehidupan masyarakat yang telah berjalan turun-temurun.'
  },
  {
    title: 'Belajar Bersama',
    text: 'Tari tidak pernah dipelajari sendirian. Latihan bersama mengajarkan kekompakan, kerja sama, dan pembagian peran.',
  },
  {
    title: 'Menghargai Riwayat',
    text: 'Setiap gerakan menyimpan makna dan cerita. Menghargai artinya bersedia mempelajari detail kecil yang sering terlewat.',
  },
  {
    title: 'Pelestarian Generasi Muda',
    text: 'Sekolah menjadi ruang paling efektif untuk memperkenalkan tari kepada generasi muda agar tidak hilang dari ingatan kolektif.'
  }
];

export const RUBRIK = [
  { name: 'Ketepatan Gerak', desc: 'Gerakan dasar dilakukan sesuai urutan dan bentuknya.', skor: 5 },
  { name: 'Ekspresi dan Emosi', desc: 'Wajah dan postur tubuh menunjukkan rasa dari tari yang ditampilkan.', skor: 4 },
  { name: 'Kesesuaian Musik', desc: 'Gerak selaras dengan irama dan tempo gendang.', skor: 4 },
  { name: 'Busana dan Rapi', desc: 'Penari mengenakan busana sesuai tradisi.', skor: 5 }
];

export const SOAL_PILGAN = [
  {
    id: 1,
    soal: 'Tari Pattu’du Tommuane merupakan tari yang dibawakan oleh ....',
    pilihan: [
      { id: 'A', text: 'perempuan' },
      { id: 'B', text: 'laki-laki' },
      { id: 'C', text: 'anak-anak' },
      { id: 'D', text: 'campuran' }
    ],
    kunci: 'B'
  },
  {
    id: 2,
    soal: 'Unsur utama dalam seni tari adalah ....',
    pilihan: [
      { id: 'A', text: 'warna' },
      { id: 'B', text: 'gerak' },
      { id: 'C', text: 'suara' },
      { id: 'D', text: 'gambar' }
    ],
    kunci: 'B'
  },
  {
    id: 3,
    soal: 'Pembelajaran Tari Pattu’du Tommuane berbasis kearifan lokal berarti siswa ....',
    pilihan: [
      { id: 'A', text: 'hanya menghafalkan gerakan' },
      { id: 'B', text: 'hanya menonton video tari' },
      { id: 'C', text: 'mempelajari tari sekaligus mengenal nilai budaya lokal' },
      { id: 'D', text: 'hanya mempelajari musik pengiring' }
    ],
    kunci: 'C'
  },
  {
    id: 4,
    soal: 'Unsur "tenaga" dalam tari berkaitan dengan ....',
    pilihan: [
      { id: 'A', text: 'kuat atau lemahnya gerakan' },
      { id: 'B', text: 'bentuk lantai panggung' },
      { id: 'C', text: 'jenis kain busana' },
      { id: 'D', text: 'usia penari' }
    ],
    kunci: 'A'
  },
  {
    id: 5,
    soal: 'Unsur "waktu" dalam tari berkaitan dengan ....',
    pilihan: [
      { id: 'A', text: 'arah gerak penari' },
      { id: 'B', text: 'warna busana penari' },
      { id: 'C', text: 'tempo dan ritme gerakan' },
      { id: 'D', text: 'luas panggung' }
    ],
    kunci: 'C'
  }
];

export const REFLEKSI_MOOD = [
  { emoji: '🤩', label: 'Sangat Menarik' },
  { emoji: '🙂', label: 'Menarik' },
  { emoji: '😀', label: 'Cukup Paham' },
  { emoji: '🤔', label: 'Masih Bingung' },
  { emoji: '💪', label: 'Ingin Berpraktik' }
];

export const REFLEKSI_PERTANYAAN = [
  'Bagian mana yang paling menarik menurutmu, dan mengapa?',
  'Bagian mana yang menurutmu paling sulit dipahami?',
  'Bagaimana caramu membawakan satu gerakan tari di rumah?',
  'Siapa yang ingin kamu ceritakan tentang tari ini di rumah?'
];
