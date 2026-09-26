import { KEARIFAN_LIST } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import illusKearifan from '../assets/img/illus-kearifan.svg';
import { IconArrow, IconHeart, IconLeaf } from './Icons';

const NILAI = [
  { title: 'Nilai Budaya', desc: 'Tari menjadi bagian dari identitas budaya masyarakat Mandar.' },
  { title: 'Nilai Kebersamaan', desc: 'Latihan bersama mengajarkan kekompakan dan kerja sama antarpenari.' },
  { title: 'Nilai Penghargaan', desc: 'Siswa belajar menghargai seni tradisional di daerahnya sendiri.' },
  { title: 'Nilai Pelestarian', desc: 'Sekolah mengenalkan budaya lokal kepada generasi muda.' }
];

export default function KearifanSection({ onNavigate }) {
  return (
    <div className="page">
      <section className="sec sec--tinted">
        <div className="wrap">
          <Reveal className="sec__head sec__head--center">
            <span className="eyebrow">Kearifan Lokal</span>
            <h2 className="sec__title">
              Mengapa Tari Ini <span className="grad-text">Penting Dipelajari?</span>
            </h2>
            <p className="sec__sub">
              Di balik setiap gerakan terdapat nilai yang diwariskan turun-temurun. Nilai inilah yang
              membuat tari tradisional tetap hidup sampai sekarang.
            </p>
          </Reveal>

          <div className="grid grid--2" style={{ alignItems: 'center', marginBottom: 46 }}>
            <Reveal variant="left">
              <div className="quote">
                Tari bukan hanya bentuk gerakan. Tari adalah cara masyarakat mengingat, merayakan, dan
                mewariskan nilai yang mereka hidupi.
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <img
                src={illusKearifan}
                alt="Ilustrasi pohon kearifan lokal"
                loading="lazy"
                style={{ width: '100%', maxWidth: 320, margin: '0 auto', filter: 'drop-shadow(0 24px 50px rgba(52,211,153,.28))' }}
              />
            </Reveal>
          </div>

          <Reveal className="sectionHead" style={{ marginTop: 8 }}>
            <h3 className="sec__title" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
              Empat Nilai Utama
            </h3>
            <span className="chip">
              <IconLeaf /> Diwariskan turun-temurun
            </span>
          </Reveal>

          <div className="grid grid--4">
            {NILAI.map((n, i) => (
              <Reveal as="article" className="card card--gold" key={n.title} variant="up" delay={i * 80}>
                <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="card__icon card__icon--gold">
                  <IconHeart />
                </span>
                <h4 className="card__title">{n.title}</h4>
                <p className="card__text">{n.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="sectionHead" style={{ marginTop: 56 }}>
            <h3 className="sec__title" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
              Perjalanan Nilai dalam Tari
            </h3>
          </Reveal>

          <div className="timeline">
            {KEARIFAN_LIST.map((k, i) => (
              <Reveal className="tlItem" key={k.title} variant="left" delay={i * 90}>
                <h4 className="tlItem__title">{k.title}</h4>
                <p className="tlItem__text">{k.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="card" style={{ textAlign: 'center' }}>
            <h3 className="card__title">Refleksikan apa yang kamu pelajari</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Tuliskan pemahamanmu tentang nilai budaya pada halaman refleksi.
            </p>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('refleksi')}>
              Menulis Refleksi
              <IconArrow />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
