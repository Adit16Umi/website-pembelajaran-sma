import { useState } from 'react';
import { MATERI_LIST } from '../data/dataTariPattudu';
import Reveal from './Reveal';
import { IconArrow, IconDown, IconSpark } from './Icons';

function Flow({ items }) {
  return (
    <div className="flow">
      <strong style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>
        Alur
      </strong>
      {items.map((item, i) => (
        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="flow__node" style={{ animationDelay: `${i * 110}ms` }}>
            {item}
          </span>
          {i < items.length - 1 && <span className="flow__arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

function Modul({ mat, open, onToggle, index }) {
  return (
    <Reveal as="article" className="mat" data-open={open} delay={Math.min(index * 60, 240)}>
      <button type="button" className="mat__head" onClick={onToggle} aria-expanded={open}>
        <span className={`mat__badge ${index % 2 ? 'mat__badge--gold' : ''}`}>{index + 1}</span>
        <span className="mat__titles">
          <span className="mat__title">{mat.title}</span>
          <span className="mat__hint">{mat.hint}</span>
        </span>
        <span className="mat__chev">
          <IconDown />
        </span>
      </button>

      <div className="mat__body">
        <div className="mat__bodyInner">
          <div className="mat__content">
            {mat.image && (
              <img
                src={mat.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                style={{ width: '100%', maxWidth: 340, margin: '18px auto 4px', opacity: 0.9 }}
              />
            )}

            {mat.content?.map((c) => (
              <div className="mat__block" key={c.subtitle}>
                <h4 className="mat__sub">{c.subtitle}</h4>
                <p className="mat__text">{c.text}</p>
              </div>
            ))}

            {mat.items && (
              <div className="specList">
                {mat.items.map((item) => (
                  <div className="spec" key={item.name}>
                    <span className="spec__key">{item.name}</span>
                    <span className="spec__val">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}

            {mat.values && (
              <div className="grid grid--2" style={{ marginTop: 18 }}>
                {mat.values.map((v) => (
                  <div className="card card--gold" key={v.title} style={{ padding: 20 }}>
                    <h4 className="card__title" style={{ fontSize: 16 }}>
                      {v.title}
                    </h4>
                    <p className="card__text">{v.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {mat.flow && <Flow items={mat.flow} />}

            {mat.funFact && (
              <div className="callout">
                <span className="callout__title">
                  <IconSpark />
                  Tahukah Kamu?
                </span>
                {mat.funFact}
              </div>
            )}

            {mat.activity && (
              <div className="callout callout--info">
                <span className="callout__title">Aktivitas Mengamati</span>
                {mat.activity}
              </div>
            )}

            {mat.note && <p className="note">{mat.note}</p>}
            {mat.academicNote && <p className="note">{mat.academicNote}</p>}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function MateriSection({ onNavigate }) {
  const [openId, setOpenId] = useState('materi-1');

  return (
    <div className="page">
      <section className="sec">
        <div className="wrap">
          <Reveal className="sectionHead">
            <div style={{ maxWidth: 680 }}>
              <span className="eyebrow">Modul Belajar</span>
              <h2 className="sec__title">
                Lima Modul <span className="grad-text">Tari Pattu&apos;du Tommuane</span>
              </h2>
              <p className="sec__sub">
                Klik judul modul untuk membuka isinya. Materi disusun berurutan dari pengertian, latar
                belakang, ciri khas, unsur tari, hingga nilai kearifan lokal.
              </p>
            </div>
            <span className="chip chip--violet">
              {MATERI_LIST.length} modul · klik untuk membuka
            </span>
          </Reveal>

          {MATERI_LIST.map((mat, i) => (
            <Modul
              key={mat.id}
              mat={mat}
              index={i}
              open={openId === mat.id}
              onToggle={() => setOpenId(openId === mat.id ? null : mat.id)}
            />
          ))}

          <Reveal variant="up" className="card" style={{ textAlign: 'center' }}>
            <h3 className="card__title">Sudah paham materinya?</h3>
            <p className="card__text" style={{ marginBottom: 18 }}>
              Lanjutkan dengan mengamati video tari, lalu catat hasil pengamatanmu pada LKPD digital.
            </p>
            <button type="button" className="btn btn--brand" onClick={() => onNavigate('video')}>
              Lanjut ke Video Tari
              <IconArrow />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
