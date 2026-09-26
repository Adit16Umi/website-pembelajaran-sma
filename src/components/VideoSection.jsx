import { useState } from 'react';
import { VIDEO_PLAYLIST } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import { IconArrow, IconClock, IconPlay } from './Icons';

export default function VideoSection({ onNavigate }) {
  const [active, setActive] = useState(VIDEO_PLAYLIST[0]);
  const [played, setPlayed] = useState(false);

  const pick = (item) => {
    setActive(item);
    setPlayed(Boolean(item.src));
  };

  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 700 }}>
              <span className="eyebrow">Media Video</span>
              <h2 className="sec__title">
                Tonton &amp; Amati <span className="grad-text">Video Tari</span>
              </h2>
              <p className="sec__sub">
                Amati video Tari Pattu&apos;du Tommuane, lalu perhatikan dengan saksama unsur gerak,
                musik, busana, dan pola lantainya.
              </p>
            </div>
            <span className="chip chip--gold">
              <IconClock /> Durasi video pendek
            </span>
          </Reveal>

          <div className="videoWrap">
            <Reveal variant="zoom" className="videoFrame">
              {active.src ? (
                <iframe
                  src={active.src}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="videoFrame__inner">
                  <button
                    type="button"
                    className="videoFrame__play"
                    onClick={() => setPlayed(true)}
                    aria-label={`Putar ${active.title}`}
                  >
                    <IconPlay />
                  </button>
                  <span className="videoFrame__hint">
                    {played
                      ? 'Tautan video belum diisi. Tempel URL YouTube pada data VIDEO_PLAYLIST.'
                      : `Klik tombol putar — ${active.durasi}`}
                  </span>
                </div>
              )}
            </Reveal>

            <Reveal variant="up" delay={120} className="playlist">
              {VIDEO_PLAYLIST.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={`playlist__item ${active.id === v.id ? 'playlist__item--active' : ''}`}
                  onClick={() => pick(v)}
                >
                  <span className="playlist__thumb">
                    <IconPlay />
                  </span>
                  <span className="playlist__meta">
                    <span className="playlist__title">{v.title}</span>
                    <span className="playlist__sub">
                      {v.durasi} · {v.desc}
                    </span>
                  </span>
                </button>
              ))}
            </Reveal>
          </div>

          <Reveal variant="up" className="grid grid--3" style={{ marginTop: 34 }}>
            {['Amati arah gerak', 'Perhatikan level penari', 'Hitung ritme dan tenaga'].map((t, i) => (
              <div className="card card--gold" key={t}>
                <span className="card__num">{i + 1}</span>
                <h3 className="card__title">{t}</h3>
                <p className="card__text">
                  Tuliskan apa yang kamu lihat menggunakan kalimat lengkap pada LKPD digital.
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal variant="up" className="card" style={{ textAlign: 'center', marginTop: 22 }}>
            <h3 className="card__title">Sudah selesai mengamati?</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Lanjutkan ke halaman kearifan lokal untuk melihat nilai yang terkandung dalam tari ini.
            </p>
            <button type="button" className="btn btn--brand" onClick={() => onNavigate('kearifan')}>
              Lanjut ke Kearifan Lokal
              <IconArrow />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
