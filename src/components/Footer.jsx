import { MENU_FOOTER } from '../data/dataTariPattudu';
import Reveal from './Reveal';

const SOCIALS = [
  {
    label: 'Email',
    path: 'M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5zM3.5 7l8.5 6 8.5-6',
  },
  {
    label: 'Video',
    path: 'M2.5 6.5A1.5 1.5 0 0 1 4 5h10a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 14 19H4a1.5 1.5 0 0 1-1.5-1.5zM15.5 10l5-3v10l-5-3z',
  },
  {
    label: 'Situs sekolah',
    path: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.5 12h17M12 3c4 4.5 4 13.5 0 18-4-4.5-4-13.5 0-18z',
  },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <Reveal variant="up">
          <span className="eyebrow">Mari Kenali &amp; Hargai</span>
          <h3 className="footer__title">Tari Tradisional Bukan Sekadar Gerakan</h3>
          <p className="footer__text">
            Di dalam Tari Pattu&apos;du Tommuane terdapat cerita, nilai, identitas, dan pengetahuan budaya yang
            diwariskan dari generasi ke generasi. Melalui media ini siswa diharapkan tidak hanya mampu mengenal
            seni tari, tetapi juga memiliki kepedulian terhadap keberadaan budaya lokal.
          </p>
          <div className="socialRow">
            {SOCIALS.map((s) => (
              <span className="social" key={s.label} title={s.label} aria-label={s.label}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={90}>
          <h3 className="footer__title">Jelajahi</h3>
          <div className="footer__list">
            {MENU_FOOTER.map((m) => (
              <button key={m.id} type="button" className="footer__link" onClick={() => onNavigate(m.id)}>
                <span aria-hidden="true">◆</span>
                {m.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={180}>
          <h3 className="footer__title">Keterangan</h3>
          <div className="footer__list">
            <span className="footer__link" style={{ cursor: 'default' }}>
              <span aria-hidden="true">◆</span>
              Seni Tari · Kelas IX.D
            </span>
            <span className="footer__link" style={{ cursor: 'default' }}>
              <span aria-hidden="true">◆</span>
              Semester Ganjil 2025/2026
            </span>
            <span className="footer__link" style={{ cursor: 'default' }}>
              <span aria-hidden="true">◆</span>
              Majene, Sulawesi Barat
            </span>
            <span className="footer__link" style={{ cursor: 'default' }}>
              <span aria-hidden="true">◆</span>
              Dokumen Tari Pattu&apos;du Tommuane
            </span>
          </div>
        </Reveal>
      </div>

      <div className="wrap footer__bottom">
        <span>Media Pembelajaran Berbasis Website — SMP Negeri 2 Majene</span>
    
      </div>
    </footer>
  );
}
