import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScrolled } from '../hooks/useInView';
import logoDancer from '../assets/img/illus-penari.svg';

const MENUS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'materi', label: 'Materi' },
  { id: 'video', label: 'Video Tari' },
  { id: 'gerak', label: 'Gerak Tari' },
  { id: 'kearifan', label: 'Kearifan Lokal' },
  { id: 'apresiasi', label: 'Apresiasi' },
  { id: 'lkpd', label: 'LKPD' },
  { id: 'evaluasi', label: 'Evaluasi' },
  { id: 'refleksi', label: 'Refleksi' },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const active = menu.querySelector('.nav__link--active');
    if (!active) {
      setPill((p) => ({ ...p, ready: false }));
      return;
    }
    setPill({ left: active.offsetLeft, width: active.offsetWidth, ready: true });
  }, [activeTab]);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const go = (id) => {
    setActiveTab(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner wrap">
        <button type="button" className="nav__brand" onClick={() => go('beranda')} aria-label="Kembali ke Beranda">
          <span className="nav__logo">
            <img src={logoDancer} alt="" width="30" height="30" />
          </span>
          <span className="nav__brandText">
            <strong>Tari Pattu&apos;du Tommuane</strong>
            <small>SMP Negeri 2 Majene · Kelas IX.D</small>
          </span>
        </button>

        <nav className="nav__menu" ref={menuRef} aria-label="Navigasi utama">
          {pill.ready && (
            <span
              className="nav__pill"
              style={{ transform: `translateX(${pill.left}px)`, width: `${pill.width}px` }}
              aria-hidden="true"
            />
          )}
          {MENUS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => go(m.id)}
              className={`nav__link ${activeTab === m.id ? 'nav__link--active' : ''}`}
              aria-current={activeTab === m.id ? 'page' : undefined}
            >
              {m.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav__mobile" data-open={open}>
        <div className="nav__mobileGrid wrap">
          {MENUS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => go(m.id)}
              className={`nav__mobileLink ${activeTab === m.id ? 'nav__mobileLink--active' : ''}`}
              aria-current={activeTab === m.id ? 'page' : undefined}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
