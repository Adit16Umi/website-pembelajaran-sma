import { useState } from 'react';
import Reveal from './Reveal';
import { IconArrow, IconCheck, IconRefresh, IconSave } from './Icons';

const KUNCI = 'pattudu-lkpd';

const PERTANYAAN_1 = [
  'Apa yang dimaksud dengan Tari Pattu’d Tommuane?',
  'Siapa yang membawakan tari tersebut?',
  'Dari kebudayaan masyarakat mana tari tersebut berasal?',
  'Sebutkan unsur-unsur tari yang kamu amati.',
  'Mengapa Tari Pattu’d Tommuane dapat digunakan dalam pembelajaran seni tari?'
];

const PERTANYAAN_2 = [
  { key: 'gerak', label: 'Gerak' },
  { key: 'musik', label: 'Musik' },
  { key: 'busana', label: 'Busana' },
  { key: 'polaLantai', label: 'Pola Lantai' },
  { key: 'nilaiBudaya', label: 'Nilai Budaya' }
];

const KOSONG = { a1: {}, a2: {} };

function muatAwal() {
  try {
    const raw = JSON.parse(localStorage.getItem(KUNCI) || 'null');
    return raw && raw.a1 && raw.a2 ? raw : KOSONG;
  } catch {
    return KOSONG;
  }
}

export default function LkpdSection({ onNavigate }) {
  const [data, setData] = useState(muatAwal);
  const [tersimpan, setTersimpan] = useState(false);

  const setA1 = (key, value) => {
    setData((d) => ({ ...d, a1: { ...d.a1, [key]: value } }));
    setTersimpan(false);
  };

  const setA2 = (key, value) => {
    setData((d) => ({ ...d, a2: { ...d.a2, [key]: value } }));
    setTersimpan(false);
  };

  const simpan = () => {
    try {
      localStorage.setItem(KUNCI, JSON.stringify(data));
      setTersimpan(true);
    } catch {
      setTersimpan(false);
    }
  };

  const reset = () => {
    setData(KOSONG);
    setTersimpan(false);
  };

  const terisi = Object.values(data.a1).filter(Boolean).length + Object.values(data.a2).filter(Boolean).length;
  const total = PERTANYAAN_1.length + PERTANYAAN_2.length;

  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Lembar Kerja</span>
              <h2 className="sec__title">
                LKPD <span className="grad-text">Digital</span>
              </h2>
              <p className="sec__sub">
                Isi lembar kerja peserta didik ini setelah mengamati video Tari Pattu&apos;du Tommuane.
                Jawabanmu tersimpan di perangkat ini secara lokal.
              </p>
            </div>
            <span className="chip chip--violet">
              {terisi}/{total} kolom terisi
            </span>
          </Reveal>

          <Reveal as="article" className="quiz" variant="up">
            <h3 className="quiz__q" style={{ marginBottom: 22 }}>
              <span className="quiz__no">1</span>
              Aktivitas 1 — Mengenal Tari
            </h3>

            {PERTANYAAN_1.map((q, i) => (
              <div className="field" key={q}>
                <label className="field__label" htmlFor={`a1-${i}`}>
                  <span className="field__no">{i + 1}</span>
                  {q}
                </label>
                <textarea
                  id={`a1-${i}`}
                  className="textarea"
                  value={data.a1[i] || ''}
                  onChange={(e) => setA1(i, e.target.value)}
                  placeholder="Tuliskan jawabanmu..."
                />
              </div>
            ))}
          </Reveal>

          <Reveal as="article" className="quiz" variant="up" delay={80}>
            <h3 className="quiz__q" style={{ marginBottom: 10 }}>
              <span className="quiz__no">2</span>
              Aktivitas 2 — Analisis Video
            </h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Setelah menonton video Tari Pattu&apos;du Tommuane, tuliskan hasil pengamatanmu.
            </p>

            <div className="rowSplit">
              {PERTANYAAN_2.map((p) => (
                <div className="field" key={p.key} style={{ marginTop: 0 }}>
                  <label className="field__label" htmlFor={`a2-${p.key}`} style={{ fontSize: 13 }}>
                    <span className="field__no" style={{ width: 22, height: 22, fontSize: 11 }}>
                      {p.label.charAt(0)}
                    </span>
                    Pengamatan {p.label.toLowerCase()}
                  </label>
                  <input
                    id={`a2-${p.key}`}
                    type="text"
                    className="input"
                    value={data.a2[p.key] || ''}
                    onChange={(e) => setA2(p.key, e.target.value)}
                    placeholder={`Tulis pengamatan ${p.label.toLowerCase()}...`}
                  />
                </div>
              ))}
            </div>

            <div className="toolbar">
              <button type="button" className="btn btn--primary" onClick={simpan}>
                <IconSave /> Simpan Jawaban
              </button>
              <button type="button" className="btn btn--ghost" onClick={reset}>
                <IconRefresh /> Kosongkan
              </button>
              <span className="toolbar__note">Data disimpan di localStorage perangkatmu.</span>
            </div>

            {tersimpan && (
              <div className="toast">
                <IconCheck /> Jawaban LKPD kamu berhasil disimpan.
              </div>
            )}
          </Reveal>

          <Reveal variant="up" className="card" style={{ textAlign: 'center' }}>
            <h3 className="card__title">Lanjut ke evaluasi</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Setelah mengisi LKPD, uji pemahamanmu dengan kuis pilihan ganda.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('evaluasi')}>
                Kerjakan Evaluasi
                <IconArrow />
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('gerak')}>
                Kembali ke Gerak Tari
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
