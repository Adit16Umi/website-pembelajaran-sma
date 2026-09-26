import { useState } from 'react';
import { REFLEKSI_MOOD, REFLEKSI_PERTANYAAN } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import illusRefleksi from '../assets/img/illus-refleksi.svg';
import { IconCheck, IconHeart, IconSave } from './Icons';

const KUNCI = 'pattudu-refleksi';

export default function RefleksiSection({ onNavigate }) {
  const [mood, setMood] = useState(null);
  const [jawaban, setJawaban] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KUNCI) || '{}');
    } catch {
      return {};
    }
  });
  const [tersimpan, setTersimpan] = useState(false);

  const set = (key, value) => {
    setJawaban((j) => ({ ...j, [key]: value }));
    setTersimpan(false);
  };

  const simpan = () => {
    try {
      localStorage.setItem(KUNCI, JSON.stringify({ ...jawaban, mood }));
      setTersimpan(true);
    } catch {
      setTersimpan(false);
    }
  };

  return (
    <div className="page">
      <section className="sec sec--tinted">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Refleksi Belajar</span>
              <h2 className="sec__title">
                Apa yang Kamu <span className="grad-text">Pelajari?</span>
              </h2>
              <p className="sec__sub">
                Refleksi menutup siklus belajar. Tulis jawabanmu sejujur mungkin — tidak ada jawaban yang
                salah selama ditulis dengan bahasa sendiri.
              </p>
            </div>
            <img
              src={illusRefleksi}
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{ width: 92, opacity: 0.9 }}
            />
          </Reveal>

          <Reveal as="article" className="card" variant="zoom">
            <span className="card__icon card__icon--gold">
              <IconHeart />
            </span>
            <h3 className="card__title">Bagaimana perasaanmu setelah belajar?</h3>
            <div className="moodRow">
              {REFLEKSI_MOOD.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  className={`mood ${mood === m.label ? 'mood--on' : ''}`}
                  onClick={() => setMood(m.label)}
                >
                  <span className="mood__emoji">{m.emoji}</span>
                  {m.label}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              {REFLEKSI_PERTANYAAN.map((q, i) => (
                <div className="field" key={q}>
                  <label className="field__label" htmlFor={`refleksi-${i}`}>
                    <span className="field__no">{i + 1}</span>
                    {q}
                  </label>
                  <textarea
                    id={`refleksi-${i}`}
                    className="textarea"
                    value={jawaban[i] || ''}
                    onChange={(e) => set(String(i), e.target.value)}
                    placeholder="Tuliskan jawabanmu di sini..."
                  />
                </div>
              ))}
            </div>

            <div className="toolbar">
              <button type="button" className="btn btn--primary" onClick={simpan}>
                <IconSave /> Simpan Refleksi
              </button>
              <span className="toolbar__note">Jawaban tersimpan otomatis di perangkat ini.</span>
            </div>

            {tersimpan && (
              <div className="toast">
                <IconCheck /> Refleksi kamu berhasil disimpan. Terima kasih sudah belajar dengan sungguh-sungguh.
              </div>
            )}
          </Reveal>

          <Reveal variant="up" className="card" style={{ marginTop: 24, textAlign: 'center' }}>
            <h3 className="card__title">Satu langkah lagi</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Kembali ke beranda untuk meninjau semua modul, atau ulangi kuis untuk meningkatkan pemahamanmu.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn--brand" onClick={() => onNavigate('beranda')}>
                Kembali ke Beranda
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('evaluasi')}>
                Ulangi Kuis
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
