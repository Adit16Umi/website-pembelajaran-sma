import { useState } from 'react';
import { RUBRIK } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import illusApresiasi from '../assets/img/illus-astresiasi.svg';
import { IconArrow, IconStar } from './Icons';

const NILAI_AWAL = 3;

export default function ApresiasiSection({ onNavigate }) {
  const [skor, setSkor] = useState(() => Object.fromEntries(RUBRIK.map((r) => [r.name, NILAI_AWAL])));
  const [nilai] = useState(RUBRIK.map((r) => r.name));

  const total = RUBRIK.reduce((sum, r) => sum + (skor[r.name] ?? 0), 0);
  const maksimal = RUBRIK.reduce((sum, r) => sum + r.skor, 0);
  const persen = Math.round((total / maksimal) * 100);

  const pick = (row, value) => {
    setSkor((s) => ({ ...s, [row.name]: value }));
  };

  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Penilaian</span>
              <h2 className="sec__title">
                Apresiasi <span className="grad-text">Karya Kelas</span>
              </h2>
              <p className="sec__sub">
                Gunakan rubrik ini untuk menilai performance. Klik jumlah bintang pada setiap aspek, lalu
                lihat hasil penilaiannya.
              </p>
            </div>
            <span className="chip chip--gold">
              <IconStar /> Rubrik Penilaian
            </span>
          </Reveal>

          <div className="grid grid--2" style={{ alignItems: 'center', marginBottom: 40 }}>
            <Reveal variant="left" className="rubric">
              {RUBRIK.map((row, i) => (
                <Reveal className="rubricRow" key={row.name} variant="up" delay={i * 70}>
                  <div>
                    <div className="rubricRow__name">{row.name}</div>
                    <div className="rubricRow__desc">{row.desc}</div>
                  </div>
                  <div className="stars" role="group" aria-label={`Nilai ${row.name}`}>
                    {Array.from({ length: row.skor }, (_, k) => k + 1).map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`stars__item ${v <= (skor[row.name] ?? 0) ? 'stars__item--on' : ''}`}
                        onClick={() => pick(row, v)}
                        aria-label={`${v} bintang`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </Reveal>
              ))}
            </Reveal>

            <Reveal variant="right" delay={140}>
              <div className="card" style={{ textAlign: 'center' }}>
                <img
                  src={illusApresiasi}
                  alt="Ilustrasi piala penghargaan"
                  loading="lazy"
                  style={{ width: 180, margin: '0 auto 14px' }}
                />
                <div className="scoreBox__value">{persen}</div>
                <p className="card__text" style={{ marginTop: 6 }}>
                  Nilai rata-rata dari {total} poin (maksimal {maksimal})
                </p>
                <div className="bar">
                  <div className="bar__fill" style={{ width: `${persen}%` }} />
                </div>
                <p className="card__text" style={{ marginTop: 14 }}>
                  {persen >= 85
                    ? 'Luar biasa! Penampilan sangat matang dan konsisten.'
                    : persen >= 70
                      ? 'Bagus! Tinggal sedikit lagi untuk mencapai nilai terbaik.'
                      : 'Teruslah berlatih. Latihan berkala akan membuat tari tampil jauh lebih baik.'}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="sectionHead">
            <h3 className="sec__title" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
              Piala Kelas
            </h3>
            <span className="chip">Tersedia setelah refleksi diisi</span>
          </Reveal>

          <div className="podium">
            {nilai.slice(0, 3).map((name, i) => (
              <Reveal
                key={name || i}
                className={`podium__step ${i === 0 ? 'podium__step--1' : ''}`}
                variant="up"
                delay={i * 110}
              >
                <div className="podium__medal">{['🥇', '🥈', '🥉'][i]}</div>
                <div className="podium__place">Juara {i + 1}</div>
                <div className="podium__who">{name || 'Belum diisi'}</div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="card" style={{ marginTop: 34, textAlign: 'center' }}>
            <h3 className="card__title">Sudah menilai?</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Uji pemahamanmu lewat kuis pilihan ganda dan refleksi tertulis.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('evaluasi')}>
                Cek Pemahaman
                <IconArrow />
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('refleksi')}>
                Tulis Refleksi
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
