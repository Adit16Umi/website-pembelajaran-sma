import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BerandaSection from './components/BerandaSection';
import MateriSection from './components/MateriSection';
import VideoSection from './components/VideoSection';
import GerakSection from './components/GerakSection';
import KearifanSection from './components/KearifanSection';
import ApresiasiSection from './components/ApresiasiSection';
import LkpdSection from './components/LkpdSection';
import EvaluasiSection from './components/EvaluasiSection';
import RefleksiSection from './components/RefleksiSection';
import Footer from './components/Footer';
import { Aurora, Particles } from './components/Background';
import { BackToTop, ScrollProgress } from './components/ScrollProgress';
import './App.css';

const HALAMAN = {
  beranda: BerandaSection,
  materi: MateriSection,
  video: VideoSection,
  gerak: GerakSection,
  kearifan: KearifanSection,
  apresiasi: ApresiasiSection,
  lkpd: LkpdSection,
  evaluasi: EvaluasiSection,
  refleksi: RefleksiSection
};

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');
  const Halaman = HALAMAN[activeTab] ?? BerandaSection;

  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('.card, .rubricRow, .nav__link');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  const go = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Aurora />
      <Particles />
      <ScrollProgress />

      <Navbar activeTab={activeTab} setActiveTab={go} />

      <main>
        <Halaman key={activeTab} onNavigate={go} />
      </main>

      <Footer onNavigate={go} />
      <BackToTop />
    </>
  );
}
