import { useState } from 'react';
import { SOAL_PILGAN } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import { IconCheck, IconRefresh, IconTarget } from './Icons';

export default function EvaluasiSection({ onNavigate }) {
  const [jawaban, setJawaban] = useState({});
  const [hasil, setHasil] = useState(null);
  const [refleksi, setRefleksi] = useState('');

  const periksa = () => {
    let benar = 0;
    SOAL_PILGAN.forEach((s) => {
      if (jawaban[s.id] === s.kunci) benar++;
    });
    setHasil({ benar, total: SOAL_PILGAN.length, persen: Math.round((benar / SOAL_PILGAN.length) * 100) });
  };

  const reset = () => {
    setJawaban({});
    setHasil(null);
  };

  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Evaluasi Pembelajaran</span>
              <h2 className="sec__title">
                Cek <span className="grad-text">Pemahamanmu</span>
              </h2>
              <p className="sec__sub">
                Jawab seluruh pertanyaan berikut, lalu tekan tombol periksa untuk melihat skormu.
              </p>
            </div>
            <span className="chip chip--gold">
              <IconTarget /> {SOAL_PILGAN.length} soal
            </span>
          </Reveal>

          <Reveal as="article" className="quiz" variant="up">
            <h3 className="quiz__q" style={{ marginBottom: 20 }}>
              <span className="quiz__no">A</span>
              Pilihan Ganda
            </h3>

            {SOAL_PILGAN.map((s, i) => (
              <div className="field" key={s.id} style={{ marginTop: i === 0 ? 0 : 26 }}>
                <p className="quiz__q" style={{ marginBottom: 12 }}>
                  <span className="quiz__no">{i + 1}</span>
                  {s.soal}
                </p>
                <div className="opts">
                  {s.pilihan.map((p) => (
                    <label
                      key={p.id}
                      className={`opt ${jawaban[s.id] === p.id ? 'opt--sel' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`soal-${s.id}`}
                        value={p.id}
                        checked={jawaban[s.id] === p.id}
                        onChange={() => setJawaban((j) => ({ ...j, [s.id]: p.id }))}
                        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                      />
                      <span className="opt__mark">{p.id}</span>
                      <span>{p.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="toolbar">
              <button type="button" className="btn btn--primary" onClick={periksa}>
                <IconCheck /> Periksa Jawaban
              </button>
              <button type="button" className="btn btn--ghost" onClick={reset}>
                <IconRefresh /> Ulangi
              </button>
            </div>

            {hasil && (
              <div className="scoreBox">
                <div className="scoreBox__top">
                  <div>
                    <div className="scoreBox__value">{hasil.persen}</div>
                    <div className="scoreBox__label">
                      Kamu menjawab benar {hasil.benar} dari {hasil.total} soal.
                    </div>
                  </div>
                  <span className="chip chip--gold">
                    {hasil.persen >= 80
                      ? 'Sangat Baik'
                      : hasil.persen >= 60
                        ? 'Cukup Baik'
                        : 'Perlu Diulang'}
                  </span>
                </div>
                <div className="bar">
                  <div className="bar__fill" style={{ width: `${hasil.persen}%` }} />
                </div>
                <p className="card__text" style={{ marginTop: 14 }}>
                  {hasil.persen >= 80
                    ? 'Keren! Pemahamanmu tentang Tari Pattu’d Tommuane sudah sangat baik.'
                    : hasil.persen >= 60
                      ? 'Bagus. Coba baca ulang modul materi agar pemahamanmu makin lengkap.'
                      : 'Jangan menyerah. Baca kembali modul materi, lalu coba lagi.'}
                </p>
              </div>
            )}
          </Reveal>

          <Reveal as="article" className="quiz" variant="up" delay={80}>
            <h3 className="quiz__q" style={{ marginBottom: 10 }}>
              <span className="quiz__no">B</span>
              Evaluasi Reflektif
            </h3>
            <p className="card__text" style={{ marginBottom: 16 }}>
              Tuliskan dalam 3–5 kalimat: <em>“Menurut saya, Tari Pattu&apos;du Tommuane penting dipelajari di sekolah karena ….”</em>
            </p>
            <textarea
              className="textarea"
              style={{ minHeight: 150 }}
              value={refleksi}
              onChange={(e) => setRefleksi(e.target.value)}
              placeholder="Tuliskan pendapatmu di sini..."
            />
            <div className="toolbar">
              <button type="button" className="btn btn--brand" onClick={() => onNavigate('refleksi')}>
                Lanjut ke Halaman Refleksi
              </button>
              <span className="toolbar__note">{refleksi.trim().length} karakter ditulis.</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
