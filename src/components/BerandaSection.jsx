import { TUJUAN_PEMBELAJARAN, FITUR, STATISTIK, MARQUEE_TEKS } from '../data/dataTariPattudu';
import { useCountUp, useInView } from '../hooks/useInView';
import Reveal from './Reveal';
import heroDancer from '../assets/img/hero-dancer.svg';
import illusPenari from '../assets/img/illus-penari.svg';
import ornamen from '../assets/img/ornamen.svg';
import {
  IconArrow,
  IconBook,
  IconClipboard,
  IconHeart,
  IconLeaf,
  IconMove,
  IconPlay,
  IconSpark,
  IconStar,
  IconTarget
} from './Icons';

const IKON = {
  book: IconBook,
  spark: IconSpark,
  play: IconPlay,
  move: IconMove,
  leaf: IconLeaf,
  clipboard: IconClipboard,
  target: IconTarget,
  star: IconStar,
  heart: IconHeart
};

function Stat({ value, suffix, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const n = useCountUp(value, { start: inView, duration: 1500 + delay });

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">
        {n}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function BerandaSection({ onNavigate }) {
  return (
    <div className="page">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <Reveal variant="down">
              <span className="chip chip--live">
                <i className="dot" />
                Media Pembelajaran Interaktif · Seni Tari
              </span>
            </Reveal>

            <Reveal variant="up" delay={90}>
              <h1 className="hero__title">
                Menyusuri <span className="grad-text">Tari Pattu&apos;du</span> Tommuane
              </h1>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <p className="hero__lead">
                Jelajahi tari tradisional masyarakat Mandar khas Majene. Kenali unsur-unsur tari, amati
                geraknya, dan temukan nilai kearifan lokal yang terkandung di dalamnya — semuanya dalam satu
                media pembelajaran yang interaktif.
              </p>
            </Reveal>

            <Reveal variant="up" delay={260}>
              <div className="hero__actions">
                <button type="button" className="btn btn--primary" onClick={() => onNavigate('materi')}>
                  Mulai Belajar Materi
                  <IconArrow />
                </button>
                <button type="button" className="btn btn--ghost" onClick={() => onNavigate('video')}>
                  <IconPlay />
                  Tonton Video Tari
                </button>
              </div>
            </Reveal>

            <Reveal variant="up" delay={340}>
              <ul className="hero__stats">
                {STATISTIK.map((s, i) => (
                  <li key={s.label} style={{ listStyle: 'none' }}>
                    <Stat {...s} delay={i * 180} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={160} className="hero__art">
            <span className="hero__ring" aria-hidden="true" />
            <img className="hero__img" src={heroDancer} alt="Ilustrasi penari Tari Pattu'du Tommuane" width="400" height="477" />
            <div className="hero__floatChip hero__floatChip--a">
              <strong>Tommuane</strong>
              Penari laki-laki
            </div>
            <div className="hero__floatChip hero__floatChip--b">
              <strong>Budaya Mandar</strong>
              Majene, Sulawesi Barat
            </div>
          </Reveal>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...MARQUEE_TEKS, ...MARQUEE_TEKS].map((t, i) => (
              <span className="marquee__item" key={`${t}-${i}`}>
                <span className="marquee__diamond" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TUJUAN ---------------- */}
      <section className="sec sec--tinted">
        <div className="wrap">
          <img className="ornamen" src={ornamen} alt="" aria-hidden="true" />
          <Reveal className="sec__head sec__head--center" variant="up">
            <span className="eyebrow">Kompetensi</span>
            <h2 className="sec__title">Tujuan Pembelajaran</h2>
            <p className="sec__sub">
              Setelah mempelajari media ini, peserta didik diharapkan mampu mencapai kompetensi berikut.
            </p>
          </Reveal>

          <div className="grid grid--3">
            {TUJUAN_PEMBELAJARAN.map((t, i) => (
              <Reveal key={t} as="article" variant="up" delay={i * 80} className="card card--gold">
                <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="card__icon card__icon--gold">
                  <IconTarget />
                </span>
                <h3 className="card__title" style={{ fontSize: '16px' }}>
                  Tujuan {i + 1}
                </h3>
                <p className="card__text">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FITUR / PETA MEDIA ---------------- */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec__head" variant="left">
            <span className="eyebrow">Peta Media</span>
            <h2 className="sec__title">
              Delapan Menu, Satu Perjalanan <span className="grad-text">Belajar Budaya</span>
            </h2>
            <p className="sec__sub">
              Pilih bagian di bawah ini untuk mulai mengamati, mencatat, lalu merefleksikan apa yang kamu pelajari
              tentang Tari Pattu&apos;du Tommuane.
            </p>
          </Reveal>

          <div className="grid grid--4">
            {FITUR.map((f, i) => {
              const Icon = IKON[f.icon] ?? IconSpark;
              return (
                <Reveal key={f.id} as="article" variant="up" delay={i * 70} className="card">
                  <span className="card__icon">
                    <Icon />
                  </span>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.desc}</p>
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    style={{ marginTop: 16 }}
                    onClick={() => onNavigate(f.id)}
                  >
                    Buka <IconArrow />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- AJAKAN ---------------- */}
      <section className="sec" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <Reveal variant="zoom" className="card" style={{ textAlign: 'center', padding: 'clamp(30px, 5vw, 56px)' }}>
            <img
              src={illusPenari}
              alt="Dua penari Tari Pattu'du Tommuane"
              width="220"
              height="165"
              style={{ margin: '0 auto 18px', width: 190, filter: 'drop-shadow(0 18px 34px rgba(76,29,149,.55))' }}
            />
            <h2 className="sec__title" style={{ fontSize: 'clamp(24px, 3.4vw, 36px)' }}>
              Siap Menari Mulai <span className="grad-text">Hari Ini?</span>
            </h2>
            <p className="sec__sub" style={{ maxWidth: '62ch', marginInline: 'auto' }}>
              Amati video tari, isi lembar kerja peserta didik, lalu uji pemahamanmu melalui evaluasi.
              Setiap jawaban adalah bagian dari proses belajar, jadi tidak perlu ragu untuk mencoba.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn btn--brand" onClick={() => onNavigate('lkpd')}>
                Isi LKPD Digital
                <IconArrow />
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('evaluasi')}>
                Cek Pemahaman
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
