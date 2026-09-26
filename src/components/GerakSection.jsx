import { GERAK_DATA } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import { IconArrow, IconBolt, IconClock, IconGrid } from './Icons';

export default function GerakSection({ onNavigate }) {
  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Materi 6</span>
              <h2 className="sec__title">
                Mengenal <span className="grad-text">Gerak Tari</span>
              </h2>
              <p className="sec__sub">
                Setiap gerak tari memiliki arah, level, dan tenaga tertentu. Perhatikan ilustrasi berikut,
                lalu catat hasil pengamatanmu pada lembar kerja peserta didik.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="chip">
                <IconGrid /> Ruang
              </span>
              <span className="chip">
                <IconClock /> Waktu
              </span>
              <span className="chip">
                <IconBolt /> Tenaga
              </span>
            </div>
          </Reveal>

          {GERAK_DATA.map((g, i) => (
            <Reveal as="article" className="gerak" key={g.id} variant={i % 2 ? 'right' : 'left'} delay={i * 90}>
              <figure className="gerak__fig" style={{ margin: 0 }}>
                <img src={g.image} alt={`Ilustrasi ${g.nama}`} loading="lazy" />
                <figcaption className="gerak__cap">Ilustrasi Gerak {g.id}</figcaption>
              </figure>

              <div>
                <h3 className="gerak__title">{g.nama}</h3>
                <p className="gerak__desc">{g.deskripsi}</p>

                <div className="axis">
                  <div className="axis__box">
                    <span className="axis__key">Arah</span>
                    <span className="axis__val">{g.arah}</span>
                  </div>
                  <div className="axis__box">
                    <span className="axis__key">Level</span>
                    <span className="axis__val">{g.level}</span>
                  </div>
                  <div className="axis__box">
                    <span className="axis__key">Tenaga</span>
                    <span className="axis__val">{g.tenaga}</span>
                  </div>
                </div>

                {g.videoUrl && (
                  <a
                    className="btn btn--ghost btn--sm"
                    style={{ marginTop: 18 }}
                    href={g.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tonton video gerak
                    <IconArrow />
                  </a>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal variant="up" className="card" style={{ textAlign: 'center' }}>
            <h3 className="card__title">Catat hasil pengamatanmu</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Buka LKPD digital dan isi kolom arah, level, tenaga, serta busana penari.
            </p>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('lkpd')}>
              Isi LKPD Sekarang
              <IconArrow />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
